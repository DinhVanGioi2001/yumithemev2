import { Drawer, Typography, styled } from '@mui/material';
import CreateProgramForm from './CreateProgramForm';

const ProgramHeading = styled(Typography)({
  padding: '40px 0px 36px',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '48px',
});

interface CreateProgramDrawerProps {
  openDrawer: boolean;
  toggleDrawer: () => void;
}

export default function CreateProgramDrawer({
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
      <ProgramHeading variant="h3">Create new program</ProgramHeading>
      <CreateProgramForm onSubmit={onSubmit} />
    </Drawer>
  );
}
