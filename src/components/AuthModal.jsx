import { useEffect } from 'react';
import { X, Film, LogIn, UserPlus, User, Mail, Lock } from 'lucide-react';

export default function AuthModal({ mode, onSwitchMode, onClose }) {
  useEffect(() => {
    if (!mode) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, onClose]);

  if (!mode) return null;

  const isRegister = mode === 'register';

  const handleSubmit = (event) => {
    event.preventDefault();
    // Тут підключимо відправку запиту на Django REST Framework API
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top">
          <div className="modal-brand">
            <div className="modal-brand-icon">
              <Film size={19} />
            </div>
            <div>
              <h2 className="modal-title">
                {isRegister ? 'Створення акаунту' : 'Вхід у KinoVote'}
              </h2>
              <p className="modal-subtitle">
                {isRegister
                  ? 'Зареєструйтесь, щоб створювати кімнати та голосувати'
                  : 'Увійдіть, щоб повернутися до своїх кіновечорів'}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Закрити вікно"
          >
            <X size={17} />
          </button>
        </div>

        <div className="modal-tabs">
          <span
            className={`modal-tab-slider ${
              isRegister ? 'modal-tab-slider-right' : ''
            }`}
          />

          <button
            type="button"
            className={`modal-tab ${!isRegister ? 'modal-tab-active' : ''}`}
            onClick={() => onSwitchMode('login')}
          >
            <LogIn size={14} />
            <span>Вхід</span>
          </button>

          <button
            type="button"
            className={`modal-tab ${isRegister ? 'modal-tab-active' : ''}`}
            onClick={() => onSwitchMode('register')}
          >
            <UserPlus size={14} />
            <span>Реєстрація</span>
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isRegister && (
            <div className="form-group">
              <label className="form-label" htmlFor="auth-username">
                Ім’я або нікнейм
              </label>
              <div className="form-input-wrap">
                <User size={16} />
                <input
                  id="auth-username"
                  type="text"
                  className="form-input"
                  placeholder="Введіть нікнейм"
                  required
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label className="form-label" htmlFor="auth-email">
              Електронна пошта
            </label>
            <div className="form-input-wrap">
              <Mail size={16} />
              <input
                id="auth-email"
                type="email"
                className="form-input"
                placeholder="name@example.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="auth-password">
              Пароль
            </label>
            <div className="form-input-wrap">
              <Lock size={16} />
              <input
                id="auth-password"
                type="password"
                className="form-input"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button type="submit" className="form-submit-btn">
            {isRegister ? <UserPlus size={17} /> : <LogIn size={17} />}
            <span>{isRegister ? 'Зареєструватися' : 'Увійти'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}