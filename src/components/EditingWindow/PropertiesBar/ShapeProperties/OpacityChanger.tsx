import Button, { ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useActivePolygonAndProperties } from "@/context/useActivePolygonAndProperties";
import { useCanvas } from "@/context/useCanvas";
import { useToggle } from "@/hooks/useToggle";
import { useRef } from "react";
import { BsTransparency } from "react-icons/bs";

const OpacityChanger = () => {
    const {
        activePolygon,
        activePolygonProperties,
        setActivePolygonProperties,
    } = useActivePolygonAndProperties();
    const { canvas } = useCanvas();

    const handleOpacityChange = (opacityFromInput: number) => {
        console.log(opacityFromInput);
        setActivePolygonProperties({
            ...activePolygonProperties,
            opacity: opacityFromInput,
        });

        activePolygon.set("opacity", opacityFromInput);
        canvas?.renderAll();
    };

    const opacityChangerCore = () => {
        return (
            <div className="flex items-center">
                <div className="flex items-center h-2 overflow-hidden hover:border-gray-400 px-0.25 rounded-0.25 border-gray-200 border gap-0.25 group/dimensionGroup has-[:focus]:shadow-halo-gray-500">
                    <BsTransparency className="text-gray-500 text-1.25 group-hover/dimensionGroup:text-gray-700 group-has-[:focus]/dimensionGroup:text-gray-700" />
                    <input
                        type="number"
                        value={activePolygonProperties.opacity}
                        className="text-gray-600 font-medium min-w-0 w-4 h-2 rounded-0.25 focus:outline-none px-0.25"
                        onChange={(e) => {
                            handleOpacityChange(Number(e.target.value));
                        }}
                    />
                </div>
            </div>
        );
    };

    const { open, close, isOpen, toggle } = useToggle();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    return (
        <>
            <span className="hidden md:inline-block">
                {opacityChangerCore()}
            </span>
            <div className="relative h-2 md:hidden">
                <PopOver
                    toggleButtonRefs={[buttonRef]}
                    isOpen={isOpen}
                    close={close}
                    className="left-0">
                    <div className="bg-white shadow border border-gray-100 rounded-0.625 mt-0.5 right-0 p-0.25">
                        {opacityChangerCore()}
                    </div>
                </PopOver>
                <Button
                    variant="outline"
                    regular
                    size="sm"
                    colorScheme="gray-200"
                    buttonRef={buttonRef}
                    onClick={toggle}>
                    <ButtonIcon icon={BsTransparency} />
                </Button>
            </div>
        </>
    );
};

export default OpacityChanger;
