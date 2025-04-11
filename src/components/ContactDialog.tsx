
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "./ContactForm";
import { ReactNode, useState } from "react";

interface ContactDialogProps {
  children: ReactNode;
  title?: string;
  description?: string;
  buttonText?: string;
  includeMessage?: boolean;
  includeService?: boolean;
  service?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const ContactDialog = ({ 
  children, 
  title, 
  description, 
  buttonText,
  includeMessage = false,
  includeService = false,
  service = "",
  className,
  variant = "default",
  size = "default"
}: ContactDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {typeof children === 'string' ? (
          <Button 
            variant={variant} 
            size={size}
            className={className}
          >
            {children}
          </Button>
        ) : (
          <div className="inline-block">{children}</div>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title || t("contactDialog.title")}</DialogTitle>
          <DialogDescription>
            {description || t("contactDialog.description")}
          </DialogDescription>
        </DialogHeader>
        <ContactForm 
          onSuccess={() => setIsOpen(false)} 
          includeMessage={includeMessage} 
          includeService={includeService}
          service={service}
          buttonText={buttonText}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
