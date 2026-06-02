export default function FAQItem({ faq }) {
    return (
        <details className="group bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:bg-white/5 transition-colors">
            <summary className="flex items-center justify-between p-6 text-white font-medium text-base md:text-lg [&::-webkit-details-marker]:hidden">
                <span>{faq.name}</span>
                <span className="text-amber-500 transition-transform duration-300 group-open:rotate-180">
                    ▼
                </span>
            </summary>
            <div className="px-6 pb-6 text-slate-400 text-sm md:text-base font-light leading-relaxed border-t border-white/5 pt-4">
                {faq.acceptedAnswer.text}
            </div>
        </details>
    );
}
