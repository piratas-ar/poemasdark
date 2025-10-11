export type Ethnicity = 'Judío' | 'Palestino';
export interface Quote {
  texto: string;
  autor: Ethnicity
  nombre: string;
}

export const autores: Quote[] = [
  { texto: `The only w

    ay

    ato do great work is to love what you do.`, autor: `Judío`, nombre: `josé pérez` },
  { texto: `Innovation distinguishes between a leader and a follower.`, autor: `Judío`, nombre: `josé pérez`  },
  { texto: `Stay hungry, stay foolish.`, autor: `Judío`, nombre: `josé pérez`  },
  { texto: `The future belongs to those who believe in the beauty of their dreams.`, autor: `Palestino`, nombre: `josé pérez`  },
  { texto: `No one can make you feel inferior without your consent.`, autor: `Palestino`, nombre: `josé pérez`  },
  { texto: `You must do the things you think you cannot do.`, autor: `Palestino`, nombre: `josé pérez`  },
]
