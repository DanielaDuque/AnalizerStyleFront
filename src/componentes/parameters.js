import React from 'react';
import "../estilos/general.css"

export default function Parameters(props) {

    return(
    <div className="container">
    <div className="row justify-content-around align-items-center">
        <div className ="columna col-lg-2 col-md-5 col-sm-12">
            
            <div className="row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">Pr</span>
                    </div>
                    <input type="text" className="form-control" id="Prefijo" aria-describedby="basic-addon3"
                    placeholder="Prefijos en Nombre" aria-label="Prefijo"/>
                
                </div>
            </div>
        </div>
        <div className ="columna col-lg-3 col-md-5 col-sm-12">
            
            <div className = "row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">#</span>
                    </div>
                    <input type="text" className="form-control" id="Ambitos" aria-describedby="basic-addon3"
                    placeholder="Ambitos anidados" aria-label="Ambitos"/>
                </div>
            </div>
            <div className = "row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">#</span>
                    </div>
                    <input type="text" className="form-control" id="Caracteres" aria-describedby="basic-addon3"
                    placeholder="Caracteres por nombre" aria-label="Caracteres"/>
                </div>
            </div>
            
        </div>
        <div className ="columna col-lg-3 col-md-5 col-sm-12">
            
            <div className = "row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">#</span>
                    </div>
                    <input type="text" className="form-control" id="LinasF" aria-describedby="basic-addon3"
                    placeholder="Lineas por funcion" aria-label="LinasF"/>
                </div>
            </div>
            <div className = "row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">#</span>
                    </div>
                    <input type="text" className="form-control" id="LineasC" aria-describedby="basic-addon3"
                    placeholder="Lineas comentadas" aria-label="LineasC"/>
                </div>
                
            </div>
        </div>

        <div className ="columna col-lg-3 col-md-5 col-sm-12">
            
            
            <div className = "row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">#</span>
                    </div>
                    <input type="text" className="form-control" id="Funciones" aria-describedby="basic-addon3"
                    placeholder="Funciones por clase" aria-label="Funciones"/>
                </div>
            </div>
            <div className = "row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">#</span>
                    </div>
                    <input type="text" className="form-control" id="Clases" aria-describedby="basic-addon3"
                    placeholder="Clases por archivo" aria-label="Clases"/>
                </div>
            </div>
        
        </div>
       
     </div>  
     </div> 


    );
}
