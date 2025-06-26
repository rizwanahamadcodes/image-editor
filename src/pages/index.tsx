import Button from "@/components/Button/Button";
import Container from "@/components/Container";
import { PageHeading, PageSubHeading } from "@/components/Section/Section";
import Image from "next/image";

const Home = () => {
    return (
        <section className="h-[calc(100vh-theme(spacing.navHeight))] lg:py-4 pt-1">
            <Container className="flex h-full gap-1  items-start justify-center flex-col-reverse lg:flex-row">
                <div className="flex-1 flex justify-center lg:justify-start items-center relative  h-full w-full ">
                    <div className="lg:w-4/5 lg:h-4/5 w-full h-full relative lg:block">
                        <Image
                            src={"/hero-2.png"}
                            fill
                            alt="hero-image"
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>
                <div className="flex-1 gap-1  flex flex-col">
                    <div>
                        <PageHeading className="">
                            Create Designs in a snap
                        </PageHeading>
                        <PageSubHeading>
                            An easy-to-use online design tool for creating
                            stunning graphics—no design skills needed.
                        </PageSubHeading>
                    </div>
                    <div className="flex gap-1.5 flex-col">
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
