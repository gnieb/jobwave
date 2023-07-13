import { useEffect, useState } from "react"

export default function Home () {
    const [quotes, setQuotes] = useState([])
    const [randomQuote, setRandomQuote] = useState("")

    useEffect(()=> {
        fetch('/quotes')
        .then(r => {
            if (r.ok){
                r.json().then(data => {
                    setQuotes(data)
                    setRandomQuote(data[Math.floor(Math.random() * quotes.length)])
                 } )
                
            }
            else {
                console.log("what is going on????")
            }
        })
    }, [])

    
    
    return (
        <div>
            <div className="flex flex-row justify-between m-5 p-5">
                <div className = "m-5 p-5">
            
                    <p className="text-6xl">Did you drink water today?</p>
                    
                </div>
            <div className="m-5 p-5">
                <p className="text-3xl">{randomQuote.quote}</p>
                <p className="text-gray-300 text-right hover:text-teal-400 hover:cursor-pointer">See all ♡</p>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <p>don't forget to move around a little! Take a break, go for a walk.</p>
        </div>
        </div>
    )
}