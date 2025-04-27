
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedCampaigns from '@/components/FeaturedCampaigns';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add animation effects when page loads
    const elements = document.querySelectorAll('.animate-slide-up');
    elements.forEach((el) => {
      el.classList.add('opacity-0');
      setTimeout(() => {
        el.classList.remove('opacity-0');
      }, 100);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-border rounded-xl bg-card opacity-0 animate-slide-up">
                <div className="w-12 h-12 mb-4 rounded-full solana-gradient flex items-center justify-center">
                  <span className="text-xl text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Create a Campaign</h3>
                <p className="text-muted-foreground">
                  Set up your emergency fundraising campaign in less than 5 minutes with a few simple steps.
                </p>
              </div>
              
              <div className="p-6 border border-border rounded-xl bg-card opacity-0 animate-slide-up animate-delay-100">
                <div className="w-12 h-12 mb-4 rounded-full solana-gradient flex items-center justify-center">
                  <span className="text-xl text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Share Your Story</h3>
                <p className="text-muted-foreground">
                  Explain your emergency situation and why you need swift financial assistance.
                </p>
              </div>
              
              <div className="p-6 border border-border rounded-xl bg-card opacity-0 animate-slide-up animate-delay-200">
                <div className="w-12 h-12 mb-4 rounded-full solana-gradient flex items-center justify-center">
                  <span className="text-xl text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Receive Funds Instantly</h3>
                <p className="text-muted-foreground">
                  Get help directly to your Solana wallet with near-instant transaction times and minimal fees.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturedCampaigns />
        
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto">
            <div className="bg-primary/10 p-8 md:p-12 rounded-2xl border border-primary/20 relative overflow-hidden opacity-0 animate-slide-up">
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your emergency fundraising?</h2>
                <p className="text-lg mb-6 max-w-xl">
                  Create your campaign now and start receiving help within minutes from donors worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/create" className="solana-gradient text-white hover:opacity-90 transition inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium">
                    Start a Campaign
                  </a>
                  <a href="/explore" className="bg-background hover:bg-accent transition inline-flex items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium">
                    Explore Campaigns
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
