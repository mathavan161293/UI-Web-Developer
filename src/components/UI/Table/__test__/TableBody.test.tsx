import TableBody from "../TableBody";

import { createRoot } from "react-dom/client";

describe("Table Body ui component tests", () => {
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
    root.render(<TableBody name="table body" />);
    root.render(<TableBody name="table body" className="" />);
    root.render(<TableBody>children</TableBody>);

    const td = container.querySelector("td");
  });
});
