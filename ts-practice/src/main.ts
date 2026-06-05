import { sampleStudents } from "./data/sampleStudents";
import { sampleUsers } from "./data/sampleUsers";
import { normalizeUsers } from "./utils/normalizeUsers";
import { sampleTasks } from "./data/sampleTasks";
import { analyzeStudentProgress } from "./utils/studentProgress";
import { normalizeTasks } from "./utils/taskNormalizer";
import { runApiSimulationDemo } from "./utils/apiSimulation";
import { countUsersByRole, getActiveUsers, getUserById,} from "./utils/userComputations";
import { parseUser } from "./utils/parseUser";


console.log(analyzeStudentProgress(sampleStudents));
console.log(normalizeTasks(sampleTasks));
runApiSimulationDemo();

console.log("normalizeUsers:");
console.log(normalizeUsers(sampleUsers));

console.log("\ncountUsersByRole:");
console.log(countUsersByRole(sampleUsers));

console.log("\ngetActiveUsers:");
console.log(getActiveUsers(sampleUsers));

console.log("\ngetUserById (id = 2):");
console.log(getUserById(sampleUsers, 2));

const validUser = {
  id: 10,
  name: "Demo User",
  email: "demo@example.com",
  role: "admin",
  isActive: true,
};

const invalidUser = {
  id: "10",
  name: "Invalid User",
  role: "admin",
};

console.log("\nparseUser(validUser):");
console.log(parseUser(validUser));

console.log("\nparseUser(invalidUser):");
console.log(parseUser(invalidUser));