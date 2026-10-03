// Centrální údaje webu. Změna tady se propíše všude.
export const site = {
  name: 'Irena Poslušná',
  title: 'Irena Poslušná – finanční poradkyně Praha',
  domain: 'https://irenaposlusna.cz',
  phoneDisplay: '721 551 651',
  phoneIntl: '+420721551651',
  email: 'irena.poslusna@edofinance.cz',
  emailCc: 'irena.poslusna@hotmail.com', // kopie poptávek z formuláře
  // Kancelář eDO. Schůzky probíhají u klientů, v kanceláři nebo online.
  officeName: 'Kancelář eDO Finance&Reality',
  officeStreet: 'V Parku 2335/20',
  officeCity: '148 00 Praha 4',
  officeNote: 'u metra Chodov, po předchozí domluvě',
  areaServed: 'Praha a Středočeský kraj',
  company: 'eDO Finance&Reality, a.s.',
  companyLegal: 'eDO finance, a.s., IČO 24783421',
  cnbRegistryUrl: 'https://www.cnb.cz/cnb/jerrs',
  // Doplnit po dodání od eDO compliance:
  cnbNumber: '',   // evidenční číslo v registru ČNB
  ico: '69072248', // IČO Ireny (v registru ČNB vedena jako vázaná zástupkyně od 5. 8. 2026)
  // Web3Forms (https://web3forms.com): účet irena.poslusna@hotmail.com, zprávy chodí tam, kopie na formCc.
  web3formsKey: '6fd35f06-7e28-48a2-82bf-db308fb657a2', // veřejný klíč formuláře
  formCc: 'irena.poslusna@edofinance.cz',
  // Formspree (nepoužívá se; ponecháno jako záloha).
  // Dokud je prázdné, formulář odešle e-mail přes poštovního klienta návštěvníka.
  formspreeId: '',
  // Google Business Profile – po založení vložit odkaz na recenze (g.page/r/...).
  reviewsUrl: '',
  responseTime: 'do 24 hodin v pracovní dny',
  yearsExperience: '10',
};

export const nav = [
  { href: '/', label: 'Úvod' },
  { href: '/revize-pojisteni/', label: 'Revize pojištění' },
  { href: '/sluzby/', label: 'Služby' },
  { href: '/o-mne/', label: 'O mně' },
  { href: '/blog/', label: 'Blog' },
  { href: '/kontakt/', label: 'Kontakt' },
];

export const faq = [
  {
    q: 'Kolik stojí schůzka s vámi?',
    a: 'Nic. Žádná schůzka ani konzultace u mě není zpoplatněná, ani první, ani žádná další. Platíte jen za produkty, které si případně sjednáte, tedy pojistné, splátku nebo investici, stejně jako kdybyste šli přímo do pojišťovny či banky.',
  },
  {
    q: 'Jak jste tedy placená?',
    a: 'Provizí od pojišťovny, banky nebo investiční společnosti, a to jen když si u mě něco sjednáte. U pojištění a hypoték za to nic navíc neplatíte, cena je stejná jako napřímo. U některých investic je vstupní poplatek a ten vám vždycky řeknu dopředu, v korunách. Přesnou informaci o mé odměně dostanete písemně před podpisem, ukládá mi to zákon.',
  },
  {
    q: 'Musím na první schůzce něco podepsat?',
    a: 'Nic, čím byste se k něčemu zavazovali. Pokud budeme připravovat konkrétní návrh, zákon po mně chce vyplnit s vámi krátký dotazník a sepsat záznam z jednání. Smlouvu podepisujete, až když si vše v klidu promyslíte. Když řeknete ne, je to v pořádku.',
  },
  {
    q: 'Jste nezávislá poradkyně?',
    a: 'V právním smyslu ne a nebudu vám tvrdit opak. Jsem vázaná zástupkyně společnosti eDO Finance&Reality, a.s., zapsaná v registru ČNB. V praxi to znamená, že přes eDO mohu porovnat a nabídnout produkty řady pojišťoven, bank a investičních společností, ne jen jedné firmy. Vybíráme podle toho, co sedí vám.',
  },
  {
    q: 'Jak dlouho trvá schůzka a kde se sejdeme?',
    a: 'Schůzka trvá zhruba hodinu. Sejít se můžeme v kanceláři v Praze 4 (V Parku, u metra Chodov) nebo online přes videohovor. Online zvládneme všechno včetně podpisu. Termín se dá domluvit i navečer.',
  },
  {
    q: 'Co když už mám poradce nebo bankéře?',
    a: 'Nemusíte nic rušit. Klidně mi přineste, co vám navrhli, a já se na to podívám druhým pohledem. Bankéř na pobočce nabízí produkty své banky, já porovnávám víc institucí. Někdy zjistíme, že je vše v pořádku, a i to je dobrá zpráva.',
  },
  {
    q: 'Mám staré životní pojištění. Mám ho zrušit?',
    a: 'Rozhodně ne naslepo. Zrušení staré smlouvy může stát peníze a u nové můžete kvůli zdravotnímu stavu dostat horší podmínky. Nejdřív ji spolu projdeme. Často stačí úprava stávající smlouvy a měnit se vyplatí jen tehdy, když vám to prokazatelně pomůže.',
  },
  {
    q: 'Jsem v důchodu nebo jsem OSVČ. Má pro mě smysl se ozvat?',
    a: 'Určitě. Nejčastěji sice pracuji s rodinami s dětmi, ale pravidelně pomáhám i lidem v důchodu (penze, úspory, pojištění domu a chaty, aby nebyl podpojištěný) a živnostníkům (rezerva na horší měsíce, hypotéka s nepravidelnými příjmy, spoření na penzi).',
  },
];
