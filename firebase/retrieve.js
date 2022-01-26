import app from "/firebase/init.js";
import { getDatabase, ref, get } from "firebase/database";
import { getFirestore, collection, doc, getDoc, getDocs } from "firebase/firestore";

const fireapp = app;
/*
Retrieves flag for challenge from database based on id
*/
export async function getFlag(i) {
  const db = getDatabase(fireapp);
  const dref = ref(db, "/chal" + i + "flag");
  if (i === undefined) {
    return {
      flag: null,
      error: true,
    };
  }
  let data = null;
  const snapshot = await get(dref);
  data = snapshot.val();
  return {
    flag: data,
    error: null,
  };
}

/*
Retrieves challenge info from db based on id
*/
export async function getInfo(i) {
  const db = getFirestore(fireapp);
  const docRef = doc(db, "chal-info", "chal" + i + "info");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    //json object
    const data = docSnap.data();
    return {
      data: data,
      error: null,
    };
  }
  //doc does not exist
  return {
    data: null,
    error: true,
  };
}

/*
  Retrieves all challenge info
*/
