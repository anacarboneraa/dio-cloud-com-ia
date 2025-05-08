# Criando uma Instância Gerenciada do Azure SQL (via Portal)

## Você vai precisar de:

- Uma conta na Azure  
- Permissão para criar recursos na sua assinatura ou grupo de recursos  
- Uma rede virtual (VNet) com sub-rede delegada (pode ser criada durante o processo)

## As etapas são:

### 1. Acessar o Portal Azure

1. Vá para [https://portal.azure.com](https://portal.azure.com)  
2. Faça login com sua conta Microsoft

### 2. Criar uma nova instância gerenciada

1. No menu esquerdo, pesquise por **Instância Gerenciada do Azure SQL**  
2. Clique em **+ Criar**

### 3. Configure as informações básicas

- **Assinatura:** Selecione sua assinatura  
- **Grupo de recursos:** Crie um novo ou selecione um existente  
- **Nome da instância:** Defina um nome único  
- **Região:** Escolha a região desejada  
- **Tipo de compra:** Use o padrão (vCore baseado em DTU não é suportado aqui)  
- **Camada de serviço:** Selecione **General Purpose** ou **Business Critical**  
- **vCores e armazenamento:** Escolha a quantidade de vCores e o tamanho de armazenamento

### 4. Configurações de rede

- Escolha uma **rede virtual (VNet)** existente ou crie uma nova  
- Se necessário, crie uma **sub-rede delegada** para `Microsoft.Sql/managedInstances`

### 5. Autenticação

- Defina um **nome de administrador** e **senha**  
- (Opcional) Configure autenticação via **Azure Active Directory**

### 6. Revisar e criar

- Clique em **Revisar + criar**  
- Após a validação, clique em **Criar**

### 7. Aguardar a implantação

- A criação pode levar de **4 a 6 horas**, dependendo da configuração de rede e região

## Pronto!

Sua instância gerenciada está criada e pronta para uso. Agora você pode se conectar a ela usando ferramentas como **Azure Data Studio** ou **SQL Server Management Studio (SSMS)**.

## Referência

- Documentação oficial: [Criar uma instância gerenciada do Azure SQL](https://learn.microsoft.com/pt-br/azure/azure-sql/managed-instance/instance-create-quickstart?view=azuresql&tabs=azure-portal)
