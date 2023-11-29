import { useSelector } from 'react-redux'

const Cart = () => {

    let totalAmount = 0;

    const cart = useSelector(state => state.reducer.cart)
    // console.log(cart)

    cart.map((prod) => {
        totalAmount = totalAmount + (prod.price * prod.inventory)
    })


    return (
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-evenly', gap: '25%' }}>
            <div>
                {
                    cart.map((obj) => (
                        <div className='card' key={obj.id}>
                            <span>Items to Purchase : {obj.inventory}</span>
                            <h1>{obj.text}</h1>
                            <span> Unit Price : {obj.price}</span>
                            <h3> Total Price : {obj.price * obj.inventory}</h3>
                        </div>
                    ))
                }
            </div>
            <div className="amount" style={{ padding: '50px', backgroundColor: 'lightcoral', width: '10%', height: '10%', borderRadius: '0 0 20px 110px' }}>
                <h3>Total Amount is <br /><hr /> {totalAmount}</h3>
            </div>
        </div >
    )
}

export default Cart
