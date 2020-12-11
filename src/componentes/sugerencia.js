import React from 'react';
import "../estilos/general.css"
import "../estilos/palette.css"


const crearArchivo =(error, linea, col, sugerencia)=>{

    let text = ""
    text += "-----------------------------" + '\n'
    text += "-----------------------------" + '\n'
    text += error + '\n'
    text += "-----------------------------" + '\n'
    text += "Linea: " + linea + "\t Columna: " + col + '\n'
    text += "-----------------------------" + '\n'
    text += sugerencia +'\n'
    text += "-----------------------------" + '\n'
    text += "-----------------------------" + '\n'

    return text

}

const subtitle=(ln, col)=>{
    return `Linea: ${ln} - Columna: ${col}`
}
export default function Sugerencia(props) {

    return(
        <div className="card aspecto shadow p-3 mb-5 bg-white rounded">
            <h4 className="card-header ">{props.error}</h4>
            <div className="card-body">
                <div className= "container">
                    <div className ="row justify-content-start card-subtitle mb-2 text-muted text-left ">
                        <h6 >
                            {subtitle(props.linea,props.col)}
                        </h6 >
                        
                    </div>
                </div>
                <p className="card-text overflow-hidden"
                       style={{height:"50px"}}>
                    {props.sugerencia}</p>
                <button type="button" className="btn btn-outline-success"
                    onClick={()=>{
                        
                        let textOutput = crearArchivo(props.error,props.linea,props.col,props.sugerencia)
                        console.log(textOutput)
                        //document.getElementById('link').click()
                        const element = document.createElement("a");
                        const file = new Blob([textOutput],    
                                    {type: 'text/plain;charset=utf-8'});
                        element.href = URL.createObjectURL(file);
                        element.download = "sugerencia.txt";
                        document.body.appendChild(element);
                        element.click();
                        //handleDownloadDoc("sugerencia")

                        //window.location.href = window.URL.createObjectURL(blob);
                        
                    }}
                 >Descargar</button>
                 <a id="link" href={"./sugerencia.txt"} download hidden></a>
                
            </div>
            </div>

    );
}