import Button from '../button/button'
import CartItem from '../cart-item/cart-item'
import { useContext } from 'react'
import {CartDropdownContext} from '../contexts/cart-dropdown.context'
import './cart-dropdown.scss'


const CartDropdown=()=>{
    const {cartItems}=useContext(CartDropdownContext)
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-item'>
                {cartItems.map((item)=><CartItem key={item.id} cartItem={item}/>)}

            </div>
            <Button>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown