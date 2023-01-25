const data = [
  {
    id: 150160220,
    stacja: 'BARDO',
  },
  {
    id: 150170050,
    stacja: 'BIAŁA NYSKA',
  },
  {
    id: 150160250,
    stacja: 'BIAŁOBRZEZIE',
  },
  {
    id: 150150130,
    stacja: 'BŁAŻKOWA',
  },
  {
    id: 151170060,
    stacja: 'BOGDAJ',
  },
  {
    id: 151160180,
    stacja: 'BOGDASZOWICE',
  },
  {
    id: 150180040,
    stacja: 'BOJANÓW',
  },
  {
    id: 150160280,
    stacja: 'BORÓW',
  },
  {
    id: 150170170,
    stacja: 'BRANICE',
  },
  {
    id: 150170090,
    stacja: 'BRZEG',
  },
  {
    id: 151160170,
    stacja: 'BRZEG DOLNY',
  },
  {
    id: 151160040,
    stacja: 'BUKOWNA',
  },
  {
    id: 150150120,
    stacja: 'BUKÓWKA',
  },
  {
    id: 150160150,
    stacja: 'BYSTRZYCA KŁODZKA',
  },
  {
    id: 149180020,
    stacja: 'CHAŁUPKI',
  },
  {
    id: 151150180,
    stacja: 'CHOJNÓW',
  },
  {
    id: 150160030,
    stacja: 'CHWALISZÓW',
  },
  {
    id: 150170220,
    stacja: 'DOBRA',
  },
  {
    id: 150170200,
    stacja: 'DOMARADZ',
  },
  {
    id: 151160050,
    stacja: 'DUNINO',
  },
  {
    id: 150160140,
    stacja: 'DZIERŻONIÓW',
  },
  {
    id: 150180220,
    stacja: 'GLIWICE',
  },
  {
    id: 151160060,
    stacja: 'GŁOGÓW',
  },
  {
    id: 150170070,
    stacja: 'GŁUCHOŁAZY',
  },
  {
    id: 150160290,
    stacja: 'GNIECHOWICE',
  },
  {
    id: 150160100,
    stacja: 'GORZUCHÓW',
  },
  {
    id: 150180080,
    stacja: 'GRABÓWKA',
  },
  {
    id: 151160190,
    stacja: 'JARNOŁTÓW',
  },
  {
    id: 150170080,
    stacja: 'JARNOŁTÓWEK',
  },
  {
    id: 151160090,
    stacja: 'JAWOR',
  },
  {
    id: 150160060,
    stacja: 'JUGOWICE',
  },
  {
    id: 150160270,
    stacja: 'KAMIENIEC ZĄBKOWICKI',
  },
  {
    id: 150160010,
    stacja: 'KAMIENNA GÓRA',
  },
  {
    id: 150180010,
    stacja: 'KAMIONKA',
  },
  {
    id: 151160220,
    stacja: 'KANCLERZOWICE',
  },
  {
    id: 150170150,
    stacja: 'KARŁOWICE',
  },
  {
    id: 150160180,
    stacja: 'KŁODZKO',
  },
  {
    id: 150170100,
    stacja: 'KOPICE',
  },
  {
    id: 151160200,
    stacja: 'KORZEŃSKO',
  },
  {
    id: 150150110,
    stacja: 'KOWARY',
  },
  {
    id: 150180030,
    stacja: 'KOŹLE',
  },
  {
    id: 150170240,
    stacja: 'KRAPKOWICE',
  },
  {
    id: 150160120,
    stacja: 'KRASKÓW',
  },
  {
    id: 150170210,
    stacja: 'KRZYWA GÓRA',
  },
  {
    id: 149180010,
    stacja: 'KRZYŻANOWICE',
  },
  {
    id: 151170010,
    stacja: 'KRZYŻANOWICE',
  },
  {
    id: 150160040,
    stacja: 'KUDOWA-ZDRÓJ-ZAKRZE',
  },
  {
    id: 150160230,
    stacja: 'LĄDEK-ZDRÓJ',
  },
  {
    id: 150180070,
    stacja: 'LENARTOWICE',
  },
  {
    id: 150160070,
    stacja: 'LUBACHÓW',
  },
  {
    id: 149180030,
    stacja: 'ŁAZISKA',
  },
  {
    id: 150160090,
    stacja: 'ŁAŻANY',
  },
  {
    id: 151170040,
    stacja: 'ŁĄKI',
  },
  {
    id: 150150090,
    stacja: 'ŁOMNICA',
  },
  {
    id: 151160150,
    stacja: 'MALCZYCE',
  },
  {
    id: 150170320,
    stacja: 'MALERZOWICE WIELKIE',
  },
  {
    id: 150160160,
    stacja: 'MIETKÓW',
  },
  {
    id: 150160190,
    stacja: 'MIĘDZYLESIE',
  },
  {
    id: 150160130,
    stacja: 'MOŚCISKO',
  },
  {
    id: 151170090,
    stacja: 'NAMYSŁÓW',
  },
  {
    id: 150170120,
    stacja: 'NIEMODLIN',
  },
  {
    id: 150170060,
    stacja: 'NYSA',
  },
  {
    id: 151170080,
    stacja: 'ODOLANÓW',
  },
  {
    id: 149180300,
    stacja: 'OLZA',
  },
  {
    id: 150170030,
    stacja: 'OŁAWA',
  },
  {
    id: 150170040,
    stacja: 'OŁAWA',
  },
  {
    id: 151160140,
    stacja: 'OSETNO',
  },
  {
    id: 151160100,
    stacja: 'PIĄTNICA',
  },
  {
    id: 150170110,
    stacja: 'PRUDNIK',
  },
  {
    id: 150180170,
    stacja: 'PYSKOWICE',
  },
  {
    id: 150180160,
    stacja: 'PYSKOWICE-DZIERŻNO',
  },
  {
    id: 150180060,
    stacja: 'RACIBÓRZ-MIEDONIA',
  },
  {
    id: 150170180,
    stacja: 'RACŁAWICE ŚLĄSKIE',
  },
  {
    id: 150180110,
    stacja: 'RUDA KOZIELSKA',
  },
  {
    id: 150180280,
    stacja: 'RYBNIK-GOTARTOWICE',
  },
  {
    id: 150180130,
    stacja: 'RYBNIK-STODOŁY',
  },
  {
    id: 151160160,
    stacja: 'RYDZYNA',
  },
  {
    id: 151160080,
    stacja: 'RZESZOTARY',
  },
  {
    id: 151160020,
    stacja: 'RZYMÓWKA',
  },
  {
    id: 150170140,
    stacja: 'SKOROGOSZCZ',
  },
  {
    id: 150160110,
    stacja: 'SZALEJÓW DOLNY',
  },
  {
    id: 151160130,
    stacja: 'ŚCINAWA',
  },
  {
    id: 151160230,
    stacja: 'ŚLĘZA',
  },
  {
    id: 150160020,
    stacja: 'ŚWIEBODZICE',
  },
  {
    id: 151150170,
    stacja: 'ŚWIERZAWA',
  },
  {
    id: 150160080,
    stacja: 'TŁUMACZÓW',
  },
  {
    id: 151170030,
    stacja: 'TRESTNO',
  },
  {
    id: 150170130,
    stacja: 'UJŚCIE NYSY KŁODZKIEJ',
  },
  {
    id: 150160210,
    stacja: 'WILKANÓW',
  },
  {
    id: 151160070,
    stacja: 'WINNICA',
  },
  {
    id: 150150100,
    stacja: 'WOJANÓW',
  },
  {
    id: 151150160,
    stacja: 'ZAGRODNO',
  },
  {
    id: 150170010,
    stacja: 'ZBOROWICE',
  },
  {
    id: 151170050,
    stacja: 'ZBYTOWA',
  },
  {
    id: 150160200,
    stacja: 'ŻELAZNO',
  },
]

export default data
