import { weddingConfig } from "@/config/wedding";
import { Copy, Check, MapPin, ScanLine } from "lucide-react";
import { useState } from "react";
import momoQr from "@/assets/URLQRCode.png";
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Đã sao chép" : "Sao chép"}
    </button>
  );
}

export default function GiftSection() {
  const { gift } = weddingConfig;

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="scroll-reveal mb-10 text-center">
          <p className="section-title tracking-[0.3em]">MỪNG CƯỚI</p>
          <p className="mt-3 font-body text-sm text-muted-foreground">
            Gửi quà mừng đến cô dâu và chú rể qua các hình thức bên dưới
          </p>
        </div>

        <div className="scroll-reveal grid gap-6 md:grid-cols-2">
          {/* Bank */}
          <div className="rounded-2xl border border-primary/10 bg-card p-6 text-center shadow-sm">
            <p className="mb-4 font-serif-display text-sm font-bold uppercase tracking-[0.25em] text-foreground">
                  {gift.bankName}
            </p>

            <div className="mx-auto mb-4 flex w-fit items-center justify-center rounded-2xl bg-white p-3 shadow-sm ring-1 ring-primary/10">
              <img
                src={momoQr}
                alt="Mã QR MoMo"
                className="h-44 w-44 rounded-lg object-cover md:h-52 md:w-52"
              />
            </div>

            <div className="mb-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <ScanLine size={15} />
              <span>Quét mã để mừng cưới</span>
            </div>

            <p className="mb-1 text-sm text-muted-foreground">Chủ tài khoản</p>
            <p className="mb-5 text-sm uppercase tracking-wide text-foreground">
              {gift.accountHolder}
            </p>

            <a
              href={momoQr}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90"
            >
              Xem QR lớn
            </a>
          </div>

          {/* MoMo QR */}
          <div className="rounded-2xl border border-primary/10 bg-card p-6 text-center shadow-sm">
            <p className="mb-4 font-serif-display text-sm font-bold uppercase tracking-[0.25em] text-foreground">
                  {gift.bankName}
            </p>

            <div className="mx-auto mb-4 flex w-fit items-center justify-center rounded-2xl bg-white p-3 shadow-sm ring-1 ring-primary/10">
              <img
                src={momoQr}
                alt="Mã QR MoMo"
                className="h-44 w-44 rounded-lg object-cover md:h-52 md:w-52"
              />
            </div>

            <div className="mb-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <ScanLine size={15} />
              <span>Quét mã để mừng cưới</span>
            </div>

            <p className="mb-1 text-sm text-muted-foreground">Chủ tài khoản</p>
            <p className="mb-5 text-sm uppercase tracking-wide text-foreground">
              {gift.accountHolder1}
            </p>

            <a
              href={momoQr}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90"
            >
              Xem QR lớn
            </a>
          </div>
        </div>

        {/* Shipping address */}
        <div className="scroll-reveal mt-10 text-center">
          <p className="mb-4 font-serif-display text-sm font-semibold uppercase tracking-[0.25em] text-foreground">
            Địa chỉ gửi quà
          </p>

          <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow-sm">
            <MapPin size={14} />
            <span>{gift.shippingAddress}</span>
          </div>
        </div>
      </div>
    </section>
  );
}