<template>
  <div id="app">
    <div id="main">
      <mavon-editor v-model="value" :toolbars="markdownOption" language="ja" />
    </div>
    <button v-on:click="post">投稿</button>
  </div>
</template>

<script>
import Vue from "vue";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

import { db } from "@/firebase";

Vue.use(mavonEditor);

export default {
  name: "app",
  data() {
    return {
      value: "",
      markdownOption: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        superscript: true,
        subscript: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        code: true,
        table: true,
        fullscreen: true,
        readmodel: true,
        htmlcode: true,
        help: true,
        undo: true,
        redo: true,
        navigation: true,
        alignleft: true,
        aligncenter: true,
        alignright: true,
        subfield: true,
        preview: true
      }
    };
  },
  methods: {
    post() {
      const post = {
        value: this.value
      };
      db.collection("posts").add(post);
    }
  }
};
</script>
