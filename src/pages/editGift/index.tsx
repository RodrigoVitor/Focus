import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BoxDefault } from "../../components/boxDefault";

export function EditGift() {
    type idStarTate = number[]

    const [idStar, setidStar] = useState<idStarTate>([])
    const { gift } = useParams()
    const { stars } = useParams<{ stars: string }>()

    useEffect(() => {
        const converterStringParaArray = (parametro: string): number[] => {
            return parametro.split(',').map(Number);
        };

        if (stars)
            setidStar(converterStringParaArray(stars))

        console.log(idStar)
    }, [])

    const clickStar = 'text-yellow-500 size-8 cursor-pointer'
    const noClickStar = 'text-zinc-500 size-8 cursor-pointer hover:text-yellow-500'

    function clickStartTrue(positionStar: number) {
        // Remove color star when to click again
        if (idStar.includes(positionStar)) {
            switch (positionStar) {
                case 1:
                    setidStar([0])
                    break
                case 2:
                    if (idStar.includes(1)) {
                        setidStar([1])
                    }
                    break
                case 3:
                    if (idStar.includes(1) && idStar.includes(2)) {
                        setidStar([1, 2])
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
                if (idStar.includes(1)) {
                    setidStar([...idStar, positionStar])
                } else {
                    setidStar([...idStar, 1, positionStar])
                }
                break
            case 3:
                if (idStar.includes(1) && idStar.includes(2)) {
                    setidStar([...idStar, positionStar])
                } else {
                    setidStar([...idStar, 1, 2, positionStar])
                }
                break
        }
    }

    return (
        <div className="min-h-screen pb-10 sm:pb-2 pt-10">
            <BoxDefault>
                <h2 className="text-zinc-50 text-3xl mb-7">Editar</h2>
                <input type="text" value={gift} placeholder="Digite o nome da tarefa" className="bg-blue-900 p-2 outline-none border-b text-zinc-50" />
                <div className="mt-5">
                    <span className="text-lg text-zinc-50">Qual a prioridade</span>
                    <div className="flex justify-center mt-5 gap-4">
                        <Star id="1" onClick={() => clickStartTrue(1)} className={idStar.includes(1) || idStar.includes(2) ? clickStar : noClickStar} />
                        <Star id="2" onClick={() => clickStartTrue(2)} className={idStar.includes(1) && idStar.includes(2) ? clickStar : noClickStar} />
                        <Star id="3" onClick={() => clickStartTrue(3)} className={idStar.includes(1) && idStar.includes(2) && idStar.includes(3) ? clickStar : noClickStar} />
                    </div>
                </div>
                <button className="text-zinc-50 bg-slate-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 mt-5">Editar tarefa</button>
            </BoxDefault>
        </div>
    )
}