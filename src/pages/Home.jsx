import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Box } from '@mui/material'

export default function Home() {
  return (
    <div className="home-container">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Button variant='containded' sx={{backgroundColor:'#FF8C38', width:'80%', '&:hover':{backgroundColor:'#E59866'}}} component={Link} to="/vans">
                    Find your van
                </Button>
            </Box>
    </div>
  )
}
