import React, { useMemo } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import DataTable from 'src/components/material-table/DataTable';
import { Box } from '@mui/material';
import Image from 'src/components/Image';

export default function LearningTable() {
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
        size: 300,
        Cell: ({ cell }) => (
          <Box component="span" display="flex" flexDirection="row" alignItems="center">
            <Image
              src={'/images/icon-pdf.svg'}
              alt="job detail image"
              sx={{ width: '50px', marginRight: '8px' }}
            />
            {cell.getValue<string>()}
          </Box>
        ),
      },
      {
        accessorKey: 'size',
        header: 'Size',
        size: 10,
      },
      {
        accessorKey: 'program',
        header: 'Program',
        size: 150,
      },
      {
        accessorKey: 'lastModified',
        header: 'Last Modified',
        size: 150,
      },
      {
        accessorKey: 'download',
        header: 'Download',
        size: 150,
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={() => ({
              backgroundColor: '#F8D799',
              color: '#000',
              padding: '6px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
              width: '130px',
            })}
            display="flex"
            flexDirection="row"
          >
            <Image
              src={'/images/download.svg'}
              alt="job detail image"
              sx={{ width: '50px', marginRight: '8px' }}
            />
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
      name: 'Document for charity.pdf',
      size: '4kb',
      program: 'Charity program',
      lastModified: '10/10/2022',
      download: 'Download',
    },
    {
      id: 2,
      name: 'Document for charity.pdf',
      size: '4kb',
      program: 'Charity program',
      lastModified: '10/10/2022',
      download: 'Download',
    },
    {
      id: 3,
      name: 'Document for charity.pdf',
      size: '4kb',
      program: 'Charity program',
      lastModified: '10/10/2022',
      download: 'Download',
    },
    {
      id: 4,
      name: 'Document for charity.pdf',
      size: '4kb',
      program: 'Charity program',
      lastModified: '10/10/2022',
      download: 'Download',
    },
    {
      id: 5,
      name: 'Document for charity.pdf',
      size: '4kb',
      program: 'Charity program',
      lastModified: '10/10/2022',
      download: 'Download',
    },
  ];

  return <DataTable columns={columns} data={data} />;
}
