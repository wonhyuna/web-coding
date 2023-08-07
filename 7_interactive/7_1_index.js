// id로 태그 선택하기
const myTag1 = document.getElementById('myNumber');
console.log(myTag1);

const myTag2 = document.getElementById('btns');
console.log(myTag2);

const myTag3 = document.getElementById('codeit');
console.log(myTag3);
//빈 값은 null로 표현


//class로 태그 선택하기
const myTags = document.getElementsByClassName('color-btn');
console.log(myTags);
console.log(myTags[1]); //사용 가능하지만 진짜 배열은 아니어서 기본 메소드 사용X
console.log(myTags.length);

for (let tag of myTags){
  console.log(tag);
}
//빈 값은 빈 HTMLCollection이 출력됨

//태그 이름으로 태그 선택하기
const btns = document.getElementsByTagName('button');
console.log(btns);

const allTags = documnet.getElementsByTagName("*");
console.log(allTags);