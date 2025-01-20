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
    SimpleUploadAdapter,
    Alignment,
    List,
    BlockQuote,
    Heading,
    Highlight,
    FontColor,
    FontBackgroundColor
} from 'ckeditor5';

import axios from "axios";
import {ref} from 'vue';

import { config } from '@/config/config.js';
const BASE_URL =  config.BOARD_API_URL
export const uploadPath = ref('');

export const editor = ClassicEditor;
export const editorConfig = {
    plugins: [
        Bold,
        Essentials,
        Italic,
        Paragraph,
        Undo,
        SimpleUploadAdapter,
        Image,
        ImageCaption,
        ImageStyle,
        ImageToolbar,
        ImageUpload,
        ImageResize,
        ImageInsertUI,
        MediaEmbed,
        HtmlEmbed,
        // 새로 추가하는 플러그인들
        Alignment,
        List,
        BlockQuote,
        Heading,
        Highlight,
        FontColor,
        FontBackgroundColor
    ],
    extraPlugins: [CustomUploadAdapterPlugin],
    toolbar: {
        items: [
            'undo', 'redo',
            '|',
            'heading',
            '|',
            'bold', 'italic',
            '|',
            'alignment',
            'bulletedList',
            'blockQuote',
            '|',
            'highlight',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'imageUpload',
            'HtmlEmbed'
        ]
    },
    heading: {
        options: [
            {model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph'},
            {model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1'},
            {model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2'},
            {model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3'}
        ]
    },
    fontColor: {
        colors: [
            {color: 'rgb(0, 0, 0)', label: 'Black'},
            {color: 'rgb(230, 0, 0)', label: 'Red'},
            {color: 'rgb(0, 112, 0)', label: 'Green'},
            {color: 'rgb(0, 0, 230)', label: 'Blue'}
        ]
    },
    fontBackgroundColor: {
        colors: [
            {color: 'rgb(255, 255, 0)', label: 'Yellow marker'},
            {color: 'rgb(255, 128, 0)', label: 'Orange marker'},
            {color: 'rgb(0, 255, 0)', label: 'Green marker'}
        ]
    },
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

            axios.post(`${BASE_URL}/files/editor/upload`, data)
                .then(response => {
                    const imageUrl = response.data.resultData;
                    uploadPath.value = imageUrl
                    // URL이 상대 경로인 경우 전체 URL로 변환
                    const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${BASE_URL}/files/${imageUrl}`;

                    resolve({
                        default: fullImageUrl,
                        alt: file.name
                    });
                })
                .catch(error => {
                    console.error(error);
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