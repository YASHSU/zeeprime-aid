
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 w-full fixed top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="solana-gradient w-8 h-8 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Z</span>
          </span>
          <span className="font-bold text-lg md:text-xl">
            Zee<span className="solana-gradient-text">Prime</span>Aid
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition">Home</Link>
          <Link to="/explore" className="text-foreground/80 hover:text-foreground transition">Explore</Link>
          <Link to="/how-it-works" className="text-foreground/80 hover:text-foreground transition">How it Works</Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/create">
            <Button variant="outline" className="hidden md:flex">
              Start Fundraising
            </Button>
          </Link>
          <Link to="/create">
            <Button className="solana-gradient text-white hover:opacity-90 transition">
              Donate Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
