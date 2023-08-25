import React from 'react';
import { Card, CardContent, Typography, Grid, Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CardContainer = styled(Card)({
  padding: '24px',
});

const StackStyle = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const ImageContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '14px',
  borderRadius: '8px',
});

const Image = styled('img')({
  width: '32px',
  height: '32px',
  borderRadius: '8px',
});

const ContentContainer = styled(Box)({
  '& .MuiTypography-body1': {
    fontSize: '14px',
    fontWeight: 500,
    color: '#7E7E7E',
  },
  '& .MuiTypography-body2': {
    fontSize: '20px',
    fontWeight: 600,
    color: '#000000',
  },
});

export default function MetricsCard({ iconUrl, iconBackground, title, value }: any) {
  return (
    <CardContainer>
      <StackStyle direction="row" spacing={2}>
        <ImageContainer sx={{ backgroundColor: iconBackground }}>
          <Image src={iconUrl} alt="Host" />
        </ImageContainer>

        <ContentContainer>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {value}
          </Typography>
        </ContentContainer>
      </StackStyle>
    </CardContainer>
  );
}
