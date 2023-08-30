import { Box, Chip, Paper, Typography, Link as MuiLink } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams, Link } from 'react-router-dom'

export default function HostVansDetail() 
{
    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState(null)
    useEffect(()=>{
        fetch(`/api/host/vans/${id}`)
            .then(res=> res.json())
            .then(data => setCurrentVan(data.vans[0]))
    },[id])

    const activeStyles = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    }
    
    if(!currentVan){
        return <h1>Loading...</h1>
    }
    return (
        <>
            <Link to=".." relative='path'>&larr;<span>Back to all vans</span></Link>
            <Paper elevation={3} sx={{padding:2,  mt:2}}>
                <Box sx={{display:'flex'}}>
                    <img src={currentVan.imageUrl} width={150} alt={currentVan.name}/>
                    <Box sx={{ml:3}}>
                    <Typography variant="h4" component="h2">
                        {currentVan.name}
                    </Typography>
                    <p>{`$${currentVan.price}/day`}</p>
                    <Chip label={currentVan.type} color="primary" />
                    </Box>
                </Box>
                <Box sx={{width:'100%', display:'flex',mt:2, mb:2}}>
                    <MuiLink to='.' end component={NavLink} style={({ isActive })=> isActive ? activeStyles : null} color="inherit" underline="hover" sx={{mr:3}}>
                        Details
                    </MuiLink>
                    <MuiLink to='pricing' component={NavLink} style={({ isActive })=> isActive ? activeStyles : null} color="inherit" underline="hover" sx={{mr:3}}>
                        Pricing
                    </MuiLink>
                    <MuiLink to='photos' component={NavLink} style={({ isActive })=> isActive ? activeStyles : null} color="inherit" underline="hover" sx={{mr:3}}>
                        Photos
                    </MuiLink>
                </Box>
                <Box sx={{width:'100%'}}>
                    <Outlet context={{ currentVan }}/>
                </Box>
            </Paper>
        </>
        
  )
}
