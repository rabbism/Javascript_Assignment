function kilomiterToMerter(num){
    var meter = num *1000;
    return meter;
}
var nana= kilomiterToMerter(5)
console.log(nana)
//Budget calculator  //

function budgetCalculator(num1,num2,num3){
    var clock =num1*50;
    var mobile =num2*100;
    var laptop=num3*500;
    result =clock + mobile + laptop ;
    return result;
}
var nana =budgetCalculator(14 ,25 ,10);
console.log(nana)

//       Hotel Cost  //
function hotelCost (day){
    if(day<=10){
        money = day *100;
    }
    else if (day <=20){
        var firstPart = 10*100;
        var remaning =day-10;
        var secondPart= remaning * 80;
        money =firstPart + secondPart ;

    }
    else{
        var firstPart =10*100;
        var secondPart=10*80;
        var remaning = day-20;
        var thirdPart = remaning*50;
        money = firstPart + secondPart +thirdPart ;
    }
    return money;
}
// Maga Friends //
function magaFriends(name){
    var max =name[0]
    for (var i = 0; i <name.length; i++) {
        var element = name[i];
        if(element > max){
            max = element;
        }

        
    }

}
var friendsAges = megaFriends(["samal","kalam","jamal"]);
console.log(friendsAges )
//