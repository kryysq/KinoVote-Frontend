import { Film, Sparkles, ShieldCheck, Star } from 'lucide-react';
/**
 * Що тут буде:
 * 1. Головний контейнер стану застосунку (поточна роль, список ізольованих кімнат, активна кімната, JWT-токен).
 * 2. Обробники бізнес-логіки: створення/вхід у кімнату, додавання фільмів із TMDB, голосування,
 *    перенесення переможця у список «Переглянуто» та керування учасниками.
 * 3. Маршрутизація між головним екраном (HeroBanner + RoomsDashboard) та робочим простором (RoomWorkspace).
 */
import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import MovieShowcase from './components/MovieShowcase';
import AuthModal from './components/AuthModal';
import RoomModal from './components/RoomModal';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authNotice, setAuthNotice] = useState('');
  const [authMode, setAuthMode] = useState(null);
  const [roomModalMode, setRoomModalMode] = useState(null);

  const handleOpenAuth = (mode) => {
    setAuthNotice('');
    setAuthMode(mode);
  };

  const handleOpenRoomModal = (mode) => {
    if (!currentUser) {
      setAuthNotice(
        mode === 'create'
          ? 'Увійдіть або зареєструйтесь, щоб створити кімнату.'
          : 'Увійдіть або зареєструйтесь, щоб приєднатися за кодом.'
      );
      setAuthMode('login');
      return;
    }

    setRoomModalMode(mode);
  };

  const handleAuthSuccess = (userData) => {
    setCurrentUser(userData);
    setAuthMode(null);
    setAuthNotice('');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setRoomModalMode(null);
  };

  return (
    <div className="app-shell">
      <Navbar 
      onOpenAuth={setAuthMode}
      currentUser={currentUser}
      onLogout={handleLogout}
       />
      <main>
        <HeroBanner onOpenRoomModal={handleOpenRoomModal} />
        <MovieShowcase />
      </main>

      <AuthModal
        mode={authMode}
        onSwitchMode={setAuthMode}
        notice={authNotice}
        onAuthSuccess={handleAuthSuccess}
        onClose={() => {
          setAuthMode(null)
          setAuthNotice('');
        }}
      />

      <RoomModal
        mode={roomModalMode}
        currentUser={currentUser}
        onSwitchMode={setRoomModalMode}
        onClose={() => setRoomModalMode(null)}
      />
    </div>
  );
}