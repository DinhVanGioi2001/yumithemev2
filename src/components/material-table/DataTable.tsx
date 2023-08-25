import React from 'react';
import { MRT_ColumnDef, MaterialReactTable } from 'material-react-table';
import { styled } from '@mui/material/styles';

const ContainerStyle = styled('div')({
  '& .MuiPaper-root': {
    boxShadow: 'none',
  },
  '& .MuiIconButton-root': {
    backgroundColor: '#F7F7F7',
  },  
});

interface DataTableProps {
  data: any[];
  columns: MRT_ColumnDef<any>[];
  renderRowActionMenuItems?: (row: any) => React.ReactNode[];
  enableRowActions?: boolean;
  positionActionsColumn?: 'first' | 'last';
}

export default function DataTable(props: DataTableProps) {
  return (
    <ContainerStyle>
      <MaterialReactTable
        columns={props.columns}
        data={props.data}
        enableColumnActions={false}
        enableColumnFilters={false}
        enableSorting={false}
        enableTopToolbar={false}
        enableRowActions={props.enableRowActions}
        positionActionsColumn={props.positionActionsColumn}
        muiTableBodyRowProps={{ hover: false }}
        muiTableHeadCellProps={{
          sx: {
            backgroundColor: '#222',
            color: '#F7F7F7',
            boxShadow: 'none !important',
            borderBottomLeftRadius: '0px !important',
            borderBottomRightRadius: '0px !important',
            padding: '16px 24px !important',
            fontSize: '13px',
            fontWeight: 700,
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            padding: '22px 24px !important',
            fontSize: '16px',
            fontWeight: 400,
          },
        }}
        renderRowActionMenuItems={props.renderRowActionMenuItems}
      />
    </ContainerStyle>
  );
}
