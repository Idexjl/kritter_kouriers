import { useState } from "react";
import Card from "../card/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Modal from "@mui/material/Modal";

import "./UnreliableTransporters.css";
import unreliableTransporters from "./unreliableTransporterList";

const UnreliableTransporters = () => {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Card>
      <h1>Not the cone of shame!! - a list of real bad dogs</h1>
      <Box sx={{ flexGrow: 1 }} className="unreliable-grid">
        <Grid container spacing={2} className="unreliable-grid__header">
          <Grid item md={2}>
            Business
          </Grid>
          <Grid item md={1}>
            Owner
          </Grid>
          <Grid item md={1}>
            A.K.A
          </Grid>
          <Grid item md={2}>
            Rating
          </Grid>
          <Grid item md={3}>
            Offenses
          </Grid>
          <Grid item md={3}>
            Evidence
          </Grid>
        </Grid>
        {unreliableTransporters.map((item, index) => (
          <>
            <Grid container spacing={2} className="unreliable-grid__row">
              <Grid item md={2} key={index}>
                {item.businessName}
              </Grid>
              <Grid item md={1} key={index}>
                {item.owner}
              </Grid>
              <Grid item md={1} key={index}>
                {item.aka}
              </Grid>
              <Grid item md={2} key={index}>
                <Typography component="legend">
                  {item.rating} star{item.rating > 1.0 ? "s" : ""}
                </Typography>
                <Rating
                  name="read-only"
                  value={item.rating}
                  readOnly
                  precision={0.5}
                />
              </Grid>
              <Grid item md={3} key={index}>
                {item.offenses.map((offense, offIdx) => (
                  <p>{offense}</p>
                ))}
              </Grid>
              <Grid item md={3} key={index}>
                <ImageList
                  sx={{ width: 450, height: 200 }}
                  variant="woven"
                  cols={2}
                  gap={5}
                >
                  {item.pics.map((pic, idx) => (
                    <>
                      <ImageListItem key={idx}>
                        <img
                          className="evidence-img"
                          src={`/test_images/unreliable/${item.id}/${pic}?w=401&fit=crop&auto=format`}
                          srcSet={`/test_images/unreliable/${item.id}/${pic}?w=401&fit=crop&auto=format&dpr=2 2x`}
                          alt={item}
                          loading="lazy"
                          onClick={handleOpen}
                        />
                      </ImageListItem>

                      <Modal
                        open={isOpen}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={modalStyle}>
                          <img
                            src={`/test_images/unreliable/${item.id}/${pic}`}
                            alt={item}
                            width="75%"
                            height="75%"
                          />
                        </Box>
                      </Modal>
                    </>
                  ))}
                </ImageList>
              </Grid>
            </Grid>
          </>
        ))}
      </Box>
    </Card>
  );
};

export default UnreliableTransporters;
