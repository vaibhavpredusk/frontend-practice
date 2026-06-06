import { StudentSummary } from "./components/StudentSummary";
import { TaskBoard } from "./components/TaskBoard";
import { sampleTasks } from "./data/sampleTasks";
import { UserDirectory } from "./components/UserDirectory";
import { sampleUsers } from "./data/sampleUsers";
import { SimulatedUserLoader } from "./components/SimulatedUserLoader";

function App() {
  return (
    <div>
      <StudentSummary/>
      <TaskBoard
        initialTasks={sampleTasks}
      />
      <UserDirectory
        users={sampleUsers}
      />
      <SimulatedUserLoader />
    </div>
    
  );
}

export default App;



