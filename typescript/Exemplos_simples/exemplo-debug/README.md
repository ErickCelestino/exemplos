# Como configurar o debug

- Link do video <a href="https://www.youtube.com/watch?v=f3i9b3uK00U&ab_channel=RobertsDevTalk">Debug</a>

- Primeiro você precisa baixar as bibliotecas

```bash
    npm i -D typescript ts-node tsconfig-paths
```

- Faça todo o processo para configurar o typescript

- Dentro do lauch.json

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "runtimeArgs": [ "-r", "ts-node/register", "-r", "tsconfig-paths/register" ],
            "console": "integratedTerminal",
        }
    ]
}
```
