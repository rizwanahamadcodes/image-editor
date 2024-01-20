import { List } from "@/data/lists";
import { useCurrentUser } from "@/context/useCurrentUser";
import { selectListByUserId } from "@/store/slices/listsSlice";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useCurrentProject } from "@/context/useCurrentProject";
import FieldView from "@/components/ToolBox/ToolProperties/FieldToolProperties/FieldView";
import ListView from "@/components/ToolBox/ToolProperties/FieldToolProperties/ListsView";

type FieldToolPropertiesProps = {};

const FieldToolProperties = (props: FieldToolPropertiesProps) => {
    const {} = props;
    const [selectedList, setSelectedList] = useState<List | null>(null);
    const currentUser = useCurrentUser();
    const currentUsersLists = useSelector((state: RootState) =>
        selectListByUserId(state, currentUser.userId)
    );

    const { project, setProject } = useCurrentProject();

    useEffect(() => {
        console.log("listid was changed", project.listId), [project.listId];
    });

    if (project.listId) {
        return <FieldView listId={project.listId} />;
    }

    return <ListView />;
};

export default FieldToolProperties;
