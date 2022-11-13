// var fullName = 'Huỳnh Tấn Duy';
// var age = 21;

//Dat bien
// alert(fullName);
// alert(age);

// confirm("12")
// prompt('Nhap ten')

// setInterval(function() {
//     alert("OK")
// }, 5000)
// var a = 5+5
// var b = 2
// console.log(a--)

// function tr3(x) {
//     return x*3;
// }

// var result = tr3(10);
// console.log(result);

// var ran = Math.floor(Math.random()*8);
// console.log(ran);

// var arr = [];

// function getRandNumbers(min, max, length) {
//     for (var i=1; i<=length; i++) {
//         arr[i] = Math.floor(Math.random() * (max-min) + min + min);
//     }
//     return arr;
// }

// getRandNumbers(1, 10, 4);
// console.log(arr);

// function getTotal(arr) {
//     var s = 0;
//     for (var i = 0; i < arr.length; i++) {
//         s += arr[i];
//     }
//     return s;
// }

// console.log(getTotal([1,2,3]));
// console.log(getTotal([2,3,3]));
// console.log(getTotal([7,2,3]));
// console.log(getTotal([5,2,3]));
// console.log(getTotal([5,10,10]));



// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// function getTotal(arr) {
//     var arrLength = arr.length;
//     var Sum = 0;
//     for(var i = 0; i < arrLength; i++) {
//         Sum += arr[i].price;
//     }
//     return Sum;
// }

// console.log(getTotal(orders));






// function run(object) {
//     var arr = [];
//     for(var key in object) {
//         arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//     }
//     return arr;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));




// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];
// var leArray = myArray.length;

// for ( var i = 0; i < leArray; i++) {
//     // console.log(myArray[i]);
//     var leLeArray = myArray[i].length;
//     for (var j = 0; j < leLeArray; j++) {
//         console.log(myArray[1][1]);
//     }
// }


// var a = [0,1,2,3,4,5];
// console.log(a);




// giai thừa
// function giaiThua(n) {
//     var s = 1;
//     for (n; n > 0; n--) {
//         s = s * n;
//     }
//     return s;
// };

// console.log(giaiThua(6));



// // Giai thua de quy
// var s = 1;
// function giaiThua2(n) {
//     if(n>0) {
//         s = s * n;
//         return giaiThua2(n-1);
//     }
//     return s;
// }

// console.log(giaiThua2(6));




// FILTER
// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// function getMostFavoriteSport(arr){
//     var listArr = arr.filter(function (sport){
//         return sport.like > 5;
//     });
//     return listArr;
// }

// Kỳ vọng
// console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]



var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
    }
];

//   var Nolan = watchList.filter(function(watchList, index){
//     return watchList.Writer = "Christopher Nolan"
//   })

//   var Nolan1 = watchList.filter((x) => x.Director === "Christopher Nolan")



//   var i = 0
//   function diem(){
//     i++
//     var tong = accmulator + currentValue.
//   }

//   var tongdiem = Nolan.reduce((previousValue, currentValue) => previousValue + Number(currentValue.imdbRating))

// function calculateRating(watchList){
//     var Nolan = watchList.filter(function(movie){
//         return movie.Director === "Christopher Nolan"
//     })
//     return Nolan.reduce(function(totalRating, movie){
//         return totalRating + parseFloat(movie.imdbRating);
//     }, 0) * (1 / Nolan.length);

// }

// Expected results
// console.log(calculateRating(watchList)); // Output: 8.675

// const numbers = [1, 2, 3, 4, 5]

// Array.prototype.reduce2 = function(callBack, result){

//     for(let i = 0; i< this.length; i++){
//         result = callBack(result, this[i], i, this)
//     }

//     return result
// }

// const result = numbers.reduce2((total, number) => {
//     return total + number;
// })

// console.log(result)




// Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];

// function arrToObj(arr){
//     return arr.reduce((tichtru, tieptheo) => {

//     }, {})
// }

// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

var cars = ['Rolls-Royce', 'Mercedes', 'Lexus', 'BMW', 'Audi'];

function checkCar(cars) {
   return cars.includes('Mercedes', 2);
}

console.log(checkCar(cars));