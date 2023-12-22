import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #d7d6d3",
  boxShadow: 24,
  p: 4,
  "& .MuiButton-root:hover": {
    backgroundColor: "#414194",
  },
};

function ConfirmationBox({ serverErrorBool, serverMessage }) {
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color={serverErrorBool === true ? "#318748" : "#e31717"}
          >
            {serverMessage}
          </Typography>

          <Button
            sx={{
              padding: "0.5rem 0.8rem",
              backgroundColor: "#000080",
              border: "none",
              borderRadius: "1rem",
              color: "#fff",
            }}
          >
            <Link href="/" underline="none" color="#fff">
              Close
            </Link>
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ConfirmationBox;
