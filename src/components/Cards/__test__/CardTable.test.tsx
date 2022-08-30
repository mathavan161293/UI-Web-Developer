import { createRoot } from "react-dom/client";

describe("Cards - CardTable component tests", () => {
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
  });

  it("Renders correctly initial document with text", () => {
    const root = createRoot(container);
  });
});
