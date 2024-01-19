type StatusBarProps = {};

const StatusBar = (props: StatusBarProps) => {
    const {} = props;

    return (
        <div>
            <input
                onChange={(e) => {
                    setZoomLevel(parseInt(e.target.value) / 100);
                }}
                type="range"
                className="border-none outline-none accent-gray-700 h-0.25 bg-gray-100"
                min={10}
                max={500}
                value={zoomLevel * 100}
            />
            <button
                onClick={() => {
                    setZoomLevel((prevZoom) => prevZoom - 0.1);
                }}>
                Zoom out
            </button>{" "}
            <button
                onClick={() => {
                    setZoomLevel(1);
                }}>
                Snap to 100
            </button>
            <button
                onClick={() => {
                    setZoomLevel((prevZoom) => prevZoom + 0.1);
                }}>
                Zoom in
            </button>
        </div>
    );
};

export default StatusBar;
