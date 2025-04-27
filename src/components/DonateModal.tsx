
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CampaignProps } from "./CampaignCard";

interface DonateModalProps {
  campaign: CampaignProps | null;
  isOpen: boolean;
  onClose: () => void;
}

const DonateModal = ({ campaign, isOpen, onClose }: DonateModalProps) => {
  const [donationAmount, setDonationAmount] = useState("1");
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleDonate = () => {
    setIsProcessing(true);
    
    // Simulate donation processing
    setTimeout(() => {
      setIsProcessing(false);
      onClose();
      // In a real app, this is where you'd trigger the Solana transaction
    }, 2000);
  };
  
  if (!campaign) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Donate to {campaign.title}</DialogTitle>
          <DialogDescription>
            Help this campaign reach its goal of {campaign.goal} SOL.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="amount" className="text-right">
              Amount
            </label>
            <div className="col-span-3 flex items-center gap-2">
              <Input
                id="amount"
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="col-span-2"
                step={0.1}
                min={0.1}
              />
              <span>SOL</span>
            </div>
          </div>
          
          <div className="bg-muted rounded-lg p-4 mb-2">
            <div className="flex justify-between mb-2">
              <span className="text-sm">Current progress:</span>
              <span className="text-sm font-medium">
                {campaign.raised} of {campaign.goal} SOL
              </span>
            </div>
            <div className="w-full bg-background rounded-full h-2 mb-4">
              <div
                className="solana-gradient h-2 rounded-full"
                style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            All donations are processed instantly via Solana blockchain.
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isProcessing}>
            Cancel
          </Button>
          <Button 
            className="solana-gradient text-white"
            onClick={handleDonate}
            disabled={isProcessing || !donationAmount || Number(donationAmount) <= 0}
          >
            {isProcessing ? "Processing..." : `Donate ${donationAmount} SOL`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DonateModal;
