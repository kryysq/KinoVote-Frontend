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
  const [authMode, setAuthMode] = useState(null);
  const [roomModalMode, setRoomModalMode] = useState(null);

  return (
    <div className="app-shell">
      <Navbar onOpenAuth={setAuthMode} />
      <main>
        <HeroBanner onOpenRoomModal={setRoomModalMode} />
        <MovieShowcase />
      </main>

      <AuthModal
        mode={authMode}
        onSwitchMode={setAuthMode}
        onClose={() => setAuthMode(null)}
      />

      <RoomModal
        mode={roomModalMode}
        onSwitchMode={setRoomModalMode}
        onClose={() => setRoomModalMode(null)}
      />
    </div>
  );
}