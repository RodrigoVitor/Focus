import { Pencil, Star, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface CardGiftProps {
    gifts: string[]
}

function deleteMyGift(myGift: string) {
    let myGifts = JSON.parse(localStorage.getItem('gifts')!)
    let newGifts = myGifts.filter((g: any) => g.gift !== myGift)
    localStorage.setItem('gifts', JSON.stringify(newGifts))
    location.reload()

}

function buyAGift(gift: string) {
    let xp = localStorage.getItem('xp')
    let gifts = JSON.parse(localStorage.getItem('gifts')!)
    let myGifts = JSON.parse(localStorage.getItem('MyGifts')!)

    gifts.map((g: any) => {
        if (g.gift === gift) {
            if(xp! >= g.xp ) {
                //get check if already exists this gift
                let MyGiftAlreadyExists = myGifts.some((gift: string) => gift === g.gift )
                if(MyGiftAlreadyExists) {
                    alert('Você já adquiriu essa recompensa, conclua para obte-la novamente')
                    return
                }

                //add a new gift
                let newXp = Number(xp) - g.xp
                localStorage.setItem('xp', String(newXp))

                if(!myGifts || myGifts.length < 1 ){
                    localStorage.setItem('MyGifts', JSON.stringify([g.gift]))
                    alert('Parbéns você adquiriu essa recompensa!')
                    location.reload()
                    return
                }

                let newMyGifts = g.gift 
                myGifts.push(newMyGifts)
                localStorage.setItem('MyGifts', JSON.stringify(myGifts))
                alert('Parabéns você adquiriu essa recompensa!')
                location.reload()
                return
            }
            alert('Você não tem xp o suficiente para poder comprar essa recompensa. \nConclui mais tarefas para ganhar xp')

        }
    })
    
}

export function CardGift({ gifts }: CardGiftProps) {
    return (
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {gifts.map((g: any) => (
                <div>
                    <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                        <div className="flex justify-center gap-4">
                            {g.idStar.map(()=> (
                                <>
                                   <Star className="text-yellow-500" /> 
                                </>
                            ))}
                        </div>
                        <div className="flex flex-col mt-3">
                            <span className="text-zinc-400">{g.gift}</span>
                            <span className="text-zinc-50 text-2xl">{g.xp} xp</span>
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <Link to={`/editar-presente/${g.gift}/${g.idStar}`}><Pencil className="cursor-pointer sm:size-4 text-zinc-50 hover:text-blue-950" /></Link>

                            <Trash2 onClick={() => deleteMyGift(g.gift)} className="cursor-pointer sm:size-4 text-zinc-50 hover:text-red-600" />
                        </div>
                    </div>
                    <button onClick={() => buyAGift(g.gift)} className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Comprar</button>
                </div>
            ))}
        </div>
    )
}