<template>
  <div>
    <navbar />
    <!--Creamos y llamamos componentes-->
    <costados></costados>
    <div class="principal-page">
      <div
        id="contenido"
        class="container"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div class="row">
          <div class="col-sm-8 mx-auto">
            <div class="card login">
              <b-img src="../assets/logoanikama.png" width="150"></b-img>

              <h1>Portal de Facturación Electrónica</h1>
              <hr style="border-top: 1px solid lightgrey" />
              <div>
                <div>
                  <div class="row">
                    <div class="col-md-6 col-6">
                      <b-btn
                        :to="{ path: '/login' }"
                        class="form-control btn btn-success"
                        >Inicio de Sesión</b-btn
                      >
                    </div>
                    <div class="col-md-6 col-6">
                      <b-btn
                        variant="primary"
                        class="form-control"
                        :to="{ path: '/consulta' }"
                        >Consulta CPE</b-btn
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import costados from "@/components/costados.vue";
export default {
  components: {
    navbar,
    costados,
  },
};
</script>

<style scoped>
.asd {
  overflow: hidden;
}
p {
  line-height: 1rem;
}

.card {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

#contenido {
  margin-bottom: 10%;
}

.principal-page {
  align-items: center;
  display: flex;
  height: 100vh;
}

h1 {
  margin-bottom: 1.5rem;
}
#boton {
  margin-left: 250px;
}

@media (min-width: 200px) {
  #boton {
    margin-left: 25%;
  }
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
.hideScroll {
  overflow: auto;
  height: 100px;
  scrollbar-width: none; /*Firefox*/
}

/*Webkit*/
.hideScroll::-webkit-scrollbar {
  width: 0;
}
</style>
