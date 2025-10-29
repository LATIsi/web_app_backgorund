// 10개의 명언 중 랜덤으로 하나의 원문, 해석본, 저자를 보이게 하는 기능

const quotesList = [
     {
          proverb:"The only way of discovering the limits of the possible is to venture a little way past them into the impossible.",
          translation:"가능의 한계를 알기 위한 유일한 방법은 불가능의 영역에 살짝 발을 들여 놓아 보는 것.",
          author:"William Shakespeare",
     },
     {
          proverb:"The greatest weakness of all weaknesses is to fear too much to appear weak.",
          translation:"가장 큰 약점은 약점을 보일 것에 대한 두려움이다.",
          author:"J. B. Bossuet",
     },
     {
          proverb:"Those who cannot remember the past are condemned to repeat it.",
          translation:"과거를 기억 못하는 이들은 과거를 반복하기 마련이다.",
          author:"George Santayana",
     },
     {
          proverb:"Wer mit Ungeheuern kämpft, mag zusehn, dass er nicht dabei zum Ungeheuer wird. Und wenn du lange in einen Abgrund blickst, blickt der Abgrund auch in dich hinein.",
          translation:"괴물과 싸우는 사람은 그 싸움 속에서 스스로도 괴물이 되지 않도록 조심해야 한다. 우리가 괴물의 심연을 오래동안 들여다 본다면, 그 심연 또한 우리를 들여다 보게될 것이다.",
          author:"Friedrich Wilhelm Nietzsche",
     },
     {
          proverb:"The most damaging phrase in the language is: It's always been done that way.",
          translation:"그간 우리에게 가장 큰 피해를 끼친 말은 바로 지금껏 항상 그렇게 해왔어라는 말이다.",
          author:"Grace Brewster Murray Hopper",
     },
     {
          proverb:"It ain't over till it's over.",
          translation:"끝날 때까지는 끝난 게 아니다.",
          author:"Lawrence Peter 'Yogi' Berra",
     },
     {
          proverb:"You can discover more about a person in an hour of play than in a year of conversation,",
          translation:"1시간의 놀이가 1년간의 대화보다 그 사람을 더 잘 알게 해준다.",
          author:"Plato",
     },
     {
          proverb:"If you want to test a man`s character, give him power.",
          translation:"누군가의 인격을 시험해 보고 싶다면, 그에게 권력을 줘 보라",
          author:"Abraham Lincoln",
     },
     {
          proverb:"semble que la perfection soit atteinte non quand il n'y a plus rien à ajouter, mais quand il n'y a plus rien à retrancher.",
          translation:"더 이상 추가할 것이 없을 때가 아니라 더 이상 뺄 것이 없을 때, 완벽함이 성취된다.",
          author:"Antoine de Saint-Exupéry",
     },
     {
          proverb:"You can't be neutral on a moving train.",
          translation:'달리는 기차 위에 중립은 없다.',
          author:"Howard Zinn",
     },
];

const proverb = document.querySelector(".proverb");
const translation = document.querySelector(".translation");
const author = document.querySelector(".author");

// quotesList의 갯수가 10개, Math.random() 은 0.n으로 랜덤이 나오니 0.n * 10(리스트 갯수) = n 번째 명언이 나오는 것
// 위의 값을 Math.floor로 내려서 어중간하게 0.n이 안나오게 하기
const todayQuote = quotesList[Math.floor(Math.random() * quotesList.length)];

proverb.innerText = todayQuote.proverb;
translation.innerText = todayQuote.translation;
author.innerText = todayQuote.author;


