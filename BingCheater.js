javascript: var youtube = 0;
var bing = 0;
var bingScriptMain;
var bingScriptTwo;
var bingScriptThree;
var bingSelectorList;
var bingSelector1;
var bingSelector2;
var bingSelector3;
var youtubeSelector;
/*Variable stored ^*/
var p = 'youtube';
var p1 = 'bing';
var p2 = prompt('enter <bing> or <youtube> here');

if (p2 === p1) {
    alert('You Entered Bing Script');
    youtube = 0;
    bing = 1;
    /* 15 pages should pop up consisting of digits ordered
in a random variety the digits include 1, 2, 3, 4, 5, 6,
7, 8, 9, and 0
*/
} else if (p2 === p) {
    alert('You Entered Youtube Script');
    youtube = 1;
    bing = 0;
    /* A random youtube video should pop up Made with arrays to 
       generate a youtube url with 11 digits that consists of
       A variety of both numbers and letters*/
} else if (p2 !== p || p2 !== p1) {
    alert('Enter <bing> or <youtube>');
}
var bingArray1 = new Array();
bingArray1[0] = 1;
bingArray1[1] = 2;
bingArray1[2] = 3;
bingArray1[3] = 4;
bingArray1[4] = 5;

var bingArray2 = new Array();
bingArray2[0] = 6;
bingArray2[1] = 7;
bingArray2[2] = 8;
bingArray2[3] = 9;
bingArray2[4] = 0;

var bingArray3 = new Array();
bingArray3[0] = 1;
bingArray3[1] = 2;
bingArray3[2] = 3;
bingArray3[3] = 4;
bingArray3[4] = 5;

/*The arrays to store the bingCheat links*/
if (youtube === 1) {

 

    window.open('http://youtube.com/' + youtubeArray[youtubeSelector] + youtubeArray[youtubeSelector] + youtubeArray[youtubeSelector] + youtubeArray[youtubeSelector] + youtubeArray[youtubeSelector]+ youtubeArray[youtubeSelector] + youtubeArray[youtubeSelector] + youtubeArray[youtubeSelector] + youtubeArray[youtubeSelector] + youtubeArray[youtubeSelector] + youtubeArray[youtubeSelector]);
}
if (bing === 1) {
    for (i = 0; i < 15; i++) {
        /*The for loop should open 15 pages*/
        bingSelector1 = Math.floor(Math.random() * bingArray1.length);
        bingSelector2 = Math.floor(Math.random() * bingArray2.length);
        bingSelector3 = Math.floor(Math.random() * bingArray3.length);
        /*the array randomizers*/
        var bingArrayList = new Array();
        bingArrayList[0] = 'http://www.bing.com/search?q=' + bingArray1[bingSelector1] + bingArray2[bingSelector2] + bingArray3[bingSelector3];
        bingArrayList[1] = 'http://www.bing.com/search?q=' + bingArray3[bingSelector3] + bingArray2[bingSelector2] + bingArray1[bingSelector1];
        bingArrayList[2] = 'http://www.bing.com/search?q=' + bingArray2[bingSelector2] + bingArray3[bingSelector3] + bingArray1[bingSelector1];
        bingArrayList[3] = 'http://www.bing.com/search?q=' + bingArray3[bingSelector3] + bingArray1[bingSelector1] + bingArray2[bingSelector2];
        /*the array to ensure almost complete randomness you should rarely see 2 exact same links in one cheat*/
        bingSelectorList = Math.floor(Math.random() * bingArrayList.length);

        window.open(bingArrayList[bingSelectorList]);
        /*opens the websites*/
    }
}









/*Coded By Azura*/