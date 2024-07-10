**PROYECTO DE UNA EMPRESA DE FOTOGRAFIA** 

## **FROM**
1. Primero se realiza la creación de la carpeta madre que tiene las siguientes sub carpetas: 

   -backend 

   -components 

   -estilos 

   -img 

   -seccion

   ![image-20240710000444390](C:\Users\zulay\AppData\Roaming\Typora\typora-user-images\image-20240710000444390.png)

   

2. Y luego se crea los  2 archivos principales:

     -indes.html

     -principal.css

     ![image-20240710000804794](C:\Users\zulay\AppData\Roaming\Typora\typora-user-images\image-20240710000804794.png)

3. A hora se crea en el archivo principal el código madre que se divide en 2 sesiones:

     -head

     -body

     y dentro del head esta lo que  es el cerebro de la pagina  donde están todos  los link que redireccionan las demás paginas  

     

     ![image-20240710001959647](C:\Users\zulay\AppData\Roaming\Typora\typora-user-images\image-20240710001959647.png)

     Y luego va el body que dentro del body va el cuerpo de la pagina y dentro del body esta el 

     -header

     -main

     -section

     -footer

     ![image-20240710002755732](C:\Users\zulay\AppData\Roaming\Typora\typora-user-images\image-20240710002755732.png)

     ```sql
      <header class="container-fluid p-0">
             <div id="carouselExampleCaptions" class="carousel slide">
               <div class="carousel-inner">
                 <div class="carousel-item active">
                   <img src="/img/grado.jpg" class="d-block w-100" alt="...">
                   <div class="carousel-caption d-none d-md-block">
                     <h1>FOTOGRAFÍAS PROFESIONALES</h1>
                     <p>Some representative placeholder content for the first slide.</p>
                   </div>
                 </div>
                 <div class="carousel-item">
                   <img src="/img/imagen3.jpeg" class="d-block w-100" alt="...">
                   <div class="carousel-caption d-none d-md-block">
                     <h1>FOTOGRAFÍAS PROFESIONALES</h1>
                     <p>Some representative placeholder content for the second slide.</p>
                   </div>
                 </div>
                 <div class="carousel-item">
                   <img src="/img/imagen1.jpg" class="d-block w-100" alt="...">
                   <div class="carousel-caption d-none d-md-block">
                     <h1>FOTOGRAFÍAS PROFESIONALES</h1>
                     <p>Some representative placeholder content for the third slide.</p>
                   </div>
                 </div>
               </div>
               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                 data-bs-slide="prev">
                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                 data-bs-slide="next">
                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Next</span>
               </button>
           
               <!-- Navegación dentro del carrusel -->
               <nav class="navbar navbar-expand-lg navbar-dark navbar-overlay">
                 <div class="container-fluid">
                   <a class="navbar-brand" href="#">EVENTOS</a>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                     aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarNav">
                     <ul class="navbar-nav ms-auto">
                       <li class="nav-item">
                           <a class="nav-link active" aria-current="page"
                               href="/components/inicio.html">INICIO</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link" href="/components/portafolio.html">PORTAFOLIO</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link" href="/components/sobremi.html">SOBRE MI</a>
                       </li>
                       <li class="nav-item">
                           <a class="nav-link" href="/components/contacto.html">CONTACTO</a>
                       </li>
                   </ul>
                   </div>
                 </div>
               </nav>
             </div>
           </header>
     
         <main class="container-main">
             <h1 class="text">MIS EXPERIENCIAS</h1>
             <div class="container my-4">
                 <div class="row">
                     <div class="col-md-4 mb-4">
                         <div class="card h-100">
                             <img src=" /img/pareja.jpg" class="card-img-top" alt="...">
                             <div class="card-body">
                                 <h3 class="card-title">GRADOS</h3>
                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                     of the card's content.</p>
                             </div>
                         </div>
                         
                     </div>
                     <div class="col-md-4 mb-4">
                         <div class="card h-100">
                             <img src="/img/bebe.jpg" class="card-img-top" alt="...">
                             <div class="card-body">
                                 <h3 class="card-title">GRADOS</h3>
                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                     of the card's content.</p>
                             </div>
                         </div>
                     </div>
                     <div class="col-md-4 mb-4">
                         <div class="card h-100">
                             <img src="/img/grado.jpg" class="card-img-top" alt="...">
                             <div class="card-body">
                                 <h3 class="card-title">GRADOS</h3>
                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                     of the card's content.</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </main>
     
         <section class="container-section">
             <div class="container my-4">
                 <div class="sobre">
                     <h2 class="h2text">SOBRE MI</h2>
                     <div class="content-container">
                         <div class="image-container">
                             <img src="/img/foto2.jpg" alt="Foto de perfil">
                         </div>
                         <div class="text-container">
                             <p class="textp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet at, sapiente culpa optio consequatur
                                 dolore maiores qui eligendi sint quod quaerat pariatur possimus ut doloremque voluptas accusamus
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet at, sapiente culpa optio consequatur
                                 dolore maiores qui eligendi sint quod quaerat pariatur possimus ut doloremque voluptas accusamus
                                 
                                </p>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
     
     
        
         <footer class="foter">
           <h6 class="tx">sigame en mis redes sociales</h6>
           <div class="redes">
              <img src="/img/logotipo-de-twitter.png" class="social-icon">
              <img src="/img/facebook.png" class="social-icon">
              <img src="/img/instagram.png"class="social-icon">
              <img src="/img/whatsapp.png" class="social-icon">
           </div>
     
           <p class="cpry">
             @Copyright
         </p>
     
       </footer>
     
     ```

4. creamos dentro de la carpeta Components 4 archivo que son 

     -contacto.html

     -index.html

     -portafolio.html

     -sobremi.html

     ![image-20240710003559135](C:\Users\zulay\AppData\Roaming\Typora\typora-user-images\image-20240710003559135.png)

     

     Dentro de estos estos archivos esta el diseño de cada una de las  paginas redireccionadas llamada en el archivo principal "index.html".

     

## **contacto**
1. Este apartado tiene las siguientes funciones: 

   -Cuenta con un menú  

   -una imagen

   -un texto

   -formulario

   -contactos 

   -pie de pagina

   ```sql
    <header class="container-fluid p-0">
           <div class="img">
               <img src="/img/411492.jpg" alt="Imagen de fondo">
               <h1>CONTACTO</h1>
               <div class="navbar-container">
                   <nav class="navbar navbar-expand-lg navbar-dark navbar-overlay">
                       <div class="container-fluid">
                           <div class="collapse navbar-collapse" id="navbarNav">
                               <ul class="navbar-nav ms-auto">
                                   <li class="nav-item">
                                       <a class="nav-link active" aria-current="page"
                                           href="/components/inicio.html">INICIO</a>
                                   </li>
                                   <li class="nav-item">
                                       <a class="nav-link" href="/components/portafolio.html">PORTAFOLIO</a>
                                   </li>
                                   <li class="nav-item">
                                       <a class="nav-link" href="/components/sobremi.html">SOBRE MI</a>
                                   </li>
                                   <li class="nav-item">
                                       <a class="nav-link" href="/components/contacto.html">CONTACTO</a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </nav>
               </div>
           </div>
       </header>
   
       <main class="main-fn">
           <div>
               <p class="texs">
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus nisi quis nulla iusto iste
                   animi veritatis aliquam, inventore laudantium laboriosam tenetur, rem porro eum tempore incidunt natus.
                   Nobis, qui?
               </p>
           </div>
   
           <div class="form">
               <section class="response-section container mt-4">
                   <h2>Registrate</h2>
                   <form>
                     <div class="mb-3">
                       <label for="name" class="form-label">Nombre</label>
                       <input type="text" class="form-control" id="name" placeholder="Ingresa tu nombre">
                     </div>
                     <div class="mb-3">
                       <label for="email" class="form-label">Correo electrónico</label>
                       <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo electrónico">
                     </div>
                     <div class="mb-3">
                       <label for="message" class="form-label">Mensaje</label>
                       <textarea class="form-control" id="message" rows="3" placeholder="Escribe tu mensaje"></textarea>
                     </div>
                     <button type="submit" class="btn btn-primary">Enviar</button>
                   </form>
                 </section>
           </div>
   
       </main>
   
       <section class="section">
           <div class="imges">
               <div>
                   <img src="/img/telefono.png" alt="Icono de teléfono">
                   <samp>6658845</samp>
               </div>
       
               <div>
                   <img src="/img/gmail.jpg" alt="Icono de correo electrónico">
                   <samp>fotogarfpo@gmail.com</samp>
               </div>
       
               <div>
                   <img src="/img/direccion.jpg" alt="Icono de dirección">
                   <samp>cra 10 Bn 31 piso 5</samp>
               </div>
           </div>
       </section>
   
       <footer class="foter">
           <h6 class="text">sigame en mis redes sociales</h6>
           <div class="redes">
              <img src="/img/logotipo-de-twitter.png" class="social-icon">
              <img src="/img/facebook.png" class="social-icon">
              <img src="/img/instagram.png"class="social-icon">
              <img src="/img/whatsapp.png" class="social-icon">
           </div>
   
           <p class="cpry">
             @Copyright
         </p>
       </footer>
   
   ```

  ## **index**

1. Este apartado tiene las siguientes funciones:

   -un menú

   -un carrusel de imágenes

   -tres imágenes textuales 

   -una imagen textuales

   -pie de pagina

```sql
  <header class="container-fluid p-0">
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/grado.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h1>FOTOGRAFÍAS PROFECIONALES</h1>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/img/imagen3.jpeg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h1>FOTOGRAFÍAS PROFECIONALES</h1>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/img/imagen1.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h1>FOTOGRAFÍAS PROFECIONALES</h1>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

      <!-- Navegación dentro del carrusel -->
      <nav class="navbar navbar-expand-lg navbar-dark navbar-overlay">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">EVENTOS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/components/inicio.html">INICIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/components/portafolio.html">PORTAFOLIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/components/sobremi.html">SOBRE MI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/components/contacto.html">CONTACTO</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <main class="container-main">
    <h1 class="text">MIS ESPERIENCIAS</h1>
    <div class="container my-4">
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="/img/grado.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">GRADOS</h3>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk
                of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="/img/bebe.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">GRADOS</h3>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk
                of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="/img/pareja.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">GRADOS</h3>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk
                of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <section class="container-section">
    <div class="container my-4">
      <div class="sobre">
        <h2 class="h2text">SOBRE MI</h2>
        <div class="content-container">
          <div class="image-container">
            <img src="/img/foto2.jpg" alt="Foto de perfil">
          </div>
          <div class="text-container">
            <p class="textp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet at, sapiente culpa optio
              consequatur
              dolore maiores qui eligendi sint quod quaerat pariatur possimus ut doloremque voluptas accusamus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet at, sapiente culpa optio consequatur
              dolore maiores qui eligendi sint quod quaerat pariatur possimus ut doloremque voluptas accusamus

            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <footer class="foter">
    <h6 class="tx">sigame en mis redes sociales</h6>
    <div class="redes">
      <img src="/img/logotipo-de-twitter.png" class="social-icon">
      <img src="/img/facebook.png" class="social-icon">
      <img src="/img/instagram.png" class="social-icon">
      <img src="/img/whatsapp.png" class="social-icon">
    </div>

    <p class="cpry">
      @Copyright
    </p>

  </footer>
```
## **Portafolio**

1. Este apartado tiene las siguientes funciones: 

   -Cuenta con un menú  

   -una imagen

   -un texto

   -formulario

   -contactos 

   -pie de pagina

```sql
<header class="container-fluid p-0">
    <div class="img">
      <img src="/img/playa.jpg.webp" alt="Imagen de fondo">
      <h1>PORTAFOLIO</h1>
      <div class="navbar-container">
        <nav class="navbar navbar-expand-lg navbar-dark navbar-overlay">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/components/inicio.html">INICIO</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/components/portafolio.html">PORTAFOLIO</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/components/sobremi.html">SOBRE MI</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/components/contacto.html">CONTACTO</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  


  <main class="container-main">
  <div class="container my-4">
    <div class="row g-4 justify-content-center">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card h-100">
          <a href="/seccion/seccion1.html" class="stretched-link">
            <img src="/img/imagen3.jpeg" class="card-img-top" alt="Imagen 1">
          </a>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card h-100">
          <a href="/seccion/seccion2.html" class="stretched-link">
            <img src="/img/pareja.jpg" class="card-img-top" alt="Imagen 2">
          </a>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card h-100">
          <a href="/seccion/seccion3.html" class="stretched-link">
            <img src="/img/bebyshower.jpg" class="card-img-top" alt="Imagen 3">
          </a>
        </div>
      </div>
    </div>
  </div>
  </main>


    <footer class="foter">
        <h6 class="text">sigame en mis redes sociales</h6>
        <div class="redes">
           <img src="/img/logotipo-de-twitter.png" class="social-icon">
           <img src="/img/facebook.png" class="social-icon">
           <img src="/img/instagram.png"class="social-icon">
           <img src="/img/whatsapp.png" class="social-icon">
        </div>

        <p class="cpry">
          @Copyright
      </p>

    </footer>
```

## **sobremi**

1.Este apartado tiene las siguientes funciones: 

-Cuenta con un menú  

-una imagen

-un texto

-balance de responsabilidad

-contactos 

-pie de pagina

    <header class="container-fluid p-0">
        <div class="img">
            <img src="/img/foto2.jpg" alt="Imagen de fondo">
            <h1>SOBRE MI</h1>
            <div class="navbar-container">
                <nav class="navbar navbar-expand-lg navbar-dark navbar-overlay">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page"
                                        href="/components/inicio.html">INICIO</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/components/portafolio.html">PORTAFOLIO</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/components/sobremi.html">SOBRE MI</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/components/contacto.html">CONTACTO</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    
    <main class="mainsob">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nihil vitae aliquid similique a
            explicabo, eos ducimus laboriosam architecto eum tempore asperiores saepe recusandae delectus dolore quasi
            eligendi ullam in.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nihil vitae aliquid similique a
            explicabo, eos ducimus laboriosam architecto eum tempore asperiores saepe recusandae delectus dolore quasi
            eligendi ullam in.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nihil vitae aliquid similique a
            explicabo, eos ducimus laboriosam architecto eum tempore asperiores saepe recusandae delectus dolore quasi
            eligendi ullam in.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nihil vitae aliquid similique a
            explicabo, eos ducimus laboriosam architecto eum tempore asperiores saepe recusandae delectus dolore quasi
            eligendi ullam in.
        </p>
    </main>
    
    <section class="sec3">
        <div class="imgs">
            <img src="/img//foto2.jpg" alt="">
        </div>
    
        <div class="tex">
            <h1>JAIDER</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, minus corporis! Cumque voluptatum adipisci
                quia iste praesentium sed veniam beatae aliquam molestiae provident? Minus repudiandae dicta accusamus
                veniam ut fugit!
            </p>
    
            <div class="cont">
                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-success" style="width: 25%">Creatividad 25%</div>
                </div>
                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0"
                    aria-valuemax="100">
                    <div class="progress-bar bg-info text-dark" style="width: 50%">Imaginación 50%</div>
                </div>
                <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-warning text-dark" style="width: 75%">Edición de fotografía 75%</div>
                </div>
                <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-danger" style="width: 100%">Dedicación 100%</div>
                </div>
            </div>
        </div>
    </section>



    <section class="como">
        <h1 class="texth">¿COMO PUEDO AYUDARTE?</h1>
    
        <div class="cont">
            <p >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis consectetur eos libero
                exercitationem accusantium, asperiores aspernatur impedit debitis fuga voluptates, sequi commodi dolores
                temporibus. Sint laboriosam neque quis eligendi aliquid?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis consectetur eos libero
                exercitationem accusantium, asperiores aspernatur impedit debitis fuga voluptates, sequi commodi dolores
                temporibus. Sint laboriosam neque quis eligendi aliquid?
            </p>
        </div>
    
    </section>


    <footer class="foter">
        <h6 class="tx">sigame en mis redes sociales</h6>
        <div class="redes">
            <img src="/img/logotipo-de-twitter.png" class="social-icon">
            <img src="/img/facebook.png" class="social-icon">
            <img src="/img/instagram.png" class="social-icon">
            <img src="/img/whatsapp.png" class="social-icon">
        </div>
    
        <p class="cpry">
            @Copyright
        </p>
    
    </footer>





## **Estilos**     
1. creamos los archivo de estilos y lo redireccionamos al "índex principal" que cuenta con :

   -contacto

   -portafolio

   -seccion1

   -sobremi

   ![image-20240710011806307](C:\Users\zulay\AppData\Roaming\Typora\typora-user-images\image-20240710011806307.png)

   

   

   1.estilos de contacto:

   ![image-20240710012243754](C:\Users\zulay\AppData\Roaming\Typora\typora-user-images\image-20240710012243754.png)

2. estilos de portafolios:

     ![image-20240710012353967](C:\Users\zulay\AppData\Roaming\Typora\typora-user-images\image-20240710012353967.png)

3. estilos de seccion1:

     ![image-20240710012516559](C:\Users\zulay\AppData\Roaming\Typora\typora-user-images\image-20240710012516559.png)

4. estilos de sobremi

     ![image-20240710012619153](C:\Users\zulay\AppData\Roaming\Typora\typora-user-images\image-20240710012619153.png)

## **Img**     
1. se coloca las imágenes que utiliza y sede sea:
   
   ![image-20240710012832872](C:\Users\zulay\AppData\Roaming\Typora\typora-user-images\image-20240710012832872.png)

## **Sección**     
1. En la carpeta de sección se crean tres archivo que me redirecciona al archivo del portafolio :

   ![image-20240710013351427](C:\Users\zulay\AppData\Roaming\Typora\typora-user-images\image-20240710013351427.png)


## **seccion1** 
1. Este archivo  cuenta con:

   -menú

   cuatro imágenes textuales

   -texto

   -formulario

   -pie de pagina 


```sql
  <header class="container-h">
    <div>
      <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/index.html">INICIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/components/portafolio.html">PORTAFOLIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/components/sobremi.html">SOBRE MI</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/components/contacto.html">CONTACTO</a>
            </li>
        </ul>
  </div>
  </header>
   

    <main class="container-m">
      <h1 class="h1">SECCION DE FOTOS 1</h1>
        <div class="secc">
          <div class="seccion">
            <img src="/img/pareja1.jpg">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Aut nam recusandae, iure dolorem necessitatibus rem sunt modi
              tempora sed reprehenderit, perferendis, doloremque iste fuga 
              obcaecati alias neque non quibusdam sapiente.</p>
          </div>

          <div class="seccion">
            <img src="/img/pareja2.jpg">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Aut nam recusandae, iure dolorem necessitatibus rem sunt modi
              tempora sed reprehenderit, perferendis, doloremque iste fuga 
              obcaecati alias neque non quibusdam sapiente.</p>
          </div>

          <div class="seccion">
            <img src="/img/pareja3.jpg">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Aut nam recusandae, iure dolorem necessitatibus rem sunt modi
              tempora sed reprehenderit, perferendis, doloremque iste fuga 
              obcaecati alias neque non quibusdam sapiente.</p>
          </div>

          <div class="seccion">
            <img src="/img/pareja5.jpg">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Aut nam recusandae, iure dolorem necessitatibus rem sunt modi
              tempora sed reprehenderit, perferendis, doloremque iste fuga 
              obcaecati alias neque non quibusdam sapiente.</p>
          </div>
        </div>
    </main>

    <section class="div">
      <div class="container my-4">
        <div class="row g-4 justify-content-center">
          
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <a href="/seccion/seccion2.html" class="stretched-link">
                <img src="/img/pareja.jpg" class="card-img-top" alt="Imagen 2">
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <a href="/seccion/seccion3.html" class="stretched-link">
                <img src="/img/bebyshower.jpg" class="card-img-top" alt="Imagen 3">
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>


     <section class="response-section container mt-4">
      <h2>Deja tu respuesta</h2>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" placeholder="Ingresa tu nombre">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico</label>
          <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo electrónico">
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Mensaje</label>
          <textarea class="form-control" id="message" rows="3" placeholder="Escribe tu mensaje"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </section>
    
    <footer class="foter">
      <h6 class="tx">sigame en mis redes sociales</h6>
      <div class="redes">
         <img src="/img/logotipo-de-twitter.png" class="social-icon">
         <img src="/img/facebook.png" class="social-icon">
         <img src="/img/instagram.png"class="social-icon">
         <img src="/img/whatsapp.png" class="social-icon">
      </div>

      <p class="cpry">
        @Copyright
    </p>

  </footer>
```

## **seccion2**
1.Este archivo  cuenta con:

-menú

cuatro imágenes textuales

-texto

-formulario

-pie de pagina 

```sql
<header class="container-h">
    <div>
      <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/index.html">INICIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/components/portafolio.html">PORTAFOLIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/components/sobremi.html">SOBRE MI</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/components/contacto.html">CONTACTO</a>
            </li>
        </ul>
  </div>
  </header>
   

    <main class="container-m">
      <h1 class="h1">SECCION DE FOTOS 2 </h1>
        <div class="secc">
          <div class="seccion">
            <img src="/img/pareja1.jpg">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Aut nam recusandae, iure dolorem necessitatibus rem sunt modi
              tempora sed reprehenderit, perferendis, doloremque iste fuga 
              obcaecati alias neque non quibusdam sapiente.</p>
          </div>

          <div class="seccion">
            <img src="/img/pareja2.jpg">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Aut nam recusandae, iure dolorem necessitatibus rem sunt modi
              tempora sed reprehenderit, perferendis, doloremque iste fuga 
              obcaecati alias neque non quibusdam sapiente.</p>
          </div>

          <div class="seccion">
            <img src="/img/pareja5.jpg">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Aut nam recusandae, iure dolorem necessitatibus rem sunt modi
              tempora sed reprehenderit, perferendis, doloremque iste fuga 
              obcaecati alias neque non quibusdam sapiente.</p>
          </div>

          <div class="seccion">
            <img src="/img/pareja.jpg">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Aut nam recusandae, iure dolorem necessitatibus rem sunt modi
              tempora sed reprehenderit, perferendis, doloremque iste fuga 
              obcaecati alias neque non quibusdam sapiente.</p>
          </div>

        </div>
      
    </main>

    <section class="div">
      <div class="container my-4">
        <div class="row g-4 justify-content-center">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <a href="/seccion/seccion1.html" class="stretched-link">
                <img src="/img/imagen3.jpeg" class="card-img-top" alt="Imagen 1">
              </a>
            </div>
          </div>
          
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <a href="/seccion/seccion3.html" class="stretched-link">
                <img src="/img/bebyshower.jpg" class="card-img-top" alt="Imagen 3">
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
    
   
    <section class="response-section container mt-4">
      <h2>Deja tu respuesta</h2>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" placeholder="Ingresa tu nombre">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico</label>
          <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo electrónico">
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Mensaje</label>
          <textarea class="form-control" id="message" rows="3" placeholder="Escribe tu mensaje"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </section>

    <footer class="foter">
      <h6 class="tx">sigame en mis redes sociales</h6>
      <div class="redes">
         <img src="/img/logotipo-de-twitter.png" class="social-icon">
         <img src="/img/facebook.png" class="social-icon">
         <img src="/img/instagram.png"class="social-icon">
         <img src="/img/whatsapp.png" class="social-icon">
      </div>

      <p class="cpry">
        @Copyright
    </p>

  </footer>
```

## **seccion3**
1.Este archivo  cuenta con:

-menú

cuatro imágenes textuales

-texto

-formulario

-pie de pagina 

```sql
  <header class="container-h">
    <div>
      <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/index.html">INICIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/components/portafolio.html">PORTAFOLIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/components/sobremi.html">SOBRE MI</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/components/contacto.html">CONTACTO</a>
            </li>
        </ul>
  </div>
  </header>
   

    <main class="container-m">
      <h1 class="h1">SECCION DE FOTOS 3</h1>
        <div class="secc">
          <div class="seccion">
            <img src="/img/seccion1.jpg">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Aut nam recusandae, iure dolorem necessitatibus rem sunt modi
              tempora sed reprehenderit, perferendis, doloremque iste fuga 
              obcaecati alias neque non quibusdam sapiente.</p>
          </div>

          <div class="seccion">
            <img src="/img/seccion2.jpg">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Aut nam recusandae, iure dolorem necessitatibus rem sunt modi
              tempora sed reprehenderit, perferendis, doloremque iste fuga 
              obcaecati alias neque non quibusdam sapiente.</p>
          </div>

          <div class="seccion">
            <img src="/img/seccion3.jpg">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Aut nam recusandae, iure dolorem necessitatibus rem sunt modi
              tempora sed reprehenderit, perferendis, doloremque iste fuga 
              obcaecati alias neque non quibusdam sapiente.</p>
          </div>

          <div class="seccion">
            <img src="/img/seccion4.jpg">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Aut nam recusandae, iure dolorem necessitatibus rem sunt modi
              tempora sed reprehenderit, perferendis, doloremque iste fuga 
              obcaecati alias neque non quibusdam sapiente.</p>
          </div>

        </div>
      
    </main>

    <section class="div">
      <div class="container my-4">
        <div class="row g-4 justify-content-center">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <a href="/seccion/seccion1.html" class="stretched-link">
                <img src="/img/imagen3.jpeg" class="card-img-top" alt="Imagen 1">
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100">
              <a href="/seccion/seccion2.html" class="stretched-link">
                <img src="/img/pareja.jpg" class="card-img-top" alt="Imagen 2">
              </a>
            </div>
          </div>
        
        </div>
      </div>

    </section>

    
    <section class="response-section container mt-4">
      <h2>Deja tu respuesta</h2>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" placeholder="Ingresa tu nombre">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico</label>
          <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo electrónico">
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Mensaje</label>
          <textarea class="form-control" id="message" rows="3" placeholder="Escribe tu mensaje"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </section>
    
    <footer class="foter">
      <h6 class="tx">sigame en mis redes sociales</h6>
      <div class="redes">
         <img src="/img/logotipo-de-twitter.png" class="social-icon">
         <img src="/img/facebook.png" class="social-icon">
         <img src="/img/instagram.png"class="social-icon">
         <img src="/img/whatsapp.png" class="social-icon">
      </div>

      <p class="cpry">
        @Copyright
    </p>

  </footer>
```



