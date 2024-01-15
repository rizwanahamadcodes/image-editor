import { useState } from "react";
import { NavMenuProps } from "./NavMenu/NavMenu";

export type TabIndicatorBoundsType = {
    left: number;
    top: number;
    height: number;
    width: number;
};

type TabIndicatorProps = {
    tabIndicatorBounds: TabIndicatorBoundsType;
    direction?: NavMenuProps["direction"];
};

const TabIndicator = (props: TabIndicatorProps) => {
    const { tabIndicatorBounds, direction = "horizontal" } = props;

    const tabIndicatorBoundsMap = {
        horizontal: {
            height: "0.25rem",
            width: tabIndicatorBounds.width,
            left: tabIndicatorBounds.left,
            bottom: 0,

            borderRadius: "100px 100px 0 0",
        },
        vertical: {
            height: tabIndicatorBounds.height,
            width: "0.25rem",
            left: 0,
            top: tabIndicatorBounds.top,

            borderRadius: "0 100px 100px  0",
        },
    };

    return (
        <div
            style={tabIndicatorBoundsMap[direction]}
            className="absolute bg-primary transition-all"></div>
    );
};

export const useTabIndicator = (
    intialTabIndicatorBounds: TabIndicatorBoundsType
) => {
    const [tabIndicatorBounds, setTabIndicatorBounds] =
        useState<TabIndicatorBoundsType>(intialTabIndicatorBounds);

    return { tabIndicatorBounds, setTabIndicatorBounds };
};

export default TabIndicator;
