import { getInfo } from "/firebase/retrieve";

export default async function handler(req, res) {
  const {id} = req.query;
  const info = await getInfo(parseInt(id));
  if(info.error !== null){
    res.status(400);
    res.end("ERROR BAD REQUEST");
    return;
  }
  delete info.error;
  res.status(200).send(info.data);
}
