import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import "./showstyle.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Show(props) {
  const { list, delItem, updateItem, bg, color } = props;
  return (
    <>
      <Box>
        <Container>
          <Grid container alignItems="center">
            {list?.length
              ? list.map((item) => (
                  <Grid
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    key={item.id}
                  >
                    {" "}
                    <div className="item" style={{ backgroundColor: bg }}>
                      {" "}
                      <h2 style={{ color: color }}>{item.name}</h2>
                      <div className="icon">
                        <EditIcon onClick={() => updateItem(item.id)} />
                        <DeleteIcon onClick={() => delItem(item.id)} />
                      </div>
                    </div>
                  </Grid>
                ))
              : ""}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Show;
