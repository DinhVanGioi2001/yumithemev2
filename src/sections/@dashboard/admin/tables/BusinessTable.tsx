import React, { useMemo } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import { Box, ListItemIcon, MenuItem } from '@mui/material';
import DataTable from 'src/components/material-table/DataTable';
import { Description, FiberManualRecord, Done, Clear } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

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

export default function BusinessTable() {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'No',
        size: 10,
      },
      {
        accessorKey: 'businessName',
        header: 'Name of business',
        size: 200,
      },
      {
        accessorKey: 'contact',
        header: 'Contact',
        size: 150,
      },
      {
        accessorKey: 'employees',
        header: 'Employees',
        size: 50,
      },
      {
        accessorKey: 'newHires',
        header: 'New hires',
        size: 50,
      },
      {
        accessorKey: 'hostingStatus',
        header: 'Hosting status',
        size: 50,
        Cell: ({ cell }) => (
          <Box component="span" display="flex" flexDirection="row" alignItems="center">
            <FiberManualRecord
              sx={{
                color: cell.getValue<string>() === 'Hosting' ? '#62AE5F' : '#9E9E9E',
                fontSize: '15px',
                mr: '10px',
              }}
            />
            {cell.getValue<string>()}
          </Box>
        ),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 50,
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={() => ({
              backgroundColor:
                cell.getValue<string>() === 'Approved'
                  ? '#E5F9E6'
                  : cell.getValue<string>() === 'Pending'
                  ? '#E1E1E1'
                  : '#E1E1E1',
              color:
                cell.getValue<string>() === 'Approved'
                  ? '#2F802C'
                  : cell.getValue<string>() === 'Pending'
                  ? '#626262'
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
      businessName: 'United Properties',
      contact: '+61030200388',
      employees: 1000,
      newHires: 1000,
      hostingStatus: 'Hosting',
      status: 'Approved',
    },
    {
      id: 2,
      businessName: 'United Properties',
      contact: '+61030200388',
      employees: 1000,
      newHires: 1000,
      hostingStatus: 'Hosting',
      status: 'Pending',
    },
    {
      id: 3,
      businessName: 'United Properties',
      contact: '+61030200388',
      employees: 1000,
      newHires: 1000,
      hostingStatus: 'Hosting',
      status: 'Approved',
    },
    {
      id: 4,
      businessName: 'United Properties',
      contact: '+61030200388',
      employees: 1000,
      newHires: 1000,
      hostingStatus: 'Hosting',
      status: 'Pending',
    },
    {
      id: 5,
      businessName: 'United Properties',
      contact: '+61030200388',
      employees: 1000,
      newHires: 1000,
      hostingStatus: 'Hosting',
      status: 'Approved',
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      enableRowActions={true}
      positionActionsColumn={'last'}
      renderRowActionMenuItems={({ closeMenu, row }) =>
        row
          .getAllCells()
          .filter((obj: any) => obj.column.id === 'status')[0]
          .getValue() === 'Pending'
          ? [
              <MenuItemStyle
                key={0}
                onClick={() => {
                  // View profile logic...
                  closeMenu();
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
                  // View profile logic...
                  closeMenu();
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
  );
}
