function Navbar({cartCount, onCartClick}) {
    return (
        <nav>
            <div className="navbar">
                <h2>Product-Store</h2>
                <button onClick={onCartClick}>Cart {cartCount}</button>
            </div>
        </nav>
    )
}

export default Navbar
