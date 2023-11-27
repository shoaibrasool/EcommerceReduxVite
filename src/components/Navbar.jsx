import { Outlet } from "react-router-dom";


export default function Navbar() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px', backgroundColor: 'red', }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <a href="http://localhost:5173/child">HOME</a>
                    <a href="http://localhost:5173/child2">About</a>
                </div>
                <p >NAVBAR</p>
                <button>Cart</button>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}