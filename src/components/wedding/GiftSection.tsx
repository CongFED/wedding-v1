import { weddingConfig } from "@/config/wedding";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className="btn-wedding text-xs py-2 px-4">
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? "Đã copy" : "Copy"}
    </button>
  );
}

export default function GiftSection() {
  const { gift } = weddingConfig;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="scroll-reveal text-center mb-10">
          <p className="section-title tracking-[0.3em]">Send Your Gift</p>
          <p className="font-body text-muted-foreground text-sm mt-3">
            Gửi quà mừng đến cô dâu và chú rể qua các hình thức bên dưới
          </p>
        </div>

        <div className="scroll-reveal grid md:grid-cols-2 gap-6">
          {/* Bank */}
          <div className="wedding-card text-center">
            <p className="font-serif-display text-foreground font-bold uppercase tracking-widest text-sm mb-4">
              {gift.bankName}
            </p>
            <p className="font-body text-muted-foreground text-sm mb-1">Số tài khoản</p>
            <p className="font-serif-display text-foreground text-lg font-semibold mb-1">
              {gift.accountNumber}
            </p>
            <p className="font-body text-muted-foreground text-xs mb-4">{gift.accountHolder}</p>
            <CopyButton text={gift.accountNumber} />
          </div>

          {/* Momo */}
          <div className="wedding-card text-center">
            <p className="font-serif-display text-foreground font-bold uppercase tracking-widest text-sm mb-4">
              MoMo
            </p>
            <p className="font-body text-muted-foreground text-sm mb-1">Số điện thoại</p>
            <p className="font-serif-display text-foreground text-lg font-semibold mb-1">
              {gift.momoPhone}
            </p>
            <p className="font-body text-muted-foreground text-xs mb-4">{gift.accountHolder}</p>
            <CopyButton text={gift.momoPhone} />
          </div>
        </div>

        {/* Shipping address */}
        <div className="scroll-reveal mt-8 text-center">
          <p className="font-serif-display text-foreground font-semibold uppercase tracking-widest text-sm mb-4">
            Địa chỉ gửi quà
          </p>
          <a href="#" className="btn-wedding inline-flex text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            123 Đường Hạnh Phúc, Quận 1, TP.HCM
          </a>
        </div>
      </div>
    </section>
  );
}
