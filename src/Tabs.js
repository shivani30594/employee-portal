import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ContactMail, Person, Save, School, Work  } from '@mui/icons-material';
import { Badge, Button, MenuItem} from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Card from '@mui/material/Card';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const gender = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'female',
    },
  ];
  
  const martialStatus = [
    {
      value: 'single',
      label: 'Single',
    },
    {
      value: 'married',
      label: 'Married',
    },
  ];

  const values = {
    someDate: "2017-05-24"
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} >
        <Tab icon={<Person />} iconPosition="start" label="Personal Details" {...a11yProps(0)} />
        <Tab icon={<ContactMail />} iconPosition="start" label="Address" {...a11yProps(1)} />
        <Tab icon={<Badge />} iconPosition="start"  label="Identification" {...a11yProps(2)} />
        <Tab icon={<School />} iconPosition="start" label="Education Qualification" {...a11yProps(3)} />
        <Tab icon={<Work />} iconPosition="start"  label="Work Experience" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Container disableGutters maxWidth="md" sx={{ pt: 2, pl: {xs:0, md: 5}, pr: {xs:0, md: 5}}}>
          <Card sx={{ minWidth: 275 , my: { xs: 1, md: 0.1 }, p: { xs: 2, md: 3 }, pb: {md: 8}}} >
            <Typography component="p" variant="p" align="left" sx={{marginBottom: "35px"}}>
              Personal details
            </Typography>
            <Grid container rowSpacing={6} columnSpacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="outlined-required"
                  label="First Name"
                  defaultValue="Richy"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="outlined-required"
                  label="Middle Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="outlined-required"
                  label="Last Name"
                  defaultValue="Great"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                    name="date_of_birth"
                    label="Date of Birth"
                    required
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    defaultValue={values.someDate}
                    fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  type={"email"}
                  id="outlined-required"
                  label="Email"
                  defaultValue="richygreat@gmail.com"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="outlined-required"
                  label="Phone"
                  defaultValue="95909590"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Gender"
                  value={"male"}
                  fullWidth
                >
                  {gender.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Martial Status"
                  value={"single"}
                  fullWidth
                >
                  {martialStatus.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Card>
          <Container disableGutters className='btn_wrapper' sx={{display: "flex"}}>
            <Typography component="p" variant="p" sx={{marginRight: "10px", textAlign: {xs: "left", md:"right"}}}>
              Last Saved by Super Admin on 2022-05-21T05:07:45.804
            </Typography>
            <Button variant="contained" startIcon={<Save />}>
              Save
            </Button>
          </Container>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel>
      <TabPanel value={value} index={3}>
      </TabPanel>
      <TabPanel value={value} index={4}>
      </TabPanel>
    </Box>
  );
}
