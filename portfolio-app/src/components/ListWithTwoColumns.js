import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#2c3754',
    fontFamily: 'monospace',
    fontSize: '24px',
    padding: theme.spacing(2),
    color: '#dddfea',
    margin: "10px",
  }));

export default function ListWithTwoColumns({items}) {
    return (
        <Box sx={{ flexGrow: 1, maxWidth: "70%", margin: "auto" }}>
        <Grid container
            spacing={2} 
            columns={16}
        >
            {items.map((item) => (
                  <Grid textAlign='start'  xs={8}>
                        <Item><VerifiedIcon style={{marginRight: "15px"}}/>{item}</Item>
                  </Grid>
            ))}
        </Grid>
      </Box>
    )
}