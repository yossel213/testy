<template>
    <div>
      <sidebar msg="Documentos Emitidos"></sidebar>
      <div :style="{ 'margin-left': sidebarWidth }">
        <br />
        <div class="containerd">
              <div class="contenido">
                  <div class="x_contenido">
                      <div class="dataTables_wrapper ">
                          <table class="table table-bordered table-hover">
                          <thead>
                              <tr>
                              <th scope="col">Fecha</th>
                              <th scope="col">Serie</th>
                              <th scope="col">Número</th>
                              <th scope="col">Tipo Documento</th>
                              <th>Ruc Proveedor</th>
                              <th>Razón Social</th>
                              <th>Monto Total</th>
                              <th>Total PEN</th>
                              <th>Estado</th>
                              <th>CDR</th>
                              <th>XML</th>
                              <th>PDF</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr class="x_hover" v-for="articulo in articulos" :key="articulo.id">
                                <td>{{articulo.id}}</td>
                                <td>{{articulo.nombre}}</td>
                                <td>{{articulo.descripcion}}</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td><button class="btn btn-primary"><i class="fas fa-key"></i></button></td>
                              </tr>
                          </tbody>
                          </table>
                      </div>
                  </div>
              </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import sidebar from "@/components/Sidebar/sidebar.vue";
  import { sidebarWidth, colorBack } from "@/components/Sidebar/state.js";
  import axios from 'axios';
  export default {
    name: "emitidos",
    mounted(){
      this.verEmpresa()
    },
    data(){
          return{
              articulos:null,
          }
      },
    components: {
      sidebar,
    },
    methods:{
      verEmpresa(){
        axios.get('/articulos/')
              .then(r=>{
                  this.articulos = r.data;
              })
  
              .catch(function(error){
                  console.log(error);
              })
      }
    },  
    setup() {
      return { sidebarWidth, colorBack };
    },
  };
  </script>
  
  <style scoped>
  
  .x_hover:hover{
      background-color: #f69b0a;
  }
  
  .contenido {
      position: relative;
      width: 100%;
      margin-bottom: 10px;
      padding: 10px  17px;
      display: inline-block;
      background: #fff;
      border: 1px solid #E6E9ED;
      -webkit-column-break-inside: avoid;
      -moz-column-break-inside: avoid;
      
      opacity: 1;
      -webkit-transition: all .2s ease;
      transition: all .2s ease;
  }
  .x_contenido{
      padding: 0 3px 6px;
      position: relative;
      width: 100%;
      float: left;
      clear: both;
      margin-top: 5px
  }
  .dataTables_wrapper {
      position: relative;
      clear: both;
      zoom: 1
  }
  </style>
  