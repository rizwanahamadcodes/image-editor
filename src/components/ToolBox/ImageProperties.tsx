import { useCurrentProject } from "@/pages/projects/[projectId]/useCurrentProject";
import Image from "next/image";

type ImagePropertiesProps = {};

const ImageProperties = (props: ImagePropertiesProps) => {
    const {} = props;
    const currentProject = useCurrentProject();

    return (
        <div className="relative flex-col flex gap-0.5">
            {currentProject.images.map((imageUrl, index) => (
                <div key={index} className="relative h-5">
                    <Image
                        className="rounded-1 object-cover"
                        src={imageUrl}
                        fill
                        alt={imageUrl}
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageProperties;
