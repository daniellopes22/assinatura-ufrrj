/**
 * Testes automatizados para o Gerador de Assinatura UFRRJ.
 * Execução: npm test
 */

describe('mascara de telefone (aplicarMascaraTelefone)', () => {
  // Copiada do index.html para teste isolado
  function aplicarMascaraTelefone(campo) {
    var posicaoOriginal = campo.selectionStart;
    var tamanhoAntes = campo.value.length;

    var digitos = campo.value.replace(/\D/g, '').slice(0, 11);
    var ddd = digitos.slice(0, 2);
    var resto = digitos.slice(2);
    var formatado = digitos;

    if (digitos.length > 2) {
      if (digitos.length > 10) {
        formatado = '(' + ddd + ') ' + resto.slice(0, 5) + (resto.length > 5 ? '-' + resto.slice(5) : '');
      } else if (resto.length > 4) {
        formatado = '(' + ddd + ') ' + resto.slice(0, 4) + '-' + resto.slice(4);
      } else {
        formatado = '(' + ddd + ') ' + resto;
      }
    }

    campo.value = formatado;
    var diferenca = formatado.length - tamanhoAntes;
    var novaPosicao = Math.max(0, (posicaoOriginal || 0) + diferenca);
    campo.setSelectionRange(novaPosicao, novaPosicao);
  }

  function criarCampo(valor) {
    return {
      value: valor,
      selectionStart: valor.length,
      setSelectionRange: function () {}
    };
  }

  it('não formata quando não há dígitos', () => {
    var campo = criarCampo('');
    aplicarMascaraTelefone(campo);
    expect(campo.value).toBe('');
  });

  it('não formata quando há apenas DDD (2 dígitos)', () => {
    var campo = criarCampo('21');
    aplicarMascaraTelefone(campo);
    // A máscara só aplica quando há mais de 2 dígitos
    expect(campo.value).toBe('21');
  });

  it('formata telefone fixo 10 dígitos', () => {
    var campo = criarCampo('2122334455');
    aplicarMascaraTelefone(campo);
    expect(campo.value).toBe('(21) 2233-4455');
  });

  it('formata celular 11 dígitos', () => {
    var campo = criarCampo('21987654321');
    aplicarMascaraTelefone(campo);
    expect(campo.value).toBe('(21) 98765-4321');
  });

  it('ignora caracteres não numéricos', () => {
    var campo = criarCampo('(21) 98765-4321');
    aplicarMascaraTelefone(campo);
    expect(campo.value).toBe('(21) 98765-4321');
  });

  it('trunca para no máximo 11 dígitos', () => {
    var campo = criarCampo('2198765432199');
    aplicarMascaraTelefone(campo);
    expect(campo.value).toBe('(21) 98765-4321');
  });
});

describe('link do WhatsApp (montarLinkWhatsApp)', () => {
  function montarLinkWhatsApp(numeroDigitado) {
    var digitos = numeroDigitado.replace(/\D/g, '');
    if (!digitos) {
      return '';
    }
    var comCodigoPais = digitos.length <= 11 ? '55' + digitos : digitos;
    return 'https://wa.me/' + comCodigoPais;
  }

  it('retorna vazio para número vazio', () => {
    expect(montarLinkWhatsApp('')).toBe('');
  });

  it('adiciona prefixo 55 para número com 11 dígitos', () => {
    expect(montarLinkWhatsApp('21987654321')).toBe('https://wa.me/5521987654321');
  });

  it('adiciona prefixo 55 para número com 10 dígitos', () => {
    expect(montarLinkWhatsApp('2122334455')).toBe('https://wa.me/552122334455');
  });

  it('mantém número que já tem código do país (12+ dígitos)', () => {
    expect(montarLinkWhatsApp('5521987654321')).toBe('https://wa.me/5521987654321');
  });

  it('remove máscara antes de gerar link', () => {
    expect(montarLinkWhatsApp('(21) 98765-4321')).toBe('https://wa.me/5521987654321');
  });
});

describe('montar registro do conselho', () => {
  function montarRegistro(siglaSelecionada, uf, numero, outro) {
    var sigla = siglaSelecionada === '__outro__' ? outro : siglaSelecionada;
    if (!sigla || !numero) {
      return '';
    }
    return uf ? (sigla + '/' + uf + ' ' + numero) : (sigla + ' ' + numero);
  }

  it('retorna vazio sem sigla e número', () => {
    expect(montarRegistro('', '', '', '')).toBe('');
  });

  it('retorna vazio sem número', () => {
    expect(montarRegistro('CRM', 'RJ', '', '')).toBe('');
  });

  it('formata com sigla e número (sem UF)', () => {
    expect(montarRegistro('CRM', '', '12345', '')).toBe('CRM 12345');
  });

  it('formata com sigla, UF e número', () => {
    expect(montarRegistro('CRM', 'RJ', '12345', '')).toBe('CRM/RJ 12345');
  });

  it('usa campo "outro" quando sigla é __outro__', () => {
    expect(montarRegistro('__outro__', 'RJ', '99999', 'Conselho Regional de X')).toBe('Conselho Regional de X/RJ 99999');
  });
});

describe('montar endereço', () => {
  function formatarAndar(valor) {
    if (!valor) return '';
    var jaCompleto = /andar|térreo|terreo|subsolo|cobertura|mezanino|sobreloja/i.test(valor);
    if (jaCompleto) return valor;
    var comOrdinal = /º$/.test(valor) ? valor : valor + 'º';
    return comOrdinal + ' andar';
  }

  function montarEndereco(base, predio, andar, sala, cidadeUf) {
    var complemento = [];
    if (predio) complemento.push(predio);
    if (andar) complemento.push(formatarAndar(andar));
    if (sala) complemento.push('Sala ' + sala);
    if (!base) return '';
    var texto = complemento.length ? base + ', ' + complemento.join(', ') : base;
    return cidadeUf ? texto + ' – ' + cidadeUf : texto;
  }

  it('retorna vazio sem base', () => {
    expect(montarEndereco('', '', '', '', '')).toBe('');
  });

  it('retorna apenas base', () => {
    expect(montarEndereco('BR-465, km 7', '', '', '', '')).toBe('BR-465, km 7');
  });

  it('adiciona prédio e sala', () => {
    expect(montarEndereco('BR-465, km 7', 'Prédio Principal', '', '210', '')).toBe('BR-465, km 7, Prédio Principal, Sala 210');
  });

  it('formata andar numérico', () => {
    expect(montarEndereco('BR-465, km 7', '', '2', '', '')).toBe('BR-465, km 7, 2º andar');
  });

  it('mantém andar já completo (térreo)', () => {
    expect(montarEndereco('BR-465, km 7', '', 'Térreo', '', '')).toBe('BR-465, km 7, Térreo');
  });

  it('adiciona cidade/UF ao final', () => {
    expect(montarEndereco('BR-465, km 7', '', '', '', 'Seropédica/RJ')).toBe('BR-465, km 7 – Seropédica/RJ');
  });

  it('combina tudo: base, prédio, andar, sala e cidade/UF', () => {
    expect(montarEndereco('BR-465, km 7', 'Prédio Principal', '2', '210', 'Seropédica/RJ'))
      .toBe('BR-465, km 7, Prédio Principal, 2º andar, Sala 210 – Seropédica/RJ');
  });
});

describe('salvar e carregar dados locais (localStorage)', () => {
  var CHAVE_ARMAZENAMENTO = 'ufrrj_gerador_assinatura_v1';

  function salvarDadosLocais(campos) {
    var dados = {};
    Object.keys(campos).forEach(function (id) {
      dados[id] = campos[id];
    });
    window.localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(dados));
  }

  function carregarDadosLocais(camposIds) {
    var bruto = window.localStorage.getItem(CHAVE_ARMAZENAMENTO);
    if (!bruto) return {};
    var dados = JSON.parse(bruto);
    var resultado = {};
    camposIds.forEach(function (id) {
      if (typeof dados[id] !== 'undefined') {
        resultado[id] = dados[id];
      }
    });
    return resultado;
  }

  beforeEach(() => {
    window.localStorage.clear();
  });

  it('salva e carrega dados corretamente', () => {
    var campos = {
      in_nome: 'Maria da Silva',
      in_cargo: 'Assistente',
      in_telefone: '(21) 98765-4321',
      in_whatsapp: '(21) 99999-9999',
      in_redes_sociais: true
    };
    salvarDadosLocais(campos);
    var carregado = carregarDadosLocais(Object.keys(campos));
    expect(carregado.in_nome).toBe('Maria da Silva');
    expect(carregado.in_cargo).toBe('Assistente');
    expect(carregado.in_telefone).toBe('(21) 98765-4321');
    expect(carregado.in_whatsapp).toBe('(21) 99999-9999');
    expect(carregado.in_redes_sociais).toBe(true);
  });

  it('retorna objeto vazio quando localStorage está vazio', () => {
    var carregado = carregarDadosLocais(['in_nome']);
    expect(carregado).toEqual({});
  });

  it('ignora campos não salvos', () => {
    salvarDadosLocais({ in_nome: 'João' });
    var carregado = carregarDadosLocais(['in_nome', 'in_cargo']);
    expect(carregado.in_nome).toBe('João');
    expect(carregado.in_cargo).toBe(undefined);
  });
});

describe('copiar assinatura (validação mínima)', () => {
  it('valida que Nome e Cargo são obrigatórios para copiar', () => {
    // Simula a validação de copiarAssinatura
    function podeCopiar(nome, cargo) {
      return Boolean(nome && cargo);
    }

    expect(podeCopiar('Maria', 'Assistente')).toBe(true);
    expect(podeCopiar('', 'Assistente')).toBe(false);
    expect(podeCopiar('Maria', '')).toBe(false);
    expect(podeCopiar('', '')).toBe(false);
  });
});
