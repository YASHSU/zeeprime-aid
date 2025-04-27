
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryBadge from '@/components/CategoryBadge';
import DonateModal from '@/components/DonateModal';
import { Button } from '@/components/ui/button';
import { CampaignProps } from '@/components/CampaignCard';

// Sample campaigns data (in a real app, you'd fetch this from API/backend)
const campaigns: Record<string, CampaignProps> = {
  '1': {
    id: '1',
    title: 'Emergency Medical Treatment Fund',
    description: 'Help cover the cost of life-saving treatment needed within 48 hours. My family member has been diagnosed with a serious condition that requires immediate medical attention, and we are unable to cover the full cost of the procedure which is scheduled for this week. Any contribution, no matter how small, will make a significant difference during this critical time. Funds will go directly to the hospital for the procedure and associated care.',
    raised: 6.2,
    goal: 10,
    category: 'medical',
    creatorName: 'Jane D.',
    urgent: true,
    createdAt: new Date(Date.now() - 86400000), // 1 day ago
  },
  '2': {
    id: '2',
    title: 'Wildfire Relief for Local Family',
    description: 'Support a family who lost their home in the recent wildfires that swept through our community last weekend. The Johnson family of four, including two young children, lost everything they owned. They need immediate assistance for temporary housing, clothing, food, and essential items to help them through this devastating time. All funds will go directly to helping them rebuild their lives.',
    raised: 4.5,
    goal: 15,
    category: 'disaster',
    creatorName: 'Mark S.',
    createdAt: new Date(Date.now() - 172800000), // 2 days ago
  },
  '3': {
    id: '3',
    title: 'Car Accident Recovery Support',
    description: "Help with medical bills after a serious car accident last week that left me unable to work temporarily. The unexpected accident has resulted in significant medical expenses and I'm facing challenges with covering costs while I'm unable to work during recovery. Your support will help cover urgent medical bills and essential living expenses during this difficult time.",
    raised: 3.8,
    goal: 7.5,
    category: 'accident',
    creatorName: 'Robert J.',
    urgent: true,
    createdAt: new Date(Date.now() - 259200000), // 3 days ago
  },
  'new': {
    id: 'new',
    title: 'Your New Campaign',
    description: 'Your campaign has been created successfully! In a real application, this would show your newly created campaign details.',
    raised: 0,
    goal: 10,
    category: 'other',
    creatorName: 'You',
    createdAt: new Date(),
  }
};

const CampaignDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [isDonateModalOpen, setDonateModalOpen] = useState(false);
  
  // Find campaign by ID
  const campaign = id ? campaigns[id] : null;
  
  if (!campaign) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-28 px-6 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Campaign Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The campaign you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => window.history.back()}>Go Back</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const percentage = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));
  const daysAgo = Math.floor((Date.now() - campaign.createdAt.getTime()) / (1000 * 60 * 60 * 24));
  const timeDisplay = daysAgo === 0 ? 'Today' : `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Campaign Header */}
            <div className="mb-6 md:mb-8 opacity-0 animate-slide-up">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span>Created {timeDisplay}</span>
                <span>•</span>
                <CategoryBadge category={campaign.category} />
                {campaign.urgent && (
                  <>
                    <span>•</span>
                    <span className="text-solana-purple font-medium animate-pulse-glow">Urgent</span>
                  </>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{campaign.title}</h1>
              <p className="text-lg text-muted-foreground">
                by {campaign.creatorName}
              </p>
            </div>
            
            {/* Campaign Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6 opacity-0 animate-slide-up animate-delay-100">
                {/* Campaign Image */}
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  {/* This would be the campaign image */}
                </div>
                
                {/* Campaign Description */}
                <div>
                  <h2 className="text-xl font-semibold mb-3">The Emergency</h2>
                  <div className="prose text-foreground">
                    <p>{campaign.description}</p>
                  </div>
                </div>
                
                {/* Updates Section */}
                <div className="pt-4 border-t border-border">
                  <h2 className="text-xl font-semibold mb-3">Updates</h2>
                  {campaign.id === 'new' ? (
                    <div className="bg-muted/50 p-4 rounded-lg text-center">
                      <p>No updates yet. Check back soon!</p>
                    </div>
                  ) : (
                    <div className="bg-muted/50 p-4 rounded-lg border border-border mb-4">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium">First update</h3>
                        <span className="text-sm text-muted-foreground">Today</span>
                      </div>
                      <p className="text-sm">
                        Thank you to everyone who has donated so far! Your support means everything during this difficult time.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Campaign Sidebar */}
              <div className="opacity-0 animate-slide-up animate-delay-200">
                <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                  {/* Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between items-baseline mb-2">
                      <div className="text-2xl font-bold">{campaign.raised} SOL</div>
                      <div className="text-sm text-muted-foreground">of {campaign.goal} SOL goal</div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div 
                        className="solana-gradient h-2 rounded-full" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {percentage}% raised from 12 donations
                    </div>
                    
                    <Button 
                      className="w-full solana-gradient text-white hover:opacity-90 transition mb-3"
                      onClick={() => setDonateModalOpen(true)}
                    >
                      Donate Now
                    </Button>
                    
                    <Button variant="outline" className="w-full">
                      Share Campaign
                    </Button>
                  </div>
                  
                  {/* Recent Donors */}
                  <div>
                    <h3 className="font-semibold mb-3">Recent Donors</h3>
                    {campaign.id === 'new' ? (
                      <p className="text-sm text-muted-foreground">
                        Be the first to donate to this campaign!
                      </p>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-muted rounded-full"></div>
                            <div>
                              <div className="font-medium text-sm">Anonymous</div>
                              <div className="text-xs text-muted-foreground">1 hour ago</div>
                            </div>
                          </div>
                          <div className="font-semibold">1.5 SOL</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-muted rounded-full"></div>
                            <div>
                              <div className="font-medium text-sm">Sarah K.</div>
                              <div className="text-xs text-muted-foreground">3 hours ago</div>
                            </div>
                          </div>
                          <div className="font-semibold">0.8 SOL</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-muted rounded-full"></div>
                            <div>
                              <div className="font-medium text-sm">Michael T.</div>
                              <div className="text-xs text-muted-foreground">5 hours ago</div>
                            </div>
                          </div>
                          <div className="font-semibold">2.0 SOL</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Donate Modal */}
      <DonateModal 
        campaign={campaign} 
        isOpen={isDonateModalOpen} 
        onClose={() => setDonateModalOpen(false)} 
      />
    </div>
  );
};

export default CampaignDetails;
