/* nodemon 2.  (tab) */
// 주석 

/* 변수 규칙! 
- 라틴문자(0-9, a-z, A-Z,) _  (언더스코어를 사용한다) 를 사용한다
- 대소문자를 구분한다
- 추천: camelCase 를 쓴다 (likeThis)  두개의 단어를 붙여쓸 때는 두번째 단어를 대문자로 쓴다

- 한국어 x
- 예약어 x
- 숫자로 시작 x
- 특수문자 x  ( _  랑 $ 은 예외)    언더스코어  랑 달러사인
- 이모지 x
- 여러개의 변수를 1, 2, 3, 숫자로 구분 x -> 최대한 의미있게

*/
let apple;
/* 나쁜 예제 */
let number = 20;    // number 는 의미가 없다
let audio1;         //1  2 의미가 없다
let audio2;         //1  2 의미가 없다

/* 좋은 예제 */
let myAge = 20;         //구체적으로 작성한다
let windAudio;
let backgroundAudio       
/* 꿀팁 */
let audioBackground         // 상위항목인 audio 가 먼저 나오는 게 나중에 코드 서칭할 때 편리하다. 뭘 먼저 찾고 싶은가