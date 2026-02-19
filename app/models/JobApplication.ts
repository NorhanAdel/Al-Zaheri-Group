import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    job: String,
    cv: String,
  },
  { timestamps: true }
);

export default mongoose.models.JobApplication ||
  mongoose.model("JobApplication", JobApplicationSchema);
