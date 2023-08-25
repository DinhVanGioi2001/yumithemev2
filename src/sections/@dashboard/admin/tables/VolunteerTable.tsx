import React, { useMemo } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import { Box } from '@mui/material';
import DataTable from 'src/components/material-table/DataTable';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function VolunteerTable() {
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
        size: 100,
      },
      {
        accessorKey: 'dob',
        header: 'DOB',
        size: 100,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 200,
        Cell: ({ cell }) => (
          <Box component="span" display="flex" flexDirection="row" alignItems="center">
            <FiberManualRecordIcon
              sx={{
                color: cell.getValue<string>() === 'In program' ? '#62AE5F' : '#9E9E9E',
                fontSize: '15px',
                mr: '10px',
              }}
            />
            {cell.getValue<string>()}
          </Box>
        ),
      },
      {
        accessorKey: 'programName',
        header: 'Program Name',
        size: 200,
        Cell: ({ cell }) => (
          <Box component="span" display="flex" flexDirection="row" alignItems="center">
            {cell.getValue<string>() ? cell.getValue<string>() : '-'}
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
      status: 'In program',
      programName: 'September Program',
    },
    {
      id: 2,
      name: 'Guy Hawkins',
      email: 'hans.shanahan@heaney.info',
      dob: '14/11/1957',
      status: 'Free',
      programNam: '',
    },
    {
      id: 3,
      name: 'Courtney Henry',
      email: 'bianka.kihn@graham.com',
      dob: '22/08/1969',
      status: 'In program',
      programName: 'September Program',
    },
    {
      id: 4,
      name: 'Savannah Nguyen',
      email: 'trevion92@yahoo.com',
      dob: '06/01/1976',
      status: 'Free',
      programName: '',
    },
    {
      id: 5,
      name: 'Esther Howard',
      email: 'scot78@kuvalis.com',
      dob: '07/05/1976',
      status: 'In program',
      programName: 'September Program',
    },
  ];

  return <DataTable columns={columns} data={data} />;
}
