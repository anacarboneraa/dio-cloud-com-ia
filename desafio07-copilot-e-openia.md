## GitHub Copilot

### O que é?

O **Copilot** é um assistente de programação alimentado por IA, desenvolvido pela GitHub em parceria com a OpenAI. Ele oferece sugestões de código em tempo real com base no contexto do que o desenvolvedor está escrevendo.

### Recursos principais:

- Autocompletar código
- Sugestões de funções inteiras
- Geração de testes unitários
- Explicação de trechos de código
- Tradução entre linguagens de programação

---

### Como usar

1. **Pré-requisitos**
   - Conta GitHub com Copilot ativado
   - Editor de código (VS Code, Neovim ou JetBrains)
   - Extensão do GitHub Copilot instalada

2. **Ativação no VS Code**
   - Instale a extensão “GitHub Copilot”
   - Faça login com sua conta GitHub
   - Crie um arquivo de código e comece a digitar para ver as sugestões

3. **Dicas de uso**
   - Use comentários descritivos para guiar a IA (`// Função que soma dois números`)
   - Experimente com diferentes linguagens
   - Combine com boas práticas de desenvolvimento para revisar os resultados

---

## Ferramentas da OpenAI

### ChatGPT (Web)

- Interface de conversa para criação de conteúdo, explicações, brainstorming, geração de código, etc.
- Ideal para testes rápidos de prompts e criação de exemplos interativos

### API da OpenAI

- Permite integrar modelos como `gpt-4`, `gpt-3.5`, `whisper`, `dall-e`, entre outros, em aplicações próprias
- Possível realizar:
  - Geração de texto, código, resumos, explicações
  - Transcrição de áudio (Whisper)
  - Geração de imagens (DALL·E)
  - Moderação de conteúdo com filtros específicos

---

## Filtros de Conteúdo

### Moderação via OpenAI

- A OpenAI oferece um endpoint de **moderação** que avalia se o conteúdo gerado ou recebido é seguro.
- Os principais filtros são:
  - Hate
  - Harassment
  - Sexual
  - Violence
  - Self-harm
- Retorna sinalizações booleanas e scores para cada categoria

### Como testar:

```bash
POST https://api.openai.com/v1/moderations
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "input": "Texto para verificação"
}
```

---

## Referências

- [GitHub Copilot - Documentação Oficial](https://docs.github.com/pt/copilot)
- [OpenAI - API Reference](https://platform.openai.com/docs/)
