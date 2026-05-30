### Participantes
Felipe Biava Favarin

### Sobre
Projeto avaliativo destinado a disciplina de Infraestrutura e Serviços Web, ministrada pela Professora Angelita Rettore de Araujo, pelo Instituto Federal Catarinense - Videira.

## Descrição do Projeto
### Introdução
A AngelCorp, empresa brasileira de atuação global em soluções computacionais, está expandindo sua plataforma digital para atender novos clientes internacionais. A Divisão de Sistemas e a Divisão de Redes e Comunicação identificaram a necessidade de modernizar a infraestrutura de uma aplicação web interna, migrando-a para uma arquitetura baseada em contêineres orquestrados por Kubernetes. Você foi contratado(a) como Engenheiro(a) de Infraestrutura Júnior da AngelCorp e deverá projetar, implementar e apresentar essa solução.

### Objetivos
#### Objetivo Geral
Desenvolver uma aplicação web containerizada com três camadas (frontend, backend/API e banco de dados), orquestrada pelo Kubernetes, aplicando conceitos de conteinerização, comunicação entre contêineres, persistência de dados e exposição de serviços.

#### Objetivos Específicos
Ao final deste projeto, o aluno deverá ser capaz de:

- Construir e publicar imagens Docker/Podman customizadas para frontend e backend.

- Utilizar imagem oficial para o banco de dados.

- Configurar comunicação entre contêineres via rede interna (ClusterIP).

- Expor o frontend ao mundo externo via NodePort ou equivalente.

- Implementar persistência de dados com Persistent Volume (PV) e Persistent Volume Claim (PVC).

- Gerenciar configurações sensíveis com ConfigMaps e Secrets do Kubernetes.

- Orquestrar todos os serviços com Deployments do Kubernetes.

- Documentar toda a infraestrutura com docker-compose.yml e manifests YAML do Kubernetes.

### Arquitetura do Projeto
A solução proposta deve seguir uma arquitetura de três camadas, onde cada camada é representada por um ou mais contêineres, com responsabilidades bem definidas e comunicação controlada. A seguir, detalhamos cada um dos contêineres e suas características.


#### Contêiner 1 — Frontend (Web)
Descrever a tecnologia utilizada

HTML + CSS + JS simples mostrando uma caixa de texto onde o usuário terá que digitar uma tarefa do seu dia a dia (texto puro)
O usuário, ao clicar em enter confirmando o texto escrito, fará com que o texto apareça embaixo.

O objetivo disso é simplesmente mostrar a estrutura complexa de DevOps exigida para esse trabalho. Tendo um frontend simples

Rotas da API usando node JS:
Rota principal que terá a caixa de texto e que será acessada pelo usuário:
localhost:3005/home

GET - localhost:3005/home/tasks

listará todas as tarefas, as que estejam no banco de dados e as que foram colocadas pelo usuário

Banco de dados Postgrees, já haverá apenas dois dados / inputs de tarefas lá, somente para quando acessar a rota /tasks aparecer as tarefas do banco também



#### Contêiner 2 — Backend / API
Descrever a tecnologia utilizada

#### Contêiner 3 — Banco de Dados
Descrever a tecnologia utilizada

Banco de dados será o Postgrees, já haverá apenas dois dados / inputs de tarefas lá, somente para quando acessar a rota /tasks aparecer as tarefas do banco também

Usar imagem oficial do postgres para docker
POSTGRES_USER = admin
POSTGRES_PASSWORD = admin
Porta que o serviço postgres usa: 5432


### Organização do Projeto
A estrutura de diretórios do projeto segue a seguinte organização abaixo para facilitar a revisão e compreensão:

Execute o comando tree no terminal wsl ubuntu e verá a árvore do projeto

### Formato da Entrega
A entrega será através de link do repositório público do Aluno no Github
