import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Heart, Star, Share2, Download, Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import './index.css';

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [starred, setStarred] = React.useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleStar = () => {
    setStarred(!starred);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            shadcn/ui Components Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the beautiful and accessible components from shadcn/ui library
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Product Card */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <CardHeader>
              <CardTitle>Premium Product</CardTitle>
              <CardDescription>
                High-quality item with excellent features and design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-green-600">$99.99</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">4.8 (124)</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button className="flex-1">Add to Cart</Button>
              <Button variant="outline" size="icon" onClick={handleLike}>
                <Heart className={`w-4 h-4 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
            </CardFooter>
          </Card>

          {/* Music Player Card */}
          <Card className="overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-10 h-10 text-blue-500 ml-1" />
              </div>
            </div>
            <CardHeader>
              <CardTitle>Now Playing</CardTitle>
              <CardDescription>Awesome Track - Great Artist</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-blue-500 h-2 rounded-full w-1/3"></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>1:23</span>
                <span>3:45</span>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-center space-x-2 w-full">
                <Button variant="outline" size="icon">
                  <SkipBack className="w-4 h-4" />
                </Button>
                <Button size="icon" onClick={handlePlayPause}>
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-1" />}
                </Button>
                <Button variant="outline" size="icon">
                  <SkipForward className="w-4 h-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Profile Card */}
          <Card className="text-center">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>Frontend Developer & UI Designer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">42</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">1.2k</div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">856</div>
                  <div className="text-sm text-gray-600">Following</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button className="flex-1">Follow</Button>
              <Button variant="outline" className="flex-1">Message</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Button Showcase */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>
              Different button styles and sizes available in shadcn/ui
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Default Buttons */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Default Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            {/* Button Sizes */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <Star className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Icon Buttons */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">With Icons</h3>
              <div className="flex flex-wrap gap-3">
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="secondary" onClick={handleStar}>
                  <Star className={`w-4 h-4 mr-2 ${starred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                  {starred ? 'Starred' : 'Star'}
                </Button>
              </div>
            </div>

            {/* Disabled State */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Disabled State</h3>
              <div className="flex flex-wrap gap-3">
                <Button disabled>Disabled</Button>
                <Button variant="outline" disabled>Disabled Outline</Button>
                <Button variant="secondary" disabled>Disabled Secondary</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-600">
          <p>Made using PantheraBuilder</p>
        </div>
      </div>
    </div>
  );
}

export default App;