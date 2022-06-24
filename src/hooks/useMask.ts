import { RefObject, useCallback, useEffect, useRef } from 'react';

interface MaskProps {
  ref?: RefObject<HTMLInputElement>;
  regex: RegExp;
  replacement: string;
  numbersOnly?: boolean;
}

export function useMask(props: MaskProps): RefObject<HTMLInputElement> {
  const { ref: inputRef, regex, replacement, numbersOnly } = props;
  const ref = inputRef ?? useRef<HTMLInputElement>(null);

  const handleKeyUp = useCallback(() => {
    if (!ref.current) return;
    if (numbersOnly) ref.current.value = ref.current.value.replace(/\D/g, '');
    ref.current.value = ref.current.value.replace(regex, replacement);
  }, []);

  useEffect(() => {
    ref.current?.addEventListener('keyup', handleKeyUp);
    return () => {
      ref.current?.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return ref;
}
