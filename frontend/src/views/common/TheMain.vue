<template>
	<div class="portfolio-main">
		<!-- Hero Section -->
		<section class="hero">
			<div class="container">
				<Typing :text="heroText" :typingSpeed="50" />
				<h1>{{ fullName }}</h1>
				<p>{{ jobTitle }}</p>
			</div>
		</section>

		<!-- Activity Tracker -->
		<section class="activity-tracker">
			<div class="container">
				<h2>최근 활동</h2>
				<div class="activity-grid">
					<div
						v-for="activity in activities"
						:key="activity.type"
						class="activity-card"
					>
						<img :src="activity.gifUrl" :alt="activity.type + ' 애니메이션'" />
						<h3>{{ activity.type }}</h3>
						<p>{{ activity.data }} {{ activity.unit }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Main Content -->
<!--		<section class="main-content">-->
<!--			<div class="container">-->
<!--				<div class="grid">-->
<!--					&lt;!&ndash; Notice Board &ndash;&gt;-->
<!--					<BoardCard title="공지사항" :destination="'/notices'">-->
<!--						<ul class="notice-list">-->
<!--							<li-->
<!--								v-for="notice in notices"-->
<!--								:key="notice.nno"-->
<!--								:class="{ important: notice.isMain === 1 }"-->
<!--							>-->
<!--								<router-link-->
<!--									:to="{ name: 'NoticeRead', params: { nno: notice.nno } }"-->
<!--								>-->
<!--									{{ notice.title }}-->
<!--								</router-link>-->
<!--								<span-->
<!--									v-if="isCreatedWithin7Days(notice.regDate)"-->
<!--									class="new-badge"-->
<!--									>NEW</span-->
<!--								>-->
<!--							</li>-->
<!--						</ul>-->
<!--					</BoardCard>-->

<!--					&lt;!&ndash; Free Board &ndash;&gt;-->
<!--					<BoardCard title="자유게시판" :destination="'/boards'">-->
<!--						<ul class="board-list">-->
<!--							<li v-for="board in boards" :key="board.bno">-->
<!--								<router-link-->
<!--									:to="{ name: 'BoardRead', params: { bno: board.bno } }"-->
<!--								>-->
<!--									{{ board.title }}-->
<!--								</router-link>-->
<!--								<span class="reply-count">[{{ board.replyCount }}]</span>-->
<!--								<span-->
<!--									v-if="isCreatedWithin7Days(board.regDate)"-->
<!--									class="new-badge"-->
<!--									>NEW</span-->
<!--								>-->
<!--								<i v-if="board.fileCount >= 1" class="fas fa-paperclip"></i>-->
<!--							</li>-->
<!--						</ul>-->
<!--					</BoardCard>-->

<!--					&lt;!&ndash; Gallery &ndash;&gt;-->
<!--					<BoardCard title="갤러리" :destination="'/galleries'">-->
<!--						<div class="gallery-grid">-->
<!--							<div-->
<!--								v-for="gallery in galleries"-->
<!--								:key="gallery.bno"-->
<!--								class="gallery-item"-->
<!--								@click="readGalleryHandler(gallery.bno)"-->
<!--							>-->
<!--								<img-->
<!--									:src="`${BASE_URL}/files/${gallery.fileName}`"-->
<!--									:alt="gallery.title"-->
<!--								/>-->
<!--								<div class="gallery-info">-->
<!--									<h4>{{ gallery.title }}</h4>-->
<!--									<span-->
<!--										v-if="isCreatedWithin7Days(gallery.regDate)"-->
<!--										class="new-badge"-->
<!--										>NEW</span-->
<!--									>-->
<!--								</div>-->
<!--							</div>-->
<!--						</div>-->
<!--					</BoardCard>-->

<!--					&lt;!&ndash; Help Board &ndash;&gt;-->
<!--					<BoardCard title="문의게시판" :destination="'/helps'">-->
<!--						<ul class="help-list">-->
<!--							<li v-for="help in helps" :key="help.hno">-->
<!--								<span-->
<!--									@click="readHelpHandler(help.writer, help.hno, help.isSecret)"-->
<!--								>-->
<!--									{{ help.title }}-->
<!--									<span-->
<!--										:class="-->
<!--											help.answer ? 'status answered' : 'status unanswered'-->
<!--										"-->
<!--									>-->
<!--										{{ help.answer ? '답변완료' : '미답변' }}-->
<!--									</span>-->
<!--									<span-->
<!--										v-if="isCreatedWithin7Days(help.regDate)"-->
<!--										class="new-badge"-->
<!--										>NEW</span-->
<!--									>-->
<!--									<i v-if="help.isSecret === 1" class="bi bi-lock"></i>-->
<!--								</span>-->
<!--							</li>-->
<!--						</ul>-->
<!--					</BoardCard>-->
<!--				</div>-->
<!--			</div>-->
<!--		</section>-->
<HorizonLayout/>
	</div>

	<!-- Modal -->
	<Teleport to="#modal">
		<TheModal v-model="show" :isPopup="show" :title="'확인'">
			<template #default>
				{{ modalText }}
			</template>
			<template #actions>
				<button
					v-if="userName === null"
					class="btn btn-primary"
					@click="doLoginHandler"
				>
					로그인
				</button>
				<button class="btn btn-light" @click="closeModal">닫기</button>
			</template>
		</TheModal>
	</Teleport>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/store/loginStore.js';
import { isCreatedWithin7Days } from '@/common/dateUtils.js';
import { getMainData } from '@/api/common.js';
import BoardCard from '@/components/TheMainCard.vue';
import TheModal from '@/components/TheModal.vue';
import Typing from '@/components/Typing.vue';
import HorizonLayout from "@/components/HorizonLayout.vue";
const posts = ref([
  {
    id: 1,
    title: '첫 번째 프로젝트: 포트폴리오 웹사이트 만들기',
    excerpt: '부트스트랩과 Vue.js를 활용하여 반응형 포트폴리오 사이트를 제작한 과정을 소개합니다.',
    image: '/api/placeholder/400/220',
    date: '2023-08-15',
    link: '/posts/1'
  },
  {
    id: 2,
    title: 'JavaScript ES6+ 주요 기능 정리',
    excerpt: 'ES6 이후 추가된 JavaScript의 주요 기능들을 정리하고 실무에서의 활용 방법을 설명합니다.',
    image: '/api/placeholder/400/220',
    date: '2023-09-01',
    link: '/posts/2'
  },
  {
    id: 3,
    title: 'Vue 3 Composition API 실전 가이드',
    excerpt: 'Vue 3의 Composition API를 활용한 효율적인 상태 관리와 로직 재사용 방법을 소개합니다.',
    image: '/api/placeholder/400/220',
    date: '2023-09-20',
    link: '/posts/3'
  },
  // 추가 포스트...
]);
const BASE_URL = process.env.VITE_APP_API_URL;
const authStore = useAuthStore();
const { userName, getAuthorities } = storeToRefs(authStore);
const AUTHORITY = getAuthorities.value;
const router = useRouter();

const show = ref(false);
const modalText = ref('');

const fullName = ref('홍길동'); // 실제 이름으로 변경해주세요
const jobTitle = ref('풀스택 개발자'); // 실제 직함으로 변경해주세요
const heroText = ref('안녕하세요.\n제 포트폴리오에 오신 것을 환영합니다 👋');
const email = ref('example@email.com'); // 실제 이메일로 변경해주세요

const boards = reactive([]);
const notices = reactive([]);
const galleries = reactive([]);
const helps = reactive([]);

const activities = reactive([
	{ type: '달리기', gifUrl: '/running.gif', data: 5, unit: 'km' },
	{ type: '자전거', gifUrl: '/cycling.gif', data: 20, unit: 'km' },
	{ type: '공부', gifUrl: '/studying.gif', data: 3, unit: '시간' },
  { type: '독서', gifUrl: '/reading.gif', data: 3, unit: '권' },
]);



const socialLinks = reactive([
	{
		name: 'GitHub',
		url: 'https://github.com/yourusername',
		icon: 'fab fa-github',
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/yourprofile',
		icon: 'fab fa-linkedin',
	},
	// 추가 소셜 링크를 여기에 넣어주세요
]);

onMounted(async () => {
	const res = await getMainData();
	// Object.assign(boards, res.data.resultData.boards);
  console.log(res)
  

});

const readHelpHandler = (writer, hno, isSecret) => {
	if (userName.value === null) {
		modalText.value = '로그인한 사용자만 조회할 수 있습니다.';
		show.value = true;
		return;
	}

	if (isSecret === 0 || AUTHORITY === 'ADMIN') {
		router.push({ name: 'HelpRead', params: { hno: Number(hno) } });
		return;
	}

	if (userName.value === writer) {
		router.push({ name: 'HelpRead', params: { hno: Number(hno) } });
	} else {
		modalText.value = '비밀글은 작성한 사용자만 확인할 수 있습니다.';
		show.value = true;
	}
};

const readGalleryHandler = bno => {
	if (userName.value === null) {
		modalText.value = '로그인한 사용자만 조회할 수 있습니다.';
		show.value = true;
		return;
	}

	router.push({ name: 'GalleryRead', params: { bno: Number(bno) } });
};

const doLoginHandler = () => {
	router.push({ name: 'Login' });
};

const closeModal = () => {
	show.value = false;
};
</script>

<style scoped>
.portfolio-main {
	font-family: 'Arial', sans-serif;
}

.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
}

.hero {
	background-color: #f8f9fa;
	padding: 80px 0;
	text-align: center;
}

.hero h1 {
	font-size: 3em;
	margin-bottom: 10px;
}

.activity-tracker {
	padding: 60px 0;
	background-color: #ffffff;
}

.activity-grid {
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem;
}

.activity-card {
  flex: 0 0 auto;
  width: 200px; /* 카드의 너비를 조절하세요 */
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
}

.activity-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}

.main-content {
	padding: 60px 0;
	background-color: #f8f9fa;
}

.grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 30px;
}

.notice-list,
.board-list,
.help-list {
	list-style-type: none;
	padding: 0;
}

.notice-list li,
.board-list li,
.help-list li {
	margin-bottom: 10px;
}

.gallery-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	gap: 15px;
}

.gallery-item {
	position: relative;
	cursor: pointer;
}

.gallery-item img {
	width: 100%;
	height: 150px;
	object-fit: cover;
	border-radius: 5px;
}

.gallery-info {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.7);
	color: white;
	padding: 5px;
}

.new-badge {
	background-color: #ff4757;
	color: white;
	font-size: 0.8em;
	padding: 2px 5px;
	border-radius: 3px;
	margin-left: 5px;
}

.contact {
	padding: 60px 0;
	background-color: #f8f9fa;
	text-align: center;
}

.social-links {
	margin-top: 20px;
}

.social-links a {
	font-size: 24px;
	margin: 0 10px;
	color: #333;
}

@media (max-width: 768px) {
  .activity-grid {
    flex-wrap: wrap;
    justify-content: center;
  }

  .activity-card {
    width: calc(50% - 1rem);
  }
}
</style>
