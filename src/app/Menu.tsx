import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Typography from "@mui/material/Typography";

const menus = [
  {
    label: "Account",
    icon: "/assets/account.svg",
  },
  {
    label: "Top Up",
    icon: "/assets/topup.svg",
  },
  {
    label: "Game Coins",
    icon: "/assets/gamecoins.svg",
  },
  {
    label: "Mobile Balance",
    icon: "/assets/mobilebalance.svg",
  },
  {
    label: "Item",
    icon: "/assets/item.svg",
  },
];

const Menu = () => {
  return (
    <div className="w-full px-4">
      <Box
        component={Paper}
        elevation={4}
        className="p-4 rounded-xl overflow-y-auto flex flex-row gap-4 items-center justify-center"
      >
        {menus.map((menu, index) => (
          <Box
            key={index}
            className="flex flex-col gap-2 items-center justify-between"
          >
            <Image
              src={menu.icon}
              width={50}
              height={50}
              alt={menu.label}
              loading="lazy"
            />
            <Typography variant="body2" className="text-center">
              {menu.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Menu;
