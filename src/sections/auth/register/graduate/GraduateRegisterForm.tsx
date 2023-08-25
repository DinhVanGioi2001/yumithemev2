import * as Yup from 'yup';
import { useCallback, useState } from 'react';
// form
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import {
  Stack,
  IconButton,
  InputAdornment,
  Alert,
  Typography,
  styled,
  Box,
  TextField,
} from '@mui/material';
import { DatePicker, LoadingButton } from '@mui/lab';
// hooks
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
// components
import Iconify from 'src/components/Iconify';
import { FormProvider, RHFTextField, RHFUploadSingleFile } from 'src/components/hook-form';

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
      borderBottom: 'none !important',
      '&> .MuiFilledInput-input': {
        padding: 12,
      },
    },
  },
}));

type FormValuesProps = {
  fullName: string;
  dob: string;
  phoneNumber: string;
  cvUrl: string;
  email: string;
  password: string;
  afterSubmit?: string;
};

export default function GraduateRegisterForm({ onSubmit }: any) {
  const { register } = useAuth();

  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    dob: Yup.string().required('Date of birth is required'),
    cvUrl: Yup.string().required('CV is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
  });

  const defaultValues = {
    fullName: '',
    dob: '',
    cvUrl: '',
    email: '',
    password: '',
    phoneNumber: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(RegisterSchema),
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
          'cvUrl',
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

        <InputContainerStyle>
          <LabelStyle>Full name</LabelStyle>
          <RHFTextField
            name="fullName"
            placeholder="Enter your full name"
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />
        </InputContainerStyle>

        <Stack spacing={2} direction="row">
          <InputContainerStyle>
            <LabelStyle>Date of birth</LabelStyle>
            <Controller
              name="dob"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  inputFormat="dd/MM/yyyy"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      variant="filled"
                      InputProps={{ disableUnderline: true }}
                    />
                  )}
                />
              )}
            />
          </InputContainerStyle>
          <InputContainerStyle>
            <LabelStyle>Phone number</LabelStyle>
            <RHFTextField
              name="phoneNumber"
              placeholder="+6123456789"
              variant="filled"
              InputProps={{ disableUnderline: true }}
            />
          </InputContainerStyle>
        </Stack>

        <InputContainerStyle>
          <LabelStyle>Email</LabelStyle>
          <RHFTextField
            name="email"
            placeholder="Email"
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />
        </InputContainerStyle>

        <InputContainerStyle>
          <LabelStyle>Password</LabelStyle>
          <RHFTextField
            name="password"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
            variant="filled"
          />
        </InputContainerStyle>

        <InputContainerStyle>
          <RHFUploadSingleFile
            name="cvUrl"
            accept="application/pdf"
            maxSize={3145728}
            onDrop={handleDrop}
          />
        </InputContainerStyle>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Register
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
