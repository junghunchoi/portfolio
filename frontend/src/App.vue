<template>
  <Header/>
  <Home/>
  <Footer/>
</template>

<script>

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Home from "@/pages/Home";

export default {
  name: 'App',
  components: {Home, Footer, Header}
}
</script>

