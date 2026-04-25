import { I18nextProvider } from 'react-i18next';
import i18n from '../../languages/index';
import HeaderComponent from './Header';

export default function HeaderWithI18n() {
  return (
    <I18nextProvider i18n={i18n}>
      <HeaderComponent />
    </I18nextProvider>
  );
}
