'use client'

import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])

    const addToCart = (item)=>{
        if(!isInCart(item.slug)){
            setCart([...cart,item])
        }else{
            setCart(cart.map(product=>{
                return product.slug === item.slug ? {...product, quantity : product.quantity+item.quantity} : product
            }));
        }
    }

    const isInCart = (slug)=>{
        return cart.some(product=>product.slug===slug)
    }

    const deleteFromCart = (slug)=>{
        setCart(cart.filter(product=>product.slug !== slug))
    }

    const emptyCart = () =>{
        setCart([])
    }

    const getTotal = () => {
        // return cart.reduce((acum, unItem) => acum + unItem.quantity * unItem.price, 0)
        let total = 0
        cart.map(item=>{
            item.discount.status ? total+=item.quantity*item.price*(1-item.discount.amount) : total+=item.quantity*item.price
        })
        return total
    };

    const getQuantity = () => {
        return cart.reduce((acum, unItem) => acum + unItem.quantity, 0)
    }

    return(
        <CartContext.Provider
        value={{
            cart,
            addToCart,
            isInCart,
            emptyCart,
            deleteFromCart,
            getTotal,
            getQuantity
            }}>
            {children}
        </CartContext.Provider>
    )
}