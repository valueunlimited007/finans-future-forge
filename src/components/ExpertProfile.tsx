import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExpertProfileProps {
  name: string;
  title: string;
  experience: string;
  specialization: string[];
  credentials: string[];
  image?: string;
}

export default function ExpertProfile({ name, title, experience, specialization, credentials, image }: ExpertProfileProps) {
  return (
    <Card className="border-l-4 border-l-blue-500">
      <CardHeader>
        <div className="flex items-start gap-4">
          {image && (
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍💼</span>
            </div>
          )}
          <div className="flex-1">
            <CardTitle className="text-lg">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-sm text-muted-foreground">{experience}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm mb-2">Specialistområden:</h4>
            <div className="flex flex-wrap gap-2">
              {specialization.map((spec, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-2">Kvalifikationer:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {credentials.map((cred, index) => (
                <li key={index}>• {cred}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}