import type { Streamer, StreamerStatus } from '../types';

type ChessStreamersResponse = {
  streamers?: Array<{
    username?: string;
    name?: string;
    url?: string;
    twitchUrl?: string | null;
  }>;
};

type ChessPlayerResponse = {
  username?: string;
  name?: string;
  avatar?: string;
};

type ChessOnlineResponse = {
  online?: boolean;
  is_online?: boolean;
};

const CHESS_API_BASE = 'https://api.chess.com/pub';

function normalizeUsername(value: string | undefined): string | null {
  if (!value) {
    return null;
  }

  const rawValue = value.trim();
  if (!rawValue) {
    return null;
  }

  const urlMatch = rawValue.match(/(?:\/)(?:player|streamer|profile)\/([^/?#]+)/i);
  if (urlMatch?.[1]) {
    return urlMatch[1];
  }

  const directMatch = rawValue.match(/([a-zA-Z0-9_-]+)$/);
  return directMatch ? directMatch[1] : null;
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return (await response.json()) as T;
}

export async function fetchStreamers(): Promise<Streamer[]> {
  const response = await fetchJson<ChessStreamersResponse>(`${CHESS_API_BASE}/streamers`);
  const rawStreamers = Array.isArray(response.streamers) ? response.streamers : [];

  if (!rawStreamers.length) {
    return [];
  }

  const streamers = await Promise.all(
    rawStreamers.slice(0, 18).map(async (streamer): Promise<Streamer | null> => {
      const username = normalizeUsername(streamer.username ?? streamer.name ?? streamer.url);

      if (!username) {
        return null;
      }

      const twitchUrl =
        streamer.twitchUrl?.trim() ||
        (streamer.url && streamer.url.includes('twitch.tv') ? streamer.url : `https://www.twitch.tv/${username}`);

      try {
        const [playerResult, onlineResult] = await Promise.allSettled([
          fetchJson<ChessPlayerResponse>(`${CHESS_API_BASE}/player/${username}`),
          fetchJson<ChessOnlineResponse>(`${CHESS_API_BASE}/player/${username}/is-online`),
        ]);

        const playerData = playerResult.status === 'fulfilled' ? playerResult.value : null;
        const onlineData = onlineResult.status === 'fulfilled' ? onlineResult.value : null;

        const displayName = playerData?.name || streamer.name || username;
        const avatar = playerData?.avatar ?? null;
        const status: StreamerStatus = onlineData?.online ?? onlineData?.is_online ? 'live' : 'offline';

        return {
          username,
          displayName,
          avatar,
          status,
          twitchUrl,
        };
      } catch {
        return {
          username,
          displayName: streamer.name || username,
          avatar: null,
          status: 'offline',
          twitchUrl,
        };
      }
    }),
  );

  return streamers.filter((item): item is Streamer => item !== null);
}
