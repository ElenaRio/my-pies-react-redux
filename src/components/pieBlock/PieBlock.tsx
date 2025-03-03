import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

import { RootState } from '../../redux/store';
import { CartItemProps, PieBlokProps } from '../../redux/slices/types';

const typeName = ['тонке', 'традиційне'];

function PieBlok({
  id,
  name,
  price,
  imageUrl,
  sizes,
  types,
  rating,
}: PieBlokProps): React.ReactElement {
  const dispatch = useDispatch();
  // const cartItem = useSelector(state => state.cart.items.find((obj) => obj.id === id))

  const [activeType, setActiveType] = React.useState(0);
  const [activeSizes, setActiveSizes] = React.useState(0);

  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find(
      (obj: CartItemProps) =>
        obj.id === id + '-' + typeName[activeType] + '-' + sizes[activeSizes]
    )
  );
  const addedCount = cartItem ? cartItem.count : 0;
  const onClickAdd = () => {
    const item: CartItemProps = {
      id: id + '-' + typeName[activeType] + '-' + sizes[activeSizes],
      name,
      price,
      imageUrl,
      types: typeName[activeType],
      sizes: sizes[activeSizes],
      count: 0,
    };
    dispatch(addItem(item));
  };
  return (
    <div className="pie-block-wrapper">
      <div className="pie-block">
        <Link to={`/pies/${id}`}>
          <img className="pie-block__image" src={imageUrl} alt={name} />
        </Link>
        <h4 className="pie-block__title">{name}</h4>
        <div className="pie-block__selector">
          <ul>
            {types.map((typeIndex) => (
              <li
                key={typeIndex}
                onClick={() => setActiveType(typeIndex)}
                className={activeType === typeIndex ? 'active' : ''}
              >
                {typeName[typeIndex]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={index}
                onClick={() => setActiveSizes(index)}
                className={activeSizes === index ? 'active' : ''}
              >
                {size} см
              </li>
            ))}
          </ul>
        </div>
        <div className="pie-block__bottom">
          <div className="pie-block__price">від {price} грн</div>
          <button
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Додати</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PieBlok;
