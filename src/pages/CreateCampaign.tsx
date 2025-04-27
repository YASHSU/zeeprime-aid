
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreateCampaignForm from '@/components/CreateCampaignForm';
import { Button } from '@/components/ui/button';

const CreateCampaign = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Start Your Emergency Fundraising</h1>
            <p className="text-muted-foreground mb-8">
              Create your campaign in minutes and start receiving funds directly to your Solana wallet.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="relative">
              <div className="absolute left-0 top-1/2 w-full border-t border-border"></div>
              <div className="relative flex justify-around">
                {['Campaign Details', 'Review', 'Publish'].map((step, i) => (
                  <div 
                    key={step} 
                    className={`flex-col items-center flex ${
                      i === 0 ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 z-10 ${
                        i === 0 
                          ? 'solana-gradient text-white' 
                          : 'bg-card border border-border text-muted-foreground'
                      }`}
                    >
                      {i + 1}
                    </div>
                    <div className="text-sm">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-8 opacity-0 animate-slide-up">
            <CreateCampaignForm />
          </div>
          
          <div className="max-w-xl mx-auto mt-12 opacity-0 animate-slide-up animate-delay-200">
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <h3 className="font-semibold mb-2">Swift Aid Commitment</h3>
              <p className="text-sm text-muted-foreground">
                We're committed to helping people get the emergency financial assistance they need,
                as quickly as possible. All campaigns are subject to our community guidelines to
                ensure transparency and authenticity.
              </p>
            </div>
            
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={() => window.history.back()}>
                Back
              </Button>
              <Button disabled className="opacity-50">
                Next: Review
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateCampaign;
