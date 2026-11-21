import { Film, Sparkles, ShieldCheck, Star } from 'lucide-react';
/**
 * Що тут буде:
 * 1. Головний контейнер стану застосунку (поточна роль, список ізольованих кімнат, активна кімната, JWT-токен).
 * 2. Обробники бізнес-логіки: створення/вхід у кімнату, додавання фільмів із TMDB, голосування,
 *    перенесення переможця у список «Переглянуто» та керування учасниками.
 * 3. Маршрутизація між головним екраном (HeroBanner + RoomsDashboard) та робочим простором (RoomWorkspace).
 */

/** Додала тестовий екран перевірки теми*/
export default function App() {
  return (
    <div className="preview-layout">
      <div className="preview-box">
        <div className="preview-header">
          <div className="brand-icon-box">
            <Film size={20} />
          </div>
          <div>
            <h1 className="brand-title">
              Kino<span className="brand-accent">Vote</span>
            </h1>
            <p className="brand-subtitle">Усі стилі винесено в src/index.css</p>
          </div>
        </div>

        <div className="preview-card">
          <div className="preview-card-top">
            <span className="preview-card-label">
              <Sparkles size={14} />
              Обводки та скляний ефект
            </span>
            <span className="badge-gold">
              <Star size={12} /> 5.0
            </span>
          </div>
          <p className="preview-card-text">
            Вітаємо на нашому веб-застосунку Kino-Vote! 
            Тут ви можете створювати кімнати для голосування за фільми, додавати фільми з TMDB, 
            голосувати за улюблені та керувати учасниками. Насолоджуйтесь переглядом та обговоренням фільмів разом із друзями!
          </p>
        </div>

        <div className="preview-status">
          <ShieldCheck size={16} />
          <span>CSS-архітектура налаштована</span>
        </div>
      </div>
    </div>
  );
}