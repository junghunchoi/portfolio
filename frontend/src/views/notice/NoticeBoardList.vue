<template>
<BoardFilter></BoardFilter>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">번호</th>
      <th scope="col">분류</th>
      <th scope="col">제목</th>
      <th scope="col">조회</th>
      <th scope="col">등록일시</th>
      <th scope="col">등록자</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="dto in responseDTO.dtoList">
      <td>{{
          dto.category
        }}
      </td>
      <td>
        <router-link :to="{ name: 'BoardRead', params: { bno: dto.bno }}">{{
            dto.title
          }}
        </router-link>
        <span class="progress-bar-striped" style="background-color: gray">{{
            dto.viewCount
          }}</span>
      </td>
      <td>
        {{
          dto.viewCount
        }}
      </td>
      <td>{{
          dto.writer
        }}
      </td>
      <td>{{
          formatYYYYMMDD(dto.regDate)
        }}
      </td>
      <td>{{
          formatYYYYMMDD(dto.modDate)
        }}
      </td>
    </tr>
    </tbody>
  </table>
  <ThePagination/>
</template>

<script setup>
import {ref, watchEffect} from 'vue';
import BoardFilter from "@/components/board/BoardFilter.vue";
import {useRouter} from "vue-router";
import {getBoards} from "@/api/board";


const router = useRouter();
const responseDTO = ref({});

const fetchData = async () => {
  try {
    console.log(pageRequestDTO.value);
    const {data, headers} = await getBoards(pageRequestDTO.value);
    responseDTO.value = data;
    totalCount.value = headers["x-total-count"];
  } catch (e) {
    console.error(e);
  }
};

watchEffect(() => {
  fetchData();
});

const searchBoard = async (searchCondition) => {
  try{
    console.log(pageRequestDTO);
    pageRequestDTO.value.type = searchCondition.type;
    pageRequestDTO.value.keyword = searchCondition.keyword;

    const {data} = await getBoards(pageRequestDTO.value);
    console.log(data)
  }catch (e) {
    console.log(e);
  }
}
</script>

<style scoped>

</style>