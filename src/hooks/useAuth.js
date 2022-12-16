import { useSelector } from "react-redux";

export const useAuth = () => {
    const userId = useSelector(state => state.user.userId);

    return {
        isAuth: !!userId,
        userId
    }
};