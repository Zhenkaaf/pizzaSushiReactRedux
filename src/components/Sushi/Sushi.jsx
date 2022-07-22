import style from './Sushi.module.css';



const Sushi = (props) => {
let sushies = props.sushiPage.sushiesArr.map(item => {
return <SushiItem key={item.sushiId} name={item.name} price={item.price} imgUrl={item.imageUrl} description={item.description}></SushiItem>;
});

    return (
        <div>
           {/*  <NavLink to='/pizza' className={(navData) => navData.isActive ? s.activeLink : ''}>Profile</NavLink> */}
          {/*  <img src="https://kingpizza.kh.ua/resources/products/600_20200127202657_4d60af4830d4a.jpg" alt="" /> */}
          <h2>I am sushi's block</h2>
            {sushies}
        </div>
    )
}

const SushiItem = (props) => {
    return (
        <div>
            <div>название: {props.name}</div>
            <div>цена: {props.price}</div>
            <div>описание: {props.description}</div>
            <div>картинка: {<img src={`${props.imgUrl}`} ></img>}</div>
        </div>
    )
}


export default Sushi;