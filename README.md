En categorías : 
const CATEGORIES = [
  {
    icon: `${IMG}/icono1.png`,
    title: "Patrimonio y Legado Cultural",
    text: "Tours en centros históricos y zonas patrimoniales. Sumérgete en la arquitectura y las crónicas que dieron forma a nuestra identidad.",
    href: "/tienda?tipo=cultural",
  },
  {
    icon: `${IMG}/icono2.png`,
    title: "Eco-Aventura y Naturaleza",
    text: "Actividades de aventura y ecoturismo. Desde las Barrancas del Cobre hasta las Cascadas de Micos; la naturaleza en su estado más puro.",
    href: "/tienda?tipo=naturaleza,aventura",
  },
  {
    icon: `${IMG}/icono3.png`,
    title: "Huellas del Pasado",
    text: "Recorridos en zonas arqueológicas. Visitas guiadas a sitios emblemáticos con un enfoque educativo y respetuoso.",
    href: "/tienda?q=arqueol",
  },
  {
    icon: `${IMG}/icono4.png`,
    title: "Horizontes del Pacífico y Caribe",
    text: "Tours de playa y actividades acuáticas. Relajación y adrenalina en los litorales más bellos del país, como el emblemático malecón de Mazatlán.",
    href: "/tienda?q=playa",
  },
  {
    icon: `${IMG}/icono5.png`,
    title: "Rutas del Sabor",
    text: "Experiencias gastronómicas y rutas del vino. Un viaje sensorial por los mercados, cocinas de autor y los viñedos más exclusivos.",
    href: "/tienda?tipo=gastronomia",
  },
  {
    icon: `${IMG}/icono6.png`,
    title: "Pulso Urbano y Arte",
    text: "Experiencias artísticas y nocturnas. La sofisticación de las ciudades mexicanas a través de sus museos, galerías y vida cosmopolita.",
    href: "/tienda?tipo=recreativo",
  },
];


<div className="grid gap-6 sm:grid-cols-2">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.title}
                  href={c.href}
                  className="group flex flex-col gap-4 rounded-2xl border border-orange-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-50 p-2 text-purple-700 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <img
                      src={img(c.icon, 160)}
                      alt=""
                      aria-hidden
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-purple-950 transition-colors group-hover:text-orange-600">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{c.text}</p>
                  </div>
                </Link>
              ))}
            </div>