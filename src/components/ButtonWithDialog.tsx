
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import ContactDialog from './ContactDialog';

interface ButtonWithDialogProps {
  children: React.ReactNode;
  className?: string;
  formType?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const ButtonWithDialog: React.FC<ButtonWithDialogProps> = ({ 
  children, 
  className,
  formType = "Всплывающая форма",
  variant = "default",
  size = "default"
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(true);
    console.log(`Button clicked: ${formType}`);
  };

  return (
    <>
      <Button 
        className={className} 
        onClick={handleClick}
        variant={variant}
        size={size}
      >
        {children}
      </Button>
      <ContactDialog 
        open={open} 
        onOpenChange={setOpen} 
        formType={formType} 
      />
    </>
  );
};

export default ButtonWithDialog;
