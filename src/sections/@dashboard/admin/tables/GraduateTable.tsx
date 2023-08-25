import React, { useMemo } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import { Box } from '@mui/material';
import DataTable from 'src/components/material-table/DataTable';

export default function GraduateTable() {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'No',
        size: 10,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 150,
      },
      {
        accessorKey: 'dob',
        header: 'DOB',
        size: 150,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 200,
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={() => ({
              backgroundColor:
                cell.getValue<string>() === 'Looking for job'
                  ? '#E5F9E6'
                  : cell.getValue<string>() === 'Internship'
                  ? '#DEEEFB'
                  : '#E1E1E1',
              color:
                cell.getValue<string>() === 'Looking for job'
                  ? '#2F802C'
                  : cell.getValue<string>() === 'Internship'
                  ? '#1B65A0'
                  : '#626262',
              padding: '4px 10px',
              borderRadius: '32px',
            })}
          >
            {cell.getValue<string>()}
          </Box>
        ),
      },
    ],
    []
  );

  const data = [
    {
      id: 1,
      name: 'Dianne Russell',
      email: 'ecormier@dibbert.com',
      dob: '12/08/1994',
      status: 'Looking for job',
    },
    {
      id: 2,
      name: 'Guy Hawkins',
      email: 'hans.shanahan@heaney.info',
      dob: '14/11/1957',
      status: 'Internship',
    },
    {
      id: 3,
      name: 'Courtney Henry',
      email: 'bianka.kihn@graham.com',
      dob: '22/08/1969',
      status: 'Working',
    },
    {
      id: 4,
      name: 'Savannah Nguyen',
      email: 'trevion92@yahoo.com',
      dob: '06/01/1976',
      status: 'Looking for job',
    },
    {
      id: 5,
      name: 'Esther Howard',
      email: 'scot78@kuvalis.com',
      dob: '07/05/1976',
      status: 'Working',
    },
  ];

  return <DataTable columns={columns} data={data} />;
}
