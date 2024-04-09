import {Schema, default as moongoose} from "moongoose"

const detailsSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "Required"],
        trim: true,
        minLength: [2, "Firstname must be larger than 2 characters"],
        maxLength: [2, "Firstname must be lesser than 50 characters"],

    },

    lastName: {
        type: String,
        required: [true, "Required"],
        trim: true,
        minLength: [2, "lastname must be larger than 2 characters"],
        maxLength: [2, "lastname must be lesser than 50 characters"],

    },

    email: {
        type: String,
        required: [true, "Email is required"],
    

    },
})


const Details = moongoose.models.Details || moongoose.model("Details", detailsSchema)

export default Details