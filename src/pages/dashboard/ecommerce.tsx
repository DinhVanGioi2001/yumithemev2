import { useTheme } from '@mui/material/styles';
import { Box, Card, Container, Stack, Typography, styled } from '@mui/material';
import useSettings from '../../hooks/useSettings';
import Layout from '../../layouts';
import Page from '../../components/Page';
import JobListTable from 'src/sections/job/admin/table/JobListTable';

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

GeneralEcommerce.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function GeneralEcommerce() {
  const theme = useTheme();
  const { themeStretch } = useSettings();

  return (
    <Page title="General: E-commerce">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Card>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <BoxStyle>
              <StackStyle direction="row" spacing={1}>
                <VerticalLine />
                <Typography variant="h4">Job list</Typography>
              </StackStyle>
              <Typography variant="body1">This is fake content</Typography>
            </BoxStyle>
          </Stack>
          <JobListTable />
        </Card>
      </Container>
    </Page>
  );
}
