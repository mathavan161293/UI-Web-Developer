import Dashboard from "../Dashboard";
import { createRoot } from "react-dom/client";

describe("Dashboard screen tests", () => {
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
    root.render(<Dashboard />);
  });

  it("Renders correctly initial document with text", () => {});
});
