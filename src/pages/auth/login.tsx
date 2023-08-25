import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Link, Container, Typography, Grid } from '@mui/material';
// routes
import { PATH_AUTH } from '../../routes/paths';
// hooks
import useAuth from '../../hooks/useAuth';
import useResponsive from '../../hooks/useResponsive';
// guards
import GuestGuard from '../../guards/GuestGuard';
// components
import Page from '../../components/Page';
import Image from '../../components/Image';
// sections
import { LoginForm } from '../../sections/auth/login';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
  textAlign: 'center',
}));

const ImageStyle = styled(Image)(() => ({
  width: '20%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '5px',
  display: 'inherit',
}));

// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuth();

  const smUp = useResponsive('up', 'sm');
  const mdUp = useResponsive('up', 'md');

  return (
    <GuestGuard>
      <Page title="Login">
        <RootStyle>
          <Grid container>
            {mdUp && (
              <Grid
                item
                xs={12}
                md={7}
                sx={{
                  backgroundColor: '#F7CD81',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Image
                  src={'/images/yumi-login-image.svg'}
                  alt="Login image"
                  sx={{ width: '80%', padding: '0px 40px' }}
                />
                <Stack sx={{ padding: '40px 60px 0px' }}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontSize: '32px', fontWeight: 600, lineHeight: '48px' }}
                  >
                    OUR MISSION
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <i>
                      “Building effective partnerships with local communities in papua new guinea,
                      to enhance the quality of education and healthycare”
                    </i>
                  </Typography>
                  <Typography variant="h6" gutterBottom sx={{ textAlign: 'right' }}>
                    -Project YUMI-
                  </Typography>
                </Stack>
              </Grid>
            )}

            <Grid item xs={12} md={5}>
              <Container maxWidth="sm">
                <ContentStyle>
                  <ImageStyle src={'/logo/yumi-logo.svg'} alt="Yumi" sx={{}} />
                  <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h4" gutterBottom>
                        Welcome back !
                      </Typography>
                    </Box>
                  </Stack>

                  <LoginForm />

                  <Typography variant="body2" sx={{ mt: { md: 2 } }}>
                    Don’t have an account? {''}
                    <NextLink href={PATH_AUTH.register} passHref>
                      <Link variant="subtitle2">Sign up</Link>
                    </NextLink>
                  </Typography>
                </ContentStyle>
              </Container>
            </Grid>
          </Grid>
        </RootStyle>
      </Page>
    </GuestGuard>
  );
}
