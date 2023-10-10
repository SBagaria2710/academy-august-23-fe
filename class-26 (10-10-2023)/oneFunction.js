function IntroduceYourself() {
  console.log("Hello! I am Shashwat");
}

function One(cb) {
  let count = 0;

  return () => {
    if (count === 0) {
      cb();
      count = count + 1; // count++
    } else {
      console.log("I've already introduced myself");
    }
  };
}

const greetOnce = One(IntroduceYourself);

greetOnce(); // "Hello! I am Shashwat"
greetOnce(); // "I've already introduced myself"
greetOnce(); // "I've already introduced myself"
greetOnce(); // "I've already introduced myself"