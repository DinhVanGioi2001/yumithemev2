import React, { useMemo } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import DataTable from 'src/components/material-table/DataTable';
import { Box } from '@mui/material';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function DashboardTable() {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'No',
        size: 10,
      },
      {
        accessorKey: 'eventName',
        header: 'Event name',
        size: 200,
      },
      {
        accessorKey: 'location',
        header: 'Location',
        size: 150,
      },
      {
        accessorKey: 'startDate',
        header: 'Start date',
        size: 100,
      },
      {
        accessorKey: 'endDate',
        header: 'End date',
        size: 100,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 20,
        Cell: ({ cell }) => (
          <Box component="span" display="flex" flexDirection="row" alignItems="center">
            <FiberManualRecordIcon
              sx={{
                color: cell.getValue<string>() === 'Available' ? '#62AE5F' : '#9E9E9E',
                fontSize: '15px',
                mr: '10px',
              }}
            />
            {cell.getValue<string>()}
          </Box>
        ),
      },
      {
        accessorKey: 'details',
        header: '',
        size: 10,
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={() => ({
              backgroundColor: '#F8D799',
              color: '#000',
              padding: '4px 10px',
              borderRadius: '8px',
              cursor: 'pointer',
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
      eventName: 'The Design Conference',
      location: 'Sydney',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      status: 'Available',
      details: 'Register',
    },
    {
      id: 2,
      eventName: 'Interaction',
      location: 'Sydney',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      status: 'Available',
      details: 'Register',
    },
    {
      id: 3,
      eventName: 'London Design Festival',
      location: 'Sydney',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      status: 'Available',
      details: 'Register',
    },
    {
      id: 4,
      eventName: 'AIGA Design Conference',
      location: 'Sydney',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      status: 'Full',
      details: 'Register',
    },
    {
      id: 5,
      eventName: 'What Design Can Do',
      location: 'Sydney',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      status: 'Full',
      details: 'Register',
    },
  ];

  return <DataTable columns={columns} data={data} />;
}
