import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HandCoins, Wrench, BatteryCharging, Building2, Sun, Gauge } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <a href="#" className="text-lg font-semibold tracking-tight">modu.energy</a>
          <Button asChild variant="hero" size="sm">
            <a href="#formularz" aria-label="Przejdź do formularza">Rozpocznij</a>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center animate-enter">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Obniż koszty energii, nawet do 30%. Bez inwestycji.
            </h1>
            <Button asChild variant="hero" size="lg">
              <a href="#formularz" aria-label="Przewiń do formularza">Rozpocznij</a>
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="container py-8 md:py-14">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="transition-transform duration-200 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <HandCoins className="text-foreground" />
                  <CardTitle className="text-xl">Finansowanie dopasowane do Ciebie</CardTitle>
                </div>
                <CardDescription>
                  Finansujemy magazyn energii, dopasowany do klienta na podstawie naszych analiz.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transition-transform duration-200 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Wrench className="text-foreground" />
                  <CardTitle className="text-xl">Instalacja i formalności</CardTitle>
                </div>
                <CardDescription>
                  Instalujemy magazyn energii, zajmując się wszystkimi formalnościami.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="transition-transform duration-200 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BatteryCharging className="text-foreground" />
                  <CardTitle className="text-xl">Optymalizacja i podział zysków</CardTitle>
                </div>
                <CardDescription>
                  Optymalizujemy konsumpcję energii, dzieląc oszczędności między klienta a modu.energy.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* ICP */}
        <section className="container py-8 md:py-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Kogo szukamy?</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Dopiero zaczynamy i nie jesteśmy w stanie pomóc wszystkim. Idealni klienci których szukamy cechują się:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>wysokimi kosztami energii</li>
                  <li>dużym poborem w okresach wysokiego zapotrzebowania (rano, wieczór)</li>
                  <li>istniejącą fotowoltaiką</li>
                  <li>dużym, niewykorzystanym przyłączem</li>
                  <li>taryfą o wielu-strefach / dynamiczną, lub chęcią zmiany obecnej</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Jeśli nie masz pewności, czy się kwalifikujesz — wyślij formularz. Wrócimy z odpowiedzią w kilka dni.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-2 text-sm"><Building2 /> Obiekt komercyjny</div>
                  <div className="flex items-center gap-2 text-sm"><Sun /> Fotowoltaika</div>
                  <div className="flex items-center gap-2 text-sm"><Gauge /> Wysoki pobór</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Form CTA */}
        <section id="formularz" className="container py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Sprawdź potencjalne oszczędności w swojej firmie, bez zobowiązań
            </h2>
            <div className="mt-4 text-left inline-block text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>darmowa ocena potencjału oszczędności, oparta na własnej analizie klienta</li>
                <li>szybka i niezobowiązująca ocena - odezwiemy się w przeciągu paru dni</li>
              </ul>
            </div>
            <div className="mt-6">
              <Button asChild variant="hero" size="lg">
                <a href="https://tally.so/forms/mV6Jvl/edit">Sprawdź ile możesz zaoszczędzić</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-6 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} modu.energy</span>
          <a href="#formularz" className="underline-offset-4 hover:underline">Formularz</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
