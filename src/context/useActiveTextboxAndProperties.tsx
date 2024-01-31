import { Gradient, Pattern } from "fabric/fabric-impl";
import { createContext, useContext } from "react";
import { fabric } from "fabric";

export type TextboxPropertiesType = {
    fontFamily: string;
    color: string | Pattern | Gradient;
    fontSize: number;
    alignment: string;
    isBold: boolean;
    isItalic: boolean;
    isUnderlined: boolean;
};

type ActiveTextboxAndPropertiesContextType = {
    activeTextbox: fabric.Textbox;
    activeTextboxProperties: TextboxPropertiesType;
    setActiveTextboxProperties: React.Dispatch<
        React.SetStateAction<TextboxPropertiesType>
    >;
};

export const ActiveTextboxAndPropertiesContext =
    createContext<ActiveTextboxAndPropertiesContextType | null>(null);

export const useActiveTextboxAndProperties = () => {
    const activeTextboxAndProperties = useContext(
        ActiveTextboxAndPropertiesContext
    );

    if (!activeTextboxAndProperties) {
        throw new Error(
            "useActiveTextboxAndProperties has to be within <ActiveTextboxAndPropertiesContext.Provider>"
        );
    }

    return activeTextboxAndProperties;
};
