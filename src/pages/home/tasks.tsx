import { Pencil, Star, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface TasksProps {
    tasks: string[] | number[]
}

export function Tasks({tasks}: TasksProps) {
    const array = [1,2,3]
    return (
        <div className="px-4 sm:px-20 mt-10">
            {tasks.map((t,index) => (
                <div key={index} className="sm:w-full sm:h-10 bg-slate-50 mb-5 flex flex-col sm:flex-row gap-2 py-2 sm:justify-between px-4 items-center">
                    <span className="text-lg">{t.task}</span>
                    <div className="flex gap-2">
                        {t.idStart.map(i => (
                            <>
                                <Star className="text-yellow-500" />
                            </>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <Link to={`/editar-tarefa/Estudar inglês/${array}`}><Pencil className="cursor-pointer hover:text-blue-800" /></Link>
                        <Trash2 className="cursor-pointer hover:text-red-600" />
                    </div>
                </div>
            ))}
        </div>
    )
}