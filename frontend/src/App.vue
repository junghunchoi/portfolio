<template>
  <Header/>
  <Home/>
  <Footer/>
</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";

export default {
  name: 'App',
  components: {Home, Footer, Header}
}
</script>

