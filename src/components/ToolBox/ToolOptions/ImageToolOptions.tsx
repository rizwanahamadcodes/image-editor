import { useActiveProject } from "@/context/useActiveProject";
import Image from "next/image";

type ImageOptionsProps = {};

const ImageToolOptions = (props: ImageOptionsProps) => {
    const {} = props;
    const { activeProject, setActiveProject } = useActiveProject();

    return (
        <div className="relative flex-col flex gap-0.5">
            {activeProject.images?.map((imageUrl, index) => (
                <div key={index} className="relative">
                    <Image
                        className="rounded-1"
                        src={imageUrl}
                        width={300}
                        height={300}
                        alt={imageUrl}
                    />
                </div>
            ))}
            \
        </div>
    );
};

export default ImageToolOptions;
