import type { Student } from "../types/student";

export type StudentProgressResult ={
  passCount: number;
  failCount: number;
  averageMarks: number;
  topper: Student | null;
  failedStudents: Student[];
};

export function analyzeStudentProgress(
  students: Student[],
): StudentProgressResult {
  if (students.length === 0) {
    return {
      passCount: 0,
      failCount: 0,
      averageMarks: 0,
      topper: null,
      failedStudents: [],
    };
  }

  let passCount = 0;
  let failCount = 0;
  let totalMarks = 0;
  let topper = students[0];

  const failedStudents: Student[] = [];

  for (const student of students) {
    totalMarks += student.marks;

    if (student.marks >= 40) {
      passCount++;
    } else {
      failCount++;
      failedStudents.push(student);
    }

    if (student.marks > topper.marks) {
      topper = student;
    }
  }

  const averageMarks = totalMarks / students.length;

  return {
    passCount,
    failCount,
    averageMarks,
    topper,
    failedStudents,
  };
}