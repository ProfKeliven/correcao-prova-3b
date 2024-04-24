import React from "react"

export default function Evento({titulo, descricao, horario, local}){
    return(
        <div className="sessao">
            <div className="evento">
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <p>{horario}</p>
                <p>{local}</p>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1qaguXw4a7KYLniqRS0xAV9mS0zopkI37G8LOL1p_Q&s" alt="" />
        </div>
        
    )
}

