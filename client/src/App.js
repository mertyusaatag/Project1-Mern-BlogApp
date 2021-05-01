import React, { useState } from "react";
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PenIcon from "@material-ui/icons/Create"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import PostsList from "./component/PostsList"
import AddPostForm from "./component/AddPostForm"



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3),
  },
}));
const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.container}
              color="inherit"
            />

            <Typography variant="h6" color="secondary" className={classes.title}>
              <a href="http://localhost:3000/posts">MyBlogApp</a>
            </Typography>
            <Button onClick={handleOpen} color="primary" variant="outlined" startIcon={<PenIcon />}
            >
              Yeni Yazı
            </Button>

            

          </Toolbar>
        </AppBar>

        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Router>
              <Switch>
                <Route exact path="/posts" component={PostsList} ></Route>
              </Switch>
              <Redirect from="/" to="/posts"></Redirect>
            </Router>
          </Grid>

        </Grid>

        <AddPostForm open={open} handleClose={handleClose} />
      </Container>
    </>
  );
};

export default App;
