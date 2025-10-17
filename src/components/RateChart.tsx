import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Mock data - ersätt med riktig data från backend
const mockRateData = [
  { month: "Jan 2024", average: 8.5, lowest: 2.9 },
  { month: "Feb 2024", average: 8.7, lowest: 3.0 },
  { month: "Mar 2024", average: 8.4, lowest: 2.9 },
  { month: "Apr 2024", average: 8.2, lowest: 2.9 },
  { month: "Maj 2024", average: 8.0, lowest: 2.9 },
  { month: "Jun 2024", average: 7.8, lowest: 2.9 },
  { month: "Jul 2024", average: 7.6, lowest: 2.9 },
  { month: "Aug 2024", average: 7.4, lowest: 2.9 },
  { month: "Sep 2024", average: 7.2, lowest: 2.9 },
  { month: "Okt 2024", average: 7.0, lowest: 2.9 },
];

interface RateChartProps {
  title?: string;
  description?: string;
}

export default function RateChart({ 
  title = "Ränteutveckling privatlån",
  description = "Genomsnittlig ränta och lägsta ränta senaste 10 månaderna"
}: RateChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={mockRateData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              label={{ value: 'Ränta (%)', angle: -90, position: 'insideLeft' }}
              domain={[0, 12]}
            />
            <Tooltip 
              formatter={(value: number) => `${value}%`}
              labelStyle={{ color: '#000' }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="average" 
              stroke="#8884d8" 
              strokeWidth={2}
              name="Genomsnittlig ränta"
              dot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="lowest" 
              stroke="#82ca9d" 
              strokeWidth={2}
              name="Lägsta ränta"
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
        
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Genomsnittlig ränta</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">7,0%</p>
            <p className="text-xs text-muted-foreground mt-1">Oktober 2024</p>
          </div>
          
          <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Lägsta tillgängliga ränta</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">2,9%</p>
            <p className="text-xs text-muted-foreground mt-1">Gäller vid god kreditvärdighet</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
