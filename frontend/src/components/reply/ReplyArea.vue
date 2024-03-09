<template>
  <div class="row d-flex justify-content-center">
    <div class="">
      <div class="card shadow-0 border" style="background-color: #f0f2f5;">
        <div class="card-body p-4">
          <div class="card">
            <div class="card-body">
              <p>Type your note, and hit enter to add it</p>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <p class="small mb-0 ms-2">Martha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-outline mb-4 ms-4 me-4">
          <input type="text" id="addANote" class="form-control" placeholder="Type comment..." />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
</script>

<style scoped>

</style>