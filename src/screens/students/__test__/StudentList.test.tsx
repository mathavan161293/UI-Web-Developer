import StudentList from "../StudentList";

import { createRoot } from "react-dom/client";

xdescribe("Student - StudentList screen tests", () => {
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
    root.render(<StudentList />);
  });
});
