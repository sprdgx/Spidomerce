import { initMongooose } from 'lib/mongoose';
import Product from "models/product";

export async function findAllProdcuts () {
    return Product.find().exec()
}

export default async function handle(req: any,res: any) {
 await initMongooose();
 
 const {ids} = req.query
 
 if (ids) {
  const idsArray = ids.split(',')
    res.json( 
      await Product.find( 
         {'_id':{$in:idsArray}}
   ).exec()
   );
 } else {
  res.json( await findAllProdcuts() );
}
 
}