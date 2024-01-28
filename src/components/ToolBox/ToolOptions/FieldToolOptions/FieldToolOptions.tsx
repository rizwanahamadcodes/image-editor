import { List } from "@/data/lists";
import { useCurrentUser } from "@/context/useCurrentUser";
import { selectListByUserId } from "@/store/slices/listsSlice";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useActiveProject } from "@/context/useActiveProject";
import FieldView from "@/components/ToolBox/ToolOptions/FieldToolOptions/FieldView";
import ListView from "@/components/ToolBox/ToolOptions/FieldToolOptions/ListsView";

type FieldToolOptionsProps = {};

const FieldToolOptions = (props: FieldToolOptionsProps) => {
    const {} = props;
    const [selectedList, setSelectedList] = useState<List | null>(null);
    const currentUser = useCurrentUser();
    const currentUsersLists = useSelector((state: RootState) =>
        selectListByUserId(state, currentUser.userId)
    );

    const { activeProject, setActiveProject } = useActiveProject();

    if (activeProject.listId) {
        return <FieldView listId={activeProject.listId} />;
    }

    return <ListView />;
};

export default FieldToolOptions;
