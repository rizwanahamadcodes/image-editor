import { User } from "@/data/users";
import { createContext, useContext } from "react";

export const CurrentUserContext = createContext<User | null>(null);

export const useCurrentUser = () => {
    const currentUser = useContext(CurrentUserContext);

    if (!currentUser) {
        throw new Error(
            "CurrentUserContext must be used within <CurrentUserContext.Provide>"
        );
    }
    return currentUser;
};
