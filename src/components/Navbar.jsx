import { Film, Clapperboard, LogIn, UserPlus } from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <a href="#top" className="navbar-brand">
            <div className="brand-icon">
              <Film size={20} />
            </div>
            <span className="brand-title">
              Kino<span className="brand-accent">Vote</span>
            </span>
          </a>

          <a href="#library" className="btn-nav-library">
            <Clapperboard size={15} />
            <span>Бібліотека</span>
          </a>
        </div>

        <div className="navbar-auth-group">
          <button
            type="button"
            className="btn-login"
            onClick={() => onOpenAuth('login')}
          >
            <LogIn size={15} />
            <span>Увійти</span>
          </button>

          <button
            type="button"
            className="btn-register"
            onClick={() => onOpenAuth('register')}
          >
            <UserPlus size={15} />
            <span>Реєстрація</span>
          </button>
        </div>
      </div>
    </header>
  );
}