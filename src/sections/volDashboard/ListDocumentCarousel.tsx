import Slider from 'react-slick';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link, Typography } from '@mui/material';
import Image from 'src/components/Image';
import TextMaxLine from 'src/components/TextMaxLine';
// @types

// ----------------------------------------------------------------------

export default function ListDocumentCarousel({ products, sx, carouselRef }: any) {
  const theme = useTheme();

  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
  };

  return (
    <Box sx={{ position: 'relative', ...sx }}>
      <Slider ref={carouselRef} {...settings}>
        {products.map((product: any) => (
          <Box key={product.name} sx={{ px: 1, textAlign: 'left' }}>
            <NextLink href={product.path} passHref>
              <Link
                color="inherit"
                underline="none"
                sx={{
                  display: 'block',
                  transition: (theme) => theme.transitions.create('all'),
                  border: '1px solid #E1E1E1',
                  borderRadius: '8px',
                  // '&:hover': { color: 'primary.main' },
                }}
              >
                <Image
                  alt={product.image}
                  src={product.image}
                  ratio="1/1"
                  disabledEffect
                  sx={{ borderRadius: '8px 8px 0 0', mb: 1, height: '177px !impotant' }}
                />
                <Box sx={{ padding: '15px' }}>
                  <TextMaxLine
                    line={2}
                    variant="caption"
                    sx={{ fontWeight: 600, fontSize: '20px' }}
                  >
                    {product.name}
                  </TextMaxLine>
                  <Typography variant="body2" sx={{ color: '#626262' }}>
                    {product.description}
                  </Typography>
                  <Box
                    component="span"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    marginTop="1rem"
                    alignItems="center"
                  >
                    <Typography>PDF format</Typography>
                    <Box
                      component="span"
                      sx={() => ({
                        backgroundColor: '#F8D799',
                        color: '#000',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        width: '130px',
                      })}
                      display="flex"
                      flexDirection="row"
                    >
                      <Image
                        src={'/images/download.svg'}
                        alt="job detail image"
                        sx={{ width: '50px', marginRight: '8px' }}
                      />
                      Download
                    </Box>
                  </Box>
                </Box>
              </Link>
            </NextLink>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
