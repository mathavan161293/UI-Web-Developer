import { createRoot } from "react-dom/client";
import HeaderStats from "../HeaderStats";

describe("HeaderStats component tests", () => {
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
    root.render(<HeaderStats />);
  });

  it("Renders correctly initial document with text", () => {
    const root = createRoot(container);
    root.render(<HeaderStats />);
  });
});
