import { useState } from "react"

export default function macrosPage() {

    const [macros, setMacros] = useState([]) 

    const getMacros = async () => {
        const response = await fetch('/api/macros')
        const data = await response.json()
        setMacros(data)
    }
    
    return (
        <>
            <button onClick={getMacros}> Get macros!! </button>
            {macros.map((macros) => {
                return (
                    <div key={macros.id}>
                        {macros.id} {macros.calories}
                    </div>
                )
            })}
        </>
    )
}