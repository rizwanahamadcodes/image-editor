import { useState } from "react";

export const useToggle = (initialState: boolean = false) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const open = () => {
        setIsOpen(true);
    };
    const close = () => {
        setIsOpen(false);
    };
    const toggle = () => {
        setIsOpen((prevOpen) => !prevOpen);
    };

    return { isOpen, open, close, toggle };
};
