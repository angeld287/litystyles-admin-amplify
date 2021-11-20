import { Storage } from 'aws-amplify';
import { resize } from '../../utils/Images/ImageTool';

export const putImageOnStorage = async (module, name, file) => {
    try {
        if (file !== []) {

            if (file.type.includes("image/")) {
                const filename = module + "/" + new Date().getTime() + "_" + name.replace(/ /g, '_') + ".jpeg";
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

    const _320_240 = await resize(file, { width: 320, height: 240 });
    const _480_320 = await resize(file, { width: 480, height: 320 });
    const _1024_768 = await resize(file, { width: 1024, height: 768 });

    const key_320_240 = await putImageOnStorage(module, name + "_320_240", _320_240);
    const key_480_320 = await putImageOnStorage(module, name + "_480_320", _480_320);
    const key_1024_768 = await putImageOnStorage(module, name + "_1024_768", _1024_768);
    const key_ori = await putImageOnStorage(module, file + "_original", _480_320);

    return { key_320_240, key_480_320, key_1024_768, key_ori }
}
