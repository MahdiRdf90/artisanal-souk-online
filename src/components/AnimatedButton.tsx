
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  glowEffect?: boolean;
}

const AnimatedButton = ({ 
  children, 
  variant = 'default', 
  size = 'default',
  className,
  onClick,
  disabled = false,
  glowEffect = false
}: AnimatedButtonProps) => {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
        'before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]',
        glowEffect && 'neon-button',
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </Button>
  );
};

export default AnimatedButton;
