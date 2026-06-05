import type { SimulatedUser } from "../types/api";

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function fetchUserSimulated(
  shouldSucceed: boolean,
): Promise<SimulatedUser> {
  await delay(500);

  if (shouldSucceed) {
    return {
      id: 1,
      name: "Demo User",
    };
  }

  throw new Error("Simulated network error");
}

export async function runApiSimulationDemo(): Promise<void> {
  console.log("Loading...");

  try {
    const user = await fetchUserSimulated(true);
    console.log("Success:", user);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Error:", message);
  }

  console.log("Loading...");

  try {
    const user = await fetchUserSimulated(false);
    console.log("Success:", user);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Error:", message);
  }
}