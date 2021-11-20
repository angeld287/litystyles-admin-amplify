import { Storage } from 'aws-amplify';
import { resize } from '../../utils/Images/ImageTool';
import { IMAGES } from '../../utils/Constants';

export const putImageOnStorage = async (module, name, file) => {
    try {
        if (file !== []) {

            if (file.type.includes("image/")) {
                const filename = module + "/" + name + ".jpeg";
                const putr = await Storage.put(filename, file, {});
                return putr;
            } else {
                console.log('Solo se puede agregar un archivo tipo imagen.');
                return null;
            }

        } else {
            console.log('No hay imagen seleccionada.');
            return null
        }

    } catch (e) {
        console.log(e);
        return null
    }
}

export const transformAndUploadImages = async (module, name, file) => {

    const communName = new Date().getTime() + "_" + name.replace(/ /g, '_');

    const _320_240 = await resize(file, IMAGES.SIZE_320_240.dimensions);
    const _480_320 = await resize(file, IMAGES.SIZE_480_320.dimensions);
    const _1024_768 = await resize(file, IMAGES.SIZE_1024_768.dimensions);

    const key_320_240 = await putImageOnStorage(module, communName + IMAGES.SIZE_320_240.name, _320_240);
    const key_480_320 = await putImageOnStorage(module, communName + IMAGES.SIZE_480_320.name, _480_320);
    const key_1024_768 = await putImageOnStorage(module, communName + IMAGES.SIZE_1024_768.name, _1024_768);
    const key_ori = await putImageOnStorage(module, communName, _480_320);

    return { key_320_240, key_480_320, key_1024_768, key_ori }
}
