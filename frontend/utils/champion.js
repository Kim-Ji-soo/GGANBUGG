export default function championList() {
  const championlist = [
    {
      key: "86",
      passive: "Garen_Passive",
      Q: "GarenQ",
      W: "GarenW",
      E: "GarenE",
      R: "GarenR",
      index: 0,
      ko: "가렌",
      en: "Garen",
    },
    {
      key: "3",
      passive: "Galio_Passive",
      Q: "GalioQ",
      W: "GalioW",
      E: "GalioE",
      R: "GalioR",
      index: 1,
      ko: "갈리오",
      en: "Galio",
    },
    {
      key: "41",
      passive: "Gangplank_Passive",
      Q: "GangplankQWrapper",
      W: "GangplankW",
      E: "GangplankE",
      R: "GangplankR",
      index: 2,
      ko: "갱플랭크",
      en: "Gangplank",
    },
    {
      key: "79",
      passive: "GragasPassiveHeal",
      Q: "GragasQ",
      W: "GragasW",
      E: "GragasE",
      R: "GragasR",
      index: 3,
      ko: "그라가스",
      en: "Gragas",
    },
    {
      key: "104",
      passive: "GravesTrueGrit",
      Q: "GravesQLineSpell",
      W: "GravesSmokeGrenade",
      E: "GravesMove",
      R: "GravesChargeShot",
      index: 4,
      ko: "그레이브즈",
      en: "Graves",
    },
    {
      key: "887",
      passive: "Gwen_Passive",
      Q: "GwenQ",
      W: "GwenW",
      E: "GwenE",
      R: "GwenR",
      index: 5,
      ko: "그웬",
      en: "Gwen",
    },
    {
      key: "150",
      passive: "Gnar_Passive",
      Q: "GnarQ",
      W: "GnarW",
      E: "GnarE",
      R: "GnarR",
      index: 6,
      ko: "나르",
      en: "Gnar",
    },
    {
      key: "267",
      passive: "NamiPassive",
      Q: "NamiQ",
      W: "NamiW",
      E: "NamiE",
      R: "NamiR",
      index: 7,
      ko: "나미",
      en: "Nami",
    },
    {
      key: "75",
      passive: "Nasus_Passive",
      Q: "NasusQ",
      W: "NasusW",
      E: "NasusE",
      R: "NasusR",
      index: 8,
      ko: "나서스",
      en: "Nasus",
    },
    {
      key: "111",
      passive: "Nautilus_StaggeringBlow",
      Q: "NautilusAnchorDrag",
      W: "NautilusPiercingGaze",
      E: "NautilusSplashZone",
      R: "NautilusGrandLine",
      index: 9,
      ko: "노틸러스",
      en: "Nautilus",
    },
    {
      key: "56",
      passive: "Nocturne_UmbraBlades",
      Q: "NocturneDuskbringer",
      W: "NocturneShroudofDarkness",
      E: "NocturneUnspeakableHorror",
      R: "NocturneParanoia",
      index: 10,
      ko: "녹턴",
      en: "Nocturne",
    },
    {
      key: "20",
      passive: "NunuPassive",
      Q: "NunuQ",
      W: "NunuW",
      E: "NunuE",
      R: "NunuR",
      index: 11,
      ko: "누누와 윌럼프",
      en: "Nunu",
    },
    {
      key: "76",
      passive: "Nidalee_Passive",
      Q: "JavelinToss",
      W: "Bushwhack",
      E: "PrimalSurge",
      R: "AspectOfTheCougar",
      index: 12,
      ko: "니달리",
      en: "Nidalee",
    },
    {
      key: "518",
      passive: "Neeko_P",
      Q: "NeekoQ",
      W: "NeekoW",
      E: "NeekoE",
      R: "NeekoR",
      index: 13,
      ko: "니코",
      en: "Neeko",
    },
    {
      key: "895",
      passive: "NIlahP.Nilah",
      Q: "NilahQ",
      W: "NilahW",
      E: "NilahE",
      R: "NilahR",
      index: 14,
      ko: "닐라",
      en: "Nilah",
    },
    {
      key: "122",
      passive: "Darius_Icon_Hemorrhage",
      Q: "DariusCleave",
      W: "DariusNoxianTacticsONH",
      E: "DariusAxeGrabCone",
      R: "DariusExecute",
      index: 15,
      ko: "다리우스",
      en: "Darius",
    },
    {
      key: "131",
      passive: "Diana_Passive_LunarBlade",
      Q: "DianaQ",
      W: "DianaOrbs",
      E: "DianaTeleport",
      R: "DianaR",
      index: 16,
      ko: "다이애나",
      en: "Diana",
    },
    {
      key: "119",
      passive: "Draven_passive",
      Q: "DravenSpinning",
      W: "DravenFury",
      E: "DravenDoubleShot",
      R: "DravenRCast",
      index: 17,
      ko: "드레이븐",
      en: "Draven",
    },
    {
      key: "13",
      passive: "Ryze_P",
      Q: "RyzeQWrapper",
      W: "RyzeW",
      E: "RyzeE",
      R: "RyzeR",
      index: 18,
      ko: "라이즈",
      en: "Ryze",
    },
    {
      key: "497",
      passive: "Rakan_P",
      Q: "RakanQ",
      W: "RakanW",
      E: "RakanE",
      R: "RakanR",
      index: 19,
      ko: "라칸",
      en: "Rakan",
    },
    {
      key: "33",
      passive: "Armordillo_ScavengeArmor",
      Q: "PowerBall",
      W: "DefensiveBallCurl",
      E: "PuncturingTaunt",
      R: "Tremors2",
      index: 20,
      ko: "람머스",
      en: "Rammus",
    },
    {
      key: "99",
      passive: "LuxIlluminatingFraulein",
      Q: "LuxLightBinding",
      W: "LuxPrismaticWave",
      E: "LuxLightStrikeKugel",
      R: "LuxR",
      index: 21,
      ko: "럭스",
      en: "Lux",
    },
    {
      key: "68",
      passive: "Rumble_JunkyardTitan1",
      Q: "RumbleFlameThrower",
      W: "RumbleShield",
      E: "RumbleGrenade",
      R: "RumbleCarpetBomb",
      index: 22,
      ko: "럼블",
      en: "Rumble",
    },
    {
      key: "888",
      passive: "Renata_P.Renata",
      Q: "RenataQ",
      W: "RenataW",
      E: "RenataE",
      R: "RenataR",
      index: 23,
      ko: "레나타 글라스크",
      en: "Renata",
    },
    {
      key: "58",
      passive: "Renekton_Passive",
      Q: "RenektonCleave",
      W: "RenektonPreExecute",
      E: "RenektonSliceAndDice",
      R: "RenektonReignOfTheTyrant",
      index: 24,
      ko: "레넥톤",
      en: "Renekton",
    },
    {
      key: "89",
      passive: "LeonaSunlight",
      Q: "LeonaShieldOfDaybreak",
      W: "LeonaSolarBarrier",
      E: "LeonaZenithBlade",
      R: "LeonaSolarFlare",
      index: 25,
      ko: "레오나",
      en: "Leona",
    },
    {
      key: "421",
      passive: "RekSai_Passive",
      Q: "RekSaiQ",
      W: "RekSaiW",
      E: "RekSaiE",
      R: "RekSaiRWrapper",
      index: 26,
      ko: "렉사이",
      en: "RekSai",
    },
    {
      key: "526",
      passive: "RellP",
      Q: "RellQ",
      W: "RellW_Dismount",
      E: "RellE",
      R: "RellR",
      index: 27,
      ko: "렐",
      en: "Rell",
    },
    {
      key: "107",
      passive: "Rengar_P",
      Q: "RengarQ",
      W: "RengarW",
      E: "RengarE",
      R: "RengarR",
      index: 28,
      ko: "렝가",
      en: "Rengar",
    },
    {
      key: "236",
      passive: "Lucian_Passive",
      Q: "LucianQ",
      W: "LucianW",
      E: "LucianE",
      R: "LucianR",
      index: 29,
      ko: "루시안",
      en: "Lucian",
    },
    {
      key: "117",
      passive: "Lulu_PixFaerieCompanion",
      Q: "LuluQ",
      W: "LuluW",
      E: "LuluE",
      R: "LuluR",
      index: 30,
      ko: "룰루",
      en: "Lulu",
    },
    {
      key: "7",
      passive: "LeBlancP",
      Q: "LeblancQ",
      W: "LeblancW",
      E: "LeblancE",
      R: "LeblancR",
      index: 31,
      ko: "르블랑",
      en: "Leblanc",
    },
    {
      key: "64",
      passive: "LeeSinPassive",
      Q: "BlindMonkQOne",
      W: "BlindMonkWOne",
      E: "BlindMonkEOne",
      R: "BlindMonkRKick",
      index: 32,
      ko: "리신",
      en: "LeeSin",
    },
    {
      key: "92",
      passive: "RivenRunicBlades",
      Q: "RivenTriCleave",
      W: "RivenMartyr",
      E: "RivenFeint",
      R: "RivenFengShuiEngine",
      index: 33,
      ko: "리븐",
      en: "Riven",
    },
    {
      key: "127",
      passive: "Lissandra_Passive",
      Q: "LissandraQ",
      W: "LissandraW",
      E: "LissandraE",
      R: "LissandraR",
      index: 34,
      ko: "리산드라",
      en: "Lissandra",
    },
    {
      key: "876",
      passive: "Lillia_Icon_Passive",
      Q: "LilliaQ",
      W: "LilliaW",
      E: "LilliaE",
      R: "LilliaR",
      index: 35,
      ko: "릴리아",
      en: "Lillia",
    },
    {
      key: "11",
      passive: "MasterYi_Passive1",
      Q: "AlphaStrike",
      W: "Meditate",
      E: "WujuStyle",
      R: "Highlander",
      index: 36,
      ko: "마스터 이",
      en: "MasterYi",
    },
    {
      key: "57",
      passive: "Maokai_Passive",
      Q: "MaokaiQ",
      W: "MaokaiW",
      E: "MaokaiE",
      R: "MaokaiR",
      index: 37,
      ko: "마오카이",
      en: "Maokai",
    },
    {
      key: "90",
      passive: "Malzahar_Passive",
      Q: "MalzaharQ",
      W: "MalzaharW",
      E: "MalzaharE",
      R: "MalzaharR",
      index: 38,
      ko: "말자하",
      en: "Malzahar",
    },
    {
      key: "54",
      passive: "Malphite_GraniteShield",
      Q: "SeismicShard",
      W: "Obduracy",
      E: "Landslide",
      R: "UFSlash",
      index: 39,
      ko: "말파이트",
      en: "Malphite",
    },
    {
      key: "82",
      passive: "MordekaiserPassive",
      Q: "MordekaiserQ",
      W: "MordekaiserW",
      E: "MordekaiserE",
      R: "MordekaiserR",
      index: 40,
      ko: "모데카이저",
      en: "Mordekaiser",
    },
    {
      key: "25",
      passive: "FallenAngel_Empathize",
      Q: "MorganaQ",
      W: "MorganaW",
      E: "MorganaE",
      R: "MorganaR",
      index: 41,
      ko: "모르가나",
      en: "Morgana",
    },
    {
      key: "36",
      passive: "DrMundo_P.Dr_Mundo_VGU",
      Q: "DrMundoQ",
      W: "DrMundoW",
      E: "DrMundoE",
      R: "DrMundoR",
      index: 42,
      ko: "문도 박사",
      en: "DrMundo",
    },
    {
      key: "21",
      passive: "MissFortune_W",
      Q: "MissFortuneRicochetShot",
      W: "MissFortuneViciousStrikes",
      E: "MissFortuneScattershot",
      R: "MissFortuneBulletTime",
      index: 43,
      ko: "미스 포츈",
      en: "MissFortune",
    },
    {
      key: "432",
      passive: "Bard_Passive",
      Q: "BardQ",
      W: "BardW",
      E: "BardE",
      R: "BardR",
      index: 44,
      ko: "바드",
      en: "Bard",
    },
    {
      key: "110",
      passive: "VarusPassive",
      Q: "VarusQ",
      W: "VarusW",
      E: "VarusE",
      R: "VarusR",
      index: 45,
      ko: "바루스",
      en: "Varus",
    },
    {
      key: "254",
      passive: "ViPassive",
      Q: "ViQ",
      W: "ViW",
      E: "ViE",
      R: "ViR",
      index: 46,
      ko: "바이",
      en: "Vi",
    },
    {
      key: "45",
      passive: "VeigarEntropy",
      Q: "VeigarBalefulStrike",
      W: "VeigarDarkMatter",
      E: "VeigarEventHorizon",
      R: "VeigarR",
      index: 47,
      ko: "베이가",
      en: "Veigar",
    },
    {
      key: "67",
      passive: "Vayne_NightHunter",
      Q: "VayneTumble",
      W: "VayneSilveredBolts",
      E: "VayneCondemn",
      R: "VayneInquisition",
      index: 48,
      ko: "베인",
      en: "Vayne",
    },
    {
      key: "711",
      passive: "Icons_Vex_Passive.S_Yordle",
      Q: "VexQ",
      W: "VexW",
      E: "VexE",
      R: "VexR",
      index: 49,
      ko: "벡스",
      en: "Vex",
    },
    {
      key: "200",
      passive: "Belveth_Passive.Belveth",
      Q: "BelvethQ",
      W: "BelvethW",
      E: "BelvethE",
      R: "BelvethR",
      index: 50,
      ko: "벨베스",
      en: "Belveth",
    },
    {
      key: "161",
      passive: "VelKoz_Passive",
      Q: "VelkozQ",
      W: "VelkozW",
      E: "VelkozE",
      R: "VelkozR",
      index: 51,
      ko: "벨코즈",
      en: "Velkoz",
    },
    {
      key: "106",
      passive: "Volibear_Icon_P",
      Q: "VolibearQ",
      W: "VolibearW",
      E: "VolibearE",
      R: "VolibearR",
      index: 52,
      ko: "볼리베어",
      en: "Volibear",
    },
    {
      key: "201",
      passive: "Braum_Passive",
      Q: "BraumQ",
      W: "BraumW",
      E: "BraumE",
      R: "BraumRWrapper",
      index: 53,
      ko: "브라움",
      en: "Braum",
    },
    {
      key: "63",
      passive: "BrandP",
      Q: "BrandQ",
      W: "BrandW",
      E: "BrandE",
      R: "BrandR",
      index: 54,
      ko: "브랜드",
      en: "Brand",
    },
    {
      key: "8",
      passive: "VladimirP",
      Q: "VladimirQ",
      W: "VladimirSanguinePool",
      E: "VladimirE",
      R: "VladimirHemoplague",
      index: 55,
      ko: "블라디미르",
      en: "Vladimir",
    },
    {
      key: "53",
      passive: "Blitzcrank_ManaBarrier",
      Q: "RocketGrab",
      W: "Overdrive",
      E: "PowerFist",
      R: "StaticField",
      index: 56,
      ko: "블리츠크랭크",
      en: "Blitzcrank",
    },
    {
      key: "234",
      passive: "Viego_Passive",
      Q: "ViegoQ",
      W: "ViegoW",
      E: "ViegoE",
      R: "ViegoR",
      index: 57,
      ko: "비에고",
      en: "Viego",
    },
    {
      key: "112",
      passive: "Viktor_Passive",
      Q: "ViktorPowerTransfer",
      W: "ViktorGravitonField",
      E: "ViktorDeathRay",
      R: "ViktorChaosStorm",
      index: 58,
      ko: "빅토르",
      en: "Viktor",
    },
    {
      key: "78",
      passive: "Poppy_Passive",
      Q: "PoppyQ",
      W: "PoppyW",
      E: "PoppyE",
      R: "PoppyR",
      index: 59,
      ko: "뽀삐",
      en: "Poppy",
    },
    {
      key: "360",
      passive: "SamiraP",
      Q: "SamiraQ",
      W: "SamiraW",
      E: "SamiraE",
      R: "SamiraR",
      index: 60,
      ko: "사미라",
      en: "Samira",
    },
    {
      key: "14",
      passive: "Sion_Passive1",
      Q: "SionQ",
      W: "SionW",
      E: "SionE",
      R: "SionR",
      index: 61,
      ko: "사이온",
      en: "Sion",
    },
    {
      key: "517",
      passive: "SylasP",
      Q: "SylasQ",
      W: "SylasW",
      E: "SylasE",
      R: "SylasR",
      index: 62,
      ko: "사일러스",
      en: "Sylas",
    },
    {
      key: "35",
      passive: "Jester_CarefulStrikes",
      Q: "Deceive",
      W: "JackInTheBox",
      E: "TwoShivPoison",
      R: "HallucinateFull",
      index: 63,
      ko: "샤코",
      en: "Shaco",
    },
    {
      key: "235",
      passive: "Senna_Passive",
      Q: "SennaQ",
      W: "SennaW",
      E: "SennaE",
      R: "SennaR",
      index: 64,
      ko: "세나",
      en: "Senna",
    },
    {
      key: "147",
      passive: "Seraphine_Passive",
      Q: "SeraphineQ",
      W: "SeraphineW",
      E: "SeraphineE",
      R: "SeraphineR",
      index: 65,
      ko: "세라핀",
      en: "Seraphine",
    },
    {
      key: "113",
      passive: "Sejuani_passive",
      Q: "SejuaniQ",
      W: "SejuaniW",
      E: "SejuaniE",
      R: "SejuaniR",
      index: 66,
      ko: "세주아니",
      en: "Sejuani",
    },
    {
      key: "875",
      passive: "Sett_P",
      Q: "SettQ",
      W: "SettW",
      E: "SettE",
      R: "SettR",
      index: 67,
      ko: "세트",
      en: "Sett",
    },
    {
      key: "37",
      passive: "Sona_Passive_Charged",
      Q: "SonaQ",
      W: "SonaW",
      E: "SonaE",
      R: "SonaR",
      index: 68,
      ko: "소나",
      en: "Sona",
    },
    {
      key: "16",
      passive: "Soraka_Passive",
      Q: "SorakaQ",
      W: "SorakaW",
      E: "SorakaE",
      R: "SorakaR",
      index: 69,
      ko: "소라카",
      en: "Soraka",
    },
    {
      key: "98",
      passive: "Shen_Passive",
      Q: "ShenQ",
      W: "ShenW",
      E: "ShenE",
      R: "ShenR",
      index: 70,
      ko: "쉔",
      en: "Shen",
    },
    {
      key: "102",
      passive: "ShyvanaReinforcedScales",
      Q: "ShyvanaDoubleAttack",
      W: "ShyvanaImmolationAura",
      E: "ShyvanaFireball",
      R: "ShyvanaTransformCast",
      index: 71,
      ko: "쉬바나",
      en: "Shyvana",
    },
    {
      key: "50",
      passive: "Swain_P",
      Q: "SwainQ",
      W: "SwainW",
      E: "SwainE",
      R: "SwainR",
      index: 72,
      ko: "스웨인",
      en: "Swain",
    },
    {
      key: "72",
      passive: "Skarner_Passive",
      Q: "SkarnerVirulentSlash",
      W: "SkarnerExoskeleton",
      E: "SkarnerFracture",
      R: "SkarnerImpale",
      index: 73,
      ko: "스카너",
      en: "Skarner",
    },
    {
      key: "15",
      passive: "Sivir_Passive",
      Q: "SivirQ",
      W: "SivirW",
      E: "SivirE",
      R: "SivirR",
      index: 74,
      ko: "시비르",
      en: "Sivir",
    },
    {
      key: "5",
      passive: "XinZhaoP",
      Q: "XinZhaoQ",
      W: "XinZhaoW",
      E: "XinZhaoE",
      R: "XinZhaoR",
      index: 75,
      ko: "신짜오",
      en: "XinZhao",
    },
    {
      key: "134",
      passive: "SyndraPassive",
      Q: "SyndraQ",
      W: "SyndraW",
      E: "SyndraE",
      R: "SyndraR",
      index: 76,
      ko: "신드라",
      en: "Syndra",
    },
    {
      key: "27",
      passive: "Singed_Passive",
      Q: "PoisonTrail",
      W: "MegaAdhesive",
      E: "Fling",
      R: "InsanityPotion",
      index: 77,
      ko: "신지드",
      en: "Singed",
    },
    {
      key: "412",
      passive: "Thresh_Passive",
      Q: "ThreshQ",
      W: "ThreshW",
      E: "ThreshE",
      R: "ThreshRPenta",
      index: 78,
      ko: "쓰레쉬",
      en: "Thresh",
    },
    {
      key: "103",
      passive: "Ahri_SoulEater2",
      Q: "AhriOrbofDeception",
      W: "AhriFoxFire",
      E: "AhriSeduce",
      R: "AhriTumble",
      index: 79,
      ko: "아리",
      en: "Ahri",
    },
    {
      key: "32",
      passive: "Amumu_Passive",
      Q: "BandageToss",
      W: "AuraofDespair",
      E: "Tantrum",
      R: "CurseoftheSadMummy",
      index: 80,
      ko: "아무무",
      en: "Amumu",
    },
    {
      key: "136",
      passive: "AurelionSol_Passive",
      Q: "AurelionSolQ",
      W: "AurelionSolW",
      E: "AurelionSolE",
      R: "AurelionSolR",
      index: 81,
      ko: "아우렐리온 솔",
      en: "AurelionSol",
    },
    {
      key: "427",
      passive: "IvernP",
      Q: "IvernQ",
      W: "IvernW",
      E: "IvernE",
      R: "IvernR",
      index: 82,
      ko: "아이번",
      en: "Ivern",
    },
    {
      key: "268",
      passive: "Azir_Passive",
      Q: "AzirQWrapper",
      W: "AzirW",
      E: "AzirEWrapper",
      R: "AzirR",
      index: 83,
      ko: "아지르",
      en: "Azir",
    },
    {
      key: "84",
      passive: "Akali_P",
      Q: "AkaliQ",
      W: "AkaliW",
      E: "AkaliE",
      R: "AkaliR",
      index: 84,
      ko: "아칼리",
      en: "Akali",
    },
    {
      key: "166",
      passive: "akshan_p.Akshan",
      Q: "AkshanQ",
      W: "AkshanW",
      E: "AkshanE",
      R: "AkshanR",
      index: 85,
      ko: "아크샨",
      en: "Akshan",
    },
    {
      key: "266",
      passive: "Aatrox_Passive",
      Q: "AatroxQ",
      W: "AatroxW",
      E: "AatroxE",
      R: "AatroxR",
      index: 86,
      ko: "아트록스",
      en: "Aatrox",
    },
    {
      key: "523",
      passive: "ApheliosP",
      Q: "ApheliosQ_ClientTooltipWrapper",
      W: "ApheliosW",
      E: "ApheliosE_ClientTooltipWrapper",
      R: "ApheliosR",
      index: 87,
      ko: "아펠리오스",
      en: "Aphelios",
    },
    {
      key: "12",
      passive: "Alistar_E",
      Q: "Pulverize",
      W: "Headbutt",
      E: "AlistarE",
      R: "FerociousHowl",
      index: 88,
      ko: "알리스타",
      en: "Alistar",
    },
    {
      key: "1",
      passive: "Annie_Passive",
      Q: "AnnieQ",
      W: "AnnieW",
      E: "AnnieE",
      R: "AnnieR",
      index: 89,
      ko: "애니",
      en: "Annie",
    },
    {
      key: "34",
      passive: "Anivia_P",
      Q: "FlashFrost",
      W: "Crystallize",
      E: "Frostbite",
      R: "GlacialStorm.png",
      index: 90,
      ko: "애니비아",
      en: "Anivia",
    },
    {
      key: "22",
      passive: "Ashe_P",
      Q: "AsheQ",
      W: "Volley",
      E: "AsheSpiritOfTheHawk",
      R: "EnchantedCrystalArrow",
      index: 91,
      ko: "애쉬",
      en: "Ashe",
    },
    {
      key: "157",
      passive: "Yasuo_Passive",
      Q: "YasuoQ1Wrapper",
      W: "YasuoW",
      E: "YasuoE",
      R: "YasuoR",
      index: 92,
      ko: "야스오",
      en: "Yasuo",
    },
    {
      key: "245",
      passive: "Ekko_P",
      Q: "EkkoQ",
      W: "EkkoW",
      E: "EkkoE",
      R: "EkkoR",
      index: 93,
      ko: "에코",
      en: "Ekko",
    },
    {
      key: "60",
      passive: "ElisePassive",
      Q: "EliseHumanQ",
      W: "EliseHumanW",
      E: "EliseHumanE",
      R: "EliseR",
      index: 94,
      ko: "엘리스",
      en: "Elise",
    },
    {
      key: "62",
      passive: "MonkeyKingStoneSkin",
      Q: "MonkeyKingDoubleAttack",
      W: "MonkeyKingDecoy",
      E: "MonkeyKingNimbus",
      R: "MonkeyKingSpinToWin",
      index: 95,
      ko: "오공",
      en: "MonkeyKing",
    },
    {
      key: "516",
      passive: "OrnnP",
      Q: "OrnnQ",
      W: "OrnnW",
      E: "OrnnE",
      R: "OrnnR",
      index: 96,
      ko: "오른",
      en: "Ornn",
    },
    {
      key: "61",
      passive: "OriannaPassive",
      Q: "OrianaIzunaCommand",
      W: "OrianaDissonanceCommand",
      E: "OrianaRedactCommand",
      R: "OrianaDetonateCommand",
      index: 97,
      ko: "오리아나",
      en: "Orianna",
    },
    {
      key: "2",
      passive: "Olaf_Passive",
      Q: "OlafAxeThrowCast",
      W: "OlafFrenziedStrikes",
      E: "OlafRecklessStrike",
      R: "OlafRagnarok",
      index: 98,
      ko: "올라프",
      en: "Olaf",
    },
    {
      key: "777",
      passive: "YonePassive",
      Q: "YoneQ",
      W: "YoneW",
      E: "YoneE",
      R: "YoneR",
      index: 99,
      ko: "요네",
      en: "Yone",
    },
    {
      key: "83",
      passive: "Yorick_P",
      Q: "YorickQ",
      W: "YorickW",
      E: "YorickE",
      R: "YorickR",
      index: 100,
      ko: "요릭",
      en: "Yorick",
    },
    {
      key: "77",
      passive: "Udyr_P.UdyrVGU",
      Q: "UdyrQ",
      W: "UdyrW",
      E: "UdyrE",
      R: "UdyrR",
      index: 101,
      ko: "우디르",
      en: "Udyr",
    },
    {
      key: "6",
      passive: "Urgot_Passive",
      Q: "UrgotQ",
      W: "UrgotW",
      E: "UrgotE",
      R: "UrgotR",
      index: 102,
      ko: "우르곳",
      en: "Urgot",
    },
    {
      key: "19",
      passive: "WarwickP",
      Q: "WarwickQ",
      W: "WarwickW",
      E: "WarwickE",
      R: "WarwickR",
      index: 103,
      ko: "워윅",
      en: "Warwick",
    },
    {
      key: "350",
      passive: "YuumiP",
      Q: "YuumiQ",
      W: "YuumiW",
      E: "YuumiE",
      R: "YuumiR",
      index: 104,
      ko: "유미",
      en: "Yuumi",
    },
    {
      key: "39",
      passive: "Irelia_Passive",
      Q: "IreliaQ",
      W: "IreliaW",
      E: "IreliaE",
      R: "IreliaR",
      index: 105,
      ko: "이렐리아",
      en: "Irelia",
    },
    {
      key: "28",
      passive: "Evelynn_Passive",
      Q: "EvelynnQ",
      W: "EvelynnW",
      E: "EvelynnE",
      R: "EvelynnR",
      index: 106,
      ko: "이블린",
      en: "Evelynn",
    },
    {
      key: "81",
      passive: "Ezreal_RisingSpellForce",
      Q: "EzrealQ",
      W: "EzrealW",
      E: "EzrealE",
      R: "EzrealR",
      index: 107,
      ko: "이즈리얼",
      en: "Ezreal",
    },
    {
      key: "420",
      passive: "Illaoi_P",
      Q: "IllaoiQ",
      W: "IllaoiW",
      E: "IllaoiE",
      R: "IllaoiR",
      index: 108,
      ko: "일라오이",
      en: "Illaoi",
    },
    {
      key: "59",
      passive: "JarvanIV_MartialCadence",
      Q: "JarvanIVDragonStrike",
      W: "JarvanIVGoldenAegis",
      E: "JarvanIVDemacianStandard",
      R: "JarvanIVCataclysm",
      index: 109,
      ko: "자르반 4세",
      en: "JarvanIV",
    },
    {
      key: "498",
      passive: "XayahPassive",
      Q: "XayahQ",
      W: "XayahW",
      E: "XayahE",
      R: "XayahR",
      index: 110,
      ko: "자야",
      en: "Xayah",
    },
    {
      key: "143",
      passive: "ZyraP",
      Q: "ZyraQ",
      W: "ZyraW",
      E: "ZyraE",
      R: "ZyraR",
      index: 111,
      ko: "자이라",
      en: "Zyra",
    },
    {
      key: "154",
      passive: "ZacPassive",
      Q: "ZacQ",
      W: "ZacW",
      E: "ZacE",
      R: "ZacR",
      index: 112,
      ko: "자크",
      en: "Zac",
    },
    {
      key: "40",
      passive: "Janna_Tailwind",
      Q: "HowlingGale",
      W: "SowTheWind",
      E: "EyeOfTheStorm",
      R: "ReapTheWhirlwind",
      index: 113,
      ko: "잔나",
      en: "Janna",
    },
    {
      key: "24",
      passive: "Armsmaster_MasterOfArms",
      Q: "JaxLeapStrike",
      W: "JaxEmpowerTwo",
      E: "JaxCounterStrike",
      R: "JaxRelentlessAssault",
      index: 114,
      ko: "잭스",
      en: "Jax",
    },
    {
      key: "238",
      passive: "shadowninja_P",
      Q: "ZedQ",
      W: "ZedW",
      E: "ZedE",
      R: "ZedR",
      index: 115,
      ko: "제드",
      en: "Zed",
    },
    {
      key: "101",
      passive: "Xerath_Passive1",
      Q: "XerathArcanopulseChargeUp",
      W: "XerathArcaneBarrage2",
      E: "XerathMageSpear",
      R: "XerathLocusOfPower2",
      index: 116,
      ko: "제라스",
      en: "Xerath",
    },
    {
      key: "221",
      passive: "ZeriP.Zeri",
      Q: "ZeriQ",
      W: "ZeriW",
      E: "ZeriE",
      R: "ZeriR",
      index: 117,
      ko: "제리",
      en: "Zeri",
    },
    {
      key: "126",
      passive: "Jayce_Passive",
      Q: "JayceToTheSkies",
      W: "JayceStaticField",
      E: "JayceThunderingBlow",
      R: "JayceStanceHtG",
      index: 118,
      ko: "제이스",
      en: "Jayce",
    },
    {
      key: "142",
      passive: "Zoe_P",
      Q: "ZoeQ",
      W: "ZoeW",
      E: "ZoeE",
      R: "ZoeR",
      index: 119,
      ko: "조이",
      en: "Zoe",
    },
    {
      key: "115",
      passive: "ZiggsPassiveReady",
      Q: "ZiggsQ",
      W: "ZiggsW",
      E: "ZiggsE",
      R: "ZiggsR",
      index: 120,
      ko: "직스",
      en: "Ziggs",
    },
    {
      key: "202",
      passive: "Jhin_P",
      Q: "JhinQ",
      W: "JhinW",
      E: "JhinE",
      R: "JhinR",
      index: 121,
      ko: "진",
      en: "Jhin",
    },
    {
      key: "26",
      passive: "Zilean_Passive",
      Q: "ZileanQ",
      W: "ZileanW",
      E: "TimeWarp",
      R: "ChronoShift",
      index: 122,
      ko: "질리언",
      en: "Zilean",
    },
    {
      key: "222",
      passive: "Jinx_Passive",
      Q: "JinxQ",
      W: "JinxW",
      E: "JinxE",
      R: "JinxR",
      index: 123,
      ko: "징크스",
      en: "Jinx",
    },
    {
      key: "31",
      passive: "GreenTerror_TailSpike",
      Q: "Rupture",
      W: "FeralScream",
      E: "VorpalSpikes",
      R: "Feast",
      index: 124,
      ko: "초가스",
      en: "Chogath",
    },
    {
      key: "43",
      passive: "Karma_Passive",
      Q: "KarmaQ",
      W: "KarmaSpiritBind",
      E: "KarmaSolKimShield",
      R: "KarmaMantra",
      index: 125,
      ko: "카르마",
      en: "Karma",
    },
    {
      key: "164",
      passive: "Camille_Passive",
      Q: "CamilleQ",
      W: "CamilleW",
      E: "CamilleE",
      R: "CamilleR",
      index: 126,
      ko: "카밀",
      en: "Camille",
    },
    {
      key: "38",
      passive: "Kassadin_Passive",
      Q: "NullLance",
      W: "NetherBlade",
      E: "ForcePulse",
      R: "RiftWalk",
      index: 127,
      ko: "카사딘",
      en: "Kassadin",
    },
    {
      key: "30",
      passive: "Karthus_Passive",
      Q: "KarthusLayWasteA1",
      W: "KarthusWallOfPain",
      E: "KarthusDefile",
      R: "KarthusFallenOne",
      index: 128,
      ko: "카서스",
      en: "Karthus",
    },
    {
      key: "69",
      passive: "Cassiopeia_Passive",
      Q: "CassiopeiaQ",
      W: "CassiopeiaW",
      E: "CassiopeiaE",
      R: "CassiopeiaR",
      index: 129,
      ko: "카시오페아",
      en: "Cassiopeia",
    },
    {
      key: "145",
      passive: "Kaisa_Passive",
      Q: "KaisaQ",
      W: "KaisaW",
      E: "KaisaE",
      R: "KaisaR",
      index: 130,
      ko: "카이사",
      en: "Kaisa",
    },
    {
      key: "121",
      passive: "Khazix_P",
      Q: "KhazixQ",
      W: "KhazixW",
      E: "KhazixE",
      R: "KhazixR",
      index: 131,
      ko: "카직스",
      en: "Khazix",
    },
    {
      key: "55",
      passive: "Katarina_Passive",
      Q: "KatarinaQ",
      W: "KatarinaW",
      E: "KatarinaEWrapper",
      R: "KatarinaR",
      index: 132,
      ko: "카타리나",
      en: "Katarina",
    },
    {
      key: "429",
      passive: "Kalista_Passive",
      Q: "KalistaMysticShot",
      W: "KalistaW",
      E: "KalistaExpungeWrapper",
      R: "KalistaRx",
      index: 133,
      ko: "칼리스타",
      en: "Kalista",
    },
    {
      key: "85",
      passive: "Kennen_Passive",
      Q: "KennenShurikenHurlMissile1",
      W: "KennenBringTheLight",
      E: "KennenLightningRush",
      R: "KennenShurikenStorm",
      index: 134,
      ko: "케넨",
      en: "Kennen",
    },
    {
      key: "51",
      passive: "Caitlyn_Headshot",
      Q: "CaitlynQ",
      W: "CaitlynW",
      E: "CaitlynE",
      R: "CaitlynR",
      index: 135,
      ko: "케이틀린",
      en: "Caitlyn",
    },
    {
      key: "141",
      passive: "Kayn_Passive_Primary",
      Q: "KaynQ",
      W: "KaynW",
      E: "KaynE",
      R: "KaynR",
      index: 136,
      ko: "케인",
      en: "Kayn",
    },
    {
      key: "10",
      passive: "Kayle_P",
      Q: "KayleQ",
      W: "KayleW",
      E: "KayleE",
      R: "KayleR",
      index: 137,
      ko: "케일",
      en: "Kayle",
    },
    {
      key: "96",
      passive: "KogMaw_IcathianSurprise",
      Q: "KogMawQ",
      W: "KogMawBioArcaneBarrage",
      E: "KogMawVoidOoze",
      R: "KogMawLivingArtillery",
      index: 138,
      ko: "코그모",
      en: "KogMaw",
    },
    {
      key: "42",
      passive: "Corki_RapidReload",
      Q: "PhosphorusBomb",
      W: "CarpetBomb",
      E: "GGun",
      R: "MissileBarrage",
      index: 139,
      ko: "코르키",
      en: "Corki",
    },
    {
      key: "133",
      passive: "Quinn_Passive",
      Q: "QuinnQ",
      W: "QuinnW",
      E: "QuinnE",
      R: "QuinnR",
      index: 140,
      ko: "퀸",
      en: "Quinn",
    },
    {
      key: "240",
      passive: "Kled_P",
      Q: "KledQ",
      W: "KledW",
      E: "KledE",
      R: "KledR",
      index: 141,
      ko: "클레드",
      en: "Kled",
    },
    {
      key: "246",
      passive: "Qiyana_Passive",
      Q: "QiyanaQ",
      W: "QiyanaW",
      E: "QiyanaE",
      R: "QiyanaR",
      index: 142,
      ko: "키아나",
      en: "Qiyana",
    },
    {
      key: "203",
      passive: "Kindred_Passive",
      Q: "KindredQ",
      W: "KindredW",
      E: "KindredEWrapper",
      R: "KindredR",
      index: 143,
      ko: "킨드레드",
      en: "Kindred",
    },
    {
      key: "44",
      passive: "Taric_Passive",
      Q: "TaricQ",
      W: "TaricW",
      E: "TaricE",
      R: "TaricR",
      index: 144,
      ko: "타릭",
      en: "Taric",
    },
    {
      key: "91",
      passive: "TalonP",
      Q: "TalonQ",
      W: "TalonW",
      E: "TalonE",
      R: "TalonR",
      index: 145,
      ko: "탈론",
      en: "Talon",
    },
    {
      key: "163",
      passive: "Taliyah_Passive",
      Q: "TaliyahQ",
      W: "TaliyahWVC",
      E: "TaliyahE",
      R: "TaliyahR",
      index: 146,
      ko: "탈리야",
      en: "Taliyah",
    },
    {
      key: "223",
      passive: "TahmKenchP",
      Q: "TahmKenchQ",
      W: "TahmKenchW",
      E: "TahmKenchE",
      R: "TahmKenchRWrapper",
      index: 147,
      ko: "탐켄치",
      en: "TahmKench",
    },
    {
      key: "48",
      passive: "Trundle_Passive",
      Q: "TrundleTrollSmash",
      W: "trundledesecrate",
      E: "TrundleCircle",
      R: "TrundlePain",
      index: 148,
      ko: "트런들",
      en: "Trundle",
    },
    {
      key: "18",
      passive: "Tristana_Passive",
      Q: "TristanaQ",
      W: "TristanaW",
      E: "TristanaE",
      R: "TristanaR",
      index: 149,
      ko: "트리스타나",
      en: "Tristana",
    },
    {
      key: "23",
      passive: "Tryndamere_Passive",
      Q: "TryndamereQ",
      W: "TryndamereW",
      E: "TryndamereE",
      R: "UndyingRage",
      index: 150,
      ko: "트린다미어",
      en: "Tryndamere",
    },
    {
      key: "4",
      passive: "Cardmaster_SealFate",
      Q: "WildCards",
      W: "PickACard",
      E: "CardmasterStack",
      R: "Destiny",
      index: 151,
      ko: "트위스티드 페이트",
      en: "TwistedFate",
    },
    {
      key: "29",
      passive: "Twitch_Passive",
      Q: "TwitchHideInShadows",
      W: "TwitchVenomCask",
      E: "TwitchExpunge",
      R: "TwitchFullAutomatic",
      index: 152,
      ko: "트위치",
      en: "Twitch",
    },
    {
      key: "17",
      passive: "Teemo_P",
      Q: "BlindingDart",
      W: "MoveQuick",
      E: "ToxicShot",
      R: "TeemoRCast",
      index: 153,
      ko: "티모",
      en: "Teemo",
    },
    {
      key: "555",
      passive: "PykePassive",
      Q: "PykeQ",
      W: "PykeW",
      E: "PykeE",
      R: "PykeR",
      index: 154,
      ko: "파이크",
      en: "Pyke",
    },
    {
      key: "80",
      passive: "Pantheon_Passive",
      Q: "PantheonQ",
      W: "PantheonW",
      E: "PantheonE",
      R: "PantheonR",
      index: 155,
      ko: "판테온",
      en: "Pantheon",
    },
    {
      key: "9",
      passive: "Fiddlesticks_Passive",
      Q: "FiddlesticksQ",
      W: "FiddlesticksW",
      E: "FiddlesticksE",
      R: "FiddlesticksR",
      index: 156,
      ko: "피들스틱",
      en: "Fiddlesticks",
    },
    {
      key: "114",
      passive: "Fiora_P",
      Q: "FioraQ",
      W: "FioraW",
      E: "FioraE",
      R: "FioraR",
      index: 157,
      ko: "피오라",
      en: "Fiora",
    },
    {
      key: "105",
      passive: "Fizz_P",
      Q: "FizzQ",
      W: "FizzW",
      E: "FizzE",
      R: "FizzR",
      index: 158,
      ko: "피즈",
      en: "Fizz",
    },
    {
      key: "74",
      passive: "Heimerdinger_Passive",
      Q: "HeimerdingerQ",
      W: "HeimerdingerW",
      E: "HeimerdingerE",
      R: "HeimerdingerR",
      index: 159,
      ko: "하이머딩거",
      en: "Heimerdinger",
    },
    {
      key: "120",
      passive: "Hecarim_Passive",
      Q: "HecarimRapidSlash",
      W: "HecarimW",
      E: "HecarimRamp",
      R: "HecarimUlt",
      index: 160,
      ko: "헤카림",
      en: "Hecarim",
    },
  ];
  return championlist;
}
