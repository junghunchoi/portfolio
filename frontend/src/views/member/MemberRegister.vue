<template>
  <div class="row mt-3">
    <div class="col">
      <div class="card">
        <div class="card-header">
          JOIN
        </div>
        <div class="card-body">
          <form @submit.prevent>
            <div class="input-group mb-3">
              <span class="input-group-text">아이디</span>
              <input v-model="memberInform.userName" type="text" name="mid" class="form-control">
              <button class="btn btn-danger" @click="checkValidateId">중복확인</button>
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">비밀번호</span>
              <input v-model="memberInform.password" type="password" name="mpw"
                     class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">비밀번호확인</span>
              <input id="checkPassword" type="password" class="form-control">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">이름</span>
              <input v-model="memberInform.userRealName" class="form-control">
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">EMAIL</span>
              <input v-model="memberInform.email" type="email" name="email" class="form-control">
            </div>

            <div class="my-4">
              <div class="float-end">
                <button type="submit" class="btn btn-primary" @click="registerMemberHandler">
                  회원가입
                </button>
              </div>
            </div>
          </form>
          <AppAlert :show="showAlert" :message="alertMessage"
                    :type="alertType"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive,inject} from 'vue';
import AppAlert from "@/components/common/TheAlert.vue";
import {useRouter} from "vue-router";

const router = useRouter();
const $axios = inject('$axios');

const isValidateUserName = ref(false);
const memberInform = reactive({
  password: '',
  userName: '',
  userRealName: '',
  email: '',
});

const registerMemberHandler = async () => {
  const checkPassword = validatePassword(memberInform.password);

  if (!isValidateUserName.value) {
    vAlert("아이디를 중복확인해주세요.");
    return;
  }
  if (checkPassword !== undefined) {
    vAlert(checkPassword);
    return;
  }

  const res = $axios.post('/auth/members/register', {...memberInform});
  if (res.status === 200) {
    await router.push('/');
  } else {
    vAlert("회원가입에 실패했습니다. 관리자에게 문의해주세요.")
  }

};

const checkValidateId = async () => {
  try {
    const res = await $axios.post('/auth/members/check', memberInform.userName);

    if (res.data.resultMsg === "validate userName") {
      vAlert("사용가능합니다", "success")
      isValidateUserName.value = true;
    } else {
      vAlert("중복된 아이디입니다.")
    }
  } catch (error) {
    vAlert("중복 확인 중 오류가 발생했습니다.")
  }
};

function validatePassword(password) {
  // 4자리 이상, 12자리 미만 확인
  if (password.length < 4 || password.length >= 12) {
    return '비밀번호는 4자리 이상, 12자리 미만여야 합니다.';
  }

  // 영어 알파벳과 숫자를 반드시 포함하는지 확인
  if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) {
    return '비밀번호는 영어 알파벳과 숫자를 반드시 포함해야합니다.';
  }

  // !, @, #, $를 제외한 특수문자가 포함되었는지 확인
  if (/[^A-Za-z0-9!@#$]/.test(password)) {
    return '비밀번호는 !, @, #, $를 제외한 특수문자는 사용할 수 없습니다';
  }

  if (memberInform.password !== document.getElementById('checkPassword').value) {
    return '비밀번호가 다릅니다. 확인해주세요.';
  }
}

// alert
const showAlert = ref(false);
const alertMessage = ref("");
const alertType = ref("");
const vAlert = (message, type = "error") => {
  showAlert.value = true;
  alertMessage.value = message;
  alertType.value = type;
  setTimeout(() => {
    showAlert.value = false;
  }, 3000);
};
</script>

<style scoped>

</style>