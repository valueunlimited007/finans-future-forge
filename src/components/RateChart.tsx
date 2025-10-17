import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { 
  getPartnerOffers, 
  calculateAverageMinRate, 
  findLowestRate,
  generateHistoricalData 
} from "@/lib/rateCalculations";

interface RateChartProps {
  title?: string;
  description?: string;
}

export default function RateChart({ 
  title = "Ränteutveckling privatlån",
  description = "Genomsnittlig ränta och lägsta ränta från våra partners"
}: RateChartProps) {
  const [rateData, setRateData] = useState<any[]>([]);
  const [currentAverage, setCurrentAverage] = useState<number>(0);
  const [currentLowest, setCurrentLowest] = useState<number>(0);
  
  useEffect(() => {
    // Get real partner data
    const partners = getPartnerOffers();
    
    if (partners.length > 0) {
      const avgRate = calculateAverageMinRate(partners);
      const lowestRate = findLowestRate(partners);
      
      setCurrentAverage(avgRate);
      setCurrentLowest(lowestRate);
      
      // Generate historical trend based on current rates
      const historicalData = generateHistoricalData(avgRate, lowestRate);
      setRateData(historicalData);
    }
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {rateData.length > 0 ? (
          <>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={rateData}>
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
            <p className="text-sm text-muted-foreground mb-1">Genomsnittlig ränta (våra partners)</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {currentAverage > 0 ? `${currentAverage}%` : 'Laddar...'}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Baserat på {getPartnerOffers().length} långivare</p>
          </div>
          
          <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Lägsta tillgängliga ränta</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {currentLowest > 0 ? `från ${currentLowest}%` : 'Laddar...'}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Från våra samarbetspartners</p>
          </div>
        </div>
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Laddar räntedata...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
