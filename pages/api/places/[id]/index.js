import Place from "../../../../db/models/places";
import dbConnect from "../../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

 
  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      return response.status(400).json({ status: "Not Found" });
    }
    response.status(200).json(place);
  }
  if(request.method === "PUT") {
    const placeToUpdate = await Place.findByIdAndUpdate(id,{
      $set: request.body,
    });
    response.status(200).json(placeToUpdate);
  }

  if (request.method === "DELETE"){
    const placeToDelete = await Place.findByIdAndDelete(id);
    response.status(200).json(placeToDelete);
    }
  
     

  
}
