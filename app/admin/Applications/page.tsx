"use client";

import { useState } from "react";
import { mockApplications } from "./data/mockApplications";
import Filters from "./components/Filters";
import ApplicationsTable from "./components/ApplicationsTable";
import { atsFilter } from "./logic/atsFilter";
import StatsCards from "./components/StatsCards";

export default function ApplicationsPage() {
  const [applications] = useState(mockApplications);
  const [filtered, setFiltered] = useState(mockApplications);

  const handleFilter = (filters) => {
    setFiltered(atsFilter(applications, filters));
  };

  return (
    <div className="p-6 space-y-6 my-28">
      <h1 className="text-2xl font-bold">Applications Dashboard</h1>

      <StatsCards data={filtered} />
      <Filters onFilter={handleFilter} />
      <ApplicationsTable data={filtered} />
    </div>
  );
}
