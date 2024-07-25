import React, {createContext, useState } from 'react'

type ThemeContextType = {
    score: number
    tasks: string[]
}

type Props = {
    children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({children}: Props) => {
    const [score, setScore] = useState(0)
    const [tasks, setTasks] = useState<string[]>([])


    return (
        <ThemeContext.Provider value={{score, tasks}}>
            {children}
        </ThemeContext.Provider>
    )
}