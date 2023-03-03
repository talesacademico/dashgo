import { Button as ChakraButton, Icon,
  ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps{
  label: string,
}

export function Button({label, ...rest}: ButtonProps){
  <ChakraButton  {...rest}> {label} </ChakraButton>
}