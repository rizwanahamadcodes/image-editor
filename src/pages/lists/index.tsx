import { FullWidthContainer } from "@/components/Container";
import Section, { SectionTitle } from "@/components/Section/Section";
import { useCurrentUser } from "@/context/useCurrentUser";
import lists, { List } from "@/data/lists";
import { pathConstants } from "@/routes/pathContants";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";

type ListsProps = {};

const Lists = (props: ListsProps) => {
    const {} = props;
    const currentUser = useCurrentUser();

    const activeLists = lists.filter(
        (list) => list.userId === currentUser.userId
    );

    return (
        <Section>
            <FullWidthContainer>
                <SectionTitle>All lists</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
                    <AddNewList />
                    {activeLists.map((activeList) => (
                        <ListCard key={activeList.listId} list={activeList} />
                    ))}
                </div>
            </FullWidthContainer>
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
                href={`${pathConstants.LISTS.path}/${list.listId}`}
                className="text-gray-700">
                {list.name}
            </Link>
            <div className="text-0.875 text-gray-500 max-w-full overflow-ellipsis overflow-hidden whitespace-nowrap">
                {Object.keys(list.data[0]).join(", ")}
            </div>
        </div>
    );
};

type AddNewListProps = {};

export const AddNewList = (props: AddNewListProps) => {
    const {} = props;

    return (
        <div className="border border-gray-100 rounded-0.5 p-1 bg-gray-50 flex items-center justify-center cursor-pointer hover:border-gray-400 hover:bg-gray-100 text-gray-550 transition-all group/addNewListGroup">
            <BiPlus className="group-hover/addNewListGroup:text-gray-600 transition-all text-gray-500 text-2.75" />
        </div>
    );
};

export default Lists;
