import { createRoot } from "react-dom/client";
import { Menu } from "../Menu";

xdescribe("Sidebar - Menu component tests", () => {
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
    root.render(<Menu name="Dashboard" url="/" icon="fa-chart-line" />);
  });

  it("Renders correctly initial document with className", () => {
    const root = createRoot(container);
    root.render(<Menu name="Dashboard" url="/" icon="fa-chart-line" />);
  });
});
