# Criando uma Máquina Virtual (VM) na Azure (via Portal)

## Você vai precisar de:

- Uma conta na Azure
- Permissão para criar recursos no seu grupo de recursos

## As etapas são:

### 1. Acessar o Portal Azure

1. Vá para [https://portal.azure.com](https://portal.azure.com)
2. Faça login com sua conta Microsoft

### 2. Criar uma nova máquina virtual

1. No menu esquerdo, clique em **Máquinas virtuais**.
2. Clique em **+ Criar** > **Máquina virtual**.

### 3. Configure as informações básicas

- **Assinatura:** Selecione sua assinatura.
- **Grupo de recursos:** Crie um novo ou escolha um existente.
- **Nome da máquina virtual:** Defina um nome para sua VM.
- **Região:** Escolha uma região próxima de você.
- **Imagem:** Selecione o sistema operacional (Windows ou Linux).
- **Tamanho:** Clique em **Alterar tamanho** e selecione uma opção.
- **Nome de usuário e senha:** Insira as credenciais de administrador.

### 4. Configurações de disco

- Use o disco padrão (SSD Premium ou HDD padrão, dependendo do custo/necessidade).

### 5. Configurações de rede

- Mantenha as opções padrão para rede virtual e IP público.
- Permita portas de entrada selecionadas (por padrão RDP 3389 estará habilitado).

### 6. Revisar e criar

- Clique em **Revisar + criar**.
- Após a validação, clique em **Criar**.

### 7. Acessar a VM

- Após a implantação, vá para a VM.
- Clique em **Conectar** > **RDP**.
- Baixe o arquivo `.rdp` e conecte-se usando suas credenciais.

## Pronto!

Sua máquina virtual Windows está ativa na Azure e pronta para uso.

## Referência

- Documentação oficial: [Criar uma VM Windows na Azure](https://learn.microsoft.com/pt-br/azure/virtual-machines/windows/quick-create-portal)
