import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

interface RegistroPersonaProps {
    onRegister: (persona: Persona) => void;
  }
  
  interface Persona {
    cedula: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
  }
  
  export default function RegistroPersona({ onRegister }: RegistroPersonaProps) {
    const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const handleRegister = () => {
    // Aquí puedes guardar la persona en una base de datos o en una lista de personas.
    // Luego, llama a la función onRegister para notificar que la persona ha sido registrada.
    onRegister({ cedula, nombre, apellido, fechaNacimiento });
  };

  return (
    <View>
      <TextInput
        placeholder="Cédula"
        value={cedula}
        onChangeText={setCedula}
      />
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
      />
      <TextInput
        placeholder="Fecha de Nacimiento"
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
}
