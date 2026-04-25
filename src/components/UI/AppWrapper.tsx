
import I18nProvider from '../UI/LanguageProvider';
import HeaderComponent from '../UI/Header';
import FooterComponent from '../UI/Footer';
import FloatingWhatsApp from '../UI/FloatingWhatsApp';

export default function AppWrapper({ children }:any) {
  return (
    <I18nProvider>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
      <FloatingWhatsApp />
    </I18nProvider>
  );
}