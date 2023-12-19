//creamos la interfaz del usuario desde js

/* Creamos las funciones para que el usuario pueda selecionar si quiere cotizar un vehiculo o una casa */
const FORMULARIO = document.getElementById("cotizador")
FORMULARIO.innerHTML=`<div id="card">
                    
                    <div class="col-lg-6 mb-5 mb-lg-0">
                    <div class="card">
                    <div class="card-body py-5 px-md-5">
                        <form>
                        <h2 class="style">ASEGURE SU VEHICULO</h2>
                        <!-- 2 column grid layout with text inputs for the first and last names -->
                        <div class="row">
                            <div class="col-md-6 mb-4">
                            <div class="form-outline">
                                <input type="text" id="form3Example1" class="form-control" />
                                <label class="form-label" for="form3Example1">Ingrese que vehiculo posee</label>
                            </div>
                            </div>
                            <div class="col-md-6 mb-4">
                            <div class="form-outline">
                                <input type="text" id="form3Example2" class="form-control" />
                                <label class="form-label" for="form3Example2"> Su modelo/AÑO</label>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4">
                            <div class="form-outline">
                                <input type="text" id="form3Example3" class="form-control" />
                                <label class="form-label" for="form3Example3"> el Kilometrage</label>
                                <input type="text" id="form3Example4" class="form-control" />
                                <label class="form-label" for="form3Example4"> La Marca</label>
                            </div>
                            </div>
                        </div>
                    


                        <!-- Submit button -->
                        <button type="submit" class="btn btn-success btn-block mb-4">
                            Asegurar
                        </button>
                        <button type="submit" class="btn btn-danger btn-block mb-4"><a id="ancla" href="../index.html">Cancelar</a></button>
</div>
`