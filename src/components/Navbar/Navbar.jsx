import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'



export default function Navbar() {

    const cart = useSelector(state => state.reducer.cart)
    let cartItems = 0;

    cart.map(()=> {
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
                    <Link to={"/"}>Home</Link>
                    <Link to={"/child2"}>About</Link>
                </div>
                <p >NAVBAR</p>
                <button style={{ cursor: 'pointer' }} onClick={handleNavigate}>Cart {cartItems}</button>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}