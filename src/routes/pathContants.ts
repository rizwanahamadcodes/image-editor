export type ParamConstants = {
    [key: string]: string;
};

export const paramConstants: ParamConstants = {
    PROJECTID: "projectId",
    LISTID: "listId",

    DASHBOARDPROJECTID: "projectId",
    DASHBOARDLISTID: "listId",
};

export type PathConstant = {
    label: string;
    path: string;
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
    PROJECTEDIT: {
        label: "Project Edit",
        path: `/projects/:${paramConstants.PROJECTID}/edit`,
    },

    LISTS: { label: "Lists", path: "/lists" },
    LISTDETAILS: {
        label: "List Detail",
        path: `/lists/:${paramConstants.LISTID}`,
    },
    LISTEDIT: {
        label: "List Edit",
        path: `/lists/:${paramConstants.LISTID}/edit`,
    },
    DASHBOARD: {
        label: "Dashboard",
        path: "/dashboard",
    },
    DASHBOARDLISTS: {
        label: "Lists",
        path: "/dashboard/lists",
    },
    DASHBOARDLISTDETAILS: {
        label: "Dashboard List Details",
        path: `/dashboard/lists:${paramConstants.DASHBOARDLISTDETAILS}`,
    },
    DASHBOARDPROJECTS: {
        label: "Projects",
        path: "/dashboard/projects",
    },
    DASHBOARDPROJECTDETAILS: {
        label: "Dashboard Project Details",
        path: `/dashboard/projects:${paramConstants.DASHBOARDPROJECTTID}`,
    },
} as const;
