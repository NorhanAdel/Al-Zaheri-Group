"use client";

export default function StatsCards({ data }) {
  const total = data.length;
  const accepted = data.filter((d) => d.status === "accepted").length;
  const pending = data.filter((d) => d.status === "pending").length;
  const rejected = data.filter((d) => d.status === "rejected").length;

  return (
    <div className="grid md:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded shadow">Total: {total}</div>
      <div className="bg-green-100 p-4 rounded">Accepted: {accepted}</div>
      <div className="bg-yellow-100 p-4 rounded">Pending: {pending}</div>
      <div className="bg-red-100 p-4 rounded">Rejected: {rejected}</div>
    </div>
  );
}
