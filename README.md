# prisma-api-hw

## Instalar as dependências

```bash
npm install
```

# Comandos:

### Migrate
```bash
npx prisma db push --preview-feature
```
> Às vezes o Prisma pode dar algum erro de permissão quando tenta dar um migrate para um bd remoto. Algumas POSSÍVEIS soluções:
> * https://github.com/prisma/prisma/issues/4571#issuecomment-747496127
> * https://github.com/prisma/prisma/issues/4571#issuecomment-995797802

> Setup do postgres no Docker: https://nditah.hashnode.dev/up-and-running-with-docker-in-5-minute


### Teste de API
```bash
npx ts-node src/main.ts
```

### Iniciar a API
```bash
npx ts-node src/index.ts
```

