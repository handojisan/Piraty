<template>
  <div id="app">
    <div id="box">
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
    </div>
    <Search />
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
export default {
  components: {
    Search
  }
};
</script>
<style lang="scss">
ul {
  height: 10px;
  margin: 0px 0px 0px 30px;
  padding-left: 0px;
}
li {
  display: inline-block;
  padding-left: 30px;
}
</style>
