"use client";

import React from "react";
import LogoBlack from "@/public/logo-black.svg";
import LogoWhite from "@/public/logo-white.svg";
import Image from "next/image";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <nav className="border-b-border border-b-[1px]">
      <Container>
        <div className="flex items-center h-full justify-between">
          <Image
            src={theme === "dark" ? LogoWhite : LogoBlack}
            alt="learnify logo"
            className="h-24 w-40 -mb-2"
          />
          <Button variant="default" size="lg">
            Get started
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
