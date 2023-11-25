"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const Info = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Box className="w-full text-white">
      <Collapse in={open}>
        <Box
          sx={{ bgcolor: "primary.main" }}
          className="flex flex-row items-center justify-between px-6 py-2"
        >
          <Box>
            <Typography variant="h6">
              Get instant cashback on your first purchase!
            </Typography>
            <Typography variant="subtitle1">
              The best way to top-up games!
            </Typography>
          </Box>
          <IconButton
            aria-label="close"
            color="inherit"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Info;
