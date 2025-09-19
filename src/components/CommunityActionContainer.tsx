import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight, MessageCircle } from "lucide-react";

interface CommunityActionContainerProps {
  title?: string;
  description?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
}

export default function CommunityActionContainer({
  title = "Utforska Fler Community-Guider",
  description = "Upptäck fler expertguider och tips från vår community för att ta kontroll över din ekonomi.",
  primaryAction = {
    text: "Se Alla Guider",
    href: "/community"
  },
  secondaryAction = {
    text: "Gå med i Community",
    href: "/community/join"
  }
}: CommunityActionContainerProps) {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-background/95 backdrop-blur-sm shadow-xl border-0">
          <CardContent className="p-8 text-center space-y-6">
            {/* Icon and Badge */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="px-3 py-1 bg-secondary/20 rounded-full text-xs font-medium text-secondary-foreground">
                Community-Rekommenderat
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {title}
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                asChild
                size="lg"
                className="min-w-[200px] h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href={primaryAction.href} className="flex items-center gap-2">
                  {primaryAction.text}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg" 
                className="min-w-[200px] h-12 text-base font-semibold border-2 hover:bg-secondary/5 transition-all duration-300"
              >
                <a href={secondaryAction.href} className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  {secondaryAction.text}
                </a>
              </Button>
            </div>

            {/* Additional Info */}
            <div className="pt-4 text-sm text-muted-foreground">
              <p>Bli en del av Sveriges största community för privatekonomi</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}