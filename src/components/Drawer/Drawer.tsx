import clsx from "clsx";
import { DrawerContext, useDrawerProps } from "./useDrawerProps";
import BrandLogo from "../BrandLogo/BrandLogo";
import CloseButton from "../CloseButton/CloseButton";
import { useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside";

export type DrawerProps = {
    children: React.ReactNode;
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle?: () => void;
    excludeElementRefs?: React.MutableRefObject<HTMLElement | null>[];
    className?: string;
};

const Drawer = (props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        open,
        close,
        toggle,
        excludeElementRefs,
    } = props;
    return (
        <DrawerContext.Provider
            value={{ isOpen, open, close, toggle, excludeElementRefs }}>
            <DrawerWrapper className={className}>
                <DrawerMain>{children}</DrawerMain>
            </DrawerWrapper>
        </DrawerContext.Provider>
    );
};

type DrawerWrapperProps = { children: React.ReactNode; className?: string };

export const DrawerWrapper = (props: DrawerWrapperProps) => {
    const { children, className } = props;
    const { isOpen } = useDrawerProps();

    return (
        <div
            className={clsx(
                "h-[100dvh] w-[100dvw] absolute top-0 left-0 bg-gray-100/50 backdrop-blur-sm z-[1000] overflow-hidden transition-all",
                isOpen ? "visible opacity-100" : "invisible opacity-0",
                className
            )}>
            {children}
        </div>
    );
};

type DrawerMainProps = { children: React.ReactNode };

export const DrawerMain = (props: DrawerMainProps) => {
    const { children } = props;
    const { isOpen, close, excludeElementRefs } = useDrawerProps();
    const drawerRef = useRef<HTMLDivElement | null>(null);
    useClickOutside({
        elementRef: drawerRef,
        onClickOutside: close,
        excludeElementRefs,
    });

    return (
        <div
            ref={drawerRef}
            className={clsx(
                "transition-all w-20 flex flex-col h-full bg-white absolute top-0 right-0 shadow overflow-hidden",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
            {children}
        </div>
    );
};

type DrawerHeadProps = { className?: string; children: React.ReactNode };

export const DrawerHead = (props: DrawerHeadProps) => {
    const { className, children } = props;

    return (
        <div
            className={clsx(
                "shrink-0 w-full border-b border-b-gray-100 h-navHeight flex items-center",
                className
            )}>
            {children}
        </div>
    );
};

type DrawerDefaultHeadProps = { defaultPadding?: boolean };

export const DrawerDefaultHead = (props: DrawerDefaultHeadProps) => {
    const { defaultPadding = true } = props;
    const { close } = useDrawerProps();

    return (
        <DrawerHead
            className={clsx("justify-between", defaultPadding ? "px-2" : "")}>
            <BrandLogo />
            <CloseButton onClick={close} />
        </DrawerHead>
    );
};

type DrawerBodyProps = React.ComponentPropsWithoutRef<"div"> & {
    defaultPadding?: boolean;
};

export const DrawerBody = (props: DrawerBodyProps) => {
    const {
        children,
        className,
        defaultPadding = false,
        ...otherProps
    } = props;

    return (
        <div
            className={clsx(
                "grow overflow-y-auto",
                defaultPadding ? "px-2 py-1" : "",
                className
            )}>
            {children}
        </div>
    );
};

type DrawerFootProps = { children: React.ReactNode; defaultPadding?: boolean };

export const DrawerFoot = (props: DrawerFootProps) => {
    const { children, defaultPadding = true } = props;

    return (
        <div
            className={clsx(
                "shrink-0 w-full border-t border-t-gray-100 h-navHeight flex items-center",
                defaultPadding ? "px-2" : ""
            )}>
            {children}
        </div>
    );
};

export default Drawer;
