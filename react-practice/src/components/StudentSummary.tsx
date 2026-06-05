import { sampleStudents } from "../data/sampleStudents";
import { analyzeStudentProgress } from "../utils/studentProgress";

export function StudentSummary() {
  const result = analyzeStudentProgress(sampleStudents);

  return (
    <div>
      <h2>Student Summary</h2>
      
      <p>Pass Count: {result.passCount}</p>

      <p>Fail Count: {result.failCount}</p>

      <p>Average Marks: {result.averageMarks}</p>

      <p>
        Topper:{" "}
        {result.topper
          ? `${result.topper.name} (${result.topper.marks})`
          : "No students"}
      </p>

      <h3>Failed Students</h3>

      {result.failedStudents.length === 0 ? (
        <p>No failed students</p>
      ) : (
        <ul>
          {result.failedStudents.map((student) => (
            <li key={student.id}>
              {student.name} - {student.marks}
            </li>
          ))}
        </ul>
      )}

    </div> 
  );
}