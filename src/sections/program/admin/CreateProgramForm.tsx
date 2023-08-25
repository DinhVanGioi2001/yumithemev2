import * as Yup from 'yup';
import { useCallback, useRef, useState } from 'react';
// form
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import {
  Stack,
  Alert,
  Typography,
  styled,
  Box,
  TextField,
  Divider,
  TextareaAutosize,
} from '@mui/material';
import { DatePicker, LoadingButton } from '@mui/lab';
import { FormProvider, RHFUploadSingleFile } from 'src/components/hook-form';
import Image from 'src/components/Image';

// ----------------------------------------------------------------------

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

const InputContainerStyle = styled(Box)(() => ({
  textAlign: 'left',
  '&> .MuiFormControl-root': {
    '&> .MuiInputBase-root': {
      borderRadius: '8px',
      borderBottom: 'none',
      '&> .MuiFilledInput-input': {
        padding: 12,
      },
    },
  },
}));

const BoxDividerContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '15px',
  '&> .MuiDivider-root': {
    position: 'absolute',
    top: '50%',
    width: '100%',
    height: '2px',
    background: '#CFCFCF',
  },
}));

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.5,
  padding: '12px',
  borderRadius: '8px',
  border: '2px solid #B1B1B1',
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
  imageCover: string;
  describe: string;
  duration: string;
  numberOfHires: string;
  uploadDocument: string;
  afterSubmit?: string;
};

export default function CreateProgramForm({ onSubmit }: any) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const documentInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setSelectedImage(selectedFile);
    }
  };

  const handleButtonClickImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

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
    imageCover: Yup.string().required('Image is required'),
    describe: Yup.string().required('Describe is required'),
    duration: Yup.string().required('Duration is required'),
    numberOfHires: Yup.string().required('Number of hires is required'),
    uploadDocument: Yup.string().required('Upload Document is required'),
  });

  const defaultValues = {
    imageCover: '',
    describe: '',
    duration: '',
    numberOfHires: '',
    uploadDocument: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(ProgramSchema),
    defaultValues,
  });

  const {
    setValue,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'uploadDocument',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }

      console.log(acceptedFiles);
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <Box>
          <LabelStyle>Image Cover</LabelStyle>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
            name="imageCover"
          />
          {!selectedImage && (
            <BoxUploadImage onClick={handleButtonClickImage}>
              <Typography variant="body1">
                <span style={{ textDecoration: 'underline', fontWeight: '700' }}>
                  Click to upload image
                </span>{' '}
                or drag and drop
              </Typography>
              <Typography variant="body2" sx={{ color: '#7E7E7E' }}>
                Support PNG,JPG files
              </Typography>
            </BoxUploadImage>
          )}
          {selectedImage && (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img
                style={{ width: '50%', height: '150px' }}
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
              />
            </Box>
          )}
        </Box>

        <Box>
          <LabelStyle>Describe</LabelStyle>
          <StyledTextarea
            name="describe"
            minRows={5}
            maxRows={7}
            placeholder="Write your feedback"
          />
        </Box>

        <InputContainerStyle>
          <LabelStyle>Duration</LabelStyle>
          <Stack spacing={1} direction="row">
            <InputContainerStyle>
              <Controller
                name="duration"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    inputFormat="dd/MM/yyyy"
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        fullWidth
                        variant="filled"
                        InputProps={{ disableUnderline: true }}
                        placeholder="dd/mm/yyyy"
                      />
                    )}
                  />
                )}
              />
            </InputContainerStyle>
            <BoxDividerContainer>
              <Divider />
            </BoxDividerContainer>
            <InputContainerStyle>
              <Controller
                name="duration"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    inputFormat="dd/MM/yyyy"
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        fullWidth
                        variant="filled"
                        InputProps={{ disableUnderline: true }}
                        placeholder="dd/mm/yyyy"
                      />
                    )}
                  />
                )}
              />
            </InputContainerStyle>
          </Stack>
        </InputContainerStyle>

        <InputContainerStyle>
          <LabelStyle>Number of hires</LabelStyle>
          <Controller
            name="numberOfHires"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                inputFormat="dd/MM/yyyy"
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="filled"
                    InputProps={{ disableUnderline: true }}
                    placeholder="dd/mm/yyyy"
                  />
                )}
              />
            )}
          />
        </InputContainerStyle>

        <Box>
          <LabelStyle>Upload Document ( Up to 8 )</LabelStyle>
          <InputContainerStyle>
            <RHFUploadSingleFile
              name="uploadDocument"
              accept="application/pdf"
              maxSize={3145728}
              onDrop={handleDrop}
            />
          </InputContainerStyle>
        </Box>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Create Program
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
