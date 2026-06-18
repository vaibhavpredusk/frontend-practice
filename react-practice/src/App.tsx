// import { StudentSummary } from "./components/StudentSummary";
// import { TaskBoard } from "./components/TaskBoard";
// import { sampleTasks } from "./data/sampleTasks";
// import { UserDirectory } from "./components/UserDirectory";
import { sampleUsers } from "./data/sampleUsers";
// import { SimulatedUserLoader } from "./components/SimulatedUserLoader";
import { FocusableSearchPanel } from "./components/FocusableSearchPanel";
import { DebouncedUserSearch } from "./components/DebouncedUserSearch";
import { WindowShortcutHint } from "./components/WindowShortcutHint";
import { SimulatedUserLoader } from "./components/SimulatedUserLoader";
import { MemoizedUserList } from "./components/MemoizedUserList";
import { ResizeObserverDemo } from "./components/ResizeObserverDemo";

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
      <SimulatedUserLoader/>
      <MemoizedUserList users={sampleUsers}/>

      <ResizeObserverDemo/>
    </div>
    
  );
}

export default App;



