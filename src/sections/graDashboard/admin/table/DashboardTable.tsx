import React, { useMemo, useState } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import DataTable from 'src/components/material-table/DataTable';
import { Box } from '@mui/material';
import DashboardDrawer from '../DashboardDrawer';

export default function DashboardTable() {
  const [openDrawerIntership, setOpenDrawerIntership] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawerIntership(!openDrawerIntership);
  };

  const handleOpenJobIntershipForm = () => {
    setOpenDrawerIntership(true);
  };

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'No',
        size: 10,
      },
      {
        accessorKey: 'jobName',
        header: 'Job name',
        size: 150,
        Cell: ({ cell }) => (
          <Box
            component="span"
            display="flex"
            flexDirection="row"
            alignItems="center"
            sx={{ textDecoration: 'underline' }}
          >
            {cell.getValue<string>()}
          </Box>
        ),
      },
      {
        accessorKey: 'company',
        header: 'Company',
        size: 150,
      },
      {
        accessorKey: 'postion',
        header: 'Postion',
        size: 50,
      },
      {
        accessorKey: 'areaField',
        header: 'Area/field',
        size: 50,
      },
      {
        accessorKey: 'slots',
        header: 'Slots',
        size: 10,
      },
      {
        accessorKey: 'endDate',
        header: 'End date',
        size: 100,
      },
      {
        accessorKey: 'register',
        header: 'Company',
        size: 10,
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={() => ({
              backgroundColor: '#F8D799',
              color: '#000',
              padding: '6px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
            onClick={handleOpenJobIntershipForm}
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
      jobName: 'PHP Developer',
      company: 'Bluth Company',
      postion: 'Intern',
      areaField: 'Sydney',
      slots: '2',
      endDate: '12/09/1023',
      register: 'Register',
    },
    {
      id: 2,
      jobName: 'Python Developer',
      company: 'Plexzap',
      postion: 'Intern',
      areaField: 'Sydney',
      slots: '2',
      endDate: '12/09/1023',
      register: 'Register',
    },
    {
      id: 3,
      jobName: 'Joomla Developer',
      company: ' Company',
      postion: 'Intern',
      areaField: 'Sydney',
      slots: '2',
      endDate: '12/09/1023',
      register: 'Register',
    },
    {
      id: 4,
      jobName: 'UI UX Designer',
      company: 'Krusty Krab',
      postion: 'Intern',
      areaField: 'Sydney',
      slots: '2',
      endDate: '12/09/1023',
      register: 'Register',
    },
    {
      id: 5,
      jobName: 'Human Resource',
      company: 'Umbrella Corporation',
      postion: 'Intern',
      areaField: 'Sydney',
      slots: '2',
      endDate: '12/09/1023',
      register: 'Register',
    },
    {
      id: 6,
      jobName: 'Freshers',
      company: 'Olivia Pope & Associates',
      postion: 'Intern',
      areaField: 'Sydney',
      slots: '2',
      endDate: '12/09/1023',
      register: 'Register',
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} />
      <DashboardDrawer openDrawer={openDrawerIntership} toggleDrawer={toggleDrawer} />
    </>
  );
}
