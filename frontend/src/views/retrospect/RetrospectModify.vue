<template>
  <section>
    <b-form inline>
      <label class="sr-only" for="inline-form-input-name">제목</label>
      <b-form-input
          v-model="retrospect.title"
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0 mb-3"
          placeholder="제목을 입력해 주세요."

      ></b-form-input>
      <TheEditor
          v-if="retrospect.title"
          :init-editor-data="retrospect.content"
          v-model:editorData="retrospect.content"
          class="mt-3"/>
      <label>
      <input type="checkbox" class="mb-2 mr-sm-2 mb-sm-0 mt-2"
             :checked="true"
             v-model="retrospect.isMain"
      />
      상단고정</label>
    </b-form>
    <button class="btn btn-primary me-auto mt-2"
            @click="modifyretrospectHandler">저장
    </button>
  </section>
</template>

<script setup>
import { onMounted, reactive, ref, watch} from 'vue'
import TheEditor from "@/components/TheEditor.vue";
import {useRoute, useRouter} from "vue-router";
import {getRetrospectById, updateRetrospect} from "@/api/retrospect.js";
const route = useRoute();
const router = useRouter();
const retrospect = reactive({});
const id = ref(route.params.nno);

onMounted(async () =>{
  try {
    const res = await getRetrospectById(id.value);
    Object.assign(retrospect, res.data.resultData);
  } catch (e) {
    console.log(e);
  }
})

const modifyretrospectHandler = async () => {
  retrospect.isMain = retrospect.isMain === true ? 1 : 0;

  try{
    await updateretrospect(retrospect)
    router.push({name: 'retrospectList'})
  }catch (e) {
    console.log(e);
  }
}
</script>
<style scoped>

</style>