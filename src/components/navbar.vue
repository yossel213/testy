<template>
    <container_tag>
        <b-navbar id="asd" toggleable="lg" type="ligth" variant="ligth" fixed="top" sticky>
          <b-navbar-brand :to="{ path: '/' }">
            <b-img
              src="../assets/icono36x36.png"
              fluid
              style="higth: auto; margin-left: 15%"
              alt="Responsive image"
              width="55"
            ></b-img>
            <b-img
              src="../assets/logoanikama.png"
              fluid
              style="higth: auto; margin-left: 2%"
              alt="Responsive image"
              width="170"
            ></b-img>
          </b-navbar-brand>
      
          <b-navbar-toggle target="nav-collapse" variant="primary"></b-navbar-toggle>
      
          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#" :to="{ path: '/login' }"
                >inicio de Sesión</b-nav-item
              >
              <b-nav-item href="#" :to="{ path: '/consulta' }"
                >Consulta CPE</b-nav-item
              >
              <b-nav-item id="toggle-btn" href="#" @click="toggleModal"
                >Soporte & Ayuda</b-nav-item
              >
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <hr style="border-top: 1px solid lightgrey;" />

        <b-modal ref="my-modal" hide-footer title="Soporte & Ayuda" size="lg">
          <div class="d-block text-center">
            <p style="text-align: justify">
              Estimados usuarios, debido a mejoras en nuestro servicio, algunas
              funcionalidades del portal eSprinter se encuentran en mantenimiento. En
              este sentido, el inicio de sesión está habilitado solo para nuestros
              clientes, los demás usuarios pueden hacer la consulta de sus
              comprobantes directamente en la sección de
              <a target="_blank" href="https://cpe.anikama.pe/consult"
                >Consulta CPE</a
              >
              del portal.
            </p>
            <p style="text-align: justify">
              Para cualquier consulta o asistencia referente a algún comprobante,
              pueden comunicarse con nosotros al correo
              <a href="mailto:soporte@anikamagroup.com">soporte@anikamagroup.com</a>,
              colocando en el asunto "eSprinter / RUC de su empresa / Razón Social /
              Breve motivo del correo (Ej: Mi comprobante no aparece en la búsqueda)",
              y detallando en el mensaje el RUC y Razón Social de su proveedor, así
              como los comprobantes con los que requieren asistencia.
            </p>
          </div>
        </b-modal>
        
    </container_tag>
</template>

<script>
export default {
  name: "navbar",
  data: () => ({}),
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
  },
};
</script>

<style>
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
