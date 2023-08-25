import { Drawer, Typography, styled } from '@mui/material';
import ProgramDetailForm from './ProgramDetailForm';

interface CreateProgramDrawerProps {
  openDrawer: boolean;
  toggleDrawer: () => void;
}

export default function ProgramDetailDrawer({
  openDrawer,
  toggleDrawer,
}: CreateProgramDrawerProps) {
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
      <ProgramDetailForm onSubmit={onSubmit} />
    </Drawer>
  );
}
