import { createContext, useContext } from "react";
import { TextProperties } from "@/components/EditingWindow/PropertiesBar/TextProperties/TextProperties";

type TextPropertiesContextType = {
    textProperties: TextProperties;
    setTextProperties: React.Dispatch<React.SetStateAction<TextProperties>>;
};

export const TextPropertiesContext =
    createContext<TextPropertiesContextType | null>(null);

export const useTextProperties = () => {
    const textProperties = useContext(TextPropertiesContext);

    if (!textProperties) {
        throw new Error(
            "useTextProperties has to be within <TextPropertiesContext.Provide>"
        );
    }

    return textProperties;
};
