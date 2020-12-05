import React from 'react';
import "../estilos/general.css"
import "../estilos/palette.css"

export default function Sugerencia(props) {
    return(
        <div className="card aspecto border-success mb-3">
            <h4 className="card-header ">{props.error}</h4>
            <div className="card-body">
                <div className= "container">
                    <div className ="row justify-content-start card-subtitle mb-2 text-muted text-left">
                        <h6  className = "col-4 col-sm-3 col-lg-4 ">
                            Linea
                        </h6 >
                        <h6  className = "col-2 col-sm-1">
                            {props.linea}
                        </h6 >
                        <h6  className = "col-4 col-sm-3 col-lg-4">
                            Columna
                        </h6 >
                        <h6  className = "col-2 col-sm-1">
                            {props.col}
                        </h6 >
                    </div>
                </div>
                <p className="card-text">{props.sugerencia}</p>
                <button type="button" className="btn btn-outline-success">Descargar</button>
                
            </div>
            </div>

    );
}