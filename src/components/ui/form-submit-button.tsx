
import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface FormSubmitButtonProps {
  isSubmitting: boolean;
  loadingText: string;
  buttonText: string;
  className?: string;
}

const FormSubmitButton = ({ 
  isSubmitting, 
  loadingText, 
  buttonText,
  className = "w-full bg-whatsapp hover:bg-whatsapp-dark"
}: FormSubmitButtonProps) => {
  return (
    <Button 
      type="submit" 
      className={className} 
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <span className="flex items-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </span>
      ) : (
        buttonText
      )}
    </Button>
  );
};

export default FormSubmitButton;
