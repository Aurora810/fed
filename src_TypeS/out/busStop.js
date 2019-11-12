function number(busStops) {
    let totalCount = 0;
    for (let i = 0; i < busStops.length; i++) {
        let currentStop = busStops[i];
        let gettinOn = currentStop[0];
        let gettinOff = currentStop[1];
        totalCount += gettinOn;
        totalCount -= gettinOff;
    }
    return totalCount;
}
console.log(number([[10, 0], [3, 5], [5, 8]]));
console.log(number([[6, 3], [0, 1]]));
//# sourceMappingURL=busStop.js.map