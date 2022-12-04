<template>
  <div>
    <sidebarAdmin msg="Empresas"></sidebarAdmin>
    <div :style="{ 'margin-left': sidebarWidth }">
      <br />
      <div class="containerd">
            <div class="contenido">
                <div class="x_contenido">
                    <div class="dataTables_wrapper ">
                        <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                            <th scope="col">RUC</th>
                            <th scope="col">Razón Social</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefono</th>
                            <th>Recibidos</th>
                            <th>Emitidios</th>
                            <th>Comunicación Baja</th>
                            <th>Resumen Diario</th>
                            <th>Reversiones</th>
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
import sidebarAdmin from "@/components/Sidebar/sidebarAdmin.vue";
import { sidebarWidth, colorBack } from "@/components/Sidebar/state.js";
import axios from 'axios';
export default {
  name: "empresas",
  mounted(){
    this.verEmpresa()
  },
  data(){
        return{
            articulos:null,
        }
    },
  components: {
    sidebarAdmin,
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
