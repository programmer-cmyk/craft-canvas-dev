import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Check } from "lucide-react"

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
        
        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Scale your Instagram engagement with plans designed for every business size
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <div className="text-4xl font-bold mb-4">
                    $29<span className="text-lg text-gray-300">/month</span>
                  </div>
                  <p className="text-gray-300">Perfect for small businesses</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Up to 100 automated responses</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>1 Instagram account</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  onClick={() => navigate('/dashboard')}
                >
                  Get Started
                </Button>
              </div>
              
              {/* Pro Plan */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <div className="text-4xl font-bold mb-4">
                    $79<span className="text-lg text-gray-300">/month</span>
                  </div>
                  <p className="text-gray-300">For growing businesses</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Up to 500 automated responses</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Advanced analytics & insights</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Up to 3 Instagram accounts</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>AI-powered responses</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => navigate('/dashboard')}
                >
                  Get Started
                </Button>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold mb-4">
                    $199<span className="text-lg text-gray-300">/month</span>
                  </div>
                  <p className="text-gray-300">For large organizations</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Unlimited automated responses</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Custom analytics dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>24/7 phone & chat support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Unlimited Instagram accounts</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Advanced AI & integrations</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  onClick={() => navigate('/dashboard')}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Landing