
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CategoryBadge from './CategoryBadge';

export interface CampaignProps {
  id: string;
  title: string;
  description: string;
  raised: number;
  goal: number;
  category: 'medical' | 'disaster' | 'accident' | 'education' | 'family' | 'other';
  creatorName: string;
  imageUrl?: string;
  urgent?: boolean;
  createdAt: Date;
}

const CampaignCard = ({ campaign }: { campaign: CampaignProps }) => {
  const percentage = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));
  
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col opacity-0 animate-slide-up">
      <div className="relative">
        <div className="h-48 bg-muted">
          {campaign.imageUrl && (
            <img 
              src={campaign.imageUrl} 
              alt={campaign.title} 
              className="w-full h-full object-cover"
            />
          )}
        </div>
        {campaign.urgent && (
          <div className="absolute top-2 right-2 bg-solana-purple text-white px-2.5 py-0.5 rounded-lg text-xs font-medium animate-pulse-glow">
            Urgent
          </div>
        )}
        <div className="absolute bottom-2 left-2">
          <CategoryBadge category={campaign.category} />
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{campaign.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{campaign.description}</p>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-sm text-muted-foreground">
              Raised: {campaign.raised} SOL
            </span>
            <span className="text-sm font-medium">{percentage}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 mb-4">
            <div 
              className="solana-gradient h-2 rounded-full" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 bg-muted rounded-full"></div>
              <span className="text-xs">{campaign.creatorName}</span>
            </div>
            <Link to={`/campaign/${campaign.id}`}>
              <Button size="sm">Donate</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
