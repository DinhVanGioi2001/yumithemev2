// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import MetricsCard from 'src/sections/@dashboard/admin/MetricsCard';
import { metrics } from 'src/_mock/_metrics';
import OverviewCard from 'src/sections/@dashboard/admin/OverviewCard';

// ----------------------------------------------------------------------

GeneralApp.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();

  return (
    <Page title="General: App">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          {metrics.map((metric: any) => (
            <Grid item xs={12} md={3} key={metric.id}>
              <MetricsCard
                iconUrl={metric.iconUrl}
                iconBackground={metric.iconBackground}
                title={metric.title}
                value={metric.value}
              />
            </Grid>
          ))}
          <Grid item xs={12} md={12}>
            <OverviewCard />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
