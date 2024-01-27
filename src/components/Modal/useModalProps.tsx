import { createContext, useContext } from "react";
import { ModalProps } from "./Modal";

export const ModalContext = createContext<Omit<ModalProps, "children"> | null>(
    null
);

export const useModalProps = () => {
    const modal = useContext(ModalContext);

    if (!modal) {
        throw Error(
            "useModalContext must be used inside ModalContext.Provider"
        );
    }

    return modal;
};
