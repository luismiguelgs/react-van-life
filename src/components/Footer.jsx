import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Box
      sx={{
        mt:4,
        backgroundColor: '#333', // Cambia este valor al color oscuro deseado
        color: '#fff', // Cambia este valor al color de texto deseado
        padding: '1rem', // Espaciado interno
        textAlign: 'center', // Alineación de contenido al centro
      }}
    >
      <Typography variant="body1">
        © 2023 #VANLIFE. All right reserved.
      </Typography>
    </Box>
  )
}
