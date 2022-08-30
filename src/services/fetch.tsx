// Local Storage
export const getLocalStorage = async (key: string) => {
  const localStorageObj = localStorage.getItem(key);
  const value = localStorageObj ? JSON.parse(localStorageObj) : [];
  return value;
};

export const setLocalStorage = async (key: string, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

//\\------ API Calls ------//\\

// Students Data
export const getStudents = async () => {
  const studentList = await getLocalStorage("Students");
  return studentList;
};

export const getStudentById = async (id: number) => {
  const studentList = await getLocalStorage("Students");
  const list = studentList.filter((student: any) => student.id === id);
  return list[0];
};

export const addStudent = async (data: any) => {
  const studentList = await getLocalStorage("Students");
  const result = [...studentList, data];

  // Set Local Storage
  await setLocalStorage("Students", result);
  return result;
};

export const deleteStudentById = async (id: number) => {
  const studentList = await getLocalStorage("Students");
  const result = studentList.filter((student: any) => id !== student.id);

  // Set Local Storage
  await setLocalStorage("Students", result);
  return result;
};
