import DashboardLayout from "@/Layouts/DashboardLayout";
import Container, { FullWidthContainer } from "@/components/Container";
import Section, { SectionTitle } from "@/components/Section/Section";
import lists, { List } from "@/data/lists";
import { paramConstants } from "@/routes/pathContants";
import { useRouter } from "next/router";

type ListDetailsProps = {};

const ListDetails = (props: ListDetailsProps) => {
    const {} = props;
    const router = useRouter();
    const listIdString = router.query[paramConstants.LISTID] as string;
    const listId = listIdString ? parseInt(listIdString) : undefined;

    const list = lists.find((list) => list.listId === listId);

    if (!list) {
        return (
            <Section>
                <FullWidthContainer>
                    <SectionTitle>The list was not found</SectionTitle>
                </FullWidthContainer>
            </Section>
        );
    }

    return (
        <Section>
            <FullWidthContainer>
                <SectionTitle>{list.name}</SectionTitle>
                <ListTable list={list} />
            </FullWidthContainer>
        </Section>
    );
};

type ListTableProps = {
    list: List;
};

export const ListTable = (props: ListTableProps) => {
    const { list } = props;

    return (
        <div className="overflow-auto">
            <table className="border border-gray-100">
                <thead>
                    <tr>
                        {Object.keys(list.data[0]).map((listColumnName) => (
                            <th
                                key={listColumnName}
                                className="bg-gray-100 text-left border border-gray-200 font-semibold px-1 py-0.5 text-gray-800">
                                {listColumnName}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {list.data.map((dataRow, index) => (
                        <tr key={index}>
                            {Object.keys(dataRow).map((dataCell, index) => (
                                <td
                                    className=" border border-gray-100 px-1 py-0.5"
                                    key={index}>
                                    {dataRow[dataCell]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

ListDetails.getLayout = DashboardLayout;

export default ListDetails;
