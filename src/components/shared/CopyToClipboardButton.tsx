import React, { useState } from "react";
import { Button } from "../ui/button";
import { CopyIcon } from "lucide-react";

import { toast } from "sonner";

interface Props {
  textToCopy: string;
  buttonText: string;
}

const CopyToClipboardButton: React.FC<Props> = ({ textToCopy, buttonText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset the copied state after 2 seconds
    });
  };

  return (
    <Button
      className="bg-[#0AAC6C] hover:bg-[#32b883] w-full flex justify-center items-center gap-2"
      type="button"
      onClick={() => {
        handleCopy;
        toast("Link Copied", {
          description: "Paste link into email, Whatsapp, SMS, or social media",
          position: "top-right",
        });
      }}
    >
      {copied ? "Copied!" : buttonText} <CopyIcon />
    </Button>
  );
};

export default CopyToClipboardButton;
