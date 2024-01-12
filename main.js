https://teachablemachine.withgoogle.com/models/80ZDce5KK/

Webcam.set({
    width: 300,
    height:300,
    image_format:'png',
    image_quality:90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")

function capture_img(){
    Webcam.snap(function(data_uri){
        document.getElementById("showimg").innerHTML="<img id='camera' src='"+data_uri+"'>"
    })
}
console.log('ml5.version')
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/80ZDce5KK/model.json",modelLoaded)
function modelLoaded(){
    console.log('model loaded successfully')
}

