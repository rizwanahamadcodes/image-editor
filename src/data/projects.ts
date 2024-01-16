export type Project = {
    projectId: number;
    userId: number;
    name: string;
    thumbnailUrl: string;
    listId: number;
    templateId: number;
};

export const projects: Project[] = [
    {
        projectId: 1,
        userId: 1,
        name: "Student ID card",
        thumbnailUrl: "/images/projects/thumbnails/thumbnail_1.jpg",
        listId: 1,
        templateId: 1,
    },
    {
        projectId: 1,
        userId: 1,
        name: "Employee ID card",
        thumbnailUrl: "/images/projects/thumbnails/thumbnail_2.jpg",
        listId: 2,
        templateId: 2,
    },
];
