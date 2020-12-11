import './App.css';
import React, { Component } from 'react';

import "./estilos/palette.css"

import prueja from "./prueja.json"


import Parameters from "./componentes/parameters";
import Sugerencia from "./componentes/sugerencia";


class App extends Component {

	state={

        prNombr : "",
        Complejidad : 0,
        maxCaracterByFuntion : 0,
        maxLinesByFuntion: 0,
        maxLineComment: 0,
        maxClass: 0,
		maxFuntionByClass: 0,
		sugerencias: []

    }
    
    setprNombr = (param) =>{
        this.setState({
            prNombr: param
        })
             
    }

    setComplejidad = (param) =>{

        param = parseInt(param)
        this.setState({
            Complejidad: param
        })
             
    }

    setmaxCaracterByFuntion = (param) =>{
        param = parseInt(param)
        this.setState({
            maxCaracterByFuntion: param
        })
             
    }

    setmaxLinesByFuntion = (param) =>{
        param = parseInt(param)
        this.setState({
            maxLinesByFuntion: param
        })
             
    }

    setmaxLineComment = (param) =>{
        param = parseInt(param)
        this.setState({
            maxLineComment: param
        })
             
    }

    setmaxClass = (param) =>{
        param = parseInt(param)
        this.setState({
            maxClass: param
        })
             
    }

    setmaxFuntionByClass = (param) =>{
        param = parseInt(param)
        this.setState({
            maxFuntionByClass: param
        })
             
    }
	Analizar = (param) => {
        this.setState({
            sugerencias: param
		})
		console.log(this.state)

	}
	
	postRequest=()=>{
		fetch('https://code-style-analyzer.herokuapp.com/java/code-analysis/',{
        method: 'POST',
        body: JSON.stringify(
			{
			"complexity": 3,
			"prnom": "2",
			"maxLenghtName": 3,
			"maxLenghtLinesBy": 4,
			"maxLenghtLineComment": 5,
			"maxClassByFile": 1,
			"maxNumFuntionByClass": 6,
			"text": ""
			}
			),
		cache: 'no-cache',
		mode: "no-cors"
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			console.log('data = ', data);
		})
		.catch(function(err) {
			console.error(err);
		});
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
		  onClick={() => { 
			  this.Analizar(prueja) 
				this.postRequest()
			}}
		  >Analizar</button>
        </nav>    
      </header>
      <body>
	  	<div className="container">
			<h1>Párametros personalizables</h1>
			<Parameters 
				setprNombr = {this.setprNombr}
				setComplejidad = {this.setComplejidad}			
				setmaxCaracterByFuntion = {this.setmaxCaracterByFuntion}			
				setmaxLinesByFuntion = {this.setmaxLinesByFuntion}			
				setmaxLineComment = {this.setmaxLineComment}			
				setmaxClass = {this.setmaxClass}			
				setmaxFuntionByClass = {this.setmaxFuntionByClass}	
			>
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
