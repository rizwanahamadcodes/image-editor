import { useCurrentProject } from "@/context/useCurrentProject";
import Image from "next/image";

type ImagePropertiesProps = {};

const ImageProperties = (props: ImagePropertiesProps) => {
    const {} = props;
    const currentProject = useCurrentProject();

    return (
        <div className="relative flex-col flex gap-0.5">
            {currentProject.images.map((imageUrl, index) => (
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

export default ImageProperties;
