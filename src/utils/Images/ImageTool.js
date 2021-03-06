import EXIF from 'exif-js';

const hasToBlobSupport = (typeof HTMLCanvasElement !== 'undefined' ? HTMLCanvasElement.prototype.toBlob : false);

const hasBlobSupport = (hasToBlobSupport || (typeof Uint8Array !== 'undefined' && typeof ArrayBuffer !== 'undefined' && typeof atob !== 'undefined'));

const hasReaderSupport = (typeof FileReader !== 'undefined' || typeof URL !== 'undefined');

const hasCanvasSupport = (typeof HTMLCanvasElement !== 'undefined');

const isSupportedByBrowser = () => (hasCanvasSupport && hasBlobSupport && hasReaderSupport);

const loadImage = (image, file) => {
    if (typeof (URL) === 'undefined') {
        const reader = new FileReader();
        reader.onload = (event) => {
            image.src = event.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        image.src = URL.createObjectURL(file);
    }
};

const drawImageToCanvas = (img, orientation = 1, x = 0, y = 0, width = img.width, height = img.height, method = 'contain') => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;

    ctx.save();
    switch (Number(orientation)) {
        // explained here: https://i.stack.imgur.com/6cJTP.gif
        case 1:
            break;

        case 2:
            ctx.translate(width, 0);
            ctx.scale(-1, 1);
            break;

        case 3:
            ctx.translate(width, height);
            ctx.rotate((180 / 180) * Math.PI); // 180/180 is 1? No shit, but how else will you know its need 180 rotation?
            break;

        case 4:
            ctx.translate(0, height);
            ctx.scale(1, -1);
            break;

        case 5:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate((90 / 180) * Math.PI);
            ctx.scale(1, -1);
            break;

        case 6:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate((90 / 180) * Math.PI);
            ctx.translate(0, -height);
            break;

        case 7:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate((270 / 180) * Math.PI);
            ctx.translate(-width, height);
            ctx.scale(1, -1);
            break;

        case 8:
            canvas.width = height;
            canvas.height = width;
            ctx.translate(0, width);
            ctx.rotate((270 / 180) * Math.PI);
            break;

        default:
            break;
    }

    if (method === 'crop') ctx.drawImage(img, (img.width / 2) - (width / 2), (img.height / 2) - (height / 2), width, height, 0, 0, width, height);
    else ctx.drawImage(img, x, y, width, height);
    ctx.restore();

    return canvas;
};

const hasBlobConstructor = typeof (Blob) !== 'undefined' && (function checkBlobConstructor() {
    try {
        return Boolean(new Blob());
    } catch (error) {
        return false;
    }
}());


const hasArrayBufferViewSupport = hasBlobConstructor && typeof (Uint8Array) !== 'undefined' && (function checkArrayBufferView() {
    try {
        return new Blob([new Uint8Array(100)]).size === 100;
    } catch (error) {
        return false;
    }
}());

const toBlob = (canvas, type) => {
    const dataURI = canvas.toDataURL(type);
    const dataURIParts = dataURI.split(',');
    let byteString;
    if (dataURIParts[0].indexOf('base64') >= 0) {
        byteString = atob(dataURIParts[1]);
    } else {
        byteString = decodeURIComponent(dataURIParts[1]);
    }
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const intArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i += 1) {
        intArray[i] = byteString.charCodeAt(i);
    }

    const mimeString = dataURIParts[0].split(':')[1].split(';')[0];
    let blob = null;

    blob = new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], { type: mimeString });

    //if (hasBlobConstructor) {
    //    blob = new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], { type: mimeString });
    //} else {
    //    const bb = new BlobBuilder();
    //    bb.append(arrayBuffer);
    //    blob = bb.getBlob(mimeString);
    //}

    return blob;
};

export const resize = (file, maxDimensions) => new Promise((resolve) => {

    if (!isSupportedByBrowser || !file.type.match(/image.*/)) return resolve(file);  // early exit - not supported

    if (file.type.match(/image\/gif/)) return resolve(file); // early exit - could be an animated gif

    const image = document.createElement('img');

    image.onload = () => {
        let width = image.width;
        let height = image.height;

        if (width >= height && width > maxDimensions.width) {
            height *= maxDimensions.width / width;
            width = maxDimensions.width;
        } else if (height > maxDimensions.height) {
            width *= maxDimensions.height / height;
            height = maxDimensions.height;
        } else return resolve(file); // early exit; no need to resize

        EXIF.getData(image, () => {
            const orientation = EXIF.getTag(image, 'Orientation');
            const imageCanvas = drawImageToCanvas(image, orientation, 0, 0, width, height, 'contain');
            if (hasToBlobSupport) imageCanvas.toBlob(blob => resolve(blob), file.type);
            else resolve(toBlob(imageCanvas, file.type));
        });
    };

    loadImage(image, file);

    return true;
});
