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
  const anniversaryDateUTC = new Date(Date.UTC(2026, 4, 19, 0, 0, 0)); // May 19, 2026, at 00:00 UTC

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
{ "number": 1, "reference": "Salmo 23:4", "content": "Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo; tu vara y tu cayado me infundirán aliento." },
{ "number": 2, "reference": "Mateo 11:28", "content": "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar." },
{ "number": 3, "reference": "Filipenses 4:13", "content": "Todo lo puedo en Cristo que me fortalece." },
{ "number": 4, "reference": "Juan 3:16", "content": "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." },
{ "number": 5, "reference": "Proverbios 3:5", "content": "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia." },
{ "number": 6, "reference": "Isaías 41:10", "content": "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia." },
{ "number": 7, "reference": "Romanos 8:28", "content": "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados." },
{ "number": 8, "reference": "Salmo 46:10", "content": "Estad quietos, y conoced que yo soy Dios; seré exaltado entre las naciones; enaltecido seré en la tierra." },
{ "number": 9, "reference": "Mateo 6:33", "content": "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas." },
{ "number": 10, "reference": "Jeremías 29:11", "content": "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis." },
{ "number": 11, "reference": "Salmo 119:105", "content": "Lámpara es a mis pies tu palabra, y lumbrera a mi camino." },
{ "number": 12, "reference": "2 Corintios 5:7", "content": "Porque por fe andamos, no por vista." },
{ "number": 13, "reference": "Hebreos 11:1", "content": "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve." },
{ "number": 14, "reference": "Salmo 27:1", "content": "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?" },
{ "number": 15, "reference": "1 Juan 4:18", "content": "En el amor no hay temor, sino que el perfecto amor echa fuera el temor; porque el temor lleva en sí castigo. De donde el que teme, no ha sido perfeccionado en el amor." },
{ "number": 16, "reference": "Romanos 12:2", "content": "No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta." },
{ "number": 17, "reference": "Santiago 1:5", "content": "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada." },
{ "number": 18, "reference": "Salmo 46:1", "content": "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones." },
{ "number": 19, "reference": "Juan 14:6", "content": "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí." },
{ "number": 20, "reference": "Gálatas 5:22", "content": "Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza; contra tales cosas no hay ley." },
{ "number": 21, "reference": "Salmo 37:4", "content": "Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón." },
{ "number": 22, "reference": "Proverbios 16:3", "content": "Encomienda a Jehová tus obras, y tus pensamientos serán afirmados." },
{ "number": 23, "reference": "Mateo 28:19", "content": "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo." },
{ "number": 24, "reference": "Hechos 1:8", "content": "Pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra." },
{ "number": 25, "reference": "Efesios 2:8", "content": "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios." },
{ "number": 26, "reference": "Efesios 6:11", "content": "Vestíos de toda la armadura de Dios, para que podáis estar firmes contra las asechanzas del diablo." },
{ "number": 27, "reference": "Hebreos 12:1", "content": "Por tanto, nosotros también, teniendo en derredor nuestro tan grande nube de testigos, despojémonos de todo peso y del pecado que nos asedia, y corramos con paciencia la carrera que tenemos por delante." },
{ "number": 28, "reference": "Filipenses 4:6", "content": "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias." },
{ "number": 29, "reference": "Filipenses 4:7", "content": "Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús." },
{ "number": 30, "reference": "1 Pedro 5:7", "content": "Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros." },
{ "number": 31, "reference": "Romanos 15:13", "content": "Y el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por el poder del Espíritu Santo." },
{ "number": 32, "reference": "Juan 8:32", "content": "Y conoceréis la verdad, y la verdad os hará libres." },
{ "number": 33, "reference": "Salmo 55:22", "content": "Echa sobre Jehová tu carga, y él te sustentará; no dejará para siempre caído al justo." },
{ "number": 34, "reference": "Isaías 40:31", "content": "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán." },
{ "number": 35, "reference": "Mateo 5:14", "content": "Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder." },
{ "number": 36, "reference": "Juan 10:10", "content": "El ladrón no viene sino para hurtar y matar y destruir; yo he venido para que tengan vida, y para que la tengan en abundancia." },
{ "number": 37, "reference": "Salmo 103:1", "content": "Bendice, alma mía, a Jehová, y bendiga todo mi ser su santo nombre." },
{ "number": 38, "reference": "Salmo 100:5", "content": "Porque Jehová es bueno; para siempre es su misericordia, y su verdad por todas las generaciones." },
{ "number": 39, "reference": "Romanos 5:8", "content": "Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros." },
{ "number": 40, "reference": "2 Timoteo 1:7", "content": "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio." },
{ "number": 41, "reference": "Mateo 7:7", "content": "Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá." },
{ "number": 42, "reference": "Juan 15:5", "content": "Yo soy la vid, vosotros los pámpanos; el que permanece en mí, y yo en él, éste lleva mucho fruto; porque separados de mí nada podéis hacer." },
{ "number": 43, "reference": "Colosenses 3:23", "content": "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres." },
{ "number": 44, "reference": "Mateo 19:26", "content": "Y mirándolos Jesús, les dijo: Para los hombres esto es imposible; mas para Dios todo es posible." },
{ "number": 45, "reference": "1 Juan 1:9", "content": "Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad." },
{ "number": 46, "reference": "Santiago 4:7", "content": "Someteos, pues, a Dios; resistid al diablo, y huirá de vosotros." },
{ "number": 47, "reference": "Salmo 34:8", "content": "Gustad, y ved que es bueno Jehová; dichoso el hombre que confía en él." },
{ "number": 48, "reference": "Proverbios 18:10", "content": "Torre fuerte es el nombre de Jehová; a él correrá el justo, y será levantado." },
{ "number": 49, "reference": "Salmo 118:24", "content": "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él." },
{ "number": 50, "reference": "Isaías 26:3", "content": "Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera; porque en ti ha confiado." },
{ "number": 51, "reference": "Romanos 8:31", "content": "¿Qué, pues, diremos a esto? Si Dios es por nosotros, ¿quién contra nosotros?" },
{ "number": 52, "reference": "Salmo 91:1", "content": "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente." },
{ "number": 53, "reference": "2 Corintios 12:9", "content": "Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo." },
{ "number": 54, "reference": "Isaías 43:2", "content": "Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán. Cuando pases por el fuego, no te quemarás, ni la llama arderá en ti." },
{ "number": 55, "reference": "Salmo 37:5", "content": "Encomienda a Jehová tu camino, y confía en él; y él hará." },
{ "number": 56, "reference": "Mateo 6:34", "content": "Así que, no os afanéis por el día de mañana, porque el día de mañana traerá su afán. Basta a cada día su propio mal." },
{ "number": 57, "reference": "Hebreos 13:5", "content": "Sean vuestras costumbres sin avaricia, contentos con lo que tenéis ahora; porque él dijo: No te desampararé, ni te dejaré." },
{ "number": 58, "reference": "1 Corintios 10:13", "content": "No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir, sino que dará también juntamente con la tentación la salida, para que podáis soportar." },
{ "number": 59, "reference": "Salmo 63:1", "content": "Dios, Dios mío eres tú; de madrugada te buscaré; mi alma tiene sed de ti, mi carne te anhela, en tierra seca y árida donde no hay aguas." },
{ "number": 60, "reference": "Juan 16:33", "content": "Estas cosas os he hablado para que en mí tengáis paz. En el mundo tendréis aflicción; pero confiad, yo he vencido al mundo." },
{ "number": 61, "reference": "Salmo 1:1", "content": "Bienaventurado el varón que no anduvo en consejo de malos, ni estuvo en camino de pecadores, ni en silla de escarnecedores se ha sentado." },
{ "number": 62, "reference": "Proverbios 4:23", "content": "Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida." },
{ "number": 63, "reference": "Juan 1:1", "content": "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios." },
{ "number": 64, "reference": "Lucas 1:37", "content": "Porque nada hay imposible para Dios." },
{ "number": 65, "reference": "Salmo 139:14", "content": "Te alabaré; porque formidables, maravillosas son tus obras; estoy maravillado, y mi alma lo sabe muy bien." },
{ "number": 66, "reference": "Romanos 6:23", "content": "Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro." },
{ "number": 67, "reference": "Efesios 4:32", "content": "Antes sed benignos unos con otros, misericordiosos, perdonándoos unos a otros, como Dios también os perdonó a vosotros en Cristo." },
{ "number": 68, "reference": "Colosenses 3:12", "content": "Vestíos, pues, como escogidos de Dios, santos y amados, de entrañable misericordia, de benignidad, de humildad, de mansedumbre, de paciencia." },
{ "number": 69, "reference": "2 Timoteo 3:16", "content": "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia." },
{ "number": 70, "reference": "Salmo 32:8", "content": "Te haré entender, y te enseñaré el camino en que debes andar; sobre ti fijaré mis ojos." },
{ "number": 71, "reference": "Proverbios 27:17", "content": "Hierro con hierro se aguza; y así el hombre aguza el rostro de su amigo." },
{ "number": 72, "reference": "Mateo 5:16", "content": "Así alumbre vuestra luz delante de los hombres, para que vean vuestras buenas obras, y glorifiquen a vuestro Padre que está en los cielos." },
{ "number": 73, "reference": "1 Juan 5:14", "content": "Y esta es la confianza que tenemos en él, que si pedimos alguna cosa conforme a su voluntad, él nos oye." },
{ "number": 74, "reference": "Santiago 1:2", "content": "Hermanos míos, tened por sumo gozo cuando os halléis en diversas pruebas." },
{ "number": 75, "reference": "Salmo 147:3", "content": "Él sana a los quebrantados de corazón, y venda sus heridas." },
{ "number": 76, "reference": "Proverbios 11:25", "content": "El alma generosa será prosperada; y el que saciare, él también será saciado." },
{ "number": 77, "reference": "Romanos 14:8", "content": "Pues si vivimos, para el Señor vivimos; y si morimos, para el Señor morimos. Así pues, sea que vivamos, o que muramos, del Señor somos." },
{ "number": 78, "reference": "Salmo 115:3", "content": "Nuestro Dios está en los cielos; todo lo que quiso ha hecho." },
{ "number": 79, "reference": "Mateo 18:20", "content": "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos." },
{ "number": 80, "reference": "Filipenses 2:3", "content": "Nada hagáis por contienda o por vanagloria; antes bien con humildad, estimando cada uno a los demás como superiores a él mismo." },
{ "number": 81, "reference": "1 Pedro 4:8", "content": "Y ante todo, tened entre vosotros ferviente amor; porque el amor cubrirá multitud de pecados." },
{ "number": 82, "reference": "Salmo 19:14", "content": "Sean gratos los dichos de mi boca y la meditación de mi corazón delante de ti, oh Jehová, roca mía, y redentor mío." },
{ "number": 83, "reference": "Proverbios 15:1", "content": "La blanda respuesta quita la ira; mas la palabra áspera hace subir el furor." },
{ "number": 84, "reference": "Josué 1:9", "content": "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas." },
{ "number": 85, "reference": "Salmo 51:10", "content": "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí." },
{ "number": 86, "reference": "Mateo 10:29", "content": "¿No se venden dos pajarillos por un cuarto? Con todo, ni uno de ellos cae a tierra sin vuestro Padre." },
{ "number": 87, "reference": "Romanos 8:1", "content": "Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús, los que no andan conforme a la carne, sino conforme al Espíritu." },
{ "number": 88, "reference": "Santiago 5:16", "content": "Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados. La oración eficaz del justo puede mucho." },
{ "number": 89, "reference": "Salmo 37:7", "content": "Guarda silencio ante Jehová, y espera en él." },
{ "number": 90, "reference": "Proverbios 20:5", "content": "Como aguas profundas es el consejo en el corazón del hombre; mas el hombre entendido lo alcanzará." },
{ "number": 91, "reference": "Isaías 12:2", "content": "He aquí Dios es mi salvación; me aseguraré y no temeré; porque mi fortaleza y mi canción es JAH Jehová, quien ha sido salvación para mí." },
{ "number": 92, "reference": "1 Corintios 13:4", "content": "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece." },
{ "number": 93, "reference": "Lucas 6:31", "content": "Y como queréis que hagan los hombres con vosotros, así también haced vosotros con ellos." },
{ "number": 94, "reference": "Hebreos 13:8", "content": "Jesucristo es el mismo ayer, y hoy, y por los siglos." },
{ "number": 95, "reference": "Salmo 20:4", "content": "Te dé conforme al deseo de tu corazón, y cumpla todo tu consejo." },
{ "number": 96, "reference": "Proverbios 3:6", "content": "Reconócelo en todos tus caminos, y él enderezará tus veredas." },
{ "number": 97, "reference": "Mateo 7:12", "content": "Así que, todas las cosas que queráis que los hombres hagan con vosotros, así también haced vosotros con ellos; porque esto es la ley y los profetas." },
{ "number": 98, "reference": "Romanos 8:38", "content": "Por lo cual estoy seguro de que ni la muerte, ni la vida, ni ángeles, ni principados, ni potestades, ni lo presente, ni lo por venir." },
{ "number": 99, "reference": "Salmo 28:7", "content": "Jehová es mi fortaleza y mi escudo; en él confió mi corazón, y fui ayudado; por lo que se gozó mi corazón, y con mi cántico le alabaré." },
{ "number": 100, "reference": "Proverbios 22:6", "content": "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él." },
{ "number": 101, "reference": "Juan 14:27", "content": "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo." },
{ "number": 102, "reference": "2 Corintios 9:7", "content": "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre." },
{ "number": 103, "reference": "Salmo 112:7", "content": "No tendrá temor de malas noticias; su corazón está firme, confiado en Jehová." },
{ "number": 104, "reference": "Proverbios 17:22", "content": "El corazón alegre constituye buen remedio; mas el espíritu triste seca los huesos." },
{ "number": 105, "reference": "Efesios 3:20", "content": "Y a Aquel que es poderoso para hacer todas las cosas mucho más abundantemente de lo que pedimos o entendemos, según el poder que actúa en nosotros." },
{ "number": 106, "reference": "Colosenses 3:15", "content": "Y la paz de Dios gobierne en vuestros corazones, a la que asimismo fuisteis llamados en un solo cuerpo; y sed agradecidos." },
{ "number": 107, "reference": "1 Tesalonicenses 5:16", "content": "Estad siempre gozosos." },
{ "number": 108, "reference": "1 Tesalonicenses 5:17", "content": "Orad sin cesar." },
{ "number": 109, "reference": "1 Tesalonicenses 5:18", "content": "Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús." },
{ "number": 110, "reference": "Salmo 146:5", "content": "Bienaventurado aquel cuyo ayudador es el Dios de Jacob, cuya esperanza está en Jehová su Dios." },
{ "number": 111, "reference": "Proverbios 3:9", "content": "Honra a Jehová con tus bienes, y con las primicias de todos tus frutos." },
{ "number": 112, "reference": "Hebreos 11:6", "content": "Pero sin fe es imposible agradar a Dios; porque es necesario que el que se acerca a Dios crea que le hay, y que es galardonador de los que le buscan." },
{ "number": 113, "reference": "Isaías 54:17", "content": "Ninguna arma forjada contra ti prosperará, y condenarás toda lengua que se levante contra ti en juicio. Esta es la herencia de los siervos de Jehová, y su salvación de mí vendrá, dijo Jehová." },
{ "number": 114, "reference": "Mateo 6:24", "content": "Ninguno puede servir a dos señores; porque o aborrecerá al uno y amará al otro, o estimará al uno y menospreciará al otro. No podéis servir a Dios y a las riquezas." },
{ "number": 115, "reference": "Juan 6:35", "content": "Jesús les dijo: Yo soy el pan de vida; el que a mí viene, nunca tendrá hambre; y el que en mí cree, no tendrá sed jamás." },
{ "number": 116, "reference": "Salmo 34:17", "content": "Claman los justos, y Jehová oye, y los libra de todas sus angustias." },
{ "number": 117, "reference": "Proverbios 13:20", "content": "El que anda con sabios, sabio será; mas el que se junta con necios será quebrantado." },
{ "number": 118, "reference": "Romanos 10:9", "content": "Que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo." },
{ "number": 119, "reference": "Salmo 5:3", "content": "Oh Jehová, de mañana oirás mi voz; de mañana me presentaré delante de ti, y esperaré." },
{ "number": 120, "reference": "Isaías 30:21", "content": "Entonces tus oídos oirán a tus espaldas palabra que diga: Este es el camino, andad por él; y no echéis a la mano derecha, ni tampoco torzáis a la mano izquierda." },
{ "number": 121, "reference": "1 Corintios 15:58", "content": "Así que, hermanos míos amados, estad firmes y constantes, creciendo en la obra del Señor siempre, sabiendo que vuestro trabajo en el Señor no es en vano." },
{ "number": 122, "reference": "Salmo 16:8", "content": "A Jehová he puesto siempre delante de mí; porque está a mi diestra, no seré conmovido." },
{ "number": 123, "reference": "Proverbios 10:12", "content": "El odio despierta rencillas; pero el amor cubrirá todas las faltas." }

  
      
];
    

// Function to load and display the daily verse
function loadDailyVersicle() {
  const todayUTC = new Date();
  const startDate = new Date("2026-01-22"); // Set this to the start date for the year
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









