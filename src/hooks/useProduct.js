import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



export const useProduct = (id) => {

    const cart = useSelector(state => state.user.cart);
    const [inCart, setInCart] = useState(false);

    const isProductInCart = (productId, cart) => {
        for (let i = 0; i < cart.length; i++) {
            if (+productId === +cart[i].productId) return true;
        }

        return false;
    };

    useEffect(() => {
        setInCart(isProductInCart(id, cart))
    }, [cart]);

    return {
        inCart
    }
}