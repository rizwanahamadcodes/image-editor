import Button from "@/components/Button/Button";
import { FullWidthContainer } from "@/components/Container";
import FitToScreen from "@/components/EditingWindow/StatusBar/FitToScreen";
import ZoomSlider from "@/components/EditingWindow/StatusBar/ZoomSlider";
import { useActiveProject } from "@/context/useActiveProject";
import { updateProjectCanvas } from "@/store/slices/projectsSlice";
import { RootState } from "@/store/store";
import { useDispatch } from "react-redux";
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

    return (
        <div className="h-4 shrink-0">
            <FullWidthContainer className="flex gap-1 justify-end h-full items-center">
                <FitToScreen
                    zoomLevel={zoomLevel}
                    setZoomLevel={setZoomLevel}
                    className="shrink-0"
                />
                <ZoomSlider zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
                <Button
                    variant="solid"
                    colorScheme="gray-900"
                    onClick={saveProject}>
                    Save
                </Button>
            </FullWidthContainer>
        </div>
    );
};

export default StatusBar;
