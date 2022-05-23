import { Store, SupervisorAccount } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

function HeadSection() {
  return (
    <>
        <Container sx={{ display: "flex", flexDirection: {xs: "column", md: "row"}, mb:2}} >
            <Typography component={"h6"} variant="h6" sx={{ml: 2, mb:2}}>
                Lead: Richy Great
            </Typography>
            <Button variant="contained" sx={{ml: 2, mb:2}} >
                View Student
            </Button>
            <Button variant="contained" sx={{ml: 2, borderRadius: 28, mb:2}} color="success" endIcon={<SupervisorAccount />}>
                Counselor : Super Admin
            </Button>
            <Button variant="contained" endIcon={<Store />} sx={ { ml: 2, mb:2, borderRadius: 28, backgroundColor: "#e6e7e8", color: "black" } }>
                Branch : Vadodara
            </Button>
        </Container>
    </>
  )
}

export default HeadSection