import React from 'react';

const categories = ['Всі', 'Фруктові', 'Мясні', 'Овочеві', 'Сирні', 'Закриті'];
type CategorieProps = { value: number; onClickCategory: (I: number) => void };

function Categories({
  value,
  onClickCategory,
}: CategorieProps): React.ReactElement {
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? 'active' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

// id – унікальний ідентифікатор пирога.
// imageUrl – шлях до картинки (можеш завантажити картинки в папку /public/img і підставити назви файлів).
// name – назва пирога.
// types – типи тіста (наприклад, 0 – тонке, 1 – традиційне).
// sizes – розміри (26 см, 30 см, 40 см).
// price – ціна за найменший розмір.
// category – категорія (1 – фруктові, 2 – м’ясні, 3 – овочеві, 4 – сирні, 5 – закриті тощо).
// rating – рейтинг (від 1 до 5).
