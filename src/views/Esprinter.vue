<template>
  <div>
    <sidebarAdmin />

    <div :style="{ 'margin-left': sidebarWidth }">
      <p class="h1 ml-10">Incio Admin<b-icon icon="card-checklist"></b-icon></p>
    </div>

  </div>
</template>

<script>
import sidebar from "@/components/Sidebar/sidebar.vue";
import sidebarAdmin from "@/components/Sidebar/sidebarAdmin.vue";
import { sidebarWidth, colorBack } from "@/components/Sidebar/state.js";
export default {
  name: "sprinter",
  components: {
    sidebar,
    sidebarAdmin,
  },
  setup() {
    return { sidebarWidth, colorBack };
  },
};
</script>
