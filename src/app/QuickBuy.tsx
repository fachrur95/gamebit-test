"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button } from "@mui/material";

const quickBuys = [
  "Genshin Crystal",
  "Honkai: Star Rail",
  "Mobile Legends",
  "Free Fire",
  "Bigo Live",
  "Eggy Party",
  "UC PUBGM - INDONESIA",
  "Metal Slug: Awakening",
  "Free Fire Max",
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const QuickBuy = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const generated = (
    <Box className="grid grid-cols-3 md:grid-cols-6 gap-4 py-4">
      {quickBuys.map((element, index) => (
        <Box
          key={index}
          component={Paper}
          elevation={4}
          className="flex flex-col gap-2 items-center p-2 rounded-2xl"
        >
          <Image
            src={`/assets/${index + 1}.png`}
            width={101}
            height={101}
            alt={element}
            loading="lazy"
            className="w-full h-auto rounded-xl"
          />
          <Typography variant="body2" className="text-center">
            {element}
          </Typography>
        </Box>
      ))}
      <Button
        variant="outlined"
        size="large"
        className="col-span-3 md:col-span-1 md:w-full md:h-full"
      >
        See More
      </Button>
    </Box>
  );
  return (
    <div className="w-full px-4">
      <Typography variant="h6">Quick Buy</Typography>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={activeTab}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="basic tabs example"
          >
            <Tab label="Mobile Game" {...a11yProps(0)} />
            <Tab label="PC Games" {...a11yProps(1)} />
            <Tab label="Game Voucher" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={activeTab} index={0}>
          {generated}
        </CustomTabPanel>
        <CustomTabPanel value={activeTab} index={1}>
          {generated}
        </CustomTabPanel>
        <CustomTabPanel value={activeTab} index={2}>
          {generated}
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default QuickBuy;
