import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'



export default function Navbar() {

    const cart = useSelector(state => state.reducer.cart)
    let cartItems = 0;

    cart.map(() => {
        cartItems++;
    })

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/cart")
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px', backgroundColor: 'lightcoral', }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={"/"}>Home</Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={"/child2"}>About</Link>
                </div>
                <h1 >YourStore</h1>
                <button style={{ cursor: 'pointer' }} onClick={handleNavigate}>Cart {cartItems}</button>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}