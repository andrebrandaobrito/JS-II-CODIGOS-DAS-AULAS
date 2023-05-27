const foo = document.querySelector("#foo");
foo.innerHTML = "foo";

function onClickFoo() {
  console.log(this.innerHTML);
}

foo.addEventListener("click", onClickFoo);
