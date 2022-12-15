import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from 'react';

interface TitleProps {
  title: string;
}
export default function Title({ title }: TitleProps) {
  return (
    <div>
      <Typography variant="h4">
        {title === 'Cargando' ? <Skeleton sx={{ minWidth: 250 }} /> : title}
      </Typography>
    </div>
  );
}
