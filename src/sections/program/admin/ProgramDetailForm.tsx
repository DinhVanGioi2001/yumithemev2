import * as Yup from 'yup';
import { useRef, useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, Alert, Typography, styled, Box } from '@mui/material';
import { FormProvider } from 'src/components/hook-form';
import Image from 'src/components/Image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

// ----------------------------------------------------------------------

const ContentInfoStyle = styled(Typography)({
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '36px',
  marginBottom: '0.3rem',
});

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

const BoxUploadImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '130px',
  fontSize: '1rem',
  borderRadius: '8px',
  border: '2px dotted  #B1B1B1',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  cursor: 'pointer',
}));

type FormValuesProps = {
  imageCover?: object;
  describe: string;
  duration: string;
  numberOfHires: string;
  uploadDocument?: object;
  afterSubmit?: string;
};

export default function CreateProgramForm({ onSubmit }: any) {
  const [selectedDocument, setSelectedDocument] = useState<File | null>(null);
  const documentInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClickDocument = () => {
    if (documentInputRef.current) {
      documentInputRef.current.click();
    }
  };

  const handleDocumentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setSelectedDocument(selectedFile);
    }
  };

  const ProgramSchema = Yup.object().shape({
    // imageCover: Yup.object().required('Image is required'),
    describe: Yup.string().required('Describe is required'),
    duration: Yup.string().required('Duration is required'),
    numberOfHires: Yup.string().required('Number of hires is required'),
    // uploadDocument: Yup.object().required('Upload Document is required'),
  });

  const defaultValues = {
    // imageCover: null,
    describe: '',
    duration: '',
    numberOfHires: '',
    // uploadDocument: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(ProgramSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <Box>
          <Image
            style={{ width: '100%', height: '225px', borderRadius: '8px' }}
            src={'/images/charity-program.png'}
            alt="Document image"
          />
        </Box>

        <Box>
          <ContentInfoStyle>Charity program</ContentInfoStyle>
          <Typography variant="body2" sx={{ color: '#626262' }}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo con
          </Typography>
        </Box>

        <Box
          sx={{
            borderBottom: '1px solid #E1E1E1',
            paddingBottom: '0.5rem',
          }}
        >
          <Box display="flex" marginBottom="0.3rem">
            <AccessTimeIcon />
            <ContentInfoStyle sx={{ lineHeight: '25px', paddingLeft: '5px', fontSize: '16px' }}>
              Time
            </ContentInfoStyle>
          </Box>
          <Typography variant="body2" sx={{ color: '#626262' }}>
            20/04/2022 - 20/05/2022
          </Typography>
        </Box>

        <Box
          sx={{
            borderBottom: '1px solid #E1E1E1',
            paddingBottom: '0.5rem',
          }}
        >
          <Box display="flex" marginBottom="0.3rem">
            <PersonOutlineOutlinedIcon />
            <ContentInfoStyle sx={{ lineHeight: '25px', paddingLeft: '5px', fontSize: '16px' }}>
              Volunteer register
            </ContentInfoStyle>
          </Box>
          <Typography variant="body2" sx={{ color: '#626262' }}>
            6/8
          </Typography>
        </Box>

        <Box>
          <LabelStyle>Upload Document ( Up to 8 )</LabelStyle>
          <input
            ref={documentInputRef}
            type="file"
            accept=".pdf, .png, .jpg, .mp4"
            style={{ display: 'none' }}
            onChange={handleDocumentChange}
            name="uploadDocument"
          />

          <BoxUploadImage onClick={handleButtonClickDocument}>
            {selectedDocument && (
              <Typography variant="body1" sx={{ fontWeight: '700' }}>
                Selected document: {selectedDocument.name}
              </Typography>
            )}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Image src={'/images/document.svg'} alt="Document image" sx={{ width: '50px' }} />
            </Box>
            <Typography variant="body1">
              <span style={{ textDecoration: 'underline', fontWeight: '700' }}>
                Click to upload document
              </span>{' '}
              or drag and drop
            </Typography>
            <Typography variant="body2" sx={{ color: '#7E7E7E' }}>
              Support PDF,PNG,JPG,MP4 file (Maximum file size 50MB)
            </Typography>
          </BoxUploadImage>
        </Box>
      </Stack>
    </FormProvider>
  );
}
