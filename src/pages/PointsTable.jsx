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
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
        Points Table
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-lg bg-white rounded-lg">
          <thead>
            <tr className="bg-red-600 text-white text-lg">
              <th className="border p-4">Department</th>
              <th className="border p-4">Group 1st</th>
              <th className="border p-4">Group 2nd</th>
              <th className="border p-4">Group 3rd</th>
              <th className="border p-4">Individual 1st</th>
              <th className="border p-4">Individual 2nd</th>
              <th className="border p-4">Individual 3rd</th>
              <th className="border p-4">Total Points</th>
            </tr>
          </thead>
          <tbody>
            {pointsData.map((dept, index) => (
              <tr
                key={index}
                className="text-center text-gray-700 even:bg-gray-100 hover:bg-gray-200 transition"
              >
                <td className="border p-4 font-semibold">{dept.department}</td>
                <td className="border p-4">{dept.group.first}</td>
                <td className="border p-4">{dept.group.second}</td>
                <td className="border p-4">{dept.group.third}</td>
                <td className="border p-4">{dept.individual.first}</td>
                <td className="border p-4">{dept.individual.second}</td>
                <td className="border p-4">{dept.individual.third}</td>
                <td className="border p-4 font-bold text-red-600">
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

// import React from "react";

// export default function PointsTable() {
//   const pointsData = [
//     {
//       department: "Music",
//       group: { first: 3, second: 2, third: 1 },
//       individual: { first: 2, second: 3, third: 1 },
//       totalPoints: 50,
//     },
//     {
//       department: "Arts",
//       group: { first: 2, second: 3, third: 1 },
//       individual: { first: 1, second: 2, third: 3 },
//       totalPoints: 40,
//     },
//     {
//       department: "Science",
//       group: { first: 1, second: 1, third: 2 },
//       individual: { first: 3, second: 2, third: 1 },
//       totalPoints: 35,
//     },
//     {
//       department: "Mechanical",
//       group: { first: 2, second: 1, third: 3 },
//       individual: { first: 2, second: 1, third: 2 },
//       totalPoints: 42,
//     },
//     {
//       department: "Drama",
//       group: { first: 1, second: 2, third: 2 },
//       individual: { first: 1, second: 1, third: 3 },
//       totalPoints: 30,
//     },
//   ];

//   return (
//     <div className="p-8 min-h-screen bg-gradient-to-r from-red-900 to-orange-700">
//       <h1 className="text-5xl font-extrabold mb-6 text-center text-yellow-300 tracking-wide drop-shadow-lg">
//         Points Table
//       </h1>
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse shadow-2xl bg-black rounded-lg text-white">
//           <thead>
//             <tr className="bg-red-800 text-yellow-300 text-lg uppercase">
//               <th className="border border-yellow-500 p-4">Department</th>
//               <th className="border border-yellow-500 p-4">Group 1st</th>
//               <th className="border border-yellow-500 p-4">Group 2nd</th>
//               <th className="border border-yellow-500 p-4">Group 3rd</th>
//               <th className="border border-yellow-500 p-4">Individual 1st</th>
//               <th className="border border-yellow-500 p-4">Individual 2nd</th>
//               <th className="border border-yellow-500 p-4">Individual 3rd</th>
//               <th className="border border-yellow-500 p-4">Total Points</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pointsData.map((dept, index) => (
//               <tr
//                 key={index}
//                 className="text-center even:bg-red-700 odd:bg-red-900 hover:bg-orange-700 transition duration-300"
//               >
//                 <td className="border border-yellow-500 p-4 font-bold text-yellow-300">
//                   {dept.department}
//                 </td>
//                 <td className="border border-yellow-500 p-4">
//                   {dept.group.first}
//                 </td>
//                 <td className="border border-yellow-500 p-4">
//                   {dept.group.second}
//                 </td>
//                 <td className="border border-yellow-500 p-4">
//                   {dept.group.third}
//                 </td>
//                 <td className="border border-yellow-500 p-4">
//                   {dept.individual.first}
//                 </td>
//                 <td className="border border-yellow-500 p-4">
//                   {dept.individual.second}
//                 </td>
//                 <td className="border border-yellow-500 p-4">
//                   {dept.individual.third}
//                 </td>
//                 <td className="border border-yellow-500 p-4 font-bold text-yellow-400 text-xl">
//                   {dept.totalPoints}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
