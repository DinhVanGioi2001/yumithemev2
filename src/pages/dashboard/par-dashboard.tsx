// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Card, Container, Stack, Typography, styled } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// layouts
import Layout from '../../layouts';
import Page from '../../components/Page';
import GraduatePartnerTable from 'src/sections/parDashboard/GraduatePartnerTable';
import EventPartnerTable from 'src/sections/parDashboard/EventPartnerTable';
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

const BoxDivider = styled(Box)({
  width: '100%',
  height: '25px',
  background: '#F7F7F7',
  marginBottom: '1.5rem',
});

GeneralDashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function GeneralDashboard() {
  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();

  return (
    <>
      <Page title="Admin Dashboard: General">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Card>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <BoxStyle>
                <StackStyle direction="row" spacing={1}>
                  <VerticalLine />
                  <Typography variant="h4">Graduate list</Typography>
                </StackStyle>
                <Typography variant="body1">This is fake content</Typography>
              </BoxStyle>
            </Stack>
            <GraduatePartnerTable />
          </Card>
        </Container>
      </Page>

      <Page title="Admin Dashboard: General" sx={{ marginTop: '1.5rem' }}>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Card>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <BoxStyle>
                <StackStyle direction="row" spacing={1}>
                  <VerticalLine />
                  <Typography variant="h4">Event list</Typography>
                </StackStyle>
                <Typography variant="body1">This is fake content</Typography>
              </BoxStyle>
            </Stack>
            <EventPartnerTable />
          </Card>
        </Container>
      </Page>
    </>
  );
}
