import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getTranslations } from "next-intl/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const SUPPORT_EMAIL = "info@curalia.com.mx";
const BRAND_NAME = "Curalia";
const BRAND_URL = "curalia.com.mx";
const BRAND_LOGO = "https://curalia.com.mx/title-logo.png";

// Campos estándar para filtrarlos en la sección de "Campos adicionales"
const STANDARD_FIELDS = ["nombre", "email", "mensaje", "asunto", "locale"];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { locale, nombre, email, mensaje, asunto = "Nuevo mensaje de contacto" } = body;

    // Inicializamos traducciones dinámicas con el locale recibido
    const t = await getTranslations({ locale, namespace: "Emails.contact" });

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: t("errorMissingFields") },
        { status: 400 }
      );
    }

    // Extraer de forma dinámica cualquier propiedad extra enviada en el lead
    const extraFields = Object.entries(body).filter(
      ([key, val]) => !STANDARD_FIELDS.includes(key) && val !== undefined && val !== null && val !== ""
    );

    // 1. EMAIL PARA EL NEGOCIO (LEAD DE CONTACTO - FONDO MORADO MUY OSCURO)
    const businessEmailHtml = renderEmailTemplate({
      title: t("business.title"),
      subtitle: t("business.subtitle"),
      sectionLabel: t("business.sectionLabel"),
      nombre,
      email,
      mensaje,
      extraFields,
      isBusiness: true,
      t,
    });

    await resend.emails.send({
      from: `${BRAND_NAME} Leads <${SUPPORT_EMAIL}>`, 
      to: SUPPORT_EMAIL,
      subject: t("business.subject", { asunto, nombre }),
      html: businessEmailHtml,
    });

    // 2. EMAIL PARA EL CLIENTE (CONFIRMACIÓN DE RECEPCIÓN - FONDO MORADO VIBRANTE)
    const clientEmailHtml = renderEmailTemplate({
      title: t("client.title"),
      subtitle: t("client.subtitle"),
      sectionLabel: t("client.sectionLabel"),
      nombre,
      email,
      mensaje,
      extraFields,
      isBusiness: false,
      t,
    });

    await resend.emails.send({
      from: `${BRAND_NAME} <${SUPPORT_EMAIL}>`,
      to: email,
      subject: t("client.subject", { brandName: BRAND_NAME }),
      html: clientEmailHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error: error.message || "Error" },
      { status: 500 }
    );
  }
}

function renderEmailTemplate({
  title,
  subtitle,
  sectionLabel,
  nombre,
  email,
  mensaje,
  extraFields,
  isBusiness,
  t,
}: {
  title: string;
  subtitle: string;
  sectionLabel: string;
  nombre: string;
  email: string;
  mensaje: string;
  extraFields: [string, any][];
  isBusiness: boolean;
  t: any;
}) {
  // Configuración de paletas de color con fondo MORADO, textos BLANCOS y detalles NARANJA
  // Negocio (isBusiness: true)  -> Tema Morado Ultra Profundo
  // Cliente (isBusiness: false) -> Tema Morado Rico con contraste
  const theme = isBusiness
    ? {
        bodyBg: "#1e0a3c",          // Fondo general morado muy oscuro
        containerBg: "#2d1455",     // Contenedor principal morado oscuro
        containerBorder: "#45227c", // Borde morado sutil
        headerBg: "#1e0a3c",        // Cabecera súper oscura
        textColor: "#ffffff",       // Blanco absoluto
        textMuted: "#d8b4fe",       // Morado claro para textos secundarios
        cardBg: "#220f44",          // Tarjeta de datos interna
        cardBorder: "#45227c",      // Borde tarjetas
        labelColor: "#f97316",      // Naranja para etiquetas (Accent)
        accentColor: "#f97316",     // Naranja destacado
        msgBg: "#220f44",
        footerBg: "#1e0a3c",
        footerLink: "#ffffff",
        btnBg: "#f97316",           // Naranja para apariencia de botones
        btnHover: "#ea580c"
      }
    : {
        bodyBg: "#2d1455",          // Fondo morado estándar
        containerBg: "#3c1e70",     // Blanco puro -> Reemplazado por Morado brillante
        containerBorder: "#5b2e9e", // Borde morado intermedio
        headerBg: "#2d1455",
        textColor: "#ffffff",       // Texto principal blanco
        textMuted: "#e9d5ff",       // Texto secundario morado claro
        cardBg: "#472485",          // Fondo tarjeta interno
        cardBorder: "#5b2e9e",      // Borde
        labelColor: "#f97316",      // Naranja
        accentColor: "#f97316",     // Naranja enfático
        msgBg: "#472485",
        footerBg: "#2d1455",
        footerLink: "#ffffff",
        btnBg: "#f97316",           // Botón Naranja
        btnHover: "#ea580c"
      };

  const currentYear = new Date().getFullYear();

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
          background-color: ${theme.bodyBg}; 
          color: ${theme.textColor}; 
          margin: 0; 
          padding: 0; 
          -webkit-font-smoothing: antialiased; 
        }
        .wrapper { max-width: 600px; margin: 40px auto; padding: 20px; }
        .container { 
          background-color: ${theme.containerBg}; 
          border: 1px solid ${theme.containerBorder}; 
          border-radius: 24px; 
          overflow: hidden; 
          box-shadow: ${isBusiness ? '0 25px 50px -12px rgba(0,0,0,0.5)' : '0 20px 40px -10px rgba(0,0,0,0.3)'}; 
        }
        .header { 
          padding: 36px 24px 24px 24px; 
          text-align: center; 
          border-bottom: 1px solid ${theme.containerBorder}; 
          background-color: ${theme.headerBg}; 
        }
        .logo { 
          height: 36px; 
          width: auto; 
          object-fit: contain; 
          filter: brightness(0) invert(1); /* Fuerza a que el logo se vea blanco sobre el morado */
        }
        .content { padding: 36px 36px; }
        .title { font-size: 24px; font-weight: 800; color: ${theme.textColor}; margin: 0 0 8px 0; letter-spacing: -0.02em; }
        .subtitle { font-size: 14px; color: ${theme.textMuted}; margin: 0 0 28px 0; line-height: 1.6; }
        .section-label { 
          font-size: 11px; 
          font-weight: 800; 
          text-transform: uppercase; 
          letter-spacing: 0.15em; 
          color: ${theme.labelColor}; 
          margin-bottom: 12px; 
        }
        .card { 
          background-color: ${theme.cardBg}; 
          border-radius: 18px; 
          border: 1px solid ${theme.cardBorder}; 
          padding: 22px; 
          margin-bottom: 28px; 
        }
        .field { 
          margin-bottom: 16px; 
          border-bottom: 1px solid ${theme.cardBorder}; 
          padding-bottom: 12px; 
        }
        .field:last-child { margin-bottom: 0; border-bottom: none; padding-bottom: 0; }
        .label { 
          font-size: 10px; 
          font-weight: 700; 
          text-transform: uppercase; 
          color: ${theme.labelColor}; 
          letter-spacing: 0.1em; 
          margin-bottom: 4px; 
        }
        .value { font-size: 14px; color: ${theme.textColor}; font-weight: 600; }
        .msg-box { 
          font-size: 14px; 
          color: ${theme.textColor}; 
          line-height: 1.6; 
          white-space: pre-wrap; 
          background-color: ${theme.msgBg}; 
          padding: 20px; 
          border-radius: 16px; 
          border: 1px solid ${theme.cardBorder}; 
        }
        .footer { 
          text-align: center; 
          padding: 32px 28px; 
          font-size: 12px; 
          color: ${theme.textMuted}; 
          border-top: 1px solid ${theme.cardBorder}; 
          background-color: ${theme.footerBg}; 
        }
        /* Estilos de botones naranjas para los enlaces (como el de la marca en el footer) */
        .btn-orange { 
          display: inline-block;
          background-color: ${theme.btnBg}; 
          color: ${theme.footerLink} !important; 
          text-decoration: none; 
          font-weight: 800; 
          padding: 10px 24px;
          border-radius: 999px;
          margin-top: 16px;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 14px 0 rgba(249, 115, 22, 0.39);
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          
          <!-- Header Logo -->
          <div class="header">
            <img src="${BRAND_LOGO}" alt="${BRAND_NAME}" class="logo" />
          </div>

          <!-- Body Content -->
          <div class="content">
            <h1 class="title">${title}</h1>
            <p class="subtitle">${subtitle}</p>

            <div class="section-label">${sectionLabel}</div>
            
            <div class="card">
              <div class="field">
                <div class="label">${t("fields.name")}</div>
                <div class="value">${nombre}</div>
              </div>
              <div class="field">
                <div class="label">${t("fields.email")}</div>
                <div class="value" style="color: ${theme.accentColor}; font-weight: 800;">${email}</div>
              </div>
              
              <!-- Render Dinámico de Cualquier Campo Adicional (Telefono, Presupuesto, etc.) -->
              ${extraFields.map(([key, value]) => `
                <div class="field">
                  <div class="label">${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
                  <div class="value">${value}</div>
                </div>
              `).join('')}
            </div>

            <div class="section-label">${t("fields.message")}</div>
            <div class="msg-box">${mensaje}</div>

            ${!isBusiness ? `
              <p style="font-size: 13px; color: ${theme.textMuted}; margin-top: 28px; line-height: 1.6; font-style: italic;">
                ${t("client.automatedNotice")}
              </p>
            ` : ''}
          </div>

          <!-- Footer Legal -->
          <div class="footer">
            ${t("footer.specialty")}<br/>
            ${t("footer.copyright", { year: currentYear, brandName: BRAND_NAME })
              .replace(BRAND_NAME, `<br/><a href="https://${BRAND_URL}" class="btn-orange">Visitar ${BRAND_NAME}</a>`)}
          </div>

        </div>
      </div>
    </body>
    </html>
  `;
}