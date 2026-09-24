import type { StreamerStatus } from '../types';

interface StatusBadgeProps {
  status: StreamerStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const label = status === 'live' ? 'Ao vivo' : 'Offline';

  return (
    <span className={`status-badge ${status}`} aria-live="polite">
      <span className="status-dot" aria-hidden="true" />
      {label}
    </span>
  );
}
