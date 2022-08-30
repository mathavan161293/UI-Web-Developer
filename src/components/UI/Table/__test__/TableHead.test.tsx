import TableHead from "../TableHead";

import { createRoot } from "react-dom/client";

describe("Table Head ui component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("tr");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    const root = createRoot(container);
    root.render(<TableHead name="table head" className="" />);
  });
});
