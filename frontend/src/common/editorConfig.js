import {
    ClassicEditor,
    Bold,
    Essentials,
    Italic,
    Paragraph,
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
    FontSize,
    FontColor,
    FontBackgroundColor,
    Code,
    CodeBlock,
    GeneralHtmlSupport,
    StyleEditing,
    Style,
    HorizontalLine,
    Strikethrough,
} from 'ckeditor5';

import axios from "axios";
import {ref} from 'vue';

import { config } from '@/config/config.js';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import java from 'highlight.js/lib/languages/java';
// import 'highlight.js/styles/github.css';
import 'highlight.js/styles/vs.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('java', java);
const BASE_URL =  config.BOARD_API_URL
export const uploadPath = ref('');

export const editor = ClassicEditor;
export const editorConfig = {
    plugins: [
        Bold,
        Essentials,
        Italic,
        Paragraph,
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
        Alignment,
        List,
        BlockQuote,
        Heading,
        Highlight,
        FontSize,
        FontColor,
        FontBackgroundColor,
        Code,
        CodeBlock,
        GeneralHtmlSupport,
        StyleEditing,
        Style,
        HorizontalLine,
        Strikethrough
    ],
    extraPlugins: [CustomUploadAdapterPlugin],
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
            'fontSize',
            'strikethrough',
            '|',
            'horizontalLine',
            'alignment',
            'bulletedList',
            'blockQuote',
            '|',
            'highlight',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'codeBlock',
            'style',
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
    fontSize: {
        options: [
            9,
            11,
            13,
            'default',
            19,
            21,
            29
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
    },
    codeBlock: {
        languages: [
            { language: 'java', label: 'java', class: 'stylish-code stylish-code-dark' },
            { language: 'javascript', label: 'JavaScript', class: 'stylish-code stylish-code-dark' },
        ],
        indentSequence: '    '
    },
    style: {
        definitions: [
            {
              name: 'Callout',
                element: 'pre',
                classes: [ 'callout' ]
            },
            {
                name: 'Info box',
                element: 'p',
                classes: [ 'info-box' ]
            },
            {
                name: 'Code (Dark)',
                element: 'p',
                classes: ['code-dark']
            },
            {
                name: 'Code (Bright)',
                element: 'p',
                classes: ['code-bright']
            }
        ]
    },
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

