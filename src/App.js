import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/monokai';

import './estilos/palette.css';
import './App.css';

import logo2 from './logo2.png';
import exito2 from './exito2.png';

import Parameters from './componentes/parameters';
import Sugerencia from './componentes/sugerencia';

class App extends Component {
  state = {
    minLineComment: 0,
    Complejidad: 0,
    maxCaracterByFuntion: 0,
    maxLinesByFuntion: 0,
    maxLineComment: 0,
    maxClass: 0,
    maxFuntionByClass: 0,
    sugerencias: [],
    textInput: '',
    error: false,
    image: false,
  };

  setText = (param) => {
    this.setState({
      textInput: param,
    });
  };
  seterror = (param) => {
    this.setState({
      error: param,
    });
  };
  setminLineComment = (param) => {
    this.setState({
      minLineComment: param,
    });
  };

  setComplejidad = (param) => {
    param = parseInt(param);
    this.setState({
      Complejidad: param,
    });
  };

  setmaxCaracterByFuntion = (param) => {
    param = parseInt(param);
    this.setState({
      maxCaracterByFuntion: param,
    });
  };

  setmaxLinesByFuntion = (param) => {
    param = parseInt(param);
    this.setState({
      maxLinesByFuntion: param,
    });
  };

  setmaxLineComment = (param) => {
    param = parseInt(param);
    this.setState({
      maxLineComment: param,
    });
  };

  setmaxClass = (param) => {
    param = parseInt(param);
    this.setState({
      maxClass: param,
    });
  };

  setmaxFuntionByClass = (param) => {
    param = parseInt(param);
    this.setState({
      maxFuntionByClass: param,
    });
  };
  setSugerencias = (param) => {
    this.setState({
      sugerencias: param,
    });
    //console.log(this.state)
  };

  setImage = (param) => {
    this.setState({
      image: param,
    });
    //console.log(this.state)
  };

  postRequest = () => {
    const deptsURL = process.env.REACT_APP_API_URL;
    var vAttributes = {
      complexity: this.state.Complejidad,
      minCommentedLinesCount: this.state.minLineComment,
      maxNameLength: this.state.maxCaracterByFuntion,
      maxLineCountByFunction: this.state.maxLinesByFuntion,
      maxCommentedLinesCount: this.state.maxLineComment,
      maxClassesByFile: this.state.maxClass,
      maxFunctionCountByClass: this.state.maxFuntionByClass,
      text: this.state.textInput,
    };

    const ops = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(vAttributes),
      url: deptsURL,
    };

    axios(ops)
      .then((res) => {
        console.log('res.data');
        console.log(res);
        if (res.data.length === 0) {
          this.setImage(true); //muestra imagen
        } else {
          this.setImage(false);
        }
        this.setSugerencias(res.data);
      })
      .catch((error) => {
        alert('There was an error ' + error.message);
        console.log('error.data');
        console.log(error);
      });
  };

  correctText = (prev, correct) => {
    let text = this.state.textInput;
    let newtext = text.replaceAll(prev, correct);
    this.aceEditorRef.editor.setValue(newtext);
    this.setState({
      textInput: newtext,
    });
  };

  render() {
    let table = [];

    this.state.sugerencias.map((data, index) => {
      //console.log(data)
      table.push(
        <Sugerencia
          key={index}
          error={data.errorMessage}
          sugerencia={data.suggestion}
          linea={data.line}
          col={data.column}
          hasCorr={data.hasCorrection}
          prevCode={data.previousCode}
          correctedCode={data.correctedCode}
          correctText={this.correctText}
        />
      );

      return null;
    });
    return (
      <div>
        <header>
          <nav className='navbar navbar-light'>
            <img
              alt='Brand'
              src={logo2}
              className='navbar-brand mx-auto d-block img-fluid'
              width='500px'
            ></img>
          </nav>
        </header>
        <section>
          <div className='container columna'>
            <h2 className='cont font-change'>Parámetros personalizables</h2>
            <Parameters
              setminLineComment={this.setminLineComment}
              setComplejidad={this.setComplejidad}
              setmaxCaracterByFuntion={this.setmaxCaracterByFuntion}
              setmaxLinesByFuntion={this.setmaxLinesByFuntion}
              setmaxLineComment={this.setmaxLineComment}
              setmaxClass={this.setmaxClass}
              setmaxFuntionByClass={this.setmaxFuntionByClass}
            ></Parameters>

            <div className='row row justify-content-between'>
              <div className='col-lg-6'>
                <div className='text-button separe-items'>
                  <div className=''>
                    <h2 className='font-change'>Codigo</h2>
                  </div>
                  <div className=''>
                    <button
                      className='btn button-color'
                      onClick={() => {
                        // this.setSugerencias(prueba) //COMENTAR
                        this.postRequest();
                      }}
                    >
                      Analizar
                    </button>
                  </div>
                </div>

                <div className='input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'></span>
                  </div>

                  <AceEditor
                    mode='javascript'
                    theme='monokai'
                    ref={(c) => (this.aceEditorRef = c)}
                    onChange={(code) => {
                      //console.log(code)
                      this.setText(code);
                    }}
                  />
                </div>
              </div>

              <div className='col-lg-5 contfin '>
                <h2 className='font-change'>Sugerencias</h2>

                {this.state.image ? (
                  <img
                    alt='exito'
                    src={exito2}
                    className='mx-auto d-block img-fluid'
                    width='340px'
                  ></img>
                ) : (
                  <div
                    className='row row-cols-1 scroll'
                    style={{ paddingRight: '15px' }}
                  >
                    {table}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <footer className='page-footer font-small blue footer-space'>
          <div className='footer-copyright text-center py-3'>
            <p> Lenguajes de Programación 2020-2</p>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
