import { Star } from "lucide-react";
import { useState } from "react";
import { BoxDefault } from "../../components/boxDefault";
import { useNavigate } from "react-router-dom";

type idStarType = number[]

type GiftType = {
    gift:string
    idStar: number[],
    xp: number
}

export function AddGifts () {
    const [idStar, setidStar] = useState<idStarType>([])
    const [giftInput, setGiftInput] = useState('')
    const navigate = useNavigate()

    const clickStar = 'text-yellow-500 size-8 cursor-pointer'
    const noClickStar = 'text-zinc-500 size-8 cursor-pointer hover:text-yellow-500'

    function clickStarTrue(positionStar: number) {
        // Remove color star when to click again
        if (idStar.includes(positionStar)) {
            switch (positionStar) {
                case 1:
                    setidStar([0])
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

    function saveGift(giftInput: string, idStar: number[]) {
        // get gifts 
        const giftsJSON = localStorage.getItem('gifts');
        const gifts: GiftType[] = giftsJSON ? JSON.parse(giftsJSON) : [];

        const giftAlreadyExists = gifts.some(gift => gift.gift === giftInput);
        if (giftAlreadyExists) {
            alert('Tarefa já existe. Não será adicionada novamente.');
            return;
        }

        if(giftInput && idStar.length > 0) {
            // Add a new objetc of gifts
            switch(idStar.length) {
                case 3:
                    const newGift3: GiftType = {
                        gift: giftInput,
                        idStar: idStar,
                        xp: 75
                    }
                    gifts.push(newGift3);
                    break
                case 2:
                    const newGift2: GiftType = {
                        gift: giftInput,
                        idStar: idStar,
                        xp: 50
                    }
                    gifts.push(newGift2);
                    break
                default:
                    const newGift: GiftType = {
                        gift: giftInput,
                        idStar: idStar,
                        xp: 15
                    }
                    gifts.push(newGift);

            }

            // Save a new object
            localStorage.setItem('gifts', JSON.stringify(gifts));
            alert('Dados salvos com sucesso');
            navigate('/presentes')
            return
        }
        alert('Preenche todos os dados')
    
    
    }

    return (
        <div className="min-h-screen pb-10 sm:pb-2 pt-10">
            <BoxDefault>
                <input 
                    type="text" 
                    placeholder="Nome da recompensa" 
                    className="bg-blue-900 p-2 outline-none border-b text-zinc-50"
                    onChange={(e) => setGiftInput(e.target.value)}
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
                    onClick={() => saveGift(giftInput, idStar)}
                >
                    Adicionar Presente
                </button>
            </BoxDefault>
        </div>
    )
}