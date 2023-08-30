import React, { useEffect, useState } from 'react'
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Link as MuiLink } from '@mui/material'
import { Link } from 'react-router-dom'

export default function HostVans() {
  
  const [vans, setvans] = useState([])  
  
  useEffect(()=>{
    fetch('/api/host/vans')
      .then(res=> res.json())
      .then(data => setvans(data.vans))
  },[])

  const hostVansEls = vans.map(van=>(
          <MuiLink underline='none' component={Link} to={`/host/vans/${van.id}`} key={van.id} >
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt={van.id} src={van.imageUrl} sx={{ width: 64, height: 64, mr:4 }} variant="rounded"/>
              </ListItemAvatar>
              <ListItemText 
                primary={van.name}
                secondary={`$${van.price}/day`}
              />
          </ListItem>
          <Divider variant="inset" component="li" />
          </MuiLink> 
          
  ))

  return (
    <>
      <h1>Your listed vans</h1>
      <Box sx={{width: '100%'}}>
        <List sx={{width: '100%', bgcolor:'background.paper'}}>
          {vans.length ?  hostVansEls : (<h2>Loading...</h2>)}
        </List>
      </Box>
    </>
  )
}
