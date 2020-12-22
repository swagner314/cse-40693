function VisionController($scope) {
    const $ctrl = this

    function getScreenshot(videoEl, scale) {
        scale = scale || 1;
    
        const canvas = document.createElement("canvas");
        canvas.width = videoEl.clientWidth * scale;
        canvas.height = videoEl.clientHeight * scale;
        var ctx = canvas.getContext("2d");
        ctx.scale(.5, .5);
        canvas.getContext('2d').drawImage(videoEl, 0, 0, canvas.width, canvas.height);
    
        const image = new Image()
        image.src = canvas.toDataURL();
        return image;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    $ctrl.$onInit = () => {
        /*var video = document.getElementById("videoElement");
        if(navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({video: true})
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err) {
                console.log("ERROR: ", err);
            })
        }*/
        //faceapi.loadFaceRecognitionModel('../../js/')
        this.recog = 0;
        $scope.ch = {
            videoHeight: 600,
            videoWidth: 900
        };
        faceapi.loadFaceLandmarkModel('../../js/').then(
        faceapi.loadSsdMobilenetv1Model('../../js/')
            .then( () => {
                var first = true;
                setInterval( function(){
                    if (first)
                        first = false;
                    else
                        document.getElementById("ss").remove();
                    this.vid = document.getElementById('wc');
                    var ss = getScreenshot(this.vid, 1);
                    ss.setAttribute("id", "ss");
                    ss.setAttribute("hidden", "");
                    document.getElementById("vis").appendChild(ss);
                    this.input = document.getElementById("ss");
                    const detections = faceapi.detectAllFaces(this.input)//.withFaceLandmarks()
                        .then( (res) => {
                            $scope.recog = res.length;
                            $scope.$apply();
                            const canvas = document.getElementById('overlay');
                            canvas.width = this.input.width;
                            canvas.height = this.input.height;
                            // Draw detections
                            var ctx = canvas.getContext("2d");
                            res.forEach(el => {
                                ctx.strokeStyle = "#FF0000";
                                ctx.strokeRect(2*el.box.x, 2*el.box.y, 2*el.box.width, 2*el.box.height);
                            })
                        })
                        .catch(error => {
                            console.log("error: ", error);
                        })
                }, 33);
            })
            .catch(error => {
                console.log("error: ", error)
            }))
    }
}



angular
    .module('components.vision')
    .controller('VisionController', ['$scope', VisionController])