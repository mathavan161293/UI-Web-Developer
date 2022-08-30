import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../../assets/styles/pagination.css";
import StudentAdd from "../../screens/students/StudentAdd";
import StudentFilter from "../../screens/students/StudentFilter";
import TableHead from "../UI/Table/TableHead";

interface CardTableProps {
  tableHeadName: Array<string>;
  tableBody: any;
  perPage: number;
  pageName: string;
  state: any;
  setState: any;
}

export default function CardTable({
  tableHeadName,
  tableBody,
  perPage,
  pageName,
  state,
  setState,
}: CardTableProps) {
  const tableHead = (name: string) => <TableHead key={name} name={name} />;

  const [pageCount, setPageCount] = useState(0);
  const [listOffset, setListOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);

  const [search, setSearch] = useState({
    name: "",
    scoreFrom: 0,
    scoreTo: 100,
    class: [],
  });

  useEffect(() => {
    handleSearch(search, state.data, false);
  }, [state, listOffset, perPage]);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * perPage) % state.data.length;
    setListOffset(newOffset);
  };

  const handleSearch = (filter: any, data: any, resetOffset: boolean) => {
    if (resetOffset) setListOffset(0);
    let bbb = data;
    if (filter.name !== "") {
      bbb = data.filter((d: any) =>
        d.name.toLowerCase().includes(filter.name.toLowerCase())
      );
    }

    if (filter.scoreFrom >= 0 && filter.scoreTo <= 100) {
      bbb = bbb.filter(
        (d: any) => d.score >= filter.scoreFrom && d.score <= filter.scoreTo
      );
    }

    if (filter.class.length > 0) {
      bbb = bbb.filter((d: any) => filter.class.includes(d.class));
    }

    const endOffset = listOffset + perPage;
    setCurrentItems(bbb.slice(listOffset, endOffset));
    setPageCount(Math.ceil(bbb.length / perPage));
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-lg text-slate-700">{pageName}</h3>
          </div>
          <div className="flex items-center">
            <StudentFilter
              state={state}
              handleSearch={handleSearch}
              search={search}
              setSearch={setSearch}
            />
            <StudentAdd setState={setState} />
          </div>
        </div>
      </div>

      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>{tableHeadName.map((n: string) => tableHead(n))}</tr>
          </thead>

          <tbody>
            {state.loading
              ? [...Array(5)].map((x, i) => (
                  <tr key={i}>
                    {[...Array(tableHeadName.length)].map((y, j) => (
                      <td
                        key={j}
                        className="animate-pulse border h-5 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 "
                      >
                        <div className="h-5 bg-gray-200 rounded"></div>
                      </td>
                    ))}
                  </tr>
                ))
              : currentItems.length > 0 &&
                currentItems
                  .sort((a: any, b: any) => (a.name > b.name ? 1 : -1))
                  .map((d: any) => tableBody(d))}
          </tbody>
        </table>

        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          forcePage={listOffset > 0 ? listOffset / perPage : 0}
          className="pagination"
        />
      </div>
    </div>
  );
}
