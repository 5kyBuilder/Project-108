function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/FGH6eXpYx/model.json", getModelReady);
}

function getModelReady()
{
    classifier.classify(gotResults);
}

function gotResults(err, result)
{
    if(err)
    {
        console.error(err);
    }else{
        console.log(result);

        random_r = Math.floor(Math.random() * 255) + 1;
        random_g = Math.floor(Math.random() * 255) + 1;
        random_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("object").innerText = "I can hear: " + result[0].label;
        document.getElementById("accuracy").innerText = "Accuracy: " + (result[0].confidence * 100).toFixed(1) + "%";
        document.getElementById("object").style.color = "rgb("+ random_r +","+ random_g +","+ random_b +")";
        document.getElementById("accuracy").style.color = "rgb("+ random_r +","+ random_g +","+ random_b +")";

        resultimg = document.getElementById("result");

        if(result[0].label == "Bark")
        {
            resultimg.src = "dog.png"
        }else if(result[0].label == "Meow"){
            resultimg.src = "cat.png"

        }else if(result[0].label == "Roar"){
            resultimg.src = "lion.png"
        }else if(result[0].label == "Roar"){
            resultimg.src = "cow.png"
        }else{
            resultimg.src = ""
        }
    }    
}