import { vi } from "vitest";
import * as util from "./util.js";

vi.mock("./util.js", async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
  };
});

test("main", async () => {
  vi.spyOn(util, "getWorkerMessage").mockReturnValue("I'm in test");
  const worker = new Worker(new URL("./worker.js", import.meta.url));
  const promise = new Promise((resolve) => {
    worker.onmessage = (e) => {
      // Prints "I'm the production worker." in 2.1.0-beta.7 and beyond, "I'm in test" in 2.0.5.
      console.error(e.data);
      resolve();
    };
  });
  worker.postMessage(["get message"]);

  await promise;
});
