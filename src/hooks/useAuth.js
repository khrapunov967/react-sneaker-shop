import { useSelector } from "react-redux";

export const useAuth = () => {
    const { userId, cart } = useSelector(state => state.user);

    return {
        isAuth: !!userId,
        userId,
        cart
    }
};