import Button, { ButtonIcon } from "@/components/Button/Button";

import React from "react";
import { HiMagnifyingGlassMinus, HiMagnifyingGlassPlus } from "react-icons/hi2";
import { MdOutlineFitScreen } from "react-icons/md";
type ZoomControlsProps = {};

const ZoomControls = (props: ZoomControlsProps) => {
    const {} = props;

    return (
        <div className="flex gap-0.5 flex-col sm:flex-row-reverse">
            <div className="flex gap-0.25  flex-col sm:flex-row">
                <Button
                    colorScheme="gray-200"
                    variant="outline"
                    regular
                    className="!text-0.5 !font-bold"
                    size="sm">
                    100%
                </Button>
                <Button
                    colorScheme="gray-200"
                    variant="outline"
                    regular
                    size="sm">
                    <ButtonIcon icon={MdOutlineFitScreen} />
                </Button>
            </div>
            <div className="flex gap-0.25  flex-col sm:flex-row">
                <Button
                    colorScheme="gray-200"
                    variant="outline"
                    regular
                    size="sm">
                    <ButtonIcon icon={HiMagnifyingGlassMinus} />
                </Button>
                <Button
                    colorScheme="gray-200"
                    variant="outline"
                    regular
                    size="sm">
                    <ButtonIcon icon={HiMagnifyingGlassPlus} />
                </Button>
            </div>
        </div>
    );
};

export default ZoomControls;
