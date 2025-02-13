function showSection(section, background) {
  document.getElementById('main-buttons').classList.add('hidden'); // Hide main buttons
  document.getElementById('main-title').classList.add('hidden'); // Hide main buttons
  
  // Hide all sections first
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  section.classList.remove('hidden'); // Show selected section

  // Hide all backgrounds and show only the selected one
  document.querySelectorAll('.background-container div').forEach(bg => bg.classList.add('hidden'));
  background.classList.remove('hidden');
}


document.addEventListener('DOMContentLoaded', () => {


  //Buttons action
  const anniversaryButton = document.getElementById('anniversary-button');
  
  const versicleButton = document.getElementById('versicle-button');
  
  const playlistButton = document.getElementById('playlist-button');
 
  const BoardOfDirectorsButton = document.getElementById('boardOfDirectors-button');
  
  const ValentineButton = document.getElementById('valentine-button');
  


  //Images and gradients
  const poohBackground = document.getElementById('background-pooh');
  
  const gradientBackground = document.getElementById('background-gradient');
  
  const anniversaryBackground = document.getElementById('anniversary-background');
  
  const playlistBackground = document.getElementById('playlist-background');
  
  const boardOfDirectorsBackground = document.getElementById('boardOfDirectors-background');
  
  const boardOfDirectors = document.getElementById('boardOfDirectors-section');

  const ValentineBackground = document.getElementById('valentine-background');
  
  //buttons to hide
  const Buttons = document.getElementById('main-buttons');
  
  const Playlist = document.getElementById('playlist');

 
  
 
  // Anniversary Button
  anniversaryButton.addEventListener('click', () => {
    showSection(document.getElementById('timer-section'), anniversaryBackground);
    startLiveCountdown(); // Start the countdown timer
  });
  
  // Daily Verse Button
  versicleButton.addEventListener('click', () => {
    showSection(document.getElementById('versicle-section'), gradientBackground );
    loadDailyVersicle();
  });

  // Playlist Button
  playlistButton.addEventListener('click', () => {
    showSection(document.getElementById('playlist-section'), playlistBackground);
  });

  // Board of Directors Button
  BoardOfDirectorsButton.addEventListener('click', () => {
    showSection(document.getElementById('directors-section'), boardOfDirectorsBackground);
  });
  
    // List of images for "Yes"
  const valentineImages = [
    "images/valentine1.jpg", // Replace with your actual image paths
    "images/valentine2.jpg",
    "images/valentine3.jpg"
  ];

  // Variable to track the current index of image
  let imageIndex = 0;

  // Variable to track the number of incorrect clicks
  let incorrectClickCount = 0;

  // Show Valentine Section when clicking the button
  document.getElementById("valentine-button").addEventListener("click", () => {
    showSection(document.getElementById('valentine-section'), ValentineBackground); 
  });

  // Show Image for "Yes" button click
  document.getElementById("yes-button").addEventListener("click", () => {
    // Display the image container
    const imageContainer = document.getElementById("image-container");
    const valentineImage = document.getElementById("valentine-image");

    // Update the image source
    valentineImage.src = valentineImages[imageIndex];

    // Show the image container
    imageContainer.classList.remove("hidden");

    // Update the image index, cycling through the images
    imageIndex = (imageIndex + 1) % valentineImages.length;

    // Hide the "Incorrect answer" banner if it's visible
    const incorrectMessage = document.getElementById("incorrect-message");
    incorrectMessage.classList.add("hidden");

    // Reset incorrect click count
    incorrectClickCount = 0;
    incorrectMessage.classList.remove("incorrect-size");
  });

   // Event listener for the "No" button
  document.getElementById('no-button').addEventListener('click', () => {
      const incorrectMessage = document.getElementById('incorrect-message'); // The incorrect message element
      const imageContainer = document.getElementById('image-container'); // The image container
      
      incorrectMessage.classList.remove('hidden'); // Make the message visible
      imageContainer.classList.add('hidden'); // Hide the image container when clicking "No"
  
      // Increase the font size on the first three clicks
      incorrectClickCount++;
  
      if (incorrectClickCount <= 1) {
          incorrectMessage.classList.add('incorrect-size'); // Apply size increase
      }
  
      // After three clicks, reset the size and click count
      if (incorrectClickCount === 1) {
          setTimeout(() => {
              incorrectMessage.classList.remove('incorrect-size'); // Reset size
              incorrectClickCount = 0; // Reset the click counter
          }, 300); // Small delay for smooth transition
      }
  });



 
});
  
 

  // Reset to Main Menu when clicking the menu icon
  document.getElementById('menu').addEventListener('click', () => {
    document.getElementById('main-buttons').classList.remove('hidden'); // Show main buttons
    document.getElementById('main-title').classList.remove('hidden'); // Show title
    
    // Hide all sections
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));

    // Specifically hide Valentine and Versicle sections as well
    document.getElementById('versicle-section').classList.add('hidden');
    document.getElementById('valentine-section').classList.add('hidden');

    // Reset backgrounds
    document.querySelectorAll('.background-container div').forEach(bg => bg.classList.add('hidden'));

    // Make sure poohBackground and gradientBackground exist before modifying classes
    const poohBackground = document.getElementById('background-pooh');
    const gradientBackground = document.getElementById('background-gradient');

    if (poohBackground) poohBackground.classList.remove('hidden');
    if (gradientBackground) gradientBackground.classList.remove('hidden');
  });







// Function to start the live countdown
function startLiveCountdown() {
  const anniversaryDateUTC = new Date(Date.UTC(2025, 4, 19, 0, 0, 0)); // May 19, 2025, at 00:00 UTC

  function updateTimer() {
    const now = new Date(); // Get the current local time
    const diff = anniversaryDateUTC - now; // Calculate the difference in milliseconds

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      // Display full countdown
      document.getElementById('countdown-timer').textContent = 
        `${days} day${days !== 1 ? 's' : ''}, ` +
        `${hours} hour${hours !== 1 ? 's' : ''}, ` +
        `${minutes} minute${minutes !== 1 ? 's' : ''}, ` +
        `${seconds} second${seconds !== 1 ? 's' : ''} left.`;
    } else {
      clearInterval(timerInterval); // Stop the timer after the anniversary
      document.getElementById('countdown-timer').textContent = "Happy Anniversary! 🎉"; // Placeholder text, you can add a card here
    }
  }

  updateTimer(); // Run immediately to show initial value
  const timerInterval = setInterval(updateTimer, 1000); // Update every second
}

// Versicles array as objects
const versicles = [
  { number: 1, reference: "Salmo 23:4", content: "Aunque pase por valle de sombra de muerte, no temeré mal alguno, porque tú estás conmigo; tu vara y tu cayado me infundirán aliento." },
  { number: 2, reference: "Mateo 11:28", content: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar." },
  { number: 3, reference: "Filipenses 4:13", content: "Todo lo puedo en Cristo que me fortalece." },
  { number: 4, reference: "Juan 3:16", content: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." },
  { number: 5, reference: "Romanos 8:28", content: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados." },
  { number: 6, reference: "Isaías 40:31", content: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán." },
  { number: 7, reference: "Proverbios 3:5", content: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia." },
  { number: 8, reference: "Salmo 23:1", content: "Jehová es mi pastor; nada me faltará." },
  { number: 9, reference: "Juan 14:6", content: "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí." },
  { number: 10, reference: "Romanos 12:2", content: "No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta." },
  { number: 11, reference: "Salmo 46:1", content: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones." },
  { number: 12, reference: "2 Corintios 5:17", content: "De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas." },
  { number: 13, reference: "Salmo 18:2", content: "Jehová, roca mía y castillo mío, y mi libertador; Dios mío, fortaleza mía." },
  { number: 14, reference: "Proverbios 4:23", content: "Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida." },
  { number: 15, reference: "Salmo 91:1", content: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente." },
  { number: 16, reference: "Isaías 41:10", content: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia." },
  { number: 17, reference: "Filipenses 4:6-7", content: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias; y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús." },
  { number: 18, reference: "Jeremías 29:11", content: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz y no de mal, para daros el fin que esperáis." },
  { number: 19, reference: "1 Corintios 13:13", content: "Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor." },
  { number: 20, reference: "Hebreos 13:8", content: "Jesucristo es el mismo ayer, y hoy, y por los siglos." },
  { number: 21, reference: "Mateo 11:28", content: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar." },
  { number: 22, reference: "Romanos 5:1", content: "Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo." },
  { number: 23, reference: "Apocalipsis 21:4", content: "Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor; porque las primeras cosas pasaron." },
  { number: 24, reference: "Juan 16:33", content: "Estas cosas os he hablado para que en mí tengáis paz. En el mundo tendréis aflicción; pero confiad, yo he vencido al mundo." },
  { number: 25, reference: "Salmo 119:105", content: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino." },
  { number: 26, reference: "Isaías 55:8-9", content: "Porque mis pensamientos no son vuestros pensamientos, ni vuestros caminos mis caminos, dijo Jehová; como son más altos los cielos que la tierra, así son mis caminos más altos que vuestros caminos, y mis pensamientos más que vuestros pensamientos." },
  { number: 27, reference: "Eclesiastés 3:1", content: "Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora." },
  { number: 28, reference: "1 Juan 4:19", content: "Nosotros le amamos a él, porque él nos amó primero." },
  { number: 29, reference: "2 Corintios 12:9", content: "Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo." },
  { number: 30, reference: "Salmo 34:8", content: "Gustad, y ved que es bueno Jehová; dichoso el hombre que confía en él." },
  { number: 31, reference: "Salmo 118:24", content: "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él." },
  { number: 32, reference: "Mateo 6:33", content: "Pero buscad primero el reino de Dios y su justicia, y todas estas cosas os serán añadidas." },
  { number: 33, reference: "Lucas 1:37", content: "Porque nada hay imposible para Dios." },
  { number: 34, reference: "Romanos 8:31", content: "¿Qué, pues, diremos a esto? Si Dios es por nosotros, ¿quién contra nosotros?" },
  { number: 35, reference: "2 Timoteo 1:7", content: "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio." },
  { number: 36, reference: "Proverbios 3:6", content: "Reconócelo en todos tus caminos, y él enderezará tus veredas." },
  { number: 37, reference: "Juan 8:12", content: "Otra vez Jesús les habló, diciendo: Yo soy la luz del mundo; el que me sigue no andará en tinieblas, sino que tendrá la luz de la vida." },
  { number: 38, reference: "Mateo 28:20", content: "Enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén." },
  { number: 39, reference: "Salmo 23:3", content: "Restaurará mi alma; me guiará por sendas de justicia por amor de su nombre." },
  { number: 40, reference: "Isaías 40:29", content: "El da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas." },
  { number: 41, reference: "Salmo 30:5", content: "Porque un momento será su ira; pero su favor dura toda la vida; por la noche durará el llanto, y a la mañana vendrá la alegría." },
  { number: 42, reference: "2 Samuel 22:31", content: "En cuanto a Dios, perfecto es su camino; acrisolada la palabra de Jehová; escudo es a todos los que en él esperan." },
  { number: 43, reference: "Salmo 55:22", content: "Echa sobre Jehová tu carga, y él te sustentará; no dejará para siempre caído al justo." },        { number: 44, reference: "Isaías 41:13", content: "Porque yo Jehová soy tu Dios, quien te sostiene de tu mano derecha, y te dice: No temas, yo te ayudo." },
  { number: 45, reference: "Romanos 8:39", content: "Ni lo alto, ni lo bajo, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios, que es en Cristo Jesús Señor nuestro." },
  { number: 46, reference: "Salmo 37:4", content: "Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón." },
  { number: 47, reference: "Proverbios 18:10", content: "Torre fuerte es el nombre de Jehová; a él correrá el justo, y será levantado." },
  { number: 48, reference: "Jeremías 33:3", content: "Clama a mí, y te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces." },
  { number: 49, reference: "2 Corintios 4:16", content: "Por lo cual no desmayamos; antes, aunque este nuestro hombre exterior se va desgastando, el interior no obstante se renueva de día en día." },
  { number: 50, reference: "Salmo 118:6", content: "Jehová está conmigo; no temeré lo que me pueda hacer el hombre." },
  { number: 51, reference: "Isaías 43:2", content: "Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán; cuando pases por el fuego, no te quemarás, ni la llama arderá en ti." },
  { number: 52, reference: "Juan 10:10", content: "El ladrón no viene sino para hurtar, matar y destruir; yo he venido para que tengan vida, y para que la tengan en abundancia." },
  { number: 53, reference: "Filipenses 4:19", content: "Mi Dios, pues, suplirá todo lo que os falta conforme a sus riquezas en gloria en Cristo Jesús." },
  { number: 54, reference: "1 Juan 5:14", content: "Y esta es la confianza que tenemos en él, que si pedimos alguna cosa conforme a su voluntad, él nos oye." },
  { number: 55, reference: "2 Corintios 5:21", content: "Al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él." },
  { number: 56, reference: "Salmo 1:1-2", content: "Bienaventurado el varón que no anduvo en consejo de malos, ni estuvo en camino de pecadores, ni en silla de escarnecedores se ha sentado; sino que en la ley de Jehová está su delicia, y en su ley medita de día y de noche." },
  { number: 57, reference: "Hebreos 10:23", content: "Mantengamos firme la profesión de nuestra esperanza sin vacilar, porque fiel es el que prometió." },
  { number: 58, reference: "Salmo 143:8", content: "Hazme oír por la mañana tu misericordia; porque en ti he confiado; hazme saber el camino en que debo andar; porque a ti he elevado mi alma." },
  { number: 59, reference: "2 Timoteo 3:16", content: "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia." },
  { number: 60, reference: "1 Pedro 5:7", content: "Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros." },
  { number: 61, reference: "Salmo 32:8", content: "Te haré entender, y te enseñaré el camino en que debes andar; sobre ti fijaré mis ojos." },
  { number: 62, reference: "Proverbios 16:3", content: "Encomienda a Jehová tus obras, y tus pensamientos serán afirmados." },
  { number: 63, reference: "Mateo 7:7", content: "Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá." },
  { number: 64, reference: "Salmo 139:7", content: "¿A dónde me iré de tu espíritu? ¿Y a dónde huiré de tu presencia?" },
  { number: 65, reference: "Romanos 15:13", content: "Y el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por el poder del Espíritu Santo." },
  { number: 66, reference: "Isaías 55:10-11", content: "Porque como desciende de los cielos la lluvia y la nieve, y no vuelve allá, sino que riega la tierra, y la hace germinar y producir, y da semilla al que siembra, y pan al que come, así será mi palabra que sale de mi boca; no volverá a mí vacía, sino que hará lo que yo quiero, y será prosperada en aquello para lo cual la envié." },
  { number: 67, reference: "1 Juan 4:8", content: "El que no ama, no ha conocido a Dios; porque Dios es amor." },
  { number: 68, reference: "Isaías 26:3", content: "Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera; porque en ti ha confiado." },
  { number: 69, reference: "Salmo 91:11", content: "Porque a sus ángeles mandará acerca de ti, que te guarden en todos tus caminos." },
  { number: 70, reference: "Proverbios 2:6", content: "Porque Jehová da la sabiduría, y de su boca viene el conocimiento y la inteligencia." },
  { number: 71, reference: "Isaías 40:31", content: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán." },
  { number: 72, reference: "Filipenses 4:4", content: "Regocijaos en el Señor siempre. Otra vez digo: ¡Regocijaos!" },
  { number: 73, reference: "Juan 15:13", content: "Nadie tiene mayor amor que este, que uno ponga su vida por sus amigos." },
  { number: 74, reference: "Romanos 10:9", content: "Que si confiesas con tu boca que Jesús es el Señor, y crees en tu corazón que Dios le levantó de los muertos, serás salvo." },
  { number: 75, reference: "Salmo 27:1", content: "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?" },
  { number: 76, reference: "Isaías 54:17", content: "Ninguna arma forjada contra ti prosperará, y condenarás toda lengua que se levante contra ti en juicio. Esta es la herencia de los siervos de Jehová, y su salvación de mí vendrá, dijo Jehová." },
  { number: 77, reference: "Romanos 12:12", content: "Gozosos en la esperanza; sufridos en la tribulación; constantes en la oración." },
  { number: 78, reference: "Lucas 1:37", content: "Porque nada hay imposible para Dios." },
  { number: 79, reference: "Hebreos 12:2", content: "Puestos los ojos en Jesús, el autor y consumador de la fe, el cual, por el gozo puesto delante de él, sufrió la cruz, menospreciando lo propio, y se sentó a la diestra del trono de Dios." },
  { number: 80, reference: "Isaías 55:12", content: "Porque con alegría saldréis, y con paz seréis vueltos; los montes y los collados cantarán delante de vosotros, y todos los árboles del campo aplaudirán." },
  { number: 81, reference: "1 Juan 4:19", content: "Nosotros le amamos a él, porque él nos amó primero." },
  { number: 82, reference: "Salmo 23:1", content: "Jehová es mi pastor; nada me faltará." },
  { number: 83, reference: "Mateo 6:33", content: "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas." },
  { number: 84, reference: "Isaías 40:29", content: "Él da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas." },
  { number: 85, reference: "Juan 14:6", content: "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí." },
  { number: 86, reference: "Efesios 6:10", content: "Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza." },
  { number: 87, reference: "Isaías 41:10", content: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia." },
  { number: 88, reference: "2 Corintios 12:9", content: "Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por lo tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo." },
  { number: 89, reference: "Proverbios 3:5-6", content: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas." },
  { number: 90, reference: "Filipenses 1:6", content: "Estando persuadido de esto, que el que comenzó en vosotros la buena obra, la perfeccionará hasta el día de Jesucristo." },
  { number: 91, reference: "Salmo 121:1-2", content: "Alzaré mis ojos a los montes; ¿de dónde vendrá mi socorro? Mi socorro viene de Jehová, que hizo los cielos y la tierra." },
  { number: 92, reference: "Mateo 11:28", content: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar." },
  { number: 93, reference: "Lucas 12:7", content: "Pues aún vuestros cabellos están todos contados. No temáis; más valéis vosotros que muchos pajarillos." },
  { number: 94, reference: "Salmo 46:1", content: "Dios es nuestro amparo y nuestra fortaleza, nuestro pronto auxilio en las tribulaciones." },
  { number: 95, reference: "1 Corintios 10:13", content: "No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más allá de lo que podéis resistir, sino que dará también juntamente con la tentación la salida, para que podáis soportar." },
  { number: 96, reference: "Romanos 8:28", content: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados." },
  { number: 97, reference: "Isaías 41:13", content: "Porque yo Jehová soy tu Dios, quien te sostiene de tu mano derecha, y te dice: No temas, yo te ayudo." },
  { number: 98, reference: "Hebreos 13:5", content: "Sea vuestro carácter sin avaricia, contentos con lo que tenéis ahora; porque él dijo: No te dejaré, ni te desampararé." },
  { number: 99, reference: "Salmo 18:2", content: "Jehová es mi roca, y mi fortaleza, y mi libertador; mi Dios, mi peña, en él confiaré; mi escudo, y el poder de mi salvación, mi alto refugio." },
  { number: 100, reference: "Isaías 58:11", content: "Jehová te pastoreará siempre; y en las sequías saciará tu alma, y dará fortaleza a tus huesos; serás como huerto de riego, y como manantial de aguas, cuyas aguas nunca faltan." },
  { number: 101, reference: "Salmo 55:16", content: "En cuanto a mí, a Dios clamaré, y Jehová me salvará." },
  { number: 102, reference: "2 Samuel 22:32", content: "Porque ¿quién es Dios, sino Jehová? ¿Y quién roca, sino nuestro Dios?" },
  { number: 103, reference: "Romanos 8:31", content: "¿Qué, pues, diremos a esto? Si Dios es por nosotros, ¿quién contra nosotros?" },
  { number: 104, reference: "Proverbios 4:23", content: "Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida." },
  { number: 105, reference: "Salmo 23:4", content: "Aunque pase por valle de sombra de muerte, no temeré mal alguno, porque tú estás conmigo; tu vara y tu cayado me infundirán aliento." },
  { number: 106, reference: "Juan 14:27", content: "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo." },
  { number: 107, reference: "Salmo 119:105", content: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino." },
  { number: 108, reference: "Filipenses 4:6", content: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias." },
  { number: 109, reference: "Salmo 63:3", content: "Porque mejor es tu misericordia que la vida; mis labios te alabarán." },
  { number: 110, reference: "Mateo 5:14", content: "Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder." },
  { number: 111, reference: "Romanos 15:13", content: "Y el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por el poder del Espíritu Santo." },
  { number: 112, reference: "Salmo 16:11", content: "Me mostrarás la senda de la vida; en tu presencia hay plenitud de gozo; delicias a tu diestra para siempre." },
  { number: 113, reference: "Isaías 26:4", content: "Confiad en Jehová perpetuamente, porque en Jehová el Señor está la fortaleza de los siglos." },
  { number: 114, reference: "2 Corintios 5:7", content: "Porque por fe andamos, no por vista." },
  { number: 115, reference: "Salmo 121:3", content: "No dará tu pie al resbaladero, ni se dormirá el que te guarda." },
  { number: 116, reference: "Juan 3:16", content: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." },
  { number: 117, reference: "Isaías 41:10", content: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia." },
  { number: 118, reference: "Romanos 12:2", content: "No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta." },
  { number: 119, reference: "Salmo 34:18", content: "Cerca está Jehová de los quebrantados de corazón; y salva a los contritos de espíritu." },
  { number: 120, reference: "Proverbios 3:7", content: "No seas sabio en tu propia opinión; teme a Jehová, y apártate del mal." },
  { number: 121, reference: "Juan 10:28", content: "Y yo les doy vida eterna; y no perecerán jamás, ni nadie las arrebatará de mi mano." },
  { number: 122, reference: "Isaías 43:19", content: "He aquí que yo hago cosa nueva; pronto saldrá a luz; ¿no la conoceréis? Otra vez abriré camino en el desierto, y ríos en la soledad." },
  { number: 123, reference: "Salmo 4:8", content: "En paz me acostaré, y así mismo dormiré; porque solo tú, Jehová, me haces vivir confiado." },
  { number: 124, reference: "Filipenses 4:13", content: "Todo lo puedo en Cristo que me fortalece." },
  { number: 125, reference: "Salmo 136:1", content: "Alabad a Jehová, porque él es bueno, porque para siempre es su misericordia." },
  { number: 126, reference: "Isaías 55:6", content: "Buscad a Jehová mientras puede ser hallado, llamadle en tanto que está cercano." },
  { number: 127, reference: "Salmo 34:19", content: "Muchas son las aflicciones del justo; pero de todas ellas le librará Jehová." },
  { number: 128, reference: "Proverbios 18:10", content: "Torre fuerte es el nombre de Jehová; a él correrá el justo, y será levantado." },    { number: 129, reference: "Romanos 8:39", content: "Ni lo alto, ni lo bajo, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios, que es en Cristo Jesús Señor nuestro." },
  { number: 130, reference: "1 Pedro 5:7", content: "Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros." },
  { number: 131, reference: "Mateo 5:14", content: "Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder." },
  { number: 132, reference: "Salmo 28:7", content: "Jehová es mi fortaleza y mi escudo; en él confió mi corazón, y fui ayudado; por lo que se gozó mi corazón, y con mi cántico le alabaré." },
  { number: 133, reference: "1 Corintios 15:58", content: "Así que, hermanos míos amados, estad firmes y constantes, creciendo en la obra del Señor siempre, sabiendo que vuestro trabajo en el Señor no es en vano." },
  { number: 134, reference: "Isaías 40:31", content: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán." },
  { number: 135, reference: "Salmo 103:2", content: "Bendice, alma mía, a Jehová, y no olvides ninguno de sus beneficios." },
  { number: 136, reference: "Romanos 10:17", content: "Así que la fe es por el oír, y el oír, por la palabra de Dios." },
  { number: 137, reference: "Salmo 28:7", content: "Jehová es mi fortaleza y mi escudo; en él confió mi corazón, y fui ayudado; por lo que se gozó mi corazón, y con mi cántico le alabaré." },
  { number: 138, reference: "Salmo 23:5", content: "Aderezas mesa delante de mí en presencia de mis angustiadores; ungi mi cabeza con aceite; mi copa está rebosando." },
  { number: 139, reference: "Isaías 41:10", content: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia." },
  { number: 140, reference: "Proverbios 3:6", content: "Reconócelo en todos tus caminos, y él enderezará tus veredas." },
  { number: 141, reference: "Filipenses 4:6", content: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias." },
  { number: 142, reference: "Mateo 7:7", content: "Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá." },
  { number: 143, reference: "Salmo 51:10", content: "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí." },
  { number: 144, reference: "Salmo 25:4", content: "Muéstrame, oh Jehová, tus caminos; enséñame tus sendas." },
  { number: 145, reference: "Filipenses 1:6", content: "Estando persuadido de esto, que el que comenzó en vosotros la buena obra, la perfeccionará hasta el día de Jesucristo." },
  { number: 146, reference: "Salmo 40:1", content: "Esperé a Jehová, y él se inclinó a mí, y oyó mi clamor." } 
      
];
    

// Function to load and display the daily verse
function loadDailyVersicle() {
  const todayUTC = new Date();
  const startDate = new Date("2024-12-23"); // Set this to the start date for the year
  const dayOfYear = Math.floor((todayUTC - startDate) / (1000 * 60 * 60 * 24)) + 1; // Get the day of the year (1-146)

  if (dayOfYear > versicles.length) {
    console.log("Exceeded number of available verses.");
    return;
  }

  const selectedVerse = versicles[dayOfYear - 1]; // Get the verse for today based on the day of the year
  
  // Extract the components of the verse
  const { number, reference, content } = selectedVerse;

  // Format and display the verse
  const formattedVersicle = `
    <h3><strong>${reference}</strong></h3>
    <p>${content}</p>
  `;
  
  // Display the verse on the webpage
  const versicleBox = document.getElementById('versicle-box');
  versicleBox.innerHTML = formattedVersicle;
  versicleBox.style.whiteSpace = 'pre-wrap'; // Prevent text separation
}









