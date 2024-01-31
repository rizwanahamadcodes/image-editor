import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "@/components/Button/Button";
import { ButtonIcon } from "@/components/Button/Button";
import { FullWidthContainer } from "@/components/Container";
import ZoomSlider from "@/components/EditingWindow/StatusBar/ZoomSlider";
import PopOver from "@/components/PopOver/PopOver";
import { useActiveProject } from "@/context/useActiveProject";
import { useDispatch } from "react-redux";
import ZoomControls from "./ZoomControls";
import { useToggle } from "@/hooks/useToggle";
import { useRef } from "react";
type StatusBarProps = {
    zoomLevel: number;
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
};

const StatusBar = (props: StatusBarProps) => {
    const { zoomLevel, setZoomLevel } = props;
    const { activeProject, setActiveProject } = useActiveProject();
    const dispatch = useDispatch();
    const saveProject = () => {
        // dispatch(
        //     updateProjectCanvas({
        //         canvas: {
        //             canvasObjects: activeProject.canvasObjects,
        //             canvasProperties: activeProject.canvasProperties,
        //         },
        //         projectId: activeProject.projectId,
        //     })
        // );
    };
    const { open, close, toggle, isOpen } = useToggle();
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    return (
        <div className="h-4 shrink-0">
            <FullWidthContainer className="flex gap-1 justify-end h-full items-center">
                <div className="hidden sm:block">
                    <ZoomControls />
                </div>
                <div className="flex sm:hidden gap-0.5 relative">
                    <PopOver
                        isOpen={isOpen}
                        close={close}
                        className="!bottom-full mb-0.5 !top-auto left-1/2 -translate-x-1/2"
                        toggleButtonRefs={[buttonRef]}>
                        <div className="bg-white shadow border border-gray-100 rounded-0.375 mt-0.5 right-0 p-0.25">
                            <ZoomControls />
                        </div>
                    </PopOver>

                    <Button
                        onClick={toggle}
                        regular
                        size="sm"
                        buttonRef={buttonRef}
                        variant="outline"
                        colorScheme="gray-200"
                        className="">
                        <ButtonIcon icon={HiMagnifyingGlass} />
                    </Button>
                </div>

                <ZoomSlider zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />

                <p className="font-medium text-gray-700 min-w-3 text-center shrink-0">
                    {`${Math.floor(zoomLevel * 100)}%`}
                </p>
            </FullWidthContainer>
        </div>
    );
};

export default StatusBar;
