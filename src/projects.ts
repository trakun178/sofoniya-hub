export type Project = {
  id: string;
  name: string;
  tagline: string;
  url: string;
  cover: string;
  tags: string[];
  status: "live" | "dev";
  year: number;
};

export const PROJECTS: Project[] = [
  {
    id: "sofoniya",
    name: "SOFONIYA · Перетяжка мебели",
    tagline:
      "Каталог тканей, калькулятор перетяжки, слайдер «до/после», заявки в Telegram и на почту с фото",
    url: "https://peretyazhka.sofoniya.ru",
    cover: "/covers/sofoniya.jpg",
    tags: ["React", "Vite", "Telegram Bot", "Resend", "CF Workers"],
    status: "live",
    year: 2026,
  },
  {
    id: "shabashka",
    name: "Шабашка ДНР",
    tagline:
      "Доска объявлений услуг региона: постинг из Telegram, модерация, поиск",
    url: "https://shabashka.sofoniya.ru",
    cover: "/covers/shabashka.jpg",
    tags: ["React", "Cloudflare Pages", "VK API"],
    status: "live",
    year: 2026,
  },
  {
    id: "vsedlya",
    name: "Всё для перетяжки",
    tagline: "Магазин материалов и фурнитуры для перетяжки мебели",
    url: "https://github.com/trakun178/vsedlyaperetyazhki",
    cover: "/covers/vsedlya.jpg",
    tags: ["React", "скоро"],
    status: "dev",
    year: 2026,
  },
];
