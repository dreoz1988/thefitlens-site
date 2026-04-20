export const metadata = {
  title: "Terms of Service — The Fit Lens",
  description: "Terms of service for The Fit Lens mobile application.",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 py-16 px-6">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12 border-b border-neutral-200 pb-8">
          <p className="text-sm text-neutral-500 uppercase tracking-widest mb-2">The Fit Lens</p>
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Terms of Service</h1>
          <p className="text-sm text-neutral-500">Effective date: April 20, 2026</p>
        </header>
        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Acceptance</h2>
            <p>By accessing or using The Fit Lens (&quot;the App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree with any part of these Terms, you may not use the App.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Not Medical Advice</h2>
            <p>The Fit Lens is a fitness and nutrition tracking tool. Content provided — including AI-generated coaching, calorie and macro targets, weekly summaries, and training suggestions — is for informational and educational purposes only and is not intended as medical advice, diagnosis, or treatment.</p>
            <p className="mt-3">Always consult a qualified healthcare provider before starting any diet, exercise program, or making changes to an existing program, especially if you have any medical condition, are pregnant, or are taking medication.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You must be at least 13 years old to use The Fit Lens. You agree to provide accurate information and to update it as needed.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Use the App for any illegal purpose</li>
              <li>Attempt to gain unauthorized access to the App, other accounts, or our systems</li>
              <li>Reverse engineer, decompile, or attempt to extract source code except where permitted by law</li>
              <li>Interfere with or disrupt the App or servers or networks connected to the App</li>
              <li>Misrepresent your identity or submit false information</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Intellectual Property</h2>
            <p>The App, including all software, design, text, graphics, and other content, is owned by The Lens Company and is protected by copyright, trademark, and other intellectual property laws. You retain ownership of data you enter into the App (weigh-ins, food logs, personal information); we are granted a limited license to process that data as described in our Privacy Policy.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Third-Party Services</h2>
            <p>The App integrates with third-party services including but not limited to Supabase, Anthropic (Claude API), Open Food Facts, and Android Health Connect. Use of those services is governed by their own terms and privacy policies. We are not responsible for the practices of third-party providers.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Beta Software</h2>
            <p>The Fit Lens is currently in beta. Features may change, data may occasionally be lost, and the App may contain bugs or errors. You acknowledge that you are using the App at your own risk during the beta period.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Disclaimer of Warranties</h2>
            <p>The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, The Lens Company and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from your use of the App.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Termination</h2>
            <p>We may suspend or terminate your access to the App at any time for violation of these Terms or for any other reason at our discretion. You may delete your account at any time through the App or by contacting us.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the App after changes constitutes acceptance of the updated Terms.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Contact</h2>
            <p>For questions about these Terms:</p>
            <p className="mt-3">The Lens Company<br />Email: <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a></p>
          </section>
        </div>
        <footer className="mt-16 pt-8 border-t border-neutral-200 text-sm text-neutral-500">
          <a href="/" className="hover:text-neutral-900 mr-6">Home</a>
          <a href="/privacy" className="hover:text-neutral-900">Privacy Policy</a>
        </footer>
      </article>
    </main>
  );
}
