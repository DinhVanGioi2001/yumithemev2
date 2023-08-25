import { useState, SyntheticEvent } from 'react';
import { Box, Card, Stack, Tab, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { GraduateTable, VolunteerTable, BusinessTable } from './tables';

const BoxStyle = styled(Box)({
  padding: '21px 24px 20px',
  position: 'relative',
});

const TabsBoxStyle = styled(Box)({
  margin: '21px 24px 20px',
  position: 'relative',
  backgroundColor: '#F7F7F7',
  borderRadius: '8px',
  '& .MuiTabs-root': {
    padding: '4px',
    '& .MuiTabs-indicator': {
      display: 'none',
    },
    '& .MuiTab-root': {
      marginRight: '12px',
      borderRadius: '8px',
      padding: '8px 16px',
      '&:last-child': {
        marginRight: '0px',
      },
    },
    '& .Mui-selected': {
      backgroundColor: '#fff',
    },
  },
});

const StackStyle = styled(Stack)({
  alignItems: 'center',
  paddingBottom: '4px',
});

const VerticalLine = styled('div')({
  width: '4px',
  backgroundColor: '#F7CD81',
  height: '24px',
});

export default function OverviewCard() {
  const [value, setValue] = useState('1');

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Card>
      <TabContext value={value}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <BoxStyle>
            <StackStyle direction="row" spacing={1}>
              <VerticalLine />
              <Typography variant="h4">Overview</Typography>
            </StackStyle>

            <Typography variant="body1">This is fake content</Typography>
          </BoxStyle>
          <TabsBoxStyle>
            <TabList onChange={handleChange}>
              <Tab label="Graduates" value="1" />
              <Tab label="Volunteers" value="2" />
              <Tab label="Businesses" value="3" />
            </TabList>
          </TabsBoxStyle>
        </Stack>
        <TabPanel value="1">
          <GraduateTable />
        </TabPanel>
        <TabPanel value="2">
          <VolunteerTable />
        </TabPanel>
        <TabPanel value="3">
          <BusinessTable />
        </TabPanel>
      </TabContext>
    </Card>
  );
}
