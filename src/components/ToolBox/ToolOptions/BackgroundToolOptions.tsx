import { useActiveProject } from "@/context/useActiveProject";
import { useCanvas } from "@/context/useCanvas";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fabric } from "fabric";
import { IoChevronDown } from "react-icons/io5";

type BackgroundOptionsProps = {};

type BackgroundTabType = {
    id: string;
    title: string;
};

type ColorBackgroundOptionsProps = {};

export const ColorBackgroundOptions = (props: ColorBackgroundOptionsProps) => {
    const { canvas } = useCanvas();
    const [backgroundColor, setBackgroundColor] = useState("white");

    useEffect(() => {
        if (!canvas) {
            return;
        }
        setBackgroundColor((canvas.backgroundColor as string) || "white");
    }, [canvas]);

    return (
        <div className="relative flex-col flex gap-0.5 p-1">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <div
                        className="h-2.5 w-2.5 rounded-full shadow-inner bg-primary border border-gray-100"
                        style={{
                            background: backgroundColor,
                        }}></div>
                    <p className="font-medium text-gray-700">
                        {backgroundColor}
                    </p>
                </div>
                <label
                    htmlFor="backgroundColorInput"
                    className=" cursor-pointer">
                    <IoChevronDown className="text-gray-600" />
                </label>
                <input
                    onChange={(e) => {
                        if (!canvas) {
                            return;
                        }
                        // @ts-ignore
                        canvas.setBackgroundImage(null, () => {});

                        canvas.setBackgroundColor(e.target.value, () => {
                            setBackgroundColor(
                                canvas.backgroundColor as string
                            );
                        });
                        canvas.renderAll();
                    }}
                    id="backgroundColorInput"
                    type="color"
                    className="absolute invisible top-2.5"
                />
            </div>
        </div>
    );
};

type PictureBackgroundOptionsProps = {};

export const PictureBackgroundOptions = (
    props: PictureBackgroundOptionsProps
) => {
    const { activeProject, setActiveProject } = useActiveProject();
    const { canvas } = useCanvas();

    const handleBackgroundImageClick = (imgUrl: string) => {
        if (!canvas) {
            return;
        }
        fabric.Image.fromURL(imgUrl, (bgImg) => {
            const canvasHeight = canvas.getHeight();
            const canvasWidth = canvas.getWidth();
            const canvasZoomLevel = canvas?.getZoom() || 1;
            const percievedCanvasHeight = canvasHeight / canvasZoomLevel;
            const percievedCanvasWidth = canvasWidth / canvasZoomLevel;
            bgImg.scaleToWidth(percievedCanvasWidth);

            if (bgImg.getScaledHeight() < percievedCanvasHeight) {
                bgImg.scaleToHeight(percievedCanvasHeight);
            }

            const centerX = percievedCanvasWidth / 2;
            const centerY = percievedCanvasHeight / 2;
            bgImg.set({
                left: centerX - bgImg.getScaledWidth() / 2,
                top: centerY - bgImg.getScaledHeight() / 2,
            });
            canvas.setBackgroundImage(bgImg, () => {});
            canvas.renderAll();
        });
    };

    console.log(canvas?.backgroundImage);

    return (
        <div className="relative flex-col flex gap-0.5 p-1">
            {activeProject.images?.map((imageUrl, index) => (
                <div key={index} className="relative">
                    <Image
                        className="rounded-1 cursor-pointer"
                        src={imageUrl}
                        width={300}
                        height={300}
                        alt={imageUrl}
                        onClick={() => {
                            handleBackgroundImageClick(imageUrl);
                        }}
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
