import app from "/firebase/init.js";
import { getDatabase, ref, get } from "firebase/database";
import { getFirestore, doc, getDoc } from "firebase/firestore";

/*
Retrieves actual data from database
*/
export async function getData(i) {
  const database = getDatabase(app);
  const dref = ref(database, "/chal" + i + "flag");
  if (i === undefined) {
    return {
      flag: null,
      error: true,
    };
  }
  var data = null;
  const snapshot = await get(dref);
  data = snapshot.val();
  return {
    flag: data,
    error: null,
  };
}

export async function test() {
  const db = getFirestore(app);
  const docRef = doc(db, "chal-info", "test");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    console.log(data.hello);
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  return false;
}
