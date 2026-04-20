export const metadata = {
  title: "Privacy Policy — The Fit Lens",
  description: "Privacy policy for The Fit Lens mobile application.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 py-16 px-6">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12 border-b border-neutral-200 pb-8">
          <p className="text-sm text-neutral-500 uppercase tracking-widest mb-2">The Fit Lens</p>
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-sm text-neutral-500">Effective date: April 20, 2026</p>
        </header>
        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Overview</h2>
            <p>The Fit Lens is a mobile application developed by The Lens Company (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) that helps users track body composition, log food intake, and receive AI-generated nutrition and training guidance. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.</p>
            <p className="mt-3">By using The Fit Lens, you agree to the collection and use of information in accordance with this policy.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">Account Information</h3>
            <p>When you create an account, we collect your email address and a password. Authentication is handled by Supabase, our backend service provider.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Profile Information</h3>
            <p>You may provide information such as age, sex, height, weight, goals, dietary preferences, joint limitations, injury history, and available training equipment. This information is used to personalize calculations and AI coaching.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Body Composition and Weigh-In Data</h3>
            <p>When you use a compatible body composition scale (such as the Etekcity ESF-551) via Bluetooth, we collect measurements including weight, body fat percentage, muscle mass, bone mass, visceral fat, water percentage, and metabolic age. These measurements are stored with timestamps to track trends over time.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Food Log Data</h3>
            <p>When you log food, we collect the food item, serving size, calorie, macronutrient, and micronutrient information. Food lookup is performed against the Open Food Facts public database and optionally via barcode scans using your device camera. Camera access is used only for barcode scanning; we do not store photos or video.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Health Connect Data (Android)</h3>
            <p>If you grant permission, The Fit Lens reads step count, heart rate, sleep, and active minute data from Android Health Connect to provide context for AI coaching. This data remains on your device and is only read at the moment of coaching requests; we do not continuously sync Health Connect data to our servers.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Device Data</h3>
            <p>We may collect anonymous technical information such as device model, operating system version, app version, and crash reports to diagnose issues and improve reliability.</p>
            <p className="mt-4 font-semibold">We do not collect precise location data, contacts, SMS, call logs, or any data outside the scope described above.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To authenticate your account and provide app functionality</li>
              <li>To generate personalized AI coaching, insights, and reports based on your food intake, body composition trends, and activity</li>
              <li>To calculate daily calorie, protein, and macronutrient targets</li>
              <li>To track progress against your goals over time</li>
              <li>To diagnose technical issues and improve the app</li>
              <li>To communicate with you about your account or important service changes</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Third-Party Services</h2>
            <p>The Fit Lens uses the following third-party services. Each has its own privacy policy governing how they handle data we send them.</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Supabase</strong> — authentication and database storage. Your account data, profile, weigh-ins, and food logs are stored in Supabase&apos;s infrastructure under our project.</li>
              <li><strong>Anthropic (Claude API)</strong> — AI-powered coaching and weekly summaries. When generating coaching content, we send relevant profile context, recent weigh-ins, recent food logs, and goals to the Anthropic API. Anthropic does not train models on API data per their commercial terms.</li>
              <li><strong>Open Food Facts</strong> — food database lookups. Food search queries and barcode scans are sent to the public Open Food Facts API.</li>
              <li><strong>Google Play Services / Health Connect</strong> — Android wearable and health data access, only if you grant permission.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Data Storage and Security</h2>
            <p>Your data is stored on Supabase infrastructure, which provides encryption in transit (TLS) and at rest. We use row-level security to ensure only you can access your data. We follow reasonable technical and organizational measures to protect your information from unauthorized access, loss, or disclosure.</p>
            <p className="mt-3">No method of electronic transmission or storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Data Retention</h2>
            <p>We retain your account and associated data for as long as your account is active. If you delete your account, all associated data (profile, weigh-ins, food logs, AI insights) is deleted from our systems within 30 days. You may delete your account at any time from within the app under Profile &rarr; Delete Account, or by emailing <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a>.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Delete your account and associated data</li>
              <li>Export your data in a portable format</li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, email <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a>.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Children&apos;s Privacy</h2>
            <p>The Fit Lens is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us and we will take steps to delete that information.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy at this URL and updating the &quot;Effective date&quot; above. Continued use of The Fit Lens after changes constitutes acceptance of the updated policy.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Contact</h2>
            <p>For questions or concerns about this Privacy Policy or our data practices:</p>
            <p className="mt-3">The Lens Company<br />Email: <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a></p>
          </section>
        </div>
        <footer className="mt-16 pt-8 border-t border-neutral-200 text-sm text-neutral-500">
          <a href="/" className="hover:text-neutral-900 mr-6">Home</a>
          <a href="/terms" className="hover:text-neutral-900">Terms of Service</a>
        </footer>
      </article>
    </main>
  );
}
