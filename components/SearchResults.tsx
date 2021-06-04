import React, { useMemo } from 'react'
import {ProductItem} from './ProductItem';

interface SearchResultsProps{
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>
  onAddToWishlist: (id:number) => void;
} 


const SearchResults = ({results, onAddToWishlist ,totalPrice}:SearchResultsProps) => {

  // const totalPrice = useMemo(()=>{
  //   return results.reduce((total,product)=>{
  //     return total + product.price;
  //   },0)
  // },[results]);


  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product =>{
        return(
          <ProductItem
           key={product.id}
           product={product}
           onAddToWishlist={onAddToWishlist}
           />
        );
      })}
    </div>
  )
}

export default SearchResults;
