var friendsAge = [11, 25, 17, 20];
console.log (friendsAge[2]);

var vowels = ['a', 'e', 'i', 'o', 'u'];

// length dara koto gula array valu ase seita ber kora jay
console.log(vowels.length);
console.log(vowels[2]);


var numbers = [45, 55, 24, 85, 65, 45, 25];
// array er vitor number change kore fela 55 er maan ekhn 2
numbers[1] = 2;

console.log(numbers[0] + numbers[1]);

    numbers[1] = 2;

    console.log(numbers);

    // find index or value of an array ,,, array er vitor ekta valu koto number a ase seta ber kora 
    // index dara koto number position a ase
    //indexOf dara position number ber kora
    // value na thakle -1 dekhabe

    var findIndex = numbers.indexOf(45);
    console.log(findIndex);