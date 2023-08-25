import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, Alert, Typography, styled, Box, Radio, Divider } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { FormProvider, RHFEditor } from 'src/components/hook-form';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React from 'react';
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

const BoxHeadContainer = styled(Box)({
  background: '#F7F7F7',
  padding: '15px',
  borderRadius: '8px',
  marginTop: '0.7rem',
});

const JobDetailHeading = styled(Typography)({
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 600,
  color: '#222222',
});

const JobDetailDes = styled(Typography)({
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '24px',
  color: '#2382CE',
});

const BoxInfoContainer = styled(Box)({
  width: '100%',
  padding: '10px 15px',
  border: '1px solid #E1E1E1',
  borderRadius: '8px',
});

const TitleInfoStyle = styled(Typography)({
  fontSize: '13px',
  fontWeight: 400,
  lineHeight: '20px',
  color: '#515151',
  marginBottom: '10px',
  textAlign: 'center',
});

const ContentInfoStyle = styled(Typography)({
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '32px',
  textAlign: 'center',
});

type FormValuesProps = {
  eventName: string;
  location: string;
  startDate: string;
  endDate: string;
  afterSubmit?: string;
};

export default function DashboardForm({ onSubmit }: any) {
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

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <BoxHeadContainer>
          <JobDetailHeading>PHP Developer</JobDetailHeading>
          <JobDetailDes>Bluth Company</JobDetailDes>

          <Box display="flex" justifyContent="space-arround" margin="20px 0 0">
            <BoxInfoContainer style={{ borderRadius: '8px 0 0 8px' }}>
              <TitleInfoStyle>Number of hires</TitleInfoStyle>
              <ContentInfoStyle>2</ContentInfoStyle>
            </BoxInfoContainer>
            <BoxInfoContainer
              style={{ borderRadius: '0', borderLeft: 'none', borderRight: 'none' }}
            >
              <TitleInfoStyle>Job Type</TitleInfoStyle>
              <ContentInfoStyle>Inter</ContentInfoStyle>
            </BoxInfoContainer>
            <BoxInfoContainer style={{ borderRadius: '0 8px 8px 0' }}>
              <TitleInfoStyle>Location</TitleInfoStyle>
              <ContentInfoStyle>Sydney</ContentInfoStyle>
            </BoxInfoContainer>
          </Box>

          <Box display="flex" marginTop="0.5rem">
            <AccessTimeIcon sx={{ fontSize: '20px' }} />
            <Typography variant="body2" sx={{ paddingLeft: '5px', color: '#626262' }}>
              20/04/2022 - 20/05/2022
            </Typography>
          </Box>
        </BoxHeadContainer>

        <Stack spacing={2}>
          <InputContainerStyle>
            <LabelStyle>Message</LabelStyle>
            <RHFEditor name="editor" />
          </InputContainerStyle>
          <InputContainerStyle>
            <LabelStyle>Select Resume*</LabelStyle>
            <Box sx={{ border: '1px solid #E1E1E1', borderRadius: '8px', padding: '12px' }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center">
                  <Image
                    src={'/images/icon-pdf.svg'}
                    alt="job detail image"
                    sx={{ width: '45px', margin: '10px 10px 10px 0' }}
                  />
                  <Box>
                    <ContentInfoStyle variant="body1">Lucasjason_cv.pdf</ContentInfoStyle>
                    <Typography variant="body2" sx={{ color: '#626262' }}>
                      5mb
                    </Typography>
                  </Box>
                </Box>
                <Radio {...controlProps('a')} />
              </Box>
              <Divider sx={{ margin: '0.5rem 0' }} />
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center">
                  <Image
                    src={'/images/icon-pdf.svg'}
                    alt="job detail image"
                    sx={{ width: '45px', margin: '10px 10px 10px 0' }}
                  />
                  <Box>
                    <ContentInfoStyle variant="body1">Lucasjason_cv.pdf</ContentInfoStyle>
                    <Typography variant="body2" sx={{ color: '#626262' }}>
                      5mb
                    </Typography>
                  </Box>
                </Box>
                <Radio {...controlProps('b')} />
              </Box>
            </Box>
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
