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
    <Card className="border-l-4 border-l-primary/60 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          {image && (
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl">👨‍💼</span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base font-semibold">{name}</CardTitle>
            <p className="text-xs text-muted-foreground line-clamp-1">{title}</p>
            <p className="text-xs text-muted-foreground line-clamp-1">{experience}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        <div>
          <h4 className="font-semibold text-xs mb-1.5 text-foreground/80">Specialistområden:</h4>
          <div className="flex flex-wrap gap-1.5">
            {specialization.map((spec, index) => (
              <Badge key={index} variant="secondary" className="text-xs py-0 px-2 h-5">
                {spec}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-xs mb-1.5 text-foreground/80">Kvalifikationer:</h4>
          <ul className="text-xs text-muted-foreground space-y-0.5">
            {credentials.map((cred, index) => (
              <li key={index} className="line-clamp-1">• {cred}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}