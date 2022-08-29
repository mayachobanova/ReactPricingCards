import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const StyledButton = styled(Button)(({ theme, color = "primary" }) => ({
  ":hover": {
    color: "#a9a9a9",
    backgroundColor: "#a9a9a9"
  }
}));

export default function BasicGrid() {
  return (
    <Paper elevation={2}
    >
      <Box className="box"
        justifyContent="center"
        alignItems="center"
        sx={{ 
          flexGrow: 1, 
      }}
        component="span"
      >
        <Typography
          sx={{ padding: "1.5%" }}
          mt={3}
          variant="h4"
          align="center"
          style={{ fontWeight: 600 }}
        >
          Pricing
        </Typography>
        <Typography variant="body2" align="center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore.
        </Typography>
        <Typography variant="body2" align="center">
          tenetur unde suscipit, quam beatae rerum inventore.
        </Typography>
        <Grid
          container
          spacing={6}
          justifyContent="center"
          sx={{ padding: "2.5%" }}
        >
          <Grid
            item
            xs={10}
            sm={6}
            md={4}
            lg={3}
            container
            justify="center"
            style={{ textAlign: "center" }}
            sx={{
              height: 400,
              width: 350
            }}
          >
            <Card 
              sx={{
                minWidth: "100%",
                backgroundColor: "#153066",
                borderRadius: "2%",
                '&:hover': {
                  boxShadow: 20,
                  transform: "scale(1.1)"
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  color: "white",
                  flexFlow: "column",
                  textAlign: "center",
                  padding: "13%"
                }}
              >
                <Typography
                  sx={{ fontSize: 28 }}
                  color="white"
                  gutterBottom
                  style={{ fontWeight: 600 }}
                >
                  Start
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography
                  sx={{ fontSize: 22, mb: 1.5 }}
                  style={{ fontWeight: 600 }}
                >
                  Free
                </Typography>
                <Typography variant="body2">
                  One User
                  <br />
                  {"One Project"}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "0%"
                }}
              >
                <StyledButton
                  style={{
                    textTransform: "none",
                    padding: "5px 24px",
                    color: "#000000"
                  }}
                  sx={{ borderRadius: "4%" }}
                  variant="contained"
                  color="inherit"
                  onClick={() => {
                    alert("Are you sure you want to continue?");
                  }}
                >
                  Order Now
                </StyledButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={10}
            sm={6}
            md={4}
            lg={3}
            container
            justify="center"
            style={{ textAlign: "center" }}
            sx={{
              height: 400,
              width: 350
            }}
          >
            <Card
              sx={{
                minWidth: "100%",
                backgroundColor: "#895A88",
                borderRadius: "2%",
                '&:hover': {
                  boxShadow: 20,
                  transform: "scale(1.1)"
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  color: "white",
                  flexFlow: "column",
                  textAlign: "center",
                  padding: "13%"
                }}
              >
                <Typography
                  sx={{ fontSize: 28 }}
                  color="white"
                  gutterBottom
                  style={{ fontWeight: 600 }}
                >
                  Medium
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography
                  sx={{ fontSize: 22, mb: 1.5 }}
                  style={{ fontWeight: 600 }}
                >
                  $49.99
                </Typography>
                <Typography variant="body2">
                  One User
                  <br />
                  {"One Project"}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "0%"
                }}
              >
                <StyledButton
                  style={{
                    textTransform: "none",
                    padding: "5px 24px",
                    color: "#000000"
                  }}
                  sx={{ borderRadius: "4%" }}
                  variant="contained"
                  color="inherit"
                  onClick={() => {
                    alert("Are you sure you want to continue?");
                  }}
                >
                  Order Now
                </StyledButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={10}
            sm={6}
            md={4}
            lg={3}
            container
            justify="center"
            style={{ textAlign: "center" }}
            sx={{
              height: 400,
              width: 350
            }}
          >
            <Card
              sx={{
                minWidth: "100%",
                backgroundColor: "#E0406C",
                borderRadius: "2%",
                '&:hover': {
                  boxShadow: 20,
                  transform: "scale(1.1)"
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  color: "white",
                  flexFlow: "column",
                  textAlign: "center",
                  padding: "13%"
                }}
              >
                <Typography
                  sx={{ fontSize: 28 }}
                  color="white"
                  gutterBottom
                  style={{ fontWeight: 600 }}
                >
                  Expert
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography
                  sx={{ fontSize: 22, mb: 1.5 }}
                  style={{ fontWeight: 600 }}
                >
                  $129.99
                </Typography>
                <Typography variant="body2">
                  One User
                  <br />
                  {"One Project"}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "0%"
                }}
              >
                <StyledButton
                  style={{
                    textTransform: "none",
                    padding: "5px 24px",
                    color: "#000000"
                  }}
                  sx={{ borderRadius: "0%" }}
                  variant="contained"
                  color="inherit"
                  onClick={() => {
                    alert("Are you sure you want to continue?");
                  }}
                >
                  Order Now
                </StyledButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
