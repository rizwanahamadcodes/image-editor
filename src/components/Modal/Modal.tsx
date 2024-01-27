import clsx from "clsx";
import { ModalContext, useModalProps } from "./useModalProps";
import CloseButton from "../CloseButton/CloseButton";
import Container from "../Container";

export type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    open: () => void;
    close: () => void;
    className?: string;
};
const Modal = (props: ModalProps) => {
    const { isOpen, open, close, children } = props;

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                open,
                close,
            }}>
            <ModalWrapper>
                <Container className="flex flex-col items-center">
                    <ModalMain>{children}</ModalMain>
                </Container>
            </ModalWrapper>
        </ModalContext.Provider>
    );
};

type ModalWrapperProps = {
    children: React.ReactNode;
    className?: string;
};

export const ModalWrapper = (props: ModalWrapperProps) => {
    const { children, className } = props;
    const { isOpen, close } = useModalProps();

    const handleModalWrapperClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (e.target == e.currentTarget) {
            close();
        }
    };
    return (
        <div
            onClick={(e) => {
                handleModalWrapperClick(e);
            }}
            className={clsx(
                "h-[100dvh] w-[100dvw] absolute top-0 left-0 bg-gray-300/50 backdrop-blur-sm z-[1000] overflow-hidden transition-opacity flex justify-center items-center",
                isOpen ? "visible opacity-100" : "invisible opacity-0",
                className
            )}>
            {children}
        </div>
    );
};

type ModalMainProps = {
    children?: React.ReactNode;
};

export const ModalMain = (props: ModalMainProps) => {
    const { children } = props;
    const { isOpen } = useModalProps();

    return (
        <div
            className={clsx(
                "max-w-2xl max-h-full sm:min-w-20 flex flex-col bg-white rounded-1 shadow overflow-hidden",
                isOpen ? "opacity-1" : "opacity-0"
            )}>
            {children}
        </div>
    );
};

type ModalHeadProps = {
    children?: React.ReactNode;
    className?: string;
};

export const ModalHead = (props: ModalHeadProps) => {
    const { className, children } = props;

    return <div className={clsx("h-4 w-full flex", className)}>{children}</div>;
};

type DefaultModalHeadProps = {
    children?: string;
};

export const DefaultModalHead = (props: DefaultModalHeadProps) => {
    const { children } = props;
    const { close } = useModalProps();

    return (
        <ModalHead className="flex px-1 bg-gray-50 justify-between items-center">
            <h3 className="font-medium text-gray-900">{children}</h3>
            <CloseButton
                colorScheme="gray-300"
                size="md"
                className="ml-auto"
                onClick={close}
            />
        </ModalHead>
    );
};

type ModalBodyProps = {
    children: React.ReactNode;
    defaultPadding?: boolean;
    className?: string;
};

export const ModalBody = (props: ModalBodyProps) => {
    const { className, children, defaultPadding = true } = props;

    return (
        <div className={clsx("grow", defaultPadding ? "p-1" : "", className)}>
            {children}
        </div>
    );
};

type ModalFootProps = {
    children: React.ReactNode;
    className?: string;
    defaultPadding?: boolean;
};

export const ModalFoot = (props: ModalFootProps) => {
    const { className, defaultPadding = true, children } = props;

    return (
        <div className={clsx("h-4", defaultPadding ? "p-1" : "", className)}>
            {children}
        </div>
    );
};

export default Modal;
