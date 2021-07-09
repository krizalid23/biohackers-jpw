import { dataBase } from "./../Firebase/firebase";

const productosCollection = dataBase.collection("productos");

export const getProductos = (category) => {
    if(category !== undefined && category!== null){
        return productosCollection.where('category', '==', category).get();
    } else {
        return productosCollection.get();
    }
};

export const getProductoById = (id) => {
    return productosCollection.doc(id).get();
} 

