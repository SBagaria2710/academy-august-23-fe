function parent() {
  let a = 100;
  
  function child() {
    console.log(a); // 100

    function child1() {
      console.log(a); // 100
      console.log(b); // Error: Reference Error
    }

    child1();
  }

  child();
};

parent();