import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ className, label, color, variant, size, onClick, disabled }) {
  return (
    <Stack spacing={2} direction="row">
      <Button className={`!bg-white !text-black !font-semibold  ${className}`}
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