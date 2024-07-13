"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRobots(simError, way) {
    let doError = simError;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (doError) {
                reject("Couldn't get robots: " + way);
            }
            else {
                resolve("Got robots: " + way);
            }
        }, 1000);
    });
}
let getSomeRobots = getRobots(false, "way1");
let getSomeRobots2 = getRobots(true, "way1");
//Way 1
console.log("Way 1");
getSomeRobots
    .then((data) => {
    console.log(data);
})
    .catch((error) => {
    console.log(error);
});
getSomeRobots2
    .then((data) => {
    console.log(data);
})
    .catch((error) => {
    console.log(error);
});
//Way 2
let getSomeRobots3 = getRobots(false, "way2");
console.log("Way 2");
getSomeRobots3
    .then((data) => {
    console.log(data);
    return getRobots(true, "way2");
})
    .then((data) => {
    console.log(data);
})
    .catch((error) => {
    console.log(error);
});
//Way 3
let getSomeRobots4 = getRobots(false, "way3");
let getSomeRobots5 = getRobots(true, "way3");
console.log("Way 3");
getSomeRobots4
    .then((data) => {
    console.log(data);
    getSomeRobots5
        .then((data) => {
        console.log(data);
    })
        .catch((error) => {
        console.log(error);
    });
})
    .catch((error) => {
    console.log(error);
});
//Way 4
console.log("Way 4");
getRobots(false, "way4")
    .then((data) => {
    console.log(data);
    return getRobots(true, "way4");
})
    .then((data) => {
    console.log(data);
})
    .catch((error) => {
    console.log(error);
});
//Way 5
console.log("Way 5");
let getSomeRobots6 = getRobots(false, "way5");
let getSomeRobots7 = getRobots(false, "way5");
Promise.all([getSomeRobots6, getSomeRobots7])
    .then((values) => {
    console.log(values);
})
    .catch((error) => {
    console.log(error);
});
