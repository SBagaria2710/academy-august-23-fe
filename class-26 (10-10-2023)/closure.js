function parent() {
  var a = 20;

  function child() {
    console.log(a);

    function child1() {
      console.log(a);
    }

    return child1;
  }

  return child;
}

const functionReceivedChild = parent();
const functionReceivedChild1 = functionReceivedChild();

functionReceivedChild1();