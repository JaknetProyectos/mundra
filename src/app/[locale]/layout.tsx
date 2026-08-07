import LangSwitcher from '@/components/LangSwitcher';
import { SiteFooter } from '@/components/site-footer';
import {Header} from '@/components/site-sidebar';
import { LocaleProvider } from '@/context/LangContext';
import { routing } from '@/i18n/routing';
import { CartProvider } from '@/hooks/use-cart';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import React from 'react';
import { Toaster } from 'sonner';
import ClientBody from './ClientBody';



export default async function LocaleLayout({ children, params }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Validación inicial de locale
    const { locale } = await params;

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            <ClientBody>
                <LocaleProvider>
                    <CartProvider>
                        <Header />
                        <div className="min-h-screen">
                            <main className="min-h-[70vh]">{children}</main>
                            <SiteFooter />
                        </div>
                        <LangSwitcher />
                    </CartProvider>
                </LocaleProvider>
            </ClientBody>
        </NextIntlClientProvider>
    );
}