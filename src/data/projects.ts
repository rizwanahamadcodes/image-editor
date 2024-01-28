import { fabric } from "fabric";

export type fieldObject = {
    [key: string]: fabric.Object;
};

export type Project = {
    projectId: number;
    userId: number;
    name: string;
    thumbnailUrl?: string;
    canvas: string;
    listId?: number;
    images?: string[];
};

export const projects: Project[] = [
    {
        projectId: 1,
        userId: 1,
        name: "Student ID card",
        thumbnailUrl: "/images/projects/thumbnails/thumbnail_1.jpg",
        listId: 1,
        images: [
            "/images/projects/thumbnails/thumbnail_1.jpg",
            "/images/projects/thumbnails/thumbnail_2.jpg",
            "/images/projects/thumbnails/thumbnail_3.jpg",
            "/images/projects/thumbnails/thumbnail_4.jpg",
        ],
        canvas: "new fabric.Canvas(null, { height: 400, width: 300 })",
    },
    {
        projectId: 2,
        userId: 1,
        name: "Employee ID card",
        thumbnailUrl: "/images/projects/thumbnails/thumbnail_2.jpg",
        listId: 2,
        images: [
            "/images/projects/thumbnails/thumbnail_5.jpg",
            "/images/projects/thumbnails/thumbnail_6.jpg",
            "/images/projects/thumbnails/thumbnail_7.jpg",
        ],
        canvas: "new fabric.Canvas(null, { height: 600, width: 900 })",
    },
];
