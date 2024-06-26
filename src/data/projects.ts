import { fabric } from "fabric";

export type fieldObject = {
    [key: string]: fabric.Object;
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
        name: "Blog Post Design",
        thumbnailUrl: "/images/projects/thumbnails/thumbnail_1.jpg",
        listId: 1,
        images: [
            "/images/projects/thumbnails/thumbnail_1.jpg",
            "/images/projects/thumbnails/thumbnail_2.jpg",
            "/images/projects/thumbnails/thumbnail_3.jpg",
            "/images/projects/thumbnails/thumbnail_4.jpg",
            "/images/projects/thumbnails/thumbnail_5.jpg",
        ],
        canvas: `{
            "width": 800,
            "height": 400,
            "backgroundColor": "#fff",
            "version": "5.3.0",
            "objects": [],
            "background": "#ffffff"
        }
        `,
    },
];

const oldProjec1 = {
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
        "width": 800,
        "height": 400,
        "backgroundColor": "#fff",
        "version": "5.3.0",
        "objects": [
            {
                "type": "image",
                "version": "5.3.0",
                "originX": "left",
                "originY": "top",
                "left": 83,
                "top": 13,
                "width": 722,
                "height": 1082,
                "fill": "rgb(0,0,0)",
                "stroke": null,
                "strokeWidth": 0,
                "strokeDashArray": null,
                "strokeLineCap": "butt",
                "strokeDashOffset": 0,
                "strokeLineJoin": "miter",
                "strokeUniform": false,
                "strokeMiterLimit": 4,
                "scaleX": 0.15,
                "scaleY": 0.18,
                "angle": 0,
                "flipX": false,
                "flipY": false,
                "opacity": 1,
                "shadow": null,
                "visible": true,
                "backgroundColor": "",
                "fillRule": "nonzero",
                "paintFirst": "fill",
                "globalCompositeOperation": "source-over",
                "skewX": 0,
                "skewY": 0,
                "cropX": 0,
                "cropY": 0,
                "src": "http://localhost:3000/images/lists/default.jpg",
                "crossOrigin": null,
                "filters": []
            },
            {
                "type": "image",
                "version": "5.3.0",
                "originX": "left",
                "originY": "top",
                "left": 87,
                "top": 10,
                "width": 722,
                "height": 1082,
                "fill": "rgb(0,0,0)",
                "stroke": null,
                "strokeWidth": 0,
                "strokeDashArray": null,
                "strokeLineCap": "butt",
                "strokeDashOffset": 0,
                "strokeLineJoin": "miter",
                "strokeUniform": false,
                "strokeMiterLimit": 4,
                "scaleX": 0.18,
                "scaleY": 0.18,
                "angle": 0,
                "flipX": false,
                "flipY": false,
                "opacity": 1,
                "shadow": null,
                "visible": true,
                "backgroundColor": "",
                "fillRule": "nonzero",
                "paintFirst": "fill",
                "globalCompositeOperation": "source-over",
                "skewX": 0,
                "skewY": 0,
                "cropX": 0,
                "cropY": 0,
                "src": "http://localhost:3000/images/lists/default.jpg",
                "crossOrigin": null,
                "filters": []
            },
            {
                "type": "textbox",
                "version": "5.3.0",
                "originX": "left",
                "originY": "top",
                "left": 0,
                "top": 0,
                "width": 104.43,
                "height": 45.2,
                "fill": "rgb(0,0,0)",
                "stroke": null,
                "strokeWidth": 1,
                "strokeDashArray": null,
                "strokeLineCap": "butt",
                "strokeDashOffset": 0,
                "strokeLineJoin": "miter",
                "strokeUniform": false,
                "strokeMiterLimit": 4,
                "scaleX": 1,
                "scaleY": 1,
                "angle": 0,
                "flipX": false,
                "flipY": false,
                "opacity": 1,
                "shadow": null,
                "visible": true,
                "backgroundColor": "",
                "fillRule": "nonzero",
                "paintFirst": "fill",
                "globalCompositeOperation": "source-over",
                "skewX": 0,
                "skewY": 0,
                "fontFamily": "Times New Roman",
                "fontWeight": "normal",
                "fontSize": 40,
                "text": "rollNo",
                "underline": false,
                "overline": false,
                "linethrough": false,
                "textAlign": "left",
                "fontStyle": "normal",
                "lineHeight": 1.16,
                "textBackgroundColor": "",
                "charSpacing": 0,
                "styles": [],
                "direction": "ltr",
                "path": null,
                "pathStartOffset": 0,
                "pathSide": "left",
                "pathAlign": "baseline",
                "minWidth": 20,
                "splitByGrapheme": false
            }
        ],
        "background": "#ffffff"
    }
    `,
};
