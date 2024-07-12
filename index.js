const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(batteries, accumulator) {
    return batteries + accumulator}, 0,
);
    
