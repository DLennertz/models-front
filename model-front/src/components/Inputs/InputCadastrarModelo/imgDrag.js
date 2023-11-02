document.querySelectorAll(".drop-zone__input").forEach(inputElement =>{
    const dropZoneElement = inputElement.closest(".drop-zone");
    
    dropZoneElement.addEventListener("dragover", e =>{
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });

    ["dragleave","dragend"].forEach(type =>{
        dropZoneElement.addEventListener(type, e =>{
            dropZoneElement.classList.remove("drop-zone--over");
        });
    });

    dropZoneElement.addEventListener("drop", e =>{
        e.preventDefault();
        var data = document.getElementById("image");
        console.log(data.value);
        if(e.dataTransfer.files.length){
            //inputElement.files = e.dataTransfer.files;
            //updateThumbnail(dropZoneElement, e.dataTransfer.files[0])
        }

        dropZoneElement.classList.remove("drop-zone--over");
    });
    
});
