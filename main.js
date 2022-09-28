function StartClasification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XrawLI9yV/.json', model_ready);
}
function model_ready(){
    classifier.classify(got_results);
}
var dog=0;
var cat=0;
var horse=0;
var duck=0;
var elephant=0;
function got_results(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML= 'I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML= 'Acurracy - '+(results[0].confidence*100).toFixed(3)+"%";

        img1=document.getElementById('dog');
        img2=document.getElementById('elephant');
        img3=document.getElementById('duck');
        img4=document.getElementById('horse');
        img5=document.getElementById('cat');

        if(results[0].label=="Dog"){
            img1.src='DOG.gif';
            var dog=dog+1;
            console.log("Dog count="+dog)
        }
        else if(results[0].label=="Elephant"){
            img2.src='ELEPHANT.gif';
            var elephant=elephant+1;
            console.log("Elephant count = "+elephant)
        }
        else if(results[0].label=="Duck"){
            img3.src='DUCK.gif';
            var duck=duck+1;
            console.log("Duck count = "+duck)
        }
        else if(results[0].label=="Horse"){
            img4.src='Horse.gif';
            var horse=horse+1;
            console.log("Horse count = "+horse)
        }
        else{
            img5.src='CAT.gif';
            var cat=cat+1;
            console.log("Cat count = "+cat)
        }
    }
}