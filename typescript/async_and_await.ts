function getRobots(simError: boolean, way: string): Promise<string> {
  let doError = simError;
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

//Way 1
console.log("Way 1");
async function way1() {
  try {
    let data: string = await getRobots(false, "way1");
    console.log(data);
    let data2: string = await getRobots(true, "way1");
    console.log(data2);
  } catch (error: any) {
    console.log(error);
  }
}
way1();
