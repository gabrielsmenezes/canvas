# 3. Requisitos Funcionais

A interface deve ser dividida em três áreas principais:

---

## Área 1: Gestão do Plano (A "Chapa")
**O usuário deve ser capaz de definir o plano cartesiano de trabalho.**

### RF 1.1
Selecionar uma "Chapa" (material) de uma lista existente (mockada).  
**Ex:** "Chapa A (2750x1840)", "Chapa B (2000x1000)".

### RF 1.2
Criar uma nova "Chapa", definindo Nome, Largura e Altura.

### RF 1.3
Ao selecionar ou criar uma chapa, a interface deve exibir um retângulo em escala que representa este plano, com uma grade (grid) visual para facilitar a alocação.

---

## Área 2: Gestão dos Elementos (As "Peças")
**O usuário precisa de uma lista de elementos 2D para alocar no plano.**

### RF 2.1
Um painel (ex: *sidebar*) "Peças a Alocar" deve exibir uma lista de elementos.

### RF 2.2
O usuário deve poder adicionar peças a esta lista manualmente (informando Nome, Largura, Altura e Quantidade).

### RF 2.3
O usuário deve poder carregar uma lista de peças via upload de um arquivo CSV (mockado).  
O candidato deve simular o upload e processar o mock.

#### Exemplo de CSV (nome;largura;altura;qtd):
Porta_A;600;400;2
Base;800;300;1

---

## Área 3: Interação e Alocação (O Editor)
**Esta é a funcionalidade principal, onde o usuário aloca as peças no plano.**

### RF 3.1
O usuário deve conseguir "arrastar e soltar" (Drag-and-Drop) uma peça da lista "Peças a Alocar" para dentro do plano (Chapa).

### RF 3.2
Ao ser alocada, a contagem da peça na lista "A Alocar" deve ser decrementada.

### RF 3.3 – Colisão
O sistema não deve permitir que uma peça seja alocada sobrepondo outra já existente no plano.  
O usuário deve receber um feedback visual (ex: peça em vermelho) ao tentar fazer uma alocação inválida.

### RF 3.4 – Seleção
O usuário deve poder clicar em uma peça já alocada no plano para selecioná-la (ex: mudando sua borda) e ver seus atributos.

---

# 4. Requisitos Técnicos

### RT 1.1
A aplicação deve ser desenvolvida em React com uso de TypeScript.

### RT 1.2
O candidato deve simular (mockar) as chamadas de API necessárias (ex: buscar lista de chapas ou salvar o layout).  
Não é necessário construir um backend.

### RT 1.3
O código-fonte deve ser entregue em um repositório Git (ex: GitHub), com commits lógicos que demonstrem o progresso.

### RT 1.4
A interface deve ser funcional e limpa. O foco é na funcionalidade e na lógica; o design gráfico será um diferencial.

### RT 1.5
A aplicação deve suportar internacionalização (i18n) para 5 idiomas (Português, Inglês, Espanhol, Francês, Alemão), utilizando biblioteca padrão (como react-i18next).  
Deve haver um seletor de idioma funcional na interface.
