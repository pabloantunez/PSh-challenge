import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ label, color, variant, size, onClick, disabled }) {
  return (
    <Stack spacing={2} direction="row">
      <Button 
        variant={variant || "contained"}
        color={color || "default"}
        size={size || "medium"}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </Button>
    </Stack>
  );
}