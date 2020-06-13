<template>
  <div id="app">
    <input id="title" type="text" v-model="title" placeholder="タイトル" />
    <div id="main">
      <mavon-editor
        id="mavon-Editor"
        v-model="value"
        :toolbars="markdownOption"
        language="ja"
      />
    </div>
    <button id="postButton" v-on:click="post">投稿</button>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  name: "app",
  data() {
    return {
      title: "",
      value: "",
      markdownOption: {
        bold: true,
        undo: true,
        redo: true,
        trash: true,
        /* 1.4.2 */
        navigation: true
      }
    };
  },
  methods: {
    post: function() {
      this.$dialog
        .confirm(
          {
            title: "最終確認",
            body: "本当に投稿してもよろしいですか？"
          },
          {
            okText: "はい",
            cancelText: "キャンセル"
          }
        )
        .then(() => {
          console.log("aa");
          const post = {
            title: this.title,
            value: this.value,
            date: new Date(),
            auth: this.$store.state.user.uid,
            name: this.$store.state.userProfile.name,
            fav: 0
          };
          if (post.title && post.value) {
            this.title = "";
            this.value = "";
            db.collection("posts").add(post);
          }
        })
        .catch(() => {
          console.log("Clicked on cancel");
        });
    }
  }
};
</script>
<style scoped>
#title {
  height: 50px;
  width: 80%;
  font-size: 30px;
  padding: 10px;
  margin: 15px;
  border: 1px solid rgb(189, 189, 189);
  border-radius: 10px;
}
.mavonEditor {
  width: 100%;
  height: 100%;
}

#postButton {
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #fff;
  background: #fd9535; /*色*/
  border-radius: 4px; /*角の丸み*/
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.2),
    inset 0 -2px 0 rgba(0, 0, 0, 0.05);
  font-weight: bold;
  border: solid 2px #d27d00; /*線色*/
}

#postButton:active {
  /*押したとき*/
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}
</style>
