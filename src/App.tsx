import { useEffect, useMemo, useState } from 'react';
import { StreamerCard } from './components/StreamerCard';
import { fetchStreamers } from './services/chess';
import type { Filter, Streamer } from './types';

const filterOptions: Array<{ value: Filter; label: string }> = [
  { value: 'all', label: 'Todos' },
  { value: 'live', label: 'Ao vivo' },
  { value: 'offline', label: 'Offline' },
];

export default function App() {
  const [streamers, setStreamers] = useState<Streamer[]>([]);
  const [filter, setFilter] = useState<Filter>('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadStreamers() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchStreamers();

        if (active) {
          setStreamers(data);
        }
      } catch {
        if (active) {
          setError('Não foi possível carregar os streamers no momento.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadStreamers();

    return () => {
      active = false;
    };
  }, []);

  const filteredStreamers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return streamers.filter((streamer) => {
      const matchesFilter = filter === 'all' || streamer.status === filter;
      const matchesSearch =
        !query ||
        streamer.displayName.toLowerCase().includes(query) ||
        streamer.username.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [filter, search, streamers]);

  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">Chess Streamers</p>
        <h1>Streamers de xadrez em destaque</h1>
      </header>

      <section className="toolbar" aria-label="Busca e filtros de streamers">
        <label className="search-field" htmlFor="streamer-search">
          <span className="sr-only">Buscar streamer</span>
          <input
            id="streamer-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar streamer..."
            aria-label="Buscar streamer"
          />
        </label>

        <div className="filter-group" role="tablist" aria-label="Filtro de streamers">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={filter === option.value ? 'active' : ''}
              onClick={() => setFilter(option.value)}
              aria-pressed={filter === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      </section>

      {loading ? (
        <p className="status-message loading" aria-live="polite">
          Carregando streamers...
        </p>
      ) : null}

      {!loading && error ? (
        <p className="status-message error" aria-live="assertive">
          {error}
        </p>
      ) : null}

      {!loading && !error && !filteredStreamers.length ? (
        <p className="status-message empty" aria-live="polite">
          Nenhum streamer encontrado com os critérios informados.
        </p>
      ) : null}

      {!loading && !error && filteredStreamers.length ? (
        <section className="streamers-grid" aria-live="polite">
          {filteredStreamers.map((streamer) => (
            <StreamerCard key={streamer.username} streamer={streamer} />
          ))}
        </section>
      ) : null}
    </main>
  );
}
