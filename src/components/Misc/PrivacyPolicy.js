// PrivacyPolicy.js

import React from 'react';
import { Container, Typography } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col flex-grow bg-[#090A0F] py-20 text-white mt-12">
      <Container className="container mx-auto px-6">
        <Typography variant="h4" className=" font-bold pb-12 text-center">Integritetspolicy</Typography>

        <div className="bg-[#090A0F] p-12 rounded-xl shadow-lg space-y-8">

          <Typography variant="h6" className="text-2xl leading-relaxed text-gray-300">
          På Guardia värderar vi din integritet och strävar efter att du ska känna dig trygg med hur vi hanterar dina personuppgifter. Denna policy beskriver hur och varför vi samlar in, lagrar, använder och delar dina personuppgifter, samt dina rättigheter i relation till dina uppgifter.
        </Typography>


          {/* Policy Details */}
          <div className="space-y-8">

          <Typography variant="body1" className="text-lg leading-relaxed text-gray-400">
          Elyfe AB (559412-3415), har det fulla ansvaret som personuppgiftsansvarig. Det innebär att vi säkerställer att hanteringen av dina personuppgifter sker i enlighet med gällande lagstiftning kring dataskydd, inklusive EU:s dataskyddsförordning 2016/679 och den svenska dataskyddslagen (2018:218), samt enligt de riktlinjer som denna integritetspolicy anger. För frågor, oro eller för att göra anspråk på dina rättigheter, tveka inte att kontakta oss på angivna kontaktvägar.
            </Typography>


          </div>


          {/* Additional details */}
          <div className="mt-8">
          <div className="border-t border-gray-600 pt-8 mt-8 space-y-8">


          <Typography variant="body1" className="text-lg leading-relaxed text-gray-400">
                Vi samlar in personuppgifter direkt från dig när du använder våra tjänster, registrerar dig på vår webbplats, gör en beställning, tecknar ett abonnemang eller kommunicerar med oss på annat sätt. Vi kan även samla in uppgifter indirekt från tredje part eller offentligt tillgängliga källor.
              </Typography>

              <Typography variant="body1" className="text-lg leading-relaxed text-gray-400">
                De personuppgifter vi behandlar kan inkludera, men är inte begränsade till, ditt namn, adress, e-postadress, telefonnummer, betalnings- och leveransinformation, användningsdata, feedback och kommunikation med vår kundtjänst.
              </Typography>

              <Typography variant="body1" className="text-lg leading-relaxed text-gray-400">
                Ändamålen med vår behandling inkluderar att tillhandahålla och förbättra våra tjänster, hantera din beställning, kommunicera med dig, marknadsföra våra produkter eller tjänster (med ditt samtycke), samt uppfylla juridiska krav och skydda våra rättigheter.
              </Typography>

              <Typography variant="body1" className="text-lg leading-relaxed text-gray-400">
                Vi kan dela dina personuppgifter med betrodda tredjeparter som hjälper oss att leverera våra tjänster, inklusive IT-leverantörer, transportföretag och andra partners. Vi säkerställer att alla tredje parter som hanterar dina personuppgifter följer vår säkerhetsstandard och dataskyddslagar.
              </Typography>

              <Typography variant="body1" className="text-lg leading-relaxed text-gray-400">
                Vi lagrar dina personuppgifter så länge det är nödvändigt för de ändamål de samlades in för. Lagringstiden kan variera beroende på typ av uppgifter och syftet med behandlingen. Vi följer gällande lagar och praxis för datalagring.
              </Typography>

            </div>
          </div>

          {/* Rights and Contacts */}
          <div className="space-y-8 mt-8">


          <Typography variant="body1" className="text-lg leading-relaxed text-gray-400">
              Du har rätt att begära tillgång till, rättelse av, radering av dina personuppgifter, samt att begränsa eller invända mot behandlingen. Du har också rätt till dataportabilitet. Om du vill utöva någon av dessa rättigheter, eller om du har några frågor eller klagomål om vår behandling av dina personuppgifter, kan du kontakta oss.
            </Typography>

            <Typography variant="body1" className="text-lg leading-relaxed text-gray-400">
              För mer information om vår behandling av dina personuppgifter, eller om du vill göra en förfrågan eller lämna ett klagomål, vänligen kontakta oss på info@guardia.nu. Vi strävar efter att hantera alla förfrågningar och klagomål snabbt och effektivt.
            </Typography>

            <Typography variant="body1" className="text-lg leading-relaxed text-gray-400">
              Vi kan uppdatera denna integritetspolicy från tid till annan för att spegla ändringar i vår verksamhet eller lagar. Vi rekommenderar att du regelbundet besöker vår webbplats för att hålla dig informerad om eventuella uppdateringar.
            </Typography>
          </div>
        </div>

        {/* FooterSection */}

        <div className="mt-14 text-center">
        <Typography variant="body1" className="text-base leading-relaxed text-gray-500">
            Vi kan uppdatera denna policy med jämna mellanrum. Besök vår hemsida regelbundet för att hålla dig informerad om eventuella ändringar.
          </Typography>
        </div>
      </Container>
    </div>
  )
}

export default PrivacyPolicy;

