import { useActiveProject } from "@/context/useActiveProject";
import { useCanvas } from "@/context/useCanvas";
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";

type BackgroundOptionsProps = {};

type BackgroundTabType = {
    id: string;
    title: string;
};

type ColorBackgroundOptionsProps = {};

export const ColorBackgroundOptions = (props: ColorBackgroundOptionsProps) => {
    return <div>color</div>;
};

type PictureBackgroundOptionsProps = {};

export const PictureBackgroundOptions = (
    props: PictureBackgroundOptionsProps
) => {
    const { activeProject, setActiveProject } = useActiveProject();

    return (
        <div className="relative flex-col flex gap-0.5 p-1">
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
        </div>
    );
};

const backgroundOptions: { [key: string]: React.ReactNode } = {
    color: <ColorBackgroundOptions />,
    picture: <PictureBackgroundOptions />,
};

const backgroundTypeTabs: BackgroundTabType[] = [
    {
        id: "color",
        title: "Color",
    },
    {
        id: "picture",
        title: "Picture",
    },
];

const BackgroundToolOptions = (props: BackgroundOptionsProps) => {
    const {} = props;
    const { activeProject, setActiveProject } = useActiveProject();
    const [activeBackgroundType, setActiveBackgroundType] =
        useState<BackgroundTabType>(backgroundTypeTabs[0]);
    const { canvas } = useCanvas();
    console.log(canvas);

    return (
        <div className="relative flex-col flex h-full w-full">
            <div className="relative font-medium w-full px-1">
                <ul className="flex justify-between w-full relative">
                    {backgroundTypeTabs.map((backgroundTypeTab) => (
                        <BackgroundTypeTab
                            key={backgroundTypeTab.id}
                            activeBackgroundType={activeBackgroundType}
                            setActiveBackgroundType={setActiveBackgroundType}
                            backgroundTypeTab={backgroundTypeTab}
                        />
                    ))}
                </ul>
            </div>
            <div className="relative h-full overflow-auto">
                {backgroundOptions[activeBackgroundType.id as string]}
            </div>
        </div>
    );
};

type BackgroundTypeTabProps = {
    activeBackgroundType: BackgroundTabType;
    setActiveBackgroundType: React.Dispatch<
        React.SetStateAction<BackgroundTabType>
    >;
    backgroundTypeTab: BackgroundTabType;
};

export const BackgroundTypeTab = (props: BackgroundTypeTabProps) => {
    const { backgroundTypeTab, activeBackgroundType, setActiveBackgroundType } =
        props;

    return (
        <li
            className={clsx(
                "w-1/2 text-center",
                activeBackgroundType.id === backgroundTypeTab.id
                    ? "text-gray-800  border-b-4 border-b-primary "
                    : "text-gray-400"
            )}>
            <button
                className="h-2.625"
                onClick={() => {
                    setActiveBackgroundType(backgroundTypeTab);
                }}>
                {backgroundTypeTab.title}
            </button>
        </li>
    );
};

export default BackgroundToolOptions;
