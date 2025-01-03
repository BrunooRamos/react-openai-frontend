import { FormEvent, useState } from 'react';


interface Props {
  onSendMessage: (message: string)=>void;
  placeholder?: string;
  disableCorrections?: boolean;
}


export const TextMessageBox = ({ onSendMessage, placeholder, disableCorrections = false }: Props) => {

  const [message, setMessage] = useState('')



  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if ( message.trim().length === 0 ) return;

    onSendMessage( message );
    setMessage('');
  }

  return (
    <form
      onSubmit={ handleSendMessage }
      className="flex flex-row items-center h-16 bg-white w-full px-2"
    >

      <div className="flex-grow">
        <div className="relative w-full">

          <input 
            type="text" 
            autoFocus
            name="message"
            className="flex w-full border border-white text-zinc-800 focus:outline-none focus:border-white pl-2 h-10"
            placeholder={ placeholder }
            autoComplete={ disableCorrections ? 'on': 'off' }
            autoCorrect={ disableCorrections ? 'on': 'off' }
            spellCheck={ disableCorrections ? 'true': 'false' }
            value={ message }
            onChange={ (e) => setMessage( e.target.value ) }
          />

        </div>
      </div>


      <div className="ml-4">
          <button className="bg-zinc-800 text-white py-2 px-4 rounded-xl hover:bg-zinc-900 transition-all duration-200 ease-in-out">
            <span className="mr-2">Enviar</span>
            <i className="fa-regular fa-paper-plane"></i>
          </button>
      </div>




    </form>
  )
}