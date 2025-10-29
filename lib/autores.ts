export type Ethnicity = 'Judío' | 'Palestino';
export interface Quote {
  titulo: string;
  texto: string;
  cita: string;
  autor: Ethnicity
  año: string;
  bio: string;
  nombre: string;
}

export const autores: Quote[] = [
  // { titulo: `Ejemplo` ,texto: `poema ejemplo`, autor: `Palestino`, nombre: `josé pérez`, año: `1970 - 2002`, bio:` `   },
  { titulo: `Fuga de muerte`,cita: `cita` ,texto: `Negra leche del alba la bebemos por la tarde
la bebemos al mediodía y en la mañana la bebemos de noche
bebemos y bebemos
cavamos una tumba en los aires donde no hay opresión
Un hombre habita en la casa juega con las serpientes escribe
escribe cuando oscurece a Alemania tu pelo dorado Margarete
escribe eso y sale frente a la casa y brillan las estrellas silba a sus perros
silba a sus judíos caven una tumba en la tierra
nos ordena vamos toquen para el baile


Negra leche del alba te bebemos de noche
te bebemos en la mañana y al mediodía te bebemos por la tarde
bebemos y bebemos
Un hombre habita en la casa juega con las  serpientes escribe
escribe cuando oscurece a Alemania tu pelo dorado Margarete
Tu pelo cenizo Sulamith cavamos una tumba en los aires donde no hay opresión


Grita ustedes caven más hondo en la tierra los demás canten y toquen
empuña el fierro en el cinto lo blande sus ojos son azules
ustedes entierren las palas más hondo los demás sigan tocando para el baile


Negra leche del alba te bebemos de noche
te bebemos al mediodía y en la mañana te bebemos por la tarde
bebemos y bebemos
un hombre habita en la casa tu pelo dorado Margarete
tu pelo cenizo Sulamith juega con las serpientes
Grita toquen más dulcemente la muerte la muerte es un maestro de Alemania
grita tañan más sombríamente los violines para que asciendan cual humo en el aire
para que tengan una tumba en las nubes donde no hay opresión


Negra leche del alba te bebemos de noche
te bebemos al mediodía la muerte es un maestro de Alemania
te bebemos por la tarde y en la mañana bebemos y bebemos
la muerte es un maestro de Alemania su ojo es azul
te acierta con bala de plomo te acierta preciso
un hombre habita en la casa tu pelo dorado Margarete
atiza sus perros contra nosotros nos regala una tumba en el aire
juega con las serpientes y sueña la muerte es un maestro de Alemania


tu pelo dorado Margarete
tu pelo cenizo Sulamith`, autor: `Judío`, nombre: `Paul Celan`, bio:`
1920-1970
Fue un poeta de habla alemana del siglo XX. Nació en Chernivtsi del entonces reino de Rumanía en 1920 en una familia judía. Durante la segunda guerra mundial estuvo en un campo de trabajo forzado y tras escapar se estableció en París, donde murió en 1970.`, año: `1970 - 2002`   },
  { titulo: `Recuerdos de Polonia` ,cita: `cita` ,texto: `En Varsovia, una muchacha hablaba así:
si quieres acariciarme, yo no me opondría;
si quieres besarme, puedes hacerlo
te permitiría que me desnudes los senos.
Pero debes saber que a papá lo fusilaron los alemanes
y a un hermano mío lo quemaron en los hornos.
 
Si quieres acariciarme, yo no me opondría
pero debes saber que todos estos muertos
están en mí
y yo toda, toda soy de ceniza.
Bésame, pero que no te sepa amarga.


II
 
  
En Cracovia, una muchacha hablaba así:
si quieres puedes abrazarme
si quieres puedes acariciarme los senos
pero no me compres abalorios, nunca.
Tenía trece años cuando los alemanes
ahorcaron a mamá, de un árbol en la calle.
 
Si quieres podemos atravesar nadando el Vístula
pero no me digas que tengo el cuello blanco y bello

y no me compres abalorios, nunca.

 

 `, autor: `Judío`, nombre: `Geo Bogda`, año: `Rumanía, 1909 – Ucrania, 1993`, bio:`Fue un teórico, poeta y periodista rumano de vanguardia, conocido por sus convicciones políticas comunistas y de izquierda. De joven en el período de entreguerras, era conocido como un rebelde y era uno de los surrealistas rumanos más influyentes. Varios de sus polémicos poemas lo llevaron dos veces a ser encarcelado por obscenidad, y lo vieron participar en el conflicto entre jóvenes y viejos escritores rumanos, así como en el enfrentamiento entre la vanguardia y la extrema derecha. En una etapa posterior, Bogza ganó renombre por sus numerosos y logrados reportajes, siendo uno de los primeros en cultivar el género en la literatura rumana, y usándolo como un lugar para la crítica social. `   },
  { titulo: `Raíz` ,cita: `cita` ,texto: `
Con fuerza se desliza la raíz, 
bebe de la lluvia, vive bajo tierra,
sus sueños son limpios como la nieve.

De la tierra brota y rompe el suelo,
a escondidas se arrastra la astuta raíz
levantando sus brazos, como una soga.

En el brazo de la raíz un gusano se acuesta,
y un gusano se sienta a los pies de la raíz,
el suyo es un mundo podrido de gusanos.

Mas la raíz resiste en la hondura del suelo,
alejada de todo
salvo de la rama asceta que aún luce verdor.

Esto es lo que nutre, esto es lo que ama,
el perfume que sopla hacia la altura,
los fragancias maduras que alimentan el cielo.

Yo soy raíz ahora,
y vivo entre gusanos.
Este poema es de allí.

Yo era una flor. Ahora soy raíz.
Oscura, la tierra me cubre por entero,
Mi destino se ha cumplido.
Sobre mi cabeza, una sierra llora.
`, autor: `Judío`, nombre: `Miklós Radnóti`, año: `(Budapest, 5 de mayo de 1909 - Abda, 9 de noviembre de 1944)`, bio:` Miklós Radnóti fue un poeta húngaro judío del siglo XX, considerado uno de los líricos más importantes de la primera mitad de ese siglo. Su obra, que evolucionó desde un enfoque más optimista hasta uno de profunda aprehensión, reflejó el horror y el sufrimiento del Holocausto. Fue asesinado por los nazis durante una marcha forzada en 1944, aunque el famoso "Cuaderno de Bor" con sus últimos poemas fue encontrado en su abrigo tras ser exhumado.  
 `   },
  { titulo: `La Recherche` ,cita: `cita` ,texto: `Recuerda también las viejas y suaves tardes
Y sus brillantes mesas coronadas por los poetas y sus jóvenes esposas.
¿Dónde queda el barro del recuerdo en que te deslizas, dónde está la noche en la que los exuberantes amigos bebían alegremente el vino natal
que brillaba en sus ojos bellísimos?.

Los versos nadaban alrededor del resplandor de las lámparas.
Y los adjetivos verdes y brillantes se balanceaban sobre la cresta espumosa de su música, y los muertos estaban vivos, y los prisioneros en sus casas, los poemas de los viejos amigos cuyos corazones se perdieron bajo la tierra en España, Flandes y Ucrania.

Algunos se lanzaron hacia el frente, apretando sus dientes contra el fuego, y lucharon porque nada pudieron hacer para evitarlo,
mientras dormía la alarma de un mundo adormecido y sucio,
Bajo la cubierta de la noche, recordando los viejos hogares del pasado,
sus cuevas e islas tranquilas, alejadas de este tiempo.
 Algunos de ellos viajaron indefensos en vagones sellados de ganado a lugares donde se quedaron aturdidos y rígidos, esperando desarmados en los helados campos de minas, otros marcharon voluntariamente y silenciosos con un arma en la mano al lugar que escogieron, donde estaba su lucha y ahora el ángel de la libertad guarda sus sueños en la noche.
Algunos, no importa ya. ¿De dónde vienen los vinos sabios?
Llegaron los invasores y se multiplicaron. Y se multiplicaron las arrugas alrededor de las sonrisas de sus labios y de sus ojos de las mujeres. Y se cansaron de las hadas las muchachas en medio del silencio de la guerra.

Dónde está la noche, la taberna, los tres, debajo de esta mesa.
Y quienes viven aún, dónde están cayendo ahora los que combaten.
Mi corazón oye sus voces, mis manos se anudan a sus manos,
su valor y sus torsos se despliegan ante mi
-prisionero silencioso- en las terribles montañas de Serbia.

Dónde está la noche. Esa noche ya nunca volverá.
La Muerte lo mira todo desde otra perspectiva.
Todavía se sientan a la mesa, se esconden en la sonrisa de las mujeres.
Y volverán a beber de nuevo en nuestras copas, los amigos aún sin sepultar en los bosques remotos, dormidos ya en pastos extraños…`, autor: `Judío`, nombre: `Miklós Radnóti`, año: `(Budapest, 5 de mayo de 1909 - Abda, 9 de noviembre de 1944)`, bio:` Miklós Radnóti fue un poeta húngaro judío del siglo XX, considerado uno de los líricos más importantes de la primera mitad de ese siglo. Su obra, que evolucionó desde un enfoque más optimista hasta uno de profunda aprehensión, reflejó el horror y el sufrimiento del Holocausto. Fue asesinado por los nazis durante una marcha forzada en 1944, aunque el famoso "Cuaderno de Bor" con sus últimos poemas fue encontrado en su abrigo tras ser exhumado.  
 `   },
  { titulo: `El ropero vacio ` ,cita: `cita` ,texto: `El viento de setiembre repite el último pedido
de mi hermano Iukev:
 —Voy a esconderme, Iashek, en tu casa,
en el ropero vacío;
solo necesitas traerme alguna vez
un poco de agua,
un trozo de pan
para sobrevivir.
Pero Iashek, nuestro vecino polaco,
guardó silencio. 
De los árboles caen muertas, junto con las hojas amarillas,
las últimas palabras de mi hermano.
Todos los roperos vacíos del mundo
tienen ahora sus puertas abiertas de par en par,
y esperan que mi hermano venga a beber agua y a comer pan.`, autor: `Judío`, nombre: `Reizl Zhijlinsky`, año: `   `, bio:`no se sabe de Reizl Zhijlinsky mas que era judío, vivió en Polonia, y lo sobrevivió este poema`   },
  { titulo: `SÓLO QUIERO ESTAR EN SU SENO` ,cita: `cita` ,texto: `Sólo quiero morir en mi tierra,
Que me entierren en ella,
Fundirme y desvanecerme en su fertilidad
Para resucitar siendo hierba en mi tierra,
Resucitar siendo flor
Que deshoje un niño crecido
En mi país.
Sólo quiero estar en el seno de mi patria
Siendo tierra
Hierba
O flor`, autor: `Palestino`, nombre: `Fadwa Tuqan` , año: `(1917-2003) `, bio:`Es considerada una de las más grandes poetas árabes. En un siglo plagado de tragedias para su pueblo, la síntesis de dulzura y resistencia que caracteriza a su obra quedó grabada en el latir de los corazones del pueblo palestino, sembrando admiración y empatía en el mundo entero. Fue una de las precursoras de la prosa libre y de las grandes voces de la resistencia palestina, tan así que fue bautizada como “La madre de la poesía palestina” por nada más ni nada menos que el gran poeta Mahmúd Darwish `   },

  { titulo: `A G. H. EN NUESTRA CITA` ,cita: `cita` ,texto: `Extraño amigo mío…
Si pudiera llegarte como
ayer. Si asesinas serpientes
no hubieran alborotado todos los caminos, cavando tumbas para
mis gentes y mi pueblo, sembrando muerte y fuego.
Si no hubiera regado la derrota la tierra de mi patria
con piedras vergonzosas, injuriantes. Si este corazón que tú conoces
fuera el mismo que ayer,
y no sangrase por la puñalada.
Si hoy, amigo mío, como ayer, pudiera envanecerme de mi gente,
de mi casa y mi fuerza,
ya mismo me tendrías a tu lado.
Amarrando a las playas de tu amor el barco de mi vida.
Y seríamos igual que dos pichones.`, autor: `Palestino`, nombre: `Fadwa Tuqan` , año: `(1917-2003) `, bio:`Es considerada una de las más grandes poetas árabes. En un siglo plagado de tragedias para su pueblo, la síntesis de dulzura y resistencia que caracteriza a su obra quedó grabada en el latir de los corazones del pueblo palestino, sembrando admiración y empatía en el mundo entero. Fue una de las precursoras de la prosa libre y de las grandes voces de la resistencia palestina, tan así que fue bautizada como “La madre de la poesía palestina” por nada más ni nada menos que el gran poeta Mahmúd Darwish `   },
  { titulo: `Lo que haré` ,cita: `cita` ,texto: `No voy a
bailar al son de tu tambor
de guerra. No
prestaré mi alma ni
mis huesos a tu tambor
de guerra. No
bailaré a tu
compás. Conozco ese ritmo.
No tiene vida. Conozco
íntimamente la piel que
estás golpeando. Estuvo
viva alguna vez
fue cazada robada
estirada. No
bailaré al son de los tambores
de tu guerra. No haré estallar
mi boca por ti. No
odiaré por ti ni
siquiera te odiaré. No
voy a matar por ti. Especialmente
no moriré
por ti. No voy a llorar
a los muertos asesinando ni
suicidándome. No me pondré
de tu lado ni bailaré con bombas
pese a que todos los demás están
bailando. Todos pueden estar
equivocados. La vida es un derecho
no colateral ni casual. No
olvidaré de dónde
vengo. Voy
a crear mi propio tambor. Trae a mi amado
cerca y nuestro canto
será baile. Nuestro
tarareo, ritmo. No
me van a engatusar. No
prestaré mi nombre
ni mi ritmo a tu
compás. Bailaré
y resistiré y bailaré y
persistiré y bailaré. Este latido es más fuerte que
la muerte. Tus tambores de guerra no son
más fuertes que mi respiración.`, autor: `Palestino`, nombre: `Suheir Hammad`, año: `(1973)`, bio:` Es una poetisa, escritora, intérprete y activista política estadounidense de origen palestino. Nació en Amán, hija de padres palestinos expulsados de Israel. Se crio en Brooklyn y Staten Island (Nueva York). Entre sus obras destacan Born Palestinian, Born Black, sobre su infancia en un barrio neoyorquino en el que era “una minoría dentro de otra minoría”, y Breaking Poems, sobre sus experiencias tras el bombardeo israelí del Líbano. Ha participado en el programa Def Poetry Jam, es ganadora de un Premio Tony y un American Book Award en 2009 por Breaking Poems. `   },
  { titulo: `LA BALA` ,cita: `cita` ,texto: `La bala pasa justo a tu lado
A la luz de su eco contás los deseos
Estás agotada esperando—los absolvés
y decís: tal vez haya más espera en una vida
La bala pasa justo a tu lado
entonces dibujás una cuerda y un avión de papel
los dedos piadosos de un niño lo atrapan
solo para ser también salvados por casualidad
de la sangre de la masacre.
La bala pasa justo a tu lado
dormís una hora más
soñás que crece una rosa
en las profundidades de tus venas
y una lluvia suave cae
en los bordes del corazón
para hacer lugar a este poema
La bala pasa justo a tu lado
los árboles de sombra se estiran y dormitan
como si te hubieras olvidado el duelo ahí
detrás de la reja del cementerio
La bala pasa justo a tu lado
una paloma comienza a agitar sus alas
trayendo paz a tu camino oscurecido.
La bala pasa justo a tu lado
y sonreís por toda una vida
de estar entregada
al accidente y al azar.`, autor: `Palestino`, nombre: `Sahar Rabah`, año: `  `, bio:` Nació y vive en Gaza. Se graduó de la ahora destruida Universidad Abierta de Al-Quds con un título en inglés y ha trabajado como traductora, editora, subtituladora, redactora, profesora e intérprete independiente.`   },
  { titulo: `DESDE QUE ME DIJERON QUE MI AMOR NO VOLVERÁ DE LA GUERRA` ,cita: `cita` ,texto: `Lo he intentado todo:
Dios, por ejemplo,
me apoyé en su pecho y oré,
y en esa alfombra, de una vez por todas,
acepté que mi amor
no volverá, y que si él lo hiciera
no me reconocería.
Probé suerte en la política,
memorizar canciones patrióticas,
hacerme amiga de legisladores,
guerreros admirados,
pero con las estaciones y los ánimos
cambian sus caras
tal como lo hacen sus discursos
una vez que están cerca de mis bolsillos.
Y fue entonces que acepté que mi amor
no me reconocería incluso si él regresara.
Desde que me dijeron que mi amor
no regresaría de la guerra,
he estado escribiendo los nombres de nuestros hijos
en las nubes y en diarios,
documentando sus cumpleaños,
tallas de zapatos, los poemas que recitan,
y así de una vez por todas
es que acepté que todos ellos
no regresarían de la guerra,
así como yo tampoco.
`, autor: `Palestino`, nombre: `MAYA ABU AL-HAYYAT`, año: `1980`, bio:`es una novelista, poeta y traductora palestina, nacida en Beirut y que vive en Jerusalén actualmente. Desde su primera publicación en 2004, Perlas de Azúcar (“Habat Min Alsukar”), ha publicado numerosas novelas y libros infantiles, así como cuatro colecciones de poesía. You can be the last leaf es una antología de poemas seleccionados y traducidos al inglés por Fady Youdah, y publicados por Milkweed Editions (Minneapolis) en 2022. `   },
  { titulo: `sin título` ,cita: `cita` ,texto: `La noche en la ciudad es oscura,
excepto por el brillo de los misiles;
silenciosa, excepto por el sonido del bombardeo;
aterradora, excepto por la promesa
tranquilizadora de la oración;
negra, excepto por la luz de los mártires.`, autor: `Palestino`, nombre: `Hiba Abu Nada`, año: `1991 - 2023`, bio:` Fue una poeta, novelista y educadora palestina. Su novela ىتوملل سيل نيجسكألا (El oxígeno no es para los muertos) obtuvo el segundo premio del Premio Sharjah a la Creatividad Árabe en 2017. Murió en su casa de la Franja de Gaza a causa de un ataque aéreo israelí el 20 de octubre de 2023, a los treinta y dos años. Se formó en la Universidad Islámica de Gaza, hoy destruida por el Ejército israelí, como todas las otras universidades gazatíes. Era de profesión bioquímica y nutricionista. Un día antes de su muerte escribió: Si morimos, sepan que estamos satisfechos y firmes, y digan al mundo, en nuestro nombre, que somos personas justas del lado de la verdad.`   },
  { titulo: `TÚ` ,cita: `cita` ,texto: `¿Te acuerdas de tu primera noche en este mundo?
De hecho, no es tu primera noche
en el Cairo o en París
en Kinshasa o en Buenos Aires.
podrías haber nacido en un pueblo tranquilo
en la ribera del río
o cerca de un rascacielos,
pero esta es tu primera noche en esta tierra
Lo que rodea el lugar de tu nacimiento
no son las ciudades ni las localidades próximas
tampoco los Estados o los continentes vecinos
son sobre todo los astros y las galaxias.
Lo más probable es que tu nombre fuese elegido hace meses
y que ya algunos hayan comenzado a caracterizarte:
nervioso o tranquilo, contemplativo o prudente.
Pero en realidad tú eres un ser extraño
más cercano al espacio sideral que nosotros.
Contigo nosotros no podemos superar el apuro
de los primeros instantes tras la llegada de un huésped,
cuando se le acosa a preguntas sobre el viaje.
Si te esperamos en el paritorio
o si te encontramos en medio de la carretera
lo cierto es que no sabemos exactamente
cómo llegaste aquí
y no podemos decirte
“Haz como si estuvieras en tu casa”.
Hasta ahora no lo hemos sentido
a pesar de que nos comportamos como si fuéramos
los propietarios del lugar.
Como tú,
en este mundo también nosotros somos invitados
45
Es el momento propicio para recordarlo
y es tu primera noche en la tierra.
No estabas cuando llovió esta mañana
pero, en el exterior, la hierba todavía está húmeda.
Entonces tú no sabías qué es el tiempo.
Los días, las semanas y los meses
no tenían ningún significado para ti.
Después de este momento
todo va a repetirse
tu palma se cerrará y se abrirá
y comenzarás a distinguir el día de la noche.
Tus ojos se acostumbrarán a los matices de los colores.
Después escrutarás largamente los rostros de la gente
y de una manera que la ciencia
todavía no ha logrado determinar
pronunciarás tus primeras palabras
y los adultos te pedirán que las repitas
y por alguna razón
será magnífico.
Después dirás río, rascacielos,
tren subterráneo.
Entonces creerás que posees el mundo
en parte, al menos, como a tu hermana o a tus hijos,
que serás capaz de provocar la guerra
o de extinguir los bosques.
A pesar de todo, y sea cual sea tu duración,
en raros momentos de tu vida
algo te estremecerá
y te recordará tu residencia original,
la vista de las colinas, por ejemplo.
Pero eso ocurrirá a su debido tiempo.
Ahora eres frágil y estás estupefacto.
Todavía no tienes edad.
46
Todo el mundo te examina.
Es tu primera noche en la tierra
y el ambiente es festivo
porque todos te consideramos como una ofrenda.
Pero si repitiéramos suficientemente esta frase
“Es tu primera noche en la tierra”
descubriríamos que, en realidad, eres un viajero,
alguien que acaba de llegar a un hospedaje.
Afuera, la tempestad
y las puertas del alojamiento permanecen abiertas,
no se cierran jamás.
Al unísono
entráis
tú
y la tempestad.`, autor: `Palestino`, nombre: `Dalia Taha`, año: `1986`, bio:`Es una dramaturga, poeta y narradora palestina. Nació en Berlín en 1986 pero creció en Ramalla, Palestina. Fue miembro del consejo editorial de la revista “Yaraat”. En 2007 se publicó su novela “El adivino negro”. Su primera obra de teatro, “Kefiya made in China” fue producida por The Flemish Royal Theatre y la Fundación Qattan en 2012. Se estrenó en Bruselas y luego se llevó a Palestina, donde realizó una gira por siete ciudades en la Ribera Occidental. Además de eso, dos escenas de la obra se escenificaron en el teatro Mohammed V de Rabat, Marruecos. La obra se publicó en cuatro idiomas: árabe, inglés, francés y flamenco. Otras de sus obras de teatro son: “Fuegos artificiales”, “No hay nadie entre tú y yo”, y “Hambre”. Su poemario “Biografía de los habitantes de la ciudad de R”, al que pertenecen los poemas aquí traducidos, se publicó en Amman en 2021.`   },
]
