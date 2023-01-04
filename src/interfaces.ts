export interface ITask {

    id: string;
    text: string;
    isComplete: boolean;

}

export interface ListOfTasksProps {

    onCompletedTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
    tasks: ITask[];

}

export interface TaskProps {

    id: string;
    text: string;
    isComplete: boolean;
    onCompletedTask: (id: string) => void;
    onDeleteTask: (id: string) => void;

}