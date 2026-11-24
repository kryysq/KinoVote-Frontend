import { useState, useEffect } from 'react';
import {
  X,
  Clapperboard,
  PlusCircle,
  KeyRound,
  Film,
  User,
  DoorOpen,
} from 'lucide-react';

export default function RoomModal({ mode, onSwitchMode, onClose }) {
  const [roomCode, setRoomCode] = useState('');

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

  const isJoin = mode === 'join';

  const handleSubmit = (event) => {
    event.preventDefault();
    // Тут підключимо створення/вхід у кімнату та перехід у RoomWorkspace
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top">
          <div className="modal-brand">
            <div className="modal-brand-icon">
              <Clapperboard size={19} />
            </div>
            <div>
              <h2 className="modal-title">
                {isJoin ? 'Вхід у кімнату' : 'Нова кімната'}
              </h2>
              <p className="modal-subtitle">
                {isJoin
                  ? 'Введіть код запрошення, щоб приєднатися до голосування'
                  : 'Створіть кімнату та поділіться кодом із друзями'}
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
              isJoin ? 'modal-tab-slider-right' : ''
            }`}
          />

          <button
            type="button"
            className={`modal-tab ${!isJoin ? 'modal-tab-active' : ''}`}
            onClick={() => onSwitchMode('create')}
          >
            <PlusCircle size={14} />
            <span>Створити</span>
          </button>

          <button
            type="button"
            className={`modal-tab ${isJoin ? 'modal-tab-active' : ''}`}
            onClick={() => onSwitchMode('join')}
          >
            <KeyRound size={14} />
            <span>Увійти за кодом</span>
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isJoin ? (
            <>
              <div className="form-group">
                <label className="form-label" htmlFor="room-code">
                  Код кімнати
                </label>
                <div className="form-input-wrap">
                  <KeyRound size={16} />
                  <input
                    id="room-code"
                    type="text"
                    maxLength={8}
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                    className="form-input form-input-code"
                    placeholder="KINO-7X"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="join-nickname">
                  Ваш нікнейм
                </label>
                <div className="form-input-wrap">
                  <User size={16} />
                  <input
                    id="join-nickname"
                    type="text"
                    className="form-input"
                    placeholder="Як вас підписати у списку"
                    required
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label className="form-label" htmlFor="room-name">
                  Назва кімнати
                </label>
                <div className="form-input-wrap">
                  <Film size={16} />
                  <input
                    id="room-name"
                    type="text"
                    className="form-input"
                    placeholder="Наприклад: П’ятничний кіновечір"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="host-nickname">
                  Ваш нікнейм
                </label>
                <div className="form-input-wrap">
                  <User size={16} />
                  <input
                    id="host-nickname"
                    type="text"
                    className="form-input"
                    placeholder="Ім’я організатора кімнати"
                    required
                  />
                </div>
              </div>
            </>
          )}

          <button type="submit" className="form-submit-btn">
            {isJoin ? <DoorOpen size={17} /> : <PlusCircle size={17} />}
            <span>{isJoin ? 'Приєднатися' : 'Створити кімнату'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}