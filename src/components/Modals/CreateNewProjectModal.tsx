import Modal, {
    DefaultModalHead,
    ModalBody,
    ModalProps,
} from "@/components/Modal/Modal";
import Input, { InputControl, InputFeedback, Label } from "../Input/Input";
import Button from "../Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import newProjectSchema, { NewProjectSchema } from "@/schemas/newProjectSchema";

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
    const { close } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewProjectSchema>({
        resolver: zodResolver(newProjectSchema),
    });

    const handleCreateNewProjectFormSubmit: SubmitHandler<NewProjectSchema> = (
        data
    ) => {
        console.log(data);
    };

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
                    <Label htmlFor="projectHeight">Height</Label>
                    <Input
                        id="projectHeight"
                        {...register("height")}
                        error={errors["height"]}
                    />
                    <InputFeedback error={errors["height"]} />
                </InputControl>
                <InputControl>
                    <Label htmlFor="projectWidth">Width:</Label>
                    <Input
                        id="projectWidth"
                        {...register("width")}
                        error={errors["width"]}
                    />
                    <InputFeedback error={errors["width"]} />
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
