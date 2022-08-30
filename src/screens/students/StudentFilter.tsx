import React from "react";

interface StudentAddProps {
  state: any;
  handleSearch: any;
  search: any;
  setSearch: any;
}

export default function StudentAdd({
  handleSearch,
  state,
  search,
  setSearch,
}: StudentAddProps) {
  const [showModal, setShowModal] = React.useState(false);
  const initialFilter = {
    name: "",
    scoreFrom: 0,
    scoreTo: 100,
    class: [],
  };

  let handleFilter = async (e: any) => {
    e.preventDefault();

    let { name, value } = e.target;

    await setSearch((s: any) => {
      return {
        ...s,
        [name]: value,
      };
    });
  };

  const handleClearFilter = async () => {
    await handleSearch(initialFilter, state.data, true);
    return await setSearch(initialFilter);
  };

  return (
    <>
      <button
        className="whitespace-nowrap bg-fuchsia-500 text-white active:bg-fuchsia-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <i className={`fas mr-2 text-sm fa-filter`}></i> Filter
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-lg">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Apply Filter</h3>
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
                        onChange={handleFilter}
                        value={search.name}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Score From
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="number"
                        name="scoreFrom"
                        min={0}
                        max={100}
                        onChange={handleFilter}
                        value={search.scoreFrom}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Score To
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="number"
                        name="scoreTo"
                        min={0}
                        max={100}
                        onChange={handleFilter}
                        value={search.scoreTo}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <div className="md:w-1/3"></div>
                      <label className="cursor-pointer md:w-2/3 block text-gray-500 font-bold">
                        <input
                          className="cursor-pointer mr-2 leading-tight"
                          type="checkbox"
                          name="class"
                          onChange={(e) =>
                            setSearch((s: any) => {
                              let value = [];
                              if (e.target.checked)
                                value = [...search.class, e.target.value];
                              else {
                                value = search.class.filter(
                                  (v: string) => v !== e.target.value
                                );
                              }
                              return {
                                ...s,
                                class: value,
                              };
                            })
                          }
                          value="A"
                          checked={search.class.includes("A")}
                        />
                        <span className="text-sm">Class A</span>
                      </label>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <div className="md:w-1/3"></div>
                      <label className="cursor-pointer md:w-2/3 block text-gray-500 font-bold">
                        <input
                          className="cursor-pointer mr-2 leading-tight"
                          type="checkbox"
                          name="class"
                          onChange={(e) =>
                            setSearch((s: any) => {
                              let value = [];
                              if (e.target.checked)
                                value = [...search.class, e.target.value];
                              else {
                                value = search.class.filter(
                                  (v: string) => v !== e.target.value
                                );
                              }
                              return {
                                ...s,
                                class: value,
                              };
                            })
                          }
                          value="B"
                          checked={search.class.includes("B")}
                        />
                        <span className="text-sm">Class B</span>
                      </label>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <div className="md:w-1/3"></div>
                      <label className="cursor-pointer md:w-2/3 block text-gray-500 font-bold">
                        <input
                          className="cursor-pointer mr-2 leading-tight"
                          type="checkbox"
                          name="class"
                          onChange={(e) =>
                            setSearch((s: any) => {
                              let value = [];
                              if (e.target.checked)
                                value = [...search.class, e.target.value];
                              else {
                                value = search.class.filter(
                                  (v: string) => v !== e.target.value
                                );
                              }
                              return {
                                ...s,
                                class: value,
                              };
                            })
                          }
                          value="C"
                          checked={search.class.includes("C")}
                        />
                        <span className="text-sm">Class C</span>
                      </label>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-5 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <div>
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleClearFilter}
                    >
                      Clear Filter
                    </button>

                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => (
                        handleSearch(search, state.data, true),
                        setShowModal(false)
                      )}
                    >
                      Apply Filter
                    </button>
                  </div>
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
