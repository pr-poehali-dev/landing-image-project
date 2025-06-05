const HeroSection = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Левая секция - портрет персонажа */}
      <div className="bg-[#2a2a4a] rounded-lg p-6 flex flex-col items-center">
        <div className="relative mb-4">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=150&fit=crop&crop=face"
            alt="Нёвилетт"
            className="w-32 h-40 rounded-lg object-cover border-4 border-purple-400"
          />
          <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">
            5★
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-2">Нёвилетт</h1>

        <div className="flex gap-2 mb-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
            Гидро
          </span>
          <span className="bg-purple-500 text-white px-3 py-1 rounded text-sm">
            Катализатор
          </span>
        </div>

        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">
              ★
            </span>
          ))}
        </div>

        <div className="text-center">
          <div className="text-purple-300 text-sm">Main DPS</div>
          <div className="text-gray-300 text-xs">Заряженные атаки</div>
        </div>
      </div>

      {/* Центральная секция - характеристики */}
      <div className="bg-[#2a2a4a] rounded-lg p-4">
        <h3 className="text-lg font-bold mb-4 text-center border-b border-purple-400 pb-2">
          Характеристики
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-300">Базовая АТК:</span>
            <span className="text-white font-bold">542</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Базовое HP:</span>
            <span className="text-white font-bold">14,695</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Базовая ЗАЩ:</span>
            <span className="text-white font-bold">815</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Крит. урон:</span>
            <span className="text-purple-300 font-bold">88.4%</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-purple-400">
          <div className="text-center text-sm text-gray-300">
            Возвышение бонус
          </div>
          <div className="text-center text-purple-300 font-bold">
            Крит. урон +19.2%
          </div>
        </div>
      </div>

      {/* Правая секция - материалы возвышения */}
      <div className="bg-[#2a2a4a] rounded-lg p-4">
        <h3 className="text-lg font-bold mb-4 text-center border-b border-purple-400 pb-2">
          Материалы возвышения
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <div className="text-center">
            <div className="text-2xl mb-1">💎</div>
            <div className="text-xs text-gray-300">Драгоценный</div>
            <div className="text-xs text-gray-300">камень</div>
            <div className="text-blue-300 font-bold">6</div>
          </div>

          <div className="text-center">
            <div className="text-2xl mb-1">🌊</div>
            <div className="text-xs text-gray-300">Специальность</div>
            <div className="text-xs text-gray-300">Фонтейна</div>
            <div className="text-blue-300 font-bold">168</div>
          </div>

          <div className="text-center">
            <div className="text-2xl mb-1">⚙️</div>
            <div className="text-xs text-gray-300">Части</div>
            <div className="text-xs text-gray-300">механизмов</div>
            <div className="text-blue-300 font-bold">36</div>
          </div>

          <div className="text-center">
            <div className="text-2xl mb-1">👑</div>
            <div className="text-xs text-gray-300">Корона</div>
            <div className="text-xs text-gray-300">прозрения</div>
            <div className="text-purple-300 font-bold">3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
