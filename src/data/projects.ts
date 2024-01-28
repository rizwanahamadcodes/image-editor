import { fabric } from "fabric";

export type fieldObject = {
    [key: string]: fabric.Object;
};

export type CanvasType = {
    version: string;
    objects: fabric.Object[];
    height: number;
    width: number;
};

export type CanvasProperties = {
    width: number;
    height: number;
    backgroundColor?: string;
    backgroundImage?: string;
};

export type ActiveProject = {
    canvasProperties: CanvasProperties;
    canvasObjects: fabric.Object[];
    thumbnailUrl?: string;
    listId?: number;
    images?: string[];
};

export type Project = {
    projectId: number;
    userId: number;
    name: string;
    canvas: string;
    thumbnailUrl?: string;
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
        canvas: `{
            "canvasProperties": {
              "height": 200,
              "width": 400,
              "backgroundColor": "#ffffff"
            },
            "canvasObjects": []
          }`,
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
        canvas: `{
            "canvasProperties": {
              "height": 400,
              "width": 800,
              "backgroundColor": "#ffffff"
            },
            "canvasObjects": []
          }`,
    },
];
