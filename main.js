

function start_classification(
)

{

navigator.mediaDevices.getUserMedia({ audio: true});
 

  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KCe7b_O82/model.json',modelLoaded);
  
}
  function modelReady(){
    classifier.classify(gotResults);
  }
  
  function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_object_name").innerHTML = 'Detected voice of '+ results[0].label;
    
    document.getElementById("result_object_name").style.color = "rgb("+random+","+random_number_g+","+random_number_g+")";

    img = document.getElementById('meowing');
    img1 = document.getElementById('barking');
    img2 = document.getElementById('mooing');
    img3 = document.getElementById('roar');

    if (results[0].label == "meowing") {
    img.src = 'cat.jpeg';
    }
    else if (results[0].label == "barking") {
      img.src = 'dog.jpeg';
    }
    else if (results[0].label == "mooing") {
      img.src = 'cow.jpeg';
    }
    else if (results[0].label == "roar") {
      img.src = 'lion.jpeg';
    }

    document.getElementById("result_object_name").innerHTML = results[0].label;
    
  }
}