// your-typings.d.ts
import '@emotion/react';

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: SerializedStyles;
  }
}
