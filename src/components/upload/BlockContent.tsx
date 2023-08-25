// @mui
import { Box, Typography, Stack } from '@mui/material';
import Image from 'src/components/Image';

// ----------------------------------------------------------------------

export default function BlockContent() {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      direction={{ xs: 'column' }}
      sx={{ width: 1, textAlign: { xs: 'center' } }}
    >
      <Image src={'/icons/upload_icon.svg'} alt="Upload icon" sx={{ width: '60px' }} />

      <Box>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 16 }}>
          <Typography
            variant="body2"
            component="span"
            sx={{ color: '#222', textDecoration: 'underline', fontWeight: 600 }}
          >
            Click to upload CV
          </Typography>
          &nbsp;or drag and drop
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 13 }}>
          Support PDF file (Maximum file size 50MB)
        </Typography>
      </Box>
    </Stack>
  );
}
