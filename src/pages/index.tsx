import Button from "@/components/Button/Button";
import Container from "@/components/Container";
import { PageHeading, PageSubHeading } from "@/components/Section/Section";
import Image from "next/image";

const Home = () => {
    return (
        <section className="h-[calc(100vh-theme(spacing.navHeight))]">
            <Container className="flex h-full gap-1 items-center">
                <div className="flex-1 flex justify-start items-center relative  h-full">
                    <div className="w-4/5 h-4/5 relative">
                        <Image
                            src={"/hero-2.png"}
                            fill
                            alt="hero-image"
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>
                <div className="flex-1 gap-2 flex flex-col">
                    <div>
                        <PageHeading>Create Designs in a snap</PageHeading>
                        <PageSubHeading>
                            An easy-to-use online design tool for creating
                            stunning graphics—no design skills needed.
                        </PageSubHeading>
                    </div>
                    <div className="flex gap-1">
                        <Button
                            variant="solid"
                            size="lg"
                            colorScheme="primary-gradient"
                            roundness="full">
                            Start Creating
                        </Button>
                        <Button
                            variant="outline-thick"
                            size="lg"
                            colorScheme="gray-500"
                            roundness="full">
                            Start Creating
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Home;
