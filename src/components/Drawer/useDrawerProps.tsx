import { createContext, useContext } from "react";
import { DrawerProps } from "./Drawer";

export const DrawerContext = createContext<Omit<
    DrawerProps,
    "children"
> | null>(null);

export const useDrawerProps = () => {
    const drawer = useContext(DrawerContext);

    if (!drawer) {
        throw Error(
            "useDrawerContext must be used inside DrawerContext.Provider"
        );
    }

    return drawer;
};
