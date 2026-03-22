import { useState, useEffect, useRef } from "react";

// ============= TRANSLATIONS =============
const translations = {
  uk: {
    nav: {
      system: "Система",
      token: "Токен",
      onespace: "OneSpace",
      metaresources: "Метаресурси",
      cases: "Web4 Кейси",
      contact: "Контакт",
      consultation: "Консультація"
    },
    form: {
      name: { label: "Ім'я *", placeholder: "Ваше ім'я" },
      userType: {
        label: "Хто ви? *",
        placeholder: "Оберіть варіант",
        investor: "Інвестор",
        business: "Бізнес (постачальник товарів та послуг)",
        partner: "Партнер системи",
        user: "Користувач (інтерес до товарів та сервісів Web4)"
      },
      phone: { label: "Телефон", placeholder: "+380 XX XXX XXXX", hint: "Вкажіть телефон або Telegram" },
      telegram: { label: "Telegram", placeholder: "@username" },
      message: { label: "Повідомлення", placeholder: "Опишіть ваше питання або тему для обговорення..." },
      submit: "Надіслати заявку",
      submitting: "Відправка...",
      success: "Заявку надіслано! Очікуйте зв'язку."
    },
    contact: {
      tag: "▸ Зв'язок",
      title: "Заповніть",
      titleSpan: "форму",
      quote: {
        text: "Найкращий час для входу в трансформаційну технологію — на старті. Другий найкращий час — зараз.",
        author: "— Олександр Жданенко"
      }
    }
  },
  
  en: {
    nav: {
      system: "System",
      token: "Token",
      onespace: "OneSpace",
      metaresources: "Metaresources",
      cases: "Web4 Cases",
      contact: "Contact",
      consultation: "Consultation"
    },
    form: {
      name: { label: "Name *", placeholder: "Your name" },
      userType: {
        label: "Who are you? *",
        placeholder: "Select option",
        investor: "Investor",
        business: "Business (goods and services provider)",
        partner: "System Partner",
        user: "User (interested in Web4 goods and services)"
      },
      phone: { label: "Phone", placeholder: "+1 XXX XXX XXXX", hint: "Provide phone or Telegram" },
      telegram: { label: "Telegram", placeholder: "@username" },
      message: { label: "Message", placeholder: "Describe your question or topic for discussion..." },
      submit: "Submit Application",
      submitting: "Sending...",
      success: "Application sent! Expect contact soon."
    },
    contact: {
      tag: "▸ Contact",
      title: "Fill out the",
      titleSpan: "form",
      quote: {
        text: "The best time to enter transformational technology is at the start. The second best time is now.",
        author: "— Oleksandr Zhdanenko"
      }
    }
  },
  
  ru: {
    nav: {
      system: "Система",
      token: "Токен",
      onespace: "OneSpace",
      metaresources: "Метаресурсы",
      cases: "Web4 Кейсы",
      contact: "Контакт",
      consultation: "Консультация"
    },
    form: {
      name: { label: "Имя *", placeholder: "Ваше имя" },
      userType: {
        label: "Кто вы? *",
        placeholder: "Выберите вариант",
        investor: "Инвестор",
        business: "Бизнес (поставщик товаров и услуг)",
        partner: "Партнёр системы",
        user: "Пользователь (интерес к товарам и сервисам Web4)"
      },
      phone: { label: "Телефон", placeholder: "+7 XXX XXX XXXX", hint: "Укажите телефон или Telegram" },
      telegram: { label: "Telegram", placeholder: "@username" },
      message: { label: "Сообщение", placeholder: "Опишите ваш вопрос или тему для обсуждения..." },
      submit: "Отправить заявку",
      submitting: "Отправка...",
      success: "Заявка отправлена! Ожидайте связи."
    },
    contact: {
      tag: "▸ Связь",
      title: "Заполните",
      titleSpan: "форму",
      quote: {
        text: "Лучшее время для входа в трансформационную технологию — на старте. Второе лучшее время — сейчас.",
        author: "— Александр Жданенко"
      }
    }
  }
};

// ============= HOOKS =============
function useReveal(){
  const ref = useRef(null);
  const [visible,setVisible] = useState(false);
  useEffect(()=>{
    const el = ref.current; if(!el) return;
    const obs = new IntersectionObserver(([e])=>{
      if(e.isIntersecting){setVisible(true);obs.disconnect();}
    },{threshold:0.12});
    obs.observe(el);
    return()=>obs.disconnect();
  },[]);
  return [ref,visible];
}

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrolled;
}

function useLanguage() {
  const [lang, setLang] = useState('uk');
  
  useEffect(() => {
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && ['uk', 'en', 'ru'].includes(urlLang)) {
      setLang(urlLang);
      return;
    }
    
    // Check localStorage
    const saved = localStorage.getItem('preferred-language');
    if (saved && ['uk', 'en', 'ru'].includes(saved)) {
      setLang(saved);
      return;
    }
    
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('uk')) setLang('uk');
    else if (browserLang.startsWith('ru')) setLang('ru');
    else setLang('uk');
  }, []);
  
  useEffect(() => {
    localStorage.setItem('preferred-language', lang);
    document.documentElement.lang = lang;
  }, [lang]);
  
  const t = translations[lang];
  
  return [lang, setLang, t];
}

function AnimCounter({to,suffix='',duration=1600}){
  const [val,setVal]=useState(0);
  const [ref,vis]=useReveal();
  useEffect(()=>{
    if(!vis) return;
    let start=null;
    const num=parseFloat(String(to).replace(/[^0-9.]/g,''));
    const step=ts=>{
      if(!start)start=ts;
      const p=Math.min((ts-start)/duration,1);
      const ease=1-Math.pow(1-p,3);
      setVal(Math.round(ease*num));
      if(p<1)requestAnimationFrame(step);
      else setVal(num);
    };
    requestAnimationFrame(step);
  },[vis,to,duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

function LanguageSwitcher({lang, setLang}) {
  const flags = {
    uk: '🇺🇦',
    en: '🇬🇧',
    ru: '🇷🇺'
  };
  
  const names = {
    uk: 'UA',
    en: 'EN',
    ru: 'RU'
  };
  
  return (
    <div className="lang-switcher">
      {['uk', 'en', 'ru'].map(l => (
        <button
          key={l}
          className={`lang-btn ${lang === l ? 'active' : ''}`}
          onClick={() => setLang(l)}
          aria-label={`Switch to ${names[l]}`}
          title={names[l]}
        >
          <span className="lang-flag">{flags[l]}</span>
          <span className="lang-code">{names[l]}</span>
        </button>
      ))}
    </div>
  );
}

function useMobileMenu(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    if(open){
      document.body.style.overflow='hidden';
    }else{
      document.body.style.overflow='';
    }
    return()=>{document.body.style.overflow='';};
  },[open]);
  return [open,setOpen];
}

// ============= NAVIGATION =============
function Nav({ page, setPage }) {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useMobileMenu();
  const [lang, setLang, t] = useLanguage();

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      
      <div className="nav-brand">
        Bitbon System
      </div>

      <LanguageSwitcher lang={lang} setLang={setLang} />

      <div className="nav-links">
        <a onClick={() => setPage('system')}>
          {t.nav.system}
        </a>

        <a onClick={() => setPage('token')}>
          {t.nav.token}
        </a>

        <a onClick={() => setPage('contact')}>
          {t.nav.contact}
        </a>
      </div>

    </nav>
  );
}

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} Nav={Nav} />;
}
