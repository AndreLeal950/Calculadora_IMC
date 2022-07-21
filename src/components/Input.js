import React, { useState } from 'react'


import '../styles/input.sass'
import Table from './Table'

const Input = () => {

    const [peso, setPeso] = useState()
    const [alt, setAlt] = useState()

    function handleCalc() {
       
    }



    return (
        <div className='container'>
            <h2>Calculadora de IMC</h2>
            <div className='button-gen'>
                <button className='button'>Homem</button>
                <button className='button'>Mulher</button>
            </div>
      <label htmlFor='peso'>Peso :
        <input
            id='peso'
            type='text'
            name='peso'
            placeholder='Digite seu peso'
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            />kg
        </label>
      <label htmlFor='altura'>Altura : 
        <input
            id='altura'
            type='text'
            name='altura'
            placeholder='Digite sua altura'
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
                />cm
        </label>
            <button
                type='submit'
                className='button'
                onClick={handleCalc}>Calcular</button>
            
           <Table />
    </div>
  )
}

export default Input