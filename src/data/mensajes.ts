// Esta data simula la información que puede venir, por ejemplo, de una api
// Vamos a tener que tipar tanto el array de mensajes, como los objetos que podemos encontrar dentro

interface ICiudadNacimiento {
  ciudad: string;
  region: string;
}

interface IRemitente {
  nombre: string;
  apellido: string;
  type: "ENTRENADOR" | "AYUDANTE" | "PROFESOR";
  ciudadDeNacimiento: ICiudadNacimiento;
}

export interface IMensaje {
  id: number;
  remitente: IRemitente;
  email: string;
  asunto: string;
  fecha: string;
  texto: string;
}

export const mensajes: IMensaje[] = [
  {
    id: 1,
    remitente: {
      nombre: "Misty",
      apellido: "Williams",
      type: "ENTRENADOR",
      ciudadDeNacimiento: {
        ciudad: "Ciudad Celeste",
        region: "Kanto",
      },
    },
    email: "misty@ciudadCeleste.com",
    asunto: "Entrenamiento",
    fecha: "10/02/2022",
    texto:
      "Hola Ash,¡tanto tiempo!. ¿Te parece que nos juntemos a entrenar nuestros pokémons?",
  },
  {
    id: 2,
    remitente: {
      nombre: "Brock",
      apellido: "Williams",
      type: "ENTRENADOR",
      ciudadDeNacimiento: {
        ciudad: "Ciudad Plateada",
        region: "Kanto",
      },
    },
    email: "brock@ciudadPlateada.com",
    asunto: "¡Felicidades!",
    fecha: "10/02/2022",
    texto:
      "Ash, muchas felicidades por tu nuevo Centro Pokémon. ¡Te deseo muchos éxitos!",
  },
  {
    id: 3,
    remitente: {
      nombre: "Tracey",
      apellido: "Sketchit",
      type: "AYUDANTE",
      ciudadDeNacimiento: {
        ciudad: "Pueblo Paleta",
        region: "Kanto",
      },
    },
    email: "tracey@laboratorioOak.com",
    asunto: "Descubrimiento",
    fecha: "10/02/2022",
    texto:
      "Hola Ash, hemos descubierto algo importante. Cuando puedas, pásate por el laboratorio. Saludos.",
  },
  {
    id: 4,
    remitente: {
      nombre: "Profesor",
      apellido: "Oak",
      type: "PROFESOR",
      ciudadDeNacimiento: {
        ciudad: "Pueblo Paleta",
        region: "Kanto",
      },
    },
    email: "yukinari@laboratorioOak.com",
    asunto: "Reunión de trabajo",
    fecha: "10/02/2022",
    texto:
      "Hola Ash, la reunión de hoy es a las 19:00 horas. Espero verte. ¡Saludos!",
  },
];
