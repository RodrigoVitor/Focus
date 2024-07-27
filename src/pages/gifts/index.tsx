import { Link } from "react-router-dom";
import { CardGift } from "./cardGift";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function Gifts() {
    const {gifts, getGifts} = useContext(ThemeContext)!

    useEffect(() => {
        getGifts()
    }, [])

    return (
        <div className="min-h-screen pb-10 sm:pb-2 pt-10 flex flex-col justify-center items-center">
           <div className=" text-center mt-10">
            <Link to="/adicionar-presentes" className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 ">Adicionar novos presentes</Link>
           </div>

           
            {gifts != null && gifts.length > 0 && (
                <CardGift gifts={gifts} />
            )}

        </div>
    )
}