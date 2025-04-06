import React from "react";

function JobRoles() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Job Roles</h2>
      <p className="mb-4">Select or define job roles and their key skill sets. Resumes will be compared against these criteria.</p>

      <div className="mb-4">
        <h3 className="font-semibold">Web Developer</h3>
        <p>Skills: HTML, CSS, JavaScript, React</p>
        <p>Experience: 1+ years in frontend development</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Software Engineer</h3>
        <p>Skills: Python, Java, Data Structures, System Design</p>
        <p>Experience: 2+ years in software engineering</p>
      </div>
    </div>
  );
}

export default JobRoles;
