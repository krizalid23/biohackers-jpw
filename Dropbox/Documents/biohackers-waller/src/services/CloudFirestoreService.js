import { dataBase } from "./../Firebase/firebase";

const productosCollection = dataBase.collection("productos");

export const getProductoById = (id) => {
    return productosCollection.doc(id).get();
} 

