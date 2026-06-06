import { useSimulatedUser } from "../hooks/useSimulatedUser";

export function SimulatedUserLoader() {
  const {
    state,
    user,
    errorMessage,
    loadSuccess,
    loadFailure,
    reset,
  } = useSimulatedUser();

  return (
    <div>
      <h2>Simulated User Loader</h2>

      <p>State: {state}</p>

      <button onClick={loadSuccess} disabled={state === "loading"} >
        Load Success
      </button>

      <button onClick={loadFailure} disabled={state === "loading"} >
        Load Failure
      </button>

      <button onClick={reset}>
        Reset
      </button>

      {state === "idle" && (
        <p>No user loaded</p>
      )}

      {state === "loading" && (
        <p>Loading...</p>
      )}

      {state === "success" &&
        user && (
          <p>
            Loaded User: {user.name}
          </p>
        )}

      {state === "error" &&
        errorMessage && (
          <p>Error: {errorMessage}</p>
        )}
    </div>
  );
}