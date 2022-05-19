import app from "/firebase/init.js";
import { getDatabase, ref, get } from "firebase/database";
import { getFirestore, doc, getDoc} from "firebase/firestore";

const fireapp = app;

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


export async function getInfo(i) {
  const db = getFirestore(fireapp);
  const docRef = doc(db, "chal-info", "chal" + i + "info");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return {
      data: data,
      error: null,
    };
  }

  return {
    data: null,
    error: true,
  };
}