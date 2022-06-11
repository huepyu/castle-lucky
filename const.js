const kingdomName = '캐슬'

const members = [
  { name: '휴퓨' },
  { name: '츄퓨' },
  { name: 'Mookie' },
  { name: '킴과자' },
  { name: '곽만송' },
  { name: '박나영' },
  { name: '냉혹한걸음' },
  { name: '다솜다솜' },
  { name: '덕몽' },
  { name: '됴이찡' },
  { name: '딱이야' },
  { name: '레미마르' },
  { name: '매력' },
  { name: '몽뭉몽뭉잉' },
  { name: '문현빈' },
  { name: '므s' },
  { name: '봄여름가을겨울' },
  { name: '삐누' },
  { name: '사나찡' },
  { name: '생명' },
  { name: '섬광의나나' },
  { name: '스브리' },
  { name: '시비' },
  { name: '나만의여름' },
  { name: '오공디' },
  { name: '우1치' },
  { name: '작은별' },
  { name: '조조' },
  { name: '지탱이' },
  { name: '징쨩' },
  { name: '님민지' },
  { name: '차하' },
  { name: '체리링' },
  { name: '촙촙2' },
  { name: '촙촙이' },
  { name: '크필' },
  { name: '클린아티' },
  { name: '파라블로' },
  { name: '해긔' },
  { name: '햇디무' },
  { name: '이십사수' },
  { name: 'Jason82' },
  { name: 'SHOT' },
  { name: '쿠마입니다' },
  { name: '구희' },
  { name: '유연' },
]
  .sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }
    return 1
  })
  .map((m, idx) => ({
    ...m,
    id: idx + 1,
    stack: 0,
    rewards: [],
  }))
