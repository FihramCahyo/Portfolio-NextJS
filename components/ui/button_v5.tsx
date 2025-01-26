import { cn } from '@/lib/utils';
import {
  Button,
  type ButtonProps as BaseButtonProps,
} from '@/components/ui/button';
import { TiArrowDownThick } from 'react-icons/ti';

type ButtonProps = {
  children?: React.ReactNode;
} & BaseButtonProps;

//======================================
export const Button_v5 = ({
  children,
  Icon = <TiArrowDownThick  size="24" />,
  ...rest
}: ButtonProps & { Icon?: React.ReactNode }) => {
  return (
    <Button
      {...rest}
      className={cn(
        'relative overflow-hidden shadow group',
        // light mode
        ' text-white bg-[#F96E2A]',
        // dark mode
        'dark:text-zinc-100 dark:bg-zinc-950',
        rest.className,
      )}
    >
      <span className="absolute inset-0 text-xl rounded-sm flex items-center justify-center size-full duration-700 ease-&lsqb;cubic-bezier(0.50,0.20,0,1)&rsqb; -translate-x-full group-hover:translate-x-0 bg-white dark:bg-zinc-100 text-[#F96E2A] dark:text-zinc-800">
        {Icon}
      </span>
      <span className="absolute flex items-center justify-center w-full h-full transition-all duration-500 ease-out transform group-hover:translate-x-full  ">
        {children}
      </span>
      <span className="relative invisible">{children}</span>
    </Button>
  );
};
