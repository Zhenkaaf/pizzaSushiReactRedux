import { useState } from 'react';
import style from './Sushi.module.css';
import SushiItem from './SushiItem';


const Sushi = (props) => {

    let [desiredSushie, setDesiredSushie] = useState('');

    let fn = (e) => {
        desiredSushie = e.target.value;
        setDesiredSushie(desiredSushie);
    }

    let filteredSushis = props.sushiPage.sushiesArr.filter(item => {
        return item.name.toLowerCase().includes(desiredSushie.toLowerCase());
    });
    

let sushies = filteredSushis.map(item => {
return <SushiItem key={item.sushiId} name={item.name} price={item.price} imgUrl={item.imageUrl} description={item.description}></SushiItem>;
});

    return (
        <div>
          <h2>I am sushi's block</h2>
          <div>
            <input onChange={fn} value={desiredSushie} placeholder={'Поиск'}></input>
          </div>
          <div className={style.sushiesBody}>
          {sushies}
          </div>
            
        </div>
    )
}


export default Sushi;