import { useState } from 'react';
import './styles.scss'


export function FormCheckout() {

  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('UF');
  const [rua, setRua] = useState('Rua');
  const [city, setCity] = useState('Cidade');
  const [bairro, setBairro] = useState('Bairro');

  async function handleCepChange(event) {
    const cepValue = event.target.value;
    setCep(cepValue);
  
    if (cepValue.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
        const data = await response.json();
        
  
        if (data.erro) {
          setRua('');
          alert('CEP não encontrado');
        } else {
          setRua(data.logradouro);
          setBairro(data.bairro);
          setCity(data.localidade);
          setUf(data.uf);
        }
      } catch (error) {
        console.error(error);
        alert('Erro ao buscar CEP');
      }
    }
  }

  return (
    <form action="" className='form-checkout'>
      <input type="text" id="cep" value={cep} placeholder='CEP' required onChange={handleCepChange} maxLength={8} />
      <br />
      <input type="text" id="rua" value={rua} disabled />
      <br />
      <input type="text" id="num" placeholder='Numero' required/>
      <input type="text" id="complement" placeholder='Complemento'/>
      <br />
      <input type="text" id="bairro" value={bairro} disabled />
      <input type="text" id="city" value={city} disabled />
      <input type="text" id="uf" value={uf} disabled />
    </form>
  )
}
