import * as Yup from 'yup';
// form
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, Alert, Typography, styled, Box, TextField } from '@mui/material';
import { DatePicker, LoadingButton } from '@mui/lab';
// components
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
  eventName: string;
  location: string;
  startDate: string;
  endDate: string;
  afterSubmit?: string;
};

export default function CreateEventForm({ onSubmit }: any) {
  const EventSchema = Yup.object().shape({
    eventName: Yup.string().required('Event name is required'),
    location: Yup.string().required('Location is required'),
    startDate: Yup.string().required('Start date is required'),
    endDate: Yup.string().required('End date is required'),
  });

  const defaultValues = {
    eventName: '',
    location: '',
    startDate: '',
    endDate: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(EventSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <InputContainerStyle>
          <LabelStyle>Event name</LabelStyle>
          <RHFTextField
            name="eventName"
            placeholder="Enter the event name"
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />
        </InputContainerStyle>

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

        <Stack spacing={2} direction="row">
          <InputContainerStyle>
            <LabelStyle>Start date</LabelStyle>
            <Controller
              name="startDate"
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
          <InputContainerStyle>
            <LabelStyle>End date</LabelStyle>
            <Controller
              name="endDate"
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

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Create
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
