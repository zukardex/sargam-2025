import { useState } from "react";

export default function Results() {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const results = [
    {
      name: "Classical Music Concert",
      venue: "Sargam Stage",
      first: { name: "Alice", department: "Music", year: "3rd Year" },
      second: { name: "Bob", department: "Arts", year: "2nd Year" },
      third: { name: "Charlie", department: "Science", year: "1st Year" },
    },
    {
      name: "EDM Night",
      venue: "DJ Hall",
      first: { name: "Dave", department: "DJ Club", year: "Final Year" },
      second: { name: "Eve", department: "Music", year: "3rd Year" },
      third: { name: "Frank", department: "Entertainment", year: "2nd Year" },
    },
    {
      name: "Stand-up Comedy",
      venue: "Archie Corner",
      first: { name: "Grace", department: "Drama", year: "2nd Year" },
      second: { name: "Hank", department: "Comedy", year: "3rd Year" },
      third: { name: "Ivy", department: "Literature", year: "1st Year" },
    },
    {
      name: "Rock Band Performance",
      venue: "Mech Top",
      first: { name: "Jack", department: "Mechanical", year: "Final Year" },
      second: { name: "Karen", department: "Music", year: "3rd Year" },
      third: { name: "Leo", department: "Arts", year: "2nd Year" },
    },
    {
      name: "Keynote Speech",
      venue: "CETAA Hall",
      first: {
        name: "Mike",
        department: "Public Speaking",
        year: "Final Year",
      },
      second: { name: "Nina", department: "Debate", year: "3rd Year" },
      third: { name: "Oscar", department: "Communication", year: "2nd Year" },
    },
  ];

  return (
    <div className="p-6 min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4 text-center text-red-600">
        Results Page
      </h1>
      <div className="mt-4 p-6 border border-gray-700 rounded-lg shadow-md bg-gray-900">
        <h2 className="text-xl font-semibold mb-2 text-yellow-400">Event Results</h2>
        {results.length > 0 ? (
          <ul className="space-y-3">
            {results.map((event, index) => (
              <li
                key={index}
                className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md border border-gray-600 cursor-pointer transition"
                onClick={() =>
                  setExpandedEvent(
                    expandedEvent === event.name ? null : event.name
                  )
                }
              >
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">{event.name}</p>
                  <p className="text-gray-400 text-sm">{event.venue}</p>
                </div>
                {expandedEvent === event.name && (
                  <div className="mt-2 p-4 bg-gray-700 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-400">
                      Winners
                    </h3>
                    <ol className="list-decimal ml-6 space-y-1">
                      <li>
                        <strong>1st:</strong> {event.first.name} (
                        {event.first.department}, {event.first.year})
                      </li>
                      <li>
                        <strong>2nd:</strong> {event.second.name} (
                        {event.second.department}, {event.second.year})
                      </li>
                      <li>
                        <strong>3rd:</strong> {event.third.name} (
                        {event.third.department}, {event.third.year})
                      </li>
                    </ol>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center">No results available.</p>
        )}
      </div>
    </div>
  );
}
