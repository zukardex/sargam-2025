import React from "react";

export default function PointsTable() {
  const pointsData = [
    {
      department: "Music",
      group: { first: 3, second: 2, third: 1 },
      individual: { first: 2, second: 3, third: 1 },
      totalPoints: 50,
    },
    {
      department: "Arts",
      group: { first: 2, second: 3, third: 1 },
      individual: { first: 1, second: 2, third: 3 },
      totalPoints: 40,
    },
    {
      department: "Science",
      group: { first: 1, second: 1, third: 2 },
      individual: { first: 3, second: 2, third: 1 },
      totalPoints: 35,
    },
    {
      department: "Mechanical",
      group: { first: 2, second: 1, third: 3 },
      individual: { first: 2, second: 1, third: 2 },
      totalPoints: 42,
    },
    {
      department: "Drama",
      group: { first: 1, second: 2, third: 2 },
      individual: { first: 1, second: 1, third: 3 },
      totalPoints: 30,
    },
  ];

  return (
    <div className="p-8 min-h-screen text-white">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-red-600">
        Points Table
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-lg bg-gray-800 rounded-3xl">
          <thead>
            <tr className="bg-red-600 text-white text-lg">
              <th className="border border-gray-700 p-4">Department</th>
              <th className="border border-gray-700 p-4">Group 1st</th>
              <th className="border border-gray-700 p-4">Group 2nd</th>
              <th className="border border-gray-700 p-4">Group 3rd</th>
              <th className="border border-gray-700 p-4">Individual 1st</th>
              <th className="border border-gray-700 p-4">Individual 2nd</th>
              <th className="border border-gray-700 p-4">Individual 3rd</th>
              <th className="border border-gray-700 p-4">Total Points</th>
            </tr>
          </thead>
          <tbody>
            {pointsData.map((dept, index) => (
              <tr
                key={index}
                className="text-center even:bg-gray-700 odd:bg-gray-800 hover:bg-gray-600 transition"
              >
                <td className="border border-gray-700 p-4 font-semibold text-red-600">
                  {dept.department}
                </td>
                <td className="border border-gray-700 p-4">{dept.group.first}</td>
                <td className="border border-gray-700 p-4">{dept.group.second}</td>
                <td className="border border-gray-700 p-4">{dept.group.third}</td>
                <td className="border border-gray-700 p-4">{dept.individual.first}</td>
                <td className="border border-gray-700 p-4">{dept.individual.second}</td>
                <td className="border border-gray-700 p-4">{dept.individual.third}</td>
                <td className="border border-gray-700 p-4 font-bold text-red-600">
                  {dept.totalPoints}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}