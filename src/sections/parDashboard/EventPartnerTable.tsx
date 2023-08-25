import React, { useMemo } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import DataTable from 'src/components/material-table/DataTable';

export default function EventPartnerTable() {
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
        accessorKey: 'areaField',
        header: 'Area/field',
        size: 100,
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
      {
        accessorKey: 'numberOfHires',
        header: 'Number of hires',
        size: 10,
      },
    ],
    []
  );

  const data = [
    {
      id: 1,
      eventName: 'The Design Conference',
      areaField: 'Sydney',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      numberOfHires: '2',
    },
    {
      id: 2,
      eventName: 'Interaction',
      areaField: 'Sydney',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      numberOfHires: '2',
    },
    {
      id: 3,
      eventName: 'London Design Festival',
      areaField: 'Sydney',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      numberOfHires: '2',
    },
    {
      id: 4,
      eventName: 'AIGA Design Conference',
      areaField: 'Sydney',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      numberOfHires: '2',
    },
    {
      id: 5,
      eventName: 'What Design Can Do',
      areaField: 'Sydney',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      numberOfHires: '2',
    },
  ];

  return <DataTable columns={columns} data={data} />;
}
