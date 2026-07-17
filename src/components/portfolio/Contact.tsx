import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, MapPin, Github, Linkedin, Code2, Send, Copy, Check } from "lucide-react";
import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_rs9y4oo";
const EMAILJS_TEMPLATE_ID = "template_z7r0txs";
const EMAILJS_PUBLIC_KEY = "3fkYf63gVTHQlS_FL";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("yashgaikwad5516@gmail.com");
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — email it directly instead.");
    }
  };

  const [loading, setLoading] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Failed to send. Please try again or email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" index="08" eyebrow="Contact" title="Let's Build Together" subtitle="Have an opportunity, project, or just want to say hi? Drop a message.">
      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-4"
        >
          <a href="mailto:yashgaikwad5516@gmail.com" className="glass rounded-2xl p-5 flex gap-4 items-center hover:shadow-glow transition-all group">
            <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center shrink-0">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
              <div className="text-sm font-medium truncate">yashgaikwad5516@gmail.com</div>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                copyEmail();
              }}
              aria-label="Copy email address"
              className="shrink-0 w-9 h-9 grid place-items-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors sm:opacity-0 sm:group-hover:opacity-100 sm:focus:opacity-100"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </a>
          <div className="glass rounded-2xl p-5 flex gap-4 items-center">
            <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center shrink-0">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Location</div>
              <div className="text-sm font-medium truncate">Kolhapur, India</div>
            </div>
          </div>
          <div className="glass rounded-2xl p-5">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Find me on</div>
            <div className="flex gap-2">
              {[
                { icon: Github, href: "https://github.com/Yash-kitcoek" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/yash-gaikwad-76412231a/" },
                { icon: Code2, href: "https://leetcode.com/u/Yash__12345/" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className="w-11 h-11 grid place-items-center rounded-xl bg-white/5 border border-white/10 hover:bg-gradient-primary hover:border-transparent transition-all">
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={submit}
          className="lg:col-span-3 glass rounded-3xl p-7 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider">Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
                maxLength={100}
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider">Email</label>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="you@example.com"
                maxLength={255}
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell me about your project..."
              maxLength={1000}
            />
          </div>
          <button type="submit" disabled={loading} className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:shadow-glow transition-all disabled:opacity-60 disabled:cursor-not-allowed">
            {loading ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
