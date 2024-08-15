import React, {createContext, useState } from 'react'

type ThemeContextType = {
    score: number
    tasks: string[]
    gifts: string[]
    getTasks: () => void
    getGifts: () => void
    setMyScore: (xp: number) => void
    setLessMyScore: (xp: number) => void
    getScore: () => void
}

type Props = {
    children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({children}: Props) => {
    const [score, setScore] = useState<number>(0)
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
        let value = Number(score)
        xp += value
        setScore(xp)
        localStorage.setItem('xp', String(xp))
    }
    function setLessMyScore(xp:number) {
        let value = Number(score)
        xp = value - xp
        setScore(xp)
        localStorage.setItem('xp', String(xp))
    }
    function getScore() {
        let myXp = localStorage.getItem('xp')
        setScore(Number(myXp))
    }

    return (
        <ThemeContext.Provider value={{score, tasks, gifts,getScore, getGifts, getTasks, setMyScore, setLessMyScore}}>
            {children}
        </ThemeContext.Provider>
    )
}