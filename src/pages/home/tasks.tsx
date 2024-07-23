import { Pencil, Star, Trash2 } from "lucide-react";

export function Tasks() {
    return (
        <div className="px-4 sm:px-20 mt-10">
            <div className="sm:w-full sm:h-10 bg-slate-50 mb-5 flex flex-col sm:flex-row gap-2 py-2 sm:justify-between px-4 items-center">
                <span className="text-lg">Estudar inglês</span>
                <div className="flex gap-2">
                    <Star className="text-yellow-500" />
                    <Star className="text-yellow-500" />
                    <Star className="text-yellow-500" />
                </div>
                <div className="flex gap-2">
                    <Pencil className="cursor-pointer hover:text-blue-800" />
                    <Trash2 className="cursor-pointer hover:text-red-600" />
                </div>
            </div>

            <div className="sm:w-full sm:h-10 bg-slate-50 mb-5 flex flex-col sm:flex-row gap-2 py-2 sm:justify-between px-4 items-center">
                <span className="text-lg">Estudar inglês</span>
                <div className="flex gap-2">
                    <Star className="text-yellow-500" />
                    <Star className="text-yellow-500" />
                </div>
                <div className="flex gap-2">
                    <Pencil className="cursor-pointer hover:text-blue-800" />
                    <Trash2 className="cursor-pointer hover:text-red-600" />
                </div>
            </div>

            <div className="sm:w-full sm:h-10 bg-slate-50 mb-5 flex flex-col sm:flex-row gap-2 py-2 sm:justify-between px-4 items-center">
                <span className="text-lg">Estudar inglês</span>
                <div className="flex gap-2">
                    <Star className="text-yellow-500" />
                    <Star className="text-yellow-500" />
                    <Star className="text-yellow-500" />
                </div>
                <div className="flex gap-2">
                    <Pencil className="cursor-pointer hover:text-blue-800" />
                    <Trash2 className="cursor-pointer hover:text-red-600" />
                </div>
            </div>

            <div className="sm:w-full sm:h-10 bg-slate-50 mb-5 flex flex-col sm:flex-row gap-2 py-2 sm:justify-between px-4 items-center">
                <span className="text-lg">Estudar inglês</span>
                <div className="flex gap-2">
                    <Star className="text-yellow-500" />
                </div>
                <div className="flex gap-2">
                    <Pencil className="cursor-pointer hover:text-blue-800" />
                    <Trash2 className="cursor-pointer hover:text-red-600" />
                </div>
            </div>
        </div>
    )
}