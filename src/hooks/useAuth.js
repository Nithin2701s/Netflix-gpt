import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/UserSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";

const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (user) => {
          if (user) {
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid, email, displayName }));
            navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        });
        return () => unsubscribe();
      }, []);
}

export default useAuth
