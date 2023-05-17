<div>
  <table width="1000px">
    <theader>
      <tr>
        <td><img src="https://github.com/rescobedoq/pw2/blob/main/epis.png?raw=true" alt="EPIS" style="width:50%; height:auto"/></td>
        <th>
          <span style="font-weight:bold;">UNIVERSIDAD NACIONAL DE SAN AGUSTIN</span><br />
          <span style="font-weight:bold;">FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</span><br />
          <span style="font-weight:bold;">DEPARTAMENTO ACADÉMICO DE INGENIERÍA DE SISTEMAS E INFORMÁTICA</span><br />
          <span style="font-weight:bold;">ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</span>
        </th>
        <td><img src="https://github.com/rescobedoq/pw2/blob/main/abet.png?raw=true" alt="ABET" style="width:50%; height:auto"/></td>
      </tr>
    </theader>
    <tbody>
      <tr><td colspan="3"><span style="font-weight:bold;">Formato</span>: Guía de Práctica de Laboratorio</td></tr>
      <tr><td><span style="font-weight:bold;">Aprobación</span>:  2022/03/01</td><td><span style="font-weight:bold;">Código</span>: GUIA-PRLD-001</td><td><span style="font-weight:bold;">Página</span>: 1</td></tr>
    </tbody>
  </table>
</div>

<div align="center">
    <span style="font-weight:bold;">INFORME DE LABORATORIO</span><br />
</div>

<div align="center">
  <table width="1000px">
    <theader>
      <tr><th colspan="6">INFORMACIÓN BÁSICA</th></tr>
    </theader>
    <tbody>
      <tr><td>ASIGNATURA:</td><td colspan="5">Programación Web 02</td></tr>
      <tr><td>TÍTULO DE LA PRÁCTICA:</td><td colspan="5">JavaScript</td></tr>
      <tr><td>NÚMERO DE PRÁCTICA:</td><td>02</td><td>AÑO LECTIVO:</td><td>2023 A</td><td>NRO. SEMESTRE:</td><td width="60px">  III  </td></tr>
      <tr><td>FECHA DE PRESENTACIÓN:</td><td>18/05/2023</td><td>HORA DE PRESENTACIÓN:</td><td colspan="3">11:20</td></tr>
      <tr>
        <td colspan="4">NOMBRE:
          <ul>
            <li>Melsy Melany Huamaní Vargas</li>
          </ul>
        </td>
        <td>NOTA:</td><td></td>
      </tr>
      <tr>
        <td colspan="6" width="1000px">DOCENTES:
          <ul>
            <li>Carlo Jose Luis Corrales Delgado (Teoría)</li>
            <li>Anibal Sardon Paniagua (Laboratorio)</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div align="center">
  <table width="1000px">
    <theader>
      <tr><th>SOLUCIÓN Y RESULTADOS</th></tr>
    </theader>
    <tbody>
      <tr>
        <td>
          <b>I. EJERCICIOS RESUELTOS</b><br/><br/>
          <ol>
            <li><b>Escriba la función arrayGenerator que reciba tres enteros positivos: n, min y max, con min < max y devuelva un arreglo de n números enteros positivos entre los valores dados (incluyendo min, pero no max). Para la generación de números aleatorios use Math.random().</b><br/><br/>
              <ul>
                <li>Escribimos el código dado por el ejercicio resuelto de la guía del laboratorio, escribimos las últimas dos líneas para probar la función "arrayGenerator()", la cual debería producir un arreglo de 9 elementos, con números del 2 al 5. Luego se pone la última línea para imprimir el arreglo en la consola.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicioResuelto1_a.png?raw=true" style="width:60%;"/><br/><br/>
                </li>
                <li>Se ejecuta el código en la consola, y así como se predijo, es un arreglo de 9 elementos, en donde hay números 3 y 4, y estos se encuentran en el rango de 2 a 5, como se puso en las líneas de cófigo para probar la función, por lo que esta funciona correctamente.<br><br>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicioResuelto1_b.png?raw=true" style="width:50%;"/><br/><br/>
                </li>
              </ul>
            </li>
            <li><b>Escriba la función voteCounting; que reciba un arreglo votes, conteniendo los votos para varios candidatos considerando un número para cada candidato, y devuelva un objeto con el número que identifica al candidato ganador y los votos que este obtuvo.</b><br/><br/>
              <ul>
                <li>Escribimos el código dado por el ejercicio resuelto 2 de la guía del laboratorio, escribimos las últimas dos líneas para probar la función "votesCounting(votes)", en este caso colocamos a los "candidatos" como números y luego se busca imprimir cual es el candidato más votado y cuantos votos obtuvo.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicioResuelto2_a.png?raw=true" style="width:55%;"/><br/><br/>
                </li>
                <li>Se ejecuta el código en la consola, y se obtiene que el candidatos ganador es el candidato denominado como "5", y coincidentemente, obtuvo la mayor cantidad de votos (5).<br><br>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicioResuelto2_b.png?raw=true" style="width:50%;"/><br/><br/>
                </li>
              </ul>
            </li>
          </ol>
          <br/>
          <br/>
          <b>II. SOLUCIÓN DE EJERCICIOS/PROBLEMAS PROPUESTOS</b><br/><br/>
          Todas las capturas fueron tomadas el día miércoles 17 de mayo del 2023, por lo que los scripts y páginas que se muestran en las imágenes están de acuerdo a esa fecha. Además, todas las páginas utilizan una misma hoja de estilo creada (y guardada también en el repositorio), así también, todas tienen una estructura, con el título (número de ejercicio), nombre, enunciado del ejercicio, los datos requeridos y su resultado. En este informe se explica sobretodo la ejecución de las páginas, por lo que se recuerda que la explicacion del código se encuentra en el video del ejercicio 06, y de manera extra también se encuentra otro video explicando en audio la ejecución de las páginas (también en el ejercicio 06). Por otro lado, todo el código que se ha realizado en este laboratorio, junto al informe que se encuentra en el README.md, se encuentra en la página del repositorio GitHub: https://github.com/mhuamanivar/PW2-HuamaniV-Lab02 , y el ".git" es: https://github.com/mhuamanivar/PW2-HuamaniV-Lab02.git . <br/><br/>
          <ol>
            <li><b>Ejercicio 01: Escriba una función que reciba el número de día de la fecha actual new Date() - https://www.w3schools.com/jsref/jsref_obj_date.asp y devuelva el texto del día de la semana correspondientes. Por ejemplo si recibe 0, devolvería “Domingo”.</b><br/><br/>
              <ul>
                <li>El ejercicio pide realizar una función que reciba el número de día de la fecha actual y devuelva el texto del día de la semana, entonces, se crea el script con la variable "fechaActual" en donde se almacena el objeto creado con "new Date()" por defecto, es decir, que guarda la fecha actual. Posteriormente, se tiene la variable "numDia", donde se obtiene el número del día dado por el método "getDay()". Luego creamos la variable "diaSem", en donde llamamos a la función "diaSemana()", y obtenemos el texto del día de la semana mediante un arreglo, cuya posición corresponde al día exacto, por lo que es sencillo obtener el resultado correcto. Debido a que la captura fue tomada el día "Miércoles 17 de Mayo", entonces el número mostrado es 3, y el texto que retorna es "Miércoles".<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio01_c.png?raw=true" style="width:90%;"/><br/><br/>
                </li>
                <li>Para obtener una mejor vista del script, se ha creado la página web para que muestre de la misma forma el número y el texto del día de la semana, para ello el script tuvo un cambio y se le aumentaron las líneas 4, 18 y 19 del código. La línea 4 funciona para que, al cargar la ventana automáticamente se ejecute el script y con la línea 18 se pueda imprimir el texto en la página.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio01_a.png?raw=true" style="width:90%;"/><br/><br/>
                </li>
                <li>Aquí entonces se puede ver la ejecución en la página web, en donde se muestra el resultado del script, que es el número y el día de la semana, que en este caso es miércoles.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio01_b.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
              </ul>
            </li>
            <li><b>Ejercicio 02: Escriba una página web que reciba un texto y al presionar un botón muestre el mismo texto invertido en otra sección (div). Por ejemplo si se escribe “Hola”, se mostraría como “aloH”.</b><br/><br/>
              <ul>
                <li>Comenzamos cargando la página creada, en la cual una vez cargada pide ingresar el texto que se quiera invertir.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio02_a.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
                <li>Ahora ingresamos el texto que deseamos invertir, en este caso, se siguió el ejemplo del enunciado y se coloca "Hola".<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio02_b.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
                <li>Hacemos click en el botón "Invertir" y aparece el resultado "aloH", junto con su subtítulo "Texto al revés" que antes no era visible.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio02_c.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
                <li>Se puede probar con otro texto para comprobar nuevamente la funcionalidad de la página y colocamos "Maria vendio una sandia".<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio02_d.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
                <li>Hacemos nuevamente click al botón "Invertir" y aparece el resultado correcto "aidnas anu oidnev airaM".<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio02_e.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
              </ul>
            </li>
            <li><b>Ejercicio 03: Escribir una página que muestre cuántos días faltan para el día de Arequipa.</b><br/><br/>
              <ul>
                <li>En este ejercicio nos pide crear una página que muestre cuantos días faltan para el día de Arequipa, el cual es el 15 de Agosto, así que en el código obtenemos la fecha actual con "new Date()" y creamos otra fecha colocando la fecha de Arequipa, luego se restan el tiempo de las fechas (obtenido en milisegundos) y se transforma en días. Como la captura fue tomado el día Miércoles 17 de Mayo, entonces faltan 90 días exactos para el día de Arequipa.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio03.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
              </ul>
            </li>
            <li><b>Ejercicio 04: Escribir un página que reciba el URL de la sesión de google meet de hoy y devuelva el código de la sesión sin guiones separadores.</b><br/><br/>
              <ul>
                <li>Abrimos la página del Ejercicio 04 y obtenemos nuestros datos y la información que requiere en el input, en este caso, pide ingresar un link de Meet.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio04_a.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
                <li>Se ingresa el link del meet para que obtengamos el código del Meet, tal y como lo pide el ejercicio. En este caso se ingreso:  "https://meet.google.com/nvz-wpne-ezr".<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio04_b.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
                <li>Al hacer click en el botón "Obtener código", aparece solamente el código del link de Meet, y sin los guiones separadores, obteniendo el resultado correcto: "nvzwpneezr".<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio04_c.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
                <li>Probamos nuevamente colocando otro link de meet "https://meet.google.com/xdi-fson-sgy", y presionamos por segunda vez el botón "Obtener código" para que se actualice la salida con el nuevo código del link ingresado, lo que obtiene "xdifsonsgy".<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio04_d.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
              </ul>
            </li>
            <li><b>Ejercicio 05: Escribir una página que permita calcular las suma de todos los valores de una tabla de valores dinámica. La idea es crear una página web con un formulario que te permita decir cuantos valores tendrá la tabla, luego, al enviar el formulario la tabla se debe crear dinámicamente, junto con otro botón de envió para calcular la suma.</b><br/><br/>
              <ul>
                <li>Primero cargamos la página web del Ejercicio05, y se obtiene un subtítulo "Cantidad de valores:" y un input para ingresar la cantidad de valores que queremos ingresar, es decir la cantidad de números que se va a ingresar posteriormente.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio05_a.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
                <li>En este ejemplo de ejecución ingresamos el número 3 en la celda, teniendo en cuenta que este es un input de tipo número. Entonces hacemos click en el botón "Crear tabla" y este botón mediante un formulario va a llamar al script que creará una tabla con la cantidad de celdas (filas) de acuerdo al número que se ha ingresado.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio05_b.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
                <li>Esta nueva tabla con el título de "Números", también tienen celdas de input tipo número, por lo que directamente podemos ingresar el número o podemos hacer click en las flechitas que aparecen en el lado derecho del interior de las celdas, estas flechitas suben o bajan el número de uno en uno hasta obtener el que queremos.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio05_c.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
                <li>En este caso se ingresó mediante las flechitas los números 4, 5 y 3, lo cual en el resultado de la suma debería obtener la suma de 4 + 5 + 3 = 12.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio05_d.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
                <li>Luego se hace click en el botón "Calcular suma", la cual también mediante un formulario se ejecuta el script que recibe la información cuando ha ocurrido un "evento" en el botón. El script ayuda a sumar todos los valores de la última tabla creada, y tal como se predijo se obtiene de manera correcta el número 12.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio05_e.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
                <li>Si queremos crear una nueva tabla con diferente cantidad de números (filas), entonces debemos borrar la información del primer input y colocar esa nueva cantidad de filas. En este ejemplo, pusimos 2 como la nueva cantidad.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio05_f.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
                <li>Se puede observar que al hacer click en el botón "Crear tabla", se crea la nueva tabla correctamente con las dos filas para insertar nuevos números, y se borra la suma obtenida con anterioridad para tener una mejor visualización.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio05_g.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
                <li>Para probar nuevamente el funcionamiento de las celdas y de la suma posteriormente, se coloca los números 9 y -4, lo que resultaría en su suma 9 + (-4) = 5.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio05_h.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
                <li>Por último, se hace click en el botón de "Calcular suma" para que sume los nuevos valores y se obtiene el resultado correcto de 5. Por lo que se comprueba el funcionamiento de toda la página creada.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/ejercicio05_i.png?raw=true" style="width:100%;"/><br/><br/>
                </li>
              </ul>
            </li>
            <li><b>Ejercicio 06: Utilice la herramienta flipgrid - https://info.flipgrid.com/ envie un video en el tema "Presentacion y ejemplo deJavaScript" ponga aquí los enlaces de sus envíos.</b><br/><br/>
              <ul>
                <li>Link del video en flipgrid, explicando el código de los cinco ejercicios propuestos, los html, los scripts y la hoja de estilo css: https://flip.com/s/KTfBqB9guX6m</li>
                <li>Link del video en flipgrid, explicando la ejecución de los cinco ejercicios propuestos, se hacen pruebas de su funcionamiento en las páginas web: https://flip.com/s/61CWWt4yfYWL<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/flipgrid.png?raw=true" style="width:60%;"/><br/><br/>
                </li>
              </ul>
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td><b>II. SOLUCIÓN DEL CUESTIONARIO</b><br/><br/>
          <ol>
            <li><b>Pruebe este código de arrayGenerator() en la página https://jslint.com/</b><br/><br/>
              <ul>
                <li>Para probar el código de arrayGenerator(), es necesario ejecutarlo en el editor de JSLint, el cual nos manda dos errores principales, el "unexpected let" y el "unexpected for". Esto ocurre porque se necesitan habilitar ciertas funcionalidades del lenguaje JavaScript, lo cual se verá en el siguiente punto.<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/cuestionario01_c.png?raw=true" style="width:90%;"/><br/><br/>
                </li>
                <li>Aquí se puede ver la lista de instrucciones que podemos escribir en el editor de JSLint para habilitar funcionalidades como el "for" u otros que nos sirven para ejecutar adecuadamente el código (también se pueden activar en la tabla de opciones del JSLint). Estas y más funcionalidades se pueden encontrar en el siguiente link proporcionado por su página oficial: https://github.com/jslint-org/jslint#directive-jslint<br/><br/>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/cuestionario01_b.png?raw=true" style="width:70%;"/><br/><br/>
                </li>
                <li>Sin embargo, si no ponemos ninguna instrucción, es decir, no habilitamos ningunas de sus funcionalidades, entonces por defecto tendríamos que utilizar el siguiente código de la función, en el cual cambiamos el "for" por el "while" y la variable de control la definimos antres del bucle, así como vamos aumentandola de la manera "j = j + 1".<br><br>
                  <img src="https://github.com/mhuamanivar/PW2-HuamaniV-Lab02/blob/main/Imagenes/cuestionario01_a.png?raw=true" style="width:90%;"/><br><br/>
                </li>
              </ul>
            </li>
            <li><b>Revisar esta discusión en stackoverflow - https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript</b><br/><br/>
              <ul>
                <li><b>¿Cómo se pueden resolver los warnings?</b><br/>
                </li>
                <li><b>¿Se puede modificar la solución usando map? ¿Cómo?</b><br/>
                </li>
              </ul>
            </li>
          </ol>
        </td>
      </tr>
      <tr>
        <td><b>III. CONCLUSIONES</b><br/>
          ---------------------------------------------------
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div align="center">
  <table width="1000px">
    <theader>
      <tr><th>RETROALIMENTACIÓN GENERAL</th></tr>
    </theader>
    <tbody>
      <tr height="150px"><td width="1000px"></td></tr>
    </tbody>
  </table>
</div>

<div align="center">
  <table width="1000px">
    <theader>
      <tr><th>REFERENCIAS Y BIBLIOGRAFÍA</th></tr>
    </theader>
    <tbody>
      <tr>
        <td width="1000px">
          <ul>
            <li>https://github.com/jslint-org/jslint#directive-jslint</li>
            <li>https://www.jslint.com/</li>
            <li>https://github.com/rescobedoq/pw2/tree/main/labs/lab02</li>
            <li>https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

