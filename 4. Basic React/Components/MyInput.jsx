import { useState } from "react";

export function MyInput (){
    const [text, setText] = useState("")

    return (
        <>
            <section>
                <h3>My Input:</h3>
                <input type="text" onChange={(e) => setText(e.target.value)}/>
            </section>
            <h1>{text}</h1>
        </>
    )
}