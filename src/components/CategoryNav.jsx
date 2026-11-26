
function CategoryNav() {

  const categories = [
    "All",
    "Mobiles",
    "Electronics",
    "Fashion",
    "Home",
    "Books",
    "Beauty"
  ];

  return (
    <div className="bg-slate-800 text-white p-3 flex gap-8 overflow-x-auto">

      {categories.map((category) => (
        <button
          key={category}
          className="hover:text-orange-400 whitespace-nowrap"
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default CategoryNav;
