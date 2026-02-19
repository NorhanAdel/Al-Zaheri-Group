import mongoose, { Schema } from "mongoose";

const NewsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: [String], required: true }, 
  createdAt: { type: Date, default: Date.now },
});

const News = mongoose.models.News || mongoose.model("News", NewsSchema);
export default News;
