import { Star } from "lucide-react";
import { useState } from "react";
import { BoxDefault } from "../../components/boxDefault";

type idStarType = number[]

type TaskType = {
    task: string;
    idStart: number[];
};

export function CreateMyTask () {
    const [idStar, setidStar] = useState<idStarType>([])
    const [taskInput, setTaskInput] = useState('')

    const clickStar = 'text-yellow-500 size-8 cursor-pointer'
    const noClickStar = 'text-zinc-500 size-8 cursor-pointer hover:text-yellow-500'

    function clickStarTrue(positionStar: number) {
        // Remove color star when to click again
        if (idStar.includes(positionStar)) {
            switch (positionStar) {
                case 1:
                    setidStar([])
                    break
                case 2:
                    if(idStar.includes(1)) {
                        setidStar([1])
                    }
                    break
                case 3:
                    if(idStar.includes(1) && idStar.includes(2)){
                        setidStar([1,2])
                    } 
                    break
            }
            return
        }
        

        // Change color star when to click
        switch (positionStar) {
            case 1:
                setidStar([...idStar, positionStar])
                break
            case 2:
                if(idStar.includes(1)) {
                    setidStar([...idStar, positionStar])
                } else {
                    setidStar([...idStar, 1, positionStar])
                }
                break
            case 3:
                if(idStar.includes(1) && idStar.includes(2)){
                    setidStar([...idStar, positionStar])
                } else {
                    setidStar([...idStar, 1, 2, positionStar])
                }
                break
        }
    }

    function saveTasks(taskInput: string, idStar: number[]) {
        // get tasks in the localstorage
        const tasksJSON = localStorage.getItem('tasks');
        const tasks: TaskType[] = tasksJSON ? JSON.parse(tasksJSON) : [];

        const taskAlreadyExists = tasks.some(task => task.task === taskInput);
        if (taskAlreadyExists) {
            alert('Tarefa já existe. Não será adicionada novamente.');
            return;
        }

        if(taskInput && idStar.length > 0) {
            // create a new task
            const newTask: TaskType = {
                task: taskInput,
                idStart: idStar
            };
            tasks.push(newTask);
        
            // Save new task in the local
            localStorage.setItem('tasks', JSON.stringify(tasks));
            alert('Dados salvos com sucesso');
            location.href = "/"
            return
        }
        alert('Preenche todos os dados')
    
    
    }

    return (
        <div className="min-h-screen pb-10 sm:pb-2 pt-10">
            <BoxDefault>
                <input 
                    type="text" 
                    placeholder="Digite o nome da tarefa" 
                    className="bg-blue-900 p-2 outline-none border-b text-zinc-50"
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <div className="mt-5">
                    <span className="text-lg text-zinc-50">Qual a prioridade</span>
                    <div className="flex justify-center mt-5 gap-4">
                        <Star id="1" onClick={() => clickStarTrue(1)} className={idStar.includes(1) || idStar.includes(2) ? clickStar : noClickStar}/>
                        <Star id="2" onClick={() => clickStarTrue(2)} className={idStar.includes(1) && idStar.includes(2) ? clickStar : noClickStar}/>
                        <Star id="3" onClick={() => clickStarTrue(3)} className={idStar.includes(1) && idStar.includes(2) && idStar.includes(3) ? clickStar : noClickStar}/>
                    </div>
                </div>
                <button 
                    className="text-zinc-50 bg-slate-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 mt-5"
                    onClick={() => saveTasks(taskInput, idStar)}
                >
                    Adicionar tarefa
                </button>
            </BoxDefault>
        </div>
    )
}