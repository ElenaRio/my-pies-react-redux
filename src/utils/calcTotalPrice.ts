import { CartItemProps } from "../redux/slices/types";


export const calcTotalPrice = (items: CartItemProps[]) =>{
    return items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
}