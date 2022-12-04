<template>
  <div>
    <costados/>
    <navbar></navbar> <!--Creamos y llamamos componentes-->

    <div class="login-page" data-aos="fade-down" data-aos-duration="2000">
      <div class="container" id="contenido">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div class="card login">
              <center>
                <img
                  src="../assets/logoanikama.png"
                  style="height: 4rem"
                  class="logo-form"
                />
              </center>
              <hr style="border-top: 1px solid lightgrey" />
              <form class="form-group" action="/esprinter">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Usuario"
                  required
                />
                <br />
                <input
                  type="password"
                  class="form-control"
                  placeholder="Contraseña"
                  required
                />
                <br />
                <center>
                  <button
                    class="btn btn-primary btn-lg boton5"
                    style="
                      border-radius: 5px;
                      text-transform: capitalize;
                      padding: 5px;
                      font-size: 18px;
                      background: #3897f0;
                      border-color: #3897f0;
                    "
                  >
                    Ingresar
                  </button>
                </center>
              </form>
              <center>
                <a href="#" style="font-size: 13px; text-decoration: none"
                  >¿Olvidaste tu contraseña?</a
                >
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import costados from "@/components/costados.vue";
import navbar from "@/components/navbar.vue";
export default {
  name: "login",
  data: () => ({}),
  components: {
    navbar,
    costados
  },
};
</script>

<style scoped>
body {
  overflow: auto;
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

.login-page {
  align-items: center;
  display: flex;
  height: 100vh;
}

h1 {
  margin-bottom: 1.5rem;
}

</style>
