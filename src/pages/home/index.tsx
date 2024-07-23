import { useState } from "react";
import { Link } from "react-router-dom";
import { Tasks } from "./tasks";

export function Home () {
    const [isThereTasks, setIsthereTasks] = useState(true)

    return (
        <div className="h-screen pb-10 sm:pb-2 pt-10">
            <main className="w-72 sm:w-9/12 bg-blue-900 mx-auto my-28 py-10 sm:pt-16">
                <div className="text-center">
                    <Link to="/adicionar-tarefas" className="text-zinc-50 bg-slate-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700">Adicionar nova tarefa</Link>
                </div>
                
                {isThereTasks ? (
                    <Tasks />
                ) : (
                    <p className="text-center mt-10 text-zinc-50 sm:text-2xl">Você ainda não possui tarefas, clique no botão acima para criar uma</p>
                )}
            </main>
        </div>
    )
}