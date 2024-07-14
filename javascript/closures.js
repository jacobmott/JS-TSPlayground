//https://www.youtube.com/watch?v=47SPG8TvUXA

function func1() {
  const age = 21;

  function func2() {
    console.log(age);
  }

  return func2;
}

const func = func1();

func();

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
