
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="solana-gradient w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </span>
              <span className="font-bold text-lg md:text-xl">
                Zee<span className="solana-gradient-text">Prime</span>Aid
              </span>
            </Link>
            <p className="text-muted-foreground">
              Fast emergency fundraising with Solana. Instant help for urgent needs.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="flex flex-col gap-2">
              <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition">How it Works</Link>
              <Link to="/safety" className="text-muted-foreground hover:text-foreground transition">Safety</Link>
              <Link to="/faq" className="text-muted-foreground hover:text-foreground transition">FAQ</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition">About Us</Link>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground transition">Blog</Link>
              <Link to="/careers" className="text-muted-foreground hover:text-foreground transition">Careers</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition">Terms of Service</Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition">Privacy Policy</Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-foreground transition">Cookie Policy</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            Created by Suyash Chandrakar & developed by 2706 Labs
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} ZeePrimeAid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
