import React from "react"

export default function fragment1() {
    return ( //JSX expressions must have one parent element não pode ter dois elementos 
        <React.Fragment>
          <h1>Titulo</h1>
          <h2>Subtitulo</h2>
        </React.Fragment>
    )
};
