import { useState, useEffect } from 'react';
import mercadopago from 'mercadopago';

const MercadoPagoButton = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    const fetchPreferenceId = async () => {
      const response = await fetch('http://localhost:8000/api/mercadopago/preference');
      const data = await response.json();
      setPreferenceId(data.preference_id);
    };

    fetchPreferenceId();
  }, []);

  useEffect(() => {
    if (preferenceId) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
      script.setAttribute('data-preference-id', preferenceId);
      document.getElementById('mercadopago-button-container').appendChild(script);
    }
  }, [preferenceId]);

  return (
    <div id='mercadopago-button-container'>
      <p>Procesando pago...</p>
    </div>
  );
};

export default MercadoPagoButton;
