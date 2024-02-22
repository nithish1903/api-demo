"use client"
import { useHeader } from "@/context/HeaderContext";
import { Box } from "@mui/material";
import { useEffect } from "react";

export default function Dashboard() {
  const { setPageTitle } = useHeader();
  useEffect(() => {
    setPageTitle('Home Page');
  }, []);
  return (
    <Box>
      Home
    </Box>
  );
}