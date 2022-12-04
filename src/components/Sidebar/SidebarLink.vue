<template>
  <div style="height: 50px">
    <router-link :to="to" class="link" :class="{ active: isActive }">
      <i class="icon" :class="icon" />
      <transition name="fade">
        <span v-if="!collapsed">
          <slot />
        </span>
      </transition>
    </router-link>
  </div>
</template>

<script>
import { computed } from "vue";
import { collapsed } from "./state";
export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive, collapsed };
  },
};
</script>

<style scoped>
span{
  color: white;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;
  margin: 0.1em 0;
  height: 1.5em;
  color: #0095cc;
  text-decoration: none;
  height: 50px;
}
.link:hover {
  background-color: var(--sidebar-item-hover);
  color: white;
}
.icon:hover {
  color: white;
}
.link.active {
  background-color: var(--sidebar-item-active);
}
.link .icon {
  flex-shrink: 0;
  width: 70px;
  height: 25px;
  margin-right: 10px;
}
</style>
