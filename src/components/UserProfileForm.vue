<template>
  <div>
    <div>
      <input type="text" v-model="inputName" />
      <button @click="updateUserName">名前を更新</button>
    </div>
    <div>
      <div v-if="user.photoURL && user.name">
        <img :src="user.photoURL" :alt="user.name + 'の画像'" />
      </div>
      <input type="file" accept="image/*" v-on:change="changeFile" />
      <button @click="updateUserImage">画像を更新</button>
    </div>
    <div>
      <input type="text" v-model="inputStatusMessage" />
      <button @click="updateUserMessage">ステータスメッセージを更新</button>
    </div>
  </div>
</template>

<script>
import { storage } from "@/firebase";

export default {
  data() {
    return {
      inputName: "",
      inputImage: null,
      inputStatusMessage: ""
    };
  },
  computed: {
    user() {
      // getters の user なのがポイント！
      return this.$store.getters.user;
    }
  },
  methods: {
    updateUserName() {
      if (this.inputName === "") {
        // 入力した値が空
      } else if (!this.user) {
        // ログインしていない
      } else {
        this.$store
          .dispatch("updateUserProfile", { name: this.inputName })
          .then(() => {
            this.inputName = "";
          });
      }
    },
    changeFile(e) {
      this.inputImage = e.target.files[0];
    },
    updateUserImage() {
      if (!this.inputImage) {
        // 画像が選択されていない
      } else if (!this.user) {
        // ログインしていない
      } else {
        // アップロード先を指定する
        // ファイル名がかぶらないように、 user.id を先頭につける
        const fileName = this.user.id + "_" + this.inputImage.name;
        const photoRef = storage.ref("/user_photos/" + fileName);
        photoRef
          .put(this.inputImage)
          .then(() => photoRef.getDownloadURL())
          .then(photoURL => {
            this.$store.dispatch("updateUserProfile", { photoURL });
          });
      }
    },
    updateUserMessage() {
      console.log(this.inputStatusMessage);

      if (this.inputStatusMessage === "") {
        alert("ステータスメッセージが設定されていません");
      } else {
        this.$store
          .dispatch("updateUserProfile", {
            userMessage: this.inputStatusMessage
          })
          .then(() => {
            this.inputStatusMessage = "";
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
