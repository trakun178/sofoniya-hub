import { PROJECTS } from "./projects";

export default function App() {
  return (
    <>
      <header className="hub-header">
        <span className="hub-logo">
          <span>AI_WebStudio</span>
          <small>сайты, которые продают</small>
        </span>
        <nav className="hub-nav">
          <a href="#projects">Проекты</a>
          <a href="#contact">Связаться</a>
        </nav>
      </header>

      <section className="hub-hero">
        <span className="hub-overline">Портфолио · ДНР · 2026</span>
        <h1>
          Делаем сайты, которые <em>приносят заявки</em>, а не просто висят в
          сети
        </h1>
        <p>
          Каталоги, калькуляторы, воронки в Telegram и почту. Маленькая студия с
          большим стеком: от Figma-концепта до боевого деплоя за 7 дней.
        </p>
        <div className="hub-stamps">
          <span className="hub-stamp">
            <b>3</b> проекта в бою
          </span>
          <span className="hub-stamp">
            <b>7</b> дней до MVP
          </span>
          <span className="hub-stamp">
            <b>0 ₽</b> поддержка первый месяц
          </span>
        </div>
      </section>

      <section className="hub-section" id="projects">
        <h2>Проекты</h2>
        <div className="hub-grid">
          {PROJECTS.map((p) => (
            <a
              key={p.id}
              className="hub-card"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="hub-cover">
                <img
                  src={p.cover}
                  alt={p.name}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
                {p.status === "dev" && <i className="hub-dev">в разработке</i>}
              </span>
              <span className="hub-body">
                <b>{p.name}</b>
                <small>{p.tagline}</small>
                <span className="hub-tags">
                  {p.tags.map((t) => (
                    <i key={t}>{t}</i>
                  ))}
                </span>
                <span className="hub-go">
                  {p.status === "live" ? "Смотреть сайт →" : "Репозиторий →"}
                </span>
              </span>
            </a>
          ))}
        </div>
        <p className="hub-note">
          Хочешь свой проект в эту витрину? Напиши нам — запустим за 7 дней.
        </p>
      </section>

      <footer className="hub-footer" id="contact">
        <div>
          <b>AI_WebStudio</b>
          <p>Заказать сайт · аудит · доработка · перенос</p>
        </div>
        <div className="hub-socs">
          <a
            href="https://max.ru/u/f9LHodD0cOIb2Tv0HZyO-NRT9UJWPvPj8e-2REW_Cnq5XCVdNIjvwyM0Otk"
            target="_blank"
            rel="noreferrer"
          >
            MAX
          </a>
          <a
            href="https://t.me/dnr_peretyajka_mebeli?direct"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
          <a href="mailto:trakun178@yandex.ru">trakun178@yandex.ru</a>
        </div>
      </footer>
    </>
  );
}
