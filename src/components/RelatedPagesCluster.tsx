import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getClusterLinks } from "@/data/contentClusters";

interface RelatedPagesClusterProps {
  clusterId: string;
  currentUrl?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function RelatedPagesCluster({ 
  clusterId, 
  currentUrl, 
  title = "Relaterade sidor",
  description = "Läs mer inom samma område",
  className = ""
}: RelatedPagesClusterProps) {
  const links = getClusterLinks(clusterId, currentUrl);
  
  if (links.length === 0) return null;
  
  return (
    <section className={`py-12 ${className}`}>
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <Link key={index} to={link.url} className="group">
            <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  {link.title}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{link.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
