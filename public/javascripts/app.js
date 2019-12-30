function cameraStart() {
    const cameraView = document.querySelector("#camera--view");
    if (cameraView != null) {
        var constraints = { video: { facingMode: "user" }, audio: false };

        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (stream) {
                track = stream.getTracks()[0];
                cameraView.srcObject = stream;
            })
            .catch(function (error) {
                console.error("Something is broken.", error);
            })
    }
}
function playCamera() {
    const cameraView = document.querySelector("#camera--view");
    if (cameraView != null) {
        const cameraOutput = document.querySelector("#camera--output");
        const cameraSensor = document.querySelector("#camera--sensor");
        const cameraTrigger = document.querySelector("#camera--trigger");

        cameraTrigger.onclick = function () {
            cameraSensor.width = cameraView.videoWidth;
            cameraSensor.height = cameraView.videoHeight;
            cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
            cameraOutput.src = cameraSensor.toDataURL("image/jpeg", 0.5);
            cameraOutput.width = cameraOutput.height = "80";
            console.log('==', cameraOutput.src);
            cameraOutput.classList.add("taken");
            localStorage.setItem("storage", cameraOutput.src);
            location.href = '/student';
        }
    }
}

cameraStart();
playCamera();

