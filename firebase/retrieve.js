import app from "/firebase/init.js";
import { getDatabase, ref, get } from "firebase/database";

/*
Retrieves actual data from database
*/
export async function getData(i) {
    const database = getDatabase(app);
    const dref = ref(database, "/chal" + i + "flag");
    if (i === undefined) {
      return {
         error: true,
      };
    }
    var data = null;
    const snapshot = await get(dref);
    data = snapshot.val();
    return {
      flag: data, error: false,
    };
  }