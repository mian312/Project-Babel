import { Schema, model } from 'mongoose';

const imageSchema = new Schema(
        {
            name: String,
            image: String
        },
        {
            collection: "imageDetail"
        }
);

const Images = model('Image', imageSchema);

export default Images;
