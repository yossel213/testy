<template>
  <div>
    <navbar></navbar> <!--Creamos y llamamos componentes-->
    <div class="absolute-logo1">
      <img src="../assets/logo2.svg" alt="Anikama Group S.A.C." />
    </div>

    <div class="absolute-logo2">
      <img src="../assets/logo2.svg" alt="Anikama Group S.A.C." />
    </div>

    <div class="login_wrapper">
      <div class="consulta-page" data-aos="fade-down" data-aos-duration="2000">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
              <div class="card consulta">
                <center>
                  <img
                    src="../assets/logoanikama.png"
                    style="height: 4rem"
                    class="logo-form"
                  />
                </center>
                <hr style="border-top: 1px solid lightgrey" />
                <form class="form-group">
                  <b-form-select
                    v-model="selectedA"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-select>

                  <input
                    type="text"
                    onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
                    maxlength="11"
                    class="form-control"
                    placeholder="Ruc Proveedor"
                    required
                  />
                  <br />
                  <input
                    type="text"
                    onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
                    maxlength="11"
                    class="form-control"
                    placeholder="Ruc/Dni Cliente"
                    required
                  />
                  <br />
                  <div>
                    <div class="row">
                      <div class="col-md-6 col-6">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Serie"
                          required
                        />
                      </div>
                      <div class="col-md-6 col-6">
                        <input
                          type="text"
                          class="form-control"
                          onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
                          placeholder="Numero"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <br />

                  <div>
                    <div class="row">
                      <div class="col-md-7 col-6">
                        <b-input-group class="mb-3">
                          <b-form-input
                            id="example-input"
                            v-model="value"
                            type="text"
                            placeholder="Fecha E."
                            autocomplete="off"
                          ></b-form-input>
                          <b-input-group-append>
                            <b-form-datepicker
                              v-model="value"
                              button-only
                              right
                              locale="en-US"
                              aria-controls="example-input"
                              @context="onContext"
                            ></b-form-datepicker>
                          </b-input-group-append>
                        </b-input-group>
                      </div>
                      <div class="col-md-5 col-6">
                        <input
                          type="text"
                          onkeypress="if ( isNaN( String.fromCharCode(event.keyCode) )) return false;"
                          class="form-control"
                          placeholder="Monto Total"
                          required
                        />
                      </div>
                    </div>
                  </div>
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
                      Buscar
                    </button>
                  </center>
                </form>
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
export default {
  name: "consulta",
  data() {
    return {
      value: "",
      formatted: "",
      selected:"",//data picker
      selectedA: "A", //combo box
      options: [
        { item: "A", name: "Factura" },
        { item: "B", name: "Boleta" },
        { item: "C", name: "Nota de Crédito" },
        { item: "D", name: "Nota de Débito" },
      ],
    };
    
  },
  components :{
    navbar

  },
  methods: {
      //metodo datapicker
      onContext(ctx) {
        // The date formatted in the locale, or the `label-no-date-selected` string
        this.formatted = ctx.selectedFormatted
        // The following will be an empty string until a valid date is entered
        this.selected = ctx.selectedYMD
      }
    }
};
</script>

<style scoped>
body {
  overflow: hidden;
}
p {
  line-height: 1rem;
}
#cmb {
  max-width: 500px;
  padding: 1rem;
  margin: 0 auto;
}

.card {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.consulta-page {
  align-items: center;
  display: flexbox;
  height: 100vh;
}

h1 {
  margin-bottom: 1.5rem;
}
</style>
