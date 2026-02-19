"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AddNewsPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1️⃣ Upload Image
    const formData = new FormData();
    formData.append("file", image);

    const uploadRes = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const uploadData = await uploadRes.json();

    // 2️⃣ Create News
    await fetch("/api/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        content,
        date,
        image: uploadData.fileUrl,
      }),
    });

    setLoading(false);
    router.push("/admin/news");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl my-28"
    >
      <h1 className="text-3xl font-bold text-left mb-8">Add News</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow space-y-6"
      >
        {/* Title */}
        <input
          type="text"
          placeholder="News Title"
          className="w-full border p-3 rounded-xl"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Description */}
        <textarea
          placeholder="Short Description"
          rows="3"
          className="w-full border p-3 rounded-xl"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        {/* Content */}
        <textarea
          placeholder="Full Content"
          rows="6"
          className="w-full border p-3 rounded-xl"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        {/* Date */}
        <input
          type="date"
          className="w-full border p-3 rounded-xl"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        {/* Upload */}
        <label className="block border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:border-blue-600 transition">
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
          <p className="text-gray-500">
            {image ? image.name : "Click to upload image"}
          </p>
        </label>

        {/* Submit */}
        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          {loading ? "Publishing..." : "Publish News"}
        </button>
      </form>
    </motion.div>
  );
}
