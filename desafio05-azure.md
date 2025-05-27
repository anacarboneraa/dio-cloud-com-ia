
## Azure Speech Studio

### O que é?

O **Azure Speech Studio** é uma ferramenta da Microsoft que permite criar e testar modelos baseados em fala. Ele oferece funcionalidades como:

- Reconhecimento de fala (Speech to Text)
- Conversão de texto em fala (Text to Speech)
- Tradução de fala
- Customização de voz

---

### Você vai precisar de:

- Conta na Azure com permissão para criar recursos
- Serviço de **Speech** criado no portal Azure
- Chave e endpoint da API (usados no Speech Studio)

---

### Etapas para usar o Speech Studio:

1. **Criar o recurso de Fala (Speech)**

   - Acesse o portal: [https://portal.azure.com](https://portal.azure.com)
   - Pesquise por “Fala” ou “Speech”
   - Clique em **+ Criar**
   - Preencha os campos: assinatura, grupo de recursos, nome, região e plano de preço
   - Clique em **Revisar + Criar** e depois em **Criar**

2. **Acessar o Speech Studio**

   - Vá para [https://speech.microsoft.com](https://speech.microsoft.com)
   - Faça login com a conta vinculada à Azure
   - Selecione o recurso de fala criado anteriormente

3. **Realizar Testes**

   - **Speech to Text**: Faça upload de um arquivo de áudio ou grave sua fala diretamente na ferramenta e visualize a transcrição gerada.
   - **Text to Speech**: Digite um texto e selecione uma voz (neural ou padrão). A ferramenta gera o áudio com a voz escolhida.
   - **Personal Voice** (avançado): Permite treinar uma voz personalizada com base em exemplos.

4. **Exportar Resultados**

   - Os resultados podem ser salvos em texto ou baixados como arquivos de áudio (para TTS).

---

## Azure Language Studio

### O que é?

O **Azure Language Studio** permite aplicar modelos de processamento de linguagem natural (NLP) a textos em linguagem humana. Oferece funcionalidades como:

- Análise de sentimento
- Extração de entidades nomeadas
- Detecção de idioma
- Classificação personalizada de texto
- Extração de frases-chave

---

### Você vai precisar de:

- Conta na Azure com permissão para criar recursos
- Serviço de **Language** criado no portal Azure
- Chave e endpoint da API de linguagem

---

### Etapas para usar o Language Studio:

1. **Criar o recurso de Language**

   - No portal Azure, pesquise por “Language” ou “Serviços Cognitivos”
   - Clique em **+ Criar**
   - Preencha os dados básicos: nome, região, grupo de recursos e plano
   - Clique em **Revisar + Criar** e depois em **Criar**

2. **Acessar o Language Studio**

   - Vá para [https://language.cognitive.azure.com](https://language.cognitive.azure.com)
   - Faça login com a conta vinculada à Azure
   - Selecione o recurso criado

3. **Realizar Testes**

   - **Análise de Sentimento**: insira um texto e veja a avaliação (positivo, neutro, negativo)
   - **Extração de Entidades**: identifica nomes, datas, locais e outros elementos
   - **Frases-chave**: detecta os principais tópicos de um texto
   - **Customização de Modelos**: permite treinar um modelo com textos personalizados (classificação de temas, por exemplo)

4. **Exportar Resultados**

   - Copie os resultados diretamente ou use a API para integrar com outras aplicações.

---

## Aplicações Práticas

- Criação de **chatbots inteligentes**
- **Transcrição de reuniões** com análise automática de sentimentos
- Leitura automatizada de textos com **voz natural**
- Análise de **feedbacks e reviews** de clientes
- Ferramentas de acessibilidade (voz para texto e vice-versa)

---

## Conclusão

O uso das ferramentas **Azure Speech Studio** e **Language Studio** permite explorar aplicações reais de inteligência artificial com foco em fala e linguagem. As soluções são acessíveis via interface gráfica e também via API, facilitando a integração com projetos maiores.

Este laboratório serviu como uma introdução prática valiosa ao universo do **Speech e NLP na Azure**, e abre caminho para projetos futuros que envolvam interações humanas mais naturais com sistemas computacionais.

---

## Referências

- [Documentação oficial Speech](https://learn.microsoft.com/pt-br/azure/cognitive-services/speech-service/)
- [Documentação oficial Language](https://learn.microsoft.com/pt-br/azure/cognitive-services/language-service/)
- [Speech Studio](https://speech.microsoft.com/)
- [Language Studio](https://language.cognitive.azure.com/)
