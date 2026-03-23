import { useState } from "react";
import { Send } from "lucide-react";

export default function RsvpSection() {
  const [form, setForm] = useState({ name: "", guests: "1", attending: "yes", wishes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="wedding-card">
            <p className="font-script text-gold text-3xl mb-3">Cảm ơn bạn!</p>
            <p className="font-body text-muted-foreground text-sm">
              Chúng tôi đã nhận được phản hồi của bạn. Hẹn gặp bạn tại lễ cưới!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-secondary/50 relative overflow-hidden">
      <div className="max-w-lg mx-auto px-6 relative z-10">
        <div className="scroll-reveal text-center mb-10">
          <p className="section-title tracking-[0.3em]">Reservation</p>
          <p className="font-body text-muted-foreground text-sm mt-3">
            Xin vui lòng xác nhận sự tham dự của bạn
          </p>
        </div>

        <form onSubmit={handleSubmit} className="scroll-reveal space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-body text-foreground text-xs uppercase tracking-wider mb-1 block">
                Tên của bạn
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Nhập tên..."
              />
            </div>
            <div>
              <label className="font-body text-foreground text-xs uppercase tracking-wider mb-1 block">
                Số người tham dự
              </label>
              <select
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="font-body text-foreground text-xs uppercase tracking-wider mb-1 block">
              Bạn có tham dự không?
            </label>
            <select
              value={form.attending}
              onChange={(e) => setForm({ ...form, attending: e.target.value })}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="yes">Tôi chắc chắn sẽ đến</option>
              <option value="maybe">Có thể tôi sẽ đến</option>
              <option value="no">Rất tiếc tôi không thể đến</option>
            </select>
          </div>

          <div>
            <label className="font-body text-foreground text-xs uppercase tracking-wider mb-1 block">
              Lời chúc
            </label>
            <textarea
              value={form.wishes}
              onChange={(e) => setForm({ ...form, wishes: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              placeholder="Gửi lời chúc tới cô dâu chú rể..."
            />
          </div>

          <button type="submit" className="btn-wedding w-full justify-center">
            <Send size={14} />
            Gửi RSVP
          </button>
        </form>
      </div>
    </section>
  );
}
