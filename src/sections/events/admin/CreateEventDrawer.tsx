import { Drawer, Typography, styled } from '@mui/material';
import CreateEventForm from './CreateEventForm';

const EventHeading = styled(Typography)({
  padding: '40px 0px 36px',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '48px',
});

interface CreateEventDrawerProps {
  openDrawer: boolean;
  toggleDrawer: () => void;
}

export default function CreateEventDrawer({ openDrawer, toggleDrawer }: CreateEventDrawerProps) {
  const onSubmit = () => {
    console.log('Create new event');
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
      <EventHeading variant="h3">Create new event</EventHeading>
      <CreateEventForm onSubmit={onSubmit} />
    </Drawer>
  );
}
