import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, ChevronUp, ChevronDown, FileText, Video, Image, Link as LinkIcon, User, Calendar } from 'lucide-react';

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCollege, setSelectedCollege] = useState('all');

  const subjects = [
    { id: 'computer-science', name: 'Computer Science', noteCount: 24 },
    { id: 'mathematics', name: 'Mathematics', noteCount: 18 },
    { id: 'physics', name: 'Physics', noteCount: 15 },
    { id: 'chemistry', name: 'Chemistry', noteCount: 12 },
    { id: 'biology', name: 'Biology', noteCount: 9 }
  ];

  const notes = [
    {
      id: 1,
      title: 'Data Structures and Algorithms - Complete Guide',
      subject: 'computer-science',
      type: 'document',
      author: 'Prof. Johnson',
      uploadDate: '2024-01-15',
      tags: ['algorithms', 'data-structures', 'programming'],
      upvotes: 45,
      downvotes: 2,
      description: 'Comprehensive guide covering all major data structures and algorithms with examples.'
    },
    {
      id: 2,
      title: 'Linear Algebra Video Lectures',
      subject: 'mathematics',
      type: 'video',
      author: 'Dr. Smith',
      uploadDate: '2024-01-14',
      tags: ['linear-algebra', 'matrices', 'vectors'],
      upvotes: 38,
      downvotes: 1,
      description: 'Complete video lecture series on linear algebra fundamentals.'
    },
    {
      id: 3,
      title: 'Quantum Physics Lab Notes',
      subject: 'physics',
      type: 'document',
      author: 'Prof. Wilson',
      uploadDate: '2024-01-13',
      tags: ['quantum', 'physics', 'lab', 'experiments'],
      upvotes: 29,
      downvotes: 3,
      description: 'Detailed lab notes and experiments in quantum physics.'
    },
    {
      id: 4,
      title: 'Organic Chemistry Reaction Mechanisms',
      subject: 'chemistry',
      type: 'image',
      author: 'Dr. Brown',
      uploadDate: '2024-01-12',
      tags: ['organic-chemistry', 'reactions', 'mechanisms'],
      upvotes: 22,
      downvotes: 1,
      description: 'Visual guide to organic chemistry reaction mechanisms.'
    },
    {
      id: 5,
      title: 'Cell Biology Research Papers',
      subject: 'biology',
      type: 'link',
      author: 'Prof. Davis',
      uploadDate: '2024-01-11',
      tags: ['cell-biology', 'research', 'papers'],
      upvotes: 31,
      downvotes: 2,
      description: 'Collection of important research papers in cell biology.'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'document': return <FileText className="w-4 h-4" />;
      case 'video': return <Video className="w-4 h-4" />;
      case 'image': return <Image className="w-4 h-4" />;
      case 'link': return <LinkIcon className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'document': return 'bg-blue-500';
      case 'video': return 'bg-red-500';
      case 'image': return 'bg-green-500';
      case 'link': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSubject = selectedSubject === 'all' || note.subject === selectedSubject;
    const matchesType = selectedType === 'all' || note.type === selectedType;
    
    return matchesSearch && matchesSubject && matchesType;
  });

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Study Notes</h1>
          <p className="text-muted-foreground">Access and share academic resources with your peers</p>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {/* Filters Sidebar */}
          <div className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-sm text-foreground">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Year</label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Years</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Subject</label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Subjects</SelectItem>
                      {subjects.map((subject) => (
                        <SelectItem key={subject.id} value={subject.id}>
                          {subject.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">College</label>
                  <Select value={selectedCollege} onValueChange={setSelectedCollege}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select College" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Colleges</SelectItem>
                      <SelectItem value="mit">MIT</SelectItem>
                      <SelectItem value="stanford">Stanford</SelectItem>
                      <SelectItem value="harvard">Harvard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Type</label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="document">Documents</SelectItem>
                      <SelectItem value="video">Videos</SelectItem>
                      <SelectItem value="image">Images</SelectItem>
                      <SelectItem value="link">Links</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-sm text-foreground">Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total</span>
                  <span className="text-foreground font-medium">1,247</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">This Week</span>
                  <span className="text-foreground font-medium">34</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-4 space-y-6">
            {/* Search and Filters */}
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search notes, tags, or authors..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="document">Documents</SelectItem>
                      <SelectItem value="video">Videos</SelectItem>
                      <SelectItem value="image">Images</SelectItem>
                      <SelectItem value="link">Links</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notes Grid */}
            <div className="grid grid-cols-3 gap-4">
              {filteredNotes.map((note) => (
                <Card key={note.id} className="bg-card border-border hover:bg-social-hover transition-colors aspect-[2/3]">
                  <CardContent className="p-4 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 ${getTypeColor(note.type)} rounded-lg flex items-center justify-center`}>
                        {getTypeIcon(note.type)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm" className="text-green-500 hover:text-green-400 h-6 px-1">
                          <ChevronUp className="w-3 h-3 mr-1" />
                          {note.upvotes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400 h-6 px-1">
                          <ChevronDown className="w-3 h-3 mr-1" />
                          {note.downvotes}
                        </Button>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-foreground text-sm mb-2 line-clamp-2">{note.title}</h3>
                    <p className="text-muted-foreground text-xs mb-3 line-clamp-3 flex-1">{note.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {note.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-1 py-0">
                          #{tag}
                        </Badge>
                      ))}
                      {note.tags.length > 2 && (
                        <Badge variant="secondary" className="text-xs px-1 py-0">
                          +{note.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="w-3 h-3" />
                        <span className="truncate">{note.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(note.uploadDate).toLocaleDateString()}
                      </div>
                      
                      <div className="flex gap-1 pt-2">
                        <Button size="sm" variant="outline" className="text-xs h-6 px-2 flex-1">
                          View
                        </Button>
                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs h-6 px-2 flex-1">
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredNotes.length === 0 && (
              <Card className="bg-card border-border col-span-3">
                <CardContent className="p-12 text-center">
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No notes found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filters</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;