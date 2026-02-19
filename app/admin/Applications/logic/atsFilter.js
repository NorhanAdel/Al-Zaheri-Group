export const atsFilter = (apps, filters) => {
  return apps.filter((app) => {
    const jobMatch =
      !filters.job ||
      app.jobTitle.toLowerCase().includes(filters.job.toLowerCase());

    const skillMatch =
      !filters.skill ||
      app.skills.some((skill) =>
        skill.toLowerCase().includes(filters.skill.toLowerCase())
      );

    const expMatch = !filters.exp || app.experience >= Number(filters.exp);

    return jobMatch && skillMatch && expMatch;
  });
};
