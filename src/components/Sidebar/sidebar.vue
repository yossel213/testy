<script>
import SidebarLink from "./SidebarLink";
import { collapsed, toggleSidebar, sidebarWidth, colorBack } from "./state";

export default {
  name: "sidebar",
  data :{
    vue:{
      exp: null
    }
  },
  props: {
    msg: String,
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
        <p style="text-align: start; margin-left: 10px">
          Usuario:Cliente | 20048331698 | Servicios S.A
        </p>
      </div>
    </nav>

    <div
      class="sidebar"
      :style="{ width: sidebarWidth, backgroundColor: colorBack }"
    >
      <div>
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
          <SidebarLink to="/home" icon="fas fa-home"></SidebarLink>
          <SidebarLink to="/recibidos" icon="fas fa-folder-open"></SidebarLink>
          <SidebarLink to="/emitidos" icon="fas fa-gears"></SidebarLink>
          <SidebarLink to="#" icon="fas fa-gear"></SidebarLink>
          <SidebarLink to="#" icon="fas fa-image">      
          </SidebarLink>
        </div>

        <div v-else>
          <SidebarLink to="/home" icon="fas fa-home">Inicio</SidebarLink>
          <SidebarLink to="/recibidos" icon="fas fa-folder-open"
            >Documentos</SidebarLink
          >
          <SidebarLink to="/emitidos" icon="fas fa-gears"
            >Documentos Error</SidebarLink
          >
          <SidebarLink to="#" icon="fas fa-gear">Configuracion</SidebarLink>
          <SidebarLink to="#" icon="fas fa-image">Otros</SidebarLink>
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
