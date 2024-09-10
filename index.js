// arrays, objetos
let meta = {
  value: 'Ler um livro por mês',
  adress: 2,
  checked: true,
  log: (info) => {
    console.log(info);
  }
};

meta.value = 'não é mais ler um livro'
meta.log(meta.value);

// function // arrow  function
// const criarMeta = () => {}

// function criarMeta() {}