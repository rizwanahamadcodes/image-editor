export type Project = {
    productId: number;
    name: string;
    thumbnailUrl: string;
    listId: number;
    templateId: number;
};

const projects: Project[] = [
    {
        productId: 1,
        name: "Student ID card",
        thumbnailUrl: "/images/projects/thumbnails/thumbnail_1.jpg",
        listId: 1,
        templateId: 1,
    },
    {
        productId: 1,
        name: "Employee ID card",
        thumbnailUrl: "/images/projects/thumbnails/thumbnail_1.jpg",
        listId: 2,
        templateId: 2,
    },
];
