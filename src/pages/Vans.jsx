import { Card, CardContent, CardMedia, Chip, Typography, Link as MuiLink } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';

export default function Vans() {
    const [vans, setVans] = useState([])
    useEffect(()=>{
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    },[])

    const vanElements = vans.map(van => (
        <Box key={van.id} >
            <MuiLink underline='none' component={RouterLink} to={`/vans/${van.id}`}>
            <Card sx={{minWidth:240, margin:1}} >
                <CardMedia 
                    sx={{ height: 250 }}
                    image={van.imageUrl} title={van.id} />
                <CardContent>
                    <Typography variant='h5'>{van.name}</Typography>
                    <Typography variant='body2'>
                        ${van.price}<span>/day</span>
                    </Typography>
                    <Chip label={van.type} color='success' />
                </CardContent>
            </Card>
            </MuiLink>
        </Box>
    ))
  return (
    <>
        <h1>Explore our van options</h1>
        <Box sx={{display:'flex',flexWrap:'wrap'}}>
            {vans && vanElements}
        </Box>
    </>
    
  )
}
