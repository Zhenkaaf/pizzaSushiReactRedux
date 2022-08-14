import { useState } from 'react';
import s from './ShoppingCart.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import cn from "classnames";
import React from 'react';
import { ModalOrderList } from '../Modal/Modal';


const ShoppingCart = (props) => {
    console.log(props);
    let [dataForm, setDataForm] = useState('');
    let [modalState, setModalState] = useState(false);
    let [totalSum, setTotalSum] = useState(0);
    let PizzzaList = props.cartPage.orderList.map((item, index) => {
        totalSum = totalSum + item.price;
        return <OrderItem key={index} index={index}
            name={item.name} size={item.size} price={item.price} count={item.count} del={props.delPizza}></OrderItem>;
    });

    const validationsSchema = yup.object().shape({
        street: yup.string().typeError('должно быть строкой').required('Пожалуйста, укажите улицу.'),
        house: yup.string().typeError('должно быть строкой').required('Пожалуйста, укажите дом.'),
        number: yup.number().typeError('должно быть числом').required('Пожалуйста, укажите номер телефона.'),
    })

    let getAllData = React.createRef();
    let getAllDataFn = (allData) => {
        setDataForm(allData);
        setModalState(true);
    }

    let alertMessage = () => {
        let street = document.getElementsByName('street');
        let house = document.getElementsByName('house');
        let number = document.getElementsByName('number');
        if (street[0].value == '' || house[0].value == '' || number[0].value == '') {
            alert('Пожалуйста заполните все обязательные поля!');
        }
    }


    return (
        <div className={s.cartPage}>
            {props.cartPage.orderList.length
                ? <div>
                    <div>
                        <h2>ВАШ ЗАКАЗ</h2>
                    </div>
                    <div className={s.modal}>
                        {modalState && <ModalOrderList setModalState={setModalState} info={props.cartPage.orderList} totalSum={totalSum} allData={dataForm} />}
                    </div>
                    <div className={s.cartBody}>
                        <div className={s.adress}>
                            <h4>Адрес доставки</h4>
                            <div>
                                <Formik
                                    initialValues={{ street: '', house: '', entrance: '', flat: '', floor: '', number: '', email: '', name: '', surname: '' }}
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
                                            <div className={cn(s.sizeBig, s.itemFormik)}>
                                                <label className={s.label} htmlFor='street'>Улица *</label>
                                                <input
                                                    className={cn({ [s.red]: errors.street != undefined }, s.input)}
                                                    type='text'
                                                    name='street'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.street}
                                                />
                                                {touched.street && errors.street && <div className={s.error}>{errors.street}</div>}
                                            </div>

                                            <div className={cn(s.sizeSmall, s.itemFormik)}>
                                                <label className={s.label} htmlFor='house'>Дом *</label>
                                                <input
                                                    className={cn({ [s.red]: errors.house != undefined }, s.input)}
                                                    type='text'
                                                    name='house'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.house}
                                                />
                                                {touched.house && errors.house && <div className={s.error}>{errors.house}</div>}
                                            </div>

                                            <div className={cn(s.sizeSmall, s.itemFormik)}>
                                                <label className={s.label} htmlFor='entrance'>Подъезд</label>
                                                <input
                                                    className={s.input}
                                                    type='text'
                                                    name='entrance'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.entrance}
                                                />
                                            </div>

                                            <div className={cn(s.sizeSmall, s.itemFormik)}>
                                                <label className={s.label} htmlFor='flat'>Квартира</label>
                                                <input
                                                    className={s.input}
                                                    type='text'
                                                    name='flat'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.flat}
                                                />
                                            </div>

                                            <div className={cn(s.sizeSmall, s.itemFormik)}>
                                                <label className={s.label} htmlFor='floor'>Этаж</label>
                                                <input
                                                    className={s.input}
                                                    type='text'
                                                    name='floor'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.floor}
                                                />
                                            </div>

                                            <div className={s.contacts}><h4>Контактные данные</h4></div>

                                            <div className={cn(s.sizeMiddle, s.itemFormik)}>
                                                <label className={s.label} htmlFor='number'>Номер телефона *</label>
                                                <input
                                                    className={cn({ [s.red]: errors.number != undefined }, s.input)}
                                                    type='tel'
                                                    name='number'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.number}
                                                />
                                                {touched.number && errors.number && <div className={s.error}>{errors.number}</div>}
                                            </div>

                                            <div className={cn(s.sizeMiddle, s.itemFormik)}>
                                                <label className={s.label} htmlFor='email'>E-mail</label>
                                                <input
                                                    className={s.input}
                                                    type='text'
                                                    name='email'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                />
                                            </div>

                                            <div className={cn(s.sizeMiddle, s.itemFormik)}>
                                                <label className={s.label} htmlFor='name'>Имя</label>
                                                <input
                                                    className={s.input}
                                                    type='text'
                                                    name='name'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.name}
                                                />
                                            </div>

                                            <div className={cn(s.sizeMiddle, s.itemFormik)}>
                                                <label className={s.label} htmlFor='surname'>Фамилия</label>
                                                <input
                                                    className={s.input}
                                                    type='text'
                                                    name='surname'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.surname}
                                                />
                                            </div>

                                            <button className={s.formikBtn} ref={getAllData} /* disabled={!isValid && !dirty} */ type='submit'>submit</button>
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
                    <button className={s.getAllDataBtn} type='submit' onClick={() => { alertMessage(); getAllData.current.click() }}>getAllData</button>
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


export default ShoppingCart;