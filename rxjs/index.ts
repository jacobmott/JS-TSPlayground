// import the fromEvent operator
import { fromEvent } from "rxjs";
import { of } from "rxjs";
import { map } from "rxjs/operators";
import { filter } from "rxjs/operators";
//https://www.learnrxjs.io/learn-rxjs/concepts/rxjs-primer
// grab button reference
const button: HTMLElement | null = document.getElementById("myButton");

if (!button) {
  console.log("Button not found");
} else {
  // create an observable of button clicks
  const myObservable = fromEvent(button, "click");

  // instead of a function, we will pass an object with next, error, and complete methods
  const subscription = myObservable.subscribe({
    // on successful emissions
    next: (event) => console.log(event),
    // on errors
    error: (error) => console.log(error),
    // called once on completion
    complete: () => console.log("complete!"),
  });

  /*
   *  'of' allows you to deliver values in a sequence
   *  In this case, it will emit 1,2,3,4,5 in order.
   */
  const dataSource = of(1, 2, 3, 4, 5);

  // subscribe to our source observable
  console.log("Testing of and map");
  const subscription2 = dataSource
    .pipe(
      // add 1 to each emitted value
      map((value) => value + 1)
    )
    // log: 2, 3, 4, 5, 6
    .subscribe((value) => console.log(value));

  // subscribe to our source observable
  console.log("Testing filter");
  const subscription4 = dataSource
    .pipe(
      // only accept values 2 or greater
      filter((value) => value >= 2)
    )
    // log: 2, 3, 4, 5
    .subscribe((value) => console.log(value));
}
