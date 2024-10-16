import {
    ClassicEditor,
    Bold,
    Essentials,
    Italic,
    Paragraph,
    Undo,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    ImageResize,
    ImageInsertUI,
    MediaEmbed,
    HtmlEmbed,
    SimpleUploadAdapter
} from 'ckeditor5';
// import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
// import { Essentials } from '@ckeditor/ckeditor5-essentials';
// import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
// import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
// import { Undo } from '@ckeditor/ckeditor5-undo';
// import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, ImageResize, ImageInsertUI } from '@ckeditor/ckeditor5-image';
// import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
// import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed';
// import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';

import axios from "axios";

const BASE_URL = process.env.VITE_APP_URL;

export const editor = ClassicEditor;
export const editorConfig = {
    plugins: [Bold, Essentials, Italic, Paragraph, Undo, SimpleUploadAdapter, Image,
        ImageCaption, ImageStyle, ImageToolbar, ImageUpload, ImageResize, ImageInsertUI,
        MediaEmbed, HtmlEmbed],
    extraPlugins: [CustomUploadAdapterPlugin],
    toolbar: ['undo', 'redo', '|', 'bold', 'italic', 'imageUpload', 'HtmlEmbed'],
    htmlEmbed: {
        icons: 'media',
        showPreviews: true,
        previewsInData: true,
        styles: {
            width: '100%',
            height: 'auto'
        }
    }
};

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

            axios.post(`${BASE_URL}/board/api/files/editor/upload`, data)
                .then(response => {
                    console.log('Server response:', response.data);

                    const imageUrl = response.data.resultData;

                    // URL이 상대 경로인 경우 전체 URL로 변환
                    const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${BASE_URL}/board/api/files/${imageUrl}`;

                    resolve({
                        default: fullImageUrl,
                        alt: file.name
                    });
                })
                .catch(error => {
                    console.log(error);
                    reject(error);
                });
        }));
    }

    abort() {
    }
}

export function CustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new CustomUploadAdapter(loader);
    };
}