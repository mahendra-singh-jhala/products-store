import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart"

const App = () => {

    const [products, setProduct] = useState([]); // Stores fetched product data
    const [error, setError] = useState(null); // error messages from failed data fetching.
    const [loading, setLoading] = useState(true); // if data is still being loaded
    const [cart, setCart] = useState([]); // manages items added to the cart
    const [showCart, setShowCart] = useState(false); // control the visibility of the cart

    // Uses useEffect to fetch product data from an API once and It updates the products state and handles errors.
    useEffect(() => {
        // fetch the data
        const fetchProduct = async () => {
            try {
                const productResponse = await fetch("https://fakestoreapi.com/products")
                const productData = await productResponse.json();
                setProduct(productData);
            }
            catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }
        fetchProduct()
    }, [])

    // condition if data loading
    if (loading) 
        return <h1>Data is loading please wait.........................</h1>
    // condition if error
    if (error) 
        return <h1>Error: {error}</h1>;

    // To add the product in cart
    const addToCart = (product) => {
        if (cart.find(item => item.id === product.id)) {
            alert("Item already added to the cart");
            return;
        }
        else {
            setCart([...cart, product])
        }
    }

    // To remove the product in cart
    const removeCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId))
    }

    return (
        <div className="App">

            {/* Navbar component displays the number of items in the cart and a button to show the cart. */}
            <Navbar cartCount={cart.length} onCartClick={() => setShowCart(true)} />
            <h1>Products</h1>

            {/* displays product using ProductCard components */}
            <div className="product">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddCart={addToCart}
                    />
                ))}
            </div>

            {/* Conditionally renders the Cart component if showCart is true */}
            {showCart && (
                <Cart
                    cart={cart}
                    onClose={() => setShowCart(false)}
                    onRemoveFromCart={removeCart}
                />
            )}
        </div>
    );
};

export default App;

