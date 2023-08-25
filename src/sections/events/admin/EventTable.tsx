import React, { useMemo } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import DataTable from 'src/components/material-table/DataTable';

export default function EventTable() {
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
        size: 150,
      },
      {
        accessorKey: 'location',
        header: 'Location',
        size: 150,
      },
      {
        accessorKey: 'startDate',
        header: 'Start date',
        size: 150,
      },
      {
        accessorKey: 'endDate',
        header: 'End date',
        size: 150,
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
    },
    {
      id: 2,
      eventName: 'Interaction',
      location: 'Sydney',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
    },
    {
      id: 3,
      eventName: 'London Design Festival',
      location: 'Sydney',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
    },
    {
      id: 4,
      eventName: 'AIGA Design Conference',
      location: 'Sydney',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
    },
    {
      id: 5,
      eventName: 'What Design Can Do',
      location: 'Sydney',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
    },
  ];

  return <DataTable columns={columns} data={data} />;
}
