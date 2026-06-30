export const metadata = {
  title: "Terms of Service — The Fit Lens",
  description: "Terms of service for The Fit Lens mobile application.",
};

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-yellow-100 text-yellow-800 font-semibold px-1 rounded border border-yellow-300">
      {children}
    </span>
  );
}

export default function Terms() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 py-16 px-6">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12 border-b border-neutral-200 pb-8">
          <p className="text-sm text-neutral-500 uppercase tracking-widest mb-2">The Fit Lens</p>
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Terms of Service</h1>
          <p className="text-sm text-neutral-500">Effective date: <Placeholder>[DATE]</Placeholder></p>
          <p className="text-sm text-neutral-500 mt-1">The Fit Lens LLC &bull; Arizona Domestic Limited Liability Company &bull; ACC Business ID: 25083180</p>
          <p className="text-sm text-neutral-500 mt-1"><a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a> &bull; thefitlens.com</p>
        </header>

        <nav className="mb-12 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
          <p className="text-sm font-semibold mb-3 text-neutral-700">Table of Contents</p>
          <ol className="list-decimal pl-5 space-y-1 text-sm text-blue-600 columns-2">
            <li><a href="#s1" className="hover:underline">Acceptance of Terms; Not Medical Advice; Binding Arbitration Notice</a></li>
            <li><a href="#s2" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#s3" className="hover:underline">Eligibility and Use of the Services</a></li>
            <li><a href="#s4" className="hover:underline">Account Registration</a></li>
            <li><a href="#s5" className="hover:underline">Device and Connectivity Requirements</a></li>
            <li><a href="#s6" className="hover:underline">User Data and License Grant</a></li>
            <li><a href="#s7" className="hover:underline">Health and Wellness Disclaimer</a></li>
            <li><a href="#s8" className="hover:underline">Intellectual Property Rights</a></li>
            <li><a href="#s9" className="hover:underline">Permitted and Prohibited Use</a></li>
            <li><a href="#s10" className="hover:underline">Third-Party Services, Devices, and Links</a></li>
            <li><a href="#s11" className="hover:underline">DMCA Policy</a></li>
            <li><a href="#s12" className="hover:underline">Feedback License</a></li>
            <li><a href="#s13" className="hover:underline">Alerts, Notifications, and AI-Generated Outputs</a></li>
            <li><a href="#s14" className="hover:underline">Changes to the Services</a></li>
            <li><a href="#s15" className="hover:underline">Termination</a></li>
            <li><a href="#s16" className="hover:underline">Subscription and Payment Terms</a></li>
            <li><a href="#s17" className="hover:underline">Disclaimer of Warranties</a></li>
            <li><a href="#s18" className="hover:underline">Indemnification</a></li>
            <li><a href="#s19" className="hover:underline">Limitation of Liability</a></li>
            <li><a href="#s20" className="hover:underline">Dispute Resolution and Binding Arbitration</a></li>
            <li><a href="#s21" className="hover:underline">Electronic Communications Consent</a></li>
            <li><a href="#s22" className="hover:underline">Geographic Restrictions</a></li>
            <li><a href="#s23" className="hover:underline">General Terms</a></li>
          </ol>
        </nav>

        <div className="space-y-8 leading-relaxed">

          <section id="s1">
            <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms; Not Medical Advice; Binding Arbitration Notice</h2>
            <p>Welcome to The Fit Lens.</p>
            <p className="mt-3">These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and The Fit Lens LLC (&quot;The Fit Lens,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), an Arizona Domestic Limited Liability Company (ACC Business ID: 25083180), governing your access to and use of the The Fit Lens mobile application, website, and all related features and services (collectively, the &quot;Services&quot;). Please read these Terms carefully. By creating an account, selecting &quot;I Agree,&quot; or by otherwise accessing or using the Services in any manner, you: (a) acknowledge that you have read, understood, and agree to be bound by these Terms; (b) agree to our Privacy Policy, available at thefitlens.com/privacy, which is incorporated herein by reference; and (c) represent and warrant that you are at least 18 years of age and have the legal capacity to enter into a binding agreement. If you do not agree to these Terms in their entirety, you must not access or use the Services.</p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Not Medical Advice</h3>
            <p>By providing the Services, The Fit Lens LLC does not practice medicine, provide healthcare, or render any form of medical advice. The Fit Lens does not diagnose, treat, cure, mitigate, or prevent any disease, disorder, or health condition. The body composition tracking, nutrition logging, AI coaching prescriptions, Composite Body Score, clinical threshold alerts, health summary PDF, GLP-1 dashboard, and all other features, outputs, and insights provided through the Services are intended solely to support your personal health and wellness awareness, education, and self-management goals. They do not replace, and must not be used as a substitute for, professional medical advice, diagnosis, or treatment from a qualified and licensed healthcare provider.</p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Specific Feature Disclaimers</h3>
            <p>The following feature-specific disclaimers apply in addition to the general health disclaimer in Section 7:</p>
            <ul className="list-disc pl-6 space-y-3 mt-3">
              <li><strong>AI Coaching Prescriptions.</strong> The coach-v2 AI system generates structured recommendations in the areas of Nutrition, Activity, and Sleep and Recovery. These prescriptions are algorithmically generated from your personal data and are informational in nature only. They do not constitute medical, nutritional, or clinical advice and should not be followed without consulting a qualified healthcare professional, particularly if you have an existing health condition, are pregnant, or are taking prescription medications.</li>
              <li><strong>Composite Body Score.</strong> The Composite Body Score is a proprietary weighted score derived from body composition measurements, activity data, nutrition data, and sleep data. It is a general wellness reference metric only. It does not reflect any clinically validated assessment of your health status and must not be interpreted as a clinical body composition measurement or medical diagnosis.</li>
              <li><strong>Clinical Threshold Alerts.</strong> The Services may generate automated alerts when your tracked data &mdash; including body fat percentage, blood pressure, SpO2, heart rate variability (HRV), respiratory rate, or other biometric readings from connected devices &mdash; falls outside reference ranges derived from published health and fitness literature. These alerts are informational reference points only. They are not clinical diagnoses, medical recommendations, or instructions to take any specific action. Do not rely solely on these alerts to make any health decision. Always consult a qualified healthcare provider.</li>
              <li><strong>Health Summary PDF / Share with Doctor Feature.</strong> The Services allow you to generate a PDF summary of your health and body composition data for optional, user-initiated sharing with a healthcare provider of your choosing. This summary is a convenience tool only. It does not constitute a medical record, a clinical assessment, a diagnostic report, or medical advice.</li>
              <li><strong>GLP-1 Dashboard.</strong> The GLP-1 dashboard section of the Services provides tracking tools for users who are, or believe they may be, using GLP-1 receptor agonist medications (including semaglutide, tirzepatide, or similar). The dashboard does not manage, advise on, or interact with any prescription medication. It does not constitute clinical decision support. Any decisions regarding GLP-1 medication, dosage, or continuation must be made solely in consultation with your prescribing healthcare provider.</li>
              <li><strong>AI Chef / Meal Planning.</strong> AI-generated meal plans and recipe suggestions are generated from your nutritional profile and stated preferences. They are general wellness suggestions only and do not constitute dietary advice from a registered dietitian or other licensed nutritional professional.</li>
            </ul>
            <p className="mt-4 font-bold uppercase">If you are experiencing a medical emergency, call 911 immediately. The Services are not designed for medical emergencies and must never be used as a substitute for emergency medical services.</p>
            <p className="mt-3">If you have any concerns about your health, any condition referenced by the Services, or any alert generated by the Services, contact a qualified healthcare provider promptly. Do not delay seeking professional medical advice because of anything the Services do or do not report to you.</p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Binding Arbitration Notice</h3>
            <p className="font-semibold uppercase text-sm">Please read Section 20 of these Terms carefully. It contains a binding arbitration provision and a class action waiver. By agreeing to these Terms, you agree that: (A) any dispute between you and The Fit Lens LLC will be resolved through final and binding individual arbitration rather than in court; (B) you waive your right to a jury trial; and (C) you waive your right to participate in a class action lawsuit or class-wide arbitration. See Section 20 for details.</p>
          </section>

          <section id="s2">
            <h2 className="text-2xl font-semibold mb-3">2. Privacy Policy</h2>
            <p>Our Privacy Policy, available at thefitlens.com/privacy, describes how we collect, use, store, disclose, and protect your personal data, including sensitive health and body composition data. The Privacy Policy is incorporated into these Terms by reference and forms part of this agreement. By accessing or using the Services, you consent to our data practices as described in the Privacy Policy.</p>
            <p className="mt-3">You should review the Privacy Policy carefully and regularly. We may update the Privacy Policy from time to time and will notify you of material changes as described in the Privacy Policy. Your continued use of the Services following any update constitutes your acceptance of the updated Privacy Policy.</p>
            <p className="mt-3">The Services are subject to additional legal obligations with respect to health data, including compliance with the FTC Health Breach Notification Rule (as amended effective July 29, 2024), the Washington My Health My Data Act (RCW Chapter 19.373), and other applicable state health data privacy laws. These obligations are described in the Privacy Policy.</p>
          </section>

          <section id="s3">
            <h2 className="text-2xl font-semibold mb-3">3. Eligibility and Use of the Services</h2>
            <p>The Services are available only to persons who satisfy all of the following eligibility requirements. By accessing or using the Services, you represent and warrant that:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>You are at least 18 years of age;</li>
              <li>You have the full legal capacity and authority to enter into a binding contract;</li>
              <li>You are not barred from using the Services under any applicable federal, state, local, or international law or regulation;</li>
              <li>You have not previously been suspended, banned, or permanently removed from the Services by us; and</li>
              <li>If you are accessing the Services on behalf of an organization or another person, you have the authority to bind that organization or person to these Terms.</li>
            </ul>
            <p className="mt-3">If you do not meet all of these requirements, you must not access or use the Services. The Services are designed for personal health and wellness tracking. They are not intended for clinical, diagnostic, or commercial medical use.</p>
          </section>

          <section id="s4">
            <h2 className="text-2xl font-semibold mb-3">4. Account Registration</h2>
            <p>To access the full features of the Services, you must create an account. By registering, you agree to the following:</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">4.1 Accuracy of Information</h3>
            <p>You agree to provide true, accurate, current, and complete information during registration and at all times thereafter. You are responsible for maintaining the accuracy of your account information and must promptly update it whenever it changes.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">4.2 Account Security</h3>
            <p>You are solely responsible for maintaining the confidentiality and security of your account credentials. You agree to notify us immediately at <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a> if you become aware of any unauthorized use of your account or any other security breach. The Fit Lens LLC will not be liable for any loss or damage arising from your failure to maintain the security of your account credentials.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">4.3 Account Responsibility</h3>
            <p>You are fully responsible for all activity that occurs under your account, whether authorized by you or not, except to the extent caused by our breach of these Terms or negligence.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">4.4 One Account Per User</h3>
            <p>You may maintain only one account under these Terms unless we expressly authorize otherwise in writing. Creating multiple accounts &mdash; including to circumvent subscription fees, obtain additional free trials, or bypass a suspension or ban &mdash; is a material violation of these Terms and may result in permanent termination of all accounts associated with you.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">4.5 Our Right to Suspend or Terminate Accounts</h3>
            <p>We reserve the right to suspend, restrict, or permanently terminate your account at any time and for any reason, including if we believe, in our sole discretion, that you have violated any provision of these Terms, provided false registration information, or engaged in any activity that may cause harm to other users, to the Services, or to us.</p>
          </section>

          <section id="s5">
            <h2 className="text-2xl font-semibold mb-3">5. Device and Connectivity Requirements</h2>

            <h3 className="text-lg font-semibold mt-4 mb-2">5.1 Supported Platforms</h3>
            <p>The Services are currently available exclusively on Android mobile devices. The Services are distributed through the Google Play Store and must be downloaded and installed through that channel.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">5.2 Internet and Data</h3>
            <p>Access to the Services requires an active internet connection. You are solely responsible for obtaining and maintaining the device, network connectivity, and data plan necessary to use the Services, and for all associated costs.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">5.3 Health Connect</h3>
            <p>Certain features of the Services are powered by data accessed through Android Health Connect. To use these features, you must grant the Services explicit permission to access your Health Connect data. You may grant or revoke individual Health Connect permissions at any time through your Android device&apos;s Health Connect settings.</p>
            <p className="mt-3">The data types the Services may request access to through Health Connect include, but are not limited to: steps and distance, active and total calories burned, heart rate and heart rate variability (HRV), blood oxygen saturation (SpO2), respiratory rate, blood pressure, VO2 max, body fat percentage, lean body mass, and sleep data.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">5.4 Connected Devices</h3>
            <p>The Services support integration with Bluetooth Low Energy (BLE) smart scales and other compatible hardware devices for body composition measurement and biometric data collection. Supported devices include, without limitation, Renpho, Etekcity, and Welland smart scales. You are responsible for the setup, maintenance, and security of any connected device. We are not responsible for data accuracy, connectivity, or the performance of any third-party hardware.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">5.5 Security of Transmission</h3>
            <p>You acknowledge that internet and wireless transmissions are not completely secure or private. We employ industry-standard encryption and security practices to protect data in transit, but we cannot guarantee the absolute security of any transmission.</p>
          </section>

          <section id="s6">
            <h2 className="text-2xl font-semibold mb-3">6. User Data and License Grant</h2>

            <h3 className="text-lg font-semibold mt-4 mb-2">6.1 Your Ownership</h3>
            <p>You retain all ownership rights in the personal data you input into the Services, including body composition measurements, food logs, and other health metrics. Nothing in these Terms transfers ownership of your personal data to us.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">6.2 License You Grant Us</h3>
            <p>By providing data to the Services, you grant us a limited, non-exclusive, royalty-free, worldwide license to access, store, process, and use your data solely to: (a) operate and provide the Services to you; (b) generate AI coaching prescriptions, your Composite Body Score, clinical threshold alerts, and health summaries; (c) improve and develop the Services; and (d) comply with our legal obligations. This license does not permit us to sell your personal data or use your health or body composition data for advertising or marketing targeting.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">6.3 Your Responsibility for Data Accuracy</h3>
            <p>You are solely responsible for the accuracy, completeness, and legality of all data you input into the Services or transmit through connected devices. We are not responsible for errors, inaccuracies, or omissions in data provided by you or by third-party connected devices.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">6.4 Health Connect Data</h3>
            <p>Data accessed through Android Health Connect is governed by both these Terms and Google&apos;s Health Connect terms and privacy policies. We process Health Connect data only for the purposes disclosed in our Privacy Policy and only with the permissions you have explicitly granted.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">6.5 No Obligation to Retain</h3>
            <p>We are not obligated to retain your data beyond the periods described in our Privacy Policy. Upon account deletion, we will delete or anonymize your data in accordance with our Privacy Policy and applicable law.</p>
          </section>

          <section id="s7">
            <h2 className="text-2xl font-semibold mb-3">7. Health and Wellness Disclaimer</h2>
            <p>The Services &mdash; including body composition tracking, nutrition logging, AI coaching prescriptions, the Composite Body Score, clinical threshold alerts, the AI Chef meal planning feature, the GLP-1 dashboard, and the health summary PDF &mdash; are general health and wellness information tools. They are not medical devices, clinical diagnostic tools, or healthcare services. Nothing in the Services or any output generated by the Services constitutes medical advice, clinical diagnosis, professional nutritional advice, or any form of treatment.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">7.1 General Wellness Purpose Only</h3>
            <p>The Services are intended to help you track and understand your body composition and general wellness trends over time. They are not intended to be used in the diagnosis, cure, mitigation, treatment, or prevention of any disease or health condition. The Services are not a substitute for professional medical care.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">7.2 AI and Machine Learning Limitations</h3>
            <p>The Services use artificial intelligence and machine learning technology to generate personalized coaching prescriptions, scores, alerts, and meal suggestions. You acknowledge and agree that:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>AI-generated outputs are produced by algorithms and may contain errors, omissions, or outputs that are factually incorrect, incomplete, or not applicable to your specific health situation.</li>
              <li>AI and machine learning systems have inherent limitations, including the potential for &quot;hallucinations&quot; &mdash; outputs that appear plausible but are factually inaccurate.</li>
              <li>The Composite Body Score is a proprietary weighted index derived from your personal data. It is not a clinically validated biomarker and should not be interpreted as a medical measurement.</li>
              <li>AI coaching prescriptions are generated from population-level reference data and your individual tracked metrics. They do not account for your complete medical history, current prescriptions, diagnosed conditions, or clinical context.</li>
              <li>Clinical threshold alerts are generated by comparing your data against published reference ranges. These reference ranges are general population benchmarks, not individualized clinical thresholds established by a healthcare provider for you specifically.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">7.3 No Patient-Provider Relationship</h3>
            <p>Nothing in the Services, and nothing in any communication between you and The Fit Lens LLC or its representatives, creates a patient-provider, physician-patient, therapist-client, dietitian-client, or any other professional healthcare relationship. The Fit Lens LLC is a technology company, not a healthcare provider.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">7.4 Your Sole Responsibility</h3>
            <p>You are solely responsible for all decisions you make regarding your health, nutrition, fitness, sleep, and medication based on or in connection with the Services. We strongly encourage you to discuss any information, alert, recommendation, or output generated by the Services with a licensed healthcare provider before taking any action that may affect your health.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">7.5 GLP-1 Medication Users</h3>
            <p>If you are using or considering using GLP-1 receptor agonist medications (including semaglutide, tirzepatide, liraglutide, or any similar medication), you acknowledge that: (a) the GLP-1 dashboard is a tracking and awareness tool only; (b) the Services do not monitor, manage, adjust, recommend, or interact with any prescription medication; (c) all decisions regarding GLP-1 medication must be made in consultation with your prescribing healthcare provider; and (d) the Services do not replace clinical monitoring that may be recommended by your provider during GLP-1 medication use.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">7.6 Share with Doctor Feature</h3>
            <p>If you use the health summary PDF feature to share data with a healthcare provider, you acknowledge that: (a) the summary contains data you have self-reported and data received from consumer-grade tracking devices; (b) the accuracy of the data depends on the accuracy of your inputs and the reliability of your connected devices; (c) the summary is provided for informational reference only and does not meet the standards of a clinical report; and (d) your healthcare provider may not act on, agree with, or endorse the data in the summary.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">7.7 Reliance at Your Own Risk</h3>
            <p>If you rely on any feature, output, alert, recommendation, or information provided by the Services, you do so entirely at your own risk. We are not responsible for any injury, harm, loss, or adverse outcome resulting from your reliance on any content generated by the Services.</p>
          </section>

          <section id="s8">
            <h2 className="text-2xl font-semibold mb-3">8. Intellectual Property Rights</h2>

            <h3 className="text-lg font-semibold mt-4 mb-2">8.1 Our Ownership</h3>
            <p>All content, features, software, algorithms, data structures, user interface designs, trademarks, service marks, logos, trade dress, and other materials made available through the Services (collectively, &quot;The Fit Lens Content&quot;) are owned by The Fit Lens LLC, our licensors, or other rights holders and are protected under United States and international intellectual property laws. No title or ownership in any The Fit Lens Content is transferred to you under these Terms.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">8.2 Proprietary Technology</h3>
            <p>The following features and systems of the Services are proprietary to The Fit Lens LLC and constitute protected intellectual property:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Composite Body Score &mdash; the proprietary weighting methodology, scoring algorithm, and data architecture</li>
              <li>Coach-v2 AI Prescription System &mdash; the artificial intelligence and machine learning system used to generate structured coaching prescriptions</li>
              <li>3D Body Avatar System &mdash; the proprietary three-dimensional body visualization system, including the OBJ-based mesh architecture, morph interpolation system, and body state rendering pipeline</li>
              <li>All software code, edge functions, database schemas, and application logic underlying the Services</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">8.3 Trademarks</h3>
            <p>The Fit Lens name, wordmark, app icon, logo, and brand elements are trademarks and service marks of The Fit Lens LLC. Nothing in these Terms grants you any right to use any The Fit Lens LLC trademark without our prior written consent.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">8.4 Restrictions</h3>
            <p>You may not copy, reproduce, modify, reverse engineer, decompile, create derivative works from, remove proprietary notices from, frame, or mirror any part of the Services or The Fit Lens Content without our prior written consent.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">8.5 Limited License to You</h3>
            <p>Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Services solely for your personal, non-commercial health and wellness tracking purposes during the term of these Terms. This license automatically terminates upon termination of your account or these Terms.</p>
          </section>

          <section id="s9">
            <h2 className="text-2xl font-semibold mb-3">9. Permitted and Prohibited Use</h2>

            <h3 className="text-lg font-semibold mt-4 mb-2">9.1 Permitted Use</h3>
            <p>You may use the Services only for lawful, personal, non-commercial purposes in accordance with these Terms, including accessing the app, inputting personal health and nutrition data, connecting compatible BLE devices, viewing AI-generated coaching outputs, and generating health summary PDFs for personal use.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">9.2 Prohibited Use &mdash; Content and Conduct</h3>
            <p>You may not use the Services for any unlawful purpose, to harass or harm any person, to impersonate The Fit Lens LLC or any other person, to transmit unsolicited commercial communications, or for any commercial purpose including reselling or sublicensing access to the Services.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">9.3 Prohibited Use &mdash; Technical</h3>
            <p>You may not use automated tools, bots, or scrapers to interact with the Services; probe, scan, or test vulnerabilities; introduce malicious code; gain unauthorized access to any part of the Services; or interfere with or disrupt the Services or any connected network or server.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">9.4 Prohibited Use &mdash; Account Abuse</h3>
            <p>You may not create multiple accounts to obtain additional free trial periods, share account credentials to provide unpaid premium access, provide false registration information, or sell or transfer your account to any third party.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">9.5 Consequences of Violation</h3>
            <p>We reserve the right to investigate any suspected violation of these Terms and to take any action we deem appropriate, including suspending or terminating your account, removing content, reporting suspected unlawful activity to law enforcement, and pursuing any other available remedy. Termination for violation of these Terms does not entitle you to any refund.</p>
          </section>

          <section id="s10">
            <h2 className="text-2xl font-semibold mb-3">10. Third-Party Services, Devices, and Links</h2>

            <h3 className="text-lg font-semibold mt-4 mb-2">10.1 Third-Party Integrations</h3>
            <p>The Services integrate with or support third-party platforms, devices, and services, including without limitation: Android Health Connect (Google LLC), Samsung Health and Samsung Galaxy Watch, Bluetooth Low Energy (BLE) smart scales and body composition devices from third-party manufacturers (including Renpho, Etekcity, and Welland), and Open Food Facts.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">10.2 No Responsibility for Third Parties</h3>
            <p>When you connect a third-party device or service to the Services, you are subject to that third party&apos;s own terms of service and privacy policy. The Fit Lens LLC does not control and is not responsible for the data collection practices, accuracy, availability, security, or conduct of any third-party platform, device, or service.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">10.3 Third-Party Data Accuracy</h3>
            <p>We are not responsible for the accuracy, completeness, or reliability of data received from any third-party source. You should verify important health data through multiple sources and with your healthcare provider.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">10.4 Your Risk</h3>
            <p>You access and use third-party services and devices entirely at your own risk.</p>
          </section>

          <section id="s11">
            <h2 className="text-2xl font-semibold mb-3">11. Digital Millennium Copyright Act (DMCA) Policy</h2>

            <h3 className="text-lg font-semibold mt-4 mb-2">11.1 Respect for Intellectual Property</h3>
            <p>The Fit Lens LLC respects the intellectual property rights of others and expects users of the Services to do the same. We will respond to notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act (17 U.S.C. &sect; 512) (&quot;DMCA&quot;).</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">11.2 Reporting Infringement</h3>
            <p>If you believe that content available through the Services infringes your copyright, please send a written notice to our designated DMCA agent containing: your full name, mailing address, telephone number, and email address; a description of the copyrighted work; the specific location within the Services where the allegedly infringing content appears; a statement of good-faith belief; a statement made under penalty of perjury that the information is accurate; and your physical or electronic signature.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">11.3 DMCA Agent Contact</h3>
            <p>DMCA Notices should be sent to: <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a> with the subject line &quot;DMCA Notice.&quot;</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">11.4 Counter-Notification and Repeat Infringers</h3>
            <p>If you believe your content was removed due to mistake or misidentification, you may send a counter-notification to our DMCA agent. In appropriate circumstances, we will terminate the accounts of users who are repeat infringers of third-party intellectual property rights.</p>
          </section>

          <section id="s12">
            <h2 className="text-2xl font-semibold mb-3">12. Feedback License</h2>
            <p>If you provide Feedback to us &mdash; including through in-app feedback tools, email, user surveys, social media, or any other channel &mdash; you grant The Fit Lens LLC a perpetual, irrevocable, worldwide, royalty-free, fully paid-up, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, distribute, display, and otherwise exploit the Feedback for any purpose, including incorporating it into the Services, without any obligation to compensate you, credit you, or maintain the Feedback as confidential.</p>
          </section>

          <section id="s13">
            <h2 className="text-2xl font-semibold mb-3">13. Alerts, Notifications, and AI-Generated Outputs</h2>

            <h3 className="text-lg font-semibold mt-4 mb-2">13.1 Types of Communications</h3>
            <p>By creating an account and using the Services, you agree to receive account and subscription notifications, service updates, clinical threshold alerts and coaching prescription notifications, health and wellness insights generated by the Services, and, if you have opted in, marketing and promotional communications.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">13.2 Managing Notifications</h3>
            <p>You may manage your notification preferences through your Android device settings and within the Services at any time. Disabling certain notifications &mdash; including clinical threshold alerts &mdash; may limit the functionality of the Services. We are not responsible for any harm arising from your decision to disable notifications.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">13.3 Nature of AI-Generated Outputs</h3>
            <p>All AI-generated outputs delivered through the Services are algorithmically generated and may not accurately reflect your individual health situation; do not constitute medical, clinical, or professional advice of any kind; may contain errors, omissions, or factually incorrect information, including through the phenomenon known as AI &quot;hallucination;&quot; and should always be reviewed critically and discussed with a qualified healthcare professional before being acted upon. We do not guarantee the accuracy, completeness, or fitness for any purpose of any AI-generated output.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">13.4 Standard Carrier Rates</h3>
            <p>If we send you communications by SMS or push notification, standard data and messaging rates from your mobile carrier may apply.</p>
          </section>

          <section id="s14">
            <h2 className="text-2xl font-semibold mb-3">14. Changes to the Services</h2>
            <p>The Fit Lens LLC reserves the right to add, modify, suspend, discontinue, or remove any feature, component, content, or aspect of the Services at any time, with or without notice, and without liability to you or any third party. We may push updates and enhancements to the Services automatically and without prior notice.</p>
            <p className="mt-3">Continued use of the Services following any modification constitutes your acceptance of the modified Services. If you object to any modification, your sole remedy is to discontinue use of the Services and close your account.</p>
          </section>

          <section id="s15">
            <h2 className="text-2xl font-semibold mb-3">15. Termination</h2>

            <h3 className="text-lg font-semibold mt-4 mb-2">15.1 Termination by Us</h3>
            <p>The Fit Lens LLC reserves the right to suspend or terminate your access to all or any part of the Services, or to terminate these Terms, at any time and for any reason, with or without notice, and without liability to you.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">15.2 Termination by You</h3>
            <p>You may close your account at any time by contacting us at <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a> or, where available, through the account management settings within the Services.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">15.3 Effect of Termination</h3>
            <p>Upon termination of your account or these Terms for any reason: (a) your right to access and use the Services will immediately cease; (b) we may delete your account data in accordance with our Privacy Policy; and (c) any provisions of these Terms that by their nature should survive termination will survive, including Sections 6, 7, 8, 17, 18, 19, 20, and 23.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">15.4 No Refund on Termination for Cause</h3>
            <p>If your account is terminated by us for violation of these Terms, you will not be entitled to any refund of prepaid subscription fees, except as required by applicable law.</p>
          </section>

          <section id="s16">
            <h2 className="text-2xl font-semibold mb-3">16. Subscription and Payment Terms</h2>

            <h3 className="text-lg font-semibold mt-4 mb-2">16.1 Free Tier</h3>
            <p>The Services include a free tier (&quot;The Fit Lens Free&quot;) available to all registered users at no charge, including full interactive 3D body avatar, body composition tracking with full history, food logging and manual entry, barcode food scanning, basic BLE scale integration, Android Health Connect integration, and basic data export. Free tier features will not be degraded or removed as a consequence of the introduction of premium features.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">16.2 Premium Subscription &mdash; Features</h3>
            <p>The premium subscription (&quot;The Fit Lens Premium&quot;) adds the following features: AI-powered adaptive coaching prescriptions (coach-v2, across six application surfaces); AI Chef personalized meal planning and recipe suggestions; expanded Food Library; 8-point segmental body composition scale support; multi-member household profiles; and richer data export capabilities.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">16.3 Subscription Plans and Pricing</h3>
            <p>The Fit Lens Premium is available on the following subscription terms:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Monthly subscription: <Placeholder>[INSERT FINAL MONTHLY PRICE]</Placeholder> per month</li>
              <li>Annual subscription: <Placeholder>[INSERT FINAL ANNUAL PRICE]</Placeholder> per year, billed in a single upfront payment</li>
            </ul>
            <p className="mt-3">All pricing is stated in United States dollars unless otherwise specified. We reserve the right to modify subscription pricing at any time. Any price change will take effect at the start of the next subscription renewal period following notice to you.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">16.4 Free Trial</h3>
            <p>We may, at our sole discretion, offer a free trial period for The Fit Lens Premium. Free trials are limited to one per user. If a payment method is on file at the end of a free trial period, your subscription will automatically convert to a paid subscription at the then-current rate unless you cancel before the trial expires.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">16.5 Billing and Payment</h3>
            <p>Subscription payments are processed through Google Play In-App Billing or, where the company elects to offer it, through an alternative billing system as permitted under applicable Google Play policies. We do not have direct access to your payment card details.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">16.6 Automatic Renewal</h3>
            <p>Your subscription will automatically renew for successive periods equal in length to your initial subscription term at the then-current subscription price unless you cancel at least 24 hours before the end of the current subscription period.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">16.7 Cancellation</h3>
            <p>You may cancel your subscription at any time through your Google Play account subscription management settings or any alternative billing management portal. Cancellation will take effect at the end of your current paid subscription period. We do not issue partial refunds or credits for unused portions of a subscription period, except as required by applicable law.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">16.8 Refunds</h3>
            <p>All subscription purchases are final and non-refundable, except as required by applicable law or as permitted under Google Play&apos;s refund policies. To request a refund for a Google Play purchase, you must submit your request directly to Google Play.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">16.9 Acceptable Use &mdash; Subscription Fraud</h3>
            <p>Any attempt to circumvent subscription fees, including by creating multiple accounts to obtain additional free trials or using payment fraud to obtain premium access, constitutes a material breach of these Terms and will result in immediate termination of all associated accounts without refund.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">16.10 Google Play Terms</h3>
            <p>This subscription is subject to Google Play&apos;s applicable developer terms and conditions. In the event of any conflict between these Terms and Google Play&apos;s terms with respect to billing and payment processing mechanics, Google Play&apos;s terms will govern solely with respect to those mechanics.</p>
          </section>

          <section id="s17">
            <h2 className="text-2xl font-semibold mb-3">17. Disclaimer of Warranties</h2>
            <p className="uppercase font-semibold text-sm">The Services, including all features, content, AI-generated outputs, coaching prescriptions, the Composite Body Score, clinical threshold alerts, health summary PDF, GLP-1 dashboard, AI Chef outputs, and all other information and materials made available through the Services, are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranty of any kind, express or implied.</p>
            <p className="mt-3 uppercase font-semibold text-sm">To the fullest extent permitted by applicable law, The Fit Lens LLC hereby expressly disclaims all warranties, whether express, implied, statutory, or otherwise, including without limitation: the implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement; any warranty that the Services will be uninterrupted, error-free, secure, or free from viruses or other harmful components; any warranty regarding the accuracy, completeness, timeliness, or reliability of any information or content provided through the Services, including AI-generated outputs; and any warranty of any kind relating to any third-party connected device or platform.</p>
            <p className="mt-3 uppercase font-semibold text-sm">AI and machine learning outputs generated by the Services are subject to the inherent limitations of AI technology, including the potential for errors, incomplete outputs, bias, and factually incorrect information commonly referred to as &quot;hallucinations.&quot; All reliance on AI-generated outputs is at your sole risk.</p>
            <p className="mt-3 text-sm text-neutral-600">Some jurisdictions do not allow the exclusion of implied warranties or limitations on applicable statutory rights of consumers, so some of the above exclusions may not apply to you.</p>
          </section>

          <section id="s18">
            <h2 className="text-2xl font-semibold mb-3">18. Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless The Fit Lens LLC and its affiliates, licensors, service providers, and their respective officers, directors, employees, contractors, agents, successors, and assigns from and against any and all claims, demands, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Your violation of any provision of these Terms, our Privacy Policy, or any other policy or agreement incorporated herein</li>
              <li>Your use or misuse of the Services, including your reliance on any AI-generated output, alert, prescription, or score</li>
              <li>Any data you input into the Services, any device you connect to the Services, or any inaccuracy in data you provide</li>
              <li>Your violation of any applicable law or regulation</li>
              <li>Your violation of any third-party right, including any intellectual property right or right of privacy</li>
              <li>Any misrepresentation made by you in connection with the Services or these Terms</li>
            </ul>
          </section>

          <section id="s19">
            <h2 className="text-2xl font-semibold mb-3">19. Limitation of Liability</h2>
            <p className="uppercase font-semibold text-sm">To the fullest extent permitted by applicable law, in no event will The Fit Lens LLC, its affiliates, licensors, service providers, employees, agents, officers, or directors be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages of any kind, arising out of or in connection with: (A) your use of, or inability to use, the Services; (B) any AI-generated output, coaching prescription, alert, score, or recommendation provided through the Services; (C) any action or inaction you take based on information received from the Services; (D) any unauthorized access to or use of our servers or any personal data stored therein; (E) any interruption or cessation of the Services; or (F) any content or conduct of any third party in connection with the Services.</p>
            <p className="mt-3 uppercase font-semibold text-sm">To the maximum extent permitted by applicable law, our total aggregate liability to you for all claims arising from or relating to the Services or these Terms is limited to the greater of: (A) the total subscription fees actually paid by you to us in the twelve (12) calendar months immediately preceding the event giving rise to the claim; or (B) fifty United States dollars ($50.00).</p>
            <p className="mt-3 text-sm text-neutral-600"><strong>California Residents:</strong> If you are a California resident, you waive California Civil Code Section 1542, which provides: &quot;A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party.&quot;</p>
          </section>

          <section id="s20">
            <h2 className="text-2xl font-semibold mb-3">20. Dispute Resolution and Binding Arbitration</h2>

            <h3 className="text-lg font-semibold mt-4 mb-2">20.1 Governing Law</h3>
            <p>Except as otherwise required by applicable law, these Terms and all disputes arising out of or relating to them or to the Services shall be governed by and construed in accordance with the laws of the State of Arizona, without regard to its conflict of law principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">20.2 Informal Dispute Resolution</h3>
            <p>Before initiating any formal legal proceeding, you agree to attempt to resolve any Dispute informally by contacting us at <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a> with the subject line &quot;Dispute Notice.&quot; We will attempt to resolve the Dispute through good-faith negotiation within thirty (30) days. Completion of this informal dispute resolution process is a prerequisite to initiating arbitration.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">20.3 Binding Individual Arbitration</h3>
            <p className="font-semibold uppercase text-sm">You and The Fit Lens LLC agree that all Disputes that cannot be resolved through informal dispute resolution will be resolved through final and binding individual arbitration, rather than in court, except as provided in Sections 20.5 and 20.6.</p>
            <p className="mt-3">The arbitration will be administered by the American Arbitration Association (&quot;AAA&quot;) under its Consumer Arbitration Rules, available at www.adr.org. The arbitration will be conducted <Placeholder>[IN PHOENIX, ARIZONA, OR BY REMOTE MEANS IF MUTUALLY AGREED]</Placeholder>.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">20.4 Arbitration Fees and Costs</h3>
            <p>You will be responsible for paying the AAA&apos;s initial filing fee (currently $200 for claims up to $10,000 under the AAA Consumer Arbitration Rules). The Fit Lens LLC will pay all remaining AAA administrative fees, arbitrator compensation, and other arbitration costs. Each party is responsible for its own attorney fees, except as otherwise awarded by the arbitrator pursuant to applicable law.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">20.5 Opt-Out Right</h3>
            <p>You have the right to opt out of this arbitration agreement by sending written notice to <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a> with the subject line &quot;Arbitration Opt-Out&quot; within thirty (30) days of the date you first agree to these Terms.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">20.6 Class Action Waiver</h3>
            <p className="font-semibold uppercase text-sm">You and The Fit Lens LLC agree that each party may bring claims against the other only in an individual capacity and not as a plaintiff or class member in any purported class, collective, consolidated, or representative action or proceeding. The arbitrator may not consolidate claims of more than one person and may award relief only in favor of the individual party seeking relief.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">20.7 Exceptions to Arbitration</h3>
            <p>Either party may bring an individual claim in a small claims court in the State of Arizona or the county in which you reside, or seek emergency injunctive or other equitable relief from a court of competent jurisdiction to prevent or restrain the actual or threatened infringement of intellectual property rights, trade secrets, or confidential information.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">20.8 Judicial Forum</h3>
            <p>If arbitration is found unenforceable or inapplicable to a particular Dispute, or if you have validly opted out pursuant to Section 20.5, you and The Fit Lens LLC agree that any judicial proceeding will be brought exclusively in the federal or state courts of competent jurisdiction located in Maricopa County, Arizona.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">20.9 Jury Trial Waiver</h3>
            <p className="font-semibold uppercase text-sm">To the fullest extent permitted by applicable law, you and The Fit Lens LLC each waive the right to a jury trial with respect to any Dispute that is subject to judicial resolution under these Terms.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">20.10 Limitation on Time to Bring Claims</h3>
            <p>Any claim or cause of action arising out of or related to your use of the Services or these Terms must be filed within one (1) year after such claim or cause of action first arose, regardless of any statute of limitations to the contrary.</p>
          </section>

          <section id="s21">
            <h2 className="text-2xl font-semibold mb-3">21. Electronic Communications Consent</h2>
            <p>By creating an account and using the Services, you consent to receiving communications from us electronically, including by email, push notification, in-app message, and SMS. You agree that all agreements, notices, disclosures, and other communications we provide to you electronically satisfy any legal requirement that such communications be in writing, to the fullest extent permitted by applicable law.</p>
            <p className="mt-3">You may manage your email communication preferences through the unsubscribe link in any marketing email we send, or through your account settings. We will continue to send you transactional and service-related communications regardless of your marketing communication preferences.</p>
          </section>

          <section id="s22">
            <h2 className="text-2xl font-semibold mb-3">22. Geographic Restrictions</h2>
            <p>The Services are operated by The Fit Lens LLC in the United States and are currently intended for users located in the United States. We make no representation or warranty that the Services are appropriate, available, or compliant with the laws of any jurisdiction outside the United States. If you access the Services from outside the United States, you do so on your own initiative and are solely responsible for compliance with all applicable local laws.</p>
          </section>

          <section id="s23">
            <h2 className="text-2xl font-semibold mb-3">23. General Terms</h2>

            <h3 className="text-lg font-semibold mt-4 mb-2">23.1 Entire Agreement</h3>
            <p>These Terms, together with our Privacy Policy and any other policies or agreements expressly incorporated by reference herein, constitute the entire agreement between you and The Fit Lens LLC with respect to your use of the Services and supersede all prior and contemporaneous agreements, representations, warranties, and understandings relating to the subject matter hereof.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">23.2 Modifications</h3>
            <p>The Fit Lens LLC reserves the right to modify these Terms at any time. We will notify you of material modifications by updating the effective date at the top of this document, posting a notice within the Services, or sending you an email notification. Your continued use of the Services after the effective date of any modification constitutes your acceptance of the modified Terms.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">23.3 Severability</h3>
            <p>If any provision of these Terms is held to be invalid, illegal, or unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will continue in full force and effect.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">23.4 No Waiver</h3>
            <p>No failure or delay by The Fit Lens LLC in exercising any right, power, or remedy under these Terms will operate as a waiver of that right, power, or remedy.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">23.5 Assignment</h3>
            <p>You may not assign, delegate, transfer, or sublicense any of your rights or obligations under these Terms without our prior written consent. The Fit Lens LLC may freely assign or transfer these Terms in connection with a merger, acquisition, sale of assets, reorganization, or other corporate transaction.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">23.6 Notices</h3>
            <p>All notices, requests, or other communications to The Fit Lens LLC under these Terms must be submitted by email to: <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a>.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">23.7 Force Majeure</h3>
            <p>The Fit Lens LLC will not be liable for any failure or delay in performance of its obligations under these Terms arising from causes beyond its reasonable control, including acts of God, natural disasters, pandemic or epidemic, war, terrorism, governmental action, power failures, or internet outages.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">23.8 Contact Information</h3>
            <p>If you have any questions, concerns, or complaints regarding these Terms, please contact us at:</p>
            <p className="mt-3">
              The Fit Lens LLC<br />
              Email: <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a><br />
              Website: thefitlens.com
            </p>
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
