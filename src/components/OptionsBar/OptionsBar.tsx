import { FullWidthContainer } from "../Container";

type OptionsBarProps = {};

export const OptionsBar = (props: OptionsBarProps) => {
    const {} = props;

    return (
        <div className="border-b border-b-gray-100 h-4">
            <FullWidthContainer className="flex flex-col justify-center items-start h-full">
                <p className="font-medium text-gray-500">Options bar</p>
            </FullWidthContainer>
        </div>
    );
};
