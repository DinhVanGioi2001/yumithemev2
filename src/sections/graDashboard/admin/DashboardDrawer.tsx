import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import DashboardForm from './DashboardForm';
import { Drawer, Slide, Typography, styled } from '@mui/material';

const EventHeading = styled(Typography)({
  padding: '40px 0px 36px',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '48px',
  paddingBottom: '0.7rem',
  marginBottom: '0.7rem',
  borderBottom: '1px solid #E1E1E1',
});
interface CreateProgramDrawerProps {
  openDrawer: boolean;
  toggleDrawer: () => void;
}

export default function DashboardDrawer({ openDrawer, toggleDrawer }: CreateProgramDrawerProps) {
  const onSubmit = () => {
    console.log('Create Program');
  };

  return (
    <Drawer
      anchor={'right'}
      open={openDrawer}
      onClose={toggleDrawer}
      PaperProps={{
        sx: {
          width: 487,
          padding: '10px 24px',
        },
      }}
    >
      <EventHeading variant="h3">Appy interships job</EventHeading>
      <DashboardForm onSubmit={onSubmit} />
    </Drawer>
  );
}
