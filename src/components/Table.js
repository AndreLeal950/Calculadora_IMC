import React from 'react'

import '../styles/table.sass'
import IMC from '../image/tabelaimc.png'



const Table = () => {
    return (
        <>
         <img src={IMC} alt='table'/>
     <main className='table' >
         <h3 >Sobre o IMC</h3>
                <spam>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
                    Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
                    O índice é calculado da seguinte maneira: divide-se o peso do paciente
                    pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal
                    quando o resultado do IMC está entre 18,5 e 24,9.<br></br>
                    Quer descobrir seu IMC? Insira seu peso e sua altura nos campos acima e
                    compare com os índices da tabela. Importante: siga os exemplos e use pontos como separadores.</spam>
         
    </main>
    </> 
  )
}

export default Table