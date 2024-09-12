import { useEffect, useState } from "react"

export function MyGifts () {
    const [gifts, setGifts] = useState<string[]>([])

    useEffect(() => {
        getMyGifts()
    }, [])
    function getMyGifts() {
        const myGifts = JSON.parse(localStorage.getItem('MyGifts')!)
        setGifts(myGifts)
    }
    function giftDone(myGift: string) {
        const myGifts = JSON.parse(localStorage.getItem('MyGifts')!)
        const newGift = myGifts.filter((gift: any) => gift !== myGift )
        localStorage.setItem('MyGifts', JSON.stringify(newGift))
        alert('Concluido com sucesso')
        location.href = "/"
    }

    return (
        <div className="min-h-screen pb-10 sm:pb-2 pt-10 flex flex-col justify-center items-center">
            {gifts ? (
                <>
                {gifts.length > 0 ? (
                    <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {gifts.map((g: string, index: number) => (
                        <div key={index} className="text-center">
                                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                                    <div className="flex flex-col mt-3">
                                        <span className="text-zinc-50 text-2xl">{g}</span>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => giftDone(g)}
                                    className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full"
                                >
                                    Concluido
                                </button>
                            </div>
                        ))}
                </div>
                ) : (
                    <div className="text-center bg-blue-900 mt-10 mb-4 py-4 px-4">
                    <p className="text-slate-50 text-3xl">Você ainda não tem recompensas adquiridas</p>
                </div>
                )}
                
                </>
            ) : (
                <div className="text-center bg-blue-900 mt-10 mb-4 py-4 px-4">
                    <p className="text-slate-50 text-3xl">Você ainda não tem recompensas adquiridas</p>
                </div>
            )
                
            }
        </div>
    )
}