import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getTranslations } from "next-intl/server";
import { formatPrice } from "@/lib/format-price";

const resend = new Resend(process.env.RESEND_API_KEY);

const SUPPORT_EMAIL = "info@curalia.com.mx";
const BRAND_NAME = "Mundra";
const BRAND_URL = "https://mundra.com.mx/es";
const BRAND_LOGO = "https://mundra.com.mx/logo-title.png";

// 1. Interfaces para tipado estricto
interface Customer {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  direccion: string;
  direccion2?: string;
  ciudad: string;
  estado: string;
  cp: string;
  pais: string;
  empresa?: string;
}

interface OrderItem {
  product: {
    title: string;
    price: number | string;
  };
  people?: number;
}

interface CheckoutBody {
  locale: string;
  orderId: string;
  amount: number;
  customer: Customer;
  items: OrderItem[];
  metadata?: Record<string, any>;
}

interface TemplateProps {
  title: string;
  subtitle: string;
  orderId: string;
  amount: number;
  locale: string;
  customer: Customer;
  items: OrderItem[];
  metadata?: Record<string, any>;
  isBusiness: boolean;
  t: any; // Instancia de next-intl
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CheckoutBody;
    const { locale, orderId, amount, customer, items, metadata } = body;

    // Inicializamos traducciones dinámicas con el locale recibido
    const t = await getTranslations({ locale, namespace: "Emails.checkout" });

    if (!orderId || !amount || !customer || !items || items.length === 0) {
      return NextResponse.json(
        { error: t("errorMissingFields") },
        { status: 400 }
      );
    }

    const formattedAmount = amount.toFixed(2);

    // 1. EMAIL PARA EL CLIENTE (TICKET / RECIBO DE COMPRA - FONDO BLANCO / ACENTOS NARANJA)
    const clientReceiptHtml = renderReceiptTemplate({
      title: t("client.title"),
      subtitle: t("client.subtitle", { orderId }),
      orderId,
      amount,
      customer,
      items,
      metadata,
      isBusiness: false,
      t,
      locale
    });

    await resend.emails.send({
      from: `${BRAND_NAME} <${SUPPORT_EMAIL}>`,
      to: customer.email,
      subject: t("client.subject", { orderId, brandName: BRAND_NAME }),
      html: clientReceiptHtml,
    });

    // 2. EMAIL PARA EL NEGOCIO (NOTIFICACIÓN DE VENTA - FONDO NEGRO / ACENTOS NARANJA)
    const businessNotificationHtml = renderReceiptTemplate({
      title: t("business.title"),
      subtitle: t("business.subtitle", { amount: formattedAmount }),
      orderId,
      amount,
      customer,
      items,
      metadata,
      isBusiness: true,
      t,
      locale
    });

    await resend.emails.send({
      from: `${BRAND_NAME} Sales <${SUPPORT_EMAIL}>`,
      to: SUPPORT_EMAIL,
      subject: t("business.subject", { orderId, amount: formattedAmount }),
      html: businessNotificationHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("[CHECKOUT_EMAIL_ERROR]:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Función helper para generar el HTML del ticket
function renderReceiptTemplate({
  title,
  subtitle,
  orderId,
  amount,
  customer,
  items,
  metadata,
  isBusiness,
  locale,
  t,
}: TemplateProps): string {
  // Configuración de paletas de color
  const theme = isBusiness
    ? {
      // Modo Oscuro (Business/Admin) - Contraste profundo
      bodyBg: "#09090b",
      containerBg: "#18181b",
      containerBorder: "#3f3f46", // Ligeramente más claro para separar
      headerBg: "#18181b",
      textColor: "#ffffff",
      textMuted: "#a1a1aa",
      cardBg: "#09090b",
      cardBorder: "#27272a",
      dashedBorder: "#3f3f46",

      // Morado para etiquetas y énfasis sutil
      labelColor: "#a855f7",
      accentColor: "#f97316", // Naranja para llamadas a la acción

      totalLabelColor: "#ffffff",
      totalAmountColor: "#f97316",

      // Badge mezcla: fondo morado suave, texto naranja vibrante
      badgeBg: "rgba(168, 85, 247, 0.15)",
      badgeText: "#d8b4fe",

      footerBg: "#09090b",
      footerLink: "#a855f7",
    }
    : {
      // Modo Claro (Cliente) - Limpio con acentos orgánicos
      bodyBg: "#f4f4f5",
      containerBg: "#ffffff",
      containerBorder: "#e4e4e7",
      headerBg: "#ffffff",
      textColor: "#09090b",
      textMuted: "#71717a",
      cardBg: "#fcfcfc",
      cardBorder: "#e4e4e7",
      dashedBorder: "#d4d4d8",

      // Morado para secciones descriptivas, Naranja para precios/acciones
      labelColor: "#7e22ce",
      accentColor: "#ea580c",

      totalLabelColor: "#09090b",
      totalAmountColor: "#ea580c",

      // Badge: fondo morado muy claro, texto morado oscuro
      badgeBg: "rgba(168, 85, 247, 0.1)",
      badgeText: "#6b21a8",

      footerBg: "#fafafa",
      footerLink: "#7e22ce",
    };

  const currentYear = new Date().getFullYear();
  const localeFormat = locale === "en" ? "en-US" : "es-MX";
  const formattedDate = new Date().toLocaleDateString(localeFormat, {
    timeZone: "America/Mexico_City"
  });

  return `
    <!DOCTYPE html>
    <html lang="${locale || "es"}">
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
          box-shadow: ${isBusiness ? '0 20px 50px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.05)'}; 
        }
        .header { 
          padding: 36px 24px 24px 24px; 
          text-align: center; 
          border-bottom: 1px solid ${theme.containerBorder}; 
          background-color: ${theme.headerBg}; 
        }
        .logo { 
          height: 32px; 
          width: auto; 
          object-fit: contain; 
          ${isBusiness ? 'filter: brightness(0) invert(1);' : ''} 
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
        
        .info-card {
          background-color: ${theme.cardBg};
          border: 1px solid ${theme.cardBorder};
          border-radius: 18px;
          padding: 20px;
          margin-bottom: 24px;
        }

        .ticket-box { 
          background-color: ${theme.cardBg}; 
          border-radius: 18px; 
          border: 1px solid ${theme.cardBorder}; 
          padding: 22px; 
          margin-bottom: 28px; 
        }
        .ticket-row { 
          display: table; 
          width: 100%; 
          margin-bottom: 12px; 
          padding-bottom: 12px; 
          border-bottom: 1px dashed ${theme.dashedBorder}; 
        }
        .ticket-row:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
        .item-name { display: table-cell; font-size: 14px; color: ${theme.textColor}; font-weight: 500; }
        .item-qty { 
          display: inline-block;
          font-size: 11px; 
          font-weight: 700;
          color: ${theme.badgeText}; 
          background-color: ${theme.badgeBg};
          padding: 2px 8px;
          border-radius: 12px;
          margin-left: 6px; 
        }
        .item-price { display: table-cell; text-align: right; font-size: 14px; color: ${theme.textColor}; font-weight: 600; }
        
        .total-box { 
          margin-top: 16px; 
          padding-top: 16px; 
          border-top: 2px solid ${theme.accentColor}; 
        }
        .total-label { font-size: 14px; font-weight: 800; color: ${theme.totalLabelColor}; text-transform: uppercase; letter-spacing: 0.05em; }
        .total-amount { font-size: 22px; font-weight: 800; color: ${theme.totalAmountColor}; text-align: right; }
        
        .grid { display: table; width: 100%; table-layout: fixed; }
        .col { display: table-cell; width: 50%; vertical-align: top; }
        .info-label { 
          font-size: 10px; 
          font-weight: 700; 
          text-transform: uppercase; 
          color: ${theme.labelColor}; 
          letter-spacing: 0.1em; 
          margin-bottom: 4px; 
        }
        .info-value { font-size: 13px; color: ${theme.textColor}; line-height: 1.5; padding-right: 10px; }
        
        .meta-box { 
          font-size: 13px; 
          color: ${theme.textColor}; 
          background-color: ${theme.cardBg}; 
          padding: 16px 20px; 
          border-radius: 16px; 
          border-left: 4px solid ${theme.accentColor}; 
          border-top: 1px solid ${theme.cardBorder};
          border-right: 1px solid ${theme.cardBorder};
          border-bottom: 1px solid ${theme.cardBorder};
          margin-bottom: 28px; 
        }
        .footer { 
          text-align: center; 
          padding: 28px; 
          font-size: 12px; 
          color: ${theme.textMuted}; 
          border-top: 1px solid ${theme.cardBorder}; 
          background-color: ${theme.footerBg}; 
        }
        .footer a { color: ${theme.footerLink}; text-decoration: none; font-weight: 700; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          
          <div class="header">
            <img src="${BRAND_LOGO}" alt="${BRAND_NAME}" class="logo" />
          </div>

          <div class="content">
            <h1 class="title">${title}</h1>
            <p class="subtitle">${subtitle}</p>

            <div class="info-card">
              <div class="grid">
                <div class="col">
                  <div class="info-label">${t("labels.orderId")}</div>
                  <div class="info-value" style="font-family: monospace; font-size: 14px; font-weight: 700; color: ${theme.accentColor};">${orderId}</div>
                </div>
                <div class="col">
                  <div class="info-label">${t("labels.paymentDate")}</div>
                  <div class="info-value">${formattedDate}</div>
                </div>
              </div>
            </div>

            <div class="section-label">${isBusiness ? t("labels.buyerInfo") : t("labels.billingDetails")}</div>
            <div class="info-card">
              <div class="grid">
                <div class="col">
                  <div class="info-label">${t("labels.customer")}</div>
                  <div class="info-value">
                    <strong>${customer.nombre} ${customer.apellido}</strong><br/>
                    ${customer.email}<br/>
                    ${customer.telefono}
                  </div>
                </div>
                <div class="col">
                  <div class="info-label">${t("labels.address")}</div>
                  <div class="info-value">
                    ${customer.direccion}<br/>
                    ${customer.direccion2 ? customer.direccion2 + '<br/>' : ''}
                    ${customer.ciudad}, ${customer.estado}<br/>
                    CP: ${customer.cp}, ${customer.pais}
                    ${customer.empresa ? `<br/><strong>${t("labels.company")}:</strong> ` + customer.empresa : ''}
                  </div>
                </div>
              </div>
            </div>

            ${metadata && Object.keys(metadata).length > 0 ? `
              <div class="section-label">${t("labels.operationDetails")}</div>
              <div class="meta-box">
                ${metadata.notes || JSON.stringify(metadata)}
              </div>
            ` : ''}

            <div class="section-label">${t("labels.modulesSummary")}</div>
            <div class="ticket-box">
              ${items.map((item) => {
    const itemPrice = Number(item.product.price) || 0;
    const qty = item.people || 1;
    const totalLine = (itemPrice * qty);

    return `
                <div class="ticket-row">
                  <div class="item-name">
                    ${item.product.title}
                    <span class="item-qty">x${qty}</span>
                  </div>
                  <div class="item-price">
                    $${formatPrice(Number(totalLine))} MXN
                  </div>
                </div>
              `}).join('')}
              
              <div class="ticket-row total-box">
                <div class="item-name total-label">${t("labels.totalPaid")}</div>
                <div class="item-price total-amount">$${formatPrice(amount)} MXN</div>
              </div>
            </div>

          </div>p?: numb

          <div class="footer">
            ${t("footer.copyright", { year: currentYear, brandName: BRAND_NAME }).replace(BRAND_NAME, `<a href="${BRAND_URL}">${BRAND_NAME}</a>`)}<br/>
            ${t("footer.specialty")}
          </div>

        </div>
      </div>
    </body>
    </html>
  `;
}