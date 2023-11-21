
import React, { createContext, useState } from 'react';


export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const updateSenha = (newSenha) => {
    setSenha(newSenha);
  };

  return (
    <LoginContext.Provider value={{ email, senha, updateEmail, updateSenha }}>
      {children}
    </LoginContext.Provider>
  );
};
