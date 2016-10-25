function one(q,r){
  r=r+1;
  console.log('one',r)  
}

function two(q,r){
  console.log('two')
}

function three(q,r){
  console.log('three')
}
function allFunction(a,b,c){
  var str='trutyryuruy';
  a(4,str);
  b(str);
  c(str);
}

allFunction(one,two,three);
