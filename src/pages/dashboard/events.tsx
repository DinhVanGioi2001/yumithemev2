// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Card, Container, Stack, Typography, styled, Button, Drawer } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// layouts
import Layout from '../../layouts';
import Page from '../../components/Page';
import EventTable from 'src/sections/events/admin/EventTable';
import { useState } from 'react';
import CreateEventDrawer from 'src/sections/events/admin/CreateEventDrawer';
// components

// ----------------------------------------------------------------------

const BoxStyle = styled(Box)({
  padding: '21px 24px 20px',
  position: 'relative',
});

const StackStyle = styled(Stack)({
  alignItems: 'center',
  paddingBottom: '4px',
});

const VerticalLine = styled('div')({
  width: '4px',
  backgroundColor: '#F7CD81',
  height: '24px',
});

const ButtonStyle = styled(Button)({
  margin: '21px 24px 20px',
  padding: '12px 10px',
});

Events.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Events() {
  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleOpenEventForm = () => {
    setOpenDrawer(true);
  };

  return (
    <Page title="Admin Dashboard: General">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Card>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <BoxStyle>
              <StackStyle direction="row" spacing={1}>
                <VerticalLine />
                <Typography variant="h4">Events list</Typography>
              </StackStyle>
              <Typography variant="body1">This is fake content</Typography>
            </BoxStyle>
            <ButtonStyle
              variant="contained"
              startIcon={<AddCircle />}
              onClick={handleOpenEventForm}
            >
              Create new event
            </ButtonStyle>
          </Stack>
          <EventTable />
        </Card>
      </Container>
      <CreateEventDrawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
    </Page>
  );
}
