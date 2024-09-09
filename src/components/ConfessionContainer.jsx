import React from 'react'
import ConfessionCard from './ConfessionCard.jsx'
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';

export default function ConfessionContainer() {
  return (
    <Grid container spacing={{ xs: 2, sm: 3, xl: 4 }} style={{padding: "1% 5%", width:"100%" ,height:"100%" }}>
        <Grid item xs={12} sm={6} md={4}>
            <ConfessionCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <ConfessionCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <ConfessionCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <ConfessionCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <ConfessionCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <ConfessionCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <ConfessionCard />
        </Grid>
</Grid>
  )
}
