import axios from 'axios';

class CustomUploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }

    upload() {
        return this.loader.file.then(file => new Promise((resolve, reject) => {
            const data = new FormData();
            data.append('upload', file);
            data.append('fileName', file.name)
            data.append('fileType', file.type)
            data.append('fileSize', file.size)

            axios.post('http://localhost:8072/board/api/files/editor/upload', data)
                .then(response => {
                    console.log(response)
                    resolve({
                        default: response.data.url // 업로드된 이미지 URL
                    });
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        }));
    }

    abort() {
        // 업로드 중단 로직 (필요한 경우)
    }
}

export default function CustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new CustomUploadAdapter(loader);
    };
}