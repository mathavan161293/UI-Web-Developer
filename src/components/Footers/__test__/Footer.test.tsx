import Footer from "../Footer";

import { createRoot } from "react-dom/client";

describe("Footer component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    const root = createRoot(container);
    root.render(<Footer />);
  });
});
