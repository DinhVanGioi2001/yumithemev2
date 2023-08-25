import * as Yup from 'yup';
import { useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert, Typography, styled, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
// components
import Iconify from 'src/components/Iconify';
import { FormProvider, RHFSelect, RHFTextField } from 'src/components/hook-form';
import countries from 'src/utils/countries.json';

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

type FormValuesProps = {
  businessName: string;
  contactName: string;
  phoneNumber: string;
  location: string;
  experienceDuration: string;
  email: string;
  password: string;
  afterSubmit?: string;
};

export default function BusinessRegisterForm({ onSubmit }: any) {
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    businessName: Yup.string().required('Business name is required'),
    contactName: Yup.string().required('Contact name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    location: Yup.string().required('Location is required'),
    experienceDuration: Yup.string().required('Years of experience is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    businessName: '',
    contactName: '',
    phoneNumber: '',
    location: '',
    experienceDuration: '',
    email: '',
    password: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <InputContainerStyle>
          <LabelStyle>Business name</LabelStyle>
          <RHFTextField
            name="businessName"
            placeholder="Enter the business name"
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />
        </InputContainerStyle>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <InputContainerStyle>
            <LabelStyle>Name of key contact</LabelStyle>
            <RHFTextField
              name="contactName"
              placeholder="Enter contact's name"
              variant="filled"
              InputProps={{ disableUnderline: true }}
            />
          </InputContainerStyle>
          <InputContainerStyle>
            <LabelStyle>Phone number</LabelStyle>
            <RHFTextField
              name="phoneNumber"
              placeholder="Enter the phone number"
              variant="filled"
              InputProps={{ disableUnderline: true }}
            />
          </InputContainerStyle>
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <InputContainerStyle>
            <LabelStyle>Location</LabelStyle>
            <RHFSelect
              name="location"
              placeholder="Location"
              variant="filled"
              InputProps={{ disableUnderline: true }}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </RHFSelect>
          </InputContainerStyle>
          <InputContainerStyle>
            <LabelStyle>Experience</LabelStyle>
            <RHFTextField
              name="experienceDuration"
              placeholder="E.g: 2"
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
