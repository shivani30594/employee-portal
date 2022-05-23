import { Box, Container } from '@mui/system'
import HeadSection from '../src/HeadSection'
import MenuAppBar from '../src/Menu'
import Stepper from '../src/Stepper'
import Tabs from '../src/Tabs'

export default function Home() {
  return (
    <>
      <MenuAppBar />
      <Box sx={{ width: '100%', backgroundColor: '#fafbfc', pt: { xs: 1, md: 5} }}>
        <Container disableGutters maxWidth="lg" component="main">
          <HeadSection />
          <Stepper />
          <Container disableGutters maxWidth="md" sx={{ pt: 2}}>
            <Tabs />
          </Container>
        </Container>
      </Box>
    </>
  )
}
