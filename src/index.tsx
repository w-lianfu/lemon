import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppRoot from './container/app-root';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(
    <StrictMode>
      <AppRoot />
    </StrictMode>,
  );
}
