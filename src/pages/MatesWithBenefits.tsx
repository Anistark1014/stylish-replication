import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  ThumbsUp, 
  ThumbsDown, 
  Star, 
  MessageCircle, 
  BookOpen, 
  ShoppingCart, 
  Home, 
  Briefcase,
  Filter,
  Heart
} from 'lucide-react';
import Layout from '@/components/Layout';

interface ServiceListing {
  id: string;
  title: string;
  description: string;
  price: string;
  upvotes: number;
  downvotes: number;
  rating: number;
  reviewCount: number;
  seller: string;
  isAnonymous: boolean;
  category: string;
}

const MatesWithBenefits = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Mock data for service listings
  const mockListings: ServiceListing[] = [
    {
      id: '1',
      title: 'Complete CS Assignment - Data Structures',
      description: 'Expert help with data structures and algorithms assignments. Quick turnaround, high quality work guaranteed.',
      price: '₹500-1500',
      upvotes: 45,
      downvotes: 2,
      rating: 4.8,
      reviewCount: 23,
      seller: 'CodeMaster_21',
      isAnonymous: true,
      category: 'academic'
    },
    {
      id: '2',
      title: 'Gaming Laptop - MSI Predator',
      description: 'Excellent condition gaming laptop. RTX 3060, 16GB RAM, perfect for college projects and gaming.',
      price: '₹45,000',
      upvotes: 32,
      downvotes: 1,
      rating: 4.7,
      reviewCount: 15,
      seller: 'TechSeller_99',
      isAnonymous: true,
      category: 'olx'
    },
    {
      id: '3',
      title: 'Single Room Near Main Campus',
      description: '2BHK flat, sharing with 1 other student. Fully furnished, Wi-Fi included. 5 min walk to campus.',
      price: '₹8,000/month',
      upvotes: 28,
      downvotes: 0,
      rating: 4.9,
      reviewCount: 12,
      seller: 'RoomMate_Finder',
      isAnonymous: true,
      category: 'broker'
    },
    {
      id: '4',
      title: 'Logo Design & Branding Services',
      description: 'Professional logo design and complete branding packages. Portfolio available on request.',
      price: '₹2,000-5,000',
      upvotes: 38,
      downvotes: 3,
      rating: 4.6,
      reviewCount: 19,
      seller: 'DesignGuru_X',
      isAnonymous: true,
      category: 'freelance'
    }
  ];

  const filteredListings = mockListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'all' || listing.category === activeTab;
    return matchesSearch && matchesTab;
  });

  const handleContactSeller = (listing: ServiceListing) => {
    // This would open a chat modal or navigate to chat
    console.log('Contact seller:', listing.seller);
  };

  const handleVote = (listingId: string, type: 'up' | 'down') => {
    // Handle voting logic here
    console.log(`Vote ${type} for listing ${listingId}`);
  };

  return (
    <Layout showMessagesSidebar={false}>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Mates with Benefits</h1>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">Discover services offered by your fellow students</p>
            
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <div className="relative flex-1 max-w-full sm:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center justify-center gap-2 w-full sm:w-auto">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-6 sm:mb-8 h-auto">
                <TabsTrigger value="all" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm p-2 sm:p-3">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">All Services</span>
                  <span className="sm:hidden">All</span>
                </TabsTrigger>
                <TabsTrigger value="academic" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm p-2 sm:p-3">
                  <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Academic Ace</span>
                  <span className="sm:hidden">Academic</span>
                </TabsTrigger>
                <TabsTrigger value="olx" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm p-2 sm:p-3">
                  <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Mini OLX</span>
                  <span className="sm:hidden">Shop</span>
                </TabsTrigger>
                <TabsTrigger value="broker" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm p-2 sm:p-3">
                  <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">MateBroker</span>
                  <span className="sm:hidden">Rooms</span>
                </TabsTrigger>
                <TabsTrigger value="freelance" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm p-2 sm:p-3">
                  <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Matelancer</span>
                  <span className="sm:hidden">Services</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="mt-0">
                {/* Service Listings Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredListings.map((listing) => (
                    <Card key={listing.id} className="hover:shadow-lg transition-shadow duration-200 bg-card border-border">
                      <CardHeader className="pb-3 p-4 sm:p-6">
                        <div className="flex justify-between items-start gap-2">
                          <CardTitle className="text-base sm:text-lg font-semibold line-clamp-2 text-foreground">
                            {listing.title}
                          </CardTitle>
                          <Badge variant="secondary" className="shrink-0 text-xs">
                            {listing.category === 'academic' && 'Academic'}
                            {listing.category === 'olx' && 'For Sale'}
                            {listing.category === 'broker' && 'Housing'}
                            {listing.category === 'freelance' && 'Service'}
                          </Badge>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
                          {listing.description}
                        </p>
                      </CardHeader>
                      
                      <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                        {/* Price */}
                        <div className="text-lg sm:text-xl font-bold text-primary">
                          {listing.price}
                        </div>

                        {/* Rating and Reviews */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs sm:text-sm font-medium">{listing.rating}</span>
                          </div>
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            ({listing.reviewCount} reviews)
                          </span>
                        </div>

                        {/* Seller Info */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            by {listing.isAnonymous ? '***' : listing.seller}
                          </span>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleVote(listing.id, 'up')}
                              className="flex items-center gap-1 text-green-600 hover:text-green-700 hover:bg-green-50 p-1 sm:p-2"
                            >
                              <ThumbsUp className="w-3 h-3" />
                              <span className="text-xs">{listing.upvotes}</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleVote(listing.id, 'down')}
                              className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50 p-1 sm:p-2"
                            >
                              <ThumbsDown className="w-3 h-3" />
                              <span className="text-xs">{listing.downvotes}</span>
                            </Button>
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button 
                          onClick={() => handleContactSeller(listing)}
                          className="w-full flex items-center justify-center gap-2 text-sm"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Contact Seller
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Empty State */}
                {filteredListings.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2">No services found</h3>
                    <p className="text-muted-foreground">Try adjusting your search or filters</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Floating Add Button */}
        <Button
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-lg hover:shadow-xl transition-shadow duration-200 z-50"
          size="icon"
        >
          <span className="text-xl sm:text-2xl">+</span>
        </Button>
      </div>
    </Layout>
  );
};

export default MatesWithBenefits;