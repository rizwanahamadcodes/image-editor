import { useCurrentProject } from "@/context/useCurrentProject";
import Image from "next/image";

type ImagePropertiesProps = {};

const ImageToolProperties = (props: ImagePropertiesProps) => {
    const {} = props;
    const { project, setProject } = useCurrentProject();

    return (
        <div className="relative flex-col flex gap-0.5">
            {project.images.map((imageUrl, index) => (
                <div key={index} className="relative">
                    <Image
                        draggable={true}
                        onDragStart={() => {
                            console.log("i was dragged on the streets");
                        }}
                        className="rounded-1"
                        src={imageUrl}
                        width={300}
                        height={300}
                        alt={imageUrl}
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageToolProperties;