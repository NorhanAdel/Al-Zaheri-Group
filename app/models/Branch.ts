import mongoose, { Schema, model, models } from "mongoose";

const branchSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

 
    mainImage: {
      type: String,
      required: true,
    },

 
    mainAudio: {
      type: String,
      required: true,
    },

  
    about: {
      type: String,
      required: true,
    },

 
    vision: {
      type: [String],
      default: [],
    },

    mission: {
      type: [String],
      default: [],
    },

    goals: {
      type: [String],
      default: [],
    },

    // صور الفرع (Gallery)
    images: {
      type: [String],
      default: [],
    },

  
    videos: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Branch = models.Branch || model("Branch", branchSchema);
export default Branch;
