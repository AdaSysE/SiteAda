import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, PageHero } from "../components";

const title = "Termos de Uso";
const description = "Regras e condições para o uso do site e dos serviços oferecidos pela ADA.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/termos-de-uso" },
  openGraph: {
    type: "website",
    url: "/termos-de-uso",
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

export default function TermosDeUso() {
  return (
    <main>
      <Header />
      <PageHero
        label="Legal"
        title="Termos de"
        highlight="Uso"
        text="Este documento estabelece as regras e condições para o uso do site e dos serviços oferecidos pela ADA."
      />

      <section className="legal-page">
        <article className="legal-content">
          <h2>Última atualização: 28 de maio de 2025</h2>

          <p>Bem-vindo aos Termos de Uso da ADA ERP. Este documento é um contrato entre você (&quot;usuário&quot;, &quot;você&quot; ou &quot;seu&quot;) e a ADA ERP (&quot;nós&quot;, &quot;nosso&quot; ou &quot;empresa&quot;), que rege o uso do site adasys.com.br e dos serviços de sistema ERP para e-commerce oferecidos pela empresa.</p>
          <p>Ao acessar ou utilizar nosso site e serviços, você concorda em ficar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, por favor, não utilize nosso site ou serviços.</p>

          <h3>1. Aceitação dos Termos</h3>
          <p>Ao acessar ou utilizar o site da ADA ERP e seus serviços, você confirma que leu, entendeu e concorda em ficar vinculado a estes Termos de Uso, nossa Política de Privacidade e quaisquer termos adicionais que possam se aplicar a serviços específicos. Se você estiver utilizando nossos serviços em nome de uma organização, você confirma que tem autoridade para vincular essa organização a estes termos.</p>

          <h3>2. Descrição dos Serviços</h3>
          <p>A ADA ERP oferece um sistema de gestão empresarial (ERP) especializado para e-commerce, que inclui, mas não se limita a:</p>
          <ul>
            <li>Gestão de vendas e pedidos</li>
            <li>Controle de estoque</li>
            <li>Gestão financeira</li>
            <li>Análise de dados e relatórios</li>
            <li>Integração com marketplaces e plataformas de e-commerce</li>
            <li>Automação de processos</li>
          </ul>
          <p>Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer aspecto do serviço a qualquer momento, incluindo a disponibilidade de recursos, bancos de dados ou conteúdo.</p>

          <h3>3. Cadastro e Contas de Usuário</h3>
          <h4>3.1. Requisitos de Cadastro</h4>
          <p>Para utilizar determinados recursos ou serviços, pode ser necessário criar uma conta. Ao se cadastrar, você concorda em:</p>
          <ul>
            <li>Fornecer informações precisas, atuais e completas.</li>
            <li>Manter e atualizar prontamente suas informações de cadastro.</li>
            <li>Manter a segurança e confidencialidade de suas credenciais de acesso.</li>
            <li>Ser responsável por todas as atividades que ocorram em sua conta.</li>
            <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.</li>
          </ul>

          <h4>3.2. Restrições de Conta</h4>
          <p>Você não deve:</p>
          <ul>
            <li>Criar mais de uma conta por pessoa, a menos que expressamente permitido.</li>
            <li>Criar uma conta para outra pessoa sem autorização.</li>
            <li>Usar uma identidade falsa ou informações enganosas.</li>
            <li>Usar o serviço se for menor de 18 anos.</li>
          </ul>
          <p>Reservamo-nos o direito de recusar o registro, cancelar contas ou remover ou editar conteúdo a nosso critério exclusivo.</p>

          <h3>4. Uso Aceitável</h3>
          <h4>4.1. Uso Permitido</h4>
          <p>Você pode usar nossos serviços apenas para fins legítimos e de acordo com estes Termos. Você concorda em usar os serviços apenas para os fins pretendidos e de maneira que não viole leis ou regulamentos aplicáveis.</p>

          <h4>4.2. Restrições de Uso</h4>
          <p>Você não deve:</p>
          <ul>
            <li>Usar nossos serviços de qualquer maneira que possa danificar, desabilitar, sobrecarregar ou prejudicar os serviços ou interferir no uso dos serviços por terceiros.</li>
            <li>Tentar acesso não autorizado a qualquer parte dos serviços, outras contas, sistemas de computador ou redes conectadas aos serviços.</li>
            <li>Usar qualquer robô, spider, crawler, scraper ou outros meios automatizados para acessar os serviços para qualquer finalidade sem nossa permissão expressa por escrito.</li>
            <li>Coletar ou colher qualquer informação pessoal de outros usuários.</li>
            <li>Usar os serviços para enviar material não solicitado ou não autorizado.</li>
            <li>Usar os serviços para distribuir vírus ou outros códigos maliciosos.</li>
            <li>Tentar descompilar, fazer engenharia reversa ou desmontar qualquer parte do software que compõe os serviços.</li>
          </ul>

          <h3>5. Conteúdo e Propriedade Intelectual</h3>
          <h4>5.1. Nosso Conteúdo</h4>
          <p>Todo o conteúdo incluído em ou disponibilizado através dos serviços, como texto, gráficos, logotipos, ícones, imagens, compilações de dados e software, é propriedade da ADA ERP ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.</p>
          <p>Concedemos a você uma licença limitada, não exclusiva, não transferível e revogável para acessar e usar os serviços e o conteúdo para fins comerciais internos, sujeito a estes Termos.</p>

          <h4>5.2. Seu Conteúdo</h4>
          <p>Você mantém todos os direitos sobre qualquer conteúdo que você enviar, postar ou exibir em ou através dos serviços. Ao enviar, postar ou exibir conteúdo, você concede à ADA ERP uma licença mundial, não exclusiva, isenta de royalties para usar, reproduzir, adaptar, modificar, publicar, distribuir e exibir tal conteúdo em conexão com a prestação dos serviços.</p>
          <p>Você declara e garante que tem todos os direitos, poder e autoridade necessários para conceder os direitos aqui concedidos a qualquer conteúdo que você enviar.</p>

          <h3>6. Pagamentos e Faturamento</h3>
          <h4>6.1. Preços e Planos</h4>
          <p>Os preços e detalhes dos planos de serviço estão disponíveis em nosso site. Reservamo-nos o direito de alterar nossos preços e planos a qualquer momento, com aviso prévio.</p>

          <h4>6.2. Faturamento</h4>
          <p>Ao fornecer informações de pagamento, você declara e garante que as informações são precisas e que está autorizado a usar o método de pagamento fornecido. Você concorda em pagar todas as taxas e encargos incorridos em sua conta pelos serviços nos valores então vigentes.</p>

          <h4>6.3. Renovações Automáticas</h4>
          <p>As assinaturas de serviços são renovadas automaticamente, a menos que você cancele antes do próximo ciclo de faturamento. Você pode cancelar sua assinatura a qualquer momento entrando em contato com nosso suporte ao cliente.</p>

          <h4>6.4. Reembolsos</h4>
          <p>Nossa política de reembolso está detalhada em nosso site. Em geral, não oferecemos reembolsos para serviços parcialmente utilizados ou após o período de teste gratuito, se aplicável.</p>

          <h3>7. Privacidade e Proteção de Dados</h3>
          <p>Nossa <Link href="/privacidade">Política de Privacidade</Link> descreve como coletamos, usamos e protegemos suas informações pessoais. Ao usar nossos serviços, você concorda com a coleta e uso de suas informações conforme descrito em nossa Política de Privacidade.</p>

          <h3>8. Disponibilidade e Suporte</h3>
          <h4>8.1. Disponibilidade do Serviço</h4>
          <p>Embora nos esforcemos para manter nossos serviços disponíveis 24 horas por dia, 7 dias por semana, não podemos garantir que os serviços estarão disponíveis ininterruptamente ou livres de erros. Reservamo-nos o direito de realizar manutenção programada ou de emergência que pode afetar a disponibilidade dos serviços.</p>

          <h4>8.2. Suporte Técnico</h4>
          <p>Fornecemos suporte técnico de acordo com os termos do seu plano de serviço. Os detalhes sobre o suporte disponível estão descritos em nosso site ou na documentação do serviço.</p>

          <h3>9. Limitação de Responsabilidade</h3>
          <p>Na extensão máxima permitida pela lei aplicável, a ADA ERP e seus diretores, funcionários, agentes, fornecedores ou licenciadores não serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes de:</p>
          <ul>
            <li>Seu acesso ou uso ou incapacidade de acessar ou usar os serviços.</li>
            <li>Qualquer conduta ou conteúdo de terceiros nos serviços.</li>
            <li>Conteúdo obtido dos serviços.</li>
            <li>Acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo.</li>
          </ul>
          <p>Em nenhum caso nossa responsabilidade total por todas as reclamações relacionadas aos serviços excederá o valor que você pagou à ADA ERP pelos serviços nos últimos 12 meses.</p>

          <h3>10. Isenção de Garantias</h3>
          <p>Os serviços são fornecidos &quot;como estão&quot; e &quot;conforme disponíveis&quot;, sem garantias de qualquer tipo, expressas ou implícitas. Na extensão máxima permitida pela lei aplicável, a ADA ERP se isenta de todas as garantias, expressas ou implícitas, incluindo, sem limitação, garantias implícitas de comercialização, adequação a um propósito específico e não violação.</p>

          <h3>11. Indenização</h3>
          <p>Você concorda em defender, indenizar e isentar a ADA ERP e seus diretores, funcionários, agentes, parceiros e licenciadores de e contra quaisquer reclamações, danos, obrigações, perdas, responsabilidades, custos ou dívidas e despesas (incluindo, mas não se limitando a honorários advocatícios) decorrentes de: (i) seu uso e acesso aos serviços; (ii) sua violação de qualquer termo destes Termos; (iii) sua violação de quaisquer direitos de terceiros, incluindo, sem limitação, quaisquer direitos autorais, de propriedade ou de privacidade; ou (iv) qualquer alegação de que seu conteúdo causou danos a terceiros.</p>

          <h3>12. Rescisão</h3>
          <p>Podemos encerrar ou suspender seu acesso e uso dos serviços imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar estes Termos.</p>
          <p>Após a rescisão, seu direito de usar os serviços cessará imediatamente. Se você deseja encerrar sua conta, você pode simplesmente descontinuar o uso dos serviços ou nos notificar por escrito.</p>

          <h3>13. Alterações nos Termos</h3>
          <p>Reservamo-nos o direito, a nosso critério exclusivo, de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, tentaremos fornecer um aviso com pelo menos 30 dias de antecedência antes que quaisquer novos termos entrem em vigor. O que constitui uma alteração material será determinado a nosso critério exclusivo. Ao continuar a acessar ou usar nossos serviços após essas revisões se tornarem efetivas, você concorda em ficar vinculado aos termos revisados. Se você não concordar com os novos termos, por favor, pare de usar os serviços.</p>

          <h3>14. Lei Aplicável e Resolução de Disputas</h3>
          <p>Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar suas disposições sobre conflitos de leis.</p>
          <p>Qualquer disputa, controvérsia ou reclamação decorrente de ou relacionada a estes Termos ou à violação, rescisão ou validade destes será resolvida por arbitragem de acordo com as regras do Centro de Arbitragem e Mediação da Câmara de Comércio Brasil-Canadá. O local da arbitragem será São Paulo, SP, Brasil. O idioma da arbitragem será o português.</p>

          <h3>15. Disposições Gerais</h3>
          <h4>15.1. Acordo Integral</h4>
          <p>Estes Termos constituem o acordo integral entre você e a ADA ERP em relação ao uso dos serviços e substituem todos os acordos anteriores e contemporâneos, sejam escritos ou orais, relacionados a esse assunto.</p>

          <h4>15.2. Renúncia e Independência das Cláusulas</h4>
          <p>A falha da ADA ERP em exercer ou fazer cumprir qualquer direito ou disposição destes Termos não constituirá uma renúncia a tal direito ou disposição. Se qualquer disposição destes Termos for considerada inválida ou inexequível por um tribunal, as disposições restantes destes Termos permanecerão em vigor.</p>

          <h4>15.3. Cessão</h4>
          <p>Você não pode ceder ou transferir estes Termos, por força de lei ou de outra forma, sem nosso consentimento prévio por escrito. Qualquer tentativa de cessão ou transferência sem tal consentimento será nula. Podemos ceder ou transferir estes Termos, a nosso critério exclusivo, sem restrição.</p>

          <h4>15.4. Notificações</h4>
          <p>Podemos fornecer notificações a você por e-mail, ou publicações em nosso site ou serviços. Tais notificações serão consideradas entregues na data de transmissão.</p>

          <h3>16. Como Entrar em Contato Conosco</h3>
          <p>Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail <a href="mailto:comercial@adasys.com.br">comercial@adasys.com.br</a> ou pelo nosso <Link href="/contato">formulário de contato</Link>.</p>
        </article>
      </section>

      <Footer />
    </main>
  );
}
