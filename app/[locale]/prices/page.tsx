import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  FileCheck2,
  Gavel,
  MessageCircle,
  Phone,
  ShieldCheck,
  UserRound,
  Wallet,
  Search,
  RefreshCw,
  Truck,
  ClipboardCheck,
  Trophy,
  CircleDollarSign,
} from "lucide-react";

import Header from "@/app/components/layout/Header";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function PricesPage({ params }: Props) {
  const { locale } = await params;

  const isUk = locale === "uk";
  const isEn = locale === "en";

  const content = isUk
    ? {
        heroTitle: "ДОСТАВКА АВТОМОБІЛІВ З АУКЦІОНІВ",
        heroText:
          "Знаходимо, купуємо та доставляємо автомобілі з європейських аукціонів.",

        classic: "Класичні автомобілі",
        electric: "Електромобілі",
        classicFuel: "БЕНЗИН • ДИЗЕЛЬ • ГІБРИД",
        electricFuel: "BEV • ЕЛЕКТРО",
        priceClassic: "16 990 Kč",
        priceElectric: "15 990 Kč",
        priceNote:
          "Ціна послуги за організацію купівлі та доставки автомобіля з аукціону",

        continueTitle: "НЕ ВИГРАЛИ?",
        continueAccent: "ГРАЄМО ДАЛІ.",
        continueText:
          "Не вдалося виграти автомобіль з першої спроби? Ми не зупиняємося. Продовжуємо пошук, аналізуємо нові пропозиції та беремо участь у наступних торгах.",

        individual: "ІНДИВІДУАЛЬНИЙ ПІДХІД",
        individualText:
          "Кожен клієнт має власні вимоги. Підбираємо автомобіль відповідно до ваших побажань, бюджету, параметрів та способу використання.",

        individualBottom:
          "Кожну пропозицію готуємо індивідуально.",

        process: "ЯК ЦЕ ВІДБУВАЄТЬСЯ?",
        processEyebrow: "VGTS MOBILITY",

        priceTitle: "ЩО ВХОДИТЬ У ВАРТІСТЬ НАШОЇ ПОСЛУГИ",
        important: "ВАЖЛИВО",

        importantText1:
          "Фінальна вартість автомобіля залежить від результату аукціону, вартості самого автомобіля, доставки та інших витрат, пов'язаних із конкретною покупкою.",

        importantText2:
          "До вартості послуги можуть бути додані витрати, які залежать від конкретного автомобіля та аукціону:",

        importantList: [
          "сама викупна ціна автомобіля",
          "аукціонні та адміністративні платежі",
          "доставка з місця аукціону",
          "можливі складські або маніпуляційні платежі",
          "реєстрація та інші необхідні дії",
          "інші витрати, пов'язані з конкретним автомобілем",
        ],

        importantBottom:
          "Перед покупкою ми завжди пояснюємо, які саме витрати стосуються конкретного автомобіля.",

        contactTitle: "ХОЧЕТЕ АВТО З АУКЦІОНУ?",
        contactText:
          "Напишіть нам, яке авто ви шукаєте. Обговоримо бюджет, побажання та знайдемо відповідний варіант.",

        contact: "Зв'язатися з нами",

        buyCar: "Автомобілі в наявності",

        whyTitle: "ЧОМУ VGTS MOBILITY?",
        whyEyebrow: "VGTS MOBILITY",

        steps: [
          [
            "01",
            "ВАШ ЗАПИТ",
            "Розкажіть нам, який автомобіль ви шукаєте — модель, рік, двигун, бюджет, пробіг та бажану комплектацію.",
          ],
          [
            "02",
            "ВИБІР АВТО",
            "Підбираємо відповідні автомобілі та перевіряємо доступні пропозиції на аукціонах.",
          ],
          [
            "03",
            "КОНТРОЛЬ",
            "Перевіряємо історію, стан автомобіля, доступні документи та іншу інформацію перед торгами.",
          ],
          [
            "04",
            "АУКЦІОН",
            "Беремо участь в аукціоні від вашого імені та дотримуємося погодженого бюджету.",
          ],
          [
            "05",
            "ВИГРАШ",
            "Після успішної покупки організовуємо всі необхідні наступні кроки.",
          ],
          [
            "06",
            "ДОСТАВКА",
            "Забезпечуємо транспортування автомобіля та контролюємо його переміщення.",
          ],
          [
            "07",
            "ДОКУМЕНТИ",
            "Допомагаємо з документами, оформленням та передачею автомобіля клієнту.",
          ],
        ],

        included: [
          "Індивідуальний підбір автомобіля",
          "Пошук відповідних аукціонних пропозицій",
          "Консультація перед покупкою",
          "Перевірка доступної історії",
          "Участь в аукціоні",
          "Призначення ставки відповідно до вашого завдання",
          "Комунікація та координація покупки",
          "Організація та контроль доставки",
          "Адміністративна підтримка",
          "Координація процесу отримання автомобіля",
          "Індивідуальний супровід протягом усього процесу",
        ],

        why: [
          [
            "Прозорість",
            "Ви знаєте, які етапи проходить автомобіль та які витрати можуть виникнути.",
          ],
          [
            "Індивідуальний підхід",
            "Ваші побажання та бюджет є основою кожного підбору.",
          ],
          [
            "Без зайвого тиску",
            "Якщо конкретний автомобіль не відповідає вашим вимогам, ми не рекомендуємо купувати його за будь-яку ціну.",
          ],
          [
            "Граємо далі",
            "Не виграли з першого разу? Продовжуємо пошук та беремо участь у наступних торгах.",
          ],
          [
            "Від вибору до передачі",
            "Допомагаємо пройти весь процес — від пошуку та аукціону до доставки й передачі автомобіля.",
          ],
        ],
      }
    : isEn
      ? {
          heroTitle: "CAR IMPORT FROM AUCTIONS",
          heroText:
            "We find, purchase and deliver vehicles from European auctions.",

          classic: "Classic vehicles",
          electric: "Electric vehicles",
          classicFuel: "PETROL • DIESEL • HYBRID",
          electricFuel: "BEV • ELECTRIC",
          priceClassic: "16 990 Kč",
          priceElectric: "15 990 Kč",
          priceNote:
            "Service fee for organizing the purchase and delivery of a vehicle from auction",

          continueTitle: "DIDN'T WIN?",
          continueAccent: "WE KEEP GOING.",
          continueText:
            "Didn't win the vehicle on the first attempt? We don't stop. We continue searching, analyzing new offers and participating in the next auctions.",

          individual: "INDIVIDUAL APPROACH",
          individualText:
            "Every client has different requirements. We select a vehicle according to your wishes, budget, specifications and intended use.",

          individualBottom:
            "Every offer is prepared individually.",

          process: "HOW DOES IT WORK?",
          processEyebrow: "VGTS MOBILITY",

          priceTitle: "WHAT IS INCLUDED IN OUR SERVICE",
          important: "IMPORTANT",

          importantText1:
            "The final vehicle cost depends on the auction result, vehicle price, delivery and other expenses related to the specific purchase.",

          importantText2:
            "Additional costs may apply depending on the vehicle and auction:",

          importantList: [
            "vehicle purchase price",
            "auction and administrative fees",
            "delivery from the auction location",
            "possible storage or handling fees",
            "registration and other necessary procedures",
            "other costs related to the specific vehicle",
          ],

          importantBottom:
            "Before the purchase, we always explain which costs apply to the specific vehicle.",

          contactTitle: "LOOKING FOR A CAR FROM AN AUCTION?",
          contactText:
            "Tell us what kind of car you are looking for. We will discuss your budget, requirements and find a suitable option.",

          contact: "Contact us",

          buyCar: "Cars currently available",

          whyTitle: "WHY VGTS MOBILITY?",
          whyEyebrow: "VGTS MOBILITY",

          steps: [
            [
              "01",
              "YOUR REQUEST",
              "Tell us what vehicle you are looking for — model, year, engine, budget, mileage and equipment.",
            ],
            [
              "02",
              "CAR SELECTION",
              "We find suitable vehicles and check available auction offers.",
            ],
            [
              "03",
              "CONTROL",
              "We check history, vehicle condition, available documents and other information before bidding.",
            ],
            [
              "04",
              "AUCTION",
              "We participate in the auction on your behalf and follow the agreed budget.",
            ],
            [
              "05",
              "WINNING",
              "After a successful purchase, we organize all necessary next steps.",
            ],
            [
              "06",
              "DELIVERY",
              "We arrange transportation and monitor the vehicle's movement.",
            ],
            [
              "07",
              "DOCUMENTS",
              "We help with documents, administration and vehicle handover.",
            ],
          ],

          included: [
            "Individual vehicle selection",
            "Search for suitable auction offers",
            "Pre-purchase consultation",
            "Available history check",
            "Auction participation",
            "Bid according to your requirements",
            "Communication and purchase coordination",
            "Delivery organization and control",
            "Administrative support",
            "Vehicle collection coordination",
            "Individual support throughout the process",
          ],

          why: [
            [
              "Transparency",
              "You know the stages the vehicle goes through and what costs may occur.",
            ],
            [
              "Individual approach",
              "Your requirements and budget are the basis of every selection.",
            ],
            [
              "No unnecessary pressure",
              "If a particular vehicle does not meet your requirements, we do not recommend buying it at any price.",
            ],
            [
              "We keep going",
              "Didn't win the first time? We continue searching and participate in the next auctions.",
            ],
            [
              "From selection to handover",
              "We support you throughout the process — from search and auction to delivery and handover.",
            ],
          ],
        }
      : {
          heroTitle: "DOVOZ VOZIDEL Z AUKCÍ",
          heroText:
            "Najdeme, koupíme a dovezeme vozidlo z evropských aukcí.",

          classic: "KLASICKÁ VOZIDLA",
          electric: "ELEKTROMOBILY",
          classicFuel: "BENZÍN • DIESEL • HYBRID",
          electricFuel: "BEV • ELEKTRO",
          priceClassic: "16 990 Kč",
          priceElectric: "15 990 Kč",
          priceNote:
            "Cena služby za zajištění nákupu a dovozu vozidla z aukce",

          continueTitle: "NEVYHRÁLI JSME?",
          continueAccent: "HRAJEME DÁL.",
          continueText:
            "Nepodařilo se vůz vyhrát na první pokus? Nekončíme. Pokračujeme v hledání, analyzujeme nové nabídky a účastníme se dalších aukcí.",

          individual: "INDIVIDUÁLNÍ PŘÍSTUP",
          individualText:
            "Každý klient má jiné požadavky. Vůz vybíráme podle vašich představ, rozpočtu, parametrů a způsobu využití.",

          individualBottom:
            "Každou nabídku připravujeme individuálně.",

          process: "JAK TO PROBÍHÁ?",
          processEyebrow: "VGTS MOBILITY",

          priceTitle: "CO JE V CENĚ NAŠÍ SLUŽBY",
          important: "DŮLEŽITÉ",

          importantText1:
            "Konečná cena vozidla závisí na výsledku aukce, ceně samotného vozidla, dopravě a dalších nákladech spojených s konkrétním nákupem.",

          importantText2:
            "K ceně služby mohou být podle konkrétního vozidla účtovány další náklady, například:",

          importantList: [
            "samotná vydražená cena vozidla",
            "aukční a administrativní poplatky",
            "doprava z místa aukce",
            "případné skladné nebo manipulační poplatky",
            "registrace a další úkony spojené s uvedením vozidla do provozu",
            "případné další náklady vyplývající z konkrétní aukce nebo vozidla",
          ],

          importantBottom:
            "Před nákupem vám vždy vysvětlíme, jaké náklady se na konkrétní vozidlo vztahují.",

          contactTitle: "CHCETE AUTO Z AUKCE?",
          contactText:
            "Napište nám, jaké auto hledáte. Probereme váš rozpočet, požadavky a najdeme vhodné řešení.",

          contact: "Kontaktovat nás",

          buyCar: "Vozy skladem",

          whyTitle: "PROČ VGTS MOBILITY?",
          whyEyebrow: "VGTS MOBILITY",

          steps: [
            [
              "01",
              "VÁŠ ZÁJEM",
              "Řeknete nám, jaký vůz hledáte — model, rok, motor, rozpočet, nájezd a výbavu.",
            ],
            [
              "02",
              "VÝBĚR VOZU",
              "Vyhledáme vhodné vozy a prověříme dostupné nabídky na aukcích.",
            ],
            [
              "03",
              "KONTROLA",
              "Prověříme historii, stav vozidla, dostupné dokumenty a další informace před aukcí.",
            ],
            [
              "04",
              "AUKCE",
              "Zúčastníme se aukce vaším jménem a dodržujeme předem odsouhlasený rozpočet.",
            ],
            [
              "05",
              "VÝHRA",
              "Po úspěšném nákupu zajistíme všechny potřebné další kroky.",
            ],
            [
              "06",
              "DOPRAVA",
              "Zorganizujeme přepravu vozidla a kontrolujeme jeho cestu.",
            ],
            [
              "07",
              "DOKUMENTY",
              "Pomůžeme s dokumenty, administrativou a předáním vozu.",
            ],
          ],

          included: [
            "Individuální výběr vozidla",
            "Vyhledávání vhodných aukčních nabídek",
            "Konzultace před nákupem",
            "Kontrola dostupné historie",
            "Účast na aukci",
            "Příprava nabídky podle vašeho zadání",
            "Komunikace a koordinace nákupu",
            "Organizace a kontrola dopravy",
            "Administrativní podpora",
            "Koordinace převzetí vozidla",
            "Individuální přístup po celou dobu procesu",
          ],

          why: [
            [
              "TRANSPARENTNOST",
              "Znáte všechny kroky a náklady, které se k nákupu vztahují.",
            ],
            [
              "INDIVIDUÁLNÍ PŘÍSTUP",
              "Vaše požadavky a rozpočet jsou základem každého výběru.",
            ],
            [
              "BEZ ZBYTEČNÉHO TLAKU",
              "Když se aukce nevyvíjí dobře, nepřihazujeme za každou cenu.",
            ],
            [
              "HRAJEME DÁL",
              "Nevyhráli jsme dnes? Zítra hledáme další nabídku.",
            ],
            [
              "OD VÝBĚRU PO PŘEDÁNÍ",
              "Pomůžeme vám s celým procesem nákupu, převzetí a dovozu.",
            ],
          ],
        };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#05070d] text-white">
        {/* HERO */}
        <section className="relative border-b border-white/10 bg-[#05070d] pt-[68px] sm:pt-[72px]">
          <div className="mx-auto max-w-[1250px] px-3 sm:px-5 lg:px-6">
            <div className="relative overflow-hidden rounded-b-3xl border-x border-b border-white/10 bg-[#07101b] shadow-2xl">
              <div className="relative aspect-[1.55/1] w-full sm:aspect-[2.05/1]">
                <Image
                  src="/images/price-hero.png"
                  alt={content.heroTitle}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 95vw, 1250px"
                  className="object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#03060b]/90 via-[#03060b]/35 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#05070d]/95 via-[#05070d]/35 to-transparent sm:h-60" />

                {/* HERO TEXT */}
                <div className="absolute left-5 top-[4%] max-w-[570px] sm:left-7 sm:top-[10%] lg:left-9 lg:top-[3%]">
                  <div className="mb-2.5 inline-flex items-center rounded-full border border-blue-400/30 bg-[#07101b]/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[2.5px] text-blue-300 backdrop-blur-md sm:mb-3 sm:text-[10px]">
                    VGTS MOBILITY
                  </div>

                  <h1
                    className="
                      max-w-[560px]
                      bg-gradient-to-r
                      from-white
                      via-blue-200
                      to-lime-400
                      bg-clip-text
                      text-2xl
                      font-black
                      uppercase
                      leading-[0.95]
                      tracking-tight
                      text-transparent
                      sm:text-4xl
                      lg:text-5xl
                      xl:text-6xl
                    "
                  >
                    {content.heroTitle}
                  </h1>

                  <p className="mt-2.5 max-w-[500px] text-xs leading-5 text-white/80 sm:mt-4 sm:text-sm sm:leading-6 lg:text-base">
                    {content.heroText}
                  </p>
                </div>

                {/* CONTACT BUTTONS */}
                <div
                  className="
                    absolute
                    bottom-4
                    left-5
                    flex
                    flex-wrap
                    gap-2
                    sm:bottom-6
                    sm:left-7
                    sm:gap-2.5
                    lg:bottom-8
                    lg:left-9
                  "
                >
                  <a
                    href="tel:+420739974155"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-lime-400
                      px-3.5
                      py-2
                      text-xs
                      font-black
                      text-black
                      shadow-xl
                      transition
                      hover:scale-[1.03]
                      hover:bg-lime-300
                      sm:px-5
                      sm:py-2.5
                      sm:text-sm
                    "
                  >
                    <Phone size={16} />
                    +420 739 974 155
                  </a>

                  <a
                    href="https://wa.me/420703695936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-white/20
                      bg-[#080b12]/85
                      px-3.5
                      py-2
                      text-xs
                      font-bold
                      text-white
                      shadow-xl
                      backdrop-blur-md
                      transition
                      hover:border-lime-400/60
                      hover:bg-[#10151f]
                      sm:px-5
                      sm:py-2.5
                      sm:text-sm
                    "
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICES */}
        <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
          <div className="grid gap-3 md:grid-cols-2">
            <PriceCard
              title={content.classic}
              subtitle={content.classicFuel}
              price={content.priceClassic}
              note={content.priceNote}
              accent="blue"
              icon={CarFront}
            />

            <PriceCard
              title={content.electric}
              subtitle={content.electricFuel}
              price={content.priceElectric}
              note={content.priceNote}
              accent="violet"
              icon={CircleDollarSign}
            />
          </div>
        </section>

        {/* CONTINUE + INDIVIDUAL */}
        <section className="mx-auto max-w-7xl px-4 pb-5 sm:px-6 lg:px-8">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="min-h-[180px] rounded-2xl border border-lime-400/20 bg-[#0b1018] p-5 sm:p-6">
              <div className="flex h-full items-center gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400">
                  <Gavel size={52} strokeWidth={1.4} />
                </div>

                <div>
                  <h2 className="text-2xl font-black leading-none sm:text-3xl lg:text-4xl">
                    {content.continueTitle}
                    <br />
                    <span className="text-lime-400">
                      {content.continueAccent}
                    </span>
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {content.continueText}
                  </p>
                </div>
              </div>
            </div>

            <div className="min-h-[180px] rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.04] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <UserRound
                  size={32}
                  strokeWidth={1.7}
                  className="shrink-0 text-yellow-400"
                />

                <h2 className="text-xl font-black text-yellow-400 sm:text-2xl">
                  {content.individual}
                </h2>
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base">
                {content.individualText}
              </p>

              <p className="mt-4 text-sm font-black text-yellow-400">
                {content.individualBottom}
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
          <SectionTitle
            eyebrow={content.processEyebrow}
            title={content.process}
          />

          <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#0b1018] md:grid-cols-7">
            {content.steps.map(([number, title, text], index) => (
              <ProcessStep
                key={number}
                number={number}
                title={title}
                text={text}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* INCLUDED + IMPORTANT */}
        <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
          <div className="grid items-stretch gap-3 lg:grid-cols-2">
            {/* INCLUDED */}
            <div className="rounded-2xl border border-white/10 bg-[#0b1018] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <Wallet
                  size={28}
                  strokeWidth={1.7}
                  className="text-lime-400"
                />

                <h2 className="text-xl font-black sm:text-2xl">
                  {content.priceTitle}
                </h2>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {content.included.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-5 text-gray-300"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-lime-400"
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IMPORTANT */}
            <div className="flex min-h-[100%] flex-col rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.035] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <FileCheck2
                  size={30}
                  strokeWidth={1.7}
                  className="text-yellow-400"
                />

                <h2 className="text-2xl font-black text-yellow-400 sm:text-3xl">
                  {content.important}
                </h2>
              </div>

              <div className="mt-5 space-y-4 text-[15px] leading-6 text-gray-300 sm:text-base sm:leading-7">
                <p>{content.importantText1}</p>

                <p>{content.importantText2}</p>
              </div>

              <ul className="mt-4 space-y-2.5">
                {content.importantList.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px] leading-6 text-gray-400"
                  >
                    <span className="mt-1 text-yellow-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <div className="flex items-start gap-3 rounded-xl border border-lime-400/20 bg-black/20 p-4">
                  <ShieldCheck
                    size={22}
                    className="mt-0.5 shrink-0 text-lime-400"
                  />

                  <p className="text-[15px] font-semibold leading-6 text-gray-300">
                    {content.importantBottom}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
          <div className="relative overflow-hidden rounded-2xl border border-lime-400/20 bg-[#0b1018] p-5 sm:p-6 lg:max-w-[calc(50%-6px)] lg:p-7">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime-400/10 blur-3xl" />

            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-lime-400">
                VGTS MOBILITY
              </p>

              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                {content.contactTitle}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {content.contactText}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="tel:+420739974155"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-lime-400
                    px-5
                    py-3
                    text-sm
                    font-black
                    text-black
                    transition
                    hover:scale-[1.02]
                    hover:bg-lime-300
                  "
                >
                  <Phone size={17} />
                  {content.contact}
                </a>

                <Link
                  href={`/${locale}/cars`}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    px-5
                    py-3
                    text-sm
                    font-bold
                    transition
                    hover:border-lime-400/50
                  "
                >
                  {content.buyCar}
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="mx-auto max-w-7xl px-4 pb-10 pt-5 sm:px-6 lg:px-8 lg:pb-14">
          <SectionTitle
            eyebrow={content.whyEyebrow}
            title={content.whyTitle}
          />

          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
            {content.why.map(([title, text], index) => {
              const Icon =
                index === 0
                  ? ShieldCheck
                  : index === 1
                    ? UserRound
                    : index === 2
                      ? CircleDollarSign
                      : index === 3
                        ? RefreshCw
                        : Truck;

              return (
                <div
                  key={title}
                  className="
                    min-h-[190px]
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#0b1018]
                    p-5
                    transition
                    hover:border-lime-400/30
                    hover:bg-[#0d131d]
                  "
                >
                  <Icon
                    className="text-blue-400"
                    size={38}
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-5 text-sm font-black uppercase leading-tight text-white">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-gray-500">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-4">
      <p className="text-[10px] font-bold uppercase tracking-[3px] text-lime-400">
        {eyebrow}
      </p>

      <h2 className="mt-1 text-2xl font-black uppercase sm:text-3xl lg:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  text,
  index,
}: {
  number: string;
  title: string;
  text: string;
  index: number;
}) {
  const icons = [
    UserRound,
    Search,
    ShieldCheck,
    Gavel,
    Trophy,
    Truck,
    ClipboardCheck,
  ];

  const Icon = icons[index];

  return (
    <div
      className="
        relative
        min-h-[280px]
        border-b
        border-white/10
        p-5
        transition
        hover:bg-white/[0.025]
        md:border-b-0
        md:border-r
        md:last:border-r-0
      "
    >
      {/* STEP NUMBER */}
      <div className="text-2xl font-black leading-none text-blue-400">
        {number}
      </div>

      {/* ICON */}
      <div className="mt-6 flex justify-center">
        <Icon size={52} strokeWidth={1.4} className="text-blue-400" />
      </div>

      <div className="mt-6 border-t border-white/10 pt-4">
        <h3 className="text-sm font-black uppercase leading-tight text-white">
          {title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-gray-500">{text}</p>
      </div>

      {/* ARROW */}
      {index < 6 && (
        <ArrowRight
          size={20}
          className="
            absolute
            right-3
            top-5
            hidden
            text-white/20
            lg:block
          "
        />
      )}
    </div>
  );
}

function PriceCard({
  title,
  subtitle,
  price,
  note,
  accent,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  price: string;
  note: string;
  accent: "blue" | "violet";
  icon: typeof CarFront;
}) {
  const isBlue = accent === "blue";

  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        p-5
        sm:p-6
        ${
          isBlue
            ? "border-blue-500/40 bg-blue-500/[0.035]"
            : "border-violet-500/40 bg-violet-500/[0.035]"
        }
      `}
    >
      {/* DECORATION */}
      <div
        className={`
          absolute
          -right-8
          -top-8
          h-32
          w-32
          rounded-full
          blur-3xl
          ${isBlue ? "bg-blue-500/10" : "bg-violet-500/10"}
        `}
      />

      <div className="relative flex items-center gap-4">
        <div
          className={`
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-xl
            ${
              isBlue
                ? "bg-blue-500/10 text-blue-400"
                : "bg-violet-500/10 text-violet-400"
            }
          `}
        >
          <Icon size={32} strokeWidth={1.6} />
        </div>

        <div>
          <p
            className={`
              text-xs
              font-black
              uppercase
              tracking-[2px]
              ${isBlue ? "text-blue-400" : "text-violet-400"}
            `}
          >
            {title}
          </p>

          <p className="mt-1 text-xs font-semibold text-gray-300">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="relative mt-4">
        <div className="text-4xl font-black tracking-tight text-lime-400 sm:text-5xl">
          {price}
        </div>

        <p className="mt-1 max-w-xl text-[10px] leading-4 text-gray-500">
          {note}
        </p>
      </div>
    </div>
  );
}