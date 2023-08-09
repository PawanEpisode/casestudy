import React from 'react';
import { Box, Stack, Typography} from '@mui/material';
import HomeBanner from '../assets/images/HomeBanner.png';

const Footer = () => {
  return (
    <Box mt='40px' bgcolor='#fff3f4'>
    <Stack mb={'20px'} gap='40px' alignItems='center' px='40px' pt='24px'>
      <img src={HomeBanner} alt='exercise-logo' style={{width: '200px', height: '200px', borderRadius: '50%'}}/>
      <Typography variant='h5' mb='20px'>
        Made With ❤️ By <span>Pawan Kumar</span>
      </Typography>
    </Stack>
    </Box>
  )
}

export default Footer;