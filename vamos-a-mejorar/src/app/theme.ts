import { definePreset, palette } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const indigo = palette('{indigo}') as {
  950?: string;
  900?: string;
  800?: string;
  700?: string;
  600?: string;
  500?: string;
  400?: string;
  300?: string;
  200?: string;
  100?: string;
  50?: string;
};

export const AuraIndigo = definePreset(Aura, {
  semantic: {
    primary: indigo,
    colorScheme: {
      light: {
        primary: {
          color: indigo[800]!,
          contrastColor: '#fff',
          hoverColor: indigo[700]!,
          activeColor: indigo[600]!
        },
        highlight: {
          background: indigo[100]!,
          focusBackground: indigo[200]!,
          color: indigo[800]!,
          focusColor: indigo[700]!
        }
      },
      dark: {
        primary: {
          color: indigo[400]!,
          contrastColor: '#fff',
          hoverColor: indigo[300]!,
          activeColor: indigo[200]!
        },
        highlight: {
          background: 'color-mix(in srgb, ' + indigo[400] + ', transparent 84%)',
          focusBackground: 'color-mix(in srgb, ' + indigo[400] + ', transparent 76%)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  }
});
