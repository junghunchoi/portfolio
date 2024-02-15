<template>
  <main>
    <BoardList/>

    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
         <Card/>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import Card from "@/components/common/Card";
import BoardList from "@/components/board/BoardList";
export default {
  name: "Home",
  components: {BoardList, Card}
}
</script>

<style scoped>

</style>