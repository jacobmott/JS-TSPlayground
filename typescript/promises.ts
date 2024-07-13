function getRobots(simError: boolean, way: string): Promise<string> {
  let doError: boolean = simError;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (doError) {
        reject("Couldn't get robots: " + way);
      } else {
        resolve("Got robots: " + way);
      }
    }, 1000);
  });
}

let getSomeRobots: Promise<string> = getRobots(false, "way1");
let getSomeRobots2: Promise<string> = getRobots(true, "way1");

//Way 1
console.log("Way 1");
getSomeRobots
  .then((data: string) => {
    console.log(data);
  })
  .catch((error: string) => {
    console.log(error);
  });

getSomeRobots2
  .then((data: string) => {
    console.log(data);
  })
  .catch((error: string) => {
    console.log(error);
  });

//Way 2
let getSomeRobots3: Promise<string> = getRobots(false, "way2");
console.log("Way 2");
getSomeRobots3
  .then((data: string) => {
    console.log(data);
    return getRobots(true, "way2");
  })
  .then((data: string) => {
    console.log(data);
  })
  .catch((error: string) => {
    console.log(error);
  });

//Way 3
let getSomeRobots4: Promise<string> = getRobots(false, "way3");
let getSomeRobots5: Promise<string> = getRobots(true, "way3");
console.log("Way 3");
getSomeRobots4
  .then((data: string) => {
    console.log(data);
    getSomeRobots5
      .then((data: string) => {
        console.log(data);
      })
      .catch((error: string) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });

//Way 4
console.log("Way 4");
getRobots(false, "way4")
  .then((data: string) => {
    console.log(data);
    return getRobots(true, "way4");
  })
  .then((data: string) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//Way 5
console.log("Way 5");
let getSomeRobots6: Promise<string> = getRobots(false, "way5");
let getSomeRobots7: Promise<string> = getRobots(false, "way5");

Promise.all([getSomeRobots6, getSomeRobots7])
  .then((values: string[]) => {
    console.log(values);
  })
  .catch((error: string) => {
    console.log(error);
  });
