import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


class FirestoreService {
    static getUserById = async (id) => {
        const docs = [];
        const productsQuery = collection(db, "users");
        const querySnapshot = await getDocs(productsQuery);

        querySnapshot.forEach((doc) => docs.push(doc.data()));

        // console.log(docs);
        for (let doc of docs) {
            if (doc.id === id) return doc;
        }
    }

    static getCartByUserId = async (id) => {
        const docs = [];
        const productsQuery = collection(db, "users");
        const querySnapshot = await getDocs(productsQuery);

        querySnapshot.forEach((doc) => docs.push(doc.data()));

        console.log(docs);
        for (let doc of docs) {
            if (doc.id === id) return doc.cart;
        }
    }
}

export default FirestoreService;