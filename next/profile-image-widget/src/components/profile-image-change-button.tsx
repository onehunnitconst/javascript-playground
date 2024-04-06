import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import { AddAPhoto } from '@mui/icons-material';
import Image from 'next/image';
import { VisuallyHiddenInput } from './visually-hidden-input';
import { useCallback, useEffect, useState } from 'react';

export default function ProfileImageChangeButton() {
  const [file, setFile] = useState<Blob | null | undefined>(null);
  const [imageUrl, setImageUrl] = useState<string | null | undefined>(null);

  useEffect(() => {
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  }, [file]);

  const handleFileInput = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = ev.target;
      const item = files?.item(0);

      if (files && item) {
        setFile(item);
      }
    },
    []
  );

  return (
    <Box
      sx={{
        width: 150,
        height: 150,
        position: 'relative',
        m: 10,
      }}
    >
      <Image
        alt="sample image"
        src={imageUrl ?? '/sample1.jpeg'}
        width={150}
        height={150}
        style={{
          width: 150,
          height: 150,
          objectFit: 'cover',
          position: 'absolute',
          borderRadius: 75,
          zIndex: 1,
        }}
      />
      <ButtonBase
        component="label"
        sx={{
          position: 'absolute',
          width: 150,
          height: 150,
          borderRadius: 75,
          zIndex: 2,
          bgcolor: '#00000077',
        }}
      >
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          onChange={handleFileInput}
        />
        <Stack spacing={0.5} alignItems="center">
          <AddAPhoto sx={{ width: 50, height: 50, color: '#FFFFFF' }} />
          <Typography variant="body2" color="#FFFFFF">
            Add a photo
          </Typography>
        </Stack>
      </ButtonBase>
    </Box>
  );
}
