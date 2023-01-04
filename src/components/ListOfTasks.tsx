
import { ListOfTasksProps } from "../interfaces";
import styles from "./ListOfTasks.module.css";
import { Task } from "./Task";

export function ListOfTasks ({onCompletedTask, onDeleteTask, tasks}: ListOfTasksProps) {

    return (

        <ul className={styles.list}>

            {tasks.map((task) => {

                return (

                    <Task 
                        key={task.id}
                        onCompletedTask={onCompletedTask}
                        onDeleteTask={onDeleteTask} 
                        id={task.id} 
                        text={task.text} 
                        isComplete={task.isComplete}
                    />

                );

            })}

        </ul>

    );

}