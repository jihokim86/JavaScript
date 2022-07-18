//배열 합치기 concat
// const 수정불가
// let 중복불가
// var 허용

const prevList = [1,2,3];
const currentList = [4,5,6];
const nextList = [7,8,9];

console.log(prevList.concat(currentList));
console.log(prevList.concat(currentList,nextList));

console.log(['배열'].concat('합치기'));
console.log(['배열'].concat('합치기','javascript'));