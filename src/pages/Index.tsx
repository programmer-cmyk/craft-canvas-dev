import { Home, MessageCircle, Reply, Bot } from "lucide-react"
import { FeatureCard } from "@/components/FeatureCard"
import { ActivityChart } from "@/components/ActivityChart"
import { StatsCard } from "@/components/StatsCard"

const Index = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Welcome back,</p>
        <h1 className="text-2xl font-bold text-foreground">Web Prodigies!</h1>
      </div>

      {/* Page Title */}
      <div className="flex items-center space-x-2">
        <Home className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Home</h2>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Set-up Auto Replies"
          description="Set up a product catalog that your Instagram DM chatbot can use"
          icon={Reply}
        />
        <FeatureCard
          title="Answer Questions with AI"
          description="Identify and respond to queries with AI"
          icon={Bot}
        />
        <FeatureCard
          title="Answer Questions with AI"
          description="The intention of the message will be automatically detected"
          icon={MessageCircle}
        />
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityChart />
        </div>
        
        <div className="space-y-6">
          <StatsCard
            title="Comments"
            subtitle="On your posts"
            percentage={50}
            description="3 out of 6 comments replied"
          />
          <StatsCard
            title="Direct Message"
            subtitle="On your account"
            percentage={50}
            description="3 out of 6 DMs replied"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
