import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, PageHero } from "../components";

const title = "Política de Privacidade";
const description = "Saiba como a ADA coleta, usa e protege seus dados pessoais. Leia nossa Política de Privacidade.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacidade" },
  openGraph: {
    type: "website",
    url: "/privacidade",
    title: `${title} | ADA ERP`,
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ADA ERP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ADA ERP`,
    description,
    images: ["/og-image.png"],
  },
};

export default function Privacidade() {
  return (
    <main>
      <Header />
      <PageHero
        label="Legal"
        title="Política de"
        highlight="Privacidade"
        text="Nesta página, explicamos como a ADA coleta, utiliza, armazena e protege seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD)."
      />

      <section className="legal-page">
        <article className="legal-content">
          <h2>Última atualização: 28 de maio de 2025</h2>

          <p>A ADA ERP está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você utiliza nosso site (adasys.com.br) e nossos serviços de sistema ERP para e-commerce.</p>
          <p>Ao acessar ou utilizar nossos serviços, você concorda com as práticas descritas nesta Política de Privacidade. Se você não concordar com esta política, por favor, não utilize nosso site ou serviços.</p>

          <h3>1. Informações que coletamos</h3>
          <h4>1.1. Informações fornecidas diretamente por você</h4>
          <p>Podemos coletar os seguintes tipos de informações que você nos fornece voluntariamente:</p>
          <ul>
            <li><strong>Informações de contato:</strong> Nome, endereço de e-mail, número de telefone e outras informações semelhantes quando você solicita uma demonstração, assina nossa newsletter ou entra em contato conosco.</li>
            <li><strong>Informações da empresa:</strong> Nome da empresa, cargo, setor e outras informações relacionadas ao seu negócio.</li>
            <li><strong>Conteúdo de comunicações:</strong> Informações que você fornece ao preencher formulários, responder pesquisas, participar de promoções ou se comunicar conosco.</li>
          </ul>

          <h4>1.2. Informações coletadas automaticamente</h4>
          <p>Quando você interage com nosso site, podemos coletar automaticamente certas informações sobre seu dispositivo e uso do site, incluindo:</p>
          <ul>
            <li><strong>Informações do dispositivo:</strong> Tipo de dispositivo, sistema operacional, tipo de navegador, configurações de idioma e outras características técnicas.</li>
            <li><strong>Informações de uso:</strong> Páginas visitadas, tempo gasto no site, links clicados, padrões de navegação e outras estatísticas de uso.</li>
            <li><strong>Informações de localização:</strong> Localização geográfica aproximada com base no seu endereço IP ou GPS (com seu consentimento).</li>
            <li><strong>Cookies e tecnologias semelhantes:</strong> Utilizamos cookies, web beacons e tecnologias similares para coletar informações sobre sua interação com nosso site.</li>
          </ul>

          <h3>2. Como utilizamos suas informações</h3>
          <p>Utilizamos as informações coletadas para os seguintes propósitos:</p>

          <h4>2.1. Fornecimento e melhoria dos serviços</h4>
          <ul>
            <li>Fornecer, manter e melhorar nossos produtos e serviços.</li>
            <li>Personalizar sua experiência e entregar conteúdo relevante para seus interesses.</li>
            <li>Desenvolver novos produtos, serviços e funcionalidades.</li>
            <li>Realizar pesquisas e análises para melhorar nossos serviços.</li>
          </ul>

          <h4>2.2. Comunicação</h4>
          <ul>
            <li>Responder a suas solicitações, perguntas e comentários.</li>
            <li>Enviar informações técnicas, atualizações, alertas de segurança e mensagens administrativas.</li>
            <li>Comunicar sobre novos produtos, serviços, ofertas e promoções (com seu consentimento, quando exigido por lei).</li>
            <li>Solicitar feedback sobre nossos serviços.</li>
          </ul>

          <h4>2.3. Segurança e proteção</h4>
          <ul>
            <li>Proteger nossos serviços, usuários e o público.</li>
            <li>Detectar, prevenir e resolver fraudes, violações de segurança e atividades potencialmente proibidas ou ilegais.</li>
            <li>Verificar sua identidade e prevenir acesso não autorizado às suas contas.</li>
          </ul>

          <h4>2.4. Conformidade legal</h4>
          <ul>
            <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
            <li>Estabelecer, exercer ou defender direitos legais.</li>
          </ul>

          <h3>3. Base legal para o processamento</h3>
          <p>Processamos suas informações pessoais com base nas seguintes justificativas legais:</p>
          <ul>
            <li><strong>Execução de contrato:</strong> Quando o processamento é necessário para cumprir um contrato com você ou para tomar medidas a seu pedido antes de celebrar um contrato.</li>
            <li><strong>Consentimento:</strong> Quando você deu seu consentimento para o processamento de suas informações pessoais para finalidades específicas.</li>
            <li><strong>Interesses legítimos:</strong> Quando o processamento é necessário para nossos interesses legítimos ou de terceiros, desde que seus direitos e liberdades fundamentais não prevaleçam sobre esses interesses.</li>
            <li><strong>Obrigação legal:</strong> Quando o processamento é necessário para cumprir uma obrigação legal à qual estamos sujeitos.</li>
          </ul>

          <h3>4. Compartilhamento de informações</h3>
          <h4>4.1. Conformidade legal e proteção</h4>
          <p>Podemos divulgar suas informações quando acreditarmos de boa-fé que a divulgação é necessária para:</p>
          <ul>
            <li>Cumprir com a lei, regulamentos, processos legais ou solicitações governamentais.</li>
            <li>Proteger nossos direitos, propriedade ou segurança, bem como a de nossos usuários ou do público.</li>
            <li>Detectar, prevenir ou investigar fraudes, abusos, uso ilegal ou violações de nossos Termos de Uso.</li>
          </ul>

          <h4>4.2. Transações corporativas</h4>
          <p>Se estivermos envolvidos em uma fusão, aquisição, venda de ativos ou falência, suas informações podem ser transferidas como parte desse processo. Notificaremos você (por meio de um aviso em nosso site ou por e-mail) sobre qualquer mudança na propriedade ou uso de suas informações pessoais, bem como sobre suas opções em relação às suas informações.</p>

          <h4>4.3. Com seu consentimento</h4>
          <p>Podemos compartilhar suas informações com terceiros quando você nos autorizar expressamente a fazê-lo.</p>

          <h3>5. Segurança das informações</h3>
          <p>Implementamos medidas técnicas, administrativas e físicas projetadas para proteger suas informações pessoais contra acesso não autorizado, uso indevido, alteração ou destruição. Essas medidas incluem:</p>
          <ul>
            <li>Criptografia de dados em trânsito e em repouso.</li>
            <li>Controles de acesso rigorosos para limitar o acesso às informações.</li>
            <li>Monitoramento de segurança e detecção de intrusões.</li>
            <li>Treinamento de segurança para colaboradores.</li>
          </ul>
          <p>No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Portanto, não podemos garantir sua segurança absoluta.</p>

          <h3>6. Retenção de dados</h3>
          <p>Retemos suas informações pessoais pelo tempo necessário para cumprir as finalidades descritas nesta Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei. Os critérios utilizados para determinar nossos períodos de retenção incluem:</p>
          <ul>
            <li>O período durante o qual temos um relacionamento contínuo com você e fornecemos os serviços.</li>
            <li>Se estamos sujeitos a uma obrigação legal, como leis que exigem que mantenhamos registros de transações por um determinado período.</li>
            <li>Se a retenção é aconselhável à luz de nossa posição legal (como em relação a estatutos de limitações aplicáveis, litígios ou investigações regulatórias).</li>
          </ul>
          <p>Quando não tivermos mais necessidade legítima de processar suas informações pessoais, as excluiremos ou anonimizaremos. Se isso não for possível (por exemplo, porque suas informações pessoais foram armazenadas em arquivos de backup), armazenaremos suas informações pessoais de forma segura e as isolaremos de qualquer processamento adicional até que a exclusão seja possível.</p>

          <h3>7. Seus direitos e escolhas</h3>
          <p>De acordo com a Lei Geral de Proteção de Dados (LGPD) e outras leis aplicáveis, você tem certos direitos em relação às suas informações pessoais, incluindo:</p>
          <ul>
            <li><strong>Acesso:</strong> Você tem o direito de solicitar uma cópia das informações pessoais que mantemos sobre você.</li>
            <li><strong>Retificação:</strong> Você tem o direito de solicitar a correção de informações pessoais imprecisas ou incompletas que mantemos sobre você.</li>
            <li><strong>Exclusão:</strong> Você tem o direito de solicitar a exclusão de suas informações pessoais em determinadas circunstâncias.</li>
            <li><strong>Restrição de processamento:</strong> Você tem o direito de solicitar que restrinjamos o processamento de suas informações pessoais em determinadas circunstâncias.</li>
            <li><strong>Portabilidade de dados:</strong> Você tem o direito de receber suas informações pessoais em um formato estruturado, comumente usado e legível por máquina, e de transmitir essas informações para outro controlador de dados.</li>
            <li><strong>Objeção:</strong> Você tem o direito de se opor ao processamento de suas informações pessoais em determinadas circunstâncias.</li>
            <li><strong>Retirada de consentimento:</strong> Quando o processamento é baseado no seu consentimento, você tem o direito de retirar esse consentimento a qualquer momento.</li>
          </ul>
          <p>Para exercer qualquer um desses direitos, entre em <Link href="/contato">contato conosco</Link>. Responderemos à sua solicitação dentro do prazo exigido pela lei aplicável.</p>
          <p>Observe que, em algumas circunstâncias, podemos não ser capazes de atender completamente à sua solicitação, como quando isso afetaria a confidencialidade que devemos a outros, ou quando houver uma base legal para manter as informações.</p>

          <h3>8. Comunicações de marketing</h3>
          <p>Você pode optar por não receber comunicações de marketing nossas a qualquer momento, seguindo as instruções de cancelamento de inscrição incluídas em nossas comunicações de marketing ou entrando em contato conosco.</p>
          <p>Mesmo que você opte por não receber comunicações de marketing, ainda podemos enviar comunicações administrativas relacionadas aos nossos serviços, como confirmações de conta, avisos de alterações em nossos serviços e outras informações importantes não relacionadas a marketing.</p>

          <h3>9. Cookies e tecnologias semelhantes</h3>
          <p>Utilizamos cookies e tecnologias semelhantes para coletar informações sobre sua atividade, navegador e dispositivo quando você visita nosso site. Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando você visita um site.</p>
          <p>Utilizamos os seguintes tipos de cookies:</p>
          <ul>
            <li><strong>Cookies essenciais:</strong> Necessários para o funcionamento básico do site.</li>
            <li><strong>Cookies de desempenho:</strong> Ajudam-nos a entender como os visitantes interagem com nosso site.</li>
            <li><strong>Cookies de funcionalidade:</strong> Permitem que o site lembre escolhas que você faz para fornecer funcionalidades aprimoradas.</li>
            <li><strong>Cookies de publicidade:</strong> Utilizados para entregar anúncios mais relevantes com base em seus interesses.</li>
          </ul>
          <p>Você pode gerenciar suas preferências de cookies através das configurações do seu navegador. No entanto, observe que desabilitar certos cookies pode afetar a funcionalidade do nosso site.</p>

          <h3>10. Privacidade de crianças</h3>
          <p>Nossos serviços não são direcionados a indivíduos menores de 18 anos, e não coletamos intencionalmente informações pessoais de crianças. Se tomarmos conhecimento de que coletamos informações pessoais de uma criança sem o consentimento dos pais, tomaremos medidas para excluir essas informações o mais rápido possível.</p>

          <h3>11. Links para outros sites</h3>
          <p>Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade ou pelo conteúdo desses sites. Recomendamos que você leia as políticas de privacidade de qualquer site que visite.</p>

          <h3>12. Alterações nesta política de privacidade</h3>
          <p>Podemos atualizar esta Política de Privacidade periodicamente para refletir alterações em nossas práticas de informações ou por outros motivos operacionais, legais ou regulatórios. Se fizermos alterações materiais, notificaremos você por meio de um aviso em nosso site ou por e-mail antes que as alterações entrem em vigor.</p>
          <p>Recomendamos que você revise periodicamente esta Política de Privacidade para obter as informações mais recentes sobre nossas práticas de privacidade.</p>

          <h3>13. Como entrar em contato conosco</h3>
          <p>Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou ao processamento de suas informações pessoais, entre em contato conosco pelo e-mail <a href="mailto:adasyserp@gmail.com">adasyserp@gmail.com</a> ou pelo nosso <Link href="/contato">formulário de contato</Link>.</p>
        </article>
      </section>

      <Footer />
    </main>
  );
}
