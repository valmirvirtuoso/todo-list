import checked from "../assets/checked.svg";
import unchecked from "../assets/unchecked.svg";
import { Trash} from "phosphor-react";

import styles from "./Task.module.css";
import { TaskProps } from "../interfaces";

export function Task ({id, text, isComplete, onCompletedTask, onDeleteTask}: TaskProps) {

    function handleCompletedTask () {

        onCompletedTask(id);

    };

    function handleDeleteTask () {

        onDeleteTask(id);

    }

    const isChecked = isComplete ? checked : unchecked;

    const textChecked = isComplete ? styles.textChecked : styles.text

    return (

        <li className={styles.item}>

                <button 
                    className={styles.btnCheck} 
                    title="check"
                    onClick={handleCompletedTask}
                >
                    <img src={isChecked}/>
                </button>

                <p className={textChecked}>{text}</p>

                <button 
                    className={styles.btnTrash} 
                    title="trash"
                    onClick={handleDeleteTask}
                >
                    <Trash size={24} />
                </button>

        </li>

    );

}