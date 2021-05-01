import { Schema, model } from 'mongoose';

const article_schema = new Schema({
    title: String,
    description: String,
    imageURL: String
});

export default model("Article", article_schema);