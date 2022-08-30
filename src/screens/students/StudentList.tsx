import { useState, useEffect } from "react";
import CardTable from "../../components/Cards/CardTable";
import Badge from "../../components/UI/Badge/Badge";
import TableBody from "../../components/UI/Table/TableBody";

import { getStudents, deleteStudentById } from "../../services/fetch";

export default function StudentList() {
  const [state, setState] = useState<any>({
    data: [],
    loading: false,
  });

  let initialStart = async () => {
    setState((s: any) => ({
      ...s,
      loading: true,
    }));

    await getStudents().then((data: any) => {
      setState((s: any) => ({
        ...s,
        data,
        loading: false,
      }));
    });
  };

  useEffect(() => {
    initialStart();
  }, []);

  // Delete Student
  let handleDeleteStudent = async (id: number) => {
    setState((s: any) => ({
      ...s,
      loading: true,
    }));

    await deleteStudentById(id).then((data: any) => {
      setState((s: any) => ({
        ...s,
        data,
        loading: false,
      }));
    });
  };

  // Table Info
  const tableHeadName = ["Student Name", "Score", "Class", ""];
  const tableBody = (data: any) => (
    <tr key={data.id}>
      <TableBody name={data.name} />
      <TableBody name={data.score} />
      <TableBody name={data.class} />
      <TableBody>
        <Badge
          className="bg-red-500"
          name="Delete"
          onClick={() => handleDeleteStudent(Number(data.id))}
        />
      </TableBody>
    </tr>
  );

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <CardTable
          pageName="Student List"
          tableHeadName={tableHeadName}
          tableBody={tableBody}
          perPage={5}
          state={state}
          setState={setState}
        />
      </div>
    </div>
  );
}
