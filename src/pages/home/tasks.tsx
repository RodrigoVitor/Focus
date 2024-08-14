import { Check, Pencil, Star, Trash2 } from "lucide-react";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

interface TasksProps {
    tasks: string[] 
}

export function Tasks({tasks}: TasksProps) {
    const navigate = useNavigate()
    const {setMyScore, score} = useContext(ThemeContext)!

    function taskChecked (task: string) {
        //get items and creating a new item
        let dataTask = JSON.parse(localStorage.getItem('tasks')!)
        let newTask = dataTask.filter((t: any) => t.task !== task)

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
        // localStorage.setItem('tasks', JSON.stringify(newTask))

        // alert(`A tarefa ${task} foi deletado com sucesso`)

        // location.reload()

    }

    useEffect(() => {
        localStorage.setItem('xp', String(score))
    }, [score])
    
    return (
        <div className="px-4 sm:px-20 mt-10">
            {tasks.map((t: any,index: number) => (
                <div key={index} className="sm:w-full sm:h-10 bg-slate-50 mb-5 flex flex-col sm:flex-row gap-2 py-2 sm:justify-between px-4 items-center">
                    <span className="text-lg">{t.task}</span>
                    <div className="flex gap-2">
                        {t.idStart.map((i: any) => (
                            <>
                                <Star className="text-yellow-500" />
                            </>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <Link to={`/editar-tarefa/${t.task}/${t.idStart}`}><Pencil className="cursor-pointer hover:text-blue-800" /></Link>
                        <Check onClick={() => taskChecked(t.task)} className="cursor-pointer hover:text-green-600" />
                        {/* <Trash2 onClick={() => deleteTaskForName(t.task)} className="cursor-pointer hover:text-red-600" /> */}
                    </div>
                </div>
            ))}
        </div>
    )
}