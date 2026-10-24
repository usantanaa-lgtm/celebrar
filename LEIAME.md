# Celebrar

Música, repertórios e liturgia para quem serve na música da igreja. Funciona offline, no tablet e no celular.

Arquivos deste site: `index.html`, `manifest.webmanifest`, `sw.js`, os 3 ícones `.png`, `.nojekyll` e a pasta `pdfjs/` (leitor de PDF da Biblioteca — envie a pasta inteira).
O seu acervo (`celebrar-acervo-inicial.json`) **não** fica aqui: o repositório é público. Guarde-o no Drive.

---

## 1. Publicar no GitHub Pages (uma vez)

1. Entre em github.com → **New repository**.
   Nome: `celebrar` · **Public** (o Pages gratuito exige público) · Create.
2. Na página do repositório: **Add file → Upload files** e arraste todos os arquivos desta pasta (o `.nojekyll` é opcional). **Commit changes**.
3. **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main / (root) → Save.**
4. Em 1–2 minutos o endereço aparece no topo dessa tela:
   `https://SEU-USUARIO.github.io/celebrar/`

## 2. Criar o acesso ao Google Drive no Google Cloud (uma vez, ~10 min)

1. Entre em console.cloud.google.com com a conta Google onde quer guardar os dados.
2. No topo: **Selecionar projeto → Novo projeto** → nome `Celebrar` → Criar.
3. Menu ☰ → **APIs e serviços → Biblioteca** → procure **Google Drive API** → **Ativar**.
4. **APIs e serviços → Tela de permissão OAuth** (ou "Google Auth Platform"):
   - Tipo de usuário: **Externo** → Criar.
   - Nome do app: `Celebrar` · e-mail de suporte e de contato: o seu.
   - Em **Público-alvo / Usuários de teste**, adicione o seu próprio e-mail (e o de quem for usar).
   - Escopos: não precisa adicionar nada (o app pede só `drive.file`).
5. **APIs e serviços → Credenciais → + Criar credenciais → ID do cliente OAuth**:
   - Tipo: **Aplicativo da Web** · Nome: `Celebrar web`.
   - **Origens JavaScript autorizadas** → adicionar: `https://SEU-USUARIO.github.io`
     (só o domínio, sem `/celebrar/` no fim).
   - Não precisa de "URIs de redirecionamento".
   - Criar → copie o **ID do cliente** (termina em `.apps.googleusercontent.com`).
6. Coloque o ID no app, de um destes jeitos:
   - **Para todos os aparelhos:** no GitHub, abra `index.html` → ✎ → procure `googleClientId: ""` (fica no começo do arquivo) → cole o ID entre as aspas → Commit.
   - **Só neste aparelho:** no app, **⋯ / Ajustes → Google Drive → Client ID do Google** → cole → Salvar.

O ID do cliente não é senha; pode ficar no repositório público. Enquanto o app estiver em "Teste" no Google, só os e-mails cadastrados como usuários de teste conseguem conectar e o Google pode mostrar o aviso "app não verificado" (toque em Continuar). Para liberar para outros irmãos depois, publique a tela de permissão (o escopo `drive.file` não exige verificação).

## 3. Primeiro uso e sincronização

**No tablet (onde está o acervo):**
1. Abra o endereço do GitHub Pages.
2. Ajustes → **Importar backup / acervo** → escolha `celebrar-acervo-inicial.json` (ou seu último backup).
3. Ajustes → **Conectar ao Google Drive** → escolha sua conta → Permitir.
   O app cria a pasta **Celebrar** no seu Drive com o arquivo `celebrar-dados.json`.

**No celular:**
1. Abra o mesmo endereço → Ajustes → **Conectar ao Google Drive** → ele encontra seus dados e pergunta se quer trazer → OK.

**No dia a dia:**
- Enquanto conectado, cada mudança é salva sozinha no Drive (em ~4 segundos).
- O Google libera o acesso por 1 hora. Depois disso, toque em **Salvar no Drive** (leva o que mudou) ou **Trazer do Drive** (pega o que você fez no outro aparelho).
- Sem internet o app continua funcionando; sincronize quando voltar.
- "Trazer do Drive" junta com o que está no aparelho; se a mesma música foi mudada nos dois, fica a versão do Drive.

## Roteiro da celebração
- Num evento, toque em **📜 Roteiro**: o app monta a missa (ou o casamento) na ordem dos ritos, com os cantos de cada momento, as leituras, o salmo e as orações do dia.
- Ele segue o calendário: sem Glória no Advento e na Quaresma, Creio e 2ª leitura só aos domingos e solenidades. Em **✎ Ajustar** você liga/desliga momentos, anota e cola links do YouTube.
- **📄 PDF** (resumido ou completo) e **▶ Seguir a celebração** (tela cheia, momento a momento).

## Modos por instrumento
- Botão no topo (ex.: 𝄢 Baixo): Baixo, Violão, Teclado, Voz, Sopros, Bateria ou Completo. Muda o que aparece em cada música; os dados são os mesmos.
- Violão sugere capotraste; Sopros mostra a cifra já transposta para o instrumento (sax alto em Mi♭, tenor/trompete/clarinete em Si♭…); Voz abre na letra.

## Biblioteca (Missal, Lecionário, livros…)
- Menu lateral → **Biblioteca** → **＋ Arquivo**. Escolha a categoria antes (o arquivo entra na categoria selecionada) ou mude depois em **✎ Organizar**.
- PDF abre dentro do app: página, zoom, **⌕ buscar no texto**, **🔖 marcadores** e volta onde você parou.
- Os arquivos ficam no aparelho (funcionam sem internet). Com o Drive conectado, vão também para **Celebrar/Biblioteca** no seu Drive; no outro aparelho aparecem como "no Drive — toque para baixar".
- Seus PDFs **nunca** vão para o GitHub.

## Instalar como app
- Android (Chrome): menu ⋮ → **Instalar app** / Adicionar à tela inicial.
- iPhone (Safari): **Compartilhar → Adicionar à Tela de Início**.

## Atualizar para uma versão nova
Envie o novo `index.html` (Add file → Upload files, substituindo) e, em `sw.js`, aumente o número em `celebrar-v20` → `celebrar-v21`. Feche e abra o app nos aparelhos.
