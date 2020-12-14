import React from 'react';
import '../estilos/general.css';
import '../estilos/palette.css';

const aplicarbutton = (hasCorr, correctText, prevCode, correctedCode) => {
  if (hasCorr) {
    return (
      <button
        className='btn button-color-ouline button-card'
        id='Aplicar'
        onClick={() => {
          correctText(prevCode, correctedCode);
        }}
      >
        Aplicar en el codigo
      </button>
    );
  }
};

const crearArchivo = (error, linea, col, sugerencia) => {
  return `
    -----------------------------
    -----------------------------
    ${sugerencia}
    -----------------------------
    Line: ${linea}\t Column: ${col}
    -----------------------------
    -----------------------------
    `;
};

const subtitle = (ln, col) => {
  return `Linea: ${ln} - Columna: ${col}`;
};
export default function Sugerencia(props) {
  return (
    <div className='card shadow p-3 mb-5 bg-white rounded'>
      <h4 className='card-header '>{props.error}</h4>
      <div className='card-body'>
        <div className='container'>
          <div className='row justify-content-start card-subtitle mb-2 text-muted text-left '>
            <h6>{subtitle(props.linea, props.col)}</h6>
          </div>
        </div>
        <p className='card-text overflow-hidden' style={{ height: '50px' }}>
          {props.sugerencia}
        </p>
        <div className='row'>
          <button
            type='button'
            className='btn button-color button-card'
            onClick={() => {
              let textOutput = crearArchivo(
                props.error,
                props.linea,
                props.col,
                props.sugerencia
              );
              console.log(textOutput);
              const element = document.createElement('a');
              const file = new Blob([textOutput], {
                type: 'text/plain;charset=utf-8',
              });
              element.href = URL.createObjectURL(file);
              element.download = 'sugerencia.txt';
              document.body.appendChild(element);
              element.click();
            }}
          >
            Descargar
          </button>

          {aplicarbutton(
            props.hasCorr,
            props.correctText,
            props.prevCode,
            props.correctedCode
          )}
        </div>
      </div>
    </div>
  );
}
