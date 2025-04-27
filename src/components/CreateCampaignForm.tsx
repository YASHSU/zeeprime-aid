
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

const CreateCampaignForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal: '',
    category: '',
    urgent: false,
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }));
  };
  
  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      urgent: checked,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/campaign/new');
      // In a real app, this is where you'd send the data to your backend
    }, 1500);
  };
  
  const categories = [
    { value: 'medical', label: 'Medical Emergency' },
    { value: 'disaster', label: 'Disaster Relief' },
    { value: 'accident', label: 'Accident Recovery' },
    { value: 'education', label: 'Education Emergency' },
    { value: 'family', label: 'Family Crisis' },
    { value: 'other', label: 'Other Emergency' },
  ];
  
  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Campaign Title
            </label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Emergency Medical Fund for Jane"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Explain the emergency situation and why you need funds quickly..."
              rows={4}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="goal" className="text-sm font-medium">
                Funding Goal (SOL)
              </label>
              <Input
                id="goal"
                name="goal"
                type="number"
                value={formData.goal}
                onChange={handleInputChange}
                placeholder="10"
                min="0.1"
                step="0.1"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium">
                Emergency Category
              </label>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label htmlFor="urgent" className="text-sm font-medium">
                Mark as Urgent
              </label>
              <p className="text-xs text-muted-foreground">
                Urgent campaigns are highlighted to donors
              </p>
            </div>
            <Switch
              id="urgent"
              checked={formData.urgent}
              onCheckedChange={handleSwitchChange}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full solana-gradient text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Campaign..." : "Create Campaign"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateCampaignForm;
