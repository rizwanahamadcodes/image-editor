import { OptionsBar } from "@/components/OptionsBar/OptionsBar";
import Canvas from "../Canvas/Canvas";
import StatusBar from "@/components/EditingWindow/EditingWindow/StatusBar/StatusBar";

type EditingWindowProps = {};

const EditingWindow = (props: EditingWindowProps) => {
    const {} = props;

    return (
        <main className="flex grow flex-col">
            <OptionsBar />
            <section className="grow">
                <Canvas />
                <StatusBar />
            </section>
        </main>
    );
};

export default EditingWindow;
