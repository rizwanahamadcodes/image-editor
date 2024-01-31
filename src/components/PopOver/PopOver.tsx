import { useRef } from "react";
import clsx from "clsx";
import useClickOutside from "@/hooks/useClickOutside";

type PopOverProps = {
    children?: React.ReactNode;
    isOpen: boolean;
    close: () => void;
    toggleButtonRefs: React.MutableRefObject<HTMLElement | null>[];
    className?: string;
};

const PopOver = (props: PopOverProps) => {
    const { isOpen, close, className, toggleButtonRefs, children } = props;
    const popOverRef = useRef(null);

    useClickOutside({
        elementRef: popOverRef,
        excludeElementRefs: toggleButtonRefs,
        onClickOutside: close,
    });

    return (
        <div
            ref={popOverRef}
            className={clsx(
                "absolute atop-full z-20 transition-all",
                isOpen ? "opacity-100 visible" : "opacity-0 invisible",
                className
            )}>
            {children}
        </div>
    );
};

export default PopOver;
