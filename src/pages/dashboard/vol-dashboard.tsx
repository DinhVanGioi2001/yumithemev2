import { useTheme } from '@mui/material/styles';
import { Box, Button, Card, Container, Stack, Typography, styled } from '@mui/material';
import useSettings from '../../hooks/useSettings';
import Layout from '../../layouts';
import Page from '../../components/Page';
import LearningTable from 'src/sections/learning/LearningTable';
import ListLearningCarousel from 'src/sections/learning/ListLearningCarousel';
import { useRef } from 'react';
import Slider from 'react-slick';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import DashboardTable from 'src/sections/volDashboard/DashboardTable';
import ListDocumentCarousel from 'src/sections/volDashboard/ListDocumentCarousel';

const BoxStyle = styled(Box)({
  padding: '21px 24px 20px',
  position: 'relative',
});

const StackStyle = styled(Stack)({
  alignItems: 'center',
  paddingBottom: '4px',
});

const NextAndPreContainer = styled(Box)({
  paddingRight: '15px',
  '&> .MuiButton-root': {
    minWidth: '15px',
    padding: '8px 10px',
    borderRadius: '50%',
    background: 'black',
    marginRight: '5px',
  },
  '&> .MuiButton-root:first-child': {
    background: '#E1E1E1',
    '&> .MuiSvgIcon-root': {
      color: 'black',
    },
  },
});

const VerticalLine = styled('div')({
  width: '4px',
  backgroundColor: '#F7CD81',
  height: '24px',
});

GeneralDashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

const products = [
  {
    path: '#',
    image: '/images/icon-pdf.svg',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
  {
    path: '#',
    image: '/images/icon-pdf.svg',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
    totalDocument: '8 documents',
    status: 'On going',
  },
  {
    path: '#',
    image: '/images/icon-pdf.svg',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
  {
    path: '#',
    image: '/images/icon-pdf.svg',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
    totalDocument: '8 documents',
    status: 'On going',
  },
  {
    path: '#',
    image: '/images/icon-pdf.svg',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
  {
    path: '#',
    image: '/images/icon-pdf.svg',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
  {
    path: '#',
    image: '/images/icon-pdf.svg',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
  {
    path: '#',
    image: '/images/icon-pdf.svg',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
  {
    path: '#',
    image: '/images/icon-pdf.svg',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
  {
    path: '#',
    image: '/images/icon-pdf.svg',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
  {
    path: '#',
    image: '/images/icon-pdf.svg',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
  {
    path: '#',
    image: '/images/charity-program.png',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
  {
    path: '#',
    image: '/images/charity-program.png',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
  {
    path: '#',
    image: '/images/charity-program.png',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
  {
    path: '#',
    image: '/images/charity-program.png',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
  {
    path: '#',
    image: '/images/charity-program.png',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
  {
    path: '#',
    image: '/images/charity-program.png',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
  {
    path: '#',
    image: '/images/charity-program.png',
    name: 'Charity program',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet',
  },
];

export default function GeneralDashboard() {
  const theme = useTheme();
  const { themeStretch } = useSettings();

  const carouselRef = useRef<Slider | null>(null);

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <>
      <Page title="General: E-commerce">
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
            <DashboardTable />
          </Card>
        </Container>
      </Page>

      <Page title="General: E-commerce" sx={{ marginTop: '1.5rem' }}>
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Card>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <BoxStyle>
                <StackStyle direction="row" spacing={1}>
                  <Typography variant="h4">List of Document</Typography>
                </StackStyle>
              </BoxStyle>
              <NextAndPreContainer>
                <Button onClick={handlePrevious}>
                  <NavigateBeforeIcon />
                </Button>
                <Button onClick={handleNext}>
                  <NavigateNextIcon />
                </Button>
              </NextAndPreContainer>
            </Stack>
            <ListDocumentCarousel products={products} carouselRef={carouselRef} />
          </Card>
        </Container>
      </Page>
    </>
  );
}
