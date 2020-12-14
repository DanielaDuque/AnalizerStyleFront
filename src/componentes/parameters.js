import React from 'react';
import { Component } from 'react';
import '../estilos/general.css';

class Parameters extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row justify-content-around align-items-center'>
          <div className='columna col-lg-2 col-md-5 col-sm-12'>
            <div className='row'>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon3'>
                    #
                  </span>
                </div>
                <input
                  type='number'
                  className='form-control'
                  id='LinasF'
                  aria-describedby='basic-addon3'
                  placeholder='Lineas por funcion'
                  aria-label='LinasF'
                  onChange={(e) => {
                    this.props.setmaxLinesByFuntion(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className='columna col-lg-3 col-md-5 col-sm-12'>
            <div className='row'>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon3'>
                    #
                  </span>
                </div>
                <input
                  type='number'
                  className='form-control'
                  id='Ambitos'
                  aria-describedby='basic-addon3'
                  placeholder='Ambitos anidados'
                  aria-label='Ambitos'
                  onChange={(e) => {
                    this.props.setComplejidad(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className='row'>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon3'>
                    #
                  </span>
                </div>
                <input
                  type='number'
                  className='form-control'
                  id='Caracteres'
                  aria-describedby='basic-addon3'
                  placeholder='Caracteres por nombre'
                  aria-label='Caracteres'
                  onChange={(e) => {
                    this.props.setmaxCaracterByFuntion(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className='columna col-lg-3 col-md-5 col-sm-12'>
            <div className='row'>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon3'>
                    #
                  </span>
                </div>
                <input
                  type='number'
                  className='form-control'
                  id='MinLineasC'
                  aria-describedby='basic-addon3'
                  placeholder='Min lineas comentadas'
                  aria-label='MinLineasC'
                  onChange={(e) => {
                    this.props.setminLineComment(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className='row'>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon3'>
                    #
                  </span>
                </div>
                <input
                  type='number'
                  className='form-control'
                  id='MaxLineasC'
                  aria-describedby='basic-addon3'
                  placeholder='Max lineas comentadas'
                  aria-label='MaxLineasC'
                  onChange={(e) => {
                    this.props.setmaxLineComment(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className='columna col-lg-3 col-md-5 col-sm-12'>
            <div className='row'>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon3'>
                    #
                  </span>
                </div>
                <input
                  type='number'
                  className='form-control'
                  id='Funciones'
                  aria-describedby='basic-addon3'
                  placeholder='Funciones por clase'
                  aria-label='Funciones'
                  onChange={(e) => {
                    this.props.setmaxFuntionByClass(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className='row'>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='basic-addon3'>
                    #
                  </span>
                </div>
                <input
                  type='number'
                  className='form-control'
                  id='Clases'
                  aria-describedby='basic-addon3'
                  placeholder='Clases por archivo'
                  aria-label='Clases'
                  onChange={(e) => {
                    this.props.setmaxClass(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Parameters;
