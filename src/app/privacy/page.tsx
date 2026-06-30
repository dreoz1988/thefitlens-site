export const metadata = {
  title: "Privacy Policy — The Fit Lens",
  description: "Privacy policy for The Fit Lens mobile application.",
};

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-yellow-100 text-yellow-800 font-semibold px-1 rounded border border-yellow-300">
      {children}
    </span>
  );
}

function DraftBanner({ note }: { note: string }) {
  return (
    <div className="bg-amber-50 border border-amber-300 rounded px-4 py-3 mb-6 text-amber-800 text-sm font-semibold">
      ⚠ {note}
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 py-16 px-6">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12 border-b border-neutral-200 pb-8">
          <p className="text-sm text-neutral-500 uppercase tracking-widest mb-2">The Fit Lens</p>
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-sm text-neutral-500">Effective date: June 28, 2026</p>
          <p className="text-sm text-neutral-500 mt-1">Operated by: The Fit Lens LLC &bull; <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a></p>
        </header>

        <div className="space-y-8 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction and Scope</h2>
            <p>The Fit Lens LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates The Fit Lens, a mobile application and related services (collectively, the &quot;Services&quot;) that help users track body composition, nutrition, activity, sleep, and overall health progress. This Privacy Policy describes how we collect, use, disclose, and protect the personal data &mdash; including sensitive health and body composition data &mdash; of users of the Services.</p>
            <p className="mt-3">By downloading, installing, or using the Services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree, do not use the Services.</p>
            <p className="mt-3">This Policy applies to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>The Fit Lens mobile application (Android)</li>
              <li>Any associated websites, including thefitlens.com</li>
              <li>Any future iOS or web versions of the Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Personal Data We Collect</h2>
            <p>We collect personal data &mdash; including sensitive health information &mdash; in the following ways:</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">2A. Data You Provide Directly</h3>
            <p>When you register for an account or use the Services, you may provide:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Name, email address, and password</li>
              <li>Date of birth, biological sex, height, and starting/goal weight</li>
              <li>Food logs, meal entries, and nutritional information</li>
              <li>Manual body composition entries (weight, body fat percentage, etc.)</li>
              <li>Feedback, survey responses, or support communications</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">2B. Data from Bluetooth-Connected Smart Scales and Devices</h3>
            <p>The Services support integration with Bluetooth Low Energy (BLE) smart scales and compatible hardware, including but not limited to Renpho, Etekcity, and Welland devices. When you connect such a device, we receive body composition measurements transmitted by that device, which may include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Weight</li>
              <li>Body fat percentage, lean body mass, muscle mass, bone mass, and water percentage</li>
              <li>Segmental body composition measurements (where supported by the connected device)</li>
            </ul>
            <p className="mt-3">We receive this data directly from your device over Bluetooth. We do not control the device manufacturer&apos;s own data collection practices. Please review the privacy policy of your scale or device manufacturer separately.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">2C. Data from Android Health Connect</h3>
            <p>With your explicit permission, the Services access health and fitness data stored in Android Health Connect. Depending on the permissions you grant, this may include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Steps and distance</li>
              <li>Active and total calories burned</li>
              <li>Heart rate and heart rate variability (HRV)</li>
              <li>Blood oxygen saturation (SpO2)</li>
              <li>Respiratory rate</li>
              <li>Blood pressure</li>
              <li>VO2 max</li>
              <li>Body fat percentage and lean body mass (sourced from wearable devices via Health Connect)</li>
              <li>Sleep duration and sleep stage data</li>
            </ul>
            <p className="mt-3">You control which Health Connect data types the Services may access through your Android device&apos;s Health Connect settings. You may revoke permissions at any time.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">2D. Inferences and Derived Data</h3>
            <p>We use your data to generate derived insights, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Composite Body Score &mdash; a proprietary weighted score calculated from your body composition measurements, activity, nutrition, and sleep data</li>
              <li>AI coaching prescriptions &mdash; structured recommendations in the areas of nutrition, activity, and sleep and recovery, generated by our AI coaching system</li>
              <li>Clinical threshold alerts &mdash; automated flags when your data crosses clinically referenced thresholds (e.g., body fat percentage, blood pressure, SpO2) that may warrant attention</li>
              <li>Health summary PDF &mdash; a shareable document summarizing your health data trends, intended for optional sharing with a healthcare provider</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">2E. Device and Technical Data</h3>
            <p>We automatically collect certain technical information when you use the Services, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Device model and operating system version</li>
              <li>App version and build information</li>
              <li>IP address</li>
              <li>Crash reports and diagnostic logs</li>
              <li>Feature usage and screen interaction data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Personal Data</h2>
            <p>We use the personal data we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Provide, operate, and maintain the Services, including body composition tracking, nutrition logging, AI coaching, and wearable integrations</li>
              <li>Generate your Composite Body Score, coaching prescriptions, clinical threshold alerts, and health summary PDF</li>
              <li>Personalize your experience and coaching recommendations</li>
              <li>Send you account-related communications, including notifications and service updates</li>
              <li>Respond to your support requests</li>
              <li>Analyze how users interact with the Services to improve features and user experience</li>
              <li>Debug, troubleshoot, and ensure the security and integrity of the Services</li>
              <li>Detect and prevent fraud, unauthorized access, and other prohibited activity</li>
              <li>Comply with our legal obligations</li>
              <li>With your explicit consent: share your health summary or data with a healthcare provider of your choosing</li>
            </ul>
            <p className="mt-3 font-semibold">We do not use your health or body composition data to serve you targeted advertising. We do not sell your personal data to third parties for monetary compensation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. How We Share Your Personal Data</h2>
            <p>We share personal data only in the following circumstances:</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">4A. Service Providers and Infrastructure</h3>
            <p>We use third-party service providers to operate the Services. These providers access personal data only to perform services on our behalf and are contractually prohibited from using your data for their own purposes. These include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Cloud hosting and database infrastructure (Supabase)</li>
              <li>Mobile build and deployment infrastructure (Expo Application Services / EAS)</li>
              <li>AI and machine learning processing services (used for coaching prescriptions and AI Chef features)</li>
              <li>Crash reporting and diagnostics services</li>
              <li>Payment processing (Stripe or equivalent)</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">4B. Healthcare Provider Sharing (User-Initiated)</h3>
            <p>The Services offer a &apos;Share with Doctor&apos; feature that allows you to generate and share a PDF health summary with a healthcare provider of your choice. This sharing occurs only upon your explicit, affirmative action and is solely your choice. We do not independently transmit your data to any healthcare provider.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">4C. Business Transfers</h3>
            <p>In the event of a merger, acquisition, sale of assets, bankruptcy, or similar business transaction, your personal data may be transferred to a successor entity. We will provide notice of any such transfer as required by applicable law.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">4D. Legal Obligations and Safety</h3>
            <p>We may disclose personal data if we believe in good faith that such disclosure is necessary to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Comply with a valid legal obligation, subpoena, court order, or government request</li>
              <li>Protect the rights, property, or safety of The Fit Lens LLC, our users, or the public</li>
              <li>Detect, investigate, or prevent fraud, security incidents, or illegal activity</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">4E. With Your Consent</h3>
            <p>We may share your personal data for any other purpose with your explicit prior consent.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">4F. What We Do Not Do</h3>
            <p>We do not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Sell your personal data to third parties for monetary compensation</li>
              <li>Share your health, body composition, or biometric data with advertisers</li>
              <li>Use your health data to serve you targeted or behavioral advertising</li>
              <li>Disclose your data to your employer, insurer, or any party that could use it to make decisions about you</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Sensitive Health and Body Composition Data</h2>
            <p>The Services are designed specifically for health and body composition tracking. As a result, the data you provide and that we collect is, by its nature, sensitive health information. We treat all health-related data with heightened care and protection.</p>
            <p className="mt-3">Specifically:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>We collect body composition measurements, biometric data, and health metrics only to provide and improve the Services</li>
              <li>We do not use health data for advertising or marketing profiling</li>
              <li>We do not disclose health data to third parties except as described in Section 4 above</li>
              <li>We apply industry-standard technical and organizational safeguards to protect health data at rest and in transit</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Data Retention</h2>
            <p>We retain your personal data for as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Maintain your account and provide the Services</li>
              <li>Comply with our legal obligations</li>
              <li>Resolve disputes and enforce our agreements</li>
              <li>Conduct internal analytics and improve the Services</li>
            </ul>
            <p className="mt-3">When you delete your account, we will delete or anonymize your personal data within a commercially reasonable time, except where retention is required by law or legitimate business necessity (e.g., billing records, legal holds). We will retain de-identified or aggregated data, which can no longer be linked to you, for internal analytics and product improvement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Security and Data Breach Notification</h2>
            <p>We implement commercially reasonable technical and organizational measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. These include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Encryption of data in transit (TLS/HTTPS)</li>
              <li>Encryption of data at rest within our database infrastructure</li>
              <li>Role-based access controls limiting personnel access to personal data</li>
              <li>Authentication and session management controls within the Services</li>
            </ul>
            <p className="mt-3">No method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Breach Notification</h3>
            <p>In the event of a data security breach, we will notify affected users and applicable regulatory authorities as required by applicable law, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>The FTC Health Breach Notification Rule (16 C.F.R. Part 318, as amended effective July 29, 2024) &mdash; which requires notification to affected individuals and the FTC within 60 calendar days of discovery of a breach affecting 500 or more individuals.</li>
              <li>Arizona Data Breach Notification Law (A.R.S. &sect; 18-552) &mdash; which requires notification to affected Arizona residents in the most expedient manner possible and without unreasonable delay following discovery of a breach.</li>
              <li>Other applicable state breach notification laws based on the location of affected users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Third-Party Services and Integrations</h2>
            <p>The Services integrate with third-party platforms and devices. When you connect a third-party service or device to the Services, you are subject to that third party&apos;s privacy policy and terms of service in addition to this Policy. We are not responsible for the privacy practices of third parties. Third-party integrations currently supported or planned include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Android Health Connect (Google) &mdash; governs access to health data stored on your device</li>
              <li>Bluetooth smart scales (Renpho, Etekcity, Welland, and others) &mdash; governed by respective manufacturer privacy policies</li>
              <li>Samsung Galaxy Watch / Samsung Health &mdash; governed by Samsung&apos;s privacy policy</li>
              <li>Open Food Facts &mdash; open-source food database; no personal data is transmitted to Open Food Facts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Artificial Intelligence Features</h2>
            <p>The Services use artificial intelligence and machine learning to provide the following features:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Coach prescriptions (nutrition, activity, sleep and recovery recommendations tailored to your data)</li>
              <li>AI Chef (personalized recipe and meal suggestions based on your nutritional profile)</li>
              <li>Composite Body Score calculation</li>
              <li>Clinical threshold alert generation</li>
            </ul>
            <p className="mt-3">These AI features process your personal data &mdash; including health and body composition data &mdash; to generate personalized recommendations. We use third-party AI/ML service providers to power certain features. These providers are contractually bound to use your data only to deliver the services to us and are not permitted to use your data for their own AI training without your consent.</p>
            <p className="mt-3">AI-generated coaching recommendations and health summaries are informational only and do not constitute medical advice. Always consult a qualified healthcare professional before making changes to your health, nutrition, or fitness regimen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Your Rights and Choices</h2>

            <h3 className="text-lg font-semibold mt-4 mb-2">10A. Access, Correction, and Deletion</h3>
            <p>You may access and update certain personal data directly within the Services through your account settings. You may also request that we:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Provide you with a copy of the personal data we hold about you</li>
              <li>Correct inaccurate personal data</li>
              <li>Delete your personal data (subject to legal retention obligations)</li>
            </ul>
            <p className="mt-3">To submit a request, contact us at <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a>.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">10B. Data Portability</h3>
            <p>Where technically feasible, we will provide your personal data in a machine-readable, portable format upon request.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">10C. Withdrawal of Health Connect Permissions</h3>
            <p>You may revoke the Services&apos; access to Health Connect data at any time through your Android device&apos;s Health Connect settings. Revoking permissions will limit certain features of the Services that depend on that data.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">10D. Account Deletion</h3>
            <p>You may delete your account at any time by contacting us at <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a> or through account settings within the Services.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">10E. Marketing Communications</h3>
            <p>If we send marketing emails, you may unsubscribe via the opt-out link in any such email. We will continue to send transactional and service-related communications.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. State-Specific Privacy Rights</h2>

            <h3 className="text-lg font-semibold mt-4 mb-2">11A. California Residents (CCPA/CPRA)</h3>
            <p>California residents have the following rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Right to Know &mdash; request disclosure of the categories and specific pieces of personal information we have collected, used, disclosed, or sold</li>
              <li>Right to Delete &mdash; request deletion of personal information we have collected, subject to exceptions</li>
              <li>Right to Correct &mdash; request correction of inaccurate personal information</li>
              <li>Right to Opt-Out of Sale or Sharing &mdash; we do not sell personal data or share it for cross-contextual behavioral advertising</li>
              <li>Right to Limit Use of Sensitive Personal Information &mdash; you may request that we limit use of your sensitive personal information (including health data) to purposes necessary to provide the Services</li>
              <li>Right to Non-Discrimination &mdash; we will not discriminate against you for exercising your CCPA rights</li>
            </ul>
            <p className="mt-3">To submit a CCPA request, contact us at <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a>. We will respond within 45 days.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">11B. Washington Residents (My Health My Data Act)</h3>
            <p>Washington State&apos;s My Health My Data Act (RCW Chapter 19.373, effective March 31, 2024) provides Washington residents with rights specific to consumer health data, including body composition, biometric, and activity data collected by the Services.</p>
            <p className="mt-3">Washington residents have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Right to confirm whether we collect, share, or sell your consumer health data</li>
              <li>Right to access your consumer health data, including a list of all third parties with whom it has been shared</li>
              <li>Right to delete your consumer health data</li>
              <li>Right to withdraw consent to the collection or sharing of consumer health data</li>
            </ul>
            <p className="mt-3">To exercise your Washington consumer health data rights, contact us at <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a>.</p>
            <p className="mt-3 font-semibold">Important: The Washington MHMD Act requires affirmative opt-in consent &mdash; separate from any general terms of use acceptance &mdash; before we may collect or share consumer health data beyond what is strictly necessary to provide the Services you request.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">11C. Nevada Residents (Consumer Health Data Privacy Act)</h3>
            <p>Nevada&apos;s Consumer Health Data Privacy Act (NRS Chapter 603C, effective March 31, 2024) provides Nevada residents with rights regarding consumer health data:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Right to confirm whether we have collected, disclosed, or sold your consumer health data</li>
              <li>Right to delete your consumer health data</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p className="mt-3">To exercise your Nevada consumer health data rights, contact us at <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a>.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">11D. Other State Residents</h3>
            <p>Residents of Colorado, Connecticut, Virginia, Texas, Oregon, and other states with comprehensive privacy laws may have rights to access, correct, delete, and opt out of certain processing of their personal data. Contact us at <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a> to exercise applicable rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Children&apos;s Privacy</h2>
            <p>The Services are not directed to individuals under the age of 18. We do not knowingly collect personal data from anyone under 18. If we become aware that we have collected personal data from a minor without verifiable parental consent, we will take steps to delete that information promptly.</p>
            <p className="mt-3">If you believe we have inadvertently collected data from a minor, please contact us at <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Data Transfer and Storage</h2>
            <p>The Services are operated in the United States. If you access the Services from outside the United States, your personal data will be transferred to and processed in the United States, where data protection laws may differ from those in your jurisdiction. By using the Services, you consent to this transfer and processing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">14. Changes to This Privacy Policy</h2>
            <p>We reserve the right to update this Privacy Policy at any time. When we make material changes, we will update the effective date at the top of this Policy and notify you through the Services or via email. Your continued use of the Services after the effective date of the updated Policy constitutes your acceptance of the changes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">15. How to Contact Us</h2>
            <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
            <p className="mt-3">
              The Fit Lens LLC<br />
              Email: <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a><br />
              Website: thefitlens.com<br />
              Mailing Address: <Placeholder>[INSERT REGISTERED AGENT OR PRINCIPAL BUSINESS ADDRESS]</Placeholder>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">16. Data Collection and Use Summary Table</h2>
            <p className="mb-4">The following table summarizes the categories of personal data we collect, our purposes for collection, and the categories of third parties to whom such data may be disclosed. This table is provided to satisfy disclosure requirements under the CCPA, Washington MHMD Act, and other applicable state privacy laws.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Category of Personal Data</th>
                    <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Purposes for Collection</th>
                    <th className="border border-neutral-300 px-3 py-2 text-left font-semibold">Third Parties Disclosed To / Sold or Shared</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-300 px-3 py-2 align-top font-medium">Registration &amp; Account Data<br /><span className="font-normal text-neutral-600">(name, email, password, date of birth, sex, height, starting weight, goal weight)</span></td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Provide the Services; create and manage your account; send account communications; internal analytics; customer support</td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Disclosed To: Technology/hosting providers (Supabase); customer service providers; analytics providers. <strong>Not Sold or Shared for Targeted Advertising.</strong></td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="border border-neutral-300 px-3 py-2 align-top font-medium">Body Composition &amp; Biometric Data<br /><span className="font-normal text-neutral-600">(weight, body fat %, lean mass, muscle mass, BMI, segmental measurements, Composite Body Score, trend data)</span></td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Provide core body composition tracking; generate AI coaching; generate health summaries; service improvement; with your consent: share with healthcare providers</td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Disclosed To: Hosting/infrastructure providers; AI/ML service providers; healthcare providers (only upon your explicit request). <strong>Not Sold or Shared for Targeted Advertising.</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-3 py-2 align-top font-medium">Health Connect &amp; Wearable Data<br /><span className="font-normal text-neutral-600">(steps, active calories, HRV, SpO2, respiratory rate, blood pressure, VO2 max, body fat from wearable, lean body mass from wearable, sleep data)</span></td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Provide activity and recovery tracking; generate AI coaching; populate GLP-1 dashboard and health summaries; service improvement</td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Disclosed To: Hosting/infrastructure providers; AI/ML service providers. <strong>Not Sold or Shared for Targeted Advertising.</strong></td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="border border-neutral-300 px-3 py-2 align-top font-medium">Nutrition &amp; Food Log Data<br /><span className="font-normal text-neutral-600">(meals logged, food items, macros, calorie targets, AI Chef interactions, meal plan data)</span></td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Provide food logging and nutrition tracking; generate AI nutrition coaching; service improvement and analytics</td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Disclosed To: Hosting/infrastructure providers; AI/ML service providers (for AI Chef and coaching). <strong>Not Sold or Shared for Targeted Advertising.</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-3 py-2 align-top font-medium">Device &amp; Technical Data<br /><span className="font-normal text-neutral-600">(device model, OS version, app version, device ID, IP address, crash diagnostics)</span></td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Ensure technical functionality; debug and troubleshoot; prevent fraud; security and integrity of systems; analytics</td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Disclosed To: Hosting/infrastructure providers; crash analytics providers; security vendors. <strong>Not Sold or Shared for Targeted Advertising.</strong></td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="border border-neutral-300 px-3 py-2 align-top font-medium">Usage &amp; Interaction Data<br /><span className="font-normal text-neutral-600">(features accessed, screens visited, timestamps, in-app behavior, logging frequency)</span></td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Understand how users interact with the Services; improve features and user experience; internal business analytics</td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Disclosed To: Hosting/infrastructure providers; analytics providers. <strong>Not Sold or Shared for Targeted Advertising.</strong></td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-300 px-3 py-2 align-top font-medium">Inferences<br /><span className="font-normal text-neutral-600">(Composite Body Score, coach prescriptions, health risk flags, progress projections)</span></td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Personalize coaching and recommendations; generate clinical threshold alerts; generate health summaries; service improvement</td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Disclosed To: Hosting/infrastructure providers; AI/ML providers (input data, not final inferences); healthcare providers (only upon your explicit request). <strong>Not Sold or Shared for Targeted Advertising.</strong></td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="border border-neutral-300 px-3 py-2 align-top font-medium">Payment Data<br /><span className="font-normal text-neutral-600">(subscription status, transaction history; payment card details processed by third-party payment processor)</span></td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Process subscription payments; manage billing and refunds; fraud prevention</td>
                    <td className="border border-neutral-300 px-3 py-2 align-top">Disclosed To: Payment processor (Stripe or equivalent); billing support providers. <strong>Not Sold or Shared for Targeted Advertising.</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">17. Washington Consumer Health Data Privacy Notice</h2>
            <p className="text-sm text-neutral-500 mb-4">Updated: June 27, 2026</p>
            <p>This Washington Consumer Health Data Privacy Notice supplements the information in the The Fit Lens Privacy Policy. It applies solely to Washington State consumers and applies only to personal information defined as &quot;consumer health data&quot; subject to the Washington My Health My Data Act (RCW Chapter 19.373).</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">What Does This Notice Cover?</h3>
            <p>This Notice describes what consumer health data we collect, how we use and share it, and the rights you have regarding your consumer health data. Consumer health data is a subset of personal information that identifies your past, present, or future physical or mental health status.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">What Categories of Consumer Health Data Do We Collect?</h3>
            <p>We may collect the following categories of consumer health data:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Body composition measurements (weight, body fat percentage, lean body mass, muscle mass, bone mass, water percentage, segmental measurements)</li>
              <li>Biometric information from wearable devices (heart rate, HRV, SpO2, respiratory rate, blood pressure, VO2 max)</li>
              <li>Activity and fitness data (steps, calories, sleep duration and stages)</li>
              <li>Nutritional data (food logs, macro and calorie intake)</li>
              <li>Information derived or inferred from the above data, including your Composite Body Score, AI coaching prescriptions, and clinical threshold alert history</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">Purposes for Collecting Consumer Health Data</h3>
            <p>We collect and use consumer health data to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Provide body composition tracking, nutrition logging, AI coaching, and wearable integrations</li>
              <li>Generate your Composite Body Score, coaching prescriptions, clinical threshold alerts, and health summaries</li>
              <li>Exchange data with connected devices and Android Health Connect</li>
              <li>Provide customer support</li>
              <li>Fulfill legal functions and obligations</li>
              <li>Ensure security and integrity of our systems</li>
              <li>For other purposes with your explicit consent</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">Who Do We Share Consumer Health Data With?</h3>
            <p>We share consumer health data only with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Infrastructure and hosting providers (Supabase) who process data solely to operate the Services</li>
              <li>AI/ML service providers who process data to generate coaching prescriptions and AI Chef features &mdash; subject to Data Processing Agreements prohibiting use for their own purposes</li>
              <li>Healthcare providers &mdash; only upon your explicit, user-initiated request via the Share with Doctor feature</li>
              <li>Government agencies or legal bodies as required by law</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">We Do Not Sell Consumer Health Data</h3>
            <p>The Fit Lens LLC does not sell consumer health data as defined by the Washington My Health My Data Act.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Your Washington Consumer Health Data Rights</h3>
            <p>If you are a Washington State resident, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Confirm whether we are collecting, sharing, or selling consumer health data about you</li>
              <li>Access your consumer health data, including a list of all third parties and affiliates with whom we have shared or sold it</li>
              <li>Delete your consumer health data</li>
              <li>Withdraw your consent to the collection or sharing of consumer health data</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at: <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a></p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Consent</h3>
            <p>We obtain your affirmative, opt-in consent before collecting consumer health data beyond what is strictly necessary to provide the Services you request. Consent for collection and consent for sharing are obtained separately. Consent may not be bundled with acceptance of our Terms of Service or this Privacy Policy.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">How to Appeal</h3>
            <p>You may appeal our decision with respect to a request by contacting us at: <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a></p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Changes to This Notice</h3>
            <p>We will notify you of significant changes to this Notice. Please check this Notice periodically for updates.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">18. Nevada Consumer Health Data Privacy Notice</h2>
            <DraftBanner note="DRAFT — For attorney review and determination of whether a standalone document is required" />
            <p className="text-sm text-neutral-500 mb-4">Updated: <Placeholder>[DATE]</Placeholder></p>
            <p>This Nevada Consumer Health Data Privacy Notice supplements the information in the The Fit Lens Privacy Policy. It applies solely to Nevada consumers and applies only to personal information defined as &quot;consumer health data&quot; subject to the Nevada Consumer Health Data Privacy Act (NRS Chapter 603C).</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">What Categories of Consumer Health Data Do We Collect?</h3>
            <p>We may collect or receive the following categories of consumer health data:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Body composition measurements and biometric data</li>
              <li>Health and fitness data from wearable devices and Android Health Connect</li>
              <li>Nutritional and food log data</li>
              <li>Data derived or inferred from the above, including your Composite Body Score and AI coaching prescriptions</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">Purposes for Collecting Consumer Health Data</h3>
            <p>We collect and use consumer health data to provide The Fit Lens Services, exchange data with connected devices, provide customer support, fulfill legal obligations, ensure system security, and for other purposes with your consent.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Who Do We Share Consumer Health Data With?</h3>
            <p>We share consumer health data only with service providers operating under Data Processing Agreements, healthcare providers upon your explicit request, and government agencies as required by law. We do not sell consumer health data.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Your Nevada Consumer Health Data Rights</h3>
            <p>Nevada residents have the right to: (1) confirm whether we have collected your consumer health data; (2) confirm whether we have disclosed or sold your consumer health data; (3) delete your consumer health data; and (4) withdraw your consent.</p>
            <p className="mt-3">Contact us at: <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a></p>

            <p className="mt-4 text-sm text-neutral-500">The Fit Lens LLC &bull; Arizona Domestic Limited Liability Company &bull; ACC Business ID: 25083180</p>
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
