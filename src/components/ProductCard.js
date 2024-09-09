function ProductCard({product, onAddCart }) {

    return (
        <>
            <div className="product">
                <div className="product-card">
                    <img src={product.image} alt={product.title} className="product-image" />
                    <h2 className="product-info">{product.title}</h2>
                    <p className="product-price">${product.price}</p>
                    <button onClick={() => onAddCart(product)} className="btn"> Add To Cart </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard
