import { List } from "@/data/lists";
import { useCurrentUser } from "@/context/useCurrentUser";
import { selectListByUserId } from "@/store/slices/listsSlice";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useCurrentProject } from "@/context/useCurrentProject";
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

    const { project, setProject } = useCurrentProject();

    if (project.listId) {
        return <FieldView listId={project.listId} />;
    }

    return <ListView />;
};

export default FieldToolOptions;
