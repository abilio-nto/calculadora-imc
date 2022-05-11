import { useState } from 'react'
import Styles from './App.module.css'
import powered from './assets/powered-ab.png'
import { GridItem } from './components/GridItem'
import { levels, calcularImc, Level } from './helpers/imc'
import arrow from './assets/leftarrow.png'
const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalcularImc = () => {
    if (heightField && weightField) {
      setToShow(calcularImc(heightField, weightField))
    } else {
      alert("Todos os campos devem ser informados")
    }
  }

  const handleBackbutton = () =>{
    setToShow(null)
    setHeightField(0)
    setWeightField(0)

  }

  return (

    <div className={Styles.main}>
      <header >
        <div className={Styles.headerContainer}>
          <img src={powered} alt="Logo" width={170} />
        </div>
      </header>

      <div className={Styles.container}>
        <div className={Styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigle para Índice de massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          <input
            type="number"
            placeholder='Digite a sua altura. Ex: 1.8 (em métros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder='Digite o seu Peso. Ex: 72.4 (em Kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button onClick={handleCalcularImc} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={Styles.rightSide}>
          {!toShow &&
            <div className={Styles.grid}>
              {levels.map((item, index) => (
                <GridItem key={index} item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className={Styles.rightBig}>
               <div className={Styles.rightArrow} onClick={handleBackbutton}>
                    <img src={arrow} alt="" width={25}/>
               </div>
               <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>

  )
}

export default App