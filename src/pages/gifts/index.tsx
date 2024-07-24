import { Pencil, Star, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export function Gifts() {
    return (
        <div className="min-h-screen pb-10 sm:pb-2 pt-10 flex flex-col justify-center items-center">
           <div className=" text-center mt-10">
            <Link to="/adicionar-tarefas" className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 ">Adicionar nova tarefa</Link>
           </div>

           <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>

            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>

            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>

            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>

            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>

            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>

            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>

            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>

            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>

            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>

            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>

            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>

            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>

            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>

            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>

            <div className="text-center">
                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                    <div className="flex justify-center gap-4">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                    <div className="flex flex-col mt-3">
                        <span className="text-zinc-400">1 dia de folga</span>
                        <span className="text-zinc-50 text-2xl">75 xp</span>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" />
                        <Trash2 className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                    </div>
                </div>
                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
            </div>
           </div>
        </div>
    )
}