import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { MobileStepper } from '@mui/material';

const steps = [
  'Lead Created',
  'Convert Lead to Student',
  'Upload Agreement',
  'Create Application',
  'Proccess Application',
];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <Box sx={{ width: '100%', textAlign: "center" }}>
      <Stepper activeStep={1} variant="dots" sx={{display: {xs: "none", md: "flex"}}}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <MobileStepper steps={5} activeStep={1} variant="dots" sx={{display:{md: "none"},justifyContent: "center"}} position="static" >
      </MobileStepper>
    </Box>
  );
}