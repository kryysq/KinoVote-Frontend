/**
 * Що тут буде:
 * 1. Верхня навігаційна панель із логотипом KinoVote та кнопкою повернення на головну.
 * 2. Інтерактивний перемикач ролей (Гість / Користувач / Адмін кімнати / Суперадмін) для демонстрації прав.
 * 3. Індикатор активної JWT-сесії, кнопка входу/виходу та швидкий доступ до панелі модерації для суперадміна.
 */

import { Film, LogIn, Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="navbar-brand">
          <div className="brand-icon">
            <Film size={20} />
          </div>
          <span className="brand-title">
            Kino<span className="brand-accent">Vote</span>
          </span>
        </a>

        <div className="navbar-actions">
          <div className="user-pill">
            <span className="user-avatar">КІ</span>
            <span className="user-name">Крістіна Іваненко</span>
            <span className="user-role-tag">Адмін кімнати</span>
          </div>

          <button type="button" className="btn-ghost">
            <Shield size={15} />
            <span>Модерація</span>
          </button>

          <button type="button" className="btn-ghost">
            <LogIn size={15} />
            <span>Увійти</span>
          </button>
        </div>
      </div>
    </header>
  );
}
