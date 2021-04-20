import { mode } from '@chakra-ui/theme-tools'

export const components = {
  Button: {
    variants: {
      reversed: props => ({
        borderWidth: 1,
        borderColor: mode('primary.500', 'light.500')(props),
        color: mode('primary.500', 'light.500')(props),
        _hover: {
          color: mode('primary.600', 'light.600')(props),
          bg: mode('primary.50', 'whiteAlpha.200')(props),
        },
      }),
      flat: props => ({
        bg: mode('primary.500', 'light.500')(props),
        color: mode('white', 'dark.500')(props),
        _hover: { bg: mode('primary.600', 'light.700')(props) },
      }),
    },
  },
}
