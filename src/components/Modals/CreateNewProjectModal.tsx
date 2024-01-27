import Modal, {
    DefaultModalHead,
    ModalBody,
    ModalFoot,
    ModalProps,
} from "@/components/Modal/Modal";
import clsx from "clsx";
import Input, { InputControl, Label } from "../Input/Input";

type CreateNewProjectModalProps = Omit<ModalProps, "children">;

const CreateNewProjectModal = (props: CreateNewProjectModalProps) => {
    const { isOpen, open, close } = props;

    return (
        <Modal isOpen={isOpen} open={open} close={close}>
            <DefaultModalHead>Create New Project</DefaultModalHead>
            <ModalBody>
                <CreateNewProjectForm />
            </ModalBody>
            <ModalFoot className="gap-1 flex justify-end">
                <button onClick={close}>Cancel</button>
                <button>Ok</button>
            </ModalFoot>
        </Modal>
    );
};

type CreateNewProjectFormProps = {};

export const CreateNewProjectForm = (props: CreateNewProjectFormProps) => {
    const {} = props;
    const handleCreateNewProjectFormSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {};

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
        </form>
    );
};

export default CreateNewProjectModal;
