import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { color } from '@mui/system';

function valuetext(value) {
  return `${value}°C`;
}

const SlideBarInput = ({color, label,minValue,maxValue,leftLabel,rightLabel, stepSize, handleChange, value})=> {
  return (<div className='flex-col mb-6'>
    <p className='font-semibold text-sm mb-2'>{label}</p>
    <div className='flex-col'>
        <Box>
        <Slider
            aria-label="Temperature"
            sx={{
                color: `${color}`,
                '& .MuiSlider-thumb': {
                borderRadius: '3px',
                border: '4px solid #f5f5f5',
                height: '30px',
                width: '30px'
                },
                '& .MuiSlider-rail':{
                    height: '8px',
                    'border-radius': "0"
                },
                '& .MuiSlider-track':{
                    height: '8px',
                    'border-radius': "0"
                },
                '& .MuiSlider-markActive':{
                    height: '6px',
                    'background-color': `${color}`,
                    top: "35%"
                },
                '& .MuiSlider-mark':{
                    height: '6px',
                    'background-color': `${color}`,
                    top: "35%"
                },
                '& .MuiSlider-valueLabelOpen':{
                    color: "#000",
                    'background-color': "#FFF",
                    transform: "translateY(143%) scale(1) !important"
                }
            }}
            defaultValue={30}
            getAriaValueText={valuetext}
            onChange={e=>handleChange(e.target.value)}
            valueLabelDisplay="on"
            // shiftStep={30}
            step={stepSize}
            marks
            value={value}
            min={minValue}
            max={maxValue}
        />
        </Box>
        <div className='flex justify-between'>
            <span className='text-sm'>{leftLabel}</span>
            <span className='text-sm'>{rightLabel}</span>
        </div>
    </div>
    
    </div>
  );
}
export default SlideBarInput