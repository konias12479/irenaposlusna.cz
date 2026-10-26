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
  formCc: 'irena.poslusna@edofinance.cz', // kopie: u Web3Forms Free nejde (Pro funkce), řešit pravidlem v Outlooku
  // Formspree (nepoužívá se; ponecháno jako záloha).
  // Dokud je prázdné, formulář odešle e-mail přes poštovního klienta návštěvníka.
  formspreeId: '',
  // Google Business Profile – po založení vložit odkaz na recenze (g.page/r/...).
  reviewsUrl: '',
  responseTime: 'do 48 hodin v pracovní dny',
  yearsExperience: '10',
};

export const nav = [
  { href: '/', label: 'Úvod' },
  { href: '/sluzby/', label: 'Služby' },
  { href: '/o-mne/', label: 'O mně' },
  { href: '/blog/', label: 'Blog' },
  { href: '/kontakt/', label: 'Kontakt' },
];

export const faq = [
  {
    q: 'Kolik stojí schůzka?',
    a: 'Nic. Žádná schůzka u mě není zpoplatněná. Platíte jen pojistné, splátku nebo vklad, pokud si něco sjednáte, a to stejně, jako kdybyste šli napřímo.',
  },
  {
    q: 'Jak jste tedy placená?',
    a: 'Provizí od pojišťovny nebo banky, a jen když si u mě něco sjednáte. U investic může být vstupní poplatek, ten vždycky řeknu předem v korunách. Přesnou informaci o odměně dostanete písemně před podpisem.',
  },
  {
    q: 'Musím na schůzce něco podepsat?',
    a: 'Ne. Návrh si vezmete domů a rozhodnete se v klidu. Když řeknete ne, je to v pořádku.',
  },
  {
    q: 'Jste nezávislá poradkyně?',
    a: 'Ne, jsem vázaná zástupkyně eDO Finance&Reality, a.s., zapsaná v registru ČNB. Přes eDO ale porovnávám nabídky řady pojišťoven a bank, ne jen jedné.',
  },
  {
    q: 'Kde a jak dlouho se sejdeme?',
    a: 'Asi na hodinu, v kanceláři v Praze 4 u metra Chodov, nebo online. Termín jde domluvit i navečer.',
  },
  {
    q: 'Mám staré životní pojištění. Mám ho zrušit?',
    a: 'Ne naslepo. Starší smlouvy mívají výhody, které nová nedá. Nejdřív ji spolu projdeme a často stačí ji jen upravit.',
  },
];
