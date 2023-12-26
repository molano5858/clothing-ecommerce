import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {useContext} from 'react'
import {CartDropdownContext} from '../contexts/cart-dropdown'
import './cart-icon.scss'

const CartIcon=()=>{

    const {isCartOpen,setIsCartOpen}=useContext(CartDropdownContext);
    const toggleIsCartOpen=()=>{
        console.log(isCartOpen)
        setIsCartOpen(!isCartOpen)
    }

    return(
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={toggleIsCartOpen} />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon