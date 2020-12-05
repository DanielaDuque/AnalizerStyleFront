import './App.css';
import React, { Component } from 'react';

import "./estilos/palette.css"

import prueja from "./prueja.json"


import Parameters from "./componentes/parameters";
import Sugerencia from "./componentes/sugerencia";


class App extends Component {
	state = {
		sugerencias: []
	}

	Analizar = (param) => {
        this.setState({
            sugerencias: param
		})
    }

	render(){

		let table = [];

        this.state.sugerencias.map(
            (data, index) => {
				console.log(data)
                    table.push(
						
                        <Sugerencia
							key={index}
							error = {data.error}
							sugerencia =  {data.sugerencia}
							linea =  {data.linea}
							col =  {data.col}  	
						/>)
					
					return null;
					}
				);
  return (
    <div>
      <header>  
		
        <nav className="dark-primary-color navbar">
          <span className="text-primary-color navbar-brand mb-0 h1">Analizador sintantico Java</span>
          <button className= "btn btn-outline-light"
		  onClick={() => { this.Analizar(prueja) }}
		  >Analizar</button>
        </nav>    
      </header>
      <body>
	  	<div className="container">
			<h1>Párametros personalizables</h1>
			<Parameters>
			</Parameters>

        
          <div className = "row row justify-content-between">

            <div className = "col-lg-6">
              <h2>Codigo</h2>
			  	<div className="input-group">
				<div className="input-group-prepend">
					<span className="input-group-text"></span>
				</div>
				<textarea className="form-control" aria-label="With textarea" rows="15"></textarea>
				</div>
            </div>

            <div className = "col-lg-5">
              	<h2>Sugerencias</h2>
				  <div className="row row-cols-1">			  	
                	{table}
				</div>

            </div>

          </div>
        </div>
        
      </body>
    </div>
  );
}
}
export default App;
