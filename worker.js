import { getWorkerMessage } from "./util.js";

self.onmessage = () => {
  postMessage(getWorkerMessage());
};
