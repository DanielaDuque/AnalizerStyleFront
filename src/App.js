import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

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
		sugerencias: [],
		textInput:"",
		error: false

    }
	
	setText = (param) =>{
        this.setState({
            textInput: param
        })
             
    }
	seterror = (param) =>{
        this.setState({
            error: param
        })
             
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
	setSugerencias = (param) => {
        this.setState({
            sugerencias: param
		})
		console.log(this.state)

	}
	
	postRequest=()=>{

		const deptsURL = "https://code-style-analyzer.herokuapp.com/java/code-analysis/";
		var vAttributes = {};
		vAttributes = {
			complexity: this.state.Complejidad,
			prnom: this.state.prNombr,
			maxLenghtName: this.state.maxCaracterByFuntion,
			maxLenghtLinesBy: this.state.maxLinesByFuntion,
			maxLenghtLineComment: this.state.maxLenghtLineComment,
			maxClassByFile: this.state.maxClassByFile,
			maxNumFuntionByClass: this.state.maxNumFuntionByClass,
			text: this.state.textInput
		};
		const ops = {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			data: JSON.stringify(vAttributes) ,
			url: deptsURL
		};

		axios( ops).then((res) => {
				if (res.status === 202){
					console.log(res.data)
				}
			}
			).catch((error) =>{
				
					//this.seterror(true)
					//this.setSugerencias(res.data)
					console.log("res.data")
					console.log(error.response.data)

				
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
			 	//this.setSugerencias(prueja) 
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
				<textarea className="form-control" aria-label="With textarea" rows="15"
				id = "text_input"
				onChange={()=>{
					let textInput = document.getElementById("text_input").value;
					//console.log(text)
					this.setText(textInput)
				}}></textarea>
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
