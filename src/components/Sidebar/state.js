import { ref, computed } from 'vue'

export const collapsed = ref(true)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

//color collapsed
export const BACKGROUND_COLOR = `#F8F9FA`
export const BACKGROUND_COLOR_COLLAPSED = `#005CA9`

//collapsed
export const SIDEBAR_WIDTH = 195
export const SIDEBAR_WIDTH_COLLAPSED = 75

//icon collor collapsed
export const ICON_COLOR = ``
export const ICON_COLOR_COLLPASED=``

export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px` 
)

export const colorBack = computed(
  () => `${collapsed.value ? BACKGROUND_COLOR : BACKGROUND_COLOR_COLLAPSED}`
)