import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  ClipboardCheck,
  Factory,
  FileText,
  Gauge,
  Layers3,
  LifeBuoy,
  Menu,
  Moon,
  MoveVertical,
  Phone,
  ShieldCheck,
  Sun,
  Upload,
  Wrench,
} from 'lucide-react';
import './styles.css';

type Route = {
  path: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  theme?: 'dark' | 'light';
  rail: RailItem[];
};

type RailItem = {
  id: string;
  number: string;
  label: string;
};

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  onNavigate?: (path: string) => void;
};

const homeRail: RailItem[] = [
  { id: 'hero', number: '00', label: 'Giriş Katı' },
  { id: 'solutions', number: '01', label: 'Çözümler Katı' },
  { id: 'services', number: '02', label: 'Hizmetler Katı' },
  { id: 'projects', number: '03', label: 'Projeler Katı' },
  { id: 'modernization', number: '04', label: 'Modernizasyon Katı' },
  { id: 'references', number: '05', label: 'Referanslar Katı' },
  { id: 'contact', number: '06', label: 'İletişim Katı' },
];

const defaultRail: RailItem[] = [
  { id: 'overview', number: '00', label: 'Giriş Katı' },
  { id: 'scope', number: '01', label: 'Kapsam Katı' },
  { id: 'proof', number: '02', label: 'Kanıt Katı' },
  { id: 'process', number: '03', label: 'Süreç Katı' },
  { id: 'documents', number: '04', label: 'Belge Katı' },
  { id: 'cta', number: '05', label: 'Teklif Katı' },
];

const corporateRail: RailItem[] = [
  { id: 'overview', number: '00', label: 'Kurumsal Katı' },
  { id: 'about', number: '01', label: 'PROAS Katı' },
  { id: 'history', number: '02', label: 'Tarihçe Katı' },
  { id: 'engineering', number: '03', label: 'Mühendislik Katı' },
  { id: 'production', number: '04', label: 'Üretim Katı' },
  { id: 'quality', number: '05', label: 'Kalite Katı' },
  { id: 'cta', number: '06', label: 'İletişim Katı' },
];

const maintenanceRail: RailItem[] = [
  { id: 'overview', number: '00', label: 'Bakım Katı' },
  { id: 'scope', number: '01', label: 'Kapsam Katı' },
  { id: 'proof', number: '02', label: 'Güvenlik Katı' },
  { id: 'process', number: '03', label: 'Süreç Katı' },
  { id: 'documents', number: '04', label: 'Rapor Katı' },
  { id: 'cta', number: '05', label: 'Teklif Katı' },
];

const navItems = [
  ['Çözümler', '/cozumler'],
  ['Hizmetler', '/hizmetler'],
  ['Projeler', '/projeler'],
  ['Kurumsal', '/kurumsal'],
  ['Referanslar', '/referanslar'],
  ['Bilgi Merkezi', '/bilgi-merkezi'],
  ['İletişim', '/iletisim'],
] as const;

const solutions = [
  {
    number: '01',
    title: 'Yolcu Asansörleri',
    path: '/cozumler/yolcu-asansorleri',
    copy: 'Konut, iş merkezi ve karma kullanımlı yapılarda yoğun trafiğe uygun dikey ulaşım.',
    tag: 'Konut / Ticari',
    meta: 'Trafik analizi, kabin kapasitesi, güvenli kullanım',
  },
  {
    number: '02',
    title: 'Panoramik Asansörler',
    path: '/cozumler/panoramik-asansorler',
    copy: 'Otel, AVM ve ticari yapılarda mimari görünümle uyumlu dikey ulaşım.',
    tag: 'Mimari / Ticari',
    meta: 'Cam kuyu, görünür kabin, estetik entegrasyon',
  },
  {
    number: '03',
    title: 'Hasta & Sedye Asansörleri',
    path: '/cozumler/hasta-sedye-asansorleri',
    copy: 'Sağlık yapılarında sedye hareketi, hijyen ve erişim sürekliliği odaklı sistemler.',
    tag: 'Sağlık',
    meta: 'Geniş kabin, güvenli duruş, yoğun kullanım',
  },
  {
    number: '04',
    title: 'Yük Asansörleri',
    path: '/cozumler/yuk-asansorleri',
    copy: 'Depo, üretim ve lojistik alanlarda dayanıklılık ve kapasite öncelikli çözümler.',
    tag: 'Endüstri / Lojistik',
    meta: 'Yük kapasitesi, platform, saha güvenliği',
  },
  {
    number: '05',
    title: 'Araç Asansörleri',
    path: '/cozumler/arac-asansorleri',
    copy: 'Otopark ve servis alanlarında net manevra, kapasite ve güvenlik planı.',
    tag: 'Otopark / Servis',
    meta: 'Araç yükü, kapı açıklığı, kontrol sistemi',
  },
  {
    number: '06',
    title: 'Engelli Erişim Sistemleri',
    path: '/cozumler/engelli-erisim-sistemleri',
    copy: 'Engelli ve yaşlı kullanıcılar için yapılara güvenli, konforlu ve kapsayıcı erişim.',
    tag: 'Platform / Stairlift',
    meta: 'Platform, merdiven, erişilebilirlik standardı',
  },
];

const services = [
  {
    number: '01',
    icon: Building2,
    title: 'Yeni Kurulum',
    path: '/hizmetler/yeni-kurulum',
    copy: 'Keşiften projelendirmeye, montajdan teslim sürecine kadar kontrollü uygulama.',
    meta: 'Keşif / Proje / Montaj / Teslim',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Periyodik Bakım',
    path: '/hizmetler/bakim-servis',
    copy: 'Asansörlerin güvenli, düzenli ve kesintisiz çalışmasını destekleyen servis planı.',
    meta: 'Planlı bakım / Raporlama / Takip',
  },
  {
    number: '03',
    icon: Gauge,
    title: 'Arıza & Servis',
    path: '/hizmetler/ariza-servisi',
    copy: 'Hızlı müdahale, net raporlama ve sürekliliği önceleyen teknik yaklaşım.',
    meta: 'Arıza kaydı / Müdahale / Çözüm',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Modernizasyon',
    path: '/hizmetler/modernizasyon',
    copy: 'Mevcut sistemlerde güvenlik, konfor, enerji ve performans odaklı revizyon.',
    meta: 'Revizyon / Güvenlik / Konfor',
  },
  {
    number: '05',
    icon: Layers3,
    title: 'Projelendirme',
    path: '/hizmetler/projelendirme',
    copy: 'Yapıya ve kullanım yoğunluğuna göre teknik çözüm, plan ve ekipman seçimi.',
    meta: 'Teknik analiz / Şartname / Plan',
  },
];

const processSteps = [
  ['01', 'Keşif', 'Yapı, trafik yoğunluğu, kullanım amacı ve erişilebilirlik ihtiyacı analiz edilir.'],
  ['02', 'Projelendirme', 'Teknik gerekliliklere göre çözüm, ekipman ve uygulama planı netleşir.'],
  ['03', 'Montaj', 'Saha uygulaması kalite ve güvenlik odağında kontrollü ilerler.'],
  ['04', 'Test & Teslim', 'Devreye alma, kontrol ve kullanıcı deneyimi birlikte değerlendirilir.'],
  ['05', 'Bakım', 'Sistem ömrü boyunca düzenli servis ve modernizasyon ihtiyacı takip edilir.'],
];

const projectSegments = [
  'Sağlık',
  'Kamu',
  'Otel',
  'Ticari',
  'Konut',
  'Bankacılık',
  'Endüstriyel',
];

const projectPlaceholders = [
  {
    title: 'Sağlık Yapısı Modernizasyonu',
    slug: 'saglik-yapisi-modernizasyonu',
    category: 'Sağlık',
    scope: 'Modernizasyon / bakım sürekliliği',
  },
  {
    title: 'Karma Kullanımlı Konut Projesi',
    slug: 'karma-konut-projesi',
    category: 'Konut',
    scope: 'Yeni kurulum / trafik planı',
  },
  {
    title: 'Ticari Yapı Servis Organizasyonu',
    slug: 'ticari-yapi-servis-organizasyonu',
    category: 'Ticari',
    scope: 'Periyodik bakım / arıza yönetimi',
  },
];

const solutionSectionIds = ['passenger', 'panoramic', 'health', 'load', 'vehicle', 'access'];
const serviceSectionIds = ['install', 'maintenance', 'service', 'modernization', 'proposal'];
const corporateSectionIds = ['scope', 'history', 'engineering', 'production', 'quality'];

const certificates = [
  ['TSE / Hizmet Yeterliliği', 'Belge adı, numarası ve geçerlilik tarihi müşteri verisiyle eklenecek.'],
  ['ISO Kalite Yönetimi', 'Doğrulanmış belge PDF veya görseli yüklendiğinde aktif belge kartına dönüşecek.'],
  ['Yetkinlik Belgeleri', 'Bakım, montaj ve servis kapsamı doğrulanmış dokümanlarla desteklenecek.'],
];

const articlePlaceholders = [
  {
    title: 'Asansör bakımında düzenli kontrol neden kritiktir?',
    slug: 'asansor-bakiminda-duzenli-kontrol',
    tag: 'Bakım',
  },
  {
    title: 'Modernizasyon kararında hangi teknik göstergelere bakılır?',
    slug: 'modernizasyon-kararinda-teknik-gostergeler',
    tag: 'Modernizasyon',
  },
  {
    title: 'Yeni projede doğru asansör kapasitesi nasıl planlanır?',
    slug: 'dogru-asansor-kapasitesi-planlama',
    tag: 'Projelendirme',
  },
];

const corporatePages: Route[] = [
  {
    path: '/kurumsal/hakkimizda',
    label: 'Hakkımızda',
    eyebrow: 'Kurumsal / Hakkımızda',
    title: 'Dikey ulaşım sistemlerinde kontrollü proje ve servis yaklaşımı.',
    intro: 'PROAS kurumsal anlatısı, tarihçe ve faaliyet kapsamı doğrulanmış şirket verileriyle tamamlanacak.',
    rail: corporateRail,
  },
  {
    path: '/kurumsal/tarihce',
    label: 'Tarihçe',
    eyebrow: 'Kurumsal / Tarihçe',
    title: 'Şirket geçmişi ve kilometre taşları için doğrulanmış veri alanı.',
    intro: 'Kuruluş yılı, büyüme dönemleri ve operasyon bölgeleri müşteri verisiyle yayınlanacak.',
    rail: corporateRail,
  },
  {
    path: '/kurumsal/muhendislik-yaklasimimiz',
    label: 'Mühendislik Yaklaşımımız',
    eyebrow: 'Kurumsal / Mühendislik',
    title: 'Bakım, modernizasyon ve proje yönetimi tek teknik yaklaşımda.',
    intro: 'Süreç, denetim, raporlama ve saha koordinasyonu için kurumsal metodoloji sayfası.',
    rail: corporateRail,
  },
  {
    path: '/kurumsal/uretim-gucu',
    label: 'Üretim Gücü',
    eyebrow: 'Kurumsal / Üretim',
    title: 'Üretim ve çözüm geliştirme kapasitesi için kanıt katmanı.',
    intro: 'Üretim ilişkisi, tedarik yapısı ve teknik kapasite doğrulanmış materyallerle eklenecek.',
    rail: corporateRail,
  },
  {
    path: '/kurumsal/kalite',
    label: 'Kalite',
    eyebrow: 'Kurumsal / Kalite',
    title: 'Standartlar, belgeler ve kontrol süreçleri aynı hatta.',
    intro: 'Kalite belgeleri, periyodik kontrol süreçleri ve servis standardı bu sayfada derlenecek.',
    rail: corporateRail,
  },
];

const routeCopy: Route[] = [
  {
    path: '/cozumler',
    label: 'Çözümler',
    eyebrow: '01 — Çözümler',
    title: 'Yapıya göre şekillenen asansör sistemleri.',
    intro: 'Konut, sağlık, ticari, otopark ve erişilebilirlik ihtiyaçları için doğru sistem seçimini ayrı sayfalara ayırdık.',
    rail: [
      { id: 'overview', number: '00', label: 'Çözümler Katı' },
      { id: 'passenger', number: '01', label: 'Yolcu Katı' },
      { id: 'panoramic', number: '02', label: 'Panoramik Katı' },
      { id: 'health', number: '03', label: 'Sağlık Katı' },
      { id: 'load', number: '04', label: 'Yük Katı' },
      { id: 'vehicle', number: '05', label: 'Araç Katı' },
      { id: 'access', number: '06', label: 'Erişim Katı' },
    ],
  },
  {
    path: '/hizmetler',
    label: 'Hizmetler',
    eyebrow: '02 — Hizmetler',
    title: 'Kurulumdan sistem ömrü boyunca teknik destek.',
    intro: 'Yeni kurulum, bakım, arıza servisi, modernizasyon ve projelendirme artık ayrı hizmet sayfalarına açılıyor.',
    rail: [
      { id: 'overview', number: '00', label: 'Hizmetler Katı' },
      { id: 'install', number: '01', label: 'Kurulum Katı' },
      { id: 'maintenance', number: '02', label: 'Bakım Katı' },
      { id: 'service', number: '03', label: 'Servis Katı' },
      { id: 'modernization', number: '04', label: 'Revizyon Katı' },
      { id: 'proposal', number: '05', label: 'Teklif Katı' },
    ],
  },
  {
    path: '/projeler',
    label: 'Projeler',
    eyebrow: '03 — Projeler',
    title: 'Gerçek proje kanıtları için güçlü bir modül.',
    intro: 'Bu alan gerçek fotoğraf, lokasyon, sektör, kapsam ve teknik detaylar geldiğinde case study sayfalarına dönüşecek.',
    rail: defaultRail,
  },
  {
    path: '/kurumsal',
    label: 'Kurumsal',
    eyebrow: '04 — Kurumsal',
    title: 'Mühendislikten gelen kurumsal güven.',
    intro: 'PROAS’ın geçmişini, mühendislik yaklaşımını, kalite anlayışını ve üretim gücünü keşfedin.',
    rail: corporateRail,
  },
  {
    path: '/referanslar',
    label: 'Referanslar',
    eyebrow: '05 — Referanslar',
    title: 'Güvenilen sektörler ve bağlanacak proje kanıtları.',
    intro: 'Logo duvarı yerine sağlık, kamu, bankacılık, otel, ticari ve konut segmentleriyle okunur referans mimarisi.',
    rail: defaultRail,
  },
  {
    path: '/belgeler',
    label: 'Belgeler',
    eyebrow: '06 — Belgeler',
    title: 'Belgeler ve yetkinlikler için doğrulanmış dosya alanı.',
    intro: 'TSE, ISO ve hizmet yeterliliği gibi belgeler müşteri verisi geldiğinde PDF/görsel olarak yayınlanacak.',
    rail: defaultRail,
  },
  {
    path: '/bilgi-merkezi',
    label: 'Bilgi Merkezi',
    eyebrow: '07 — Bilgi Merkezi',
    title: 'Teknik bilgi, bakım rehberleri ve modernizasyon karar destek alanı.',
    intro: 'Ajans dili değil; kısa, anlaşılır ve teknik içeriklerle kurumsal müşteriye güven veren bilgi merkezi.',
    rail: defaultRail,
  },
  {
    path: '/iletisim',
    label: 'İletişim',
    eyebrow: '08 — İletişim',
    title: 'Trabzon ve Samsun hizmet ağı için iletişim kanalları.',
    intro: 'Telefon, servis talebi ve teklif akışları daha görünür bir kurumsal iletişim yapısına taşındı.',
    rail: defaultRail,
  },
];

function App() {
  const [path, setPath] = React.useState(() => normalizePath(window.location.pathname));
  const [lightsOn, setLightsOn] = React.useState(true);
  const [isSwitchingLights, setIsSwitchingLights] = React.useState(false);
  const [isChangingPage, setIsChangingPage] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState(0);
  const activeSectionRef = React.useRef(0);

  const isHome = path === '/';
  const route = getRoute(path);
  const pageRail = isHome ? homeRail : route.rail;
  const shellMode = lightsOn ? 'lights-on' : 'lights-off';
  const shellArea = getShellArea(path);

  React.useEffect(() => {
    const onPopState = () => {
      setIsChangingPage(true);
      setPath(normalizePath(window.location.pathname));
      window.setTimeout(() => setIsChangingPage(false), 420);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;
    let lastScrollY = window.scrollY;
    let progressFrame = 0;
    const observed = (isHome ? homeRail : pageRail)
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

    const setProgress = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      root.style.setProperty('--scroll-progress', String(progress));
      root.style.setProperty('--scroll-direction', window.scrollY >= lastScrollY ? '1' : '-1');
      lastScrollY = window.scrollY;
    };

    const requestProgress = () => {
      cancelAnimationFrame(progressFrame);
      progressFrame = requestAnimationFrame(setProgress);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          const index = pageRail.findIndex((section) => section.id === visible.target.id);
          const nextIndex = Math.max(index, 0);
          if (nextIndex !== activeSectionRef.current) {
            activeSectionRef.current = nextIndex;
            root.style.setProperty('--active-section', String(nextIndex));
            setActiveSection(nextIndex);
          }
        }
      },
      { rootMargin: '-28% 0px -45% 0px', threshold: [0.18, 0.35, 0.55] },
    );

    activeSectionRef.current = 0;
    window.setTimeout(() => setActiveSection(0), 0);
    root.style.setProperty('--active-section', '0');
    observed.forEach((section) => observer.observe(section));
    setProgress();
    window.addEventListener('scroll', requestProgress, { passive: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(progressFrame);
      window.removeEventListener('scroll', requestProgress);
    };
  }, [isHome, pageRail, path]);

  const navigate = (nextPath: string) => {
    const normalized = normalizePath(nextPath);
    if (normalized === path) return;
    setIsChangingPage(true);
    window.history.pushState({}, '', normalized);
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.setTimeout(() => {
      setPath(normalized);
      window.setTimeout(() => setIsChangingPage(false), 360);
    }, 130);
  };

  const toggleLights = () => {
    if (isSwitchingLights) return;
    setIsSwitchingLights(true);
    window.setTimeout(() => setLightsOn((current) => !current), 250);
    window.setTimeout(() => setIsSwitchingLights(false), 720);
  };

  return (
    <main className={`site-shell shell-${shellArea} ${shellMode} ${isSwitchingLights ? 'is-switching-lights' : ''} ${isChangingPage ? 'is-changing-page' : ''}`}>
      <div className="light-transition" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="route-transition" aria-hidden="true">
        <span />
        <span />
      </div>
      <SiteRail activeIndex={activeSection} railItems={pageRail} isHome={isHome} />
      <Header lightsOn={lightsOn} onToggleLights={toggleLights} navigate={navigate} currentPath={path} />
      {isHome ? (
        <HomePage activeSection={activeSection} navigate={navigate} />
      ) : (
        <PageRouter path={path} route={route} navigate={navigate} />
      )}
      <Footer navigate={navigate} />
      <MobileDock navigate={navigate} />
    </main>
  );
}

function HomePage({ activeSection, navigate }: { activeSection: number; navigate: (path: string) => void }) {
  return (
    <>
      <section className="hero section cinematic" id="hero">
        <div className="door door-left" />
        <div className="door door-right" />
        <div className="hero-noise" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">PROAS × Vertical Mobility Engineering</p>
            <h1>
              Dikey ulaşımın
              <span> her katında </span>
              mühendislik.
            </h1>
            <p className="hero-lead">
              Asansör sistemleri, montaj, bakım, modernizasyon ve erişilebilirlik çözümlerinde yapınızın
              tüm yaşam döngüsünü düşünen teknik ortak.
            </p>
            <div className="hero-actions">
              <SiteLink className="button button-primary" to="/teklif-al" onNavigate={navigate}>
                Teklif Al <ArrowUpRight aria-hidden="true" />
              </SiteLink>
              <SiteLink className="button button-ghost" to="/cozumler" onNavigate={navigate}>
                Çözümleri Keşfet <ChevronDown aria-hidden="true" />
              </SiteLink>
            </div>
            <div className="hero-tags" aria-label="Hizmet alanları">
              <span>Montaj</span>
              <span>Bakım & Servis</span>
              <span>Revizyon</span>
              <span>Erişilebilirlik</span>
            </div>
          </div>

          <ElevatorVisual floor={homeRail[activeSection]?.number ?? '00'} />
        </div>
      </section>

      <section className="section intro-band" id="summary">
        <div className="container intro-grid">
          <p className="kicker">Trabzon ve Samsun hizmet ağı</p>
          <h2>PROAS, yapının yalnızca ilk gününü değil sistem ömrünü planlar.</h2>
          <p>
            Güvenli bir asansör sistemi yalnızca ekipmandan ibaret değildir; doğru keşif, doğru
            projelendirme, nitelikli montaj ve düzenli bakımın bütünüdür.
          </p>
        </div>
      </section>

      <section className="section" id="solutions">
        <div className="container section-heading">
          <p className="eyebrow">01 — Çözümler</p>
          <h2>Yapıya göre şekillenen asansör sistemleri.</h2>
        </div>
        <SolutionGrid items={solutions.slice(0, 4)} navigate={navigate} />
      </section>

      <section className="section light-band" id="services">
        <div className="container split-heading">
          <div>
            <p className="eyebrow">02 — Hizmetler</p>
            <h2>Kurulumdan son kata kadar değil, sistem ömrü boyunca.</h2>
          </div>
          <p>
            PROAS, bakım ve modernizasyonu satış sonrası küçük bir detay olarak değil, güvenli
            dikey ulaşımın ana parçası olarak ele alır.
          </p>
        </div>
        <ServiceGrid navigate={navigate} />
      </section>

      <section className="section projects-preview dark-section" id="projects">
        <div className="container split-heading">
          <div>
            <p className="eyebrow">03 — Projeler</p>
            <h2>Gerçek proje kanıtları için ayrı bir kat.</h2>
          </div>
          <p>
            Fotoğraf, lokasyon ve teknik kapsam verisi geldiğinde bu modül seçili proje sayfalarına
            bağlanacak. Şimdilik yapı hazır; veri uydurmuyoruz.
          </p>
        </div>
        <ProjectModules navigate={navigate} />
      </section>

      <section className="section modernization" id="modernization">
        <div className="container modernization-grid">
          <div>
            <p className="eyebrow">04 — Modernizasyon</p>
            <h2>Eski sistemi yalnızca yenilemeyiz; güven, konfor ve süreklilik kazandırırız.</h2>
          </div>
          <ModernizationCabin />
        </div>
      </section>

      <section className="section references" id="references">
        <div className="container section-heading">
          <p className="eyebrow">05 — Referanslar</p>
          <h2>Farklı yoğunluklara sahip yapılarda teknik güven.</h2>
        </div>
        <ReferenceSegments />
        <div className="container production-strip">
          <Factory aria-hidden="true" />
          <p>
            Üretim ve çözüm geliştirme ağına dair tüm kurumsal kanıtlar yayın öncesi şirket
            tarafından doğrulanacak şekilde konumlandırıldı.
          </p>
        </div>
      </section>

      <section className="section contact" id="contact">
        <ContactBlock navigate={navigate} />
      </section>
    </>
  );
}

function PageRouter({
  path,
  route,
  navigate,
}: {
  path: string;
  route: Route;
  navigate: (path: string) => void;
}) {
  const solution = solutions.find((item) => item.path === path);
  const service = services.find((item) => item.path === path);
  const project = projectPlaceholders.find((item) => `/projeler/${item.slug}` === path);
  const article = articlePlaceholders.find((item) => `/bilgi-merkezi/${item.slug}` === path);

  if (path === '/teklif-al') return <QuoteWizard navigate={navigate} />;
  if (path === '/servis-talebi') return <ServiceRequest navigate={navigate} />;
  if (path === '/cozumler') return <OverviewPage route={route} navigate={navigate} cards={<SolutionGrid items={solutions} navigate={navigate} />} />;
  if (path === '/hizmetler') return <OverviewPage route={route} navigate={navigate} cards={<ServiceGrid navigate={navigate} />} />;
  if (solution) return <SolutionDetail item={solution} navigate={navigate} />;
  if (service) return <ServiceDetail item={service} navigate={navigate} />;
  if (path === '/projeler') return <ProjectsPage route={route} navigate={navigate} />;
  if (project) return <ProjectDetail project={project} navigate={navigate} />;
  if (path === '/kurumsal') return <CorporateIndex route={route} navigate={navigate} />;
  if (corporatePages.some((page) => page.path === path)) {
    return <CorporateDetail route={corporatePages.find((page) => page.path === path)!} navigate={navigate} />;
  }
  if (path === '/referanslar') return <ReferencesPage route={route} />;
  if (path === '/belgeler') return <DocumentsPage route={route} />;
  if (path === '/bilgi-merkezi') return <KnowledgePage route={route} navigate={navigate} />;
  if (article) return <ArticleDetail article={article} navigate={navigate} />;
  if (path === '/iletisim') return <ContactPage route={route} navigate={navigate} />;

  return <NotFound navigate={navigate} />;
}

function Header({
  lightsOn,
  onToggleLights,
  navigate,
  currentPath,
}: {
  lightsOn: boolean;
  onToggleLights: () => void;
  navigate: (path: string) => void;
  currentPath: string;
}) {
  const LightIcon = lightsOn ? Moon : Sun;

  return (
    <header className="site-header">
      <SiteLink className="brand" to="/" onNavigate={navigate} aria-label="PROAS ana sayfa">
        <span>PROAS</span>
        <small>ASANSÖR</small>
      </SiteLink>
      <nav aria-label="Ana menü">
        {navItems.map(([label, href]) => (
          <SiteLink key={href} to={href} onNavigate={navigate} className={currentPath.startsWith(href) ? 'is-current' : undefined}>
            {label}
          </SiteLink>
        ))}
      </nav>
      <div className="header-actions">
        <SiteLink className="service-cta" to="/servis-talebi" onNavigate={navigate}>
          Servis Talebi
        </SiteLink>
        <button className="light-toggle icon-only" type="button" onClick={onToggleLights} aria-label={lightsOn ? 'Koyu görünüm' : 'Açık görünüm'}>
          <LightIcon aria-hidden="true" />
        </button>
        <SiteLink className="header-cta" to="/teklif-al" onNavigate={navigate}>
          Teklif Al <ArrowUpRight aria-hidden="true" />
        </SiteLink>
      </div>
      <button className="menu-button" aria-label="Menüyü aç">
        <Menu aria-hidden="true" />
      </button>
    </header>
  );
}

function SiteRail({
  activeIndex,
  railItems,
  isHome,
}: {
  activeIndex: number;
  railItems: RailItem[];
  isHome: boolean;
}) {
  return (
    <aside className="site-rail" aria-label="Sayfa kat göstergesi">
      <div className="rail-line">
        <div className="rail-cabin">
          <MoveVertical aria-hidden="true" />
        </div>
      </div>
      <div className="rail-floors">
        {railItems.map((section, index) => (
          <a
            className={index === activeIndex ? 'is-active' : undefined}
            key={`${section.number}-${section.id}`}
            href={isHome ? `#${section.id}` : `#${section.id}`}
          >
            <span>{section.number}</span>
            <small>{section.label}</small>
          </a>
        ))}
      </div>
    </aside>
  );
}

function ElevatorVisual({ floor }: { floor: string }) {
  return (
    <div className="shaft-wrap" aria-label="Asansör kapısı. Üzerine gelince kapılar hafif açılır.">
      <div className="shaft">
        <div className="shaft-lines">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="cabin">
          <div className="cabin-display">00 ↑</div>
          <div className="cabin-micro">PROAS VERTICAL SYSTEM / 01</div>
          <div className="cabin-light" />
          <div className="cabin-doors">
            <span />
            <span />
          </div>
          <div className="cabin-sill" />
        </div>
        <div className="floor-readout">
          <small>AKTİF KAT</small>
          <strong>{floor}</strong>
          <em>Üzerine gel</em>
        </div>
      </div>
      <div className="technical-ring">
        <span>BRUSHED METAL</span>
        <span>DOOR FRAME</span>
        <span>SAFETY LINE</span>
      </div>
    </div>
  );
}

function SolutionGrid({
  items,
  navigate,
}: {
  items: typeof solutions;
  navigate: (path: string) => void;
}) {
  return (
    <div className="container solution-panels">
      {items.map((item, index) => (
        <SiteLink className="solution-panel" id={solutionSectionIds[index]} key={item.title} to={item.path} onNavigate={navigate}>
          <span>{item.number}</span>
          <div>
            <p>{item.tag}</p>
            <h3>{item.title}</h3>
            <small>{item.copy}</small>
          </div>
          <ArrowUpRight aria-hidden="true" />
        </SiteLink>
      ))}
    </div>
  );
}

function ServiceGrid({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="container service-grid">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <SiteLink className="service-card" id={serviceSectionIds[index]} key={service.title} to={service.path} onNavigate={navigate}>
            <span className="service-number">{service.number}</span>
            <div className="service-image-slot" aria-hidden="true">
              Görsel alanı
            </div>
            <div className="service-icon">
              <Icon aria-hidden="true" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
            <small>{service.meta}</small>
            <strong>
              Detayları İncele <ArrowUpRight aria-hidden="true" />
            </strong>
          </SiteLink>
        );
      })}
    </div>
  );
}

function ModernizationCabin() {
  return (
    <div className="before-after" aria-label="Modernizasyon karşılaştırması">
      <div className="modernization-track" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="modernization-doors" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="before">
        <span>Mevcut Sistem</span>
        <p>Yıpranmış kullanım hissi, belirsiz performans ve artan bakım ihtiyacı.</p>
      </div>
      <div className="after">
        <span>PROAS Revizyon</span>
        <p>Güvenlik, enerji verimliliği, konfor ve sistem ömrü odaklı iyileştirme.</p>
      </div>
    </div>
  );
}

function ProjectModules({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="container project-modules">
      {projectPlaceholders.map((project, index) => (
        <SiteLink key={project.slug} className="project-module" to={`/projeler/${project.slug}`} onNavigate={navigate}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div className="asset-placeholder">
            <FileText aria-hidden="true" />
            <small>CLIENT DATA REQUIRED</small>
          </div>
          <div>
            <p>{project.category}</p>
            <h3>{project.title}</h3>
            <small>{project.scope}</small>
          </div>
        </SiteLink>
      ))}
    </div>
  );
}

function ReferenceSegments() {
  return (
    <div className="container reference-grid segmented">
      {projectSegments.map((reference) => (
        <div className="reference-tile" key={reference}>
          <CircleDot aria-hidden="true" />
          <span>{reference}</span>
          <small>Referans verisi eklenecek</small>
        </div>
      ))}
    </div>
  );
}

function OverviewPage({
  route,
  cards,
  navigate,
}: {
  route: Route;
  cards: React.ReactNode;
  navigate: (path: string) => void;
}) {
  return (
    <>
      <PageHero route={route} />
      <section className="section" id="scope">
        {cards}
      </section>
      <TrustLayer />
      <PageCta navigate={navigate} />
    </>
  );
}

function SolutionDetail({ item, navigate }: { item: (typeof solutions)[number]; navigate: (path: string) => void }) {
  return (
    <>
      <DetailHero eyebrow={`Çözüm / ${item.number}`} title={item.title} intro={item.copy} backTo="/cozumler" navigate={navigate} />
      <section className="section detail-body" id="scope">
        <div className="container detail-grid">
          <ProofPanel title="Uygulama Kapsamı" items={[item.meta, 'Yapı yoğunluğu analizi', 'Kabin ve kuyu gereksinimleri', 'Güvenlik ve teslim kontrolü']} />
          <EvidencePlaceholder />
        </div>
      </section>
      <ProcessBand />
      <PageCta navigate={navigate} />
    </>
  );
}

function ServiceDetail({ item, navigate }: { item: (typeof services)[number]; navigate: (path: string) => void }) {
  return (
    <>
      <DetailHero eyebrow={`Hizmet / ${item.number}`} title={item.title} intro={item.copy} backTo="/hizmetler" navigate={navigate} />
      <section className="section detail-body" id="scope">
        <div className="container detail-grid">
          <ProofPanel title="Servis Kapsamı" items={[item.meta, 'Saha keşfi ve teknik kayıt', 'Raporlama ve takip planı', 'Teklif veya servis yönlendirmesi']} />
          <EvidencePlaceholder />
        </div>
      </section>
      <ProcessBand />
      <PageCta navigate={navigate} />
    </>
  );
}

function ProjectsPage({ route, navigate }: { route: Route; navigate: (path: string) => void }) {
  return (
    <>
      <PageHero route={route} />
      <section className="section" id="scope">
        <div className="container filter-row">
          {projectSegments.map((segment) => (
            <button key={segment} type="button">{segment}</button>
          ))}
        </div>
        <ProjectModules navigate={navigate} />
      </section>
      <PageCta navigate={navigate} />
    </>
  );
}

function ProjectDetail({ project, navigate }: { project: (typeof projectPlaceholders)[number]; navigate: (path: string) => void }) {
  return (
    <>
      <DetailHero eyebrow={`Proje / ${project.category}`} title={project.title} intro={`${project.scope}. Proje fotoğrafı, lokasyon, yıl ve teknik kapsam bilgisi müşteri verisiyle tamamlanacak.`} backTo="/projeler" navigate={navigate} />
      <section className="section detail-body" id="scope">
        <div className="container case-study-grid">
          <EvidencePlaceholder />
          <ProofPanel title="Case Study Alanları" items={['Lokasyon: [CLIENT DATA REQUIRED]', 'Yıl: [CLIENT DATA REQUIRED]', 'Uygulanan çözüm: [CLIENT DATA REQUIRED]', 'Galeri: [CLIENT DATA REQUIRED]']} />
        </div>
      </section>
      <PageCta navigate={navigate} />
    </>
  );
}

function CorporateIndex({ route, navigate }: { route: Route; navigate: (path: string) => void }) {
  return (
    <>
      <section className="section page-hero corporate-hero" id="overview">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">{route.eyebrow}</p>
            <h1>{route.title}</h1>
            <p>{route.intro}</p>
          </div>
          <div className="corporate-asset">
            <Factory aria-hidden="true" />
            <span>EKİP / OFİS / ÜRETİM GÖRSELİ</span>
            <small>PLACEHOLDER ASSET</small>
          </div>
        </div>
      </section>
      <section className="section corporate-flow section-compact" id="about">
        <div className="container corporate-links">
          {corporatePages.map((page, index) => (
            <SiteLink id={index === 0 ? undefined : corporateSectionIds[index]} key={page.path} to={page.path} onNavigate={navigate}>
              <span>{page.label}</span>
              <p>{page.intro}</p>
              <ArrowUpRight aria-hidden="true" />
            </SiteLink>
          ))}
        </div>
      </section>
      <section className="section proof-band" id="method">
        <div className="container split-heading">
          <div>
            <p className="eyebrow">Mühendislik Yaklaşımı</p>
            <h2>Kontrollü proje yönetimi, düzenli bakım ve net raporlama.</h2>
          </div>
          <p>Kurumsal anlatı gerçek ekip, belge ve saha materyali geldikçe güçlendirilecek.</p>
        </div>
      </section>
      <TrustLayer />
    </>
  );
}

function CorporateDetail({ route, navigate }: { route: Route; navigate: (path: string) => void }) {
  return (
    <>
      <DetailHero eyebrow={route.eyebrow} title={route.title} intro={route.intro} backTo="/kurumsal" navigate={navigate} />
      <section className="section detail-body" id="scope">
        <div className="container detail-grid">
          <ProofPanel title="Yayın Öncesi Gereken Veriler" items={['Kurumsal metin', 'Doğrulanmış yıl ve faaliyet kapsamı', 'Fotoğraf veya belge kanıtı', 'Yetkili onayı']} />
          <EvidencePlaceholder />
        </div>
      </section>
    </>
  );
}

function ReferencesPage({ route }: { route: Route }) {
  return (
    <>
      <PageHero route={route} />
      <section className="section" id="scope">
        <ReferenceSegments />
      </section>
      <section className="section proof-band" id="proof">
        <div className="container split-heading">
          <div>
            <p className="eyebrow">Referans Kanıtı</p>
            <h2>Önemli referanslar proje sayfalarına bağlanacak.</h2>
          </div>
          <p>İsim, logo veya proje ilişkisi doğrulanmadan gerçek kurum adı yayınlanmayacak.</p>
        </div>
      </section>
    </>
  );
}

function DocumentsPage({ route }: { route: Route }) {
  return (
    <>
      <PageHero route={route} />
      <section className="section" id="documents">
        <div className="container document-grid">
          {certificates.map(([title, copy]) => (
            <article className="document-card" key={title}>
              <FileText aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
              <small>[CLIENT DATA REQUIRED]</small>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function KnowledgePage({ route, navigate }: { route: Route; navigate: (path: string) => void }) {
  return (
    <>
      <PageHero route={route} />
      <section className="section" id="scope">
        <div className="container article-grid">
          {articlePlaceholders.map((article) => (
            <SiteLink key={article.slug} to={`/bilgi-merkezi/${article.slug}`} onNavigate={navigate}>
              <span>{article.tag}</span>
              <h3>{article.title}</h3>
              <p>Teknik içerik taslağı. Yayın metni müşteri onayıyla netleştirilecek.</p>
            </SiteLink>
          ))}
        </div>
      </section>
    </>
  );
}

function ArticleDetail({ article, navigate }: { article: (typeof articlePlaceholders)[number]; navigate: (path: string) => void }) {
  return (
    <>
      <DetailHero eyebrow={`Bilgi Merkezi / ${article.tag}`} title={article.title} intro="Kurumsal müşterinin anlayacağı kısa, net ve teknik içerik yapısı hazırlandı. Nihai metin gerçek bilgiyle tamamlanacak." backTo="/bilgi-merkezi" navigate={navigate} />
      <section className="section detail-body" id="scope">
        <div className="container article-body">
          <p>[CLIENT DATA REQUIRED] Bu bölümde teknik açıklama, kontrol listesi ve PROAS yaklaşımı yer alacak.</p>
        </div>
      </section>
    </>
  );
}

function ContactPage({ route, navigate }: { route: Route; navigate: (path: string) => void }) {
  return (
    <>
      <PageHero route={route} />
      <section className="section contact" id="cta">
        <ContactBlock navigate={navigate} />
      </section>
    </>
  );
}

function QuoteWizard({ navigate }: { navigate: (path: string) => void }) {
  const steps = [
    ['01', 'İhtiyaç', ['Yeni Kurulum', 'Bakım', 'Modernizasyon', 'Arıza', 'Erişilebilirlik']],
    ['02', 'Yapı', ['Konut', 'Hastane', 'Otel', 'Ticari', 'Kamu', 'Diğer']],
    ['03', 'Proje', ['Lokasyon', 'Kat sayısı', 'Yeni / mevcut yapı']],
    ['04', 'Dosya', ['PDF', 'Şartname', 'Mimari çizim', 'Fotoğraf']],
    ['05', 'İletişim', ['Yetkili kişi', 'Telefon', 'E-posta']],
    ['06', 'Özet', ['Talep özeti', 'Gönderim onayı']],
  ];

  return (
    <>
      <DetailHero eyebrow="Teklif Al" title="Asansör projesi için yapılandırılmış teklif akışı." intro="Basit iletişim formu yerine ihtiyacı, yapı tipini ve teknik bilgiyi sırayla alan kurumsal teklif iskeleti." backTo="/" navigate={navigate} />
      <section className="section wizard-section" id="scope">
        <div className="container wizard-grid">
          {steps.map(([number, title, options]) => (
            <article className="wizard-step" key={title as string}>
              <span>{number as string}</span>
              <h3>{title as string}</h3>
              {(options as string[]).map((option) => (
                <button key={option} type="button">
                  {option}
                </button>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ServiceRequest({ navigate }: { navigate: (path: string) => void }) {
  const [selectedIssue, setSelectedIssue] = React.useState('Asansör çalışmıyor');
  const items = ['Asansör çalışmıyor', 'Kapı problemi', 'Ses / titreşim', 'Kat seviye problemi', 'Bakım talebi', 'Diğer'];

  return (
    <>
      <DetailHero eyebrow="Servis Talebi" title="Arıza ve bakım talepleri için hızlı servis formu." intro="Telefon, lokasyon, yetkili bilgisi ve sorun tipiyle servis ekibine aktarılacak net talep yapısı." backTo="/" navigate={navigate} />
      <section className="section service-request" id="scope">
        <div className="container request-grid">
          <div className="issue-grid">
            {items.map((item) => (
              <button
                className={selectedIssue === item ? 'is-selected' : undefined}
                key={item}
                type="button"
                onClick={() => setSelectedIssue(item)}
              >
                {selectedIssue === item ? <CheckCircle2 aria-hidden="true" /> : <LifeBuoy aria-hidden="true" />} {item}
              </button>
            ))}
          </div>
          <form className="lead-form">
            <label>
              Lokasyon
              <input name="location" placeholder="Bina / ilçe / adres" />
            </label>
            <label>
              Telefon
              <input name="phone" placeholder="Yetkili telefon numarası" />
            </label>
            <label>
              Açıklama
              <textarea name="message" placeholder="Sorunu kısaca açıklayın" />
            </label>
            <button type="button">
              Servis Talebi Oluştur <ClipboardCheck aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function PageHero({ route }: { route: Route }) {
  return (
    <section className={`section page-hero ${route.theme === 'dark' ? 'dark-section' : ''}`} id="overview">
      <div className="container page-hero-grid">
        <div>
          <p className="eyebrow">{route.eyebrow}</p>
          <h1>{route.title}</h1>
          <p>{route.intro}</p>
        </div>
        <MiniShaft />
      </div>
    </section>
  );
}

function DetailHero({
  eyebrow,
  title,
  intro,
  backTo,
  navigate,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  backTo: string;
  navigate: (path: string) => void;
}) {
  return (
    <section className="section page-hero detail-hero" id="overview">
      <div className="container page-hero-grid">
        <div>
          <SiteLink className="back-link" to={backTo} onNavigate={navigate}>
            <ArrowLeft aria-hidden="true" /> Geri
          </SiteLink>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <MiniShaft />
      </div>
    </section>
  );
}

function MiniShaft() {
  return (
    <div className="mini-shaft" aria-hidden="true">
      <span />
      <span />
      <strong>00 ↑</strong>
      <small>PROAS SYSTEM</small>
    </div>
  );
}

function ProofPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="proof-panel">
      <p className="eyebrow">{title}</p>
      {items.map((item) => (
        <div key={item}>
          <CheckCircle2 aria-hidden="true" />
          <span>{item}</span>
        </div>
      ))}
    </article>
  );
}

function EvidencePlaceholder() {
  return (
    <div className="evidence-placeholder" id="proof">
      <Upload aria-hidden="true" />
      <h3>Gerçek görsel / belge alanı</h3>
      <p>Proje fotoğrafı, kabin, makine dairesi, ekip veya sertifika görseli müşteri verisiyle değiştirilecek.</p>
      <small>CLIENT DATA REQUIRED</small>
    </div>
  );
}

function ProcessBand() {
  return (
    <section className="section process-section" id="process">
      <div className="container process-layout">
        <div className="sticky-copy">
          <p className="eyebrow">Süreç</p>
          <h2>Her durakta kontrol, her aşamada netlik.</h2>
          <p>İşin kapsamı netleştirilir, saha uygulaması kayıt altına alınır ve teslim sonrası takip planlanır.</p>
        </div>
        <div className="floor-stack">
          {processSteps.map(([number, title, copy]) => (
            <article className="floor-card" key={title}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustLayer() {
  return (
    <section className="section proof-band" id="proof">
      <div className="container split-heading">
        <div>
          <p className="eyebrow">Kanıt Katmanı</p>
          <h2>Gerçek firma derinliği için hazır alanlar.</h2>
        </div>
        <p>Proje fotoğrafları, servis ekibi, makine dairesi, sertifikalar ve referanslar doğrulanmış veriyle eklenecek.</p>
      </div>
    </section>
  );
}

function ContactBlock({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="container contact-grid">
      <div>
        <p className="eyebrow">İletişim</p>
        <h2>Projeniz için keşif planlayalım.</h2>
        <p>
          Yeni kurulum, bakım, arıza servisi veya modernizasyon ihtiyacınız için PROAS ekibi sizinle iletişime geçsin.
        </p>
        <div className="contact-links">
          <a href="tel:+904623231519"><Phone aria-hidden="true" /> 0462 323 15 19</a>
          <span><LifeBuoy aria-hidden="true" /> Trabzon ve Samsun hizmet ağı</span>
        </div>
        <div className="hero-actions">
          <SiteLink className="button button-primary" to="/teklif-al" onNavigate={navigate}>
            Teklif Al <ArrowUpRight aria-hidden="true" />
          </SiteLink>
          <SiteLink className="button button-ghost" to="/servis-talebi" onNavigate={navigate}>
            Servis Talebi
          </SiteLink>
        </div>
      </div>
      <form className="lead-form">
        <label>
          Ad Soyad
          <input name="name" placeholder="Adınız ve soyadınız" />
        </label>
        <label>
          Telefon
          <input name="phone" placeholder="Telefon numaranız" />
        </label>
        <label>
          Hizmet Türü
          <select name="service" defaultValue="">
            <option value="" disabled>Seçiniz</option>
            <option>Yeni kurulum</option>
            <option>Bakım & servis</option>
            <option>Revizyon / modernizasyon</option>
            <option>Erişilebilirlik sistemi</option>
          </select>
        </label>
        <label>
          Mesaj
          <textarea name="message" placeholder="Proje veya mevcut sistem hakkında kısa bilgi" />
        </label>
        <button type="button">
          Talep Gönder <ClipboardCheck aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}

function PageCta({ navigate }: { navigate: (path: string) => void }) {
  return (
    <section className="section page-cta" id="cta">
      <div className="container page-cta-inner">
        <p className="eyebrow">Teklif / Servis</p>
        <h2>İhtiyacı doğru kata taşıyalım.</h2>
        <div>
          <SiteLink className="button button-primary" to="/teklif-al" onNavigate={navigate}>Teklif Al <ArrowUpRight aria-hidden="true" /></SiteLink>
          <SiteLink className="button button-ghost" to="/servis-talebi" onNavigate={navigate}>Servis Talebi</SiteLink>
        </div>
      </div>
    </section>
  );
}

function Footer({ navigate }: { navigate: (path: string) => void }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <SiteLink className="brand" to="/" onNavigate={navigate}>
          <span>PROAS</span>
          <small>ASANSÖR</small>
        </SiteLink>
        <p>Dikey ulaşım sistemlerinde kurulum, bakım, servis ve modernizasyon.</p>
        <div>
          <SiteLink to="/belgeler" onNavigate={navigate}>Belgeler</SiteLink>
          <SiteLink to="/servis-talebi" onNavigate={navigate}>Servis Talebi</SiteLink>
          <SiteLink to="/teklif-al" onNavigate={navigate}>Teklif Al</SiteLink>
        </div>
      </div>
    </footer>
  );
}

function MobileDock({ navigate }: { navigate: (path: string) => void }) {
  return (
    <nav className="mobile-dock" aria-label="Hızlı işlemler">
      <a href="tel:+904623231519">Ara</a>
      <SiteLink to="/servis-talebi" onNavigate={navigate}>Servis</SiteLink>
      <SiteLink to="/teklif-al" onNavigate={navigate}>Teklif</SiteLink>
    </nav>
  );
}

function NotFound({ navigate }: { navigate: (path: string) => void }) {
  return (
    <section className="section page-hero" id="overview">
      <div className="container page-hero-grid">
        <div>
          <p className="eyebrow">404</p>
          <h1>Bu kat henüz açılmadı.</h1>
          <p>İstenen rota mimaride bulunamadı. Ana sayfaya dönebilir veya teklif akışına geçebilirsiniz.</p>
          <div className="hero-actions">
            <SiteLink className="button button-primary" to="/" onNavigate={navigate}>Ana Sayfa</SiteLink>
            <SiteLink className="button button-ghost" to="/teklif-al" onNavigate={navigate}>Teklif Al</SiteLink>
          </div>
        </div>
        <MiniShaft />
      </div>
    </section>
  );
}

function getRoute(path: string): Route {
  const found = routeCopy.find((route) => route.path === path) ?? corporatePages.find((route) => route.path === path);
  if (found) return found;

  const solution = solutions.find((item) => item.path === path);
  if (solution) {
    return {
      path,
      label: solution.title,
      eyebrow: `Çözüm / ${solution.number}`,
      title: solution.title,
      intro: solution.copy,
      rail: defaultRail,
    };
  }

  const service = services.find((item) => item.path === path);
  if (service) {
    return {
      path,
      label: service.title,
      eyebrow: `Hizmet / ${service.number}`,
      title: service.title,
      intro: service.copy,
      rail: service.path === '/hizmetler/bakim-servis' ? maintenanceRail : defaultRail,
    };
  }

  if (path.startsWith('/projeler/')) {
    return {
      path,
      label: 'Proje Detayı',
      eyebrow: 'Proje',
      title: 'Proje detayı',
      intro: 'Proje verisi eklenecek.',
      theme: 'dark',
      rail: defaultRail,
    };
  }

  return {
    path,
    label: 'Kat bulunamadı',
    eyebrow: '404',
    title: 'Bu kat henüz açılmadı.',
    intro: 'Ana sayfaya dönün.',
    rail: defaultRail,
  };
}

function getShellArea(path: string) {
  if (path === '/') return 'home';
  if (path.startsWith('/projeler')) return 'projects';
  if (path.startsWith('/kurumsal')) return 'corporate';
  if (path.startsWith('/hizmetler')) return 'services';
  if (path.startsWith('/cozumler')) return 'solutions';
  if (path.startsWith('/servis-talebi')) return 'service-request';
  if (path.startsWith('/teklif-al')) return 'quote';
  return 'standard';
}

function normalizePath(value: string) {
  if (!value || value === '/index.html') return '/';
  return value.length > 1 ? value.replace(/\/$/, '') : value;
}

function SiteLink({ to, onNavigate, onClick, children, ...props }: LinkProps) {
  return (
    <a
      {...props}
      href={to}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        onNavigate?.(to);
      }}
    >
      {children}
    </a>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
