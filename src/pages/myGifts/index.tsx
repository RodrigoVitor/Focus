import { useEffect, useState } from "react"

type GiftType = string[]

export function MyGifts () {
    const [gifts, setGifts] = useState<string[]>([])

    useEffect(() => {
        getMyGifts()
    }, [])
    function getMyGifts() {
        const myGifts = JSON.parse(localStorage.getItem('MyGifts')!)
        setGifts(myGifts)
    }

    return (
        <div className="min-h-screen pb-10 sm:pb-2 pt-10 flex flex-col justify-center items-center">
            {gifts && 
                <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {gifts.map((g: string, index: number) => (
                        <div key={index} className="text-center">
                                <div className="w-48 text-center bg-blue-900 mt-10 mb-4 py-4">
                                    <div className="flex flex-col mt-3">
                                        <span className="text-zinc-50 text-2xl">{g}</span>
                                    </div>
                                </div>
                                <button className="text-zinc-50 bg-blue-900 p-2 rounded-xl sm:text-xl hover:bg-slate-700 w-full">Concluido</button>
                            </div>
                        ))}
                </div>
            }
        </div>
    )
}