import React from "react";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Image from "next/image";

const Header = () => {
  return (
    <Box className="w-full">
      <Toolbar className="flex gap-2">
        <Box className="flex-1 h-10 cursor-text mr-2">
          <div className="flex bg-white dark:bg-gray-800 h-full w-full rounded-lg items-center px-3 gap-2">
            <div className="h-5 w-5">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400 dark:border-white border-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-black dark:text-white">
              Search any game, hero...
            </span>
          </div>
        </Box>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <Image
            src="/assets/notification.svg"
            alt="notification"
            width={100}
            height={100}
            className="w-full h-auto"
            loading="lazy"
          />
        </IconButton>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <Image
            src="/assets/cart.svg"
            alt="cart"
            width={100}
            height={100}
            className="w-full h-auto"
            loading="lazy"
          />
        </IconButton>
      </Toolbar>
    </Box>
  );
};

export default Header;
