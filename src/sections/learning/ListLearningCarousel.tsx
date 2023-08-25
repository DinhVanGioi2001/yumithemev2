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

export default function ListLearningCarousel({ products, sx, carouselRef }: any) {
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
    <Box sx={{ position: 'relative', paddingBottom: '25px', ...sx }}>
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
                  sx={{ borderRadius: '8px 8px 0 0', mb: 1 }}
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
                    alignItems="center"
                    marginTop="0.5rem"
                  >
                    <Image
                      src={'/icons/ic_attachment.svg'}
                      sx={{ width: '20px', marginRight: '7px' }}
                    />{' '}
                    {product.totalDocument}
                  </Box>

                  <Box
                    component="span"
                    sx={() => ({
                      backgroundColor:
                        product.status === 'Register'
                          ? '#E5F9E6'
                          : product.status === 'On Going'
                          ? '#DEEEFB'
                          : '#E1E1E1',
                      color:
                        product.status === 'Register'
                          ? '#2F802C'
                          : product.status === 'On Going'
                          ? '#1B65A0'
                          : '#626262',
                      padding: '4px 15px',
                      borderRadius: '32px',
                      width: 'fit-content',
                    })}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    marginTop="0.5rem"
                  >
                    <Image src={'/icons/ic_lock.svg'} sx={{ width: '20px', marginRight: '7px' }} />{' '}
                    {product.status}
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
