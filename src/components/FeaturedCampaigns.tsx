
import React from 'react';
import CampaignCard, { CampaignProps } from './CampaignCard';

// Sample campaign data
const sampleCampaigns: CampaignProps[] = [
  {
    id: '1',
    title: 'Emergency Medical Treatment Fund',
    description: 'Help cover the cost of life-saving treatment needed within 48 hours.',
    raised: 6.2,
    goal: 10,
    category: 'medical',
    creatorName: 'Jane D.',
    urgent: true,
    createdAt: new Date()
  },
  {
    id: '2',
    title: 'Wildfire Relief for Local Family',
    description: 'Support a family who lost their home in the recent wildfires.',
    raised: 4.5,
    goal: 15,
    category: 'disaster',
    creatorName: 'Mark S.',
    createdAt: new Date()
  },
  {
    id: '3',
    title: 'Car Accident Recovery Support',
    description: 'Help with medical bills after a serious car accident last week.',
    raised: 3.8,
    goal: 7.5,
    category: 'accident',
    creatorName: 'Robert J.',
    urgent: true,
    createdAt: new Date()
  }
];

const FeaturedCampaigns = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-accent/40">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Urgent Campaigns</h2>
            <p className="text-muted-foreground">People who need immediate help</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCampaigns.map((campaign, index) => (
            <div
              key={campaign.id}
              className={`opacity-0 animate-slide-up animate-delay-${index * 100}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CampaignCard campaign={campaign} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
