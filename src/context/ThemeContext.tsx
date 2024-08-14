import React, {createContext, useState } from 'react'

type ThemeContextType = {
    score: number
    tasks: string[]
    gifts: string[]
    getTasks: () => void
    getGifts: () => void
    setMyScore: (xp: number) => void
}

type Props = {
    children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({children}: Props) => {
    const [score, setScore] = useState(0)
    const [tasks, setTasks] = useState<string[]>([])
    const [gifts, setGifts] = useState<string[]>([])

    function getTasks() {
        const tasksStr = localStorage.getItem('tasks')!
        const myTasks = JSON.parse(tasksStr)
        setTasks(myTasks)
    }

    function getGifts() {
        const giftStr = localStorage.getItem('gifts')!
        const myGifts = JSON.parse(giftStr)
        setGifts(myGifts)
    }

    function setMyScore(xp:number) {
        let value = score
        xp += value
        setScore(xp)
    }

    return (
        <ThemeContext.Provider value={{score, tasks, gifts, getGifts, getTasks, setMyScore}}>
            {children}
        </ThemeContext.Provider>
    )
}