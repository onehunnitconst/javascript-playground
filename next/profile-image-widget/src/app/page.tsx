'use client';

import ProfileImageChangeButton from '@/components/profile-image-change-button';
import { Box } from '@mui/material';

export default function HomeView() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        bgcolor: 'background.default'
      }}
    >
      <ProfileImageChangeButton />
    </Box>
  );
}
