import { Film, Sparkles, ShieldCheck, Star } from 'lucide-react';
/**
 * Що тут буде:
 * 1. Головний контейнер стану застосунку (поточна роль, список ізольованих кімнат, активна кімната, JWT-токен).
 * 2. Обробники бізнес-логіки: створення/вхід у кімнату, додавання фільмів із TMDB, голосування,
 *    перенесення переможця у список «Переглянуто» та керування учасниками.
 * 3. Маршрутизація між головним екраном (HeroBanner + RoomsDashboard) та робочим простором (RoomWorkspace).
 */

import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <HeroBanner />
      </main>
    </div>
  );
}