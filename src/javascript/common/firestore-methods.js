// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = 
{
    apiKey: "AIzaSyARFjH3dYMUsxqkRZR2TCNMIrPUpxHLIJY",
    authDomain: "book-club-helper.firebaseapp.com",
    projectId: "book-club-helper",
    storageBucket: "book-club-helper.appspot.com",
    messagingSenderId: "89725692543",
    appId: "1:89725692543:web:5fa680538eb0ef1d966d4a",
    measurementId: "G-MKMJR3PWF6"
}

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

/**
 * Adds information 
 * @param {*} collectionName 
 * @param {*} docName 
 * @param {*} docData 
 */
export default function addDoc(collectionName, docName, docData)
{
    db.collection(collectionName).doc(docName).set(docData)
        .then(() =>
            {
                console.log("Document successfully written!");
            }
        )
}

/**
 * Read all entries in book list
 * @param {*} collectionName 
 */
export async function readAll(collectionName)
{
    var collectionReference = db.collection(collectionName);
    let docList = [];
    //Get them
    await collectionReference.get().then((querySnapshot) => {
     //querySnapshot is "iteratable" itself
        querySnapshot.forEach((collectionDoc) => {

            //If you want to get doc data
            var collectionDocData = collectionDoc.data()
            docList.push(collectionDocData);
        });
    });
    return docList;
}