// import { StudentSummary } from "./components/StudentSummary";
// import { TaskBoard } from "./components/TaskBoard";
// import { sampleTasks } from "./data/sampleTasks";
// import { UserDirectory } from "./components/UserDirectory";
import { sampleUsers } from "./data/sampleUsers";
// import { SimulatedUserLoader } from "./components/SimulatedUserLoader";
import { FocusableSearchPanel } from "./components/FocusableSearchPanel";
import { DebouncedUserSearch } from "./components/DebouncedUserSearch";
import { WindowShortcutHint } from "./components/WindowShortcutHint";

function App() {
  return (
    <div>
      {/* <StudentSummary/>
      <TaskBoard
        initialTasks={sampleTasks}
      />
      <UserDirectory
        users={sampleUsers}
      />
      <SimulatedUserLoader /> */}
      <FocusableSearchPanel
        panelTitle="User Search"
      />
       <DebouncedUserSearch
      users={sampleUsers}
      />
      <WindowShortcutHint/>
    </div>
    
  );
}

export default App;



