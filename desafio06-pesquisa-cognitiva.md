## Etapa 1: Ingestão de Conteúdo para IA

### O que é?

Ingestão é o processo de **importar, analisar e preparar dados** para que possam ser utilizados em aplicações de IA, como busca semântica e análise contextual.

### Ferramenta Utilizada

- **Azure AI Search** (anteriormente Azure Cognitive Search)

### Etapas:

1. **Criar um Serviço de Busca Cognitiva**

   - Acesse o [Portal Azure](https://portal.azure.com)
   - Pesquise por “Azure AI Search” ou “Busca Cognitiva”
   - Clique em **+ Criar**
   - Configure: nome, grupo de recursos, local, plano de preços
   - Finalize clicando em **Revisar + Criar**

2. **Criar um Repositório de Dados**

   - Usamos uma **Conta de Armazenamento (Blob Storage)**
   - Crie contêineres e faça upload dos documentos (PDFs, DOCX, imagens, etc.)
   - Certifique-se de que os documentos estejam com permissões adequadas para leitura

3. **Conectar o Repositório à Busca Cognitiva**

   - No recurso do Azure AI Search:
     - Crie uma **fonte de dados** apontando para o Blob Storage
     - Crie um **indexador** para extrair metadados e conteúdo
     - Utilize **habilidades cognitivas** como OCR, tradução, detecção de idioma, extração de entidades etc.

---

## Etapa 2: Criação de Índices Inteligentes

### O que é?

Índices inteligentes são estruturas otimizadas para **pesquisa e recuperação de dados** com base em critérios semânticos e linguísticos, e não apenas por palavras-chave.

### Etapas:

1. **Definir um Índice**

   - Estrutura com campos como: nome, tipo de conteúdo, linguagem, entidade, parágrafos, etc.
   - Pode incluir campos personalizados para filtros

2. **Mapear Campos Extraídos**

   - Durante a criação do indexador, selecione os campos relevantes para o índice
   - Exemplo: título, conteúdo extraído, autor, data, tipo de entidade

3. **Aplicar Habilidades Cognitivas**

   - OCR para imagens e PDFs escaneados
   - Extração de frases-chave
   - Reconhecimento de entidades (pessoas, locais, datas)
   - Tradução e detecção de idioma

---

## Etapa 3: Exploração Prática dos Dados

### Ferramentas e Testes:

- Teste diretamente via portal Azure no recurso de busca
- Utilize **Azure OpenAI** para criar uma camada de **perguntas e respostas (Q&A)** baseada nos dados indexados
- Realize buscas com linguagem natural, como:
  - "Quais são os principais temas abordados no documento X?"
  - "Quem são os autores mais citados?"
  - "Resumo sobre determinado assunto"

---

## Aplicações Reais

- **Busca interna em grandes repositórios de documentos**
- Sistemas de **resposta automática a dúvidas frequentes (FAQ)**
- Apoio a times jurídicos, educacionais, administrativos
- **Mineração de conhecimento** em textos antigos, históricos ou científicos

---

## Insights Obtidos

- A separação entre **fonte de dados**, **indexador** e **índice** torna o processo modular e fácil de escalar.
- A combinação de OCR + habilidades cognitivas permite enriquecer documentos simples com **metadados úteis** para IA.
- Com a integração do Azure OpenAI, é possível transformar documentos técnicos em **respostas claras e acessíveis**, abrindo possibilidades para uso em atendimento, educação, e consultoria.

---

## Conclusão

A prática permitiu consolidar o conhecimento sobre **organização inteligente de documentos**, desde a ingestão até a exploração com IA. Com essas ferramentas, é possível lidar com grandes volumes de dados de forma eficiente, gerando valor por meio da extração de conhecimento.

Este repositório serve como base para estudos futuros e implementação de soluções reais com **Azure Cognitive Search + Azure OpenAI**.

---

## Referências

- [Documentação oficial Azure AI Search](https://learn.microsoft.com/pt-br/azure/search/)
- [Habilidades Cognitivas no Azure](https://learn.microsoft.com/pt-br/azure/search/cognitive-search-skillset-overview)
- [Azure OpenAI e Indexação de Dados](https://learn.microsoft.com/pt-br/azure/ai-services/openai/use-your-data-overview)
