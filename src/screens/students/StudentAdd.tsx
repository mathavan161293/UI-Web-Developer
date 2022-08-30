import React from "react";

import { addStudent } from "../../services/fetch";

interface StudentAddProps {
  setState: any;
}

export default function StudentAdd({ setState }: StudentAddProps) {
  const [showModal, setShowModal] = React.useState(false);
  const [studentForm, setStudentForm] = React.useState({
    id: Math.floor(Math.random() * 10000 + 1),
    name: "",
    score: 0,
    class: "A",
  });

  //  Change Form
  const handleChangeForm = (e: any) => {
    e.preventDefault();

    let { name, value } = e.target;

    if (name === "score") {
      if (Number(value) > 100) value = 100;
      else if (Number(value) < 0) value = 0;
      else value = Number(value);
    }

    setStudentForm((s: any) => ({
      ...s,
      [name]: value,
    }));
  };

  //  Submit Form
  let submitAddStudent = async () => {
    setState((s: any) => ({
      ...s,
      loading: true,
    }));

    setStudentForm((s: any) => ({
      ...s,
      id: s.id + 1,
    }));

    await addStudent(studentForm).then((data: any) => {
      setState((s: any) => ({
        ...s,
        data,
        loading: false,
      }));
      setShowModal(false);
      setStudentForm((s: any) => ({ ...s, name: "", score: 0, class: "A" }));
    });
  };
  return (
    <>
      <button
        className="whitespace-nowrap bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <i className={`fas mr-2 text-sm fa-add`}></i> Add Student
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-lg">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Student Form</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Student Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        name="name"
                        value={studentForm.name}
                        onChange={handleChangeForm}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Score
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="number"
                        name="score"
                        min={1}
                        value={studentForm.score}
                        onChange={handleChangeForm}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Class
                      </label>
                      <select
                        className="block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="class"
                        value={studentForm.class}
                        onChange={handleChangeForm}
                      >
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={submitAddStudent}
                  >
                    Add Student
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
