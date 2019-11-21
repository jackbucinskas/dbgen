var chance = new Chance(Math.random);

var userValues = [];
var x = 100;

for (x = 0; x < 100; x++) {
    // var ID = chance.integer({ min: 1000, max: 9999 });
    var FNAME = chance.first();
    var LNAME = chance.last();
    var DOB = chance.birthday({string: true});
    var BALANCE = chance.floating({ min: 0, max: 10000 });

    userValues.push("INSERT INTO USERS VALUES(" + x + ", '" + FNAME + "', '" + LNAME + "', '" + DOB + "', " + BALANCE + ");" );
}

// console.log(userValues);
console.log(userValues.join('\n'));