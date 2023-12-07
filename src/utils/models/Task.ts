export type Task = {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    assignees: string[],
    labels: string[],
    categoryId: number;
}