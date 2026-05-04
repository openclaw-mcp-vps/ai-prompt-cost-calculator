export default function Home() {
  const faqs = [
    {
      q: "Which LLM providers are supported?",
      a: "We support OpenAI (GPT-3.5, GPT-4, GPT-4o), Anthropic (Claude 3 Haiku, Sonnet, Opus), Google (Gemini 1.5 Pro, Flash), and Mistral models with up-to-date pricing."
    },
    {
      q: "How accurate are the token counts?",
      a: "We use the same tokenization libraries (tiktoken for OpenAI, official tokenizers for others) that the providers themselves use, so counts are exact."
    },
    {
      q: "What do I get with the Pro plan?",
      a: "Pro unlocks batch prompt analysis, CSV import, API access for CI/CD pipelines, cost history dashboard, and team sharing features."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Cost Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate exact costs<br />
          <span className="text-[#58a6ff]">before running prompts</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Paste your prompt, pick your model, and instantly see token count and dollar cost — before you spend a cent on the API.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Free Trial — $9/mo
          </a>
          <a
            href="#pricing"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            See Pricing
          </a>
        </div>
        <p className="text-[#8b949e] text-sm mt-4">No credit card required for free tier · Cancel anytime</p>
      </section>

      {/* Demo Preview */}
      <section className="mb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            <span className="ml-2 text-[#8b949e] text-xs">prompt-cost-calculator.app</span>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-[#8b949e] text-xs mb-1 uppercase tracking-wide">Your Prompt</label>
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 text-[#c9d1d9] text-sm font-mono">
                Summarize the following article in 3 bullet points and suggest 5 follow-up questions...
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[#8b949e] text-xs mb-1 uppercase tracking-wide">Model</label>
                <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 text-[#58a6ff] text-sm">GPT-4o</div>
              </div>
              <div>
                <label className="block text-[#8b949e] text-xs mb-1 uppercase tracking-wide">Tokens</label>
                <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-3 text-[#3fb950] text-sm font-mono">247 tokens</div>
              </div>
            </div>
            <div className="bg-[#0d1117] border border-[#58a6ff] rounded-lg p-4 flex justify-between items-center">
              <span className="text-[#8b949e] text-sm">Estimated Cost</span>
              <span className="text-[#58a6ff] text-2xl font-bold">$0.00370</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple, transparent pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-1">Pro</h3>
            <div className="text-4xl font-bold text-[#58a6ff] mb-1">$9<span className="text-lg text-[#8b949e] font-normal">/mo</span></div>
            <p className="text-[#8b949e] text-sm">Everything you need to control LLM costs</p>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited prompt analysis",
              "All LLM providers & models",
              "Batch CSV import",
              "REST API access",
              "Cost history & analytics",
              "Team sharing (up to 5 seats)"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#3fb950] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started — $9/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>© {new Date().getFullYear()} AI Prompt Cost Calculator · Built for AI engineers</p>
      </footer>
    </main>
  );
}
