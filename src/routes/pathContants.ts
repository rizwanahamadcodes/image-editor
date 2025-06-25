import { IconType } from "react-icons";

export type ParamConstants = {
    [key: string]: string;
};

export const paramConstants: ParamConstants = {
    PROJECTID: "projectId",
    LISTID: "listId",
};

export type PathConstant = {
    label: string;
    path: string;
    icon?: IconType;
    activeIcon?: IconType;
};

export type pathConstants = {
    [key: string]: PathConstant;
};

export const pathConstants: pathConstants = {
    HOME: { label: "Home", path: "/" },
    PROJECTS: { label: "Projects", path: "/projects" },
    PROJECTDETAILS: {
        label: "Project Detail",
        path: `/projects/:${paramConstants.PROJECTID}`,
    },
    EDITPROJECT: {
        label: "Edit Project",
        path: `/projects/:${paramConstants.PROJECTID}/edit`,
    },
    LISTS: { label: "Lists", path: "/lists" },
    LISTDETAILS: {
        label: "List Detail",
        path: `/lists/:${paramConstants.LISTID}`,
    },
    EDITLIST: {
        label: "Edit List",
        path: `/lists/:${paramConstants.LISTID}/edit`,
    },
};
