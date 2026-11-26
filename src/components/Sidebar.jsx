
function Sidebar() {

  return (
    <aside className="bg-white w-56 p-5 shadow-sm min-h-screen">

      <h2 className="text-xl font-bold mb-5">
        Categories
      </h2>

      <ul className="space-y-5 text-gray-700">

        <li>Mobiles</li>
        <li>Laptops</li>
        <li>Headphones</li>
        <li>Watches</li>
        <li>Clothing</li>
        <li>Home Appliances</li>

      </ul>

      <hr className="my-6" />

      <h2 className="font-bold mb-4">
        Price Filter
      </h2>

      <p>Under ₹500</p>
      <p className="mt-3">₹500 – ₹1000</p>
      <p className="mt-3">₹1000 – ₹5000</p>
      <p className="mt-3">Above ₹5000</p>

    </aside>
  );
}

export default Sidebar;
