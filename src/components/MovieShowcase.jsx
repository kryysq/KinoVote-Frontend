import { Film, Star, Database } from 'lucide-react';

export default function MovieShowcase() {
  const slots = [1, 2, 3, 4];

  return (
    <section id="library" className="library-section">
      <div className="library-header">
        <div>
          <h2 className="library-title">Бібліотека фільмів</h2>
          <p className="library-subtitle">
            Слоти для карток фільмів — дані автоматично завантажуватимуться з бекенду TMDB
          </p>
        </div>
      </div>

      <div className="movies-grid">
        {slots.map((slot) => (
          <article key={slot} className="movie-frame-card">
            <div className="movie-frame-poster">
              <span className="poster-badge-slot">
                <Star size={11} />
                TMDB
              </span>

              <div className="poster-icon-ring">
                <Film size={26} />
              </div>
              <span className="poster-slot-caption">Рамка постера #{slot}</span>
            </div>

            <div className="movie-frame-footer">
              <div className="skeleton-title" />
              <div className="skeleton-meta-row">
                <div className="skeleton-genre" />
                <div className="skeleton-year" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}