function Cart({ cart, onClose, onRemoveFromCart }) {
    
    return (
        <>
            <div className="Cart">
                <div className="Cart-content">
                    <button className="close-button" onClick={onClose}> X </button>
                    <h1>Cart Item</h1>
                    {cart.length === 0 ? (
                        <p>No items in the cart</p>
                    ) : (
                        <div>
                            {cart.map(product => (
                                <div className="Cart-item" key={product.id}>
                                    <img src={product.image} alt={product.title} className="Cart-Image" />
                                    <div className="Cart-info">
                                        <h2>{product.title}</h2>
                                        <p>$ {product.price}</p>
                                        <button onClick={() => onRemoveFromCart(product.id)} className="Removebtn"> Remove </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Cart