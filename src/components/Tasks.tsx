import { PlusCircle } from "phosphor-react";
import styles from "./Tasks.module.css";
import listEmpty from "../assets/Empty.png";
import { ListOfTasks } from "./ListOfTasks";

import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { v4 as uuid } from 'uuid';

import { ITask } from "../interfaces";

export function Tasks () {

    const [tasks, setTasks] = useState<ITask[]>([]);

    const numberOfTasks = tasks.length;

    const numberOfTasksCompleted = tasks.filter(task => task.isComplete === true);

    const [newTaskText, setNewTaskText] = useState("");

    const isNewTaskEmpty = newTaskText.length === 0;

    function handleNewTaskInvalid (event: InvalidEvent<HTMLInputElement>) {

        event.target.setCustomValidity("Esse campo é obrigatório!");

    }

    function handleNewTaskChange (event: ChangeEvent<HTMLInputElement>) {

        event.target.setCustomValidity("");
        setNewTaskText(event.target.value);

    }

    function handleCreateNewTask (event: FormEvent) {

        event.preventDefault();

        const newTask = {

            id: uuid(),
            isComplete: false,
            text: newTaskText

        };

        setTasks([...tasks, newTask]); 
        setNewTaskText(""); 

    }

    function onCompletedTask (id: string) {

        const completedTask = tasks.map(task => {

            if (task.id === id) {

                task.isComplete = !task.isComplete;

            }

            return task;

        });

        setTasks(completedTask);
        
    }

    function onDeleteTask (id: string) {

        const tasksWithoutDeletedOne = tasks.filter( task => task.id !== id);

        setTasks(tasksWithoutDeletedOne);

    }

    return (

        <div className={styles.tasks} >


            <form onSubmit={handleCreateNewTask}>

                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    required
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    value={newTaskText}
                />
                <button 
                    type="submit"
                    disabled={isNewTaskEmpty}
                >
                    
                    Criar
                    <PlusCircle size={16} weight="bold"/>
                </button>

            </form>

            <div className={styles.dataOfList}>

                <p className={styles.tasksCreated}>
                    Tarefas criadas 
                    <span>{numberOfTasks}</span>
                </p>

                <p className={styles.tasksChecked}>
                    Concluídas
                    <span>{`${numberOfTasksCompleted.length} de ${numberOfTasks}`}</span>
                </p>

            </div>

            {

                //Se tasks estiver vazio, mostre a imagem
                tasks.length === 0 ? (

                    <img src={listEmpty} alt="Lista vazia" />

                ) : (

                    <ListOfTasks onDeleteTask={onDeleteTask} onCompletedTask={onCompletedTask} tasks={tasks}/>

                )

            }

        </div>

    );

}