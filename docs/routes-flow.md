# Routes Creation Flow:

## Para criação de rotas é necessário:

1. Criar pasta de _domínio_ dentro de `routes` com os arquivos:

- `index.tsx`
- `routes.ts`

> Exemplo: Todas as rotas que forem relacionado a _Perfil de Acesso_, ficarão na
> pasta _AccessProfile_ dentro de `routes`.

- No arquivo `routes.ts` adicionaremos o `enum` com todas as rotas:

```js
  export enum AccessProfileRoutes {
    ACCESS_PROFILE_LIST = '/access_profile/list',
  }
```

- No arquivo `index.ts` adicionaremos as rotas com o React Router DOM:

```js
  import { LoginRoutes as RT } from './routes'

  <Routes>
    <Route path={RT.LOGIN} element={<Component />} />
  </Routes>
```
