'use client'

import { 
  Box, 
  TextField, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Typography,
  Container,
  Paper,
} from '@mui/material'

import DateReserve from '@/components/DateReserve'

export default function Booking() {

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Venue Booking
        </Typography>
        
        <Box component="form" sx={{ marginTop: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            variant="standard"
            name="Name-Lastname"
            label="Name-Lastname"
          />
          
          <TextField
            fullWidth
            margin="normal"
            variant="standard"
            name="Contact-Number"
            label="Contact-Number"
          />
          
          <FormControl fullWidth margin="normal" variant="standard">
            <InputLabel id="venue-label">Venue</InputLabel>
            <Select
              labelId="venue-label"
              id="venue"
              name="venue"
              label="Venue"
            >
              <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
              <MenuItem value="Spark">Spark Space</MenuItem>
              <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
          </FormControl>
          
          <Box sx={{ marginTop: 2, marginBottom: 2 }}>
            <DateReserve/>
          </Box>
          
          <Button type="submit" variant="contained" color="primary" name="Book Venue" sx={{ marginTop: 2 }}>Book Venue</Button>
        </Box>
      </Paper>
    </Container>
  )
}