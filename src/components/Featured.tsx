export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 lg:h-[800px] mb-8 lg:mb-0 lg:order-2 grid grid-cols-2 gap-4 p-4">
        <div className="bg-blue-50 rounded-2xl p-6 flex flex-col gap-3">
          <span className="text-4xl">📐</span>
          <h4 className="font-bold text-neutral-900 text-lg">Математика</h4>
          <p className="text-neutral-600 text-sm">Алгебра, геометрия, уравнения — разберём по шагам</p>
        </div>
        <div className="bg-green-50 rounded-2xl p-6 flex flex-col gap-3">
          <span className="text-4xl">🧪</span>
          <h4 className="font-bold text-neutral-900 text-lg">Физика и Химия</h4>
          <p className="text-neutral-600 text-sm">Законы, формулы и опыты — просто и понятно</p>
        </div>
        <div className="bg-yellow-50 rounded-2xl p-6 flex flex-col gap-3">
          <span className="text-4xl">📖</span>
          <h4 className="font-bold text-neutral-900 text-lg">Литература</h4>
          <p className="text-neutral-600 text-sm">Краткие пересказы, анализы и сочинения</p>
        </div>
        <div className="bg-purple-50 rounded-2xl p-6 flex flex-col gap-3">
          <span className="text-4xl">🌍</span>
          <h4 className="font-bold text-neutral-900 text-lg">История и Биология</h4>
          <p className="text-neutral-600 text-sm">Даты, события и схемы — легко запомнить</p>
        </div>
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1" id="subjects">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Помощь по всем предметам</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Не просто готовые ответы — настоящее понимание. Объясняем любую тему так, чтобы ты мог решить задачу самостоятельно.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Выбрать предмет
        </button>
      </div>
    </div>
  );
}