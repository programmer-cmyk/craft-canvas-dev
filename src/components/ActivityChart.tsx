import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  { name: "Mon", value: 20 },
  { name: "Tue", value: 45 },
  { name: "Wed", value: 80 },
  { name: "Thu", value: 35 },
  { name: "Fri", value: 90 },
  { name: "Sat", value: 60 },
  { name: "Sun", value: 30 },
]

export function ActivityChart() {
  return (
    <div className="bg-gradient-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Automated Activity</h3>
          <p className="text-sm text-muted-foreground">Automated 0 out of 1 interactions</p>
        </div>
        <div className="flex space-x-2 text-xs text-muted-foreground">
          <span>Yesterday</span>
          <span className="text-primary">Last 30 Days</span>
        </div>
      </div>
      
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis hide />
            <Bar 
              dataKey="value" 
              fill="url(#gradientBar)"
              radius={[4, 4, 0, 0]}
            />
            <defs>
              <linearGradient id="gradientBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}