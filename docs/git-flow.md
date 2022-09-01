# Git Flow:

## Processos de desenvolvimento:

### Commits:

Os commits seguem o padrão
[conventional commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) em
inglês.

Antes de cada commit ser dado, os arquivos passam por validação de estilo e
testes. Os seguintes comandos são rodados:

- `yarn lint-staged`

Esse comando roda os testes relacionados aos arquivos commitados, e também roda
verificações de estilo nos arquivos `ts`, `js`, `jsx` e `tsx`. Também roda
verificações de estilo nos arquivos `scss`.

### Push:

Os pushs para o repositório remoto passam por um passo: rodar todos os testes
unitários e de integração.

Os seguintes comandos são rodados:

- `yarn test:coverage`

- `yarn cy:run`

Como os testes de integração são executados pelo _cypress_, é necessário estar
com o servidor front-end rodando.

### Pull Request:

Os PR's seguem o padrão definido [aqui](../.github/pull_request_template.md).

São feitos em Pt-BR.

---

Outras informações sobre o **Git Flow** podem ser encontradas em {COLOCAR LINK
PARA DOCUMENTAÇÃO AQUI}.
