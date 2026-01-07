// populateSchedules.js
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBtxkyNiB3aqgumnNMMUR59wxafPxkF078",
  authDomain: "quixaguia.firebaseapp.com",
  projectId: "quixaguia",
  storageBucket: "quixaguia.firebasestorage.app",
  messagingSenderId: "832333029612",
  appId: "1:832333029612:web:3301406547d39de81ec5c9",
  measurementId: "G-VP81H428SF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ufc = {
  key: 1,
  rodoviaria: [
    { nome: 'Ônibus A', horario: '07h10' },
    { nome: 'Ônibus B', horario: '07h15' },
    { nome: 'Ônibus A', horario: '07h40' },
    { nome: 'Ônibus B', horario: '07h45' },
    { nome: 'Ônibus A', horario: '09h35' },
    { nome: 'Ônibus B', horario: '11h25' },
    { nome: 'Ônibus A', horario: '11h45' },
    { nome: 'Ônibus B', horario: '12h05' },
    { nome: 'Ônibus A', horario: '12h15' },
    { nome: 'Ônibus B', horario: '12h35' },
    { nome: 'Ônibus A', horario: '12h50' },
    { nome: 'Ônibus B', horario: '13h05' },
    { nome: 'Ônibus A', horario: '13h30' },
    { nome: 'Ônibus B', horario: '15h30' },
    { nome: 'Ônibus A', horario: '16h00' },
    { nome: 'Ônibus B', horario: '17h35' },
    { nome: 'Ônibus A', horario: '17h45' },
    { nome: 'Ônibus B', horario: '18h05' },
    { nome: 'Ônibus A', horario: '18h15' },
    { nome: 'Ônibus B', horario: '18h35' },
    { nome: 'Ônibus A', horario: '18h45' },
  ],
  campus: [
    { nome: 'Ônibus A', horario: '07h25' },
    { nome: 'Ônibus A', horario: '07h30' },
    { nome: 'Ônibus A', horario: '09h20' },
    { nome: 'Ônibus B', horario: '11h10' },
    { nome: 'Ônibus A', horario: '11h20' },
    { nome: 'Ônibus B', horario: '11h40' },
    { nome: 'Ônibus A', horario: '12h00' },
    { nome: 'Ônibus B', horario: '12h20' },
    { nome: 'Ônibus A', horario: '12h30' },
    { nome: 'Ônibus B', horario: '12h50' },
    { nome: 'Ônibus A', horario: '13h15' },
    { nome: 'Ônibus B', horario: '15h15' },
    { nome: 'Ônibus A', horario: '15h45' },
    { nome: 'Ônibus B', horario: '17h20' },
    { nome: 'Ônibus A', horario: '17h30' },
    { nome: 'Ônibus B', horario: '17h50' },
    { nome: 'Ônibus A', horario: '18h00' },
    { nome: 'Ônibus B', horario: '18h20' },
    { nome: 'Ônibus A', horario: '18h30' },
    { nome: 'Ônibus B', horario: '22h10' },
    { nome: 'Ônibus A', horario: 'GARAGEM' },
  ]
};

const ifce = {
  key: 2,
  rodoviaria: [
    { nome: 'Ônibus A', horario: '07h20' },
    { nome: 'Ônibus B', horario: '07h21' },
    { nome: 'Ônibus A', horario: '09h10' },
    { nome: 'Ônibus B', horario: '13h15' },
    { nome: 'Ônibus A', horario: '13h30' },
    { nome: 'Ônibus B', horario: '15h10' },
    { nome: 'Ônibus A', horario: '18h10' },
    { nome: 'Ônibus B', horario: '18h35' },
    { nome: 'Ônibus A', horario: '20h15' },
  ],
  campus: [
    { nome: 'Ônibus A', horario: '09h40' },
    { nome: 'Ônibus B', horario: '11h30' },
    { nome: 'Ônibus A', horario: '11h50' },
    { nome: 'Ônibus B', horario: '12h' },
    { nome: 'Ônibus A', horario: '15h40' },
    { nome: 'Ônibus B', horario: '17h30' },
    { nome: 'Ônibus A', horario: '17h50' },
    { nome: 'Ônibus B', horario: '18h' },
    { nome: 'Ônibus A', horario: '21h45' },
  ]
};

//aq são as paradas (vai pro firebase)
const paradas = {
  lista: [
  {
    key: 1,
    numero: '1',
    nome: 'Rodoviária de Quixadá',
    endereco: '2406, Av. Presidente Vargas, 2320 - Centro',
    quixada: 'Quixadá - CE, 63900-000',
    url: 'https://maps.google.com/?q=Rodoviária+de+Quixadá,+Av.+Presidente+Vargas,+2320,+Quixadá,+CE'
  },
  {
    key: 2,
    numero: '2',
    nome: 'Anexo',
    endereco: 'R. Basílio Pinto, 420 - Centro',
    quixada: 'Quixadá - CE, 63900-000',
    url: 'https://maps.google.com/?q=R.+Basílio+Pinto,+420,+Quixadá,+CE'
  },
  {
    key: 3,
    numero: '3',
    nome: 'Construtec',
    endereco: 'R. Basílio Emiliano Pinto, 958 - Planalto Universitário.',
    quixada: 'Quixadá - CE, 63902-106',
    url: 'https://maps.google.com/?q=R.+Basílio+Emiliano+Pinto,+958,+Quixadá,+CE'
  },
  {
    key: 4,
    numero: '4',
    nome: 'Rustik',
    endereco: 'R. Basílio Emiliano Pinto, 1255 - Combate',
    quixada: 'Quixadá - CE, 63900-145',
    url: 'https://maps.google.com/?q=R.+Basílio+Emiliano+Pinto,+1255,+Quixadá,+CE'
  },
  {
    key: 5,
    numero: '5',
    nome: 'Loteamento',
    endereco: 'R. José Freitas Queiroz, 2127',
    quixada: 'Quixadá - CE, 63900-000',
    url: 'https://maps.google.com/?q=R.+José+Freitas+Queiroz,+2127,+Quixadá,+CE'
  },
 ]
};

const addSchedules = async () => {
  try {
    await setDoc(doc(db, 'onibus', 'onibusUFC'), ufc);
    console.log('Horários da UFC salvos!');
    
    await setDoc(doc(db, 'onibus', 'onibusIFCE'), ifce);
    console.log('Horários do IFCE salvos!');
    
    await setDoc(doc(db, 'transporte', 'paradas'), paradas);
    console.log('Paradas salvas!');

    console.log('Todos os dados foram salvos no Firebase!');
    process.exit(0);
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    process.exit(1);
  }
};

addSchedules();