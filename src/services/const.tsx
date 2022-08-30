export const menu = {
  dashboard: {
    name: "Dashboard",
    link: "/",
    icon: "fa-tv",
  },
  students: [
    {
      name: "Student List",
      link: "/students",
      icon: "fa-chart-bar",
    },
  ],
};

export const sidebarLinkActive = {
  active: "text-sky-500 hover:text-sky-600",
  defaults: "text-slate-700 hover:text-slate-500",
  activeIcon: "opacity-75",
  defaultsIcon: "text-slate-400",
};

const studentList = [
  { id: 1, name: "Alan", score: 70, class: "A" },
  { id: 2, name: "Ben", score: 90, class: "B" },
  { id: 3, name: "Cath", score: 80, class: "C" },
];
const localStorageObj = localStorage.getItem("Students");
if (!localStorageObj)
  localStorage.setItem("Students", JSON.stringify(studentList));
