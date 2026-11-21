/**
 * Що тут буде:
 * 1. Головний кінематографічний екран у стилі Streaming Hero з фоновим постером з TMDB.
 * 2. Основні цільові дії (CTA): створення нової приватної кімнати, вхід за кодом запрошення
 *    або перехід до JWT-авторизації (для Гостя).
 * 3. Кнопка швидкого перегляду трейлера та ключові метрики платформи.
 */

import { Plus, KeyRound, Sparkles } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section id="top" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badges">
            <span className="hero-tag">
              <Sparkles size={13} />
              Приватні кіновечори без повторів
            </span>
          </div>

          <h1 className="hero-title">
            Обирайте фільм для компанії за хвилину, а не за годину
          </h1>

          <div className="hero-meta">
            <span>Ізольовані кімнати</span>
            <span className="hero-meta-dot" />
            <span>Живе голосування 1–5 ★</span>
            <span className="hero-meta-dot" />
            <span>Список «Переглянуто»</span>
          </div>

          <p className="hero-description">
            Створюйте закриту кімнату за кодом запрошення, додавайте стрічки з бази TMDB
            та голосуйте разом — уже переглянуті фільми більше не заважатимуть вибору.
          </p>

          <div className="hero-actions">
            <button type="button" className="btn-primary">
              <Plus size={18} />
              <span>Створити кімнату</span>
            </button>

            <button type="button" className="btn-secondary">
              <KeyRound size={17} />
              <span>Увійти за кодом</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}