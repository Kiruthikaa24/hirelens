import React from "react";

function Results() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Match Results</h2>
      <p className="mb-4">Here you'll see how well each resume matches the job description based on a semantic similarity score.</p>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Candidate</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Score</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Dynamic rows here */}
          <tr>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">john@example.com</td>
            <td className="border px-4 py-2">0.89</td>
            <td className="border px-4 py-2 text-green-600">Selected</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Results;
