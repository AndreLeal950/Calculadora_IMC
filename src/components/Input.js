import React, { useState } from 'react'


import '../styles/input.sass'
import Table from './Table'

const Input = () => {

    const [peso, setPeso] = useState()
    const [alt, setAlt] = useState()
    const [result, setResult] = useState()
    const [msg, setMsg] = useState()


   function handleCalc() {
   
        const imc = (peso / (alt * alt)).toFixed(2)
       setResult(imc)

        setMsg ('Verifique seu índice na tabela ao lado')
       
       setPeso('')
       setAlt('')
    }

    return (
        <div className='container'>
            <div className='title'>
                <h2>Cálculo de IMC</h2>
            </div>
           <div className='body'>
        <label htmlFor='peso'>Peso :
            <input
                id='peso'
                type='text'
                name='peso'
                placeholder='Digite seu peso'
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                />kg
            </label>  <p>peso(ex.: 70.5)</p>
             <label htmlFor='altura'>Altura : 
            <input
                id='altura'
                type='text'
                name='altura'
                placeholder='Digite sua altura'
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
                    />m
                </label>
                <p>altura(ex.: 1.70)</p>
                <div className='button-gen'>
                    <button 
                    type='submit'
                    onClick={handleCalc}>Calcular</button>
                </div>
                    <div className='imc'>
                    <h4>Seu IMC : {result}</h4>
                    </div>
                    <p className='p'>{ msg }</p>
               
            </div>
            
           <Table />
    </div>
  )
}

export default Input