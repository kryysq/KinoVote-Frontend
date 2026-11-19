/**
 * Що тут буде:
 * 1. Головний контейнер стану застосунку (поточна роль, список ізольованих кімнат, активна кімната, JWT-токен).
 * 2. Обробники бізнес-логіки: створення/вхід у кімнату, додавання фільмів із TMDB, голосування,
 *    перенесення переможця у список «Переглянуто» та керування учасниками.
 * 3. Маршрутизація між головним екраном (HeroBanner + RoomsDashboard) та робочим простором (RoomWorkspace).
 */
export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#09090b] text-white">
      <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-8 text-center">
        <h1 className="text-3xl font-extrabold">
          Kino<span className="text-rose-500">Vote</span>
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Структуру проєкту створено — усі модулі готові до наповнення
        </p>
      </div>
    </div>
  );
}