import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 opacity-0 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Emergency Help, <span className="solana-gradient-text">Delivered Instantly</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              ZeePrimeAid leverages Solana blockchain to get emergency funds to people in need without delays, high fees, or complex approvals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/create">
                <Button className="solana-gradient text-white w-full sm:w-auto hover:opacity-90 transition">
                  Create Campaign
                </Button>
              </Link>
              <Link to="/explore">
                <Button variant="outline" className="w-full sm:w-auto">
                  Explore Campaigns
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center mt-8 gap-6">
              <div>
                <p className="font-bold text-2xl">$2M+</p>
                <p className="text-muted-foreground text-sm">Funds Raised</p>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div>
                <p className="font-bold text-2xl">500+</p>
                <p className="text-muted-foreground text-sm">Campaigns Funded</p>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div>
                <p className="font-bold text-2xl">&lt;5m</p>
                <p className="text-muted-foreground text-sm">Transfer Time</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 opacity-0 animate-slide-up animate-delay-200">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-solana-purple/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-solana-teal/20 rounded-full blur-3xl"></div>
              
              <div className="relative bg-card rounded-2xl border border-border p-6 shadow-xl">
                <div className="absolute -top-4 -right-4 bg-solana-purple text-white px-3 py-1 rounded-lg text-sm font-medium animate-pulse-glow">
                  Urgent
                </div>
                
                <div className="rounded-lg overflow-hidden h-48 mb-4">
                  <img 
                    src="https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Medical Emergency Fund"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2">Medical Emergency Fund</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Help Jane cover her unexpected surgery costs after a serious accident.
                </p>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Raised: 6.2 SOL</span>
                    <span className="text-sm font-medium">62%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="solana-gradient h-2 rounded-full w-[62%]"></div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-muted rounded-full"></div>
                    <span className="text-sm">Jane D.</span>
                  </div>
                  <Button className="text-white solana-gradient hover:opacity-90 transition">
                    Donate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
