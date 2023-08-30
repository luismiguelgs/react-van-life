import { Box } from '@mui/system'
import { Card, CardContent, CardHeader, CardMedia, Chip, Typography, Button, Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function VanDetail() 
{
    const [van, setVan] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    },[id])
    return (
        <div>{
            van ? (
            <Box sx={{display:'flex', margin:5}}>
                <Card>
                    <CardHeader title={van.name} subheader={`$${van.price}/day`} />
                    <CardMedia component="img" height="360" image={van.imageUrl} />
                    <CardContent>
                    <Chip label={van.type} color='success' />
                    <Typography paragraph>
                        {van.description}
                    </Typography>
                    <Button color='primary' size='small'>Rent this van</Button>
                </CardContent>
                </Card>
            </Box>
            ): (<h2>Loading...</h2>)
        }</div>
    )
}
