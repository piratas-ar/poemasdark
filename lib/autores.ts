export type Ethnicity = 'Judío' | 'Palestino';
export interface Quote {
  texto: string;
  autor: Ethnicity
  nombre: string;
}

export const autores: Quote[] = [
  { texto: `Si quieres acariciarme, yo no me opondría
pero debes saber que todos estos muertos
están en mí
y yo toda, toda soy de ceniza.
Bésame, pero que no te sepa amarga.`, autor: `Judío`, nombre: `Geo Bogda - Recuerdos de Polonia` },
  { texto: `De los árboles caen muertas, junto con las hojas amarillas,

las últimas palabras de mi hermano.`, autor: `Judío`, nombre: `Reizl Zhijlinsky - El ropero vacío`  },
  { texto: `Extraño amigo mío…
Si pudiera llegarte como
ayer. Si asesinas serpientes
no hubieran alborotado todos los caminos, cavando tumbas para
mis gentes y mi pueblo, sembrando muerte y fuego.
Si no hubiera regado la derrota la tierra de mi patria
con piedras vergonzosas, injuriantes. Si este corazón que tú cono-
ces
fuera el mismo que ayer,
y no sangrase por la puñalada.
Si hoy, amigo mío, como ayer, pudiera envanecerme de mi gente,
de mi casa y mi fuerza,
ya mismo me tendrías a tu lado.
Amarrando a las playas de tu amor el barco de mi vida.
Y seríamos igual que dos pichones.`, autor: `Palestino`, nombre: `Fadwa Tuqan (1917-2003) es considerada una de las más grandes
poetas árabes. En un siglo plagado de tragedias para su pueblo,
la síntesis de dulzura y resistencia que caracteriza a su obra
quedó grabada en el latir de los corazones del pueblo palestino,
sembrando admiración y empatía en el mundo entero. Fue una
de las precursoras de la prosa libre y de las grandes voces de la
resistencia palestina, tan así que fue bautizada como “La madre de
la poesía palestina” por nada más ni nada menos que el gran poeta
Mahmúd Darwish`  },
  { texto: `The future belongs to those who believe in the beauty of their dreams.`, autor: `Palestino`, nombre: `josé pérez`  },
  { texto: `No one can make you feel inferior without your consent.`, autor: `Palestino`, nombre: `josé pérez`  },
  { texto: `You must do the things you think you cannot do.`, autor: `Palestino`, nombre: `josé pérez`  },
]
