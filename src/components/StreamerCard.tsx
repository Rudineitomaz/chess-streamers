import { StatusBadge } from './StatusBadge';
import type { Streamer } from '../types';

interface StreamerCardProps {
  streamer: Streamer;
}

export function StreamerCard({ streamer }: StreamerCardProps) {
  const initials = streamer.displayName
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="streamer-card">
      <div className="streamer-avatar" aria-label={`Avatar de ${streamer.displayName}`}>
        {streamer.avatar ? (
          <img src={streamer.avatar} alt={streamer.displayName} />
        ) : (
          <span>{initials || 'CH'}</span>
        )}
      </div>

      <div className="streamer-info">
        <h2>{streamer.displayName}</h2>
        <StatusBadge status={streamer.status} />
      </div>

      {streamer.twitchUrl ? (
        <a
          className="twitch-link"
          href={streamer.twitchUrl}
          target="_blank"
          rel="noreferrer noopener"
        >
          Ver na Twitch
        </a>
      ) : (
        <span className="twitch-link disabled">Canal indisponível</span>
      )}
    </article>
  );
}
