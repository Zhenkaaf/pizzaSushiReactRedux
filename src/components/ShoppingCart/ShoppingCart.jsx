import { useState } from 'react';
import s from './ShoppingCart.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import cn from "classnames";
import React from 'react';


const ShoppingCart = (props) => {
    console.log(props);
    let [totalSum, setTotalSum] = useState(0);
    let PizzzaList = props.cartPage.orderList.map((item, index) => {
        totalSum = totalSum + item.price;
        return <OrderItem key={index} index={index}
            name={item.name} size={item.size} price={item.price} count={item.count} del={props.delPizza}></OrderItem>;
    });

    const validationsSchema = yup.object().shape({
        street: yup.string().typeError('должно быть строкой').required('Пожалуйста, укажите улицу.'),
        house: yup.string().typeError('должно быть строкой').required('Пожалуйста, укажите дом.'),
        
    })

    let getAllData = React.createRef();
    let getAllDataFn = (allData) => {
        console.log(allData);
    }


    return (
        <div className={s.cartPage}>
            {props.cartPage.orderList.length
                ? <div>
                    <div>
                        <h2>ВАШ ЗАКАЗ</h2>
                    </div>
                    <div className={s.cartBody}>
                        <div className={s.adress}>
                            <h4>Адрес доставки</h4>
                            <div>
                                <Formik
                                    initialValues={{ street: '', house: '', entrance: '', flat: '', floor: ''}}
                                    validateOnBlur
                                    onSubmit={(values, { setSubmitting }) => {     //сюда в  values передались все значения из формы
                                        /* alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false); */
                                        getAllDataFn(values);
                                    }}
                                    validationSchema={validationsSchema}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                        isValid,
                                        dirty
                                      
                                    }) => (
                                        <form onSubmit={handleSubmit} className={s.formikBody}>
                                            <p className={s.sizeBig}>
                                                <label htmlFor='street'>Улица *</label><br />
                                                <input
                                                    className={cn({[s.red] : errors.street != undefined}, s.input)}
                                                    type='text'
                                                    name='street'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.street}
                                                    f={console.log(errors.street)}
                                                />
                                                {touched.street && errors.street && <div className={s.error}>{errors.street}</div>}
                                            </p>

                                            <p className={s.sizeSmall}>
                                                <label htmlFor='house'>Дом *</label><br />
                                                <input
                                                    className={s.input}
                                                    type='text'
                                                    name='house'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.house}
                                                />
                                                {touched.house && errors.house && <div className={s.error}>{errors.house}</div>}
                                            </p>

                                            <p className={s.sizeSmall}>
                                                <label htmlFor='entrance'>Подъезд</label><br />
                                                <input
                                                    className={s.input}
                                                    type='text'
                                                    name='entrance'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.entrance}
                                                />
                                                {touched.entrance && errors.entrance && <p className={s.error}>{errors.entrance}</p>}
                                            </p>

                                            <p className={s.sizeSmall}>
                                                <label htmlFor='flat'>Квартира</label><br />
                                                <input
                                                    className={s.input}
                                                    type='text'
                                                    name='flat'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.flat}
                                                />
                                                {touched.flat && errors.flat && <p className={s.error}>{errors.flat}</p>}
                                            </p>

                                            <p className={s.sizeSmall}>
                                                <label htmlFor='floor'>Этаж</label><br />
                                                <input
                                                    className={s.input}
                                                    type='text'
                                                    name='floor'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.floor}
                                                />
                                                {touched.floor && errors.floor && <p className={s.error}>{errors.floor}</p>}
                                            </p>

                                            <p>
                                                <label htmlFor={`confirmEmail`}>confirmEmail</label><br />
                                                <input
                                                    className={s.input}
                                                    type='text'
                                                    name={`confirmEmail`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.confirmEmail}
                                                />
                                                {touched.confirmEmail && errors.confirmEmail && <p className={s.error}>{errors.confirmEmail}</p>}
                                            </p>

                                            <button ref={getAllData} disabled={!isValid && !dirty} type='submit'>submit</button>
                                            
                                          
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>


                        <div className={s.dishes}>
                            <h4>Блюда в вашем заказе</h4>

                            <div>
                                <table cellSpacing='0'>
                                    <thead >
                                        <tr>
                                            <th align='left'>Блюдо</th>
                                            <th>Кол-во</th>
                                            <th>Сумма</th>
                                        </tr>
                                    </thead>
                                    <tbody className={s.greenLine}>
                                        {PizzzaList}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td className={s.totalSum} align='right' colSpan='3'>{totalSum} грн</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                    </div>
                    <button type='submit' onClick={()=>{getAllData.current.click()}}>getAllData</button>
                </div>

                : <div>your cart is empty</div>
            }

        </div>

    )
}

const OrderItem = (props) => {
    return (
        <tr className={s.orderItemTr} id={props.index}>
            <td align='left'>{props.name}, ø {props.size}</td>
            <td>{props.count}</td>
            <td>{props.price} грн</td>
            {/* <div>{props.index}</div> */}
            <td><button onClick={(e) => { props.del(e) }}>delete</button></td>
        </tr>
    )
}

/* let Forma = (props) => {

    


    return (
        


          
               
          

                    
       
    )
} */

export default ShoppingCart;