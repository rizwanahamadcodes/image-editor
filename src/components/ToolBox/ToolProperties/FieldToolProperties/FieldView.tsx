import { useCurrentProject } from "@/context/useCurrentProject";
import { Project } from "@/data/projects";
import { selectListByListId } from "@/store/slices/listsSlice";
import { RootState } from "@/store/store";
import { IoChevronBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

type FieldViewProps = { listId: number };

const FieldView = (props: FieldViewProps) => {
    const { listId } = props;
    const { project, setProject } = useCurrentProject();

    console.log("Listdid in field bewo", listId);
    const list = useSelector((state: RootState) =>
        selectListByListId(state, listId)
    );
    console.log("Listdid in field bewo", list);

    const handleSelectAnotherClick = () => {
        setProject({ ...project, listId: undefined });
    };

    if (!list) {
        return "null";
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
                {Object.keys(list.data[0]).map((columnName) => (
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

export default FieldView;
