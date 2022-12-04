<template>
    <div>
      <sidebar msg="Inicio"/>
  
      <div :style="{ 'margin-left': sidebarWidth }">
        <p class="h1 ml-10">Incio Cliente<b-icon icon="card-checklist"></b-icon></p>
      </div>
  
    </div>
  </template>
  
  <script>
  import sidebar from "@/components/Sidebar/sidebar.vue";
  import { sidebarWidth, colorBack } from "@/components/Sidebar/state.js";
  export default {
    name: "home",
    components: {
      sidebar,
    },
    setup() {
      return { sidebarWidth, colorBack };
    },
  };
  </script>
  