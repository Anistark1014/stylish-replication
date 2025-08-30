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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Study Notes</h1>
          <p className="text-muted-foreground">Access and share academic resources with your peers</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-4 gap-6">
          {/* Sidebar - Subjects */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Subjects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={selectedSubject === 'all' ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setSelectedSubject('all')}
                >
                  All Subjects
                </Button>
                {subjects.map((subject) => (
                  <Button
                    key={subject.id}
                    variant={selectedSubject === subject.id ? 'secondary' : 'ghost'}
                    className="w-full justify-between"
                    onClick={() => setSelectedSubject(subject.id)}
                  >
                    <span>{subject.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {subject.noteCount}
                    </Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Notes</span>
                  <span className="text-foreground font-medium">78</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Contributors</span>
                  <span className="text-foreground font-medium">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">This Week</span>
                  <span className="text-foreground font-medium">12</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-3 space-y-6">
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

            {/* Notes List */}
            <div className="space-y-4">
              {filteredNotes.map((note) => (
                <Card key={note.id} className="bg-card border-border hover:bg-social-hover transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${getTypeColor(note.type)} rounded-lg flex items-center justify-center`}>
                        {getTypeIcon(note.type)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-foreground text-lg">{note.title}</h3>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="text-green-500 hover:text-green-400">
                              <ChevronUp className="w-4 h-4 mr-1" />
                              {note.upvotes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400">
                              <ChevronDown className="w-4 h-4 mr-1" />
                              {note.downvotes}
                            </Button>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-3">{note.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {note.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {note.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(note.uploadDate).toLocaleDateString()}
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              View
                            </Button>
                            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredNotes.length === 0 && (
              <Card className="bg-card border-border">
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