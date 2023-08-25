import React from 'react';
import { TransitionProps } from '@mui/material/transitions';

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slide,
  TextareaAutosize,
  Typography,
  styled,
} from '@mui/material';

import countries from 'src/utils/countries.json';

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

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.5,
  padding: '12px',
  borderRadius: '8px',
  border: '2px solid #B1B1B1',
}));

const ContentInfoStyle = styled(Typography)({
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '32px',
  marginBottom: '0.3rem',
});

interface CreateProgramDrawerProps {
  openDrawer: boolean;
  toggleDrawer: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function JobFeedbackDrawer({ openDrawer, toggleDrawer }: CreateProgramDrawerProps) {
  const onSubmit = () => {
    console.log('Create Program');
  };

  const [selectValue, setSelectValue] = React.useState('Viet Nam');

  const handleChangeValue = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value);
  };

  return (
    <Dialog
      open={openDrawer}
      TransitionComponent={Transition}
      keepMounted
      onClose={toggleDrawer}
      aria-describedby="alert-dialog-slide-description"
      sx={{ '& .MuiDialog-paper': { width: '50%' } }}
    >
      <DialogTitle
        sx={{
          borderBottom: '1px solid #E1E1E1',
          paddingBottom: '1rem',
          marginBottom: '1rem',
        }}
      >
        Job feedback
      </DialogTitle>
      <DialogContent sx={{ borderBottom: '1px solid #E1E1E1' }}>
        <Box>
          <InputContainerStyle sx={{ marginBottom: '1rem' }}>
            <ContentInfoStyle>Choose the reason you reject</ContentInfoStyle>
            <FormControl variant="filled" sx={{ width: '100%' }}>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={selectValue}
                onChange={handleChangeValue}
              >
                {countries.map((country) => (
                  <MenuItem key={country.code} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </InputContainerStyle>

          <Box>
            <ContentInfoStyle>Your feedback</ContentInfoStyle>
            <StyledTextarea
              name="describe"
              minRows={7}
              maxRows={7}
              placeholder="Write your feedback"
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ background: '#F7CD81', color: '#222222', width: '100%' }}
          onClick={toggleDrawer}
        >
          Approve
        </Button>
      </DialogActions>
    </Dialog>
  );
}
