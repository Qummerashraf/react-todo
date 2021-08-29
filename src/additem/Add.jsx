import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import "./addstyle.css";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

function Add(props) {
  const { input, handleWrite, handleSubmit, handlemode, bg, toggleSubmit } =
    props;
  return (
    <>
      <Box>
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              {" "}
              <div className="heading">
                {" "}
                <h2>Todo List Item</h2>{" "}
              </div>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="add">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="write todo"
                    value={input}
                    onChange={handleWrite}
                  />
                  {toggleSubmit ? (
                    <button type="submit" onClick={handleSubmit}>
                      Add
                    </button>
                  ) : (
                    <button type="submit" onClick={handleSubmit}>
                      Edit
                    </button>
                  )}
                </form>
              </div>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="darkmode">
                  {bg === "aliceblue" ? (
                    <Tooltip title="Light Mode">
                      <IconButton aria-label="delete">
                        <Brightness5Icon
                          onClick={handlemode}
                          style={{
                            cursor: "pointer",
                            boxShadow: "0px 0px 15px 10px grey",
                            borderRadius: "50%",
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Dark Mode">
                      <IconButton aria-label="dark">
                        <Brightness7Icon
                          onClick={handlemode}
                          style={{
                            cursor: "pointer",
                            boxShadow: "0px 0px 15px 10px black",
                            borderRadius: "50%",
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  )}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Add;
