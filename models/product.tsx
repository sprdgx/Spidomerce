import { ProductsContext } from 'components/ProductsContext';
import { model, models, Schema} from 'mongoose'
import { useContext } from 'react';

const ProductSchema = new Schema ( {
    name: String,
    description: String,
    price: Number,
    category: String,
    picture: String,
});

const Product = models?.Product || model( 'Product' , ProductSchema )

 export default Product