import React, { useMemo, useState } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import DataTable from 'src/components/material-table/DataTable';
import { Box } from '@mui/material';
import JobDetailDrawer from '../JobDetailDrawer';
import JobFeedbackDrawer from '../JobFeedbackDrawer';

export default function JobListTable() {
  const [openDrawerDetail, setOpenDrawerDetail] = useState(false);
  const [openFeedbackDrawer, setOpenFeedbackDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawerDetail(!openDrawerDetail);
  };

  const toggleFeedbackDrawer = () => {
    setOpenFeedbackDrawer(!openFeedbackDrawer);
  };

  const handleOpenJobDetailForm = () => {
    setOpenDrawerDetail(true);
  };

  const handleReject = () => {
    toggleFeedbackDrawer();
    toggleDrawer();
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
        accessorKey: 'details',
        header: 'Details',
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
            onClick={handleOpenJobDetailForm}
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
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      details: 'Details',
    },
    {
      id: 2,
      jobName: 'Python Developer',
      company: 'Plexzap',
      postion: 'Intern',
      areaField: 'Sydney',
      slots: '2',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      details: 'Details',
    },
    {
      id: 3,
      jobName: 'Joomla Developer',
      company: ' Company',
      postion: 'Intern',
      areaField: 'Sydney',
      slots: '2',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      details: 'Details',
    },
    {
      id: 4,
      jobName: 'UI UX Designer',
      company: 'Krusty Krab',
      postion: 'Intern',
      areaField: 'Sydney',
      slots: '2',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      details: 'Details',
    },
    {
      id: 5,
      jobName: 'Human Resource',
      company: 'Umbrella Corporation',
      postion: 'Intern',
      areaField: 'Sydney',
      slots: '2',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      details: 'Details',
    },
    {
      id: 6,
      jobName: 'Freshers',
      company: 'Olivia Pope & Associates',
      postion: 'Intern',
      areaField: 'Sydney',
      slots: '2',
      startDate: '12/08/1023',
      endDate: '12/09/1023',
      details: 'Details',
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} />
      <JobDetailDrawer
        openDrawer={openDrawerDetail}
        toggleDrawer={toggleDrawer}
        handleReject={handleReject}
      />
      <JobFeedbackDrawer openDrawer={openFeedbackDrawer} toggleDrawer={toggleFeedbackDrawer} />
    </>
  );
}
