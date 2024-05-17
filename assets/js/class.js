function getOffsetX () {
    return document.offsetX
}

function getOffsetY () {
    return document.offsetY
}

class Pointer {
    constructor( offsetX , offsetY ) {
        this.x = offsetX
        this.y = offsetY
    }
}



document.body.addEventListener("click", () => {

    const test = new Pointer(getOffsetX(), getOffsetY())

})