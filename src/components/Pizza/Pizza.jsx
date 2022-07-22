import style from './Pizza.module.css';



const Pizza = (props) => {
/* let pizzasArr = [
    {pizzaId: 1, name: 'ПИЦЦА ДАБЛ ПЕППЕРОНИ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла / Соус томатный / Увеличенное количество пепперони.', price: 109},
    {pizzaId: 2, name: 'ПИЦЦА СЫРНАЯ КУРОЧКА', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Соус томатный / Соус сливочный /Филе куриное маринованное и четыре вида сыра: сыр Моцарелла, Дор-блю, Пармезан , Сулугуни.', price: 133},
    {pizzaId: 3, name: 'ПИЦЦА УКРАИНСКАЯ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла / Соус томатный / Соус сливочный / Ветчина / Салями чоризо / Охотничьи колбаски / Лук маринованный / Кукуруза / Маслины / Лук зелёный.', price: 111},
    {pizzaId: 4, name: 'ПИЦЦА БАВАРСКАЯ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла / Соус томатный / Соус сливочный / Охотничьи колбаски / Салями Чоризо / Лук маринованный / Опята маринованные', price: 159},
    {pizzaId: 5, name: 'ФУНЖИ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Салями чоризо / Шампиньоны.', price: 103},
    {pizzaId: 6, name: '4 Х 4', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Пицца на основе четырех сыров ( моцарелла, пармезан, сулугуни, дор-блю) и четырех мясных начинок ( ветчина, салями, балык, охотничьи колбаски).', price: 129},
    {pizzaId: 7, name: 'БАРБЕКЮ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Пицца с маринованным куриным филе и охотничьими колбасками на основе соуса BBQ. Украшена кукурузой и маринованным луком по желанию.', price: 102},
    {pizzaId: 8, name: 'ВИКТОРИЯ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный  / Говядина сочная / Бекон / Лук маринованный / Петрушка / Салями чоризо.', price: 123},
    {pizzaId: 9, name: 'МАРГАРИТА', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Помидоры', price: 74},
    {pizzaId: 10, name: 'ПЕППЕРОНИ EXTRA', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Пепперони.', price: 92},
    {pizzaId: 11, name: 'ЦЕЗАРЬ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Соус "Карбонара" / копчёная курица /  Помидоры / сыр "Моцарелла" /  Украшается листьями салата Айсберг и сыром "Пармезан".', price: 132},
    {pizzaId: 12, name: 'ВЕГЕТАРИАНСКАЯ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Шампиньоны / Сладкий перец / Помидоры / Маслины', price: 327},
    {pizzaId: 13, name: '4 СЫРА С САЛЯМИ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла / Сыр Дор-блю / Сыр Пармезан /Сыр Сулугуни / Соус томатный / Соус сливочный / Пепперони', price: 134},
    {pizzaId: 14, name: 'ГАВАЙСКАЯ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Курица копченая / Ананас.', price: 105},
    {pizzaId: 15, name: 'ДЕРЕВЕНСКАЯ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Курица копчёная / Ветчина / Шампиньоны / Помидоры', price: 95},
    {pizzaId: 16, name: 'КОРОЛЕВСКАЯ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Копченая курица / Салями чоризо / Шампиньоны / Помидоры / Сладкий перец / Ананас / Маслины.', price: 119},
    {pizzaId: 17, name: 'ОХОТНИЧЬЯ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Курица копченая / Бекон / Ветчина / Охотничьи колбаски.', price: 111},
    {pizzaId: 18, name: '4 СЫРА', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла / Сыр Дор-блю / Сыр Пармезан / Сыр Сулугуни / Соус томатный / Соус сливочный ', price: 99},
    {pizzaId: 19, name: 'ОБЖОРА', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Салями чоризо / Бекон / Ветчина / Говядина сочная / Сладкий перец / Помидор.', price: 121},
    {pizzaId: 20, name: '4 ВРЕМЕНИ ГОДА', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Четыре четверти с разными начинками:  шампиньоны, ветчина, салями чоризо, курица копчёная. А также сыр моцарелла, сыр чеддер, соус томатный, соус сливочный.', price: 145},
    {pizzaId: 21, name: '4 МЯСА', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Четыре четверти с разными мясными начинками: / балык / бастурма / говядина сочная / курица копчёная. А также сыр Моцарелла, сыр чеддер, соус томатный, соус сливочный', price: 189},
    {pizzaId: 22, name: 'НЕДЕЛЬКА', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Семь частей с разными начинками: курица копченая / салями чоризо / балык / бастурма / ветчина / охотничьи колбаски / шампиньоны. А также сыр Моцарелла, сыр чеддер, соус томатный, соус сливочный', price: 225},
    {pizzaId: 23, name: 'ПИЦЦА С ХАМОНОМ И ВЯЛЕНЫМИ ТОМАТАМИ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла/ Соус томатный/ Хамон/ Вяленые томаты.', price: 116},
    {pizzaId: 24, name: 'ПИЦЦА С ХАМОНОМ И ПАРМЕЗАНОМ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg', ingredients: 'Сыр Моцарелла/ Сыр пармезан/ Соус томатный/ Хамон.', price: 127},
]; */
let pizzas = props.pizzaPage.pizzasArr.map(item => {
return <PizzaItem key={item.pizzaId} name={item.name} price={item.price} imgUrl={item.imageUrl} ingredients={item.ingredients}></PizzaItem>;
});

    return (
        <div>
           {/*  <NavLink to='/pizza' className={(navData) => navData.isActive ? s.activeLink : ''}>Profile</NavLink> */}
           {/* <img src="https://kingpizza.kh.ua/resources/products/600_20220219154125_e348884.jpg" alt="" /> */}
            <h2>I am pizza's block</h2>
            {pizzas}
        </div>
    )
}




const PizzaItem = (props) => {
   
    return (
        <div>
            <div>название: {props.name}</div>
            <div>цена: {props.price}</div>
            <div>состав: {props.ingredients}</div>
            <div>картинка: {<img src={`${props.imgUrl}`} ></img>}</div>
        </div>
    )
}

export default Pizza;