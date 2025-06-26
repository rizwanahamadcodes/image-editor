import { useToggle } from "@/hooks/useToggle";
import { useRef } from "react";

export const EditPageLayout = (page: React.ReactNode) => {
    const { open, isOpen, close } = useToggle(false);
    const hamburgerRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="h-[100dvh] relative flex flex-col overflow-auto">
            {page}
        </div>
    );
};
