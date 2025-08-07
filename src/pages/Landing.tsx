import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-900 font-bold text-sm">||</span>
          </div>
          <span className="text-xl font-semibold">Slide</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
        </nav>
        
        <Button 
          variant="outline" 
          onClick={() => navigate('/dashboard')}
          className="bg-white/10 text-white border-white/20 hover:bg-white/20"
        >
          Login
        </Button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Transform Your<br />
            Instagram Engagement<br />
            with Slide
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Slide revolutionizes how you connect with your audience on Instagram. Automate 
            responses and boost engagement effortlessly, turning interactions into valuable business 
            opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button 
              size="lg"
              onClick={() => navigate('/dashboard')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Get Started
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Profile Images */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-6">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden">
            <img 
              src="/lovable-uploads/8393d83d-4424-4edc-bd51-aae28699b248.png" 
              alt="User 1" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600"></div>
          </div>
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-400 to-red-600 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600"></div>
          </div>
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Landing