export type StreamerStatus = 'live' | 'offline';
export type Filter = 'all' | 'live' | 'offline';

export interface Streamer {
  username: string;
  displayName: string;
  avatar: string | null;
  status: StreamerStatus;
  twitchUrl: string;
}
