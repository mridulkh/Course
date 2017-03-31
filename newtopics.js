var array = [
    { name: 'Nadeem', roll: 7 },
    { name: 'Mukul', roll: 3 },
    { name: 'Shubham', roll: 5 },
    { name: 'abhay', roll: 4 },
    { name: 'Xyz', roll: 14 }
];

console.log('-----------------------');


array.forEach(function(item) {
    console.log(item.name + ' - ' + item.roll);
});

//array.splice(2,4);

console.log('------slice-----------------');
var t6 = array.slice(2, 4);


t6.forEach(function(item) {
    console.log(item.name + ' - ' + item.roll);
});



console.log(',-----------------');

var t1 = array.filter(function(item) {
    return item.name.charAt(0) == 'A' || item.name.charAt(0) == 'X';

});


t1.forEach(function(item) {
    console.log(item.name + ' - ' + item.roll);
});

console.log('----ye wala filter-');
var xyz = array.filter(function(item) {
    return item.roll >= 5;
});
console.log('-----------------');
xyz.forEach(function(item) {
    console.log(item.name);
})

console.log('-----------------');
mridul = [
    { name: 'Nadeem', roll: 7 },
    { name: 'Mukul', roll: 3 },
    { name: 'Shubham', roll: 5 },
    { name: 'abhay', roll: 4 },
    { name: 'Xyz', roll: 14 }
];

mridul.forEach(function(item) {
    console.log(item.name);
});

var t3 = array.filter(function(item) {
    return item.name.charAt(0) == 'a' || item.name.charAt(0) == 'X';

});
console.log('-----------------');

t3.forEach(function(item) {
    console.log(item.name);
});


console.log('-----------------');

var a = [1, 4, 5, 10];

var x = a.map(function(item) {
    return item * item;
});

console.log('-----------------');

x.forEach(function(item) {
    console.log(item);
});

console.log('-----------------');
var arr = [
    { name: 'Nadeem', roll: 7 },
    { name: 'Mukul', roll: 3 },
    { name: 'Shubham', roll: 5 },
    { name: 'abhay', roll: 4 },
    { name: 'Xyz', roll: 14 }
];

console.log(arr);

console.log('-----------------');

var mappedArray = arr.map(function(item) {
    item.isValid = item.roll >= 5;
    return item;
});

console.log(mappedArray);

console.log('yahan se alag ho gya');

var y = [14, 11, 88, 33, 44];

y.sort();
console.log(y);


array.sort(function(obj1, obj2) {
    if (obj1.name.toLowerCase() > obj2.name.toLowerCase()) return 1;
    else if (obj1.name.toLowerCase() < obj2.name.toLowerCase()) return -1;
    else return 0
});

console.log(array);


console.log('----reduce------------');

var ax = [1, 3, 5];
ax.reduce(function(counter, item) {
        return counter+item;
    },6);

ax.forEach(function(counter) {
    console.log(counter);
});
