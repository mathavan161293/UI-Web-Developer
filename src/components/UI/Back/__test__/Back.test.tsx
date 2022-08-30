import Back from "../Back";

import { createRoot } from "react-dom/client";

describe("Back ui component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    const root = createRoot(container);
    root.render(<Back to="/" className="" />);
  });

  it("Renders correctly initial document with className", () => {
    const root = createRoot(container);
    root.render(<Back to="/" className="" />);
  });
});
