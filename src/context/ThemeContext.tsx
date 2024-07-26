import React, {createContext, useState } from 'react'

type ThemeContextType = {
    score: number
    tasks: string[]
    getTasks: () => void
}

type Props = {
    children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({children}: Props) => {
    const [score, setScore] = useState(0)
    const [tasks, setTasks] = useState<string[]>([])

    function getTasks() {
        const tasksStr = localStorage.getItem('tasks')!
        const myTasks = JSON.parse(tasksStr)
        setTasks(myTasks)
        console.log(tasks)
    }

    return (
        <ThemeContext.Provider value={{score, tasks, getTasks}}>
            {children}
        </ThemeContext.Provider>
    )
}