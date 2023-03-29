import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../components/HomeComponents/listItems';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle'


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function Home({ data, setData, setUser }) {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <SwapHorizontalCircleIcon />
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                            padding={'5px'}
                        >
                            SwapApart!
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        {/* <Grid container spacing={3}>

                            <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    <Chart />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    <Deposits />
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Orders />
                                </Paper>
                            </Grid>
                        </Grid> */}
                        <Grid container>
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Home



// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import StarIcon from '@mui/icons-material/StarBorder';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import GlobalStyles from '@mui/material/GlobalStyles';
// import Container from '@mui/material/Container';
// import { useNavigate } from 'react-router-dom';
// import Dashboard from '../components/HomeComponents/Dashboard';


// const tiers = [
//     {
//         title: 'Free',
//         price: '0',
//         description: [
//             '10 users included',
//             '2 GB of storage',
//             'Help center access',
//             'Email support',
//         ],
//         buttonText: 'Sign up for free',
//         buttonVariant: 'outlined',
//     },

//     {
//         title: 'Pro',
//         subheader: 'Most popular',
//         price: '15',
//         description: [
//             '20 users included',
//             '10 GB of storage',
//             'Help center access',
//             'Priority email support',
//         ],
//         buttonText: 'Get started',
//         buttonVariant: 'contained',
//     },
//     {
//         title: 'Enterprise',
//         price: '30',
//         description: [
//             '50 users included',
//             '30 GB of storage',
//             'Help center access',
//             'Phone & email support',
//         ],
//         buttonText: 'Contact us',
//         buttonVariant: 'outlined',
//     },
// ];

// const footers = [
//     {
//         title: 'Company',
//         description: ['Team', 'History', 'Contact us', 'Locations'],
//     },
//     {
//         title: 'Features',
//         description: [
//             'Cool stuff',
//             'Random feature',
//             'Team feature',
//             'Developer stuff',
//             'Another one',
//         ],
//     },
//     {
//         title: 'Resources',
//         description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
//     },
//     {
//         title: 'Legal',
//         description: ['Privacy policy', 'Terms of use'],
//     },
// ];

// function Home({ data, setData, setUser }) {
//     const navigate = useNavigate();

//     const handleSignOut = (event) => {
//         setUser(null);
//         navigate("/");
//     };

//     return (
//         <Dashboard></Dashboard>
//         // <React.Fragment>
//         //     <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
//         //     <CssBaseline />
//         //     <AppBar
//         //         position="static"
//         //         color="default"
//         //         elevation={0}
//         //         sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
//         //     >
//         //         <Toolbar sx={{ flexWrap: 'wrap' }}>
//         //             <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
//         //                 SwapApart!
//         //             </Typography>
//         //             <Button onClick={handleSignOut} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
//         //                 Sign Out
//         //             </Button>
//         //         </Toolbar>
//         //     </AppBar>
//         //     {/* Hero unit */}
//         //     <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }} align="center">
//         //         <Typography
//         //             component="h1"
//         //             variant="h3"
//         //             align="center"
//         //             color="text.primary"
//         //             gutterBottom
//         //         >
//         //             Plan New Vacation!
//         //         </Typography>
//         //         <Typography variant="h5" align="center" color="text.secondary" component="p">
//         //             Click the button below to start planning your next vacation!
//         //         </Typography>
//         //         <Button href="#" variant="contained" size='large' fullWidth sx={{ my: 1, mx: 1.5 }}>
//         //             Plan
//         //         </Button>
//         //     </Container>
//         //     {/* End hero unit */}
//         //     <Container maxWidth="md" component="main">
//         //         <Grid container spacing={5} alignItems="flex-end">
//         //             {tiers.map((tier) => (
//         //                 // Enterprise card is full width at sm breakpoint
//         //                 <Grid
//         //                     item
//         //                     key={tier.title}
//         //                     xs={12}
//         //                     sm={tier.title === 'Enterprise' ? 12 : 6}
//         //                     md={4}
//         //                 >
//         //                     <Card>
//         //                         <CardHeader
//         //                             title={tier.title}
//         //                             subheader={tier.subheader}
//         //                             titleTypographyProps={{ align: 'center' }}
//         //                             action={tier.title === 'Pro' ? <StarIcon /> : null}
//         //                             subheaderTypographyProps={{
//         //                                 align: 'center',
//         //                             }}
//         //                             sx={{
//         //                                 backgroundColor: (theme) =>
//         //                                     theme.palette.mode === 'light'
//         //                                         ? theme.palette.grey[200]
//         //                                         : theme.palette.grey[700],
//         //                             }}
//         //                         />
//         //                         <CardContent>
//         //                             <Box
//         //                                 sx={{
//         //                                     display: 'flex',
//         //                                     justifyContent: 'center',
//         //                                     alignItems: 'baseline',
//         //                                     mb: 2,
//         //                                 }}
//         //                             >
//         //                                 <Typography component="h2" variant="h3" color="text.primary">
//         //                                     ${tier.price}
//         //                                 </Typography>
//         //                                 <Typography variant="h6" color="text.secondary">
//         //                                     /mo
//         //                                 </Typography>
//         //                             </Box>
//         //                             <ul>
//         //                                 {tier.description.map((line) => (
//         //                                     <Typography
//         //                                         component="li"
//         //                                         variant="subtitle1"
//         //                                         align="center"
//         //                                         key={line}
//         //                                     >
//         //                                         {line}
//         //                                     </Typography>
//         //                                 ))}
//         //                             </ul>
//         //                         </CardContent>
//         //                         <CardActions>
//         //                             <Button fullWidth variant={tier.buttonVariant}>
//         //                                 {tier.buttonText}
//         //                             </Button>
//         //                         </CardActions>
//         //                     </Card>
//         //                 </Grid>
//         //             ))}
//         //         </Grid>
//         //     </Container>
//         //     {/* Footer */}
//         //     <Container
//         //         maxWidth="md"
//         //         component="footer"
//         //         sx={{
//         //             borderTop: (theme) => `1px solid ${theme.palette.divider}`,
//         //             mt: 8,
//         //             py: [3, 6],
//         //         }}
//         //     >
//         //     </Container>
//         //     {/* End footer */}
//         // </React.Fragment>
//     );
// }

// export default Home