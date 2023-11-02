import React from 'react';
import { View, Text } from 'react-native';

interface CuestionarioProps {
    persona: Persona; // Especifica el tipo de persona
  }
  
  interface Persona {
    cedula: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    // Otros campos necesarios
  }
  
  export default function Cuestionario({ persona }: CuestionarioProps) {
  return (
    <View>
      <Text>Cédula: {persona.cedula}</Text>
      <Text>Nombre: {persona.nombre}</Text>
      <Text>Apellido: {persona.apellido}</Text>
      <Text>Fecha de Nacimiento: {persona.fechaNacimiento}</Text>
      {/* Aquí puedes agregar el cuestionario */}
    </View>
  );
}
