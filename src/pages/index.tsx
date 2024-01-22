import Drawer from "@/components/Drawer/Drawer";
import { useToggle } from "@/hooks/useToggle";

type HomeProps = {};

const Home = (props: HomeProps) => {
    const {} = props;
    const { isOpen, open, close } = useToggle(true);

    return (
        <main>
            <Drawer isOpen={isOpen} open={open} close={close}>
                Hello
            </Drawer>
        </main>
    );
};

export default Home;
