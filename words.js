// words.js - El Almacén de Vocabulario (30 words per level)
const practiceQuestions = {
  // NIVEL 1: Vocabulario Básico y Cotidiano
1: [
  { 
    word: "feliz",
    paragraph: "Después de ganar el torneo final, todos los jugadores del equipo salieron a celebrar con sus familias. El entrenador gritaba de alegría y los niños no podían dejar de sonreír mientras levantaban el trofeo. Se sentían muy felices porque todo su trabajo duro había valido la pena.", 
    question: "Basado en la reacción del equipo, ¿qué significa estar 'feliz'?", 
    choices: ["Sentir una profunda tristeza por haber terminado la competencia.", "Experimentar un estado de gran alegría y satisfacción.", "Tener mucho cansancio físico y necesidad de dormir."], 
    correct: 1 
  },
  { 
    word: "antigua",
    paragraph: "La casa de mi abuela es considerada un tesoro en el pueblo porque fue construida hace más de cien años. Todavía conserva las ventanas de madera originales y el estilo de la época en que se fundó la ciudad. Es una propiedad antigua que cuenta la historia de nuestra familia.", 
    question: "¿A qué se refiere el texto cuando describe la casa como 'antigua'?", 
    choices: ["A una construcción moderna que se terminó la semana pasada.", "A algo que existe desde hace mucho tiempo o de una época lejana.", "A un edificio que ha sido pintado de color verde brillante."], 
    correct: 1 
  },
  { 
    word: "grande", 
    paragraph: "El elefante caminaba lentamente por la selva buscando agua para su manada. Debido a su cuerpo gigante, los arbustos se doblaban a su paso y su sombra cubría a los animales más chicos. Es un animal tan grande que sus orejas son del tamaño de una mesa.", 
    question: "Dentro de este contexto, ¿cuál es la mejor definición para 'grande'?", 
    choices: ["Que tiene un tamaño o dimensiones muy superiores a lo normal.", "Un ser vivo que tiene la capacidad de volar sobre las montañas.", "Algo que es tan pequeño que apenas se puede ver."], 
    correct: 0 
  },
  { 
    word: "claro", 
    paragraph: "Esta mañana el sol salió con mucha fuerza y no se veía ni una sola nube en el horizonte. Podíamos ver las montañas a lo lejos con total precisión porque el cielo estaba muy claro. Era el día perfecto para disfrutar de la luz natural.", 
    question: "¿Qué característica define al cielo cuando está 'claro'?", 
    choices: ["Que hay una falta total de luz y es imposible ver el camino.", "Que produce ruidos muy fuertes que asustan a los animales.", "Que está muy iluminado, limpio y permite ver con nitidez."], 
    correct: 2 
  },
  { 
    word: "saludable",
    paragraph: "Mi médico dice que comer frutas y verduras todos los días es fundamental para el cuerpo. Además, caminar por las mañanas ayuda a mantener el corazón fuerte y la mente activa. Si sigues estos consejos, tendrás una vida muy saludable.", 
    question: "¿Qué implica tener un estilo de vida 'saludable'?", 
    choices: ["Consumir alimentos que tienen un sabor muy amargo.", "Comprar productos que son excesivamente caros.", "Realizar acciones que son buenas para conservar la salud."], 
    correct: 2
  },
  { 
    word: "fácil",
    paragraph: "El examen de matemáticas solo tenía dos preguntas de suma muy básicas que todos conocían. María terminó todo el trabajo en menos de cinco minutos y entregó su hoja al profesor con una sonrisa. Ella no tuvo que esforzarse nada porque el reto era muy fácil.", 
    question: "¿Por qué se describe el examen como algo 'fácil'?", 
    choices: ["Porque requería muchas horas de estudio y mucho esfuerzo.", "Porque se pudo resolver rápidamente y sin dificultad.", "Porque era tan aburrido que María se quedó dormida."], 
    correct: 1 
  },
  { 
    word: "rápido",
    paragraph: "El guepardo es conocido por ser el animal más veloz de la tierra cuando persigue a su presa. En pocos segundos, puede alcanzar una velocidad que supera a la de muchos coches en la carretera. Su cuerpo está diseñado para ser muy rápido en la llanura.", 
    question: "¿Qué significa que el guepardo sea un animal 'rápido'?", 
    choices: ["Que se mueve a una gran velocidad en poco tiempo.", "Que pasa la mayor parte del día durmiendo bajo el sol.", "Que se mueve con mucha lentitud para no ser visto."], 
    correct: 0 
  },
  { 
    word: "caliente",
    paragraph: "La abuela sirvió la sopa directamente desde la olla hirviendo a la mesa. El vapor subía hacia el techo y el plato quemaba al tocarlo con los dedos. Tuvimos que esperar un rato porque la comida estaba muy caliente.", 
    question: "En esta escena, ¿qué describe la palabra 'caliente'?", 
    choices: ["Algo que tiene una temperatura muy baja o congelada.", "Un objeto o alimento que tiene una temperatura elevada.", "Un alimento que no tiene sabor y necesita más sal."], 
    correct: 1 
  },
  { 
    word: "corto",
    paragraph: "Para llegar a la panadería, puedes tomar la avenida principal o el pasillo que corta por el parque. El pasillo del parque solo mide unos pocos metros y llegas en un instante. Ese camino es muy corto comparado con la ruta normal.", 
    question: "¿Qué significa que el camino sea 'corto'?", 
    choices: ["Que tiene poca longitud o distancia de un punto a otro.", "Que es extremadamente largo y toma horas recorrerlo.", "Que es muy ancho y pueden pasar muchos autos a la vez."], 
    correct: 0 
  },
  { 
    word: "triste",
    paragraph: "El niño se sentó en el rincón después de que se rompió su juguete favorito por accidente. Tenía los ojos llenos de lágrimas y no quería hablar con nadie en toda la tarde. Estaba muy triste porque ese regalo era muy especial para él.", 
    question: "¿Cómo se define el estado de estar 'triste'?", 
    choices: ["Sentirse lleno de energía y ganas de saltar.", "Estar apenado, con dolor moral o falta de alegría.", "Sentir mucho enojo y querer gritarle a los demás."], 
    correct: 1 
  },
  { 
    word: "limpia",
    paragraph: "Después de jugar en el lodo, la ropa de los niños quedó llena de manchas marrones. Su madre puso todo en la lavadora con mucho jabón y agua caliente. Ahora, las camisas huelen bien y están totalmente limpias para el colegio.", 
    question: "¿Qué significa que la ropa esté 'limpia'?", 
    choices: ["Que todavía tiene restos de suciedad y polvo.","Que es ropa comprada hoy mismo en la tienda.", "Que está libre de manchas, suciedad o impurezas."], 
    correct: 2 
  },
  { 
    word: "fuerte",
    paragraph: "El atleta de los juegos olímpicos levantó la barra de metal que pesaba doscientos kilos. Sus músculos se marcaron por el esfuerzo y mantuvo el peso sobre su cabeza sin temblar. Es un hombre muy fuerte que entrena todos los días.", 
    question: "Dentro de este contexto, ¿qué es ser alguien 'fuerte'?", 
    choices: ["Una persona con gran vigor, resistencia o capacidad física.", "Alguien que no tiene energía y se cansa fácilmente.", "Alguien muy delgado que no puede cargar objetos."], 
    correct: 0 
  },
  { 
    word: "nuevo",
    paragraph: "El abuelo decidió vender su viejo tractor que ya no funcionaba bien. Con el dinero, fue a la agencia y eligió un modelo del año que brilla bajo el sol. Ahora tiene un coche nuevo que huele a plástico recién fabricado.", 
    question: "¿Qué define a un objeto como 'nuevo'?", 
    choices: ["Algo que ha sido usado por muchas personas antes.", "Algo recién hecho, fabricado o adquirido recientemente.", "Un objeto que está roto y ya no se puede usar más."], 
    correct: 1 
  },
  { 
    word: "oscura",
    paragraph: "Cuando se fue la electricidad en todo el barrio, las luces de las casas se apagaron de golpe. No podíamos ver nuestras propias manos frente a la cara y tuvimos que buscar una linterna. La noche estaba totalmente oscura sin las farolas de la calle.", 
    question: "¿Qué es una situación 'oscura'?", 
    choices: ["Un lugar lleno de luces de colores y mucha claridad.", "Un espacio que tiene falta de luz o claridad.", "Un ambiente muy frío donde está cayendo nieve."], 
    correct: 1 
  },
  { 
    word: "dulce",
    paragraph: "La pastelera le agregó tres tazas de azúcar y miel a la mezcla del pastel. Al probar un pedacito, el sabor era tan intenso que recordaba a un caramelo. El postre quedó muy dulce, justo como le gusta a los niños.", 
    question: "¿A qué sabe algo que es 'dulce'?", 
    choices: ["Tiene un sabor fuerte como el de la sal del mar.", "Tiene un sabor agradable como el del azúcar o la miel.", "Tiene un sabor desagradable y amargo como el café puro."], 
    correct: 1 
  },
  { 
    word: "joven",
    paragraph: "En la escuela primaria, los salones están llenos de niños pequeños que están empezando a aprender. Mi hermano menor solo tiene cinco años y tiene mucha energía para correr y jugar. Él es muy joven y todavía tiene mucho que crecer.", 
    question: "¿Qué significa que alguien sea 'joven'?", 
    choices: ["Una persona que tiene poca edad o está en su niñez.","Una persona anciana que ha vivido muchísimos años.", "Alguien que es muy alto y ya terminó de crecer."], 
    correct: 0 
  },
  { 
    word: "grueso",
    paragraph: "Para sostener la puerta pesada, necesitamos un bloque de madera que no se rompa fácilmente. Compramos un tronco que tiene un espesor de treinta centímetros y es difícil de mover. Es un material muy grueso que resistirá mucho peso.", 
    question: "¿Qué característica tiene algo 'grueso'?", 
    choices: ["Que es muy delgado y se puede romper con las manos.", "Que es un objeto pequeño que cabe en un bolsillo.","Que tiene mucho espesor, bulto o es muy denso."], 
    correct: 2 
  },
  { 
    word: "ancha",
    paragraph: "La nueva carretera tiene espacio para que pasen cuatro camiones al mismo tiempo sin tocarse. Es una vía muy ancha que permite que el tráfico fluya rápidamente por la ciudad. No hay peligro de chocar porque el espacio lateral es enorme.", 
    question: "¿Cómo se describe una calle 'ancha'?", 
    choices: ["Un camino estrecho donde apenas cabe una persona.", "Un espacio que es extenso o amplio de un lado a otro.", "Una ruta muy corta que se termina en un minuto."], 
    correct: 1 
  },
  { 
    word: "pequeño",
    paragraph: "El gatito recién nacido cabía perfectamente dentro de la palma de mi mano. Sus orejas y sus patas eran minúsculas y apenas hacía ruido cuando caminaba por la alfombra. Es un animal muy pequeño que necesita muchos cuidados.", 
    question: "¿Qué define a algo como 'pequeño'?", 
    choices: ["Algo que tiene un tamaño gigantesco como un edificio.", "Algo que tiene poco tamaño o dimensiones reducidas.", "Un animal que corre a una velocidad increíble."], 
    correct: 1 
  },
  { 
    word: "frío",
    paragraph: "En la cima de la montaña, el agua de los lagos se convierte en bloques de hielo sólido. El viento sopla con fuerza y hace que la piel se sienta entumecida si no llevas una chaqueta. El clima allí arriba es extremadamente frío.", 
    question: "¿Qué describe la palabra 'frío'?", 
    choices: ["Una temperatura muy baja o una falta de calor.","Una temperatura muy alta que hace sudar a la gente.", "Un estado tibio que es agradable para bañarse."], 
    correct: 0 
  },
  { 
    word: "divertido",
    paragraph: "El payaso de la fiesta empezó a contar chistes y a hacer trucos de magia con globos de colores. Todos los invitados se reían a carcajadas y se olvidaron de sus problemas por un momento. Fue un espectáculo muy divertido para toda la familia.", 
    question: "¿Qué significa que algo sea 'divertido'?", 
    choices: ["Algo alegre que recrea, entretiene o hace reír.","Algo que causa aburrimiento y ganas de irse a casa.", "Un evento muy serio donde nadie puede hablar."], 
    correct: 0 
  },
  { 
    word: "difícil",
    paragraph: "El rompecabezas tenía mil piezas y todas eran de un color azul muy parecido. Tardamos tres días enteros en encontrar dónde iba cada parte del cielo y del mar. Fue un trabajo muy difícil, pero finalmente logramos terminarlo.", 
    question: "¿Por qué el trabajo fue 'difícil'?", 
    choices: ["Porque era muy sencillo y no costó ningún esfuerzo.", "Porque se terminó rápidamente en solo dos minutos.", "Porque requirió mucho trabajo, paciencia y esfuerzo."], 
    correct: 2 
  },
  { 
    word: "abierta",
    paragraph: "Hacía mucho calor dentro de la casa, así que decidimos dejar pasar el aire fresco del jardín. Empujamos la madera y ahora el gato puede entrar y salir libremente por el hueco. La puerta está abierta para que todos disfruten del sol.", 
    question: "¿Qué significa que una puerta esté 'abierta'?", 
    choices: ["Que está cerrada con llave y nadie puede pasar.", "Que no está cerrada y permite el paso o la entrada.", "Que se ha roto y ya no se puede mover nunca más."], 
    correct: 1 
  },
  { 
    word: "sabia",
    paragraph: "Mi abuelo ha leído miles de libros y siempre sabe qué consejo darnos cuando tenemos un problema. Él entiende mucho sobre la vida y la historia porque ha estudiado y observado durante años. Es un hombre muy sabio al que todos respetamos.", 
    question: "¿Cómo es una persona 'sabia'?", 
    choices: ["Alguien que no sabe nada y comete muchos errores.", "Alguien que tiene conocimientos profundos y buen juicio.", "Una persona muy joven que acaba de nacer ayer."], 
    correct: 1 
  },
  { 
    word: "vacío",
    paragraph: "Llegamos al cine muy temprano y todavía no había nadie sentado en las butacas. Podíamos elegir cualquier lugar porque no había ni una sola persona en la sala. El lugar estaba totalmente vacío antes de que empezara la película.", 
    question: "¿Qué significa que un lugar esté 'vacío'?", 
    choices: ["Que no contiene nada o no tiene gente dentro.","Que está lleno de gente y no hay espacio para nadie.", "Que es un espacio muy grande y lleno de luces."], 
    correct: 0 
  },
  { 
    word: "blando",
    paragraph: "Me gusta mucho mi cama porque tiene una almohada rellena de plumas suaves. Cuando apoyo la cabeza, la almohada se hunde suavemente y se siente como una nube. Es muy blanda y me ayuda a dormir profundamente.", 
    question: "¿Qué característica tiene algo 'blando'?", 
    choices: ["Algo muy duro que no se puede doblar ni hundir.", "Un objeto pesado que es muy difícil de levantar.", "Algo suave que cede fácilmente a la presión al tocarlo."], 
    correct: 2 
  },
  { 
    word: "duro",
    paragraph: "Intentamos clavar un clavo en la pared de piedra, pero la punta del metal se dobló al chocar. La superficie mineral no se movió ni un milímetro porque es un material muy resistente. La piedra es tan dura que nada puede atravesarla fácilmente.", 
    question: "¿Qué significa que un objeto sea 'duro'?", 
    choices: ["Algo que es tierno y se puede cortar con los dedos.", "Algo resistente que no se deforma ni se corta fácil.", "Un objeto ligero que flota sobre el agua del mar."], 
    correct: 1 
  },
  { 
    word: "seco",
    paragraph: "En el desierto no ha llovido en más de seis meses y el suelo tiene grietas por la falta de agua. Las plantas tienen espinas en lugar de hojas para no perder la poca humedad que queda. El clima es tan seco que siempre tienes sed al caminar.", 
    question: "En este contexto, ¿qué significa 'seco'?", 
    choices: ["Un lugar donde llueve mucho y hay mucha humedad.", "Que le falta agua, humedad o líquido.", "Un ambiente donde hay mucha nieve y hielo."], 
    correct: 1 
  },
  { 
    word: "madura",
    paragraph: "Recogimos las manzanas del árbol cuando cambiaron de color verde a un rojo intenso. Ahora están dulces, suaves y tienen el mejor sabor para hacer un pastel. La fruta ya está madura y es el momento perfecto para comerla.", 
    question: "¿Qué significa que la fruta esté 'madura'?", 
    choices: ["Que todavía está verde y sabe muy mal al comerla.", "Que ha llegado a su punto completo de desarrollo.", "Que se ha podrido y ya no se puede consumir."], 
    correct: 1 
  },
  { 
    word: "valiente",
    paragraph: "El bombero entró al edificio lleno de humo para rescatar al perrito que estaba atrapado. No le importó el peligro de las llamas y actuó con mucha decisión para salvar una vida. Fue un acto muy valiente que todos en el pueblo aplaudieron.", 
    question: "¿Cómo actúa una persona 'valiente'?", 
    choices: ["Con valor y determinación ante situaciones difíciles.","Con mucho miedo y escapando de cualquier problema.", "Con mucha timidez y sin querer hablar con nadie."], 
    correct: 0 
  }
],


  // NIVEL 2: Vocabulario Intermedio
2: [
  { 
    word: "dudar", 
    paragraph: "Después de revisar el mapa tres veces, Juan todavía no estaba seguro de qué camino tomar en la montaña. Aunque sus amigos estaban convencidos, él empezó a dudar de su propia respuesta inicial. Se detuvo un momento para pensar porque no quería cometer un error grave en la ruta.", 
    question: "Dentro de esta situación, ¿qué significa el acto de 'dudar'?", 
    choices: ["Estar totalmente convencido de una idea sin pensarlo.", "Tener inseguridad o falta de determinación sobre una decisión.", "Gritar con fuerza para pedir ayuda a las personas cercanas."], 
    correct: 1 
  },
  { 
    word: "paciencia", 
    paragraph: "Aprender a tocar un instrumento como el piano no sucede de la noche a la mañana. Se necesita practicar las mismas notas durante meses y no frustrarse cuando cometes errores. Para lograr ser un gran músico, se necesita mucha paciencia y disciplina constante.", 
    question: "¿Qué cualidad describe la palabra 'paciencia'?", 
    choices: ["Capacidad de esperar y soportar algo sin alterarse.", "Hacer las cosas con mucha rapidez para terminar pronto.", "Sentir un enojo profundo cuando algo no sale bien al primer intento."], 
    correct: 0 
  },
  { 
    word: "amable", 
    paragraph: "La señora Marta siempre recibe a los nuevos residentes con una sonrisa y una cesta de pan fresco. Ella se ofrece a cuidar las plantas de los demás y siempre habla con cortesía. Sus vecinos dicen que ella es muy amable y que hace del barrio un lugar mejor.", 
    question: "¿Qué significa ser 'amable'?", 
    choices: ["Alguien grosero que no respeta el espacio de los demás.", "Una persona que se mantiene distante y no habla con nadie.", "Alguien afectuoso, servicial y digno de ser amado por su trato."], 
    correct: 2 
  },
  { 
    word: "resolver", 
    paragraph: "El equipo de científicos pasó noches enteras en el laboratorio analizando los datos del experimento. Finalmente, tras combinar diferentes químicos, el líder logró resolver el problema que los había detenido. Ahora, el proyecto puede continuar hacia la siguiente fase de desarrollo.", 
    question: "¿Qué hicieron los científicos al 'resolver' el problema?", 
    choices: ["Ignorar la situación para que se solucione sola con el tiempo.", "Hallar la solución o el desenlace de una dificultad.", "Crear más dudas y complicaciones en el experimento."], 
    correct: 1 
  },
  { 
    word: "honesto", 
    paragraph: "Pedro prefiere decir la verdad aunque sepa que se meterá en problemas con sus padres. Él nunca toma cosas que no le pertenecen y siempre cumple con su palabra. Todos confían en él porque es una persona muy honesta en todos los aspectos.", 
    question: "¿Cuál es la característica principal de alguien 'honesto'?", 
    choices: ["Una persona que miente constantemente para obtener beneficios.", "Alguien que actúa con rectitud, justicia y dice la verdad.", "Una persona egoísta que solo piensa en su propio bienestar."], 
    correct: 1 
  },
  { 
    word: "variable", 
    paragraph: "En esta región del país, el tiempo nunca es el mismo durante dos días seguidos. Por la mañana puede hacer mucho calor, pero por la tarde suele llover intensamente sin previo aviso. El clima es muy variable y siempre hay que llevar ropa para todo tipo de clima.", 
    question: "¿Qué significa que el clima sea 'variable'?", 
    choices: ["Que se mantiene constante y sin cambios por mucho tiempo.", "Que tiene una tendencia a cambiar con frecuencia y facilidad.", "Que la temperatura siempre es extremadamente calurosa."], 
    correct: 1 
  },
  { 
    word: "colaborar", 
    paragraph: "El profesor de arte nos pidió que nos dividiéramos en grupos de cuatro personas. Explicó que para terminar el mural gigante a tiempo, necesitábamos colaborar compartiendo los pinceles y las pinturas. Si trabajamos unidos, el resultado será mucho mejor que si trabajamos solos.", 
    question: "¿Qué implica la acción de 'colaborar'?", 
    choices: ["Trabajar solo sin pedir ayuda a ninguna otra persona.", "Trabajar con otros en una tarea común para lograr un fin.", "Competir contra los demás para ver quién termina primero."], 
    correct: 1 
  },
  { 
    word: "curiosidad", 
    paragraph: "Cuando Lucía encontró una caja vieja de madera en el ático, no pudo evitar acercarse. Quería saber qué había guardado su abuelo allí durante tantos años y por qué estaba cerrada con llave. Sintió mucha curiosidad y pasó toda la tarde buscando la llave correcta.", 
    question: "¿Cómo se define la 'curiosidad'?", 
    choices: ["Sentir una indiferencia total por las cosas nuevas.", "El deseo o impulso de conocer o saber algo que se ignora.", "Tener miedo de descubrir secretos del pasado familiar."], 
    correct: 1 
  },
  { 
    word: "admitir", 
    paragraph: "Después de romper el jarrón favorito de su madre, Carlos se sintió muy mal por haberlo ocultado. Finalmente, decidió ir a la sala y admitir su culpa frente a toda la familia. Su madre agradeció que fuera sincero a pesar de que el objeto estuviera roto.", 
    question: "¿Qué significa 'admitir' algo en este caso?", 
    choices: ["Negar los hechos rotundamente para evitar un castigo.", "Ocultar las pruebas de un error para que nadie se entere.", "Aceptar algo como cierto o reconocer un error propio."], 
    correct: 2 
  },
  { 
    word: "constante", 
    paragraph: "El sonido de las gotas de lluvia golpeando el techo de metal se escuchó durante toda la noche. No hubo ni un solo minuto de silencio porque el ruido era constante y rítmico. A pesar del volumen, el sonido nos ayudó a dormir profundamente.", 
    question: "¿Qué significa que algo sea 'constante'?", 
    choices: ["Que se interrumpe muchas veces durante un periodo corto.", "Algo que es silencioso y no produce ninguna vibración.", "Que no se interrumpe y persiste en el mismo estado."], 
    correct: 2 
  },
  { 
    word: "proteger", 
    paragraph: "Los voluntarios pasaron el fin de semana plantando árboles nuevos y limpiando el río de plásticos. Saben que es vital proteger el medio ambiente para que los animales tengan un lugar donde vivir. Su misión es evitar que la naturaleza sufra más daños por la contaminación.", 
    question: "¿Qué significa la palabra 'proteger'?", 
    choices: ["Resguardar a una persona, animal o cosa de un daño o peligro.", "Causar un daño intencional a la naturaleza o al entorno.", "Olvidar las responsabilidades que tenemos con el planeta."], 
    correct: 0 
  },
  { 
    word: "positiva", 
    paragraph: "A pesar de haber perdido el primer partido, el capitán mantuvo una sonrisa y animó a sus compañeros. Él cree que con esfuerzo y una mente abierta podrán ganar el siguiente encuentro. Su actitud fue muy positiva y logró contagiar de entusiasmo al resto del equipo.", 
    question: "¿Cómo es una actitud 'positiva'?", 
    choices: ["Optimista, favorable o que busca el lado bueno de las cosas.", "Negativa y enfocada únicamente en los errores cometidos.", "Triste y sin esperanzas de que las cosas puedan cambiar."], 
    correct: 0 
  },
  { 
    word: "mejorar", 
    paragraph: "El estudiante no estaba conforme con su nota en el examen de ciencias y decidió estudiar más. Hizo resúmenes nuevos y le pidió tutoría extra a su profesor por las tardes. Con este esfuerzo, logró mejorar su puntaje y obtener una calificación excelente.", 
    question: "¿Qué significa 'mejorar' algo?", 
    choices: ["Hacer que algo pase a un estado peor del que estaba.", "Aumentar la calidad, el valor o el estado de una cosa.", "Mantener algo exactamente igual sin realizar ningún cambio."], 
    correct: 1 
  },
  { 
    word: "tranquilo", 
    paragraph: "A orillas del lago, el único sonido que se escuchaba era el suave movimiento del agua. No había tráfico, ni gente gritando, ni ruidos de construcción en kilómetros a la redonda. Es un lugar muy tranquilo, ideal para quienes buscan paz y silencio.", 
    question: "¿Cómo se describe un lugar 'tranquilo'?", 
    choices: ["Un ambiente ruidoso con mucha agitación y movimiento.", "Un espacio sosegado, en paz y sin agitación ni ruido.", "Un lugar peligroso donde hay que estar siempre alerta."], 
    correct: 1 
  },
  { 
    word: "breve", 
    paragraph: "El director de la empresa subió al escenario para dar el anuncio del ganador. No quiso quitarle tiempo a la ceremonia, así que su explicación fue muy breve y directa. En menos de treinta segundos, ya había bajado del escenario para continuar con la fiesta.", 
    question: "¿Qué significa que algo sea 'breve'?", 
    choices: ["Que tiene una corta duración o una extensión reducida.", "Algo que es extremadamente largo y difícil de entender.", "Una explicación confusa que nadie pudo comprender."], 
    correct: 0 
  },
  { 
    word: "fiel",
    paragraph: "El labrador esperaba en la puerta de la casa cada tarde a la misma hora para recibir a su dueño. No importaba si llovía o hacía calor, él nunca se movía de su puesto de guardia. El perro es muy fiel y demuestra su lealtad todos los días de su vida.", 
    question: "¿Cómo actúa alguien que es 'fiel'?", 
    choices: ["Es una persona traidora que cambia de bando fácilmente.", "Alguien leal que mantiene sus compromisos y afectos.", "Un ser agresivo que no confía en nadie a su alrededor."], 
    correct: 1 
  },
  { 
    word: "emocionante", 
    paragraph: "Toda la familia estaba al borde de sus asientos mientras veían el final de la competencia de carreras. Los autos estaban tan cerca uno del otro que cualquier cosa podía pasar en la última curva. La película fue muy emocionante y nadie quería parpadear.", 
    question: "¿Qué describe a algo 'emocionante'?", 
    choices: ["Algo que causa una emoción fuerte, interés o entusiasmo.", "Una situación aburrida que provoca ganas de dormir.", "Un evento que ocurre con mucha lentitud y sin sorpresas."], 
    correct: 0 
  },
  { 
    word: "organizar", 
    paragraph: "Después de la mudanza, había cientos de papeles y facturas esparcidos por todo el escritorio. Julia decidió comprar carpetas de colores para clasificar cada documento por fecha y categoría. Es necesario organizar todo para no perder información importante del trabajo.", 
    question: "¿Qué significa la acción de 'organizar'?", 
    choices: ["Poner orden, clasificar o arreglar cosas bajo un sistema.", "Desordenar los objetos para que sean más difíciles de hallar.", "Perder los documentos a propósito para no tener que leerlos."], 
    correct: 0 
  },
  { 
    word: "inspirar", 
    paragraph: "El nuevo entrenador no solo sabe de tácticas, sino que también sabe hablar con los jóvenes para motivarlos. Con sus discursos sobre el esfuerzo y la superación, logra inspirar a los atletas antes de cada competencia. Gracias a él, el equipo tiene más ganas de triunfar que nunca.", 
    question: "¿Qué hace un líder que logra 'inspirar'?", 
    choices: ["Desanimar a las personas diciéndoles que no tienen talento.", "Infundir entusiasmo, ideas o sentimientos positivos.", "Ignorar al grupo y dejar que cada quien haga lo que quiera."], 
    correct: 1 
  },
  { 
    word: "suficiente", 
    paragraph: "Compramos tres pizzas grandes y varias ensaladas para la fiesta de cumpleaños. Aunque vinieron más invitados de los que esperábamos, la comida fue suficiente para que todos quedaran satisfechos. Nadie se quedó con hambre y hasta sobró un poco de postre.", 
    question: "¿Cuándo algo es 'suficiente'?", 
    choices: ["Cuando hay una cantidad escasa que no alcanza para todos.", "Cuando hay la cantidad necesaria o apta para lo que se requiere.", "Cuando hay tanta cantidad que es imposible guardarla toda."], 
    correct: 1 
  },
  { 
    word: "creativa", 
    paragraph: "El niño tomó unas cajas de cartón vacías y unos hilos para construir una ciudad completa para sus juguetes. Inventó nombres para las calles y diseñó edificios con formas que nadie había visto antes. Es muy creativo y siempre encuentra formas nuevas de divertirse.", 
    question: "¿Cómo es una persona 'creativa'?", 
    choices: ["Alguien que repite siempre lo mismo y nunca tiene ideas.", "Una persona que tiene capacidad o talento para crear cosas.", "Alguien que trabaja con mucha lentitud y no termina nada."], 
    correct: 1 
  },
  { 
    word: "simple", 
    paragraph: "Para preparar este plato, solo necesitas mezclar arroz con un poco de sal y agua. No requiere técnicas complicadas de cocina ni ingredientes difíciles de encontrar en el mercado. Es una tarea simple que cualquiera puede realizar en pocos minutos.", 
    question: "¿Qué define a algo 'simple'?", 
    choices: ["Algo que es extremadamente complejo y difícil de hacer.", "Un objeto o tarea sencilla que no tiene complicaciones.", "Una superficie dura que no se puede rayar ni romper."], 
    correct: 1 
  },
  { 
    word: "moderno", 
    paragraph: "El nuevo museo del centro tiene paredes de cristal y sistemas de iluminación inteligentes que se activan con el movimiento. Su diseño no se parece en nada a las iglesias antiguas que lo rodean. Es un edificio moderno que representa la arquitectura del siglo veintiuno.", 
    question: "¿A qué se refiere la palabra 'moderno'?", 
    choices: ["A algo que pertenece a la época actual o reciente.", "A un objeto que tiene muchos siglos de antigüedad.", "A una estructura que está rota y ya no tiene ninguna utilidad."], 
    correct: 0 
  },
  { 
    word: "inmediata", 
    paragraph: "En cuanto el jefe terminó de hacer la pregunta, la secretaria levantó la mano para responder. No hubo pausas ni dudas; ella sabía exactamente qué decir en ese mismo momento. Su respuesta fue inmediata y ayudó a resolver la duda del grupo.", 
    question: "¿Cómo es una reacción 'inmediata'?", 
    choices: ["Algo que tarda mucho tiempo en suceder o manifestarse.", "Que sucede enseguida, sin tardanza o en el mismo instante.", "Una respuesta lenta que llega cuando ya no es necesaria."], 
    correct: 1 
  },
  { 
    word: "alto", 
    paragraph: "Desde la base del valle, apenas podíamos ver la cima porque las nubes la cubrían por completo. Los escaladores necesitaron cuerdas y mucho equipo para subir hasta el punto más alto de la roca. La montaña es muy alta y el aire se siente frío en la cumbre.", 
    question: "¿Qué significa que algo sea 'alto'?", 
    choices: ["Que tiene una estatura o elevación mayor a lo común.", "Un terreno que es plano y no tiene ninguna elevación.", "Algo que es muy bajo y se puede saltar sin esfuerzo."], 
    correct: 0 
  },
  { 
    word: "pura", 
    paragraph: "Bebimos agua directamente de un manantial que nace en lo más profundo del bosque. No tenía ningún olor, ni color, ni residuos de contaminación de la ciudad. El agua está muy pura y se siente fresca al beberla bajo el sol.", 
    question: "¿Qué significa que una sustancia sea 'pura'?", 
    choices: ["Que está llena de mezclas, químicos y suciedad.", "Que está limpia, libre de mezclas extrañas o contaminantes.", "Que tiene un sabor muy salado y no se puede beber."], 
    correct: 1 
  },
  { 
    word: "plano", 
    paragraph: "Para construir la cancha de fútbol, los trabajadores tuvieron que nivelar la tierra con una máquina gigante. Ahora no hay baches, ni colinas, ni piedras que estorben a los jugadores al correr. El terreno es muy plano y perfecto para el deporte.", 
    question: "¿Cómo se describe un terreno 'plano'?", 
    choices: ["Una superficie llena de piedras, rugosidades y subidas.", "Un espacio liso que no presenta desniveles ni relieves.", "Un camino inclinado que sube hacia la parte alta del cerro."], 
    correct: 1 
  },
  { 
    word: "ligero", 
    paragraph: "A diferencia de las maletas pesadas que llevaban mis padres, mi mochila de tela casi no se sentía en mi espalda. Solo llevaba una camiseta y una botella de agua vacía. Es un objeto muy ligero que puedo cargar durante horas sin cansarme.", 
    question: "¿Qué significa que algo sea 'ligero'?", 
    choices: ["Que pesa poco y es fácil de transportar o mover.", "Algo extremadamente pesado que requiere mucha fuerza.", "Un material muy duro que se usa para construir puentes."], 
    correct: 0 
  },
  { 
    word: "potente", 
    paragraph: "Cuando el tenor empezó a cantar en el teatro, su voz llenó cada rincón de la sala sin necesidad de micrófonos. Los cristales de las lámparas vibraban con la intensidad de sus notas más altas. La voz del cantante es potente y deja a todos impresionados.", 
    question: "¿Qué describe a una voz 'potente'?", 
    choices: ["Un sonido débil que apenas se puede escuchar de cerca.", "Que tiene mucha fuerza, intensidad, poder o energía.", "Una voz suave que se usa para arrullar a los bebés."], 
    correct: 1 
  },
  { 
    word: "increíble", 
    paragraph: "Nadie pensó que un mago de verdad aparecería en medio de la plaza un martes por la tarde. Hizo desaparecer un elefante frente a cientos de personas y luego lo hizo aparecer en el techo de un edificio. El viaje y el espectáculo fueron increíbles.", 
    question: "¿Qué significa que algo sea 'increíble'?", 
    choices: ["Algo totalmente normal que sucede todos los días.", "Que es difícil de creer o que es extraordinario y asombroso.", "Un evento muy malo que nadie quiere volver a repetir."], 
    correct: 1 
  }
],
  // NIVEL 3: Vocabulario Avanzado
 3: [
  { 
    word: "elocuencia",
    paragraph: "El abogado defendió su caso ante el jurado sin cometer un solo error de dicción. Sus palabras fluían con una elegancia natural que mantenía a todos en la sala atentos a su discurso. Habló con tanta elocuencia que logró convencer a los jueces incluso antes de presentar las pruebas físicas.", 
    question: "Basado en el éxito del abogado, ¿cómo se define la 'elocuencia'?", 
    choices: ["Un estado de confusión donde el mensaje no es claro.", "La facultad de hablar con fluidez, elegancia y persuasión.", "Mantenerse en silencio absoluto durante una conversación."], 
    correct: 1 
  },
  { 
    word: "perseverancia", 
    paragraph: "A pesar de haber fallado en su primer intento de lanzar el cohete, la ingeniera regresó al taller cada mañana durante un año. No permitió que las críticas ni el cansancio la detuvieran en su objetivo de llegar al espacio. Su perseverancia fue clave para que finalmente el proyecto fuera un éxito rotundo.", 
    question: "¿Qué cualidad demuestra alguien que tiene 'perseverancia'?", 
    choices: ["La tendencia a rendirse cuando surge el primer obstáculo.", "Sentir una pereza profunda que impide realizar cualquier tarea.", "La constancia y firmeza en la ejecución de un propósito u objetivo."], 
    correct: 2 
  },
  { 
    word: "análisis",
    paragraph: "Antes de comprar la empresa, los inversores revisaron cada contrato, factura y deuda acumulada durante la última década. No dejaron ninguna cifra sin revisar, buscando entender exactamente dónde se perdía el dinero. Hicieron un análisis detallado que reveló problemas que nadie más había notado.", 
    question: "En este contexto de negocios, ¿qué es un 'análisis'?", 
    choices: ["Un vistazo rápido a la portada de un documento.", "Un examen minucioso y pormenorizado de una cosa o situación.", "Un resumen muy breve que ignora los detalles complicados."], 
    correct: 1 
  },
  { 
    word: "relevante", 
    paragraph: "Durante la reunión de emergencia, el director pidió que solo se mencionaran los problemas que afectaban directamente la seguridad de los trabajadores. Ignoró las quejas sobre el color de las paredes porque consideraba que no era el momento para temas menores. La situación actual es demasiado relevante como para perder tiempo en detalles triviales.", 
    question: "¿Qué significa que un tema sea 'relevante'?", 
    choices: ["Que es algo importante, destacado o muy significativo.", "Algo insignificante que no tiene ninguna importancia real.", "Un asunto aburrido que no genera interés en nadie."], 
    correct: 0 
  },
  { 
    word: "sutil", 
    paragraph: "El aroma de la flor en el jardín no era fuerte, sino que se mezclaba suavemente con el olor a tierra mojada después de la lluvia. Solo podías notarlo si te acercabas mucho y respirabas con calma. Es un cambio tan sutil que la mayoría de las personas pasan de largo sin percibirlo.", 
    question: "¿Cómo se describe algo que es 'sutil'?", 
    choices: ["Algo obvio y escandaloso que todos notan enseguida.", "Un fenómeno delicado, tenue o difícil de percibir.", "Un olor o sonido fuerte que molesta a los sentidos."], 
    correct: 1 
  },
  { 
    word: "ejemplar",
    paragraph: "A lo largo de su carrera, el bombero nunca llegó tarde y siempre fue el primero en entrar a las zonas de peligro para rescatar a otros. Sus compañeros más jóvenes lo miran con respeto y tratan de copiar su ética de trabajo. Su conducta fue ejemplar y le valió la medalla de honor de la ciudad.", 
    question: "¿Qué significa que un comportamiento sea 'ejemplar'?", 
    choices: ["Que es digno de ser imitado por su buena calidad o virtud.", "Una conducta mala que debe ser castigada por las autoridades.", "Un comportamiento común que cualquiera realiza todos los días."], 
    correct: 0 
  },
  { 
    word: "coherente", 
    paragraph: "El profesor explicó la teoría de la evolución uniendo los datos de los fósiles con los descubrimientos del ADN moderno. Cada parte de su explicación se conectaba perfectamente con la anterior sin dejar huecos en la lógica. El argumento es coherente y por eso la comunidad científica lo acepta sin dudar.", 
    question: "¿Qué hace que un argumento sea 'coherente'?", 
    choices: ["Que es totalmente ilógico y las ideas se contradicen entre sí.", "Que tiene una conexión lógica y armonía entre sus partes.", "Que es un texto muy largo y difícil de leer hasta el final."], 
    correct: 1 
  },
  { 
    word: "mitigar", 
    paragraph: "Después del accidente, los médicos aplicaron compresas de hielo y medicamentos suaves en la zona inflamada. El objetivo no era curar la herida instantáneamente, sino reducir la hinchazón y el ardor para que el paciente pudiera descansar. Logró mitigar el dolor lo suficiente como para permitir que el niño se quedara dormido.", 
    question: "¿Qué significa la acción de 'mitigar'?", 
    choices: ["Aumentar la intensidad de algo malo para que sea peor.", "Ignorar por completo el problema hasta que desaparezca solo.", "Moderar, aplacar o suavizar la dureza de algo negativo."], 
    correct: 2 
  },
  { 
    word: "audaz", 
    paragraph: "Sin pensarlo dos veces, la exploradora saltó sobre el barranco para rescatar la mochila que contenía los suministros médicos. Sus compañeros quedaron asombrados por su falta de miedo ante la altura y el peligro. Es una persona audaz que siempre toma riesgos cuando es necesario.", 
    question: "¿Cómo es una persona 'audaz'?", 
    choices: ["Alguien valiente, osado y que se atreve a realizar acciones riesgosas.", "Una persona miedosa que siempre busca la seguridad de su casa.", "Alguien lento que piensa demasiado antes de moverse."], 
    correct: 0 
  },
  { 
    word: "nostalgia", paragraph: "Al ver las fotos viejas de sus veranos en el campo, el anciano sonrió con tristeza mientras recordaba el olor del pasto y las voces de sus amigos que ya no estaban. Deseaba poder volver atrás en el tiempo aunque sabía que era imposible. Sintió una gran nostalgia por aquellos días de su juventud.", 
    question: "¿Cómo se define la 'nostalgia'?", 
    choices: ["Una alegría explosiva por algo que va a suceder mañana.", "El miedo a perder objetos materiales en el futuro.", "Pena o tristeza melancólica por la ausencia de algo o alguien."], 
    correct: 2 
  },
  { 
    word: "creatividad", paragraph: "La diseñadora tomó materiales reciclados como tapas de botellas y cartón viejo para crear un vestido que parecía de alta costura. Nadie en la competencia había imaginado que se pudiera usar basura para hacer algo tan hermoso y original. Su creatividad es admirable y la llevó a ganar el primer premio.", 
    question: "¿A qué se refiere el término 'creatividad'?", 
    choices: ["A la capacidad de crear, inventar o generar ideas nuevas.", "A la falta total de ideas y a la imitación de los demás.", "Al acto de copiar exactamente lo que otros ya han hecho."], 
    correct: 0 
  },
  { 
    word: "imparcial", paragraph: "A pesar de que uno de los competidores era su propio hermano, el árbitro marcó las faltas de manera justa para ambos equipos. No permitió que sus sentimientos familiares influyeran en su decisión final sobre quién ganó el partido. Su juicio fue imparcial y respetado por todos en el estadio.", 
    question: "¿Cómo es un juicio 'imparcial'?", 
    choices: ["Un juicio basado en favoritismos o prejuicios personales.", "Que se juzga con objetividad, justicia y sin favoritismos.", "Un veredicto erróneo que no toma en cuenta ninguna prueba."], 
    correct: 1 
  },
  {
    word: "persuasivo",
  paragraph: "El activista habló ante la asamblea usando datos reales y ejemplos conmovedores sobre el cambio climático. Al final de su charla, muchas personas que antes no creían en el problema decidieron empezar a reciclar. El discurso fue persuasivo y logró cambiar la mentalidad de la audiencia.", 
   question: "¿Qué cualidad tiene algo 'persuasivo'?", choices: ["Que es ineficaz y nadie presta atención a lo que se dice.", "Que tiene la capacidad o fuerza para convencer a alguien.", "Algo confuso que genera más dudas que respuestas."], 
   correct: 1 },

  { 
    word: "espontáneo",
   paragraph: "Cuando el músico escuchó el ritmo de los tambores en la calle, tomó su flauta y empezó a tocar una melodía que nunca había practicado. No hubo ensayos ni partituras; la música salió directamente de su corazón en ese momento. Su reacción fue espontánea y encantó a los transeúntes.", 
   question: "¿Qué significa que algo sea 'espontáneo'?", 
   choices: ["Algo que resulta natural y se produce sin preparación previa.", "Un evento cuidadosamente planeado durante muchas semanas.", "Una acción forzada que alguien es obligado a realizar."], 
   correct: 0 },
  { 
    word: "resiliencia", 
   paragraph: "Tras perder su casa en el terremoto, la familia trabajó unida para construir un refugio temporal y comenzar un pequeño negocio de comida. En lugar de rendirse ante la tragedia, encontraron la fuerza para sonreír y seguir adelante. Demostraron gran resiliencia ante una de las pruebas más duras de su vida.",
   question: "¿Qué es la 'resiliencia'?",
   choices: ["La fragilidad de una persona que se rompe ante el primer problema.", "La capacidad de adaptarse y recuperarse de situaciones críticas.", "La ignorancia de no saber que se está en una situación difícil."],
   correct: 1 },
  {
    word: "complejo", 
   paragraph: "El motor del avión tiene miles de piezas pequeñas que deben encajar con una precisión de milímetros. Si una sola conexión falla, todo el sistema deja de funcionar correctamente. El problema de reparación era complejo y requería a los mejores mecánicos del país.",
   question: "¿Cómo se describe un problema 'complejo'?",
   choices: ["Algo simple que cualquiera puede arreglar con una herramienta.", "Una situación fácil que no requiere pensar demasiado.", "Algo complicado, difícil y compuesto de varios elementos."],
   correct: 2 },
  {
    word: "meticuloso",
   paragraph: "Antes de lanzar el producto al mercado, la inspectora revisó cada etiqueta para asegurarse de que no hubiera errores de ortografía. Miró el color, la textura y el empaque con una lupa durante horas. Su enfoque era meticuloso y no permitía que ningún detalle se le escapara.",
   question: "¿Cómo trabaja alguien que es 'meticuloso'?", 
   choices: ["De forma descuidada y sin prestar atención a lo que hace.", "Con excesivo cuidado, atención y deteniéndose en los detalles.", "De manera muy rápida sin importar si el resultado es correcto."],
   correct: 1 },
  {
    word: "innovadora", 
   paragraph: "La empresa de tecnología creó una aplicación que permite a las personas traducir idiomas usando solo el movimiento de sus ojos. Nunca se había visto nada igual en la industria y cambió la forma en que nos comunicamos. La estrategia era innovadora y dejó atrás a toda la competencia.",
   question: "¿Qué define a una idea 'innovadora'?",
   choices: ["Que introduce novedades o cambios que no existían antes.", "Una técnica anticuada que se usaba hace cincuenta años.", "Algo común que todas las empresas ya están haciendo."],
   correct: 0 },
  {
    word: "diplomática", 
   paragraph: "Cuando los dos países tuvieron el desacuerdo por la frontera, la embajadora evitó usar palabras agresivas que pudieran causar una guerra. En su lugar, buscó puntos en común y propuso acuerdos que beneficiaran a ambos lados. Mostró una actitud diplomática que salvó miles de vidas.",
   question: "¿Cómo es una actitud 'diplomática'?",
   choices: ["Ofensiva y diseñada para causar peleas con los demás.", "Grosera e irrespetuosa con las tradiciones de otros.", "Interesada, sensible y cuidadosa en el manejo de relaciones."],
   correct: 2 },
  {
    word: "conciso",
   paragraph: "El escritor eliminó todos los adjetivos innecesarios y las explicaciones largas de su último capítulo. Quería que el lector entendiera la emoción del personaje sin tener que leer cien páginas. Su estilo era conciso, logrando decir mucho con muy pocas palabras.", 
   question: "¿Qué significa ser 'conciso'?", 
   choices: ["Ser breve y preciso en el modo de expresar los conceptos.", "Escribir textos extensos que duran muchas horas de lectura.", "Un modo confuso de hablar donde no se entiende el punto."], 
   correct: 0 },
  { 
    word: "riguroso",
   paragraph: "Los jueces de la competencia de ciencias no aceptaron simples opiniones; exigieron pruebas estadísticas y demostraciones en vivo. Cada estudiante tuvo que defender su teoría frente a un panel de expertos que hacían preguntas muy difíciles. El debate fue riguroso y solo el mejor proyecto ganó.", 
   question: "¿Cómo es un proceso 'riguroso'?",
   choices: ["Un análisis superficial que no entra en el fondo del tema.", "Algo extremadamente exigente, severo, preciso y minucioso.", "Un examen ligero que se termina sin mucho esfuerzo."], 
   correct: 1 },
  {
    word: "constructiva", 
   paragraph: "En lugar de decirle a su hermano que su pintura era fea, Clara le sugirió usar colores más brillantes para que el paisaje se viera más real. Gracias a ese consejo, él pudo mejorar su técnica y sentirse orgulloso de su trabajo. Su crítica fue constructiva y ayudó al crecimiento del artista.", 
   question: "¿Qué es una crítica 'constructiva'?",
   choices: ["Un comentario destructivo que busca hacer sentir mal al otro.", "Una opinión inútil que no aporta nada nuevo a la situación.", "Que ayuda a mejorar, edificar o dar una solución positiva."],
   correct: 2 },
  { 
    word: "controvertido",
   paragraph: "El estreno de la película sobre la vida del político causó que muchas personas protestaran en la calle, mientras que otras la defendían como una obra maestra. Nadie podía ponerse de acuerdo sobre si la historia era verdadera o una mentira. El tema era tan controvertido que salió en todas las noticias.",
   question: "¿Qué significa que algo sea 'controvertido'?",
   choices: ["Que genera discusión, debate o opiniones contrapuestas.", "Un asunto aceptado por todos que no causa ninguna duda.", "Un tema sencillo que no tiene ninguna importancia social."], 
   correct: 0 },
  { 
    word: "autodidacta",
   paragraph: "Luis nunca fue a la universidad, pero aprendió a programar aplicaciones complejas leyendo manuales en internet por las noches. Él mismo se ponía ejercicios y corregía sus propios errores sin ayuda de un profesor. Su aprendizaje fue autodidacta y hoy trabaja para una gran empresa de software.", 
   question: "¿Qué es una persona 'autodidacta'?", 
   choices: ["Alguien que siempre necesita ser guiado por otros para aprender.", "Una persona que se instruye o aprende algo por sí misma.", "Alguien que cree que es imposible aprender cosas nuevas."], 
   correct: 1 },
  {
    word: "extraordinario",
   paragraph: "El joven pianista tocó la pieza de Mozart con una rapidez y emoción que el público nunca había presenciado en ese teatro. Al terminar, la gente se puso de pie y aplaudió durante diez minutos seguidos. El resultado fue extraordinario y marcó el inicio de una leyenda musical.",
   question: "¿Qué define a algo como 'extraordinario'?", 
   choices: ["Algo muy común que se ve en todas las esquinas del mundo.", "Que es fuera de lo común, excepcional o muy superior.", "Un evento normal que no destaca por ninguna cualidad."], 
   correct: 1 },
  { 
    word: "intuición",
   paragraph: "Sin leer el informe completo, la jefa sintió que algo no estaba bien con el contrato que le entregaron. Decidió no firmar y, días después, descubrieron que el documento tenía una estafa oculta. Su intuición fue acertada y salvó a la compañía de perder millones.", 
   question: "¿Qué es la 'intuición'?", 
   choices: ["La capacidad de entender algo instantáneamente sin razonar.", "Un proceso de razonamiento muy lento que toma varios años.", "Un error mental que siempre lleva a tomar malas decisiones."], 
   correct: 0 },
  {
    word: "sistemático",
   paragraph: "Para limpiar la fábrica, el equipo siguió un manual que indicaba paso por paso desde el techo hasta el suelo. No empezaban una zona nueva hasta que la anterior estuviera perfecta, siguiendo un orden lógico y preciso. El enfoque era sistemático y garantizó una limpieza total.",
   question: "¿Cómo es un trabajo 'sistemático'?",
   choices: ["Un proceso caótico donde no se sigue ningún orden.", "Algo que se hace muy rápido sin importar el método.", "Que sigue o se ajusta a un sistema o método organizado."],
   correct: 2 },
  { 
    word: "exhaustivo",
   paragraph: "La policía científica buscó huellas dactilares incluso debajo de los muebles y dentro de los conductos de aire. Revisaron cada rincón de la habitación durante doce horas seguidas para no perder ni una sola prueba. Su análisis fue exhaustivo y finalmente encontraron al culpable.",
   question: "¿Qué significa que un análisis sea 'exhaustivo'?", 
   choices: ["Algo superficial que solo revisa lo que está a simple vista.", "Un examen completo, total y que agota todos los detalles.", "Un estudio incompleto que se detiene a la mitad del camino."],
   correct: 1 },
  { 
    word: "pragmático", 
   paragraph: "En lugar de discutir sobre quién tenía la culpa de que el coche no encendiera, María simplemente llamó a un taxi para llegar a tiempo a la reunión. Ella sabía que resolver el transporte era más importante que ganar una pelea en ese momento. Su actitud era pragmática y enfocada en lo que realmente funcionaba.",
   question: "¿Cómo actúa alguien que es 'pragmático'?",
   choices: ["Alguien idealista que prefiere soñar en lugar de actuar.", "Persona que prefiere lo práctico y se enfoca en resultados.", "Alguien irreal que no entiende cómo funciona el mundo."],
   correct: 1 },
  {
    word: "interdisciplinario",
   paragraph: "Para diseñar el nuevo hospital, tuvieron que reunirse médicos, arquitectos, ingenieros y psicólogos. Cada uno aportó sus conocimientos para que el edificio fuera seguro, eficiente y cómodo para los enfermos. El proyecto era interdisciplinario y combinaba lo mejor de cada ciencia.", 
   question: "¿Qué significa que algo sea 'interdisciplinario'?",
   choices: ["Que trata sobre un solo tema y no acepta otras opiniones.", "Que se realiza con la cooperación de varias disciplinas.", "Un estudio muy simple que no requiere mucho conocimiento."],
   correct: 1 }
],
  // NIVEL 4: Vocabulario Académico y Formal
4: [
  { 
    word: "prudente",
    paragraph: "Tras analizar las nubes oscuras y el cambio en la dirección del viento, el capitán decidió anclar el barco en el puerto más cercano. No quería arriesgar la vida de su tripulación en una tormenta innecesaria en alta mar. Fue una decisión prudente que todos agradecieron cuando comenzó el huracán.", 
    question: "¿Qué significa actuar de forma 'prudente'?", 
    choices: ["Tomar decisiones con mucha prisa para terminar el trabajo.", "Actuar con moderación, cautela y buen juicio para evitar daños.", "Comportarse de forma descuidada sin pensar en el peligro."], 
    correct: 1 
  },
  { 
    word: "eficiente",
    paragraph: "La nueva maquinaria de la fábrica permite producir el doble de piezas utilizando la mitad de la energía eléctrica que antes. Además, el sistema detecta fallos automáticamente, evitando que se pierda material. El análisis de producción demostró que el nuevo método es muy eficiente.", 
    question: "¿Qué define a un proceso 'eficiente'?", 
    choices: ["Un sistema que desperdicia recursos para lograr un objetivo.", "Realizar una tarea de forma muy lenta pero segura.", "Lograr el fin deseado utilizando el mínimo de recursos posibles."], 
    correct: 2 
  },
  { 
    word: "intrínseco",
    paragraph: "Aunque nunca tomó clases de música, el niño podía reproducir cualquier melodía en el piano con solo escucharla una vez. Sus padres se dieron cuenta de que su facilidad para el ritmo no era algo aprendido en una escuela. Su talento es intrínseco y forma parte de su identidad desde el nacimiento.", 
    question: "¿Qué es algo 'intrínseco'?", 
    choices: ["Algo esencial o interno, que no depende de lo externo.", "Un talento falso que se muestra para engañar a otros.", "Un conocimiento externo que se adquiere con mucha práctica."], 
    correct: 0 
  },
  { 
    word: "irreversible",
    paragraph: "El derrame de químicos en el pequeño lago eliminó a todas las especies de peces que habían vivido allí por siglos. Los biólogos explicaron que, debido a la toxicidad del suelo, la vida acuática original nunca volverá a crecer. Lamentablemente, el daño causado es irreversible.", 
    question: "¿Qué significa que un daño sea 'irreversible'?", 
    choices: ["Algo que no tiene vuelta atrás y no se puede recuperar.", "Una situación que se puede cambiar o mejorar con el tiempo.", "Un cambio temporal que solo dura unos pocos días."], 
    correct: 0 
  },
  { 
    word: "absoluta",
    paragraph: "El científico presentó las leyes de la gravedad como un hecho que ocurre de la misma manera en cualquier rincón del universo. No importa el idioma o la cultura, los objetos siempre caen hacia el centro del planeta. Para él, esta es una verdad absoluta que no admite ninguna duda.", 
    question: "¿Qué es una verdad 'absoluta'?", 
    choices: ["Una idea dudosa que cambia según el día de la semana.", "Algo que es entero, total y sin restricciones ni condiciones.", "Una opinión parcial que solo algunas personas aceptan."], 
    correct: 1 
  },
  { 
    word: "sistemático",
    paragraph: "Para organizar la biblioteca, el bibliotecario decidió seguir un manual que clasificaba los libros primero por tema y luego por autor. No dejaba ningún libro al azar, asegurándose de que cada estante tuviera una lógica clara. El proceso es sistemático y permite encontrar cualquier obra en segundos.", 
    question: "En este contexto, ¿qué es un proceso 'sistemático'?", 
    choices: ["Que sigue un orden, método o sistema organizado.", "Un método aleatorio donde las cosas se colocan sin pensar.", "Algo que se hace muy rápido para ahorrar tiempo."], 
    correct: 0 
  },
  { 
    word: "altruista",
    paragraph: "El millonario decidió donar la mayor parte de su fortuna para construir hospitales en zonas pobres. No pidió que su nombre apareciera en los edificios ni buscó beneficios fiscales por su acción. Su actitud es altruista, ya que solo busca el bienestar de los más necesitados.", 
    question: "¿Cómo actúa una persona 'altruista'?", 
    choices: ["Alguien que busca el bien ajeno a costa del propio interés.", "Una acción interesada que busca una recompensa oculta.", "Una persona egoísta que solo se preocupa por su dinero."], 
    correct: 0 
  },
  { 
    word: "tangible",
    paragraph: "El detective no solo confiaba en los testimonios, sino que buscaba huellas y objetos olvidados en la escena del crimen. Finalmente, encontró un reloj roto que pertenecía al sospechoso justo debajo del sofá. Esta evidencia es tangible y será presentada en el juicio.", 
    question: "¿Qué significa que la evidencia sea 'tangible'?", 
    choices: ["Algo imaginario que solo existe en la mente.", "Una prueba falsa creada para engañar al juez.", "Que se puede tocar o percibir de manera clara y física."], 
    correct: 2 
  },
  { 
    word: "vinculante",
    paragraph: "Al firmar el contrato de alquiler, el joven aceptó pagar la renta los primeros cinco días de cada mes. El documento legal especifica que ninguna de las dos partes puede romper el trato sin pagar una multa. El acuerdo es vinculante y debe cumplirse ante la ley.", 
    question: "¿Qué implica un acuerdo 'vinculante'?", 
    choices: ["Que obliga a las partes a cumplir con lo pactado.", "Un trato opcional que las personas pueden ignorar.", "Un documento muy breve que no tiene importancia legal."], 
    correct: 0 
  },
  { 
    word: "sobrio",
    paragraph: "Para la gala de premios, el arquitecto decidió no usar trajes brillantes ni joyas llamativas. Eligió un traje negro mate de corte perfecto y una camisa blanca impecable, sin adornos. Su estilo es sobrio y destaca por su elegancia simple.", 
    question: "¿Qué es un estilo 'sobrio'?", 
    choices: ["Un diseño exagerado lleno de colores y decoraciones.", "Algo sencillo, moderado y sin adornos innecesarios.", "Un tipo de vestimenta muy cara de estilo real."], 
    correct: 1 
  },
  { 
    word: "viable",
    paragraph: "El ingeniero presentó un plan para convertir la fábrica en un centro cultural usando energía solar. Tras revisar los costos y los permisos legales, el ayuntamiento decidió que el proyecto podía realizarse. La propuesta es viable y comenzará a construirse pronto.", 
    question: "¿Qué significa que una propuesta sea 'viable'?", 
    choices: ["Algo que es totalmente imposible de realizar.", "Un plan muy difícil que nadie quiere intentar.", "Que puede llevarse a cabo porque existen medios para ello."], 
    correct: 2 
  },
  { 
    word: "recurrente",
    paragraph: "Cada vez que hay elecciones, surge la misma discusión sobre cómo mejorar el sistema de votación. Es un tema recurrente que aparece en las noticias cada cuatro años sin falta. Parece que nunca logramos llegar a una solución definitiva.", 
    question: "¿Qué define a algo 'recurrente'?", 
    choices: ["Que vuelve a ocurrir o aparecer después de un tiempo.", "Un evento único que solo sucede una vez en la vida.", "Algo totalmente nuevo que nadie había escuchado."], 
    correct: 0 
  },
  { 
    word: "inhóspito",
    paragraph: "En la cima de la montaña, el viento sopla tan fuerte que es imposible mantener una tienda en pie. No hay agua dulce ni vegetación, y las temperaturas bajan a niveles peligrosos. El clima es inhóspito y no es apto para vivir.", 
    question: "¿Cómo es un lugar 'inhóspito'?", 
    choices: ["Un sitio acogedor donde todos quieren ir de vacaciones.", "Lugar incómodo, poco seguro o nada acogedor.", "Un ambiente lleno de luz y temperatura agradable."], 
    correct: 1 
  },
  { 
    word: "ambigua",
    paragraph: "Cuando le preguntaron si aceptaría el cargo, su contestación no fue ni un 'sí' ni un 'no' claros. Dijo que 'dependería de factores futuros', dejando a todos con muchas dudas. Su respuesta fue ambigua y generó confusión en el equipo.", 
    question: "¿Qué caracteriza a una respuesta 'ambigua'?", 
    choices: ["Una respuesta clara que todos entienden enseguida.", "Algo que puede entenderse o interpretarse de varias formas.", "Una explicación directa que no deja lugar a dudas."], 
    correct: 1 
  },
  { 
    word: "inalienable",
    paragraph: "La constitución establece que la libertad de expresión es fundamental para la dignidad humana. Nadie, ni siquiera el gobierno, tiene el poder de prohibir que un ciudadano piense libremente. Es un derecho inalienable que nace con cada persona.", 
    question: "¿Qué significa que algo sea 'inalienable'?", 
    choices: ["Que no se puede enajenar, ceder ni quitar a su dueño.", "Algo renunciable que se puede vender por dinero.", "Un derecho temporal que caduca con el tiempo."], 
    correct: 0 
  },
  { 
    word: "efímero",
    paragraph: "El video se volvió viral en las redes sociales y millones de personas lo vieron en una hora. Sin embargo, para el día siguiente, nadie recordaba de qué se trataba ni quién lo publicó. El éxito fue efímero y desapareció rápido.", 
    question: "¿Qué define a algo 'efímero'?", 
    choices: ["Un éxito total que cambia la vida para siempre.", "Algo que dura por muchos siglos en la memoria.", "Que tiene una duración muy corta o es pasajero."], 
    correct: 2 
  },
  { 
    word: "conciso",
    paragraph: "El profesor nos pidió un resumen de la historia que no tuviera más de dos párrafos. Quería que explicáramos los hechos sin perder tiempo en detalles secundarios. Su propio discurso fue conciso y directo.", 
    question: "¿Cómo es un mensaje 'conciso'?", 
    choices: ["Que es breve y preciso, sin usar palabras de más.", "Un texto muy largo que toma horas terminar de leer.", "Una explicación vaga donde no se entiende el punto."], 
    correct: 0 
  },
  { 
    word: "estratégico",
    paragraph: "Para ganar el juego, el entrenador cambió la formación del equipo en el último minuto. Colocó a los jugadores más rápidos en las bandas para sorprender al rival. El plan es estratégico y busca la victoria mediante la inteligencia.", 
    question: "¿Qué significa que un plan sea 'estratégico'?", 
    choices: ["Algo improvisado que se hace sin pensar.", "Habilidad para dirigir un asunto y lograr un fin.", "Un proceso muy lento que no tiene objetivo."], 
    correct: 1 
  },
  { 
    word: "arbitraria",
    paragraph: "El jefe decidió despedir al empleado solo porque no le gustaba cómo caminaba ese día. No hubo ninguna falta al reglamento ni una razón profesional para esa medida. Es una decisión arbitraria basada únicamente en su humor.", 
    question: "¿Qué es una acción 'arbitraria'?", 
    choices: ["Una decisión justa que sigue las leyes.", "Un proceso lógico que beneficia a todos.", "Algo basado en el capricho y no en la ley o la razón."], 
    correct: 2 
  },
  { 
    word: "inquebrantable",
    paragraph: "A pesar de que le ofrecieron dinero para traicionar a su empresa, el secretario se negó. Él prometió proteger los secretos de su equipo y no pensaba romper su palabra. Su lealtad es inquebrantable y digna de confianza.", 
    question: "¿Cómo es algo 'inquebrantable'?", 
    choices: ["Algo que no se puede doblegar, torcer ni romper.", "Una voluntad débil que cambia con facilidad.", "Una promesa falsa que se hace por compromiso."], 
    correct: 0 
  },
  { 
    word: "exhaustivo",
    paragraph: "Para entender la enfermedad, los científicos analizaron cada célula y el aire de la casa del paciente. No dejaron ningún factor sin investigar durante meses de trabajo. El estudio es exhaustivo y muy completo.", 
    question: "¿Qué significa que un estudio sea 'exhaustivo'?", 
    choices: ["Un análisis superficial que solo mira lo obvio.", "Algo que agota todos los puntos de un tema, completo.", "Un trabajo muy rápido que se hace sin cuidado."], 
    correct: 1 
  },
  { 
    word: "determinante",
    paragraph: "La falta de lluvia durante el invierno hizo que el precio de la comida subiera mucho. Sin agua, las cosechas se perdieron y no hubo suficiente oferta. La sequía fue un factor determinante en la crisis actual.", 
    question: "¿Qué es algo 'determinante'?", 
    choices: ["Algo que decide o fija lo que va a ocurrir.", "Un factor secundario que no influye en nada.", "Un elemento dudoso que no tiene importancia."], 
    correct: 0 
  },
  { 
    word: "ubicuo",
    paragraph: "Hoy en día, es casi imposible encontrar un lugar sin acceso a internet o teléfonos. En los aviones, en el campo e incluso en el océano, la red está presente. La tecnología es ubicua y está en todas partes.", 
    question: "¿Qué significa que algo sea 'ubicuo'?", 
    choices: ["Un invento nuevo que todavía no se ha probado.", "Algo que está presente en todas partes al mismo tiempo.", "Una tecnología rara que solo pocos pueden usar."], 
    correct: 1 
  },
  { 
    word: "analítica",
    paragraph: "Antes de actuar, ella siempre divide el problema en partes pequeñas para entenderlo mejor. No se deja llevar por las emociones, sino que usa la lógica y los datos. Su mente es analítica y busca la raíz de las cosas.", 
    question: "¿Cómo funciona una mente 'analítica'?", 
    choices: ["Un pensamiento simple que no requiere esfuerzo.", "Alguien desorganizado que no sabe qué hacer.", "Que descompone un todo en sus partes para entenderlo."], 
    correct: 2 
  },
  { 
    word: "subjetivo",
    paragraph: "Para algunos, esa pintura es una obra maestra, mientras que para otros son solo manchas. Esto sucede porque la belleza depende de los ojos de quien la mira. El arte es subjetivo y se basa en sentimientos personales.", 
    question: "¿Qué significa que algo sea 'subjetivo'?", 
    choices: ["Que se basa en los sentimientos o la opinión personal.", "Algo objetivo que se puede medir con una regla.", "Una realidad realista que todos ven igual."], 
    correct: 0 
  },
  { 
    word: "carismático",
    paragraph: "En cuanto el líder entró, todos dejaron de hablar para escucharlo con atención. Tiene una forma de hablar que hace que la gente confíe en él de inmediato. Es un líder carismático que fascina a las personas.", 
    question: "¿Qué define a alguien 'carismático'?", 
    choices: ["Alguien aburrido que no genera interés.", "Que tiene una capacidad natural para atraer o fascinar.", "Una persona muy seria que nunca habla con nadie."], 
    correct: 1 
  },
  { 
    word: "imperativa",
    paragraph: "El juez explicó que el pago de impuestos no es algo que los ciudadanos elijan hacer. El reglamento obliga a todos a contribuir para los servicios públicos. La ley es imperativa y de cumplimiento obligatorio.", 
    question: "¿Qué implica que una norma sea 'imperativa'?", 
    choices: ["Una regla vieja que ya no tiene importancia.", "Un mandato opcional que se puede ignorar.", "Que manda, exige o es de cumplimiento forzoso."], 
    correct: 2 
  },
  { 
    word: "legítimo",
    paragraph: "El historiador demostró que la familia tenía los papeles reales que los hacían dueños. Todas las firmas eran verdaderas y el proceso fue legal y transparente. Su éxito es legítimo y respaldado por la justicia.", 
    question: "¿Qué significa que algo sea 'legítimo'?", 
    choices: ["Algo ilegal obtenido mediante engaños.", "Conforme a las leyes, a la justicia o a la razón.", "Que es falso y creado para estafar a otros."], 
    correct: 1 
  },
  { 
    word: "inminente",
    paragraph: "El cielo se puso negro y las sirenas de emergencia empezaron a sonar en el pueblo. El tornado llegaría en pocos minutos y debíamos buscar refugio ya. El peligro es inminente y está a punto de suceder.", 
    question: "¿Qué significa que algo es 'inminente'?", 
    choices: ["Algo que está a punto de suceder o muy próximo.", "Un evento lejano que tardará muchos años.", "Una situación dudosa que probablemente nunca pase."], 
    correct: 0 
  },
  { 
    word: "fructífera",
    paragraph: "Los dos días de trabajo entre los médicos terminaron con la creación de una medicina nueva. Todos aportaron ideas valiosas y el resultado beneficiará a muchos. La reunión fue fructífera y dio grandes resultados.", 
    question: "¿Cómo es una actividad 'fructífera'?", 
    choices: ["Un evento inútil donde no se decidió nada.", "Una charla larga que solo hizo perder el tiempo.", "Que produce frutos, resultados o beneficios."], 
    correct: 2 
  }
],

  // NIVEL 5: Vocabulario de Alto Nivel (SAT/GRE)
5: [
    { 
        word: "badinaje", 
        paragraph: "A pesar de la tensión, el embajador logró relajar el ambiente con un badinaje ligero antes de la reunión. Sus bromas inteligentes y juegos de palabras festivos permitieron que ambas partes bajaran la guardia.", 
        question: "¿Qué es el 'badinaje'?", 
        choices: ["Una discusión violenta y agresiva", "Una broma, burla o juego de palabras festivo", "Un silencio sepulcral e incómodo"], 
        correct: 1 
    },
    { 
        word: "melifluo", 
        paragraph: "El vendedor utilizaba halagos melifluos para convencer a los clientes. Su voz era tan excesivamente dulce que, después de un tiempo, empezaba a sonar falsa y empalagosa.", 
        question: "¿Qué significa que algo sea 'melifluo'?", 
        choices: ["Dulce en exceso, a veces con una suavidad fingida", "Rudo y directo al hablar", "Difícil de comprender por su complejidad"], 
        correct: 0 
    },
    { 
        word: "invectivar", 
        paragraph: "En su última columna, el periodista decidió invectivar contra los responsables del desfalco. No escatimó en palabras duras para censurar la falta de ética de los implicados.", 
        question: "¿Qué implica 'invectivar'?", 
        choices: ["Apoyar una causa públicamente", "Censurar o hablar con dureza contra alguien", "Ignorar la situación por completo"], 
        correct: 1 
    },
    { 
        word: "kitsch", 
        paragraph: "La mansión estaba decorada con figuras de plástico dorado y cuadros de colores chillones. La mayoría de los invitados pensaban que el lugar estaba lleno de objetos kitsch de mal gusto.", 
        question: "¿Cómo se define lo 'kitsch'?", 
        choices: [ "Una estética pretenciosa, cursi o de mal gusto", "Un estilo elegante y minimalista", "Un diseño simple y funcional"], 
        correct: 0
    },
    { 
        word: "litoral", 
        paragraph: "Debido al derrame de petróleo, todas las aves que anidaban en el litoral han muerto. Los biólogos están preocupados por la contaminación en la costa del mar.", 
        question: "¿Qué región es el 'litoral'?", 
        choices: ["Una zona de alta montaña", "La orilla o costa de un mar", "Un bosque espeso y alejado"], 
        correct: 1 
    },
    { 
        word: "sensiblero", 
        paragraph: "La película abusaba de escenas con música lenta y despedidas bajo la lluvia. Al final, el guion resultó tan sensiblero que la emoción pareció forzada y falsa.", 
        question: "¿Qué es algo 'sensiblero'?", 
        choices: ["Que muestra un sentimentalismo excesivo o cursi", "Un enfoque racional y frío", "Un relato aburrido sin emociones"], 
        correct: 0 
    },
    { 
        word: "pátina", 
        paragraph: "La antigua moneda de cobre presentaba una pátina verde. Los coleccionistas saben que esa capa fina indica que el objeto es auténtico y muy antiguo.", 
        question: "¿Qué es una 'pátina'?", 
        choices: ["Una grieta profunda en el metal", "Un brillo nuevo de fábrica", "Una capa fina formada por el tiempo o el uso"], 
        correct: 2 
    },
    { 
        word: "penuria", 
        paragraph: "Tras la quiebra del banco, miles de familias perdieron sus ahorros y cayeron en la penuria. No tenían dinero ni para cubrir las necesidades más básicas.", 
        question: "¿Qué define a la 'penuria'?", 
        choices: ["Un estado de riqueza absoluta", "Un sentimiento de alegría profunda", "Escasez extrema de lo necesario, como comida"], 
        correct: 2 
    },
    { 
        word: "pírrica", 
        paragraph: "El ejército conquistó la colina pero perdió al ochenta por ciento de sus hombres. Aunque ganaron el territorio, fue una victoria pírrica que se sintió como una derrota.", 
        question: "¿Qué es una victoria 'pírrica'?", 
        choices: ["Un triunfo donde el daño es mayor al beneficio", "Un triunfo fácil sin ningún esfuerzo", "Una derrota humillante ante el enemigo"], 
        correct: 0 
    },
    { 
        word: "saturnino", 
        paragraph: "Desde que perdió su trabajo, el carácter de Roberto se volvió saturnino. Pasaba los días solo y mostraba una expresión de melancolía constante.", 
        question: "¿Cómo es una persona 'saturnina'?", 
        choices: ["Alguien alegre y muy optimista", "De carácter sombrío, melancólico o triste", "Una persona habladora y social"], 
        correct: 1 
    },
    { 
        word: "serreadas", 
        paragraph: "Los guardias avanzaban en filas serreadas, moviéndose como un bloque. No había ni un centímetro de espacio entre un soldado y otro.", 
        question: "¿Qué significa que estén 'serreadas'?", 
        choices: ["Filas dispersas y desorganizadas", "Elementos puestos muy juntos o apretados", "Soldados que caminan sin uniforme"], 
        correct: 1 
    },
    { 
        word: "estigia", 
        paragraph: "Al apagar la linterna, los exploradores quedaron sumidos en una oscuridad estigia. No se veía absolutamente nada en esa cueva profunda e infernal.", 
        question: "¿Qué describe algo 'estigio'?", 
        choices: ["Un lugar muy iluminado", "Un ambiente cálido y acogedor", "Una oscuridad profunda, tenebrosa o infernal"], 
        correct: 2 
    },
    { 
        word: "turpitud", 
        paragraph: "El político fue expulsado por su turpitud moral. El juez mencionó que su bajeza y falta de ética habían dañado irreversiblemente la confianza pública.", 
        question: "¿Qué es la 'turpitud'?", 
        choices: ["Una virtud digna de ser celebrada", "Cualidad de infame, bajeza o fealdad moral", "Una habilidad técnica excepcional"], 
        correct: 1 
    },
    { 
        word: "afligido", 
        paragraph: "Su rostro afligido mostraba el pesar que sentía tras la noticia. No podía ocultar la tristeza que lo consumía por dentro.", 
        question: "¿Qué significa estar 'afligido'?", 
        choices: ["Estar lleno de pesar, tristeza o dolor", "Sentirse emocionado por un evento", "Estar cansado físicamente"], 
        correct: 0 
    },
    { 
        word: "alacridad", 
        paragraph: "En cuanto se anunció el voluntariado, aceptó el desafío con alacridad. Su prontitud y ánimo alegre motivaron a todo el grupo a empezar de inmediato.", 
        question: "¿Qué demuestra alguien con 'alacridad'?", 
        choices: ["Una pereza extrema para actuar", "Prontitud, rapidez y ánimo alegre", "Mucho miedo ante un reto nuevo"], 
        correct: 1 
    },
    { 
        word: "anatema", 
        paragraph: "Para ese grupo religioso, la traición a sus principios es un anatema. Es algo maldito y rechazado por todos los miembros de la comunidad.", 
        question: "¿Qué es un 'anatema'?", 
        choices: ["Una bendición especial", "Una tradición familiar antigua", "Algo maldito, rechazado o digno de exclusión"], 
        correct: 2 
    },
    { 
        word: "bruñir", 
        paragraph: "El abogado tuvo que trabajar duro para bruñir su reputación después del escándalo. Necesitaba pulir su imagen para volver a ser respetado.", 
        question: "¿Qué significa 'bruñir'?", 
        choices: ["Dañar o ensuciar algo", "Ocultar la verdad a propósito", "Pulir, dar brillo o mejorar la apariencia"], 
        correct: 2 
    },
    { 
        word: "chicanerías", 
        paragraph: "Utilizó chicanerías legales para retrasar el juicio durante años. Esas artimañas y engaños desesperaron a los demandantes que buscaban justicia.", 
        question: "¿Qué son las 'chicanerías'?", 
        choices: ["Actos de honestidad absoluta", "Artimañas, enredos o engaños para ganar tiempo", "Métodos rápidos y eficientes"], 
        correct: 1 
    },
    { 
        word: "desuetudo", 
        paragraph: "Esa vieja ley sobre el transporte de carbón cayó en desuetudo hace décadas. Al ser una costumbre en desuso, ya nadie la aplica ni la recuerda.", 
        question: "¿Qué es el 'desuetudo'?", 
        choices: ["El desuso o falta de vigencia de una ley", "El uso constante de una norma", "El vigor y fuerza de una regla"], 
        correct: 0 
    },
    { 
        word: "enervar", 
        paragraph: "Caminar bajo el sol del desierto lograba enervar a los expedicionarios. El calor extremo les quitaba las fuerzas y los dejaba completamente debilitados.", 
        question: "¿Qué significa 'enervar'?", 
        choices: ["Debilitar o quitar las fuerzas a alguien", "Fortalecer los músculos", "Enfriar el cuerpo rápidamente"], 
        correct: 0 
    },
    { 
        word: "fastidioso", 
        paragraph: "Es un jefe muy meticuloso y fastidioso con el orden de los archivos. Es tan exigente y difícil de complacer que nadie quiere trabajar con él.", 
        question: "¿Cómo es alguien 'fastidioso' en este contexto?", 
        choices: ["Alguien descuidado con su trabajo", "Muy exigente, difícil de complacer o molesto", "Una persona alegre y relajada"], 
        correct: 1 
    },
    { 
        word: "hibris", 
        paragraph: "Su hibris lo llevó a creer que era invencible y que no necesitaba escuchar a nadie. Ese orgullo excesivo fue, finalmente, la causa de su caída.", 
        question: "¿Qué es la 'hibris'?", 
        choices: ["Orgullo, soberbia o arrogancia excesiva","Una humildad profunda", "Una sabiduría ganada con los años"], 
        correct: 0 
    },
    { 
        word: "incoado", 
        paragraph: "El proyecto de construcción está en un estado incoado. Apenas se han puesto los cimientos y todavía está muy incompleto.", 
        question: "¿Qué significa 'incoado'?", 
        choices: ["Que ya está terminado y listo", "Que está recién empezado o incompleto", "Que es un diseño perfecto"], 
        correct: 1 
    },
    { 
        word: "locuaz", 
        paragraph: "Su carácter locuaz lo hacía el centro de todas las conversaciones. Siempre tenía algo que decir y hablaba muchísimo durante toda la noche.", 
        question: "¿Cómo es una persona 'locuaz'?", 
        choices: ["Alguien muy callado y reservado", "Que habla mucho o demasiado", "Una persona triste y silenciosa"], 
        correct: 1 
    },
    { 
        word: "mendaz", 
        paragraph: "El juez descubrió que el testimonio del testigo fue mendaz. Al ser una declaración mentirosa, no pudo utilizarse para dictar la sentencia.", 
        question: "¿Qué significa 'mendaz'?", 
        choices: ["Alguien sincero y honesto", "Un testimonio muy útil", "Que miente o es falso"], 
        correct: 2 
    },
    { 
        word: "nefario", 
        paragraph: "Fue condenado a cadena perpetua por sus actos nefarios. Sus crímenes fueron tan sumamente malvados que conmocionaron a todo el país.", 
        question: "¿Qué es algo 'nefario'?", 
        choices: ["Un acto heroico y valiente", "Una decisión justa y equilibrada", "Sumamente malvado, impío o infame"], 
        correct: 2 
    },
    { 
        word: "obsequioso", 
        paragraph: "Se mostró exageradamente obsequioso con el director de la empresa. Era tan servicial y atento que todos sabían que solo buscaba un ascenso.", 
        question: "¿Qué es ser 'obsequioso'?", 
        choices: ["Ser grosero con los superiores", "Excesivamente atento, rendido o servil", "Mostrarse indiferente ante los demás"], 
        correct: 1 
    },
    { 
        word: "parsimonia", 
        paragraph: "Su parsimonia le impedía gastar dinero incluso en las reparaciones necesarias de su casa. Su tacañería era conocida por todos sus vecinos.", 
        question: "¿Qué implica la 'parsimonia' aquí?", 
        choices: ["Una generosidad sin límites", "Tacañería, mezquindad o lentitud extrema", "Un lujo innecesario"], 
        correct: 1 
    },
    { 
        word: "querulante", 
        paragraph: "El cliente estaba querulante tras esperar una hora por su comida. Se quejaba constantemente con cada camarero que pasaba por su mesa.", 
        question: "¿Cómo es alguien 'querulante'?", 
        choices: ["Que se queja constantemente o tiene manía de quejarse", "Un cliente satisfecho y amable", "Alguien que prefiere comer en silencio"], 
        correct: 0 
    },
    { 
        word: "reticente", 
        paragraph: "Se mostró reticente a dar los detalles del nuevo plan de seguridad. Parecía reservado y daba la impresión de que estaba ocultando algo importante.", 
        question: "¿Qué es estar 'reticente'?", 
        choices: ["Mostrarse reservado o que calla algo a propósito", "Estar muy entusiasmado por hablar", "Ser totalmente sincero y abierto"], 
        correct: 0 
    }
]





}
