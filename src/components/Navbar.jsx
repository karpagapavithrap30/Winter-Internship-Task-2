function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#131921",
      color: "white",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>

      <h1>ShopZone</h1>

      <input
        type="text"
        placeholder="Search products..."
      />

      <h3>Account</h3>

      <h3>Cart 🛒</h3>

    </nav>
  );
}

export default Navbar;