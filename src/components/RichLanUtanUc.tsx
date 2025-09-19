import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RichLanUtanUc() {
  return (
    <>
      <Helmet>
        <title>Lån utan UC - 17 långivare som inte UC-kontrollerar 2025</title>
        <meta name="description" content="Lån utan UC-kontroll från 17 långivare. ✓ Även med betalningsanmärkning ✓ Snabba beslut ✓ 10 000-500 000 kr. Få lån utan kreditupplysning idag." />
        <link rel="canonical" href="https://finansguiden.se/lan-utan-uc" />
      </Helmet>

      <main>
        <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lån <span className="text-orange-600">utan UC</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              17 långivare som inte gör UC-kontroll. Få lån även med betalningsanmärkning. 
              Snabba beslut och utbetalning samma dag.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 bg-orange-600 text-white hover:bg-orange-700 shadow-lg">Se lån utan UC</Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Läs mer</Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Badge variant="secondary">✓ Ingen UC-kontroll</Badge>
              <Badge variant="secondary">✓ Även med anmärkningar</Badge>
              <Badge variant="secondary">✓ 17 långivare</Badge>
              <Badge variant="secondary">✓ Samma dag-utbetalning</Badge>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-amber-50">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-800">⚠️ Viktigt att veta om lån utan UC</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">
                  Lån utan UC-kontroll har ofta högre räntor än traditionella lån. 
                  Se detta som en kortsiktig lösning och jämför alltid villkoren noga.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}