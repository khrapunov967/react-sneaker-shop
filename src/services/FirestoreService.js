import { collection, doc, getDocs, setDoc } from "firebase/firestore";
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

        // console.log(docs);
        for (let doc of docs) {
            if (doc.id === id) return doc.cart;
        }
    }

    static setCart = async (userId, newCartState) => {
        if (userId) {
            await setDoc(doc(db, "users", userId), {
                cart: newCartState
            }, { merge: true })
              .then((val) => console.log("cart has been changed!"))
              .catch((error) => console.log(error));  
        }
    }
}

export default FirestoreService;