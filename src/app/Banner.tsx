import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Banner = () => {
  return (
    <div className="w-full px-4">
      <Image
        src="/assets/banner.png"
        alt="banner"
        loading="lazy"
        width={358}
        height={128}
        className="w-full h-auto"
      />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-1">
          <Box
            className="rounded-full w-2 h-2"
            sx={{ bgcolor: "primary.main" }}
          ></Box>
          <Box className="rounded-full w-2 h-2 bg-gray-500"></Box>
          <Box className="rounded-full w-2 h-2 bg-gray-500"></Box>
          <Box className="rounded-full w-2 h-2 bg-gray-500"></Box>
          <Box className="rounded-full w-2 h-2 bg-gray-500"></Box>
          <Box className="rounded-full w-2 h-2 bg-gray-500"></Box>
        </div>
        <Typography variant="subtitle2" color="primary">
          See all promotions
        </Typography>
      </div>
    </div>
  );
};

export default Banner;
