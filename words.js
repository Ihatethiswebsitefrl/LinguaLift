// words.js - El Almacén de Vocabulario (30 words per level)
const practiceQuestions = {
  // NIVEL 1: Vocabulario Básico y Cotidiano
1: [
  { 
    paragraph: "Después de ganar el torneo final, todos los jugadores del equipo salieron a celebrar con sus familias. El entrenador gritaba de alegría y los niños no podían dejar de sonreír mientras levantaban el trofeo. Se sentían muy felices porque todo su trabajo duro había valido la pena.", 
    question: "Basado en la reacción del equipo, ¿qué significa estar 'feliz'?", 
    choices: ["Sentir una profunda tristeza por haber terminado la competencia.", "Experimentar un estado de gran alegría y satisfacción.", "Tener mucho cansancio físico y necesidad de dormir."], 
    correct: 1 
  },
  { 
    paragraph: "La casa de mi abuela es considerada un tesoro en el pueblo porque fue construida hace más de cien años. Todavía conserva las ventanas de madera originales y el estilo de la época en que se fundó la ciudad. Es una propiedad antigua que cuenta la historia de nuestra familia.", 
    question: "¿A qué se refiere el texto cuando describe la casa como 'antigua'?", 
    choices: ["A una construcción moderna que se terminó la semana pasada.", "A algo que existe desde hace mucho tiempo o de una época lejana.", "A un edificio que ha sido pintado de color verde brillante."], 
    correct: 1 
  },
  { 
    paragraph: "El elefante caminaba lentamente por la selva buscando agua para su manada. Debido a su cuerpo gigante, los arbustos se doblaban a su paso y su sombra cubría a los animales más chicos. Es un animal tan grande que sus orejas son del tamaño de una mesa.", 
    question: "Dentro de este contexto, ¿cuál es la mejor definición para 'grande'?", 
    choices: ["Que tiene un tamaño o dimensiones muy superiores a lo normal.", "Un ser vivo que tiene la capacidad de volar sobre las montañas.", "Algo que es tan pequeño que apenas se puede ver."], 
    correct: 0 
  },
  { 
    paragraph: "Esta mañana el sol salió con mucha fuerza y no se veía ni una sola nube en el horizonte. Podíamos ver las montañas a lo lejos con total precisión porque el cielo estaba muy claro. Era el día perfecto para disfrutar de la luz natural.", 
    question: "¿Qué característica define al cielo cuando está 'claro'?", 
    choices: ["Que hay una falta total de luz y es imposible ver el camino.", "Que produce ruidos muy fuertes que asustan a los animales.", "Que está muy iluminado, limpio y permite ver con nitidez."], 
    correct: 2 
  },
  { 
    paragraph: "Mi médico dice que comer frutas y verduras todos los días es fundamental para el cuerpo. Además, caminar por las mañanas ayuda a mantener el corazón fuerte y la mente activa. Si sigues estos consejos, tendrás una vida muy saludable.", 
    question: "¿Qué implica tener un estilo de vida 'saludable'?", 
    choices: [ "Consumir alimentos que tienen un sabor muy amargo.", "Comprar productos que son excesivamente caros.", "Realizar acciones que son buenas para conservar la salud."], 
    correct: 2
  },
  { 
    paragraph: "El examen de matemáticas solo tenía dos preguntas de suma muy básicas que todos conocían. María terminó todo el trabajo en menos de cinco minutos y entregó su hoja al profesor con una sonrisa. Ella no tuvo que esforzarse nada porque el reto era muy fácil.", 
    question: "¿Por qué se describe el examen como algo 'fácil'?", 
    choices: ["Porque requería muchas horas de estudio y mucho esfuerzo.", "Porque se pudo resolver rápidamente y sin dificultad.", "Porque era tan aburrido que María se quedó dormida."], 
    correct: 1 
  },
  { 
    paragraph: "El guepardo es conocido por ser el animal más veloz de la tierra cuando persigue a su presa. En pocos segundos, puede alcanzar una velocidad que supera a la de muchos coches en la carretera. Su cuerpo está diseñado para ser muy rápido en la llanura.", 
    question: "¿Qué significa que el guepardo sea un animal 'rápido'?", 
    choices: ["Que se mueve a una gran velocidad en poco tiempo.", "Que pasa la mayor parte del día durmiendo bajo el sol.", "Que se mueve con mucha lentitud para no ser visto."], 
    correct: 0 
  },
  { 
    paragraph: "La abuela sirvió la sopa directamente desde la olla hirviendo a la mesa. El vapor subía hacia el techo y el plato quemaba al tocarlo con los dedos. Tuvimos que esperar un rato porque la comida estaba muy caliente.", 
    question: "En esta escena, ¿qué describe la palabra 'caliente'?", 
    choices: ["Algo que tiene una temperatura muy baja o congelada.", "Un objeto o alimento que tiene una temperatura elevada.", "Un alimento que no tiene sabor y necesita más sal."], 
    correct: 1 
  },
  { 
    paragraph: "Para llegar a la panadería, puedes tomar la avenida principal o el pasillo que corta por el parque. El pasillo del parque solo mide unos pocos metros y llegas en un instante. Ese camino es muy corto comparado con la ruta normal.", 
    question: "¿Qué significa que el camino sea 'corto'?", 
    choices: ["Que tiene poca longitud o distancia de un punto a otro.", "Que es extremadamente largo y toma horas recorrerlo.", "Que es muy ancho y pueden pasar muchos autos a la vez."], 
    correct: 0 
  },
  { 
    paragraph: "El niño se sentó en el rincón después de que se rompió su juguete favorito por accidente. Tenía los ojos llenos de lágrimas y no quería hablar con nadie en toda la tarde. Estaba muy triste porque ese regalo era muy especial para él.", 
    question: "¿Cómo se define el estado de estar 'triste'?", 
    choices: ["Sentirse lleno de energía y ganas de saltar.", "Estar apenado, con dolor moral o falta de alegría.", "Sentir mucho enojo y querer gritarle a los demás."], 
    correct: 1 
  },
  { 
    paragraph: "Después de jugar en el lodo, la ropa de los niños quedó llena de manchas marrones. Su madre puso todo en la lavadora con mucho jabón y agua caliente. Ahora, las camisas huelen bien y están totalmente limpias para el colegio.", 
    question: "¿Qué significa que la ropa esté 'limpia'?", 
    choices: ["Que todavía tiene restos de suciedad y polvo.","Que es ropa comprada hoy mismo en la tienda.", "Que está libre de manchas, suciedad o impurezas."], 
    correct: 2 
  },
  { 
    paragraph: "El atleta de los juegos olímpicos levantó la barra de metal que pesaba doscientos kilos. Sus músculos se marcaron por el esfuerzo y mantuvo el peso sobre su cabeza sin temblar. Es un hombre muy fuerte que entrena todos los días.", 
    question: "Dentro de este contexto, ¿qué es ser alguien 'fuerte'?", 
    choices: ["Una persona con gran vigor, resistencia o capacidad física.", "Alguien que no tiene energía y se cansa fácilmente.", "Alguien muy delgado que no puede cargar objetos."], 
    correct: 0 
  },
  { 
    paragraph: "El abuelo decidió vender su viejo tractor que ya no funcionaba bien. Con el dinero, fue a la agencia y eligió un modelo del año que brilla bajo el sol. Ahora tiene un coche nuevo que huele a plástico recién fabricado.", 
    question: "¿Qué define a un objeto como 'nuevo'?", 
    choices: ["Algo que ha sido usado por muchas personas antes.", "Algo recién hecho, fabricado o adquirido recientemente.", "Un objeto que está roto y ya no se puede usar más."], 
    correct: 1 
  },
  { 
    paragraph: "Cuando se fue la electricidad en todo el barrio, las luces de las casas se apagaron de golpe. No podíamos ver nuestras propias manos frente a la cara y tuvimos que buscar una linterna. La noche estaba totalmente oscura sin las farolas de la calle.", 
    question: "¿Qué es una situación 'oscura'?", 
    choices: ["Un lugar lleno de luces de colores y mucha claridad.", "Un espacio que tiene falta de luz o claridad.", "Un ambiente muy frío donde está cayendo nieve."], 
    correct: 1 
  },
  { 
    paragraph: "La pastelera le agregó tres tazas de azúcar y miel a la mezcla del pastel. Al probar un pedacito, el sabor era tan intenso que recordaba a un caramelo. El postre quedó muy dulce, justo como le gusta a los niños.", 
    question: "¿A qué sabe algo que es 'dulce'?", 
    choices: ["Tiene un sabor fuerte como el de la sal del mar.", "Tiene un sabor agradable como el del azúcar o la miel.", "Tiene un sabor desagradable y amargo como el café puro."], 
    correct: 1 
  },
  { 
    paragraph: "En la escuela primaria, los salones están llenos de niños pequeños que están empezando a aprender. Mi hermano menor solo tiene cinco años y tiene mucha energía para correr y jugar. Él es muy joven y todavía tiene mucho que crecer.", 
    question: "¿Qué significa que alguien sea 'joven'?", 
    choices: ["Una persona que tiene poca edad o está en su niñez.","Una persona anciana que ha vivido muchísimos años.", "Alguien que es muy alto y ya terminó de crecer."], 
    correct: 0 
  },
  { 
    paragraph: "Para sostener la puerta pesada, necesitamos un bloque de madera que no se rompa fácilmente. Compramos un tronco que tiene un espesor de treinta centímetros y es difícil de mover. Es un material muy grueso que resistirá mucho peso.", 
    question: "¿Qué característica tiene algo 'grueso'?", 
    choices: ["Que es muy delgado y se puede romper con las manos.", "Que es un objeto pequeño que cabe en un bolsillo.","Que tiene mucho espesor, bulto o es muy denso."], 
    correct: 2 
  },
  { 
    paragraph: "La nueva carretera tiene espacio para que pasen cuatro camiones al mismo tiempo sin tocarse. Es una vía muy ancha que permite que el tráfico fluya rápidamente por la ciudad. No hay peligro de chocar porque el espacio lateral es enorme.", 
    question: "¿Cómo se describe una calle 'ancha'?", 
    choices: ["Un camino estrecho donde apenas cabe una persona.", "Un espacio que es extenso o amplio de un lado a otro.", "Una ruta muy corta que se termina en un minuto."], 
    correct: 1 
  },
  { 
    paragraph: "El gatito recién nacido cabía perfectamente dentro de la palma de mi mano. Sus orejas y sus patas eran minúsculas y apenas hacía ruido cuando caminaba por la alfombra. Es un animal muy pequeño que necesita muchos cuidados.", 
    question: "¿Qué define a algo como 'pequeño'?", 
    choices: ["Algo que tiene un tamaño gigantesco como un edificio.", "Algo que tiene poco tamaño o dimensiones reducidas.", "Un animal que corre a una velocidad increíble."], 
    correct: 1 
  },
  { 
    paragraph: "En la cima de la montaña, el agua de los lagos se convierte en bloques de hielo sólido. El viento sopla con fuerza y hace que la piel se sienta entumecida si no llevas una chaqueta. El clima allí arriba es extremadamente frío.", 
    question: "¿Qué describe la palabra 'frío'?", 
    choices: ["Una temperatura muy baja o una falta de calor.","Una temperatura muy alta que hace sudar a la gente.", "Un estado tibio que es agradable para bañarse."], 
    correct: 0 
  },
  { 
    paragraph: "El payaso de la fiesta empezó a contar chistes y a hacer trucos de magia con globos de colores. Todos los invitados se reían a carcajadas y se olvidaron de sus problemas por un momento. Fue un espectáculo muy divertido para toda la familia.", 
    question: "¿Qué significa que algo sea 'divertido'?", 
    choices: ["Algo alegre que recrea, entretiene o hace reír.","Algo que causa aburrimiento y ganas de irse a casa.", "Un evento muy serio donde nadie puede hablar."], 
    correct: 0 
  },
  { 
    paragraph: "El rompecabezas tenía mil piezas y todas eran de un color azul muy parecido. Tardamos tres días enteros en encontrar dónde iba cada parte del cielo y del mar. Fue un trabajo muy difícil, pero finalmente logramos terminarlo.", 
    question: "¿Por qué el trabajo fue 'difícil'?", 
    choices: ["Porque era muy sencillo y no costó ningún esfuerzo.", "Porque se terminó rápidamente en solo dos minutos.", "Porque requirió mucho trabajo, paciencia y esfuerzo."], 
    correct: 2 
  },
  { 
    paragraph: "Hacía mucho calor dentro de la casa, así que decidimos dejar pasar el aire fresco del jardín. Empujamos la madera y ahora el gato puede entrar y salir libremente por el hueco. La puerta está abierta para que todos disfruten del sol.", 
    question: "¿Qué significa que una puerta esté 'abierta'?", 
    choices: ["Que está cerrada con llave y nadie puede pasar.", "Que no está cerrada y permite el paso o la entrada.", "Que se ha roto y ya no se puede mover nunca más."], 
    correct: 1 
  },
  { 
    paragraph: "Mi abuelo ha leído miles de libros y siempre sabe qué consejo darnos cuando tenemos un problema. Él entiende mucho sobre la vida y la historia porque ha estudiado y observado durante años. Es un hombre muy sabio al que todos respetamos.", 
    question: "¿Cómo es una persona 'sabia'?", 
    choices: ["Alguien que no sabe nada y comete muchos errores.", "Alguien que tiene conocimientos profundos y buen juicio.", "Una persona muy joven que acaba de nacer ayer."], 
    correct: 1 
  },
  { 
    paragraph: "Llegamos al cine muy temprano y todavía no había nadie sentado en las butacas. Podíamos elegir cualquier lugar porque no había ni una sola persona en la sala. El lugar estaba totalmente vacío antes de que empezara la película.", 
    question: "¿Qué significa que un lugar esté 'vacío'?", 
    choices: ["Que no contiene nada o no tiene gente dentro.","Que está lleno de gente y no hay espacio para nadie.", "Que es un espacio muy grande y lleno de luces."], 
    correct: 0 
  },
  { 
    paragraph: "Me gusta mucho mi cama porque tiene una almohada rellena de plumas suaves. Cuando apoyo la cabeza, la almohada se hunde suavemente y se siente como una nube. Es muy blanda y me ayuda a dormir profundamente.", 
    question: "¿Qué característica tiene algo 'blando'?", 
    choices: ["Algo muy duro que no se puede doblar ni hundir.", "Un objeto pesado que es muy difícil de levantar.", "Algo suave que cede fácilmente a la presión al tocarlo."], 
    correct: 2 
  },
  { 
    paragraph: "Intentamos clavar un clavo en la pared de piedra, pero la punta del metal se dobló al chocar. La superficie mineral no se movió ni un milímetro porque es un material muy resistente. La piedra es tan dura que nada puede atravesarla fácilmente.", 
    question: "¿Qué significa que un objeto sea 'duro'?", 
    choices: ["Algo que es tierno y se puede cortar con los dedos.", "Algo resistente que no se deforma ni se corta fácil.", "Un objeto ligero que flota sobre el agua del mar."], 
    correct: 1 
  },
  { 
    paragraph: "En el desierto no ha llovido en más de seis meses y el suelo tiene grietas por la falta de agua. Las plantas tienen espinas en lugar de hojas para no perder la poca humedad que queda. El clima es tan seco que siempre tienes sed al caminar.", 
    question: "En este contexto, ¿qué significa 'seco'?", 
    choices: ["Un lugar donde llueve mucho y hay mucha humedad.", "Que le falta agua, humedad o líquido.", "Un ambiente donde hay mucha nieve y hielo."], 
    correct: 1 
  },
  { 
    paragraph: "Recogimos las manzanas del árbol cuando cambiaron de color verde a un rojo intenso. Ahora están dulces, suaves y tienen el mejor sabor para hacer un pastel. La fruta ya está madura y es el momento perfecto para comerla.", 
    question: "¿Qué significa que la fruta esté 'madura'?", 
    choices: ["Que todavía está verde y sabe muy mal al comerla.", "Que ha llegado a su punto completo de desarrollo.", "Que se ha podrido y ya no se puede consumir."], 
    correct: 1 
  },
  { 
    paragraph: "El bombero entró al edificio lleno de humo para rescatar al perrito que estaba atrapado. No le importó el peligro de las llamas y actuó con mucha decisión para salvar una vida. Fue un acto muy valiente que todos en el pueblo aplaudieron.", 
    question: "¿Cómo actúa una persona 'valiente'?", 
    choices: ["Con valor y determinación ante situaciones difíciles.","Con mucho miedo y escapando de cualquier problema.", "Con mucha timidez y sin querer hablar con nadie."], 
    correct: 0 
  }
]

  // NIVEL 2: Vocabulario Intermedio
2: [
  { 
    paragraph: "Después de revisar el mapa tres veces, Juan todavía no estaba seguro de qué camino tomar en la montaña. Aunque sus amigos estaban convencidos, él empezó a dudar de su propia respuesta inicial. Se detuvo un momento para pensar porque no quería cometer un error grave en la ruta.", 
    question: "Dentro de esta situación, ¿qué significa el acto de 'dudar'?", 
    choices: ["Estar totalmente convencido de una idea sin pensarlo.", "Tener inseguridad o falta de determinación sobre una decisión.", "Gritar con fuerza para pedir ayuda a las personas cercanas."], 
    correct: 1 
  },
  { 
    paragraph: "Aprender a tocar un instrumento como el piano no sucede de la noche a la mañana. Se necesita practicar las mismas notas durante meses y no frustrarse cuando cometes errores. Para lograr ser un gran músico, se necesita mucha paciencia y disciplina constante.", 
    question: "¿Qué cualidad describe la palabra 'paciencia'?", 
    choices: ["Capacidad de esperar y soportar algo sin alterarse.", "Hacer las cosas con mucha rapidez para terminar pronto.", "Sentir un enojo profundo cuando algo no sale bien al primer intento."], 
    correct: 0 
  },
  { 
    paragraph: "La señora Marta siempre recibe a los nuevos residentes con una sonrisa y una cesta de pan fresco. Ella se ofrece a cuidar las plantas de los demás y siempre habla con cortesía. Sus vecinos dicen que ella es muy amable y que hace del barrio un lugar mejor.", 
    choices: ["Alguien grosero que no respeta el espacio de los demás.", "Una persona que se mantiene distante y no habla con nadie.", "Alguien afectuoso, servicial y digno de ser amado por su trato."], 
    correct: 2 
  },
  { 
    paragraph: "El equipo de científicos pasó noches enteras en el laboratorio analizando los datos del experimento. Finalmente, tras combinar diferentes químicos, el líder logró resolver el problema que los había detenido. Ahora, el proyecto puede continuar hacia la siguiente fase de desarrollo.", 
    question: "¿Qué hicieron los científicos al 'resolver' el problema?", 
    choices: ["Ignorar la situación para que se solucione sola con el tiempo.", "Hallar la solución o el desenlace de una dificultad.", "Crear más dudas y complicaciones en el experimento."], 
    correct: 1 
  },
  { 
    paragraph: "Pedro prefiere decir la verdad aunque sepa que se meterá en problemas con sus padres. Él nunca toma cosas que no le pertenecen y siempre cumple con su palabra. Todos confían en él porque es una persona muy honesta en todos los aspectos.", 
    question: "¿Cuál es la característica principal de alguien 'honesto'?", 
    choices: ["Una persona que miente constantemente para obtener beneficios.", "Alguien que actúa con rectitud, justicia y dice la verdad.", "Una persona egoísta que solo piensa en su propio bienestar."], 
    correct: 1 
  },
  { 
    paragraph: "En esta región del país, el tiempo nunca es el mismo durante dos días seguidos. Por la mañana puede hacer mucho calor, pero por la tarde suele llover intensamente sin previo aviso. El clima es muy variable y siempre hay que llevar ropa para todo tipo de clima.", 
    question: "¿Qué significa que el clima sea 'variable'?", 
    choices: ["Que se mantiene constante y sin cambios por mucho tiempo.", "Que tiene una tendencia a cambiar con frecuencia y facilidad.", "Que la temperatura siempre es extremadamente calurosa."], 
    correct: 1 
  },
  { 
    paragraph: "El profesor de arte nos pidió que nos dividiéramos en grupos de cuatro personas. Explicó que para terminar el mural gigante a tiempo, necesitábamos colaborar compartiendo los pinceles y las pinturas. Si trabajamos unidos, el resultado será mucho mejor que si trabajamos solos.", 
    question: "¿Qué implica la acción de 'colaborar'?", 
    choices: ["Trabajar solo sin pedir ayuda a ninguna otra persona.", "Trabajar con otros en una tarea común para lograr un fin.", "Competir contra los demás para ver quién termina primero."], 
    correct: 1 
  },
  { 
    paragraph: "Cuando Lucía encontró una caja vieja de madera en el ático, no pudo evitar acercarse. Quería saber qué había guardado su abuelo allí durante tantos años y por qué estaba cerrada con llave. Sintió mucha curiosidad y pasó toda la tarde buscando la llave correcta.", 
    question: "¿Cómo se define la 'curiosidad'?", 
    choices: ["Sentir una indiferencia total por las cosas nuevas.", "El deseo o impulso de conocer o saber algo que se ignora.", "Tener miedo de descubrir secretos del pasado familiar."], 
    correct: 1 
  },
  { 
    paragraph: "Después de romper el jarrón favorito de su madre, Carlos se sintió muy mal por haberlo ocultado. Finalmente, decidió ir a la sala y admitir su culpa frente a toda la familia. Su madre agradeció que fuera sincero a pesar de que el objeto estuviera roto.", 
    question: "¿Qué significa 'admitir' algo en este caso?", 
    choices: ["Negar los hechos rotundamente para evitar un castigo.", "Ocultar las pruebas de un error para que nadie se entere.", "Aceptar algo como cierto o reconocer un error propio."], 
    correct: 2 
  },
  { 
    paragraph: "El sonido de las gotas de lluvia golpeando el techo de metal se escuchó durante toda la noche. No hubo ni un solo minuto de silencio porque el ruido era constante y rítmico. A pesar del volumen, el sonido nos ayudó a dormir profundamente.", 
    question: "¿Qué significa que algo sea 'constante'?", 
    choices: ["Que se interrumpe muchas veces durante un periodo corto.", "Algo que es silencioso y no produce ninguna vibración.", "Que no se interrumpe y persiste en el mismo estado."], 
    correct: 2 
  },
  { 
    paragraph: "Los voluntarios pasaron el fin de semana plantando árboles nuevos y limpiando el río de plásticos. Saben que es vital proteger el medio ambiente para que los animales tengan un lugar donde vivir. Su misión es evitar que la naturaleza sufra más daños por la contaminación.", 
    question: "¿Qué significa la palabra 'proteger'?", 
    choices: ["Resguardar a una persona, animal o cosa de un daño o peligro.", "Causar un daño intencional a la naturaleza o al entorno.", "Olvidar las responsabilidades que tenemos con el planeta."], 
    correct: 0 
  },
  { 
    paragraph: "A pesar de haber perdido el primer partido, el capitán mantuvo una sonrisa y animó a sus compañeros. Él cree que con esfuerzo y una mente abierta podrán ganar el siguiente encuentro. Su actitud fue muy positiva y logró contagiar de entusiasmo al resto del equipo.", 
    question: "¿Cómo es una actitud 'positiva'?", 
    choices: ["Optimista, favorable o que busca el lado bueno de las cosas.", "Negativa y enfocada únicamente en los errores cometidos.", "Triste y sin esperanzas de que las cosas puedan cambiar."], 
    correct: 0 
  },
  { 
    paragraph: "El estudiante no estaba conforme con su nota en el examen de ciencias y decidió estudiar más. Hizo resúmenes nuevos y le pidió tutoría extra a su profesor por las tardes. Con este esfuerzo, logró mejorar su puntaje y obtener una calificación excelente.", 
    question: "¿Qué significa 'mejorar' algo?", 
    choices: ["Hacer que algo pase a un estado peor del que estaba.", "Aumentar la calidad, el valor o el estado de una cosa.", "Mantener algo exactamente igual sin realizar ningún cambio."], 
    correct: 1 
  },
  { 
    paragraph: "A orillas del lago, el único sonido que se escuchaba era el suave movimiento del agua. No había tráfico, ni gente gritando, ni ruidos de construcción en kilómetros a la redonda. Es un lugar muy tranquilo, ideal para quienes buscan paz y silencio.", 
    question: "¿Cómo se describe un lugar 'tranquilo'?", 
    choices: ["Un ambiente ruidoso con mucha agitación y movimiento.", "Un espacio sosegado, en paz y sin agitación ni ruido.", "Un lugar peligroso donde hay que estar siempre alerta."], 
    correct: 1 
  },
  { 
    paragraph: "El director de la empresa subió al escenario para dar el anuncio del ganador. No quiso quitarle tiempo a la ceremonia, así que su explicación fue muy breve y directa. En menos de treinta segundos, ya había bajado del escenario para continuar con la fiesta.", 
    question: "¿Qué significa que algo sea 'breve'?", 
    choices: ["Que tiene una corta duración o una extensión reducida.", "Algo que es extremadamente largo y difícil de entender.", "Una explicación confusa que nadie pudo comprender."], 
    correct: 0 
  },
  { 
    paragraph: "El labrador esperaba en la puerta de la casa cada tarde a la misma hora para recibir a su dueño. No importaba si llovía o hacía calor, él nunca se movía de su puesto de guardia. El perro es muy fiel y demuestra su lealtad todos los días de su vida.", 
    question: "¿Cómo actúa alguien que es 'fiel'?", 
    choices: ["Es una persona traidora que cambia de bando fácilmente.", "Alguien leal que mantiene sus compromisos y afectos.", "Un ser agresivo que no confía en nadie a su alrededor."], 
    correct: 1 
  },
  { 
    paragraph: "Toda la familia estaba al borde de sus asientos mientras veían el final de la competencia de carreras. Los autos estaban tan cerca uno del otro que cualquier cosa podía pasar en la última curva. La película fue muy emocionante y nadie quería parpadear.", 
    question: "¿Qué describe a algo 'emocionante'?", 
    choices: ["Algo que causa una emoción fuerte, interés o entusiasmo.", "Una situación aburrida que provoca ganas de dormir.", "Un evento que ocurre con mucha lentitud y sin sorpresas."], 
    correct: 0 
  },
  { 
    paragraph: "Después de la mudanza, había cientos de papeles y facturas esparcidos por todo el escritorio. Julia decidió comprar carpetas de colores para clasificar cada documento por fecha y categoría. Es necesario organizar todo para no perder información importante del trabajo.", 
    question: "¿Qué significa la acción de 'organizar'?", 
    choices: ["Poner orden, clasificar o arreglar cosas bajo un sistema.", "Desordenar los objetos para que sean más difíciles de hallar.", "Perder los documentos a propósito para no tener que leerlos."], 
    correct: 0 
  },
  { 
    paragraph: "El nuevo entrenador no solo sabe de tácticas, sino que también sabe hablar con los jóvenes para motivarlos. Con sus discursos sobre el esfuerzo y la superación, logra inspirar a los atletas antes de cada competencia. Gracias a él, el equipo tiene más ganas de triunfar que nunca.", 
    question: "¿Qué hace un líder que logra 'inspirar'?", 
    choices: ["Desanimar a las personas diciéndoles que no tienen talento.", "Infundir entusiasmo, ideas o sentimientos positivos.", "Ignorar al grupo y dejar que cada quien haga lo que quiera."], 
    correct: 1 
  },
  { 
    paragraph: "Compramos tres pizzas grandes y varias ensaladas para la fiesta de cumpleaños. Aunque vinieron más invitados de los que esperábamos, la comida fue suficiente para que todos quedaran satisfechos. Nadie se quedó con hambre y hasta sobró un poco de postre.", 
    question: "¿Cuándo algo es 'suficiente'?", 
    choices: ["Cuando hay una cantidad escasa que no alcanza para todos.", "Cuando hay la cantidad necesaria o apta para lo que se requiere.", "Cuando hay tanta cantidad que es imposible guardarla toda."], 
    correct: 1 
  },
  { 
    paragraph: "El niño tomó unas cajas de cartón vacías y unos hilos para construir una ciudad completa para sus juguetes. Inventó nombres para las calles y diseñó edificios con formas que nadie había visto antes. Es muy creativo y siempre encuentra formas nuevas de divertirse.", 
    question: "¿Cómo es una persona 'creativa'?", 
    choices: ["Alguien que repite siempre lo mismo y nunca tiene ideas.", "Una persona que tiene capacidad o talento para crear cosas.", "Alguien que trabaja con mucha lentitud y no termina nada."], 
    correct: 1 
  },
  { 
    paragraph: "Para preparar este plato, solo necesitas mezclar arroz con un poco de sal y agua. No requiere técnicas complicadas de cocina ni ingredientes difíciles de encontrar en el mercado. Es una tarea simple que cualquiera puede realizar en pocos minutos.", 
    question: "¿Qué define a algo 'simple'?", 
    choices: ["Algo que es extremadamente complejo y difícil de hacer.", "Un objeto o tarea sencilla que no tiene complicaciones.", "Una superficie dura que no se puede rayar ni romper."], 
    correct: 1 
  },
  { 
    paragraph: "El nuevo museo del centro tiene paredes de cristal y sistemas de iluminación inteligentes que se activan con el movimiento. Su diseño no se parece en nada a las iglesias antiguas que lo rodean. Es un edificio moderno que representa la arquitectura del siglo veintiuno.", 
    question: "¿A qué se refiere la palabra 'moderno'?", 
    choices: ["A algo que pertenece a la época actual o reciente.", "A un objeto que tiene muchos siglos de antigüedad.", "A una estructura que está rota y ya no tiene ninguna utilidad."], 
    correct: 0 
  },
  { 
    paragraph: "En cuanto el jefe terminó de hacer la pregunta, la secretaria levantó la mano para responder. No hubo pausas ni dudas; ella sabía exactamente qué decir en ese mismo momento. Su respuesta fue inmediata y ayudó a resolver la duda del grupo.", 
    question: "¿Cómo es una reacción 'inmediata'?", 
    choices: ["Algo que tarda mucho tiempo en suceder o manifestarse.", "Que sucede enseguida, sin tardanza o en el mismo instante.", "Una respuesta lenta que llega cuando ya no es necesaria."], 
    correct: 1 
  },
  { 
    paragraph: "Desde la base del valle, apenas podíamos ver la cima porque las nubes la cubrían por completo. Los escaladores necesitaron cuerdas y mucho equipo para subir hasta el punto más alto de la roca. La montaña es muy alta y el aire se siente frío en la cumbre.", 
    question: "¿Qué significa que algo sea 'alto'?", 
    choices: ["Que tiene una estatura o elevación mayor a lo común.", "Un terreno que es plano y no tiene ninguna elevación.", "Algo que es muy bajo y se puede saltar sin esfuerzo."], 
    correct: 0 
  },
  { 
    paragraph: "Bebimos agua directamente de un manantial que nace en lo más profundo del bosque. No tenía ningún olor, ni color, ni residuos de contaminación de la ciudad. El agua está muy pura y se siente fresca al beberla bajo el sol.", 
    question: "¿Qué significa que una sustancia sea 'pura'?", 
    choices: ["Que está llena de mezclas, químicos y suciedad.", "Que está limpia, libre de mezclas extrañas o contaminantes.", "Que tiene un sabor muy salado y no se puede beber."], 
    correct: 1 
  },
  { 
    paragraph: "Para construir la cancha de fútbol, los trabajadores tuvieron que nivelar la tierra con una máquina gigante. Ahora no hay baches, ni colinas, ni piedras que estorben a los jugadores al correr. El terreno es muy plano y perfecto para el deporte.", 
    question: "¿Cómo se describe un terreno 'plano'?", 
    choices: ["Una superficie llena de piedras, rugosidades y subidas.", "Un espacio liso que no presenta desniveles ni relieves.", "Un camino inclinado que sube hacia la parte alta del cerro."], 
    correct: 1 
  },
  { 
    paragraph: "A diferencia de las maletas pesadas que llevaban mis padres, mi mochila de tela casi no se sentía en mi espalda. Solo llevaba una camiseta y una botella de agua vacía. Es un objeto muy ligero que puedo cargar durante horas sin cansarme.", 
    question: "¿Qué significa que algo sea 'ligero'?", 
    choices: ["Que pesa poco y es fácil de transportar o mover.", "Algo extremadamente pesado que requiere mucha fuerza.", "Un material muy duro que se usa para construir puentes."], 
    correct: 0 
  },
  { 
    paragraph: "Cuando el tenor empezó a cantar en el teatro, su voz llenó cada rincón de la sala sin necesidad de micrófonos. Los cristales de las lámparas vibraban con la intensidad de sus notas más altas. La voz del cantante es potente y deja a todos impresionados.", 
    question: "¿Qué describe a una voz 'potente'?", 
    choices: ["Un sonido débil que apenas se puede escuchar de cerca.", "Que tiene mucha fuerza, intensidad, poder o energía.", "Una voz suave que se usa para arrullar a los bebés."], 
    correct: 1 
  },
  { 
    paragraph: "Nadie pensó que un mago de verdad aparecería en medio de la plaza un martes por la tarde. Hizo desaparecer un elefante frente a cientos de personas y luego lo hizo aparecer en el techo de un edificio. El viaje y el espectáculo fueron increíbles.", 
    question: "¿Qué significa que algo sea 'increíble'?", 
    choices: ["Algo totalmente normal que sucede todos los días.", "Que es difícil de creer o que es extraordinario y asombroso.", "Un evento muy malo que nadie quiere volver a repetir."], 
    correct: 1 
  }
]
  // NIVEL 3: Vocabulario Avanzado
  3: [
  { 
    paragraph: "El abogado defendió su caso ante el jurado sin cometer un solo error de dicción. Sus palabras fluían con una elegancia natural que mantenía a todos en la sala atentos a su discurso. Habló con tanta elocuencia que logró convencer a los jueces incluso antes de presentar las pruebas físicas.", 
    question: "Basado en el éxito del abogado, ¿cómo se define la 'elocuencia'?", 
    choices: ["Un estado de confusión donde el mensaje no es claro.", "La facultad de hablar con fluidez, elegancia y persuasión.", "Mantenerse en silencio absoluto durante una conversación."], 
    correct: 1 
  },
  { 
    paragraph: "A pesar de haber fallado en su primer intento de lanzar el cohete, la ingeniera regresó al taller cada mañana durante un año. No permitió que las críticas ni el cansancio la detuvieran en su objetivo de llegar al espacio. Su perseverancia fue clave para que finalmente el proyecto fuera un éxito rotundo.", 
    question: "¿Qué cualidad demuestra alguien que tiene 'perseverancia'?", 
    choices: ["La tendencia a rendirse cuando surge el primer obstáculo.", "Sentir una pereza profunda que impide realizar cualquier tarea.", "La constancia y firmeza en la ejecución de un propósito u objetivo."], 
    correct: 2 
  },
  { 
    paragraph: "Antes de comprar la empresa, los inversores revisaron cada contrato, factura y deuda acumulada durante la última década. No dejaron ninguna cifra sin revisar, buscando entender exactamente dónde se perdía el dinero. Hicieron un análisis detallado que reveló problemas que nadie más había notado.", 
    question: "En este contexto de negocios, ¿qué es un 'análisis'?", 
    choices: ["Un vistazo rápido a la portada de un documento.", "Un examen minucioso y pormenorizado de una cosa o situación.", "Un resumen muy breve que ignora los detalles complicados."], 
    correct: 1 
  },
  { 
    paragraph: "Durante la reunión de emergencia, el director pidió que solo se mencionaran los problemas que afectaban directamente la seguridad de los trabajadores. Ignoró las quejas sobre el color de las paredes porque consideraba que no era el momento para temas menores. La situación actual es demasiado relevante como para perder tiempo en detalles triviales.", 
    question: "¿Qué significa que un tema sea 'relevante'?", 
    choices: ["Que es algo importante, destacado o muy significativo.", "Algo insignificante que no tiene ninguna importancia real.", "Un asunto aburrido que no genera interés en nadie."], 
    correct: 0 
  },
  { 
    paragraph: "El aroma de la flor en el jardín no era fuerte, sino que se mezclaba suavemente con el olor a tierra mojada después de la lluvia. Solo podías notarlo si te acercabas mucho y respirabas con calma. Es un cambio tan sutil que la mayoría de las personas pasan de largo sin percibirlo.", 
    question: "¿Cómo se describe algo que es 'sutil'?", 
    choices: ["Algo obvio y escandaloso que todos notan enseguida.", "Un fenómeno delicado, tenue o difícil de percibir.", "Un olor o sonido fuerte que molesta a los sentidos."], 
    correct: 1 
  },
  { 
    paragraph: "A lo largo de su carrera, el bombero nunca llegó tarde y siempre fue el primero en entrar a las zonas de peligro para rescatar a otros. Sus compañeros más jóvenes lo miran con respeto y tratan de copiar su ética de trabajo. Su conducta fue ejemplar y le valió la medalla de honor de la ciudad.", 
    question: "¿Qué significa que un comportamiento sea 'ejemplar'?", 
    choices: ["Que es digno de ser imitado por su buena calidad o virtud.", "Una conducta mala que debe ser castigada por las autoridades.", "Un comportamiento común que cualquiera realiza todos los días."], 
    correct: 0 
  },
  { 
    paragraph: "El profesor explicó la teoría de la evolución uniendo los datos de los fósiles con los descubrimientos del ADN moderno. Cada parte de su explicación se conectaba perfectamente con la anterior sin dejar huecos en la lógica. El argumento es coherente y por eso la comunidad científica lo acepta sin dudar.", 
    question: "¿Qué hace que un argumento sea 'coherente'?", 
    choices: ["Que es totalmente ilógico y las ideas se contradicen entre sí.", "Que tiene una conexión lógica y armonía entre sus partes.", "Que es un texto muy largo y difícil de leer hasta el final."], 
    correct: 1 
  },
  { 
    paragraph: "Después del accidente, los médicos aplicaron compresas de hielo y medicamentos suaves en la zona inflamada. El objetivo no era curar la herida instantáneamente, sino reducir la hinchazón y el ardor para que el paciente pudiera descansar. Logró mitigar el dolor lo suficiente como para permitir que el niño se quedara dormido.", 
    question: "¿Qué significa la acción de 'mitigar'?", 
    choices: ["Aumentar la intensidad de algo malo para que sea peor.", "Ignorar por completo el problema hasta que desaparezca solo.", "Moderar, aplacar o suavizar la dureza de algo negativo."], 
    correct: 2 
  },
  { 
    paragraph: "Sin pensarlo dos veces, la exploradora saltó sobre el barranco para rescatar la mochila que contenía los suministros médicos. Sus compañeros quedaron asombrados por su falta de miedo ante la altura y el peligro. Es una persona audaz que siempre toma riesgos cuando es necesario.", 
    question: "¿Cómo es una persona 'audaz'?", 
    choices: ["Alguien valiente, osado y que se atreve a realizar acciones riesgosas.", "Una persona miedosa que siempre busca la seguridad de su casa.", "Alguien lento que piensa demasiado antes de moverse."], 
    correct: 0 
  },
  { 
    paragraph: "Al ver las fotos viejas de sus veranos en el campo, el anciano sonrió con tristeza mientras recordaba el olor del pasto y las voces de sus amigos que ya no estaban. Deseaba poder volver atrás en el tiempo aunque sabía que era imposible. Sintió una gran nostalgia por aquellos días de su juventud.", 
    question: "¿Cómo se define la 'nostalgia'?", 
    choices: ["Una alegría explosiva por algo que va a suceder mañana.", "El miedo a perder objetos materiales en el futuro.", "Pena o tristeza melancólica por la ausencia de algo o alguien."], 
    correct: 2 
  },
  { 
    paragraph: "La diseñadora tomó materiales reciclados como tapas de botellas y cartón viejo para crear un vestido que parecía de alta costura. Nadie en la competencia había imaginado que se pudiera usar basura para hacer algo tan hermoso y original. Su creatividad es admirable y la llevó a ganar el primer premio.", 
    question: "¿A qué se refiere el término 'creatividad'?", 
    choices: ["A la capacidad de crear, inventar o generar ideas nuevas.", "A la falta total de ideas y a la imitación de los demás.", "Al acto de copiar exactamente lo que otros ya han hecho."], 
    correct: 0 
  },
  { 
    paragraph: "A pesar de que uno de los competidores era su propio hermano, el árbitro marcó las faltas de manera justa para ambos equipos. No permitió que sus sentimientos familiares influyeran en su decisión final sobre quién ganó el partido. Su juicio fue imparcial y respetado por todos en el estadio.", 
    question: "¿Cómo es un juicio 'imparcial'?", 
    choices: ["Un juicio basado en favoritismos o prejuicios personales.", "Que se juzga con objetividad, justicia y sin favoritismos.", "Un veredicto erróneo que no toma en cuenta ninguna prueba."], 
    correct: 1 
  },
  { 
    paragraph: "El activista habló ante la asamblea usando datos reales y ejemplos conmovedores sobre el cambio climático. Al final de su charla, muchas personas que antes no creían en el problema decidieron empezar a reciclar. El discurso fue persuasivo y logró cambiar la mentalidad de la audiencia.", 
    question: "¿Qué cualidad tiene algo 'persuasivo'?", 
    choices: ["Que es ineficaz y nadie presta atención a lo que se dice.", "Que tiene la capacidad o fuerza para convencer a alguien.", "Algo confuso que genera más dudas que respuestas."], 
    correct: 1 
  },
  { 
    paragraph: "Cuando el músico escuchó el ritmo de los tambores en la calle, tomó su flauta y empezó a tocar una melodía que nunca había practicado. No hubo ensayos ni partituras; la música salió directamente de su corazón en ese momento. Su reacción fue espontánea y encantó a los transeúntes.", 
    question: "¿Qué significa que algo sea 'espontáneo'?", 
    choices: ["Algo que resulta natural y se produce sin preparación previa.", "Un evento cuidadosamente planeado durante muchas semanas.", "Una acción forzada que alguien es obligado a realizar."], 
    correct: 0 
  },
  { 
    paragraph: "Tras perder su casa en el terremoto, la familia trabajó unida para construir un refugio temporal y comenzar un pequeño negocio de comida. En lugar de rendirse ante la tragedia, encontraron la fuerza para sonreír y seguir adelante. Demostraron gran resiliencia ante una de las pruebas más duras de su vida.", 
    question: "¿Qué es la 'resiliencia'?", 
    choices: ["La fragilidad de una persona que se rompe ante el primer problema.", "La capacidad de adaptarse y recuperarse de situaciones críticas.", "La ignorancia de no saber que se está en una situación difícil."], 
    correct: 1 
  },
  { 
    paragraph: "El motor del avión tiene miles de piezas pequeñas que deben encajar con una precisión de milímetros. Si una sola conexión falla, todo el sistema deja de funcionar correctamente. El problema de reparación era complejo y requería a los mejores mecánicos del país.", 
    question: "¿Cómo se describe un problema 'complejo'?", 
    choices: ["Algo simple que cualquiera puede arreglar con una herramienta.", "Una situación fácil que no requiere pensar demasiado.", "Algo complicado, difícil y compuesto de varios elementos."], 
    correct: 2 
  },
  { 
    paragraph: "Antes de lanzar el producto al mercado, la inspectora revisó cada etiqueta para asegurarse de que no hubiera errores de ortografía. Miró el color, la textura y el empaque con una lupa durante horas. Su enfoque era meticuloso y no permitía que ningún detalle se le escapara.", 
    question: "¿Cómo trabaja alguien que es 'meticuloso'?", 
    choices: ["De forma descuidada y sin prestar atención a lo que hace.", "Con excesivo cuidado, atención y deteniéndose en los detalles.", "De manera muy rápida sin importar si el resultado es correcto."], 
    correct: 1 
  },
  { 
    paragraph: "La empresa de tecnología creó una aplicación que permite a las personas traducir idiomas usando solo el movimiento de sus ojos. Nunca se había visto nada igual en la industria y cambió la forma en que nos comunicamos. La estrategia era innovadora y dejó atrás a toda la competencia.", 
    question: "¿Qué define a una idea 'innovadora'?", 
    choices: ["Que introduce novedades o cambios que no existían antes.", "Una técnica anticuada que se usaba hace cincuenta años.", "Algo común que todas las empresas ya están haciendo."], 
    correct: 0 
  },
  { 
    paragraph: "Cuando los dos países tuvieron el desacuerdo por la frontera, la embajadora evitó usar palabras agresivas que pudieran causar una guerra. En su lugar, buscó puntos en común y propuso acuerdos que beneficiaran a ambos lados. Mostró una actitud diplomática que salvó miles de vidas.", 
    question: "¿Cómo es una actitud 'diplomática'?", 
    choices: ["Ofensiva y diseñada para causar peleas con los demás.", "Grosera e irrespetuosa con las tradiciones de otros.", "Interesada, sensible y cuidadosa en el manejo de relaciones."], 
    correct: 2 
  },
  { 
    paragraph: "El escritor eliminó todos los adjetivos innecesarios y las explicaciones largas de su último capítulo. Quería que el lector entendiera la emoción del personaje sin tener que leer cien páginas. Su estilo era conciso, logrando decir mucho con muy pocas palabras.", 
    question: "¿Qué significa ser 'conciso'?", 
    choices: ["Ser breve y preciso en el modo de expresar los conceptos.", "Escribir textos extensos que duran muchas horas de lectura.", "Un modo confuso de hablar donde no se entiende el punto."], 
    correct: 0 
  },
  { 
    paragraph: "Los jueces de la competencia de ciencias no aceptaron simples opiniones; exigieron pruebas estadísticas y demostraciones en vivo. Cada estudiante tuvo que defender su teoría frente a un panel de expertos que hacían preguntas muy difíciles. El debate fue riguroso y solo el mejor proyecto ganó.", 
    question: "¿Cómo es un proceso 'riguroso'?", 
    choices: ["Un análisis superficial que no entra en el fondo del tema.", "Algo extremadamente exigente, severo, preciso y minucioso.", "Un examen ligero que se termina sin mucho esfuerzo."], 
    correct: 1 
  },
  { 
    paragraph: "En lugar de decirle a su hermano que su pintura era fea, Clara le sugirió usar colores más brillantes para que el paisaje se viera más real. Gracias a ese consejo, él pudo mejorar su técnica y sentirse orgulloso de su trabajo. Su crítica fue constructiva y ayudó al crecimiento del artista.", 
    question: "¿Qué es una crítica 'constructiva'?", 
    choices: ["Un comentario destructivo que busca hacer sentir mal al otro.", "Una opinión inútil que no aporta nada nuevo a la situación.", "Que ayuda a mejorar, edificar o dar una solución positiva."], 
    correct: 2 
  },
  { 
    paragraph: "El estreno de la película sobre la vida del político causó que muchas personas protestaran en la calle, mientras que otras la defendían como una obra maestra. Nadie podía ponerse de acuerdo sobre si la historia era verdadera o una mentira. El tema era tan controvertido que salió en todas las noticias.", 
    question: "¿Qué significa que algo sea 'controvertido'?", 
    choices: ["Que genera discusión, debate o opiniones contrapuestas.", "Un asunto aceptado por todos que no causa ninguna duda.", "Un tema sencillo que no tiene ninguna importancia social."], 
    correct: 0 
  },
  { 
    paragraph: "Luis nunca fue a la universidad, pero aprendió a programar aplicaciones complejas leyendo manuales en internet por las noches. Él mismo se ponía ejercicios y corregía sus propios errores sin ayuda de un profesor. Su aprendizaje fue autodidacta y hoy trabaja para una gran empresa de software.", 
    question: "¿Qué es una persona 'autodidacta'?", 
    choices: ["Alguien que siempre necesita ser guiado por otros para aprender.", "Una persona que se instruye o aprende algo por sí misma.", "Alguien que cree que es imposible aprender cosas nuevas."], 
    correct: 1 
  },
  { 
    paragraph: "El joven pianista tocó la pieza de Mozart con una rapidez y emoción que el público nunca había presenciado en ese teatro. Al terminar, la gente se puso de pie y aplaudió durante diez minutos seguidos. El resultado fue extraordinario y marcó el inicio de una leyenda musical.", 
    question: "¿Qué define a algo como 'extraordinario'?", 
    choices: ["Algo muy común que se ve en todas las esquinas del mundo.", "Que es fuera de lo común, excepcional o muy superior.", "Un evento normal que no destaca por ninguna cualidad."], 
    correct: 1 
  },
  { 
    paragraph: "Sin leer el informe completo, la jefa sintió que algo no estaba bien con el contrato que le entregaron. Decidió no firmar y, días después, descubrieron que el documento tenía una estafa oculta. Su intuición fue acertada y salvó a la compañía de perder millones.", 
    question: "¿Qué es la 'intuición'?", 
    choices: ["La capacidad de entender algo instantáneamente sin razonar.", "Un proceso de razonamiento muy lento que toma varios años.", "Un error mental que siempre lleva a tomar malas decisiones."], 
    correct: 0 
  },
  { 
    paragraph: "Para limpiar la fábrica, el equipo siguió un manual que indicaba paso por paso desde el techo hasta el suelo. No empezaban una zona nueva hasta que la anterior estuviera perfecta, siguiendo un orden lógico y preciso. El enfoque era sistemático y garantizó una limpieza total.", 
    question: "¿Cómo es un trabajo 'sistemático'?", 
    choices: ["Un proceso caótico donde no se sigue ningún orden.", "Algo que se hace muy rápido sin importar el método.", "Que sigue o se ajusta a un sistema o método organizado."], 
    correct: 2 
  },
  { 
    paragraph: "La policía científica buscó huellas dactilares incluso debajo de los muebles y dentro de los conductos de aire. Revisaron cada rincón de la habitación durante doce horas seguidas para no perder ni una sola prueba. Su análisis fue exhaustivo y finalmente encontraron al culpable.", 
    question: "¿Qué significa que un análisis sea 'exhaustivo'?", 
    choices: ["Algo superficial que solo revisa lo que está a simple vista.", "Un examen completo, total y que agota todos los detalles.", "Un estudio incompleto que se detiene a la mitad del camino."], 
    correct: 1 
  },
  { 
    paragraph: "En lugar de discutir sobre quién tenía la culpa de que el coche no encendiera, María simplemente llamó a un taxi para llegar a tiempo a la reunión. Ella sabía que resolver el transporte era más importante que ganar una pelea en ese momento. Su actitud era pragmática y enfocada en lo que realmente funcionaba.", 
    question: "¿Cómo actúa alguien que es 'pragmático'?", 
    choices: ["Alguien idealista que prefiere soñar en lugar de actuar.", "Persona que prefiere lo práctico y se enfoca en resultados.", "Alguien irreal que no entiende cómo funciona el mundo."], 
    correct: 1 
  },
  { 
    paragraph: "Para diseñar el nuevo hospital, tuvieron que reunirse médicos, arquitectos, ingenieros y psicólogos. Cada uno aportó sus conocimientos para que el edificio fuera seguro, eficiente y cómodo para los enfermos. El proyecto era interdisciplinario y combinaba lo mejor de cada ciencia.", 
    question: "¿Qué significa que algo sea 'interdisciplinario'?", 
    choices: ["Que trata sobre un solo tema y no acepta otras opiniones.", "Que se realiza con la cooperación de varias disciplinas.", "Un estudio muy simple que no requiere mucho conocimiento."], 
    correct: 1 
  }
]
  // NIVEL 4: Vocabulario Académico y Formal
  4: [
    { paragraph: "Fue una decisión prudente.", question: "prudente", choices: ["Moderación y cautela", "Descuidado", "Prisa"], correct: 0 },
    { paragraph: "El análisis fue eficiente.", question: "eficiente", choices: ["Desperdicia recursos", "Logra el fin con el mínimo recurso", "Lento"], correct: 1 },
    { paragraph: "Su talento es intrínseco.", question: "intrínseco", choices: ["Externo", "Esencial o interno", "Falso"], correct: 1 },
    { paragraph: "El daño es irreversible.", question: "irreversible", choices: ["Que se puede cambiar", "Que no tiene vuelta atrás", "Temporal"], correct: 1 },
    { paragraph: "Es una verdad absoluta.", question: "absoluta", choices: ["Parcial", "Entera y sin restricciones", "Dudosa"], correct: 1 },
    { paragraph: "El proceso es sistemático.", question: "sistemático", choices: ["Aleatorio", "Que sigue un orden", "Rápido"], correct: 1 },
    { paragraph: "Su actitud es altruista.", question: "altruista", choices: ["Egoísta", "Busca el bien ajeno", "Interesada"], correct: 1 },
    { paragraph: "La evidencia es tangible.", question: "tangible", choices: ["Imaginaria", "Que se puede tocar o percibir claramente", "Falsa"], correct: 1 },
    { paragraph: "El acuerdo es vinculante.", question: "vinculante", choices: ["Opcional", "Que obliga a las partes", "Breve"], correct: 1 },
    { paragraph: "Su estilo es sobrio.", question: "sobrio", choices: ["Exagerado", "Sencillo y sin adornos", "Caro"], correct: 1 },
    { paragraph: "La propuesta es viable.", question: "viable", choices: ["Imposible", "Que puede llevarse a cabo", "Difícil"], correct: 1 },
    { paragraph: "Es un tema recurrente.", question: "recurrente", choices: ["Único", "Que vuelve a ocurrir", "Nuevo"], correct: 1 },
    { paragraph: "El clima es inhóspito.", question: "inhóspito", choices: ["Acogedor", "Lugar incómodo o poco seguro", "Bello"], correct: 1 },
    { paragraph: "Su respuesta fue ambigua.", question: "ambigua", choices: ["Clara", "Que puede entenderse de varias formas", "Directa"], correct: 1 },
    { paragraph: "Es un derecho inalienable.", question: "inalienable", choices: ["Renunciable", "Que no se puede quitar", "Temporal"], correct: 1 },
    { paragraph: "El éxito fue efímero.", question: "efímero", choices: ["Duradero", "Pasajero o de corta duración", "Total"], correct: 1 },
    { paragraph: "Su discurso fue conciso.", question: "conciso", choices: ["Largo", "Breve y preciso", "Vago"], correct: 1 },
    { paragraph: "El plan es estratégico.", question: "estratégico", choices: ["Improvisado", "Habilidad para dirigir un asunto", "Lento"], correct: 1 },
    { paragraph: "Es una medida arbitraria.", question: "arbitraria", choices: ["Justa", "Basada en el capricho y no en la ley", "Lógica"], correct: 1 },
    { paragraph: "Su lealtad es inquebrantable.", question: "inquebrantable", choices: ["Débil", "Que no se puede doblegar", "Falsa"], correct: 1 },
    { paragraph: "El estudio es exhaustivo.", question: "exhaustivo", choices: ["Superficial", "Que agota todos los puntos, completo", "Rápido"], correct: 1 },
    { paragraph: "Es un factor determinante.", question: "determinante", choices: ["Secundario", "Que decide o fija algo", "Dudoso"], correct: 1 },
    { paragraph: "La tecnología es ubicua.", question: "ubicua", choices: ["Rara", "Que está en todas partes", "Nueva"], correct: 1 },
    { paragraph: "Su mente es analítica.", question: "analítica", choices: ["Desorganizada", "Que descompone un todo en sus partes", "Simple"], correct: 1 },
    { paragraph: "El arte es subjetivo.", question: "subjetivo", choices: ["Objetivo", "Basado en sentimientos personales", "Realista"], correct: 1 },
    { paragraph: "Es un líder carismático.", question: "carismático", choices: ["Aburrido", "Que tiene capacidad de atraer o fascinar", "Serio"], correct: 1 },
    { paragraph: "La ley es imperativa.", question: "imperativa", choices: ["Opcional", "Que manda o exige", "Vieja"], correct: 1 },
    { paragraph: "Su éxito es legítimo.", question: "legítimo", choices: ["Ilegal", "Conforme a las leyes o la razón", "Falso"], correct: 1 },
    { paragraph: "El cambio es inminente.", question: "inminente", choices: ["Lejano", "Que está a punto de suceder", "Dudoso"], correct: 1 },
    { paragraph: "La reunión fue fructífera.", question: "fructífera", choices: ["Inútil", "Que produce frutos o resultados", "Larga"], correct: 1 }
  ],

  // NIVEL 5: Vocabulario de Alto Nivel (SAT/GRE)
  5: [
    { paragraph: "La cena estuvo marcada por un badinaje ligero.", question: "badinaje", choices: ["Discusión violenta", "Broma o juego de palabras festivo", "Silencio"], correct: 1 },
    { paragraph: "Sus halagos resultaron melifluos y excesivos.", question: "melifluo", choices: ["Dulce en exceso, a veces falso", "Rudo", "Difícil"], correct: 0 },
    { paragraph: "El columnista suele invectivar contra la corrupción.", question: "invectivar", choices: ["Apoyar", "Censurar o hablar con dureza", "Ignorar"], correct: 1 },
    { paragraph: "La sala estaba llena de objetos kitsch.", question: "kitsch", choices: ["Elegante", "Estética pretenciosa o de mal gusto", "Simple"], correct: 1 },
    { paragraph: "La fauna del litoral se ve afectada.", question: "litoral", choices: ["Montaña", "Costa de un mar", "Bosque"], correct: 1 },
    { paragraph: "Su discurso fue tan sensiblero que pareció falso.", question: "sensiblero", choices: ["Sentimentalismo excesivo", "Racional", "Aburrido"], correct: 0 },
    { paragraph: "La pátina verde indicaba su antigüedad.", question: "pátina", choices: ["Grieta", "Capa fina en objetos antiguos", "Brillo nuevo"], correct: 1 },
    { paragraph: "La familia cayó en la penuria.", question: "penuria", choices: ["Riqueza", "Escasez extrema de lo necesario", "Felicidad"], correct: 1 },
    { paragraph: "Fue una victoria pírrica.", question: "pírrica", choices: ["Triunfo fácil", "Triunfo con daño mayor al beneficio", "Derrota"], correct: 1 },
    { paragraph: "Su carácter saturnino lo hacía parecer melancólico.", question: "saturnino", choices: ["Alegre", "Persona de carácter sombrío", "Hablador"], correct: 1 },
    { paragraph: "Avanzaban en filas serreadas.", question: "serreadas", choices: ["Dispersas", "Puestos muy juntos", "Sin uniforme"], correct: 1 },
    { paragraph: "La cueva estaba sumida en una oscuridad estigia.", question: "estigia", choices: ["Iluminado", "Oscuridad profunda o infernal", "Cálido"], correct: 1 },
    { paragraph: "Fue castigado por su turpitud moral.", question: "turpitud", choices: ["Virtud", "Cualidad de infame o bajeza", "Habilidad"], correct: 1 },
    { paragraph: "Su rostro afligido mostraba tristeza.", question: "afligido", choices: ["Lleno de pesar", "Emocionado", "Cansado"], correct: 0 },
    { paragraph: "Aceptó el desafío con alacridad.", question: "alacridad", choices: ["Pereza", "Prontitud y ánimo alegre", "Miedo"], correct: 1 },
    { paragraph: "Ese comportamiento es un anatema para la sociedad.", question: "anatema", choices: ["Bendición", "Algo maldito o rechazado", "Tradición"], correct: 1 },
    { paragraph: "Necesitaba bruñir su reputación.", question: "bruñir", choices: ["Dañar", "Pulir o dar brillo", "Ocultar"], correct: 1 },
    { paragraph: "Utilizó chicanerías legales para ganar el juicio.", question: "chicanería", choices: ["Honestidad", "Artimañas o engaños", "Rapidez"], correct: 1 },
    { paragraph: "Esa ley cayó en desuetudo hace décadas.", question: "desuetudo", choices: ["Uso constante", "Desuso de una norma o costumbre", "Vigor"], correct: 1 },
    { paragraph: "El calor extremo lograba enervar a los viajeros.", question: "enervar", choices: ["Fortalecer", "Debilitar o quitar las fuerzas", "Enfriar"], correct: 1 },
    { paragraph: "Es muy meticuloso y fastidioso con el orden.", question: "fastidioso", choices: ["Descuidado", "Muy exigente o difícil de complacer", "Alegre"], correct: 1 },
    { paragraph: "Su hibris lo llevó a ignorar los consejos del grupo.", question: "hibris", choices: ["Humildad", "Orgullo o soberbia excesiva", "Sabiduría"], correct: 1 },
    { paragraph: "El proyecto está en un estado incoado.", question: "incoado", choices: ["Terminado", "Recién empezado, incompleto", "Perfecto"], correct: 1 },
    { paragraph: "Su carácter locuaz lo hacía el centro de la fiesta.", question: "locuaz", choices: ["Callado", "Que habla mucho o demasiado", "Triste"], correct: 1 },
    { paragraph: "Su testimonio resultó ser mendaz.", question: "mendaz", choices: ["Sincero", "Mentiroso o falso", "Útil"], correct: 1 },
    { paragraph: "Fue condenado por sus actos nefarios.", question: "nefario", choices: ["Heroicos", "Sumamente malvados o infames", "Justos"], correct: 1 },
    { paragraph: "Se mostró obsequioso solo para obtener el ascenso.", question: "obsequioso", choices: ["Grosero", "Excesivamente atento o servil", "Indiferente"], correct: 1 },
    { paragraph: "Su parsimonia le impidió gastar en lo necesario.", question: "parsimonia", choices: ["Generosidad", "Tacañería o lentitud extrema", "Lujo"], correct: 1 },
    { paragraph: "El cliente estaba querulante por el mal servicio.", question: "querulante", choices: ["Satisfecho", "Que se queja constantemente", "Silencioso"], correct: 1 },
    { paragraph: "Se mostró reticente a dar detalles del plan.", question: "reticente", choices: ["Entusiasta", "Reservado o que calla algo", "Sincero"], correct: 1 }
  ]
};


