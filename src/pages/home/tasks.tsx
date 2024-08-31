import { Check, Pencil, Star, Trash2 } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

interface TasksProps {
    tasks: string[] 
}

export function Tasks({tasks}: TasksProps) {
    const {setMyScore, setLessMyScore} = useContext(ThemeContext)!

    function taskChecked (task: string) {
        //get tasks and creating a new task
        let dataTask = JSON.parse(localStorage.getItem('tasks')!)
        let newTask = dataTask.filter((t: any) => t.task !== task)

        localStorage.setItem('tasks', JSON.stringify(newTask))

        alert(`A tarefa ${task} foi concluido com sucesso`)

        //check total stars to earn xp
        let checkedTask = dataTask.filter((t: any) => t.task == task)
        
        switch (checkedTask[0].idStart.length) {
            case 1: 
                alert('Voce ganhou 3xp')
                setMyScore(3)
                break;
            case 2: 
                alert('Você ganhou 5xp')
                setMyScore(5)
                break;
            case 3:
                alert('Você ganhou 8xp')
                setMyScore(8)
                break
            default:
                alert('Erro no servidor')
            
        }

        location.reload()
    }

    function deleteTaskForName(task: string) {
        //get tasks and deleting a task
        let dataTask = JSON.parse(localStorage.getItem('tasks')!)
        let newTask = dataTask.filter((t: any) => t.task !== task)

        localStorage.setItem('tasks', JSON.stringify(newTask))

        alert(`Ah! Que Pena! Você não conseguiu concluir \nA tarefa ${task} foi deletada com sucesso`)

        //check total stars to lost xp
        let checkedTask = dataTask.filter((t: any) => t.task == task)
        
        switch (checkedTask[0].idStart.length) {
            case 1: 
                alert('Você perdeu 2xp')
                setLessMyScore(2)
                break;
            case 2: 
                alert('Você perdeu 4xp')
                setLessMyScore(4)
                break;
            case 3:
                alert('Você perdeu 6xp')
                setLessMyScore(6)
                break
            default:
                alert('Erro no servidor')
            
        }

        location.reload()
    }
    
    return (
        <div className="px-4 sm:px-20 mt-10">
            {tasks.map((t: any,index: number) => (
                <div key={index} className="sm:w-full sm:h-10 bg-slate-50 mb-5 flex flex-col sm:flex-row gap-2 py-2 sm:justify-between px-4 items-center">
                    <span className="text-lg">{t.task}</span>
                    <div className="flex gap-2">
                        {t.idStart.map(() => (
                            <>
                                <Star className="text-yellow-500" />
                            </>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <Link to={`/editar-tarefa/${t.task}/${t.idStart}`}><Pencil className="cursor-pointer hover:text-blue-800" /></Link>
                        <span title="Concluido"><Check onClick={() => taskChecked(t.task)} className="cursor-pointer hover:text-green-600"  /></span>
                        <span title="Não concluido"><Trash2 onClick={() => deleteTaskForName(t.task)} className="cursor-pointer hover:text-red-600" /></span>
                    </div>
                </div>
            ))}
        </div>
    )
}