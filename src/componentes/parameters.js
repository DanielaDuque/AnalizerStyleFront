import React from 'react';
import { Component } from 'react';
import "../estilos/general.css"

class Parameters extends Component {

    render(){
    return(
    <div className="container">
    <div className="row justify-content-around align-items-center">
        <div className ="columna col-lg-2 col-md-5 col-sm-12">
            
            <div className="row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">#</span>
                    </div>
                    <input type="number" className="form-control" id="LinasF" aria-describedby="basic-addon3"
                    placeholder="Lineas por funcion" aria-label="LinasF"
                    onChange={()=>{
                        let text = document.getElementById("LinasF").value;
                        this.props.setmaxLinesByFuntion(text)
                        }} />
                
                </div>
            </div>
        </div>
        <div className ="columna col-lg-3 col-md-5 col-sm-12">
            
            <div className = "row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">#</span>
                    </div>
                    <input type="number" className="form-control" id="Ambitos" aria-describedby="basic-addon3"
                    placeholder="Ambitos anidados" aria-label="Ambitos"
                    
                    onChange={()=>{
                        let text = document.getElementById("Ambitos").value;
                        this.props.setComplejidad(text)
                        }}
                        
                        />
                </div>
            </div>
            <div className = "row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">#</span>
                    </div>
                    <input type="number" className="form-control" id="Caracteres" aria-describedby="basic-addon3"
                    placeholder="Caracteres por nombre" aria-label="Caracteres"
                    onChange={()=>{
                        let text = document.getElementById("Caracteres").value;
                        this.props.setmaxCaracterByFuntion(text)
                        }}/>
                </div>
            </div>
            
        </div>
        <div className ="columna col-lg-3 col-md-5 col-sm-12">
            
            <div className = "row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">#</span>
                    </div>
                    <input type="number" className="form-control" id="MinLineasC" aria-describedby="basic-addon3"
                    placeholder="Min lineas comentadas" aria-label="MinLineasC"
                    onChange={()=>{
                        let text = document.getElementById("MinLineasC").value;
                        this.props.setminLineComment(text)
                        }}/>
                </div>
            </div>
            <div className = "row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">#</span>
                    </div>
                    <input type="number" className="form-control" id="MaxLineasC" aria-describedby="basic-addon3"
                    placeholder="Max lineas comentadas" aria-label="MaxLineasC"
                    onChange={()=>{
                        let text = document.getElementById("MaxLineasC").value;
                        this.props.setmaxLineComment(text)
                        }}/>
                </div>
                
            </div>
        </div>

        <div className ="columna col-lg-3 col-md-5 col-sm-12">
            
            
            <div className = "row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">#</span>
                    </div>
                    <input type="number" className="form-control" id="Funciones" aria-describedby="basic-addon3"
                    placeholder="Funciones por clase" aria-label="Funciones"
                    onChange={()=>{
                        let text = document.getElementById("Funciones").value;
                        this.props.setmaxFuntionByClass(text)
                        }}/>
                </div>
            </div>
            <div className = "row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">#</span>
                    </div>
                    <input type="number" className="form-control" id="Clases" aria-describedby="basic-addon3"
                    placeholder="Clases por archivo" aria-label="Clases"
                    onChange={()=>{
                        let text = document.getElementById("Clases").value;
                        this.props.setmaxClass(text)
                        }}/>
                </div>
            </div>
        
        </div>
       
     </div>  
     </div> 


    );
    }
}
export default Parameters;
