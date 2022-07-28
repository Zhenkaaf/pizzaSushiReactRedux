import { cloneDeep } from 'lodash';
const SET_DIAMETR = 'SET_DIAMETR';
const GET_PIZZA_INFO = 'GET_PIZZA_INFO';

let initialState = {

    pizzasArr: [
        {
            pizzaId: 1,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 109 },
                { id: 30, isActive: false, size: 30, price: 159 },
                { id: 35, isActive: false, size: 35, price: 209 },
                { id: 40, isActive: false, size: 40, price: 259 },
                { id: 45, isActive: false, size: 45, price: 329 },
                { id: 50, isActive: false, size: 50, price: 409 }
            ],
            name: 'ПИЦЦА ДАБЛ ПЕППЕРОНИ',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154156_a76b2ce37989.jpg',
            ingredients: 'Сыр Моцарелла / Соус томатный / Увеличенное количество пепперони.'
        },
        {
            pizzaId: 2,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 133 },
                { id: 30, isActive: false, size: 30, price: 183 },
                { id: 35, isActive: false, size: 35, price: 203 },
                { id: 40, isActive: false, size: 40, price: 263 },
                { id: 45, isActive: false, size: 45, price: 393 },
                { id: 50, isActive: false, size: 50, price: 523 }
            ],
            name: 'ПИЦЦА СЫРНАЯ КУРОЧКА',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154039_1ec1f774.jpg',
            ingredients: 'Соус томатный / Соус сливочный /Филе куриное маринованное и четыре вида сыра: сыр Моцарелла, Дор-блю, Пармезан , Сулугуни.'
        },
        {
            pizzaId: 3,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 111 },
                { id: 30, isActive: false, size: 30, price: 161 },
                { id: 35, isActive: false, size: 35, price: 211 },
                { id: 40, isActive: false, size: 40, price: 281 },
                { id: 45, isActive: false, size: 45, price: 341 },
                { id: 50, isActive: false, size: 50, price: 491 }
            ],
            name: 'ПИЦЦА УКРАИНСКАЯ',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220219154125_e348884.jpg',
            ingredients: 'Сыр Моцарелла / Соус томатный / Соус сливочный / Ветчина / Салями чоризо / Охотничьи колбаски / Лук маринованный / Кукуруза / Маслины / Лук зелёный.'
        },
        {
            pizzaId: 4,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 159 },
                { id: 30, isActive: false, size: 30, price: 209 },
                { id: 35, isActive: false, size: 35, price: 259 },
                { id: 40, isActive: false, size: 40, price: 359 },
                { id: 45, isActive: false, size: 45, price: 459 },
                { id: 50, isActive: false, size: 50, price: 559 }
            ],
            name: 'ПИЦЦА БАВАРСКАЯ',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20211123202045_366bb8053.jpg',
            ingredients: 'Сыр Моцарелла / Соус томатный / Соус сливочный / Охотничьи колбаски / Салями Чоризо / Лук маринованный / Опята маринованные'
        },
        {
            pizzaId: 5,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 103 },
                { id: 30, isActive: false, size: 30, price: 153 },
                { id: 35, isActive: false, size: 35, price: 213 },
                { id: 40, isActive: false, size: 40, price: 283 },
                { id: 45, isActive: false, size: 45, price: 353 },
                { id: 50, isActive: false, size: 50, price: 453 }
            ],
            name: 'ФУНЖИ',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210816132513_55899f96b4b7c.jpg',
            ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Салями чоризо / Шампиньоны.'
        },
        {
            pizzaId: 6,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 199 },
                { id: 30, isActive: false, size: 30, price: 259 },
                { id: 35, isActive: false, size: 35, price: 329 },
                { id: 40, isActive: false, size: 40, price: 399 },
                { id: 45, isActive: false, size: 45, price: 489 },
                { id: 50, isActive: false, size: 50, price: 559 }
            ],
            name: '4 Х 4',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210717223941_f072d9f3a954.jpeg',
            ingredients: 'Пицца на основе четырех сыров ( моцарелла, пармезан, сулугуни, дор-блю) и четырех мясных начинок ( ветчина, салями, балык, охотничьи колбаски).'
        },
        {
            pizzaId: 7,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 102 },
                { id: 30, isActive: false, size: 30, price: 152 },
                { id: 35, isActive: false, size: 35, price: 202 },
                { id: 40, isActive: false, size: 40, price: 262 },
                { id: 45, isActive: false, size: 45, price: 332 },
                { id: 50, isActive: false, size: 50, price: 422 }
            ],
            name: 'БАРБЕКЮ',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210806173759_e02d1fa.jpg',
            ingredients: 'Пицца с маринованным куриным филе и охотничьими колбасками на основе соуса BBQ. Украшена кукурузой и маринованным луком по желанию.'
        },
        {
            pizzaId: 8,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 123 },
                { id: 30, isActive: false, size: 30, price: 193 },
                { id: 35, isActive: false, size: 35, price: 253 },
                { id: 40, isActive: false, size: 40, price: 303 },
                { id: 45, isActive: false, size: 45, price: 393 },
                { id: 50, isActive: false, size: 50, price: 453 }
            ],
            name: 'ВИКТОРИЯ',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210816200852_a0baa49d3bba.jpg',
            ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный  / Говядина сочная / Бекон / Лук маринованный / Петрушка / Салями чоризо.'
        },
        {
            pizzaId: 9,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 74 },
                { id: 30, isActive: false, size: 30, price: 152 },
                { id: 35, isActive: false, size: 35, price: 214 },
                { id: 40, isActive: false, size: 40, price: 298 },
                { id: 45, isActive: false, size: 45, price: 369 },
                { id: 50, isActive: false, size: 50, price: 456 }
            ],
            name: 'МАРГАРИТА',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210827172311_5f979be.jpg',
            ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Помидоры'
        },
        {
            pizzaId: 10,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 92 },
                { id: 30, isActive: false, size: 30, price: 152 },
                { id: 35, isActive: false, size: 35, price: 232 },
                { id: 40, isActive: false, size: 40, price: 399 },
                { id: 45, isActive: false, size: 45, price: 489 },
                { id: 50, isActive: false, size: 50, price: 555 }
            ],
            name: 'ПЕППЕРОНИ EXTRA',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210810115806_75ddc35.jpg',
            ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Пепперони.'
        },
        {
            pizzaId: 11,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 132 },
                { id: 30, isActive: false, size: 30, price: 192 },
                { id: 35, isActive: false, size: 35, price: 252 },
                { id: 40, isActive: false, size: 40, price: 332 },
                { id: 45, isActive: false, size: 45, price: 442 },
                { id: 50, isActive: false, size: 50, price: 552 }
            ],
            name: 'ЦЕЗАРЬ',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210810115749_ca6b6cbe9b.jpg',
            ingredients: 'Соус "Карбонара" / копчёная курица /  Помидоры / сыр "Моцарелла" /  Украшается листьями салата Айсберг и сыром "Пармезан".'
        },
        {
            pizzaId: 12,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 90 },
                { id: 30, isActive: false, size: 30, price: 197 },
                { id: 35, isActive: false, size: 35, price: 257 },
                { id: 40, isActive: false, size: 40, price: 357 },
                { id: 45, isActive: false, size: 45, price: 457 },
                { id: 50, isActive: false, size: 50, price: 507 }
            ],
            name: 'ВЕГЕТАРИАНСКАЯ',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210830183600_26c6b738fb0d8.jpg',
            ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Шампиньоны / Сладкий перец / Помидоры / Маслины'
        },
        {
            pizzaId: 13,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 134 },
                { id: 30, isActive: false, size: 30, price: 194 },
                { id: 35, isActive: false, size: 35, price: 254 },
                { id: 40, isActive: false, size: 40, price: 324 },
                { id: 45, isActive: false, size: 45, price: 484 },
                { id: 50, isActive: false, size: 50, price: 544 }
            ],
            name: '4 СЫРА С САЛЯМИ',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210830183624_f5d51b45e.jpg',
            ingredients: 'Сыр Моцарелла / Сыр Дор-блю / Сыр Пармезан /Сыр Сулугуни / Соус томатный / Соус сливочный / Пепперони'
        },
        {
            pizzaId: 14,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 105 },
                { id: 30, isActive: false, size: 30, price: 165 },
                { id: 35, isActive: false, size: 35, price: 245 },
                { id: 40, isActive: false, size: 40, price: 395 },
                { id: 45, isActive: false, size: 45, price: 455 },
                { id: 50, isActive: false, size: 50, price: 505 }
            ],
            name: 'ГАВАЙСКАЯ',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210830183444_b161c3350.jpg',
            ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Курица копченая / Ананас.'
        },
        {
            pizzaId: 15,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 95 },
                { id: 30, isActive: false, size: 30, price: 155 },
                { id: 35, isActive: false, size: 35, price: 235 },
                { id: 40, isActive: false, size: 40, price: 305 },
                { id: 45, isActive: false, size: 45, price: 375 },
                { id: 50, isActive: false, size: 50, price: 456 }
            ],
            name: 'ДЕРЕВЕНСКАЯ',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210831185935_b03709c.jpg',
            ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Курица копчёная / Ветчина / Шампиньоны / Помидоры'
        },
        {
            pizzaId: 16,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 119 },
                { id: 30, isActive: false, size: 30, price: 179 },
                { id: 35, isActive: false, size: 35, price: 249 },
                { id: 40, isActive: false, size: 40, price: 309 },
                { id: 45, isActive: false, size: 45, price: 459 },
                { id: 50, isActive: false, size: 50, price: 529 }
            ],
            name: 'КОРОЛЕВСКАЯ',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210810115720_65ff804886.jpg',
            ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Копченая курица / Салями чоризо / Шампиньоны / Помидоры / Сладкий перец / Ананас / Маслины.'
        },
        {
            pizzaId: 17,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 111 },
                { id: 30, isActive: false, size: 30, price: 171 },
                { id: 35, isActive: false, size: 35, price: 211 },
                { id: 40, isActive: false, size: 40, price: 291 },
                { id: 45, isActive: false, size: 45, price: 351 },
                { id: 50, isActive: false, size: 50, price: 421 }
            ],
            name: 'ОХОТНИЧЬЯ',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210831190000_5e7b85a1c.jpg',
            ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Курица копченая / Бекон / Ветчина / Охотничьи колбаски.'
        },
        {
            pizzaId: 18,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 99 },
                { id: 30, isActive: false, size: 30, price: 159 },
                { id: 35, isActive: false, size: 35, price: 239 },
                { id: 40, isActive: false, size: 40, price: 299 },
                { id: 45, isActive: false, size: 45, price: 379 },
                { id: 50, isActive: false, size: 50, price: 459 }
            ],
            name: '4 СЫРА',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210831202609_7f8bd38e9.jpg',
            ingredients: 'Сыр Моцарелла / Сыр Дор-блю / Сыр Пармезан / Сыр Сулугуни / Соус томатный / Соус сливочный '
        },
        {
            pizzaId: 19,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 121 },
                { id: 30, isActive: false, size: 30, price: 181 },
                { id: 35, isActive: false, size: 35, price: 241 },
                { id: 40, isActive: false, size: 40, price: 391 },
                { id: 45, isActive: false, size: 45, price: 471 },
                { id: 50, isActive: false, size: 50, price: 521 }
            ],
            name: 'ОБЖОРА',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210903181631_850a99cdb.jpg',
            ingredients: 'Сыр Моцарелла / Сыр Чеддер / Соус томатный / Соус сливочный / Салями чоризо / Бекон / Ветчина / Говядина сочная / Сладкий перец / Помидор.'
        },
        {
            pizzaId: 20,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 145 },
                { id: 30, isActive: false, size: 30, price: 195 },
                { id: 35, isActive: false, size: 35, price: 275 },
                { id: 40, isActive: false, size: 40, price: 325 },
                { id: 45, isActive: false, size: 45, price: 395 },
                { id: 50, isActive: false, size: 50, price: 475 }
            ],
            name: '4 ВРЕМЕНИ ГОДА',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210903181656_e64741cb42.jpg',
            ingredients: 'Четыре четверти с разными начинками:  шампиньоны, ветчина, салями чоризо, курица копчёная. А также сыр моцарелла, сыр чеддер, соус томатный, соус сливочный.'
        },
        {
            pizzaId: 21,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 189 },
                { id: 30, isActive: false, size: 30, price: 259 },
                { id: 35, isActive: false, size: 35, price: 349 },
                { id: 40, isActive: false, size: 40, price: 429 },
                { id: 45, isActive: false, size: 45, price: 509 },
                { id: 50, isActive: false, size: 50, price: 559 }
            ],
            name: '4 МЯСА',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210904195629_112d0c06be5.jpg',
            ingredients: 'Четыре четверти с разными мясными начинками: / балык / бастурма / говядина сочная / курица копчёная. А также сыр Моцарелла, сыр чеддер, соус томатный, соус сливочный'
        },
        {
            pizzaId: 22,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 225 },
                { id: 30, isActive: false, size: 30, price: 295 },
                { id: 35, isActive: false, size: 35, price: 325 },
                { id: 40, isActive: false, size: 40, price: 425 },
                { id: 45, isActive: false, size: 45, price: 525 },
                { id: 50, isActive: false, size: 50, price: 625 }
            ],
            name: 'НЕДЕЛЬКА',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210905171206_66211a31bdda.jpg',
            ingredients: 'Семь частей с разными начинками: курица копченая / салями чоризо / балык / бастурма / ветчина / охотничьи колбаски / шампиньоны. А также сыр Моцарелла, сыр чеддер, соус томатный, соус сливочный'
        },
        {
            pizzaId: 23,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 116 },
                { id: 30, isActive: false, size: 30, price: 196 },
                { id: 35, isActive: false, size: 35, price: 256 },
                { id: 40, isActive: false, size: 40, price: 326 },
                { id: 45, isActive: false, size: 45, price: 496 },
                { id: 50, isActive: false, size: 50, price: 566 }
            ],
            name: 'ПИЦЦА С ХАМОНОМ И ВЯЛЕНЫМИ ТОМАТАМИ',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220127165859_d1c86193e9.jpg',
            ingredients: 'Сыр Моцарелла/ Соус томатный/ Хамон/ Вяленые томаты.'
        },
        {
            pizzaId: 24,
            pizzaSizes: [
                { id: 24, isActive: true, size: 24, price: 127 },
                { id: 30, isActive: false, size: 30, price: 187 },
                { id: 35, isActive: false, size: 35, price: 247 },
                { id: 40, isActive: false, size: 40, price: 307 },
                { id: 45, isActive: false, size: 45, price: 377 },
                { id: 50, isActive: false, size: 50, price: 447 }
            ],
            name: 'ПИЦЦА С ХАМОНОМ И ПАРМЕЗАНОМ',
            imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20220127165953_ce9102f7.jpg',
            ingredients: 'Сыр Моцарелла/ Сыр пармезан/ Соус томатный/ Хамон.'
        },
    ],
    pizzaInfo: null
};

const PizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIAMETR: {
            let stateCopy = cloneDeep(state);
            stateCopy.pizzasArr.map(item => {
                if (action.pizzaId == item.pizzaId) {
                    item.pizzaSizes.map(elem => {
                        if (action.sizeId == elem.id) {
                            elem.isActive = true;
                        }
                        if (action.sizeId != elem.id) {
                            elem.isActive = false;
                        }
                    })
                }
            })
            return stateCopy;
        }
        case GET_PIZZA_INFO: {
            let stateCopy = cloneDeep(state);
            stateCopy.pizzaInfo = state.pizzasArr.filter(item => {
                if (action.pizzaId == item.pizzaId) {
                    return item;
                }
            })
            return stateCopy;
        }
        default:
            return state;
    }

}

export const changeDiametrActionCreator = (pizzaId, sizeId) => {
    return {
        type: 'SET_DIAMETR',
        pizzaId,
        sizeId
    };
}
export const getPizzaInfoActionCreator = (pizzaId) => {
    return {
        type: 'GET_PIZZA_INFO',
        pizzaId
    }
}


export default PizzaReducer;