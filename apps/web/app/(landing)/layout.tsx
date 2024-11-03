import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { ModeToggle } from "../components/ModeToggle";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <div className="absolute bottom-5 right-5">
        <ModeToggle />
      </div>
    </>
  );
};

export default LandingLayout;
