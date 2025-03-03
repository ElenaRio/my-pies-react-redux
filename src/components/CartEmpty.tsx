import React from "react";
import { Link } from 'react-router-dom';
import cartEmpty from '../assets/image/empty-cart.png'

function CartEmpty(): React.ReactElement{
    return(
        <>
        <div className="cart cart--empty">
            <h2>Кошик порожній <span>😕</span></h2>
            <p>Схоже, ви ще не оформили замовлення.  <br />
            Перейдіть на головну сторінку, щоб вибрати пиріг. <br />
            На вас чекають найбожественніші пироги у світі
            </p>
            <img src={cartEmpty} alt="Empty cart" />
            <Link to="/" className="button button--black">
              <span>Повернутися назад</span>
            </Link>
          </div>
          </>
    )
}

export default CartEmpty;