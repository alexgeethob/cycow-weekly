import { getInfo } from "/firebase/retrieve";

export default async function handler(req, res) {
  const {id} = req.query;
  console.log(id);
  const info = await getInfo(id);
  if(info.error !== null){
    res.status(400);
    res.end("ERROR BAD REQUEST");
    return;
  }
  delete info.error;
  console.log(info.data);
  res.status(200).send(info.data);
}
