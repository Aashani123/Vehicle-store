import { request, response, Router } from "express";
import { Vehicle } from "../models/VehicleModel.js";

const router = Router();

// route for create new vehicle
router.post("/", async (request, response) => {
  console.log(request);
  try {
    // validate the request body
    if (!request.body.category || !request.body.owner || !request.body.saler) {
      response.status(400).send({ message: "Required fields must be filled" });
    }
    const newVehicle = {
      image: request.body.image,
      category: request.body.category,
      owner: request.body.owner,
      saler: request.body.saler,
      price: request.body.price,
    };
    const vehicle = await Vehicle.create(newVehicle);
    return response.status(200).send(vehicle);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: "internal server error" });
  }
});

// route for get all selling vehicles(in get we haven't any request)
router.get("/", async (request, response) => {
  try {
    const vehicle = await Vehicle.find({});
    response.status(200).send(vehicle);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "internal server error" });
  }
});

// route for get selling vehicle by id wise
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const vehicle = await Vehicle.findById(id);
    response.status(200).send(vehicle);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "internal server error" });
  }
});

// router for selling vehicles in category wise
router.get("/category/:category", async (request, response) => {
  try {
    const { category } = request.params;

    // Find vehicles by category
    const vehicles = await Vehicle.find({ category });
    if (vehicles.length === 0) {
      return response
        .status(404)
        .send({ message: "No vehicles found for this category" });
    }

    return response.status(200).json({
        count:vehicles.length,
        data:vehicles
    })
  } catch (error) {
    console.log("Error ", error);
    response.status(500).send({ message: "Internal Server Error" });
  }
});          

// router for update vehicle details
router.put("/:id", async (request, response) => {
  try {
    // validate
    // if (!request.body.category || !request.body.owner || !request.body.saler) {
    //   response.status(400).send({ message: "This fields must be filled" });
    // }
    const { id } = request.params;
    const vehicle = await Vehicle.findByIdAndUpdate(id, request.body);
    if (!vehicle) {
      response.status(401).send({ message: "This vehicle id is invalid" });
    }
    response.status(200).send(vehicle);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "internal server error" });
  }
});

// router for delete
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const vehicle = await Vehicle.findByIdAndDelete(id);
    if (!vehicle) {
      response.status(401).send({ message: "This vehicle id is invalid" });
    }
    response.status(200).send({ message: "Succesfully deleted" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "internal server error" });
  }
});

export default router;
