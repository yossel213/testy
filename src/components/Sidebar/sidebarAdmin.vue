<script>
import SidebarLink from "./SidebarLink";
import { collapsed, toggleSidebar, sidebarWidth, colorBack } from "./state";

export default {
  name: "sidebarAdmin",
  props: {
    msg: String
  },
  components: { SidebarLink },

  setup() {
    return { collapsed, toggleSidebar, sidebarWidth, colorBack };
  },
};
</script>

<template>

  <div>
    <nav
      class=""
      style="
        height: 60.5px;
        box-sizing: content-box;
        border-bottom: solid #0095cc 2px;
      "
      :style="{ 'margin-left': sidebarWidth }"
    >
      <div class="contenido">
        <h4 style="text-align: center">
          {{ msg }}
        </h4>
        <p style="text-align:start;margin-left: 10px;">Usuario:Admin | 20482684557 | Anikama Group S.A.C </p>
      </div>
    </nav>

    <div
      class="sidebar"
      :style="{ width: sidebarWidth, backgroundColor: colorBack }"
    >
      <div class="cabezera">
        <h1 @click="toggleSidebar">
          <span v-if="collapsed">
            <b-img
              src="@/assets/icono36x36.png"
              fluid
              alt="Responsive image"
              width="50"
            ></b-img>
          </span>
          <span v-else
            ><b-img
              src="@/assets/logoanikama.png"
              fluid
              style="higth: auto; margin-left: 2%"
              alt="Responsive image"
              width="150"
            ></b-img>
          </span>
        </h1>
      </div>

      <div class="medio">
        <div v-if="collapsed" class="cont">
          <SidebarLink to="/esprinter" icon="fas fa-home"></SidebarLink>
          <SidebarLink to="/empresas" icon="fas fa-building"></SidebarLink>
          <SidebarLink
            to="/esprinter"
            icon="fas fa-cloud-arrow-up"
          ></SidebarLink>
          <SidebarLink to="/friends" icon="fas fa-gears"></SidebarLink>
          <SidebarLink to="/image" icon="fas fa-gear"></SidebarLink>
        </div>

        <div v-else>
          <SidebarLink to="/esprinter" icon="fas fa-home">Inicio</SidebarLink>
          <SidebarLink to="/empresas" icon="fas fa-building"
            >Empresas</SidebarLink
          >
          <SidebarLink to="/esprinter" icon="fas fa-cloud-arrow-up"
            >Importar Excel</SidebarLink
          >
          <SidebarLink to="/friends" icon="fas fa-gears"
            >Documentos Error</SidebarLink
          >
          <SidebarLink to="/image" icon="fas fa-gear"
            >Configuración</SidebarLink
          >
        </div>
      </div>
    </div>
  </div>

</template>

<style>
:root {
  --sidebar-bg-color: #a2aeb7;
  --sidebar-bg-color-hover: #f8f9fa;
  --sidebar-item-hover: #f69b0a;
  --sidebar-item-active: #f69b0a;
}
</style>

<style scoped>

.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  box-sizing: content-box;
  border-right: solid #0095cc 2px;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 1.5em;
  background-color: white;
  text-align: center;
  box-sizing: content-box;
  border-bottom: solid #0095cc 2px;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}

</style>
