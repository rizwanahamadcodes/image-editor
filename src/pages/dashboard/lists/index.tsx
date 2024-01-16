import DashboardLayout from "@/Layouts/DashboardLayout";
import Container from "@/components/Container";
import Section, { SectionTitle } from "@/components/Section/Section";
import lists, { List } from "@/data/lists";
import { pathConstants } from "@/routes/pathContants";
import Link from "next/link";
import { IoList } from "react-icons/io5";

type DashboardListsProps = {};

const DashboardLists = (props: DashboardListsProps) => {
    const {} = props;
    const activeUserId = 1;

    const activeLists = lists.filter((list) => list.userId === activeUserId);
    console.log(activeLists);

    return (
        <Section>
            <Container>
                <SectionTitle>All lists</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
                    {activeLists.map((activeList) => (
                        <ListCard key={activeList.listId} list={activeList} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

type ListCardProps = {
    list: List;
};

export const ListCard = (props: ListCardProps) => {
    const { list } = props;

    return (
        <div
            key={list.listId}
            className="border border-gray-200 rounded-1 flex flex-col p-0.75 items-start gap-0.25 font-medium">
            <Link
                href={`${pathConstants.DASHBOARDLISTS.path}/${list.listId}`}
                className="text-gray-700">
                {list.name}
            </Link>
            <div className="text-0.875 text-gray-500 max-w-full overflow-ellipsis overflow-hidden whitespace-nowrap">
                {Object.keys(list.data[0]).join(", ")}
            </div>
        </div>
    );
};

DashboardLists.getLayout = DashboardLayout;

export default DashboardLists;
