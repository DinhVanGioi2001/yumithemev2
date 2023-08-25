import React, { useMemo, useState } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import { Box, ListItemIcon, MenuItem } from '@mui/material';
import DataTable from 'src/components/material-table/DataTable';
import { Description, FiberManualRecord, Done, Clear } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Image from 'src/components/Image';
import ProgramDetailDrawer from '../ProgramDetailDrawer';

const MenuItemStyle = styled(MenuItem)({
  padding: '12px',
  marginRight: '8px',
  marginLeft: '8px',
  borderRadius: '8px',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 600,
});

const ListItemIconStyle = styled(ListItemIcon)({
  marginRight: 0,
});

export default function ProgramTable() {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'No',
        size: 10,
      },
      {
        accessorKey: 'image',
        header: 'Image',
        size: 50,
        Cell: ({ cell }) => (
          <Box component="span" display="flex" flexDirection="row" alignItems="center">
            <Image sx={{ width: '60px', height: '60px' }} src={cell.getValue<string>()} />
          </Box>
        ),
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 200,
      },
      {
        accessorKey: 'register',
        header: 'Register',
        size: 100,
      },
      {
        accessorKey: 'document',
        header: 'Document',
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
        accessorKey: 'status',
        header: 'Status',
        size: 50,
        Cell: ({ cell }) => (
          <Box component="span" display="flex" flexDirection="row" alignItems="center">
            <FiberManualRecord
              sx={{
                color: cell.getValue<string>() === 'On live' ? '#62AE5F' : '#9E9E9E',
                fontSize: '15px',
                mr: '10px',
              }}
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
      image:
        'https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg',
      name: 'Charity program',
      register: '6/8',
      document: '8 documents',
      status: 'On live',
    },
    {
      id: 2,
      image:
        'https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg',
      name: 'Charity program',
      register: '6/8',
      document: '8 documents',
      status: 'On live',
    },
    {
      id: 3,
      image:
        'https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg',
      name: 'Charity program',
      register: '6/8',
      document: '8 documents',
      status: 'On live',
    },
    {
      id: 4,
      image:
        'https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg',
      name: 'Charity program',
      register: '6/8',
      document: '8 documents',
      status: 'On live',
    },
    {
      id: 5,
      image:
        'https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg',
      name: 'Charity program',
      register: '6/8',
      document: '8 documents',
      status: 'On live',
    },
    {
      id: 6,
      image:
        'https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg',
      name: 'Charity program',
      register: '6/8',
      document: '8 documents',
      status: 'On live',
    },
  ];

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleOpenProgramDetail = () => {
    console.log(';demo');

    setOpenDrawer(true);
  };

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        enableRowActions={true}
        positionActionsColumn={'last'}
        renderRowActionMenuItems={({ closeMenu, row }) =>
          row
            .getAllCells()
            .filter((obj: any) => obj.column.id === 'status')[0]
            .getValue() === 'On live'
            ? [
                <MenuItemStyle
                  key={0}
                  onClick={() => {
                    closeMenu();
                    handleOpenProgramDetail();
                  }}
                >
                  <ListItemIconStyle>
                    <Description />
                  </ListItemIconStyle>
                  View more
                </MenuItemStyle>,
                <MenuItemStyle
                  key={1}
                  onClick={() => {
                    // Send email logic...
                    closeMenu();
                  }}
                  sx={{ color: '#2F802C' }}
                >
                  <ListItemIconStyle>
                    <Done sx={{ color: '#2F802C' }} />
                  </ListItemIconStyle>
                  Approve
                </MenuItemStyle>,
                <MenuItemStyle
                  key={2}
                  onClick={() => {
                    // Send email logic...
                    closeMenu();
                  }}
                  sx={{ color: '#CF4749' }}
                >
                  <ListItemIconStyle>
                    <Clear sx={{ color: '#CF4749' }} />
                  </ListItemIconStyle>
                  Reject
                </MenuItemStyle>,
              ]
            : [
                <MenuItemStyle
                  key={0}
                  onClick={() => {
                    closeMenu();
                    handleOpenProgramDetail();
                  }}
                >
                  <ListItemIconStyle>
                    <Description />
                  </ListItemIconStyle>
                  View more
                </MenuItemStyle>,
              ]
        }
      />
      <ProgramDetailDrawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
    </>
  );
}
