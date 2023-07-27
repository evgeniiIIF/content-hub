<template>
  <div class="text-editor-quill-plugin-wrapper">
    <div class="js-text-editor-quill"></div>
  </div>
</template>
<script>
  import 'quill/dist/quill.snow.css';
  import Quill from 'quill/dist/quill.min.js';

  export default {
    name: 'VTextEditorQuillPlugin',

    mounted() {
      var toolbarOptions = [
        // [{ font: [] }],
        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        // [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],
        // [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        [{ direction: 'rtl' }], // text direction
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ align: [] }],
        [('link', 'image')],
        ['clean'], // remove formatting button
      ];

      var options = {
        theme: 'snow',
        // debug: 'info',
        modules: {
          toolbar: toolbarOptions,
        },
        placeholder: 'Текстовый редактор',
        readOnly: false,
      };

      var editorContainer = document.querySelector('.js-text-editor-quill');

      if (editorContainer) {
        var editor = new Quill(editorContainer, options);
      }
    },
  };
</script>
<style></style>
