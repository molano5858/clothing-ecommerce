import { createContext, useState} from "react"; 

const addCartItem=(cartItems,productToAdd)=>{
    // necesito ver si cartItems contiene el productToAdd
    const existingCartItem=cartItems.find(
        (cartItem)=> cartItem.id===productToAdd.id
    );

    // si si existe el producto entonces aumentar su cantidad en 1
    if(existingCartItem){
        return cartItems.map(
            (cartItem)=>cartItem.id===productToAdd.id ? {...cartItem,quantity:cartItem.quantity+1}:cartItem
            
        )
    }

    return [...cartItems,{...productToAdd,quantity:1}]// estamos devolviendo los items del carro ya existentes y le estamos agregando el nuevo
    // y como es nuevo tenemos que agregarle la propiedad quantity porque no la traia.
}


export const CartDropdownContext =createContext(
    {
        isCartOpen:'false',
        setIsCartOpen:()=>{},
        cartItems:[],// el estado de que items hemos adicionado en el carrito
        addItemToCart:()=>{}, // funcion propia para adicionar items al carrito
    }
)

export const CartDropdownProvider =({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(false);
    const [cartItems,setCartItems]=useState([]);

    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const value={isCartOpen,setIsCartOpen,addItemToCart,cartItems}
    return (<CartDropdownContext.Provider value={value} >{children}</CartDropdownContext.Provider>)
}
