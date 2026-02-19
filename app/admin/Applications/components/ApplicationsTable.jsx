import { useState } from "react";

export default function Filters({ onFilter }) {
  const [job, setJob] = useState("");
  const [skill, setSkill] = useState("");
  const [exp, setExp] = useState("");

  return (
    <div className="bg-white p-4 rounded flex gap-4 shadow">
      <input placeholder="Job Title" onChange={(e) => setJob(e.target.value)} />
      <input placeholder="Skill" onChange={(e) => setSkill(e.target.value)} />
      <input
        type="number"
        placeholder="Min Experience"
        onChange={(e) => setExp(e.target.value)}
      />
      <button onClick={() => onFilter({ job, skill, exp })}>Apply</button>
    </div>
  );
}
