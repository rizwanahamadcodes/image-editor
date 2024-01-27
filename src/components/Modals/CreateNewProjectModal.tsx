import Modal, {
    DefaultModalHead,
    ModalBody,
    ModalProps,
} from "@/components/Modal/Modal";
import Input, { InputControl, Label } from "../Input/Input";
import Button from "../Button/Button";

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
    const handleCreateNewProjectFormSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
    };

    return (
        <form
            onSubmit={(e) => handleCreateNewProjectFormSubmit(e)}
            className="flex flex-col gap-1.5">
            <InputControl>
                <Label htmlFor="projectName">Name:</Label>
                <Input id="projectName" />
            </InputControl>
            <div className="flex gap-1">
                <InputControl>
                    <Label htmlFor="projectHeight">Height</Label>
                    <Input id="projectHeight" />
                </InputControl>
                <InputControl>
                    <Label htmlFor="projectWidth">Width:</Label>
                    <Input id="projectWidth" />
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
