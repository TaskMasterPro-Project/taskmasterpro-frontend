export type Task = {
    id: string;
    name: string;
    description: string;
    dueDate: Date;
    assignees: string[],
    labels: string[]
}