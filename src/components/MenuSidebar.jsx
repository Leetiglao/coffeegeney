function MenuSidebar({ categories, activeCategory, onSelect }) {
  return (
    <aside className="hidden md:block w-64 shrink-0 sticky top-32 h-fit animate-[slideInLeft_0.6s_ease-out]">
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-[#8b5e3c] font-bold tracking-[2px] text-sm mb-5">
          CATEGORIES
        </h3>

        <nav className="flex flex-col gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition duration-200 ${
                activeCategory === cat
                  ? 'bg-[#6f4e37] text-white'
                  : 'text-[#5c4433] hover:bg-[#f6f1eb]'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default MenuSidebar