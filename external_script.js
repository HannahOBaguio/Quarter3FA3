function change3Nums(){
       const x = Math.floor(Math.random() * 20);
       const y = Math.floor(Math.random() * 20);
       const z = Math.floor(Math.random() * 20);
              
       document.getElementById("num1").innerHTML = x;
       document.getElementById("num2").innerHTML = y;
       document.getElementById("num3").innerHTML = z;
              
       let resultNum = BigNum(x, y, z);
       document.getElementById("MaxNum").innerHTML = resultNum;
              
       let resultName = getletter(x)
       document.getElementById("name").innerHTML = resultName;
              
       let resultTime = getTime(y, z);
       document.getElementById("gettime").innerHTML = resultTime;
}
            
function BigNum(n1, n2, n3){
       return  "The board states that Alakid was able to finish a total of: " + parseInt(Math.max(n1, n2, n3)) + " games";
}
            
function getletter(num){
       var letters = "ABCDEFGHIJKLMNOPQRSTU";
       let guideL = parseInt(Math.min(num));
       return "He was suprised with a prize given unto him, and the prize ends with a letter " +  letters.charAt(guideL);
}
            
function getTime(numero1, numero2){
       var value = numero1 * numero2;
       var hr = Math.floor(value/60);
       var min = value % 60;
              
       return  "Alakid realize that he was able to finish all of his games from his cards in just " + hr + " hour/s" + " and " + min + " minute/s";
}