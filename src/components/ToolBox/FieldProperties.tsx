import { List } from "@/data/lists";
import { useCurrentUser } from "@/pages/useCurrentUser";
import { selectListByUserId } from "@/store/slices/listsSlice";
import { RootState } from "@/store/store";
import { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

type FieldPropertiesProps = {};

const FieldProperties = (props: FieldPropertiesProps) => {
    const {} = props;
    const [selectedList, setSelectedList] = useState<List | null>(null);
    const currentUser = useCurrentUser();
    const currentUsersLists = useSelector((state: RootState) =>
        selectListByUserId(state, currentUser.userId)
    );

    const handleListClick = (list: List) => {
        setSelectedList(list);
    };

    const handleSelectAnotherClick = () => {
        setSelectedList(null);
    };

    if (!selectedList) {
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
                            onClick={() => handleListClick(currentUsersList)}>
                            {currentUsersList.name}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-0.5">
            <button
                className="flex items-center gap-0.5 rounded-full px-1 h-2 border-gray-200 border font-medium text-gray-400 hover:border-gray-300 hover:text-gray-600 mb-1"
                onClick={handleSelectAnotherClick}>
                <IoChevronBackOutline /> Select Another
            </button>
            <h4 className="text-gray-400 font-medium">
                Click to add to the project
            </h4>
            <div className="flex flex-wrap gap-0.5">
                {Object.keys(selectedList.data[0]).map((columnName) => (
                    <p
                        key={columnName}
                        className="cursor-pointer hover:text-gray-700 hover:border-gray-400 p-0.75 border border-gray-200  rounded-1 text-gray-500 font-medium">
                        {columnName}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default FieldProperties;
