<template>
  <container_tag class="asd">
    <div class="absolute-logo1">
      <img src="../assets/logo2.svg" alt="Anikama Group S.A.C." />
    </div>

    <div class="absolute-logo2">
      <img src="../assets/logo2.svg" alt="Anikama Group S.A.C." />
    </div>
  </container_tag>
</template>

<script>
export default {
  name: "costados",
};
</script>

<style scoped>

body {
  overflow: hidden;
}

.absolute-logo1 {
  position: absolute;
  left: -300px;
  top: 0;
  height: 90vh;
}

.absolute-logo1 img {
  height: 120%;
  margin-top: 100px;
  animation: 1.5s ease-out 0s 1 showFromRight;
}
.absolute-logo2 {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 65rem;
  height: 65rem;
  background-size: cover;
  margin-right: -680px;
  margin-bottom: -200px;
  animation: 1.5s ease-out 0s 1 showFromLeft;
}

@keyframes showFromRight {
  0% {
    opacity: 0;
    margin-left: -50px;
  }
  100% {
    opacity: 1;
    margin-right: 0px;
  }
}

@keyframes showFromLeft {
  0% {
    opacity: 0;
    margin-right: -700px;
  }
  100% {
    opacity: 1;
    margin-left: -605px;
  }
}

@media only screen and (max-width: 900px) {
  .absolute-logo1,
  .absolute-logo2 {
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .absolute-logo1,
  .absolute-logo2 {
    display: none;
  }
  .login_wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
  }
}
</style>

