import { Level } from "../../helpers/imc"
import Style from './GridItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'
type Props = {
    item: Level
}

export const GridItem = ({ item }: Props) => {
    return (
        <div className={Style.main} style={{ backgroundColor: item.color }}>
            <div className={Style.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width="30" />
            </div>
            <div className={Style.gridTitle}>
                <p>{item.title}</p>
            </div>
            {item.yourimc && 
               <div className={Style.yourImc}>Seu IMC é de {item.yourimc} Kg/m²</div>
            }

            <div className={Style.gridInfo}>
                <>
                  IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}