<template>
  <div class="box">
    <ul>
      <span>投稿一覧</span>
      <li>
        カテゴリー
        <select name="category">
          <option value="サンプル1">サンプル1</option>
          <option value="サンプル2">サンプル2</option>
          <option value="サンプル3">サンプル3</option>
        </select>
      </li>
      <li>
        順番
        <select name="dateorder">
          <option value="サンプル1">投稿日順</option>
          <option value="サンプル2">サンプル2</option>
          <option value="サンプル3">サンプル3</option>
        </select>
      </li>
      <li><input type="submit" name="submit" value="検索" /></li>
    </ul>
    <Search />
    <PostList />
    <!-- ↑投稿を表示する -->
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import PostList from "@/components/PostList";
export default {
  components: {
    Search,
    PostList //投稿を表示する
  }
};
</script>
<style lang="scss">
.box {
  padding: 30px;
  background-color: rgba(0, 0, 0, 0);
}
ul {
  margin: 0px 0px 0px 30px;
  padding-left: 0px;
}
li {
  display: inline-block;
  padding-left: 30px;
}
</style>
