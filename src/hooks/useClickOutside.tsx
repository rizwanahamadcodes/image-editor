import { useEffect } from "react";

type useClickOutsideProps = {
    elementRef: React.MutableRefObject<HTMLElement | null>;
    excludeElementRefs?: React.MutableRefObject<HTMLElement | null>[];
    onClickOutside: Function;
};

const useClickOutside = (props: useClickOutsideProps) => {
    const { elementRef, excludeElementRefs, onClickOutside } = props;
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const clickedElement = e.target as Node;
            const intersectingElement = excludeElementRefs?.find(
                (exludeElementRef) =>
                    exludeElementRef.current &&
                    exludeElementRef.current.contains(clickedElement)
            );
            if (
                elementRef.current &&
                !elementRef.current.contains(clickedElement) &&
                !intersectingElement
            ) {
                onClickOutside();
                console.log("i was called", onClickOutside);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [onClickOutside, excludeElementRefs, elementRef]);
};

export default useClickOutside;
