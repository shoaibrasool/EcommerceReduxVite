import { Link, Outlet, useNavigate } from "react-router-dom";




export default function Navbar() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/cart")
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px', backgroundColor: 'red', }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/child2"}>About</Link>
                </div>
                <p >NAVBAR</p>
                <button onClick={handleNavigate}>Cart</button>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}