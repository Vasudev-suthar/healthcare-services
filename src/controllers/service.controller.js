import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { isValidObjectId } from "mongoose"
import { Service } from "../models/service.model.js"

const addService = asyncHandler(async (req, res) => {
    const { service_name, description, price } = req.body;

    if (!service_name && !description && !price) {
        throw new ApiError(400, "All field are required");
    }

    const service = await Service.findOne({ service_name });
    if (service) {
        throw new ApiError(400, "service already exists");
    }

    const newService = await Service.create({
        service_name,
        description,
        price
    })

    if (!newService) {
        throw new ApiError(500, "Something went wrong while adding Service")
    }

    return res.status(201).json(
        new ApiResponse(200, newService, "Service added Successfully")
    )
})

const getServices = asyncHandler(async (req, res) => {
    const services = await Service.find()

    if (!services) {
        throw new ApiError(400, "services are not found")
    }

    else if (services.length > 0) {
       return res.status(200).json(
            new ApiResponse(200, services, "services fetched successfully")
        )
    }

    else {
       return res.status(200).json(
            new ApiResponse(200, "currantly have not any services")
        )
    }
})

const updateServices = asyncHandler(async (req, res) => {
    const { serviceId } = req.params
    const { service_name, description, price } = req.body;

    if (!isValidObjectId(serviceId)) {
        throw new ApiError(400, "Invalid serviceId");
    }

    const service = await Service.findById(serviceId);

    if (!service) {
        throw new ApiError(404, "No service found");
    }

    const updateservice = await Service.findByIdAndUpdate(
        serviceId,
        {
            $set: {
                service_name,
                description,
                price
            }
        },
        { new: true }
    );

    if (!updateservice) {
        throw new ApiError(500, "Failed to update service please try again");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, updateservice, "Service updated successfully"));
})

const deleteService = asyncHandler(async (req, res) => {
    const { serviceId } = req.params

    if (!isValidObjectId(serviceId)) {
        throw new ApiError(400, "Invalid contactusId");
    }

    const service = await Service.findById(serviceId);

    if (!service) {
        throw new ApiError(404, "No Contact us found");
    }

    const deleteservice = await Service.findByIdAndDelete(service);

    if (!deleteservice) {
        throw new ApiError(500, "Failed to delete service please try again");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, deleteservice, "Service deleted successfully"));
})


export {
    addService,
    getServices,
    updateServices,
    deleteService
}