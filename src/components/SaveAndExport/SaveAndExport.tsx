import Button, { ButtonIcon } from "@/components/Button/Button";
import clsx from "clsx";
import { FaSave } from "react-icons/fa";
import { PiUploadSimpleBold } from "react-icons/pi";
type SaveAndExportProps = {
    className?: string;
};

const SaveAndExport = (props: SaveAndExportProps) => {
    const { className } = props;
    return (
        <div className={clsx("gap-1 flex-col sm:flex-row", className)}>
            <Button
                variant="solid"
                colorScheme="primary"
                size="sm"
                className="!w-full !sm:w-auto">
                <ButtonIcon icon={FaSave} />
                Save
            </Button>
            <Button
                variant="outline"
                colorScheme="primary"
                size="sm"
                className="!w-full !sm:w-auto">
                <ButtonIcon icon={PiUploadSimpleBold} />
                Export
            </Button>
        </div>
    );
};

export default SaveAndExport;
