import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  Typography,
  styled,
} from '@mui/material';

import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const JobDetailHeading = styled(Typography)({
  padding: '30px 0 10px 0',
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
  color: '#008DFF',
});

const BoxInfoContainer = styled(Box)({
  width: '100%',
  padding: '10px 15px',
  border: '1px solid #E1E1E1',
  borderRadius: '8px',
});

const TitleInfoStyle = styled(Typography)({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  color: '#515151',
  marginBottom: '10px',
});

const ContentInfoStyle = styled(Typography)({
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '32px',
});

interface CreateProgramDrawerProps {
  openDrawer: boolean;
  toggleDrawer: () => void;
  handleReject: () => void;
}

import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import Image from 'src/components/Image';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function JobDetailDrawer({
  openDrawer,
  toggleDrawer,
  handleReject,
}: CreateProgramDrawerProps) {
  const onSubmit = () => {
    console.log('Create Program');
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
      <DialogContent>
        <Box>
          <Image
            src={'/images/job-detail-popup.svg'}
            alt="job detail image"
            sx={{ width: '80px' }}
          />
          <JobDetailHeading>PHP Developer</JobDetailHeading>
          <JobDetailDes>Bluth Company</JobDetailDes>

          <Box display="flex" justifyContent="space-between" margin="20px 0">
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
          <Box
            sx={{
              borderBottom: '1px solid #E1E1E1',
              paddingBottom: '0.5rem',
              marginBottom: '1rem',
            }}
          >
            <Box display="flex" marginBottom="0.3rem">
              <TextSnippetIcon />
              <ContentInfoStyle sx={{ lineHeight: '25px', paddingLeft: '5px' }}>
                Description
              </ContentInfoStyle>
            </Box>
            <Typography variant="body2" sx={{ color: '#626262' }}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo con
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
              <ContentInfoStyle sx={{ lineHeight: '25px', paddingLeft: '5px' }}>
                Time
              </ContentInfoStyle>
            </Box>
            <Typography variant="body2" sx={{ color: '#626262' }}>
              20/04/2022 - 20/05/2022
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          sx={{ border: '1px solid #E1E1E1', color: '#222222', width: '100%' }}
          onClick={handleReject}
        >
          Reject
        </Button>
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
