import { useContext } from "react";
import AuthContext from "./context";
import { removeToken, storeToken } from "./storage";
import jwtDecode from "jwt-decode";

export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logIn = (authToken) => {
        const user = jwtDecode(authToken);
        setUser(user);
        storeToken(authToken);
    };

    const logOut = () => {
        setUser(null);
        removeToken();
    };

    return { user, setUser, logOut, logIn };
};
