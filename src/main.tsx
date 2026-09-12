import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Building2,
  ChevronDown,
  CircleDot,
  ClipboardCheck,
  Factory,
  Gauge,
  Lightbulb,
  LightbulbOff,
  LifeBuoy,
  Menu,
  MoveVertical,
  Phone,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import './styles.css';

const navItems = [
  ['Çözümler', 'solutions'],
  ['Hizmetler', 'services'],
  ['Süreç', 'process'],
  ['Referanslar', 'references'],
  ['İletişim', 'contact'],
];

const sections = [
  { id: 'hero', number: '00', label: 'Giriş Katı' },
  { id: 'solutions', number: '01', label: 'Çözümler Katı' },
  { id: 'services', number: '02', label: 'Hizmetler Katı' },
  { id: 'process', number: '03', label: 'Süreç Katı' },
  { id: 'modernization', number: '04', label: 'Modernizasyon Katı' },
  { id: 'references', number: '05', label: 'Referanslar Katı' },
  { id: 'contact', number: '06', label: 'İletişim Katı' },
];

const solutions = [
  {
    number: '01',
    title: 'Yolcu Asansörleri',
    copy: 'Konut, iş merkezi ve karma kullanımlı yapılarda yoğun trafiğe uygun dikey ulaşım.',
    tag: 'Konut / Ticari',
  },
  {
    number: '02',
    title: 'Hasta & Yük Sistemleri',
    copy: 'Sağlık yapıları, lojistik alanlar ve ağır kullanım senaryoları için teknik çözüm.',
    tag: 'Sağlık / Endüstri',
  },
  {
    number: '03',
    title: 'Araç Asansörleri',
    copy: 'Otopark ve servis alanlarında güvenli hareket, net kapasite planı ve dayanıklı sistem.',
    tag: 'Otopark / Servis',
  },
  {
    number: '04',
    title: 'Erişilebilirlik',
    copy: 'Engelli ve yaşlı kullanıcılar için yapılara güvenli, konforlu ve kapsayıcı erişim.',
    tag: 'Platform / Stairlift',
  },
];

const services = [
  {
    icon: Building2,
    title: 'Yeni Kurulum',
    copy: 'Keşiften projelendirmeye, montajdan teslim sürecine kadar kontrollü uygulama.',
  },
  {
    icon: Wrench,
    title: 'Periyodik Bakım',
    copy: 'Asansörlerin güvenli, düzenli ve kesintisiz çalışmasını destekleyen servis planı.',
  },
  {
    icon: Gauge,
    title: 'Arıza & Servis',
    copy: 'Hızlı müdahale, net raporlama ve sürekliliği önceleyen teknik yaklaşım.',
  },
  {
    icon: ShieldCheck,
    title: 'Revizyon',
    copy: 'Mevcut sistemlerde güvenlik, konfor, enerji ve performans odaklı modernizasyon.',
  },
];

const process = [
  ['01', 'Keşif', 'Yapı, trafik yoğunluğu, kullanım amacı ve erişilebilirlik ihtiyacı analiz edilir.'],
  ['02', 'Projelendirme', 'Teknik gerekliliklere göre çözüm, ekipman ve uygulama planı netleşir.'],
  ['03', 'Montaj', 'Saha uygulaması kontrollü ilerler; süreç kalite ve güvenlik odağında yürütülür.'],
  ['04', 'Test & Teslim', 'Devreye alma, kontrol ve kullanıcı deneyimi birlikte değerlendirilir.'],
  ['05', 'Bakım', 'Sistem ömrü boyunca düzenli servis ve modernizasyon ihtiyacı takip edilir.'],
];

const references = [
  'Sağlık yapıları',
  'Bankacılık',
  'Kamu binaları',
  'Otel projeleri',
  'Perakende',
  'Konut siteleri',
];

function App() {
  const [activeSection, setActiveSection] = React.useState(0);
  const [lightsOn, setLightsOn] = React.useState(true);
  const [isSwitchingLights, setIsSwitchingLights] = React.useState(false);
  const activeSectionRef = React.useRef(0);

  React.useEffect(() => {
    const root = document.documentElement;
    let lastScrollY = window.scrollY;
    let progressFrame = 0;
    const observed = sections
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
          const index = sections.findIndex((section) => section.id === visible.target.id);
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

    observed.forEach((section) => observer.observe(section));
    setProgress();
    window.addEventListener('scroll', requestProgress, { passive: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(progressFrame);
      window.removeEventListener('scroll', requestProgress);
    };
  }, []);

  const toggleLights = () => {
    if (isSwitchingLights) return;
    setIsSwitchingLights(true);
    window.setTimeout(() => setLightsOn((current) => !current), 320);
    window.setTimeout(() => setIsSwitchingLights(false), 860);
  };

  return (
    <main className={`site-shell ${lightsOn ? 'lights-on' : 'lights-off'} ${isSwitchingLights ? 'is-switching-lights' : ''}`}>
      <div className="light-transition" aria-hidden="true">
        <span />
        <span />
      </div>
      <SiteRail activeIndex={activeSection} />
      <Header lightsOn={lightsOn} onToggleLights={toggleLights} />
      <section className="hero section" id="hero">
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
              Asansör sistemleri, montaj, bakım, modernizasyon ve erişilebilirlik
              çözümlerinde yapınızın tüm yaşam döngüsünü düşünen teknik ortak.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Teklif Al <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="button button-ghost" href="#solutions">
                Çözümleri Keşfet <ChevronDown aria-hidden="true" />
              </a>
            </div>
            <div className="hero-tags" aria-label="Hizmet alanları">
              <span>Montaj</span>
              <span>Bakım & Servis</span>
              <span>Revizyon</span>
              <span>Erişilebilirlik</span>
            </div>
          </div>

          <ElevatorVisual floor={sections[activeSection]?.number ?? '00'} />
        </div>
      </section>

      <section className="section intro-band">
        <div className="container intro-grid">
          <p className="kicker">Trabzon / Samsun</p>
          <h2>PROAS, yapının yalnızca ilk gününü değil sistem ömrünü planlar.</h2>
          <p>
            Güvenli bir asansör sistemi yalnızca ekipmandan ibaret değildir; doğru
            keşif, doğru projelendirme, nitelikli montaj ve düzenli bakımın bütünüdür.
          </p>
        </div>
      </section>

      <section className="section" id="solutions">
        <div className="container section-heading">
          <p className="eyebrow">01 — Çözümler</p>
          <h2>Yapıya göre şekillenen asansör sistemleri.</h2>
        </div>
        <div className="container solution-panels">
          {solutions.map((item) => (
            <article className="solution-panel" key={item.title}>
              <span>{item.number}</span>
              <div>
                <p>{item.tag}</p>
                <h3>{item.title}</h3>
                <small>{item.copy}</small>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <div className="container split-heading">
          <div>
            <p className="eyebrow">02 — Hizmetler</p>
            <h2>Kurulumdan son kata kadar değil, sistem ömrü boyunca.</h2>
          </div>
          <p>
            PROAS, bakım ve modernizasyonu satış sonrası küçük bir detay olarak değil,
            güvenli dikey ulaşımın ana parçası olarak ele alır.
          </p>
        </div>
        <div className="container service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="container process-layout">
          <div className="sticky-copy">
            <p className="eyebrow">03 — Süreç</p>
            <h2>Her durakta kontrol, her aşamada netlik.</h2>
            <p>
              Süreç, bir asansör yolculuğu gibi okunur: doğru katta durur, ne yapılacağını
              gösterir ve bir sonraki adıma güvenle geçer.
            </p>
          </div>
          <div className="floor-stack">
            {process.map(([number, title, copy]) => (
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

      <section className="section modernization" id="modernization">
        <div className="container modernization-grid">
          <div>
            <p className="eyebrow">04 — Modernizasyon</p>
            <h2>Eski sistemi yalnızca yenilemeyiz; güven, konfor ve süreklilik kazandırırız.</h2>
          </div>
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
        </div>
      </section>

      <section className="section references" id="references">
        <div className="container section-heading">
          <p className="eyebrow">05 — Referans Alanları</p>
          <h2>Farklı yoğunluklara sahip yapılarda teknik güven.</h2>
        </div>
        <div className="container reference-grid">
          {references.map((reference) => (
            <div className="reference-tile" key={reference}>
              <CircleDot aria-hidden="true" />
              <span>{reference}</span>
            </div>
          ))}
        </div>
        <div className="container production-strip">
          <Factory aria-hidden="true" />
          <p>
            Üretim ve çözüm geliştirme ağına dair Azelift ilişkisi yayın öncesi şirket
            tarafından doğrulanacak şekilde konumlandırıldı.
          </p>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">06 — İletişim</p>
            <h2>Projeniz için keşif planlayalım.</h2>
            <p>
              Yeni kurulum, bakım, arıza servisi veya modernizasyon ihtiyacınız için
              PROAS ekibi sizinle iletişime geçsin.
            </p>
            <div className="contact-links">
              <a href="tel:+904623231519"><Phone aria-hidden="true" /> 0462 323 15 19</a>
              <span><LifeBuoy aria-hidden="true" /> Trabzon & Samsun servis varlığı</span>
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
      </section>
    </main>
  );
}

function Header({
  lightsOn,
  onToggleLights,
}: {
  lightsOn: boolean;
  onToggleLights: () => void;
}) {
  const LightIcon = lightsOn ? LightbulbOff : Lightbulb;

  return (
    <header className="site-header">
      <a className="brand" href="#hero" aria-label="PROAS ana sayfa">
        <span>PROAS</span>
        <small>ASANSÖR</small>
      </a>
      <nav aria-label="Ana menü">
        {navItems.map(([label, href]) => (
          <a key={href} href={`#${href}`}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="light-toggle" type="button" onClick={onToggleLights}>
          <LightIcon aria-hidden="true" />
          {lightsOn ? 'Işıkları Kapat' : 'Işıkları Aç'}
        </button>
        <a className="header-cta" href="#contact">
          Teklif Al <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <button className="menu-button" aria-label="Menüyü aç">
        <Menu aria-hidden="true" />
      </button>
    </header>
  );
}

function SiteRail({ activeIndex }: { activeIndex: number }) {
  return (
    <aside className="site-rail" aria-label="Sayfa kat göstergesi">
      <div className="rail-line">
        <div className="rail-cabin">
          <MoveVertical aria-hidden="true" />
        </div>
      </div>
      <div className="rail-floors">
        {sections.map((section, index) => (
          <a
            className={index === activeIndex ? 'is-active' : undefined}
            key={section.id}
            href={`#${section.id}`}
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
    <div className="shaft-wrap" tabIndex={0} aria-label="Asansör kabini. Üzerine gelince kapıları açılır.">
      <div className="shaft">
        <div className="shaft-lines">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="cabin">
          <div className="cabin-display">PROAS</div>
          <div className="cabin-light" />
          <div className="cabin-doors">
            <span />
            <span />
          </div>
        </div>
        <div className="floor-readout">
          <small>AKTİF KAT</small>
          <strong>{floor}</strong>
          <em>Üzerine gel</em>
        </div>
      </div>
      <div className="technical-ring">
        <span>VERTICAL SYSTEM</span>
        <span>ENGINEERING</span>
        <span>SERVICE</span>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
