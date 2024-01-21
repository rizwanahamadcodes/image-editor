import { FullWidthContainer } from "@/components/Container";
import FitToScreen from "@/components/EditingWindow/StatusBar/FitToScreen";
import ZoomSlider from "@/components/EditingWindow/StatusBar/ZoomSlider";
type StatusBarProps = {
    zoomLevel: number;
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
};

const StatusBar = (props: StatusBarProps) => {
    const { zoomLevel, setZoomLevel } = props;

    return (
        <div className="h-4 shrink-0">
            <FullWidthContainer className="flex gap-1 justify-end h-full items-center">
                <FitToScreen
                    zoomLevel={zoomLevel}
                    setZoomLevel={setZoomLevel}
                    className="shrink-0"
                />
                <ZoomSlider zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
            </FullWidthContainer>
        </div>
    );
};

export default StatusBar;
