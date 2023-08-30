import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { Box,Tabs, Tab } from '@mui/material'

export default function HostLayout() {
    const [value, setValue] = useState('1')
    const handleChange = (event,newValue)=>{
        setValue(newValue)
    }
  return (
    <div>
        <Box sx={{display:'flex', mb:2, mt:3}}>
            <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
                <Tab
                    value='1'
                    label="Dashboard"
                    component={NavLink}
                    to="."
                    
                />
                <Tab
                    value='2'
                    label="Income"
                    component={NavLink}
                    to="income"
                />
                <Tab
                    value='3'
                    label="Reviews"
                    component={NavLink}
                    to="reviews"
                />
                <Tab
                    value='4'
                    label="Vans"
                    component={NavLink}
                    to="vans"
                />
            </Tabs>
        </Box>
        <Outlet />
    </div>
  )
}
