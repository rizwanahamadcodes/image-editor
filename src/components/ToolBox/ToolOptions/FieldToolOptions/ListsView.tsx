import { useCurrentProject } from "@/context/useCurrentProject";
import { useCurrentUser } from "@/context/useCurrentUser";
import { selectListByUserId } from "@/store/slices/listsSlice";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

type ListsViewProps = {};

const ListsView = (props: ListsViewProps) => {
    const {} = props;

    const { userId } = useCurrentUser();

    const { project, setProject } = useCurrentProject();

    const currentUsersLists = useSelector((state: RootState) =>
        selectListByUserId(state, userId)
    );

    const handleListClick = (listId: number) => {
        setProject({ ...project, listId: listId });
    };

    return (
        <div className="flex flex-col gap-1">
            <h4 className="text-gray-400 font-medium">
                Here are all of your lists, select one to view the available
                fields
            </h4>
            <div className="flex gap-0.5 flex-col">
                {currentUsersLists.map((currentUsersList) => (
                    <div
                        className="p-0.75 cursor-pointer hover:text-gray-700 hover:border-gray-400 text-gray-500 font-medium rounded-1 border border-gray-200"
                        key={currentUsersList.listId}
                        onClick={() => {
                            handleListClick(currentUsersList.listId);
                        }}>
                        {currentUsersList.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListsView;
