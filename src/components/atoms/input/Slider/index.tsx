// MUIS
import SliderMUI, { SliderProps } from '@mui/material/Slider'
import { styled } from '@mui/material/styles'

const Slider = styled(SliderMUI)<SliderProps>({
  '& .MuiSlider-markLabel': {
    fontSize: 12,
  },
  '& .MuiSlider-valueLabelLabel': {
    fontSize: 12,
  }
})

export default Slider