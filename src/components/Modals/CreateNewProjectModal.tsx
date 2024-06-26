import Modal, {
    DefaultModalHead,
    ModalBody,
    ModalProps,
} from "@/components/Modal/Modal";
import { useCurrentUser } from "@/context/useCurrentUser";
import newProjectSchema, { NewProjectSchema } from "@/schemas/newProjectSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import Input, { InputControl, InputFeedback, Label } from "../Input/Input";
import { fabric } from "fabric";
import { Project } from "@/data/projects";
import {
    addProject,
    selectAllProject,
    selectProjectById,
} from "@/store/slices/projectsSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { pathConstants } from "@/routes/pathContants";

type CreateNewProjectModalProps = Omit<ModalProps, "children">;

const CreateNewProjectModal = (props: CreateNewProjectModalProps) => {
    const { isOpen, open, close } = props;

    return (
        <Modal isOpen={isOpen} open={open} close={close}>
            <DefaultModalHead>Create New Project</DefaultModalHead>
            <ModalBody>
                <CreateNewProjectForm close={close} />
            </ModalBody>
        </Modal>
    );
};

type CreateNewProjectFormProps = {
    close: () => void;
};

export const CreateNewProjectForm = (props: CreateNewProjectFormProps) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { userId } = useCurrentUser();
    const { close } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewProjectSchema>({
        resolver: zodResolver(newProjectSchema),
    });

    const handleCreateNewProjectFormSubmit: SubmitHandler<
        NewProjectSchema
    > = async (data) => {
        const canvas = new fabric.Canvas(null, {
            height: data.height,
            width: data.width,
            backgroundColor: "#ffffff",
        });

        const stringifiedCanvas = JSON.stringify(
            canvas.toJSON(["height", "width", "backgroundColor"])
        );

        const project: Project = {
            projectId: 1000 + new Date().getTime(),
            canvas: stringifiedCanvas,
            name: data.name,
            userId: userId,
            thumbnailUrl: "/images/projects/thumbnails/thumbnail_4.jpg",
            images: [
                "/images/projects/thumbnails/thumbnail_1.jpg",
                "/images/projects/thumbnails/thumbnail_2.jpg",
                "/images/projects/thumbnails/thumbnail_3.jpg",
                "/images/projects/thumbnails/thumbnail_4.jpg",
                "/images/projects/thumbnails/thumbnail_5.jpg",
            ],
        };

        dispatch(addProject(project));

        router.push(`${pathConstants.PROJECTS.path}/${project.projectId}/edit`);
    };

    const allProjects = useSelector((state: RootState) =>
        selectAllProject(state)
    );

    return (
        <form
            onSubmit={handleSubmit(handleCreateNewProjectFormSubmit)}
            className="flex flex-col gap-1.5">
            <InputControl>
                <Label htmlFor="projectName">Name:</Label>
                <Input
                    id="projectName"
                    {...register("name")}
                    error={errors["name"]}
                />
                <InputFeedback error={errors["name"]} />
            </InputControl>
            <div className="flex gap-1">
                <InputControl>
                    <Label htmlFor="projectWidth">Width:</Label>
                    <Input
                        id="projectWidth"
                        {...register("width")}
                        error={errors["width"]}
                    />
                    <InputFeedback error={errors["width"]} />
                </InputControl>
                <InputControl>
                    <Label htmlFor="projectHeight">Height</Label>
                    <Input
                        id="projectHeight"
                        {...register("height")}
                        error={errors["height"]}
                    />
                    <InputFeedback error={errors["height"]} />
                </InputControl>
            </div>
            <div className="flex justify-end gap-1">
                <Button
                    variant="ghost"
                    type="reset"
                    colorScheme="gray-900"
                    size="sm"
                    onClick={close}>
                    Cancel
                </Button>
                <Button
                    type="submit"
                    variant="solid"
                    colorScheme="gray-900"
                    size="sm">
                    OK
                </Button>
            </div>
        </form>
    );
};

export default CreateNewProjectModal;
