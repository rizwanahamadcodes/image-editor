type FieldTypesType = {
    [key: string]: "textbox" | "image";
};

export type List = {
    listId: number;
    userId: number;
    name: string;
    data: {
        [key: string]: string;
    }[];
    fieldTypes: FieldTypesType;
};

export const studentsData = [
    { rollNo: "1", name: "John Doe", age: "20", grade: "A" },
    { rollNo: "2", name: "Jane Smith", age: "22", grade: "B" },
    {
        rollNo: "3",
        name: "Robert Johnson",
        age: "21",
        grade: "A-",
    },
    {
        rollNo: "4",
        name: "Emily Williams",
        age: "23",
        grade: "B+",
    },
    { rollNo: "5", name: "Michael Davis", age: "22", grade: "A" },
    { rollNo: "6", name: "Megan Taylor", age: "20", grade: "B" },
    { rollNo: "7", name: "David Miller", age: "24", grade: "C" },
    { rollNo: "8", name: "Olivia Brown", age: "21", grade: "A+" },
    {
        rollNo: "9",
        name: "Daniel Garcia",
        age: "22",
        grade: "B-",
    },
    { rollNo: "10", name: "Sophia Clark", age: "20", grade: "A-" },
];

export const studentsFieldTypes: FieldTypesType = {
    rollNo: "textbox",
    name: "textbox",
    age: "textbox",
    grade: "textbox",
};

export const employeesData = [
    {
        employeeId: "E201",
        name: "William Turner",
        position: "Manager",
        department: "HR",
    },
    {
        employeeId: "E202",
        name: "Emma White",
        position: "Developer",
        department: "IT",
    },
    {
        employeeId: "E203",
        name: "Christopher Lee",
        position: "Designer",
        department: "Marketing",
    },
    {
        employeeId: "E204",
        name: "Sophie Walker",
        position: "Analyst",
        department: "Finance",
    },
    {
        employeeId: "E205",
        name: "Nathan Harris",
        position: "Engineer",
        department: "IT",
    },
    {
        employeeId: "E206",
        name: "Ella Moore",
        position: "Coordinator",
        department: "HR",
    },
    {
        employeeId: "E207",
        name: "Andrew Carter",
        position: "Supervisor",
        department: "Operations",
    },
    {
        employeeId: "E208",
        name: "Grace Anderson",
        position: "Manager",
        department: "Finance",
    },
    {
        employeeId: "E209",
        name: "Liam Parker",
        position: "Developer",
        department: "IT",
    },
    {
        employeeId: "E210",
        name: "Ava Johnson",
        position: "Analyst",
        department: "Marketing",
    },
];

export const employeesFieldTypes: FieldTypesType = {
    employeeId: "textbox",
    name: "textbox",
    position: "image",
    department: "textbox",
};

export const lists: List[] = [
    {
        listId: 1,
        userId: 1,
        name: "Students",
        data: studentsData,
        fieldTypes: studentsFieldTypes,
    },
    {
        listId: 2,
        userId: 1,
        name: "Employees",
        data: employeesData,
        fieldTypes: employeesFieldTypes,
    },
];

export default lists;
