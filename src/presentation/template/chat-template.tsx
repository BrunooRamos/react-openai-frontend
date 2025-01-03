import { useEffect, useRef, useState } from 'react';
import { GptMessage, MyMessage, TypingLoader, TextMessageBox } from '../components';

interface Message {
  text: string;
  isGpt: boolean;
}

export const ChatTemplate = () => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  // Add useEffect to handle auto-scrolling
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]); // Scroll when messages or loading state changes

  const handlePost = async(text: string) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { text: text, isGpt: false }]);
    setIsLoading(false);
  }

  return (
    <div className="chat-container">
      <div ref={messagesContainerRef} className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GptMessage text="Hola, puedes escribir tu texto en español, y te ayudo con las correcciones" />

          {messages.map((message, index) => (
            message.isGpt
              ? <GptMessage key={index} text="Esto es de OpenAI" />
              : <MyMessage key={index} text={message.text} />
          ))}

          {isLoading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>

      <TextMessageBox 
        onSendMessage={handlePost}
        placeholder='Escribe aquí lo que deseas'
        disableCorrections
      />
    </div>
  );
};
