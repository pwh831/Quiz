/* 경제 — 암기 데이터
 *
 * ⚠️ 출처에 관하여
 * 이 데이터는 **고등학교 「경제」 교과서에서 공통으로 다루는 표준 용어와 정의**로 채운 것이고,
 * 사용자의 학습지나 교과서를 보고 옮긴 것이 아니다. 개념과 정의는 교과서 공통이지만
 * 표현·단원 구분·시험 범위는 학교마다 다르다. 학습지를 받으면 그 문장으로 갈아 끼우고
 * 범위 밖 단원에 exam:false 를 달아야 한다. README 의 '범위와 출처'를 함께 고친다.
 *
 * 이 엔진은 "용어 ↔ 설명"을 묻는다. 기회비용·탄력성·GDP 를 **계산하는** 문제는
 * 다루지 않는다 — 계산 원리를 한 문장으로 적어 둘 뿐이다.
 *
 * features : 출제 대상 서술. 항목당 2~4개, 그 항목에만 해당하는 문장으로.
 * notes    : 심화·덧붙임. 기본 출제 제외, 홈 화면에서 켤 때만 나온다.
 * confuse  : 시험에서 가르기 어려운 짝. 오답 보기를 여기서 먼저 길어온다.
 */

const SUBJECT = {
  key:   "gyeongje",
  title: "경제",
  lead:  "희소성에서 환율까지, 경제 개념을 다섯 방향으로 외웁니다.",
  eyebrow: "2026 · 경제",
  icon:  "📈",
  file:  "경제-퀴즈.html",
  web:   "gyeongje-web.html",

  kind: "개념",
  what: "설명",
  writeHint: "괄호·띄어쓰기는 무시합니다 (국내 총생산 = 국내총생산 = GDP)",

  /* 있으나 없으나 같은 말로 치는 꼬리말 — '통화 정책' = '통화', '변동 환율 제도' = '변동 환율' */
  suffixes: ["정책", "제도"],
  /* 표기만 다른 같은 말 — 각 묶음의 첫 낱말로 모은다 */
  equiv: [["GDP", "국내총생산"], ["GNI", "국민총소득"]],

  notesLabel: "심화 내용 포함",
  notesHint:  "교과서 본문 밖의 덧붙임입니다. 기본값은 꺼짐"
};

const AREAS = [
  { id:"basic",  title:"경제생활과 경제 문제" },
  { id:"market", title:"시장과 경제 활동" },
  { id:"nation", title:"국가와 경제 활동" },
  { id:"world",  title:"세계 시장과 교역" },
  { id:"money",  title:"경제생활과 금융" }
];

const UNITS = [
  { id:"u001", no:"001", title:"경제 문제와 합리적 선택", area:"basic",  cats:["choice","system"] },
  { id:"u002", no:"002", title:"경제 주체와 경제 순환",   area:"basic",  cats:["agent"] },
  { id:"u003", no:"003", title:"수요와 공급",            area:"market", cats:["dnd","elas"] },
  { id:"u004", no:"004", title:"시장 균형과 정부 개입",   area:"market", cats:["eq","gov"] },
  { id:"u005", no:"005", title:"시장의 형태와 시장 실패", area:"market", cats:["comp","fail"] },
  { id:"u006", no:"006", title:"국민 경제 지표",         area:"nation", cats:["gdp","adas"] },
  { id:"u007", no:"007", title:"실업과 인플레이션",       area:"nation", cats:["unemp","infl"] },
  { id:"u008", no:"008", title:"경제 안정화 정책",        area:"nation", cats:["fiscal","monet"] },
  { id:"u009", no:"009", title:"무역 원리와 무역 정책",    area:"world",  cats:["trade"] },
  { id:"u010", no:"010", title:"환율과 국제 수지",        area:"world",  cats:["fx","bop"] },
  { id:"u011", no:"011", title:"금융 생활과 자산 관리",    area:"money",  cats:["fin","asset"] }
];

const CATS = [
  { key:"choice", label:"희소성과 합리적 선택", unit:"u001", kind:"개념" },
  { key:"system", label:"경제 문제와 경제 체제", unit:"u001", kind:"개념" },
  { key:"agent",  label:"경제 주체와 시장",     unit:"u002", kind:"개념" },
  { key:"dnd",    label:"수요와 공급의 법칙",   unit:"u003", kind:"개념" },
  { key:"elas",   label:"가격 탄력성",         unit:"u003", kind:"개념" },
  { key:"eq",     label:"시장 균형과 잉여",     unit:"u004", kind:"개념" },
  { key:"gov",    label:"가격 규제와 조세",     unit:"u004", kind:"제도" },
  { key:"comp",   label:"시장의 형태",         unit:"u005", kind:"시장" },
  { key:"fail",   label:"시장 실패",           unit:"u005", kind:"개념" },
  { key:"gdp",    label:"GDP와 국민 소득",     unit:"u006", kind:"지표" },
  { key:"adas",   label:"총수요와 총공급",      unit:"u006", kind:"개념" },
  { key:"unemp",  label:"고용과 실업",         unit:"u007", kind:"개념" },
  { key:"infl",   label:"물가와 인플레이션",    unit:"u007", kind:"개념" },
  { key:"fiscal", label:"재정 정책과 조세",     unit:"u008", kind:"정책" },
  { key:"monet",  label:"통화 정책",           unit:"u008", kind:"정책" },
  { key:"trade",  label:"무역 원리와 무역 정책", unit:"u009", kind:"개념" },
  { key:"fx",     label:"환율",               unit:"u010", kind:"개념" },
  { key:"bop",    label:"국제 수지",           unit:"u010", kind:"항목" },
  { key:"fin",    label:"이자와 금융",         unit:"u011", kind:"개념" },
  { key:"asset",  label:"금융 상품과 자산 관리", unit:"u011", kind:"개념" }
];

/* 이 과목은 그림 단서를 쓰지 않는다. 수요·공급 그래프를 단서로 쓰고 싶으면
 * assets/ 에 그림을 두고 여기에 등록한 뒤 항목에 media 를 단다. */
const MEDIA = {};

const ITEMS = [

  /* ── 001 경제 문제와 합리적 선택 ─────────────────────── */

  { id:"ch01", category:"choice", name:"희소성",
    features:["인간의 욕구에 비해 그것을 충족할 자원이 상대적으로 부족한 상태다",
              "모든 경제 문제가 생겨나는 근본 원인이다",
              "존재하는 양이 많더라도 원하는 사람이 더 많으면 나타난다"],
    confuse:["ch02"] },

  { id:"ch02", category:"choice", name:"희귀성",
    features:["자원의 절대적인 양이 적은 상태를 가리킨다",
              "양이 적어도 원하는 사람이 없으면 경제적 가치가 생기지 않을 수 있다"],
    confuse:["ch01"] },

  { id:"ch03", category:"choice", name:"경제재",
    features:["희소하여 대가를 치러야 얻을 수 있는 재화다",
              "시장에서 거래되며 가격이 매겨진다"],
    confuse:["ch04"] },

  { id:"ch04", category:"choice", name:"자유재",
    features:["존재량이 무한하여 대가 없이 얻을 수 있는 재화다",
              "공기처럼 희소하지 않아 가격이 매겨지지 않는다",
              "환경이 오염되면 경제재로 바뀌기도 한다"],
    confuse:["ch03"] },

  { id:"ch05", category:"choice", name:"기회비용",
    features:["어떤 선택으로 포기한 대안 가운데 가장 가치가 큰 것이다",
              "명시적 비용과 암묵적 비용을 더한 값이다",
              "합리적 선택에서 편익과 견주어야 할 진짜 비용이다"],
    confuse:["ch06","ch07","ch08","ch09"] },

  { id:"ch06", category:"choice", name:"명시적 비용",
    features:["선택을 위해 실제로 화폐를 지출한 비용이다",
              "회계 장부에 비용으로 기록된다"],
    confuse:["ch07","ch05"] },

  { id:"ch07", category:"choice", name:"암묵적 비용",
    features:["선택으로 포기한 대안의 가치 중 화폐 지출이 따르지 않는 부분이다",
              "자기 건물에서 장사하느라 받지 못한 임대료가 그 예다"],
    confuse:["ch06","ch05"] },

  { id:"ch08", category:"choice", name:"매몰 비용",
    features:["이미 지출하여 어떤 선택을 하더라도 되찾을 수 없는 비용이다",
              "합리적으로 선택하려면 고려하지 않아야 한다",
              "이미 낸 돈이 아까워 잘못된 선택을 이어 가는 오류를 부른다"],
    confuse:["ch05"] },

  { id:"ch09", category:"choice", name:"편익",
    features:["어떤 선택으로 얻게 되는 만족이나 이득이다",
              "이것이 기회비용보다 클 때 그 선택을 하는 것이 합리적이다"],
    confuse:["ch05","ch10"] },

  { id:"ch10", category:"choice", name:"합리적 선택",
    features:["여러 대안 가운데 순편익이 가장 큰 것을 고르는 일이다",
              "선택의 기준을 정하고 대안을 평가하는 과정을 거친다"],
    confuse:["ch09"] },

  { id:"ch11", category:"choice", name:"생산 가능 곡선",
    features:["주어진 자원과 기술로 최대한 생산할 수 있는 두 재화의 조합을 이은 선이다",
              "이 선이 바깥쪽으로 옮겨 가면 생산 능력이 커진 것이다",
              "선 안쪽의 점은 자원이 다 쓰이지 않은 비효율적인 상태다"] },

  { id:"ch12", category:"choice", name:"인센티브", aliases:["유인","경제적 유인"],
    features:["사람들이 어떤 행동을 하도록 부추기는 요인이다",
              "보상처럼 긍정적인 것도 있고 벌금처럼 부정적인 것도 있다"] },

  { id:"ch13", category:"choice", name:"효율성",
    features:["최소의 비용으로 최대의 만족을 얻는 정도를 말한다",
              "주어진 자원으로 얼마나 많이 생산하느냐를 따질 때 쓰는 기준이다"],
    confuse:["ch14"] },

  { id:"ch14", category:"choice", name:"형평성",
    features:["경제적 성과가 사회 구성원에게 공평하게 나누어졌는지를 따지는 기준이다",
              "소득 재분배 정책이 앞세우는 가치다"],
    confuse:["ch13"] },

  { id:"sy01", category:"system", name:"무엇을 얼마나 생산할 것인가", aliases:["무엇을 생산할 것인가"],
    features:["생산할 재화와 서비스의 종류와 수량을 정하는 문제다",
              "한정된 자원을 어느 곳에 배분할지를 묻는다"],
    confuse:["sy02","sy03"] },

  { id:"sy02", category:"system", name:"어떻게 생산할 것인가",
    features:["생산 방법을 정하는 문제다",
              "노동과 자본 같은 생산 요소를 어떻게 조합할지를 묻는다"],
    confuse:["sy01","sy03"] },

  { id:"sy03", category:"system", name:"누구를 위하여 생산할 것인가", aliases:["누구를 위해 생산할 것인가"],
    features:["생산물을 누구에게 얼마나 나눌지를 정하는 문제다",
              "소득 분배의 문제라고도 부른다"],
    confuse:["sy01","sy02"] },

  { id:"sy04", category:"system", name:"전통 경제 체제",
    features:["관습과 전통에 따라 경제 문제를 해결한다",
              "변화가 느리고 자급자족의 성격이 강하다"],
    confuse:["sy05","sy06"] },

  { id:"sy05", category:"system", name:"계획 경제 체제",
    features:["정부의 명령과 계획에 따라 경제 문제를 해결한다",
              "생산 수단을 국가가 소유하는 것이 원칙이다",
              "개인의 경제적 유인이 약해 효율성이 떨어지기 쉽다"],
    confuse:["sy06","sy07","sy04"] },

  { id:"sy06", category:"system", name:"시장 경제 체제",
    features:["시장 가격을 신호로 삼아 경제 문제를 해결한다",
              "사유 재산권과 경제 활동의 자유를 보장한다",
              "빈부 격차가 커지기 쉽다는 한계가 있다"],
    confuse:["sy05","sy07","sy04"] },

  { id:"sy07", category:"system", name:"혼합 경제 체제",
    features:["시장 경제를 바탕으로 정부가 일부 경제 활동에 개입한다",
              "오늘날 대부분의 나라가 택하고 있는 방식이다"],
    confuse:["sy06","sy05"] },

  { id:"sy08", category:"system", name:"보이지 않는 손",
    features:["애덤 스미스가 시장 가격의 조절 기능을 빗대어 쓴 말이다",
              "개인이 자기 이익을 좇아도 결과적으로 사회 전체의 이익이 늘어난다는 뜻을 담는다"],
    notes:["『국부론』(1776)에서 쓴 표현이다"] },

  /* ── 002 경제 주체와 경제 순환 ─────────────────────── */

  { id:"ag01", category:"agent", name:"가계",
    features:["소비 활동의 주체다",
              "생산 요소를 제공하고 그 대가로 소득을 얻는다",
              "효용을 최대로 하는 것을 목표로 한다"],
    confuse:["ag02","ag03"] },

  { id:"ag02", category:"agent", name:"기업",
    features:["생산 활동의 주체다",
              "생산 요소 시장에서 노동과 자본을 사들인다",
              "이윤을 최대로 하는 것을 목표로 한다"],
    confuse:["ag01","ag03"] },

  { id:"ag03", category:"agent", name:"정부",
    features:["재정 활동의 주체다",
              "세금을 거두어 공공재를 공급한다",
              "사회 전체의 후생을 최대로 하는 것을 목표로 한다"],
    confuse:["ag01","ag02","ag04"] },

  { id:"ag04", category:"agent", name:"외국",
    features:["무역 활동의 주체다",
              "국내 경제 주체와 재화·서비스·자본을 주고받는다"],
    confuse:["ag03"] },

  { id:"ag05", category:"agent", name:"생산물 시장",
    features:["재화와 서비스가 거래되는 시장이다",
              "가계가 수요자, 기업이 공급자가 된다"],
    confuse:["ag06"] },

  { id:"ag06", category:"agent", name:"생산 요소 시장",
    features:["노동·토지·자본이 거래되는 시장이다",
              "기업이 수요자, 가계가 공급자가 된다",
              "여기서 가계가 받은 임금·지대·이자가 소득이 된다"],
    confuse:["ag05"] },

  { id:"ag07", category:"agent", name:"효용",
    features:["재화나 서비스를 소비하여 얻는 만족감이다",
              "가계가 합리적으로 선택할 때 크게 하려는 대상이다"],
    confuse:["ag08"] },

  { id:"ag08", category:"agent", name:"이윤",
    features:["총수입에서 총비용을 뺀 값이다",
              "기업이 생산량을 정할 때 크게 하려는 대상이다"],
    confuse:["ag07"] },

  { id:"ag09", category:"agent", name:"기업가 정신",
    features:["위험을 무릅쓰고 새로운 기회에 도전하는 자세다",
              "슘페터는 이것이 혁신을 낳아 경제를 발전시킨다고 보았다"],
    confuse:["ag10"] },

  { id:"ag10", category:"agent", name:"기업의 사회적 책임",
    features:["이윤 추구를 넘어 사회 구성원의 기대에 부응하는 활동을 해야 한다는 요구다",
              "환경 보호, 윤리 경영, 지역 사회 공헌 등이 여기에 해당한다"],
    confuse:["ag09"] },

  /* ── 003 수요와 공급 ─────────────────────── */

  { id:"dm01", category:"dnd", name:"수요 법칙",
    features:["다른 조건이 같을 때 가격이 오르면 수요량이 줄어든다",
              "수요 곡선이 오른쪽 아래로 내려가는 까닭이다"],
    confuse:["dm04"] },

  { id:"dm02", category:"dnd", name:"수요량의 변화",
    features:["그 상품의 가격이 바뀌어 나타난다",
              "수요 곡선 위에서 점이 옮겨 가는 것으로 나타낸다"],
    confuse:["dm03","dm05"] },

  { id:"dm03", category:"dnd", name:"수요의 변화",
    features:["소득·선호·관련 재화의 가격처럼 가격 이외의 요인이 바뀌어 나타난다",
              "수요 곡선 자체가 오른쪽이나 왼쪽으로 옮겨 간다"],
    confuse:["dm02","dm06"] },

  { id:"dm04", category:"dnd", name:"공급 법칙",
    features:["다른 조건이 같을 때 가격이 오르면 공급량이 늘어난다",
              "공급 곡선이 오른쪽 위로 올라가는 까닭이다"],
    confuse:["dm01"] },

  { id:"dm05", category:"dnd", name:"공급량의 변화",
    features:["그 상품의 가격이 바뀌어 생산자가 팔려는 양이 달라진 것이다",
              "공급 곡선 위에서 점이 옮겨 가는 것으로 나타낸다"],
    confuse:["dm06","dm02"] },

  { id:"dm06", category:"dnd", name:"공급의 변화",
    features:["생산 요소의 가격이나 생산 기술처럼 가격 이외의 요인이 바뀌어 나타난다",
              "공급 곡선 자체가 오른쪽이나 왼쪽으로 옮겨 간다"],
    confuse:["dm05","dm03"] },

  { id:"dm07", category:"dnd", name:"대체재",
    features:["용도가 비슷하여 서로 대신 쓸 수 있는 재화다",
              "한 재화의 가격이 오르면 다른 재화의 수요가 늘어난다",
              "커피와 녹차, 버터와 마가린이 그 예다"],
    confuse:["dm08"] },

  { id:"dm08", category:"dnd", name:"보완재",
    features:["함께 소비할 때 만족이 커지는 재화다",
              "한 재화의 가격이 오르면 다른 재화의 수요가 줄어든다",
              "커피와 설탕, 자동차와 휘발유가 그 예다"],
    confuse:["dm07"] },

  { id:"dm09", category:"dnd", name:"정상재", aliases:["우등재"],
    features:["소득이 늘면 수요가 늘어나는 재화다",
              "대부분의 재화가 여기에 속한다"],
    confuse:["dm10"] },

  { id:"dm10", category:"dnd", name:"열등재",
    features:["소득이 늘면 오히려 수요가 줄어드는 재화다",
              "소득이 오르면 더 나은 재화로 갈아타게 되는 상품이 여기에 속한다"],
    confuse:["dm09"] },

  { id:"el01", category:"elas", name:"수요의 가격 탄력성",
    features:["가격이 변할 때 수요량이 얼마나 민감하게 변하는지를 나타낸다",
              "수요량의 변화율을 가격의 변화율로 나누어 구한다",
              "대체재가 많고 사치품일수록 크다"],
    confuse:["el02","el08"] },

  { id:"el02", category:"elas", name:"공급의 가격 탄력성",
    features:["가격이 변할 때 공급량이 얼마나 민감하게 변하는지를 나타낸다",
              "생산 기간이 길거나 저장이 어려운 상품일수록 작다"],
    confuse:["el01"] },

  { id:"el03", category:"elas", name:"탄력적",
    features:["탄력성이 1보다 큰 경우다",
              "이 상품은 가격을 내리면 판매 수입이 늘어난다"],
    confuse:["el04","el05"] },

  { id:"el04", category:"elas", name:"비탄력적",
    features:["탄력성이 1보다 작은 경우다",
              "이 상품은 가격을 올리면 판매 수입이 늘어난다",
              "쌀 같은 생활 필수품이 대개 여기에 속한다"],
    confuse:["el03","el05"] },

  { id:"el05", category:"elas", name:"단위 탄력적",
    features:["탄력성이 정확히 1인 경우다",
              "가격이 변해도 판매 수입이 변하지 않는다"],
    confuse:["el03","el04"] },

  { id:"el06", category:"elas", name:"완전 탄력적",
    features:["탄력성이 무한대인 경우다",
              "곡선이 가로축과 나란한 수평선으로 그려진다"],
    confuse:["el07"] },

  { id:"el07", category:"elas", name:"완전 비탄력적",
    features:["탄력성이 0인 경우다",
              "곡선이 세로축과 나란한 수직선으로 그려진다",
              "가격이 아무리 변해도 거래량이 그대로다"],
    confuse:["el06"] },

  { id:"el08", category:"elas", name:"수요의 소득 탄력성",
    features:["소득이 변할 때 수요량이 얼마나 변하는지를 나타낸다",
              "이 값이 음수이면 그 재화는 열등재다"],
    confuse:["el09","el01"] },

  { id:"el09", category:"elas", name:"수요의 교차 탄력성",
    features:["다른 재화의 가격이 변할 때 이 재화의 수요량이 얼마나 변하는지를 나타낸다",
              "이 값이 양수이면 두 재화는 대체 관계다"],
    confuse:["el08"] },

  /* ── 004 시장 균형과 정부 개입 ─────────────────────── */

  { id:"eq01", category:"eq", name:"균형 가격", aliases:["시장 가격"],
    features:["수요량과 공급량이 일치하는 곳에서 정해지는 가격이다",
              "수요 곡선과 공급 곡선이 만나는 점의 높이로 나타난다"],
    confuse:["eq02","eq03"] },

  { id:"eq02", category:"eq", name:"초과 수요",
    features:["수요량이 공급량보다 많은 상태다",
              "가격이 균형 수준보다 낮을 때 생기며 가격이 오르는 압력이 된다"],
    confuse:["eq03","eq01"] },

  { id:"eq03", category:"eq", name:"초과 공급",
    features:["공급량이 수요량보다 많은 상태다",
              "가격이 균형 수준보다 높을 때 생기며 가격이 내리는 압력이 된다"],
    confuse:["eq02","eq01"] },

  { id:"eq04", category:"eq", name:"소비자 잉여",
    features:["소비자가 치를 용의가 있던 최대 금액에서 실제로 치른 금액을 뺀 것이다",
              "그래프에서 수요 곡선 아래, 가격선 위의 넓이다"],
    confuse:["eq05","eq06"] },

  { id:"eq05", category:"eq", name:"생산자 잉여",
    features:["생산자가 실제로 받은 금액에서 최소한 받으려던 금액을 뺀 것이다",
              "그래프에서 가격선 아래, 공급 곡선 위의 넓이다"],
    confuse:["eq04","eq06"] },

  { id:"eq06", category:"eq", name:"총잉여", aliases:["사회적 잉여"],
    features:["소비자와 생산자가 거래로 얻은 이득을 모두 더한 것이다",
              "경쟁 시장에서는 시장 균형에서 가장 커진다"],
    confuse:["eq04","eq05"] },

  { id:"eq07", category:"eq", name:"가격의 신호 기능",
    features:["가격이 경제 주체에게 무엇을 얼마나 사고팔지 알려 주는 역할이다",
              "가격이 오르면 생산자는 더 만들고 소비자는 덜 사게 된다"],
    confuse:["eq08"] },

  { id:"eq08", category:"eq", name:"가격의 배분 기능",
    features:["대가를 치를 의사와 능력이 있는 사람에게 재화가 돌아가게 하는 역할이다",
              "희소한 자원을 누가 가질지를 가격이 정한다는 뜻이다"],
    confuse:["eq07"] },

  { id:"gv01", category:"gov", name:"최고 가격제", aliases:["가격 상한제"],
    features:["정부가 균형 가격보다 낮게 가격의 상한을 정하는 제도다",
              "소비자를 보호하려는 목적으로 시행한다",
              "시행하면 초과 수요가 생겨 암시장이 나타나기 쉽다"],
    confuse:["gv02"] },

  { id:"gv02", category:"gov", name:"최저 가격제", aliases:["가격 하한제"],
    features:["정부가 균형 가격보다 높게 가격의 하한을 정하는 제도다",
              "공급자를 보호하려는 목적으로 시행한다",
              "시행하면 초과 공급이 생기며 최저 임금제가 대표적인 예다"],
    confuse:["gv01"] },

  { id:"gv03", category:"gov", name:"암시장",
    features:["법으로 정한 가격보다 비싸게 몰래 거래가 이루어지는 시장이다",
              "상한이 걸려 물건을 구하기 어려울 때 생겨난다"] },

  { id:"gv04", category:"gov", name:"조세의 귀착",
    features:["세금의 부담이 실제로 누구에게 돌아가는지를 말한다",
              "탄력성이 작은 쪽이 세금을 더 많이 떠안는다"],
    notes:["세금을 누가 내도록 법에 정했는지와 상관없이 부담은 탄력성에 따라 나뉜다"] },

  { id:"gv05", category:"gov", name:"보조금",
    features:["정부가 생산이나 소비를 늘리려고 대 주는 돈이다",
              "생산자에게 주면 공급 곡선이 오른쪽으로 옮겨 간다"] },

  /* ── 005 시장의 형태와 시장 실패 ─────────────────────── */

  { id:"cp01", category:"comp", name:"완전 경쟁 시장",
    features:["수많은 공급자와 수요자가 똑같은 상품을 거래한다",
              "개별 기업은 시장 가격을 그대로 받아들이는 가격 수용자다",
              "시장에 들어오고 나가는 것이 자유롭다"],
    confuse:["cp04","cp03"] },

  { id:"cp02", category:"comp", name:"독점 시장",
    features:["공급자가 하나뿐인 시장이다",
              "공급자가 가격을 정할 수 있는 가격 설정자다",
              "높은 진입 장벽 때문에 다른 기업이 들어오지 못한다"],
    confuse:["cp03","cp06"] },

  { id:"cp03", category:"comp", name:"과점 시장",
    features:["소수의 기업이 시장을 나누어 차지한다",
              "한 기업의 결정이 다른 기업에 영향을 주는 상호 의존성이 크다",
              "기업들이 담합할 가능성이 높다"],
    confuse:["cp02","cp04","cp01","cp05"] },

  { id:"cp04", category:"comp", name:"독점적 경쟁 시장",
    features:["다수의 공급자가 조금씩 차별화된 상품을 판다",
              "미용실·음식점처럼 품질과 서비스로 경쟁하는 시장이다"],
    confuse:["cp01","cp03"] },

  { id:"cp05", category:"comp", name:"담합", aliases:["카르텔"],
    features:["기업들이 가격이나 생산량을 서로 짜고 정하는 행위다",
              "공정 거래법으로 금지하는 불공정 행위다"],
    confuse:["cp03"] },

  { id:"cp06", category:"comp", name:"자연 독점",
    features:["규모의 경제 때문에 한 기업이 생산하는 것이 가장 효율적인 경우다",
              "전기·수도·철도처럼 처음 설비에 큰돈이 드는 산업에서 나타난다"],
    confuse:["cp02","cp07"] },

  { id:"cp07", category:"comp", name:"규모의 경제",
    features:["생산 규모가 커질수록 상품 하나를 만드는 평균 비용이 줄어드는 현상이다",
              "대량 생산의 이점을 설명할 때 쓴다"],
    confuse:["cp06"] },

  { id:"cp08", category:"comp", name:"진입 장벽",
    features:["새 기업이 시장에 들어오는 것을 가로막는 요인이다",
              "특허권·정부의 면허·막대한 설비 비용 등이 여기에 해당한다"] },

  { id:"cp09", category:"comp", name:"가격 차별",
    features:["같은 상품을 소비자 집단에 따라 다른 가격에 파는 것이다",
              "영화관의 조조 할인이나 학생 할인이 그 예다"] },

  { id:"cp10", category:"comp", name:"비가격 경쟁",
    features:["가격 대신 광고·품질·서비스로 고객을 끌어오려는 경쟁이다",
              "과점이나 독점적 경쟁 시장에서 흔히 나타난다"] },

  { id:"mf01", category:"fail", name:"시장 실패",
    features:["시장 기구에 맡겨 두었을 때 자원이 효율적으로 배분되지 못하는 현상이다",
              "정부가 시장에 개입하는 근거가 된다"],
    confuse:["mf14"] },

  { id:"mf02", category:"fail", name:"외부 효과", aliases:["외부성"],
    features:["어떤 경제 활동이 의도하지 않게 제3자에게 이득이나 손해를 주는 것이다",
              "그 대가를 주고받지 않는다는 점이 핵심이다"],
    confuse:["mf03","mf04"] },

  { id:"mf03", category:"fail", name:"외부 경제", aliases:["긍정적 외부 효과","긍정적 외부성"],
    features:["남에게 의도하지 않은 혜택을 주고도 대가를 받지 못하는 경우다",
              "사회적으로 바람직한 수준보다 적게 생산·소비된다",
              "보조금을 주어 바로잡는다"],
    confuse:["mf04","mf02"] },

  { id:"mf04", category:"fail", name:"외부 불경제", aliases:["부정적 외부 효과","부정적 외부성"],
    features:["남에게 의도하지 않은 손해를 끼치고도 대가를 치르지 않는 경우다",
              "사회적으로 바람직한 수준보다 많이 생산·소비된다",
              "세금이나 부담금을 물려 바로잡는다"],
    confuse:["mf03","mf02"] },

  { id:"mf05", category:"fail", name:"공공재",
    features:["비경합성과 비배제성을 함께 지닌 재화다",
              "시장에 맡기면 적게 공급되므로 주로 정부가 공급한다",
              "국방·치안·등대가 대표적인 예다"],
    confuse:["mf09"] },

  { id:"mf06", category:"fail", name:"비경합성",
    features:["한 사람이 소비해도 다른 사람이 소비할 수 있는 양이 줄지 않는 성질이다",
              "여러 사람이 동시에 같은 것을 누릴 수 있다는 뜻이다"],
    confuse:["mf07"] },

  { id:"mf07", category:"fail", name:"비배제성",
    features:["대가를 치르지 않은 사람도 소비에서 막을 수 없는 성질이다",
              "무임승차가 생기는 직접적인 원인이다"],
    confuse:["mf06"] },

  { id:"mf08", category:"fail", name:"무임승차자 문제", aliases:["무임승차"],
    features:["대가는 치르지 않고 혜택만 누리려는 행동이 낳는 문제다",
              "공공재가 시장에서 충분히 공급되지 않는 까닭이다"] },

  { id:"mf09", category:"fail", name:"공유 자원",
    features:["경합성은 있으나 배제성은 없는 재화다",
              "바다의 물고기나 공동 목초지가 그 예다"],
    confuse:["mf05","mf10"] },

  { id:"mf10", category:"fail", name:"공유지의 비극",
    features:["모두가 함께 쓰는 자원을 저마다 남용하여 결국 바닥나는 현상이다",
              "개인의 합리적 선택이 모두에게 나쁜 결과를 낳는 예로 든다"],
    confuse:["mf09"] },

  { id:"mf11", category:"fail", name:"정보의 비대칭성",
    features:["거래 당사자 가운데 한쪽만 정보를 더 많이 가진 상태다",
              "역선택과 도덕적 해이를 일으킨다"],
    confuse:["mf12","mf13"] },

  { id:"mf12", category:"fail", name:"역선택",
    features:["거래하기 전에 감추어진 특성 때문에 정보가 적은 쪽이 불리한 상대를 고르게 되는 현상이다",
              "중고차 시장에 품질 나쁜 차만 남는 것이 대표적인 예다"],
    confuse:["mf13","mf11"] },

  { id:"mf13", category:"fail", name:"도덕적 해이",
    features:["거래한 뒤에 감추어진 행동 때문에 생기는 문제다",
              "화재 보험에 든 뒤 불조심을 덜 하는 것이 대표적인 예다"],
    confuse:["mf12","mf11"] },

  { id:"mf14", category:"fail", name:"정부 실패",
    features:["정부의 개입이 오히려 자원 배분의 효율성을 떨어뜨리는 현상이다",
              "정보 부족, 관료주의, 이익 집단의 압력 등이 원인이다"],
    confuse:["mf01"] },

  /* ── 006 국민 경제 지표 ─────────────────────── */

  { id:"gd01", category:"gdp", name:"국내 총생산", aliases:["GDP"],
    features:["일정 기간 한 나라 안에서 새로 생산된 최종 생산물의 시장 가치를 모두 더한 것이다",
              "생산한 사람의 국적을 따지지 않고 영토를 기준으로 삼는다",
              "나라 전체의 경제 규모를 나타내는 대표적인 지표다"],
    confuse:["gd02"] },

  { id:"gd02", category:"gdp", name:"국민 총소득", aliases:["GNI"],
    features:["한 나라 국민이 국내외에서 벌어들인 소득을 모두 더한 것이다",
              "영토가 아니라 국적을 기준으로 삼는다"],
    confuse:["gd01"] },

  { id:"gd03", category:"gdp", name:"명목 GDP", aliases:["명목 국내 총생산"],
    features:["그해의 가격으로 계산한 생산물의 가치다",
              "물가가 오르기만 해도 커지므로 생산량 변화를 정확히 보여 주지 못한다"],
    confuse:["gd04"] },

  { id:"gd04", category:"gdp", name:"실질 GDP", aliases:["실질 국내 총생산"],
    features:["기준 연도의 가격으로 계산한 생산물의 가치다",
              "물가 변동을 걷어 내어 실제 생산량의 변화를 보여 준다"],
    confuse:["gd03","gd05"] },

  { id:"gd05", category:"gdp", name:"GDP 디플레이터",
    features:["명목 GDP를 실질 GDP로 나눈 뒤 100을 곱한 값이다",
              "국내에서 생산된 모든 상품을 대상으로 하는 가장 포괄적인 물가 지수다"],
    confuse:["in07","gd04"] },

  { id:"gd06", category:"gdp", name:"경제 성장률",
    features:["실질 GDP가 전년에 비해 얼마나 늘었는지를 나타낸 비율이다",
              "한 나라의 경제가 얼마나 커졌는지를 보여 준다"] },

  { id:"gd07", category:"gdp", name:"1인당 GDP", aliases:["1인당 국내 총생산"],
    features:["국내 총생산을 인구수로 나눈 값이다",
              "나라 사이의 평균적인 생활 수준을 견줄 때 쓴다"] },

  { id:"gd08", category:"gdp", name:"중간재",
    features:["다른 상품을 만드는 데 원료나 부품으로 쓰이는 생산물이다",
              "중복해서 세지 않도록 국내 총생산을 계산할 때 뺀다"],
    confuse:["gd09"] },

  { id:"gd09", category:"gdp", name:"부가 가치",
    features:["생산 과정의 각 단계에서 새로 더해진 가치다",
              "판매액에서 중간재 구입액을 빼서 구한다",
              "각 단계의 이것을 모두 더하면 국내 총생산과 같다"],
    confuse:["gd08"] },

  { id:"gd10", category:"gdp", name:"삼면 등가의 법칙", aliases:["삼면 등가의 원칙"],
    features:["생산·분배·지출의 세 측면에서 본 국민 소득의 크기가 같다는 원리다",
              "만들어진 가치는 누군가의 소득이 되고, 그 소득은 어딘가에 쓰인다는 뜻이다"] },

  { id:"gd11", category:"gdp", name:"GDP의 한계",
    features:["가사 노동처럼 시장에서 거래되지 않는 활동은 반영하지 못한다",
              "환경 오염이나 여가, 소득 분배 상태를 보여 주지 못한다"],
    notes:["이를 보완하려고 국민 총행복 지수·인간 개발 지수 같은 지표가 제안되었다"] },

  { id:"ad01", category:"adas", name:"총수요",
    features:["한 나라의 경제 주체들이 사려는 재화와 서비스의 총량이다",
              "소비·투자·정부 지출·순수출로 이루어진다"],
    confuse:["ad02"] },

  { id:"ad02", category:"adas", name:"총공급",
    features:["한 나라의 기업들이 생산하여 팔려는 재화와 서비스의 총량이다",
              "원자재 가격이 오르면 줄어든다"],
    confuse:["ad01"] },

  { id:"ad03", category:"adas", name:"경기 변동",
    features:["경제 활동이 확장과 수축을 되풀이하는 현상이다",
              "회복·호황·후퇴·불황의 네 국면으로 나눈다"] },

  { id:"ad04", category:"adas", name:"순수출",
    features:["수출액에서 수입액을 뺀 값이다",
              "총수요를 이루는 요소 가운데 외국과의 거래에서 나오는 부분이다"] },

  /* ── 007 실업과 인플레이션 ─────────────────────── */

  { id:"ue01", category:"unemp", name:"실업률",
    features:["경제 활동 인구 가운데 실업자가 차지하는 비율이다",
              "구직 단념자가 늘면 오히려 낮아질 수 있다"],
    confuse:["ue02","ue05"] },

  { id:"ue02", category:"unemp", name:"고용률",
    features:["15세 이상 인구 가운데 취업자가 차지하는 비율이다",
              "구직 단념자의 영향을 덜 받아 고용 사정을 보여 주는 보조 지표로 쓴다"],
    confuse:["ue01","ue05"] },

  { id:"ue03", category:"unemp", name:"경제 활동 인구",
    features:["15세 이상 인구 가운데 일할 능력과 의사가 있는 사람이다",
              "취업자와 실업자를 더한 것이다"],
    confuse:["ue04"] },

  { id:"ue04", category:"unemp", name:"비경제 활동 인구",
    features:["15세 이상 인구 가운데 일할 능력이나 의사가 없는 사람이다",
              "가사에 전념하는 주부나 학업에 전념하는 학생이 여기에 속한다"],
    confuse:["ue03","ue10"] },

  { id:"ue05", category:"unemp", name:"경제 활동 참가율",
    features:["15세 이상 인구 가운데 경제 활동 인구가 차지하는 비율이다",
              "일하거나 일자리를 찾는 사람이 얼마나 되는지를 보여 준다"],
    confuse:["ue01","ue02"] },

  { id:"ue06", category:"unemp", name:"마찰적 실업",
    features:["더 나은 일자리를 찾아 옮기는 과정에서 잠시 생기는 실업이다",
              "스스로 선택한 자발적 실업에 속한다",
              "취업 정보를 널리 알려 줄이는 것이 대책이다"],
    confuse:["ue07","ue08"] },

  { id:"ue07", category:"unemp", name:"구조적 실업",
    features:["산업 구조가 바뀌거나 기술이 발전하여 생기는 실업이다",
              "직업 훈련으로 새 기술을 익히게 하는 것이 대책이다"],
    confuse:["ue06","ue08"] },

  { id:"ue08", category:"unemp", name:"경기적 실업",
    features:["경기가 나빠져 노동 수요가 줄어 생기는 실업이다",
              "총수요를 늘리는 정책이 대책이다"],
    confuse:["ue07","ue09","ue06"] },

  { id:"ue09", category:"unemp", name:"계절적 실업",
    features:["계절에 따라 일감이 줄어 생기는 실업이다",
              "농한기의 농업이나 겨울철 건설업에서 나타난다"],
    confuse:["ue08"] },

  { id:"ue10", category:"unemp", name:"구직 단념자",
    features:["일할 의사와 능력은 있으나 일자리를 찾지 못해 구직 활동을 포기한 사람이다",
              "비경제 활동 인구로 분류되어 실업률 계산에서 빠진다"],
    confuse:["ue04"] },

  { id:"in01", category:"infl", name:"인플레이션",
    features:["물가 수준이 지속적으로 오르는 현상이다",
              "화폐의 구매력이 떨어진다",
              "돈을 빌려준 사람보다 빌린 사람에게 유리하다"],
    confuse:["in02","in03"] },

  { id:"in02", category:"infl", name:"디플레이션",
    features:["물가 수준이 지속적으로 내려가는 현상이다",
              "소비와 투자가 미뤄져 경기 침체를 부르기 쉽다"],
    confuse:["in01"] },

  { id:"in03", category:"infl", name:"스태그플레이션",
    features:["경기 침체와 물가 상승이 함께 나타나는 현상이다",
              "석유 파동처럼 원자재 가격이 크게 오를 때 나타난다"],
    confuse:["in05","in01"] },

  { id:"in04", category:"infl", name:"수요 견인 인플레이션",
    features:["총수요가 늘어 물가가 오르는 경우다",
              "경기가 좋을 때 나타나며 생산량도 함께 늘어난다"],
    confuse:["in05"] },

  { id:"in05", category:"infl", name:"비용 인상 인플레이션",
    features:["임금이나 원자재 가격 같은 생산비가 올라 물가가 오르는 경우다",
              "총공급이 줄어들어 생긴다"],
    confuse:["in04","in03"] },

  { id:"in06", category:"infl", name:"물가 지수",
    features:["기준 시점의 물가를 100으로 놓고 비교 시점의 물가를 나타낸 수치다",
              "여러 상품의 가격을 종합해 물가의 움직임을 보여 준다"] },

  { id:"in07", category:"infl", name:"소비자 물가 지수", aliases:["CPI"],
    features:["가계가 소비하는 상품과 서비스의 가격 변동을 나타낸다",
              "생활비가 얼마나 올랐는지를 보여 준다"],
    confuse:["in08","gd05"] },

  { id:"in08", category:"infl", name:"생산자 물가 지수", aliases:["PPI"],
    features:["국내 생산자가 기업끼리 거래하는 상품의 가격 변동을 나타낸다",
              "앞으로 소비자 물가가 어떻게 움직일지 미리 보여 준다"],
    confuse:["in07"] },

  { id:"in09", category:"infl", name:"필립스 곡선",
    features:["실업률과 물가 상승률 사이의 상충 관계를 나타낸다",
              "실업률을 낮추려 하면 물가가 오르기 쉽다는 것을 보여 준다"],
    notes:["스태그플레이션 시기에는 이 관계가 무너졌다"] },

  /* ── 008 경제 안정화 정책 ─────────────────────── */

  { id:"fs01", category:"fiscal", name:"재정 정책",
    features:["정부가 정부 지출과 조세를 조절하여 경제를 안정시키려는 정책이다",
              "국회의 예산 심의를 거쳐야 하므로 시행에 시간이 걸린다"],
    confuse:["mo01"] },

  { id:"fs02", category:"fiscal", name:"확대 재정 정책", aliases:["확장 재정 정책","팽창 재정 정책"],
    features:["경기가 나쁠 때 정부 지출을 늘리고 세금을 줄인다",
              "재정 적자가 커질 수 있다"],
    confuse:["fs03","mo06"] },

  { id:"fs03", category:"fiscal", name:"긴축 재정 정책",
    features:["경기가 과열될 때 정부 지출을 줄이고 세금을 늘린다",
              "세입이 세출보다 많은 재정 흑자로 이어질 수 있다"],
    confuse:["fs02","mo07"] },

  { id:"fs04", category:"fiscal", name:"자동 안정화 장치", aliases:["자동 안정화 기능"],
    features:["정부가 따로 결정하지 않아도 경기 변동을 저절로 완화하는 장치다",
              "누진 소득세와 실업 급여가 대표적인 예다"] },

  { id:"fs05", category:"fiscal", name:"누진세",
    features:["과세 대상 금액이 클수록 높은 세율을 매긴다",
              "소득 재분배 효과가 크다",
              "우리나라의 소득세가 이 방식이다"],
    confuse:["fs06"] },

  { id:"fs06", category:"fiscal", name:"비례세",
    features:["과세 대상 금액과 상관없이 같은 세율을 매긴다",
              "우리나라의 부가 가치세가 이 방식이다"],
    confuse:["fs05"] },

  { id:"fs07", category:"fiscal", name:"직접세",
    features:["세금을 내는 사람과 실제로 부담하는 사람이 같다",
              "소득세·법인세·재산세가 여기에 속한다"],
    confuse:["fs08"] },

  { id:"fs08", category:"fiscal", name:"간접세",
    features:["세금을 내는 사람과 실제로 부담하는 사람이 다르다",
              "부가 가치세·개별 소비세가 여기에 속한다",
              "소득이 적을수록 부담 비율이 커지는 역진적 성격이 있다"],
    confuse:["fs07"] },

  { id:"mo01", category:"monet", name:"통화 정책",
    features:["중앙은행이 통화량과 이자율을 조절하여 경제를 안정시키려는 정책이다",
              "우리나라에서는 한국은행이 맡는다"],
    confuse:["fs01"] },

  { id:"mo02", category:"monet", name:"기준 금리",
    features:["한국은행 금융 통화 위원회가 정하는 정책 금리다",
              "이것을 올리면 시중 금리가 따라 올라 통화량이 줄어든다"],
    confuse:["mo03"] },

  { id:"mo03", category:"monet", name:"공개 시장 운영",
    features:["중앙은행이 국공채 같은 증권을 사고팔아 통화량을 조절하는 것이다",
              "증권을 사들이면 시중에 돈이 풀린다"],
    confuse:["mo04","mo05","mo02"] },

  { id:"mo04", category:"monet", name:"지급 준비율 정책",
    features:["은행이 예금 가운데 의무적으로 남겨 두어야 하는 비율을 바꾸는 것이다",
              "이 비율을 낮추면 은행이 더 많이 대출할 수 있어 통화량이 늘어난다"],
    confuse:["mo03","mo05"] },

  { id:"mo05", category:"monet", name:"재할인율 정책", aliases:["여신 제도"],
    features:["중앙은행이 시중 은행에 빌려주는 돈의 금리를 조절하는 것이다",
              "이 금리를 올리면 은행이 돈을 덜 빌려 가 통화량이 줄어든다"],
    confuse:["mo04","mo03"] },

  { id:"mo06", category:"monet", name:"확대 통화 정책", aliases:["팽창 통화 정책","완화적 통화 정책"],
    features:["경기가 나쁠 때 통화량을 늘리고 금리를 낮춘다",
              "지나치면 물가 상승과 자산 가격 거품을 부를 수 있다"],
    confuse:["mo07","fs02"] },

  { id:"mo07", category:"monet", name:"긴축 통화 정책",
    features:["경기가 과열될 때 통화량을 줄이고 금리를 올린다",
              "대출 이자 부담이 커져 소비와 투자가 줄어든다"],
    confuse:["mo06","fs03"] },

  /* ── 009 무역 원리와 무역 정책 ─────────────────────── */

  { id:"tr01", category:"trade", name:"절대 우위",
    features:["다른 나라보다 적은 생산비로 상품을 만들 수 있는 상태다",
              "애덤 스미스가 무역이 일어나는 까닭으로 들었다"],
    confuse:["tr02"] },

  { id:"tr02", category:"trade", name:"비교 우위",
    features:["다른 나라보다 기회비용이 작게 상품을 만들 수 있는 상태다",
              "리카도가 무역이 일어나는 까닭으로 들었다",
              "한 나라가 모든 상품을 더 잘 만들어도 무역으로 서로 이익을 볼 수 있다는 근거다"],
    confuse:["tr01","tr03"] },

  { id:"tr03", category:"trade", name:"특화",
    features:["자기 나라가 유리한 상품의 생산에 집중하는 것이다",
              "무역을 통해 두 나라의 소비 가능 범위가 넓어지는 출발점이다"],
    confuse:["tr02"] },

  { id:"tr04", category:"trade", name:"자유 무역",
    features:["국가가 간섭하지 않고 나라 사이의 거래를 자유롭게 두는 것이다",
              "소비자가 더 싸고 다양한 상품을 누릴 수 있다"],
    confuse:["tr05"] },

  { id:"tr05", category:"trade", name:"보호 무역",
    features:["국가가 관세나 수입 제한으로 자기 나라 산업을 지키는 것이다",
              "국내 산업과 일자리를 보호하려는 목적이 있다"],
    confuse:["tr04","tr09"] },

  { id:"tr06", category:"trade", name:"관세",
    features:["수입품에 매기는 세금이다",
              "수입품의 국내 가격을 올려 국내 생산을 늘린다"],
    confuse:["tr07","tr08","tr12"] },

  { id:"tr07", category:"trade", name:"수입 할당제", aliases:["수입 쿼터제","쿼터제"],
    features:["수입할 수 있는 수량에 한도를 두는 것이다",
              "가격이 아니라 물량을 직접 묶는다"],
    confuse:["tr06","tr08"] },

  { id:"tr08", category:"trade", name:"비관세 장벽",
    features:["세금이 아닌 방법으로 수입을 막는 것이다",
              "까다로운 위생 기준이나 복잡한 통관 절차가 그 예다"],
    confuse:["tr06","tr07"] },

  { id:"tr09", category:"trade", name:"유치산업 보호론",
    features:["아직 경쟁력이 없는 산업을 자랄 때까지 보호해야 한다는 주장이다",
              "리스트가 선진국과의 격차를 근거로 내세웠다"],
    confuse:["tr05"] },

  { id:"tr10", category:"trade", name:"세계 무역 기구", aliases:["WTO"],
    features:["세계 무역 질서를 세우고 회원국 사이의 무역 분쟁을 해결하는 국제기구다",
              "1995년에 출범하여 가트(GATT) 체제를 이어받았다"],
    confuse:["tr11"] },

  { id:"tr11", category:"trade", name:"자유 무역 협정", aliases:["FTA"],
    features:["특정 국가끼리 관세 같은 무역 장벽을 없애기로 맺는 약속이다",
              "협정을 맺지 않은 나라에는 적용되지 않는다"],
    confuse:["tr10"] },

  { id:"tr12", category:"trade", name:"반덤핑 관세",
    features:["정상 가격보다 지나치게 싸게 수출된 상품에 매기는 세금이다",
              "국내 산업이 불공정한 가격 경쟁으로 피해를 보지 않게 한다"],
    confuse:["tr06"] },

  /* ── 010 환율과 국제 수지 ─────────────────────── */

  { id:"fx01", category:"fx", name:"환율",
    features:["두 나라 화폐의 교환 비율이다",
              "외화 1단위와 바꿀 수 있는 자국 화폐의 양으로 나타낸다"] },

  { id:"fx02", category:"fx", name:"환율 상승", aliases:["원화 가치 하락","원화 약세","평가 절하"],
    features:["달러로 표시한 우리 상품값이 싸져 수출에 유리하다",
              "수입 원자재값이 올라 국내 물가가 오를 수 있다",
              "외채를 갚아야 하는 부담이 커진다"],
    confuse:["fx03"] },

  { id:"fx03", category:"fx", name:"환율 하락", aliases:["원화 가치 상승","원화 강세","평가 절상"],
    features:["수입품값이 싸져 국내 물가가 안정되는 데 도움이 된다",
              "해외여행이나 유학을 가는 사람의 부담이 줄어든다",
              "수출 상품의 가격 경쟁력이 떨어진다"],
    confuse:["fx02"] },

  { id:"fx04", category:"fx", name:"외화의 수요", aliases:["외화 수요"],
    features:["상품 수입, 해외여행, 해외 투자 때문에 생긴다",
              "이것이 늘면 환율이 오른다"],
    confuse:["fx05"] },

  { id:"fx05", category:"fx", name:"외화의 공급", aliases:["외화 공급"],
    features:["상품 수출, 외국인 관광객, 외국인의 국내 투자 때문에 생긴다",
              "이것이 늘면 환율이 내린다"],
    confuse:["fx04"] },

  { id:"fx06", category:"fx", name:"변동 환율 제도",
    features:["외환 시장의 수요와 공급에 따라 환율이 자유롭게 정해진다",
              "우리나라는 외환 위기 이후인 1997년 말부터 택하고 있다"],
    confuse:["fx07"] },

  { id:"fx07", category:"fx", name:"고정 환율 제도",
    features:["정부나 중앙은행이 환율을 일정한 수준에 묶어 둔다",
              "환율이 안정되지만 외환 시장의 변화를 반영하지 못한다"],
    confuse:["fx06"] },

  { id:"bp01", category:"bop", name:"국제 수지",
    features:["일정 기간 한 나라가 다른 나라와 거래하여 받은 돈과 준 돈의 차이다",
              "크게 경상 수지·자본 수지·금융 계정으로 나눈다"] },

  { id:"bp02", category:"bop", name:"경상 수지",
    features:["상품·서비스·본원 소득·이전 소득의 거래를 모두 합한 것이다",
              "흑자이면 외화가 들어와 국내 통화량이 늘어난다"],
    confuse:["bp07","bp08"] },

  { id:"bp03", category:"bop", name:"상품 수지",
    features:["상품의 수출액과 수입액의 차이다",
              "자동차나 반도체를 사고판 결과가 여기에 잡힌다"],
    confuse:["bp04"] },

  { id:"bp04", category:"bop", name:"서비스 수지",
    features:["운송·여행·통신·지식 재산권 사용료 등의 거래 결과다",
              "외국인 관광객이 국내에서 쓴 돈이 여기에 잡힌다"],
    confuse:["bp03","bp05"] },

  { id:"bp05", category:"bop", name:"본원 소득 수지",
    features:["외국과 주고받은 임금·배당·이자의 차이다",
              "해외에 투자한 주식에서 받은 배당금이 여기에 잡힌다"],
    confuse:["bp06","bp04"] },

  { id:"bp06", category:"bop", name:"이전 소득 수지",
    features:["대가 없이 주고받은 거래의 결과다",
              "무상 원조나 해외 교포의 송금이 여기에 잡힌다"],
    confuse:["bp05"] },

  { id:"bp07", category:"bop", name:"자본 수지",
    features:["자본 이전과 비생산·비금융 자산의 거래 결과다",
              "특허권이나 상표권 같은 권리 자체를 사고판 것이 여기에 잡힌다"],
    confuse:["bp08","bp02"] },

  { id:"bp08", category:"bop", name:"금융 계정",
    features:["직접 투자·증권 투자·파생 금융 상품 등의 거래를 기록한다",
              "외국인이 국내 주식을 사들인 것이 여기에 잡힌다"],
    confuse:["bp07","bp02"] },

  /* ── 011 금융 생활과 자산 관리 ─────────────────────── */

  { id:"fi01", category:"fin", name:"단리",
    features:["원금에만 이자를 붙이는 방식이다",
              "기간이 지나도 해마다 붙는 이자가 같다"],
    confuse:["fi02"] },

  { id:"fi02", category:"fin", name:"복리",
    features:["원금에 붙은 이자까지 원금에 더해 다시 이자를 붙이는 방식이다",
              "기간이 길수록 이자가 눈덩이처럼 불어난다"],
    confuse:["fi01","fi03"] },

  { id:"fi03", category:"fin", name:"72의 법칙",
    features:["72를 연이자율로 나누면 원금이 두 배가 되는 대략의 햇수가 나온다는 계산법이다",
              "이자가 이자를 낳는 방식을 전제로 한다"],
    confuse:["fi02"] },

  { id:"fi04", category:"fin", name:"명목 이자율",
    features:["물가 변동을 고려하지 않고 겉으로 드러난 이자율이다",
              "은행 통장에 적힌 금리가 이것이다"],
    confuse:["fi05"] },

  { id:"fi05", category:"fin", name:"실질 이자율",
    features:["겉으로 드러난 이자율에서 물가 상승률을 뺀 값이다",
              "이 값이 음수이면 예금해도 구매력이 줄어든다"],
    confuse:["fi04"] },

  { id:"fi06", category:"fin", name:"직접 금융",
    features:["자금이 필요한 쪽이 주식이나 채권을 발행해 돈을 가진 쪽에게서 곧바로 끌어온다",
              "증권 시장을 통해 이루어진다"],
    confuse:["fi07"] },

  { id:"fi07", category:"fin", name:"간접 금융",
    features:["은행 같은 금융 기관이 예금을 받아 대출해 주는 방식으로 자금을 중개한다",
              "돈을 맡긴 사람과 빌린 사람이 서로 직접 만나지 않는다"],
    confuse:["fi06"] },

  { id:"fi08", category:"fin", name:"신용",
    features:["장래에 갚을 수 있다는 믿음을 바탕으로 먼저 돈이나 물건을 얻는 것이다",
              "연체 기록이 쌓이면 대출이 어려워지고 금리가 높아진다"] },

  { id:"as01", category:"asset", name:"예금",
    features:["금융 기관에 돈을 맡기고 약속한 이자를 받는 상품이다",
              "원금 손실 위험이 거의 없지만 기대할 수 있는 이익은 작다"],
    confuse:["as03","as04"] },

  { id:"as02", category:"asset", name:"주식",
    features:["회사가 자금을 모으려고 발행하는 소유권 증서다",
              "배당과 시세 차익을 기대할 수 있지만 원금을 잃을 수도 있다",
              "산 사람은 그 회사의 주인 가운데 한 명이 된다"],
    confuse:["as03","as04"] },

  { id:"as03", category:"asset", name:"채권",
    features:["정부나 기업이 돈을 빌리면서 발행하는 차용 증서다",
              "정해진 날에 약속한 이자와 원금을 돌려받는다",
              "산 사람은 발행한 곳에 돈을 빌려준 셈이 된다"],
    confuse:["as02","as01"] },

  { id:"as04", category:"asset", name:"펀드",
    features:["여러 투자자의 돈을 모아 전문 운용 기관이 대신 투자하는 상품이다",
              "운용 실적에 따라 수익을 나누는 간접 투자다"],
    confuse:["as01","as02"] },

  { id:"as05", category:"asset", name:"안전성",
    features:["투자한 원금이 줄지 않고 지켜질 수 있는 정도다",
              "예금이 가장 높고 주식이 가장 낮다"],
    confuse:["as06","as07"] },

  { id:"as06", category:"asset", name:"수익성",
    features:["자산을 통해 이익을 얼마나 거둘 수 있는지의 정도다",
              "대개 이것이 높을수록 원금을 잃을 위험도 크다"],
    confuse:["as05","as07"] },

  { id:"as07", category:"asset", name:"유동성", aliases:["환금성"],
    features:["자산을 필요할 때 손해 없이 쉽게 현금으로 바꿀 수 있는 정도다",
              "부동산은 이것이 낮은 대표적인 자산이다"],
    confuse:["as05","as06"] },

  { id:"as08", category:"asset", name:"분산 투자", aliases:["포트폴리오 투자"],
    features:["여러 자산에 나누어 투자하여 위험을 줄이는 방법이다",
              "달걀을 한 바구니에 담지 말라는 격언으로 설명한다"] },

  { id:"as09", category:"asset", name:"배당",
    features:["회사가 벌어들인 이익의 일부를 주주에게 나누어 주는 것이다",
              "회사를 가진 대가로 받는 몫이다"],
    confuse:["as10"] },

  { id:"as10", category:"asset", name:"시세 차익",
    features:["자산을 산 값과 판 값의 차이로 얻는 이익이다",
              "쌀 때 사서 비쌀 때 팔아야 생긴다"],
    confuse:["as09"] },

  { id:"as11", category:"asset", name:"예금자 보호 제도",
    features:["금융 기관이 문을 닫아도 예금자에게 일정 금액까지 돌려주도록 보장하는 제도다",
              "예금 보험 공사가 운영한다"],
    notes:["2025년 9월부터 보호 한도가 1인당 금융 기관별 5천만 원에서 1억 원으로 올랐다"] },

  { id:"as12", category:"asset", name:"보험",
    features:["평소에 조금씩 돈을 내 두었다가 사고가 나면 약속한 돈을 받는 상품이다",
              "뜻하지 않은 위험에 대비하는 수단이다"],
    confuse:["as13"] },

  { id:"as13", category:"asset", name:"연금",
    features:["일할 때 적립해 두었다가 노후에 정기적으로 돈을 받는 제도다",
              "국가가 운영하는 것과 개인이 가입하는 것이 있다"],
    confuse:["as12"] }

];

if (typeof module !== "undefined") { module.exports = { SUBJECT, AREAS, UNITS, CATS, MEDIA, ITEMS }; }
