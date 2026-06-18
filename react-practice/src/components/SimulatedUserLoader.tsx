// import { useSimulatedUser } from "../hooks/useSimulatedUser";

// export function SimulatedUserLoader() {
//   const {
//     state,
//     user,
//     errorMessage,
//     loadSuccess,
//     loadFailure,
//     reset,
//   } = useSimulatedUser();

//   return (
//     <div>
//       <h2>Simulated User Loader</h2>

//       <p>State: {state}</p>

//       <button onClick={loadSuccess} disabled={state === "loading"} >
//         Load Success
//       </button>

//       <button onClick={loadFailure} disabled={state === "loading"} >
//         Load Failure
//       </button>

//       <button onClick={reset}>
//         Reset
//       </button>

//       {state === "idle" && (
//         <p>No user loaded</p>
//       )}

//       {state === "loading" && (
//         <p>Loading...</p>
//       )}

//       {state === "success" &&
//         user && (
//           <p>
//             Loaded User: {user.name}
//           </p>
//         )}

//       {state === "error" &&
//         errorMessage && (
//           <p>Error: {errorMessage}</p>
//         )}
//     </div>
//   );
// }

import { useStaleSafeAsync } from "../hooks/useStaleSafeAsync";

export function SimulatedUserLoader() {
  const {
    status,
    resultLabel,
    errorMessage,
    runFast,
    runSlow,
    cancel,
  } = useStaleSafeAsync();

  return (
    <div>
      <h2>
        Stale Safe Async Demo
      </h2>

      <button
        onClick={runFast}
        disabled={status === "loading"}
      >
        Run Fast
      </button>

      <button
        onClick={runSlow}
        disabled={status === "loading"}
      >
        Run Slow
      </button>

      <button onClick={cancel}>
        Cancel
      </button>

      <p>Status: {status}</p>

      {resultLabel && (
        <p>
          Result: {resultLabel}
        </p>
      )}

      {errorMessage && (
        <p>
          Error: {errorMessage}
        </p>
      )}
    </div>
  );
}