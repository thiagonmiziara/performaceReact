import React, { memo, useState } from "react";
import dynamic from "next/dynamic";
import {AddProductToWishilistProps} from "./AddProductToWishilist";
import lodash from "lodash";
//import { AddProductToWishilist } from "./AddProductToWishilist";

const AddProductToWishilist = dynamic<AddProductToWishilistProps>(()=>{
  return import('./AddProductToWishilist').then(mod => mod.AddProductToWishilist)
},{
  loading: () => <span>Carregando...</span>
});
interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <AddProductToWishilist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.product, nextProps.product);
  }
);
