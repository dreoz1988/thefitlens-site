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
          <p className="text-sm text-neutral-500">Effective date: June 29, 2026</p>
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
            <li><a href="#s11" className="hover:underline">Digital Millennium Copyright Act (DMCA) Policy</a></li>
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
            <h3 className="text-lg font-semibold mt-4 mb-2">Not Medical Advice</h3>
            <p>By providing the Services, The Fit Lens LLC does not practice medicine, provide healthcare, or render any form of medical advice. The Fit Lens does not diagnose, treat, cure, mitigate, or prevent any disease, disorder, or health condition. The body composition tracking, nutrition logging, AI coaching prescriptions, Composite Body Score, clinical threshold alerts, health summary PDF, GLP-1 dashboard, and all other features, outputs, and insights provided through the Services are intended solely to support your personal health and wellness awareness, education, and self-management goals. They do not replace, and must not be used as a substitute for, professional medical advice, diagnosis, or treatment from a qualified and licensed healthcare provider.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Specific Feature Disclaimers</h3>
            <p>The following feature-specific disclaimers apply in addition to the general health disclaimer in Section 7:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>AI Coaching Prescriptions. The coach-v2 AI system generates structured recommendations in the areas of Nutrition, Activity, and Sleep and Recovery. These prescriptions are algorithmically generated from your personal data and are informational in nature only. They do not constitute medical, nutritional, or clinical advice and should not be followed without consulting a qualified healthcare professional, particularly if you have an existing health condition, are pregnant, or are taking prescription medications.</li>
              <li>Composite Body Score. The Composite Body Score is a proprietary weighted score derived from body composition measurements, activity data, nutrition data, and sleep data. It is a general wellness reference metric only. It does not reflect any clinically validated assessment of your health status and must not be interpreted as a clinical body composition measurement or medical diagnosis.</li>
              <li>Clinical Threshold Alerts. The Services may generate automated alerts when your tracked data, including body fat percentage, blood pressure, SpO2, heart rate variability (HRV), respiratory rate, or other biometric readings from connected devices, falls outside reference ranges derived from published health and fitness literature. These alerts are informational reference points only. They are not clinical diagnoses, medical recommendations, or instructions to take any specific action. Do not rely solely on these alerts to make any health decision. Always consult a qualified healthcare provider.</li>
              <li>Health Summary PDF / Share with Doctor Feature. The Services allow you to generate a PDF summary of your health and body composition data for optional, user-initiated sharing with a healthcare provider of your choosing. This summary is a convenience tool only. It does not constitute a medical record, a clinical assessment, a diagnostic report, or medical advice, and we are not responsible for how any healthcare provider interprets, acts upon, or declines to act upon the information in the summary.</li>
              <li>GLP-1 Dashboard. The GLP-1 dashboard section of the Services provides tracking tools for users who are, or believe they may be, using GLP-1 receptor agonist medications (including semaglutide, tirzepatide, liraglutide, or similar, across the specific brand and generic options selectable within the Services). The dashboard does not manage, advise on, or interact with any prescription medication. It does not constitute clinical decision support. Any decisions regarding GLP-1 medication, dosage, or continuation must be made solely in consultation with your prescribing healthcare provider.</li>
              <li>GLP-1 Side Effect Logging and Education. The Services allow you to log self-reported GLP-1 side effects and provide general educational content about common side effects, drawn from published clinical trial literature. This feature is a logging and awareness tool only. It does not diagnose any condition, does not suggest medication dosing or continuation decisions, and does not compare the relative merits or safety of different medications. Content describing potentially serious symptoms is provided for general awareness only and is not a substitute for contacting your prescribing healthcare provider or, in a medical emergency, calling 911. Do not rely on this feature to determine whether a symptom requires medical attention.</li>
              <li>Manual Workout Entry. The Services allow you to manually enter activity data (type, duration, and optional effort or calorie estimates) when a connected device is unavailable. We do not independently verify the accuracy of manually entered activity data, and it is used by the Services, including AI coaching features, in the same manner as data received from connected devices.</li>
              <li>Injury/Limitation-Informed Coaching. If you provide joint, injury, or physical limitation information, the AI coaching system may reference it alongside your logged activity when generating recommendations. This is not physical therapy, athletic training, or medical advice, and does not constitute an assessment of what activity is safe for you. The judgment of whether any activity is appropriate given your physical condition remains solely yours, in consultation with a qualified healthcare or fitness professional as needed.</li>
              <li>AI Chef / Meal Planning. AI-generated meal plans and recipe suggestions are generated from your nutritional profile and stated preferences. They are general wellness suggestions only and do not constitute dietary advice from a registered dietitian or other licensed nutritional professional.</li>
            </ul>
            <p className="mt-3">IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY, CALL 911 IMMEDIATELY. THE SERVICES ARE NOT DESIGNED FOR MEDICAL EMERGENCIES AND MUST NEVER BE USED AS A SUBSTITUTE FOR EMERGENCY MEDICAL SERVICES.</p>
            <p className="mt-3">If you have any concerns about your health, any condition referenced by the Services, or any alert generated by the Services, contact a qualified healthcare provider promptly. Do not delay seeking professional medical advice because of anything the Services do or do not report to you.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Binding Arbitration Notice</h3>
            <p>PLEASE READ SECTION 20 OF THESE TERMS CAREFULLY. IT CONTAINS A BINDING ARBITRATION PROVISION AND A CLASS ACTION WAIVER. BY AGREEING TO THESE TERMS, YOU AGREE THAT: (A) ANY DISPUTE BETWEEN YOU AND THE FIT LENS LLC WILL BE RESOLVED THROUGH FINAL AND BINDING INDIVIDUAL ARBITRATION RATHER THAN IN COURT; (B) YOU WAIVE YOUR RIGHT TO A JURY TRIAL; AND (C) YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION. SEE SECTION 20 FOR DETAILS.</p>
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
            <p className="mt-3">If you do not meet all of these requirements, you must not access or use the Services. Any access or use of the Services in violation of this Section may result in immediate termination of your account and access.</p>
            <p className="mt-3">The Services are designed for personal health and wellness tracking. They are not intended for clinical, diagnostic, or commercial medical use.</p>
          </section>

          <section id="s4">
            <h2 className="text-2xl font-semibold mb-3">4. Account Registration</h2>
            <p>To access the full features of the Services, you must create an account. By registering, you agree to the following:</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">4.1 Accuracy of Information</h3>
            <p>You agree to provide true, accurate, current, and complete information during registration and at all times thereafter. Registration information may include your name, email address, date of birth, biological sex, height, and starting body composition metrics. You are responsible for maintaining the accuracy of your account information and must promptly update it whenever it changes.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">4.2 Account Security</h3>
            <p>You are solely responsible for maintaining the confidentiality and security of your account credentials, including your password. You agree to: (a) select a strong, unique password and not share it with any third party; (b) log out of your account when using a shared or public device; and (c) notify us immediately at <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a> if you become aware of any unauthorized use of your account or any other security breach.</p>
            <p className="mt-3">The Fit Lens LLC will not be liable for any loss or damage arising from your failure to maintain the security of your account credentials or from any unauthorized access to your account resulting from your failure to comply with these security obligations.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">4.3 Account Responsibility</h3>
            <p>You are fully responsible for all activity that occurs under your account, whether authorized by you or not, except to the extent caused by our breach of these Terms or negligence. If you permit any third party to access your account, you remain fully responsible for all activity conducted under your account by that third party.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">4.4 One Account Per User</h3>
            <p>You may maintain only one account under these Terms unless we expressly authorize otherwise in writing. Creating multiple accounts, including to circumvent subscription fees, obtain additional free trials, or bypass a suspension or ban, is a material violation of these Terms and may result in permanent termination of all accounts associated with you.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">4.5 Our Right to Suspend or Terminate Accounts</h3>
            <p>We reserve the right to suspend, restrict, or permanently terminate your account at any time and for any reason, including if we believe, in our sole discretion, that you have violated any provision of these Terms, provided false registration information, or engaged in any activity that may cause harm to other users, to the Services, or to us. We will endeavor to notify you of account actions where feasible, but we are not required to do so.</p>
          </section>

          <section id="s5">
            <h2 className="text-2xl font-semibold mb-3">5. Device and Connectivity Requirements</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">5.1 Supported Platforms</h3>
            <p>The Services are currently available exclusively on Android mobile devices. Use of the Services requires a supported Android device running a compatible version of the Android operating system. The Services are distributed through the Google Play Store and must be downloaded and installed through that channel.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">5.2 Internet and Data</h3>
            <p>Access to the Services requires an active internet connection. You are solely responsible for: (a) obtaining and maintaining the device, network connectivity, and data plan necessary to use the Services; (b) all costs associated with your device, internet service, and mobile data usage; and (c) any fees charged by your mobile carrier for data usage associated with the Services.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">5.3 Health Connect</h3>
            <p>Certain features of the Services, including activity tracking, biometric monitoring, and AI coaching integrations, are powered by data accessed through Android Health Connect, a Google health data platform. To use these features, you must grant the Services explicit permission to access your Health Connect data. You may grant or revoke individual Health Connect permissions at any time through your Android device&rsquo;s Health Connect settings. Revoking permissions will disable the features that depend on those data types but will not affect your access to the rest of the Services.</p>
            <p className="mt-3">The data types the Services may request access to through Health Connect include, but are not limited to: steps and distance, active and total calories burned, heart rate and heart rate variability (HRV), blood oxygen saturation (SpO2), respiratory rate, blood pressure, VO2 max, body fat percentage, lean body mass, and sleep data. The specific data types the Services request are disclosed in our Privacy Policy.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">5.4 Connected Devices</h3>
            <p>The Services support integration with Bluetooth Low Energy (BLE) smart scales and other compatible hardware devices for body composition measurement and biometric data collection. Supported devices include, without limitation, Renpho, Etekcity, and Welland smart scales. You are responsible for the setup, maintenance, and security of any connected device. We are not responsible for data accuracy, connectivity, or the performance of any third-party hardware.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">5.5 Security of Transmission</h3>
            <p>You acknowledge that internet and wireless transmissions are not completely secure or private. Any data transmitted to or from the Services, including health and body composition data, may be intercepted by unauthorized parties. We employ industry-standard encryption and security practices to protect data in transit, but we cannot guarantee the absolute security of any transmission.</p>
          </section>

          <section id="s6">
            <h2 className="text-2xl font-semibold mb-3">6. User Data and License Grant</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">6.1 Your Ownership</h3>
            <p>You retain all ownership rights in the personal data you input into the Services, including body composition measurements, food logs, and other health metrics. Nothing in these Terms transfers ownership of your personal data to us.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">6.2 License You Grant Us</h3>
            <p>By providing data to the Services, you grant us a limited, non-exclusive, royalty-free, worldwide license to access, store, process, and use your data solely to: (a) operate and provide the Services to you; (b) generate AI coaching prescriptions, your Composite Body Score, clinical threshold alerts, and health summaries; (c) improve and develop the Services; and (d) comply with our legal obligations. This license does not permit us to sell your personal data or use your health or body composition data for advertising or marketing targeting, as described in our Privacy Policy.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">6.3 Your Responsibility for Data Accuracy</h3>
            <p>You are solely responsible for the accuracy, completeness, and legality of all data you input into the Services or transmit to the Services through connected devices. We are not responsible for errors, inaccuracies, or omissions in data provided by you or by third-party connected devices. Inaccurate input data will produce inaccurate outputs, including inaccurate coaching prescriptions and scores, for which we are not liable.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">6.4 Health Connect Data</h3>
            <p>Data accessed through Android Health Connect is governed by both these Terms and Google&rsquo;s Health Connect terms and privacy policies. We process Health Connect data only for the purposes disclosed in our Privacy Policy and only with the permissions you have explicitly granted. You may revoke our access to Health Connect data at any time through your device settings.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">6.5 No Obligation to Retain</h3>
            <p>We are not obligated to retain your data beyond the periods described in our Privacy Policy. Upon account deletion, we will delete or anonymize your data in accordance with our Privacy Policy and applicable law.</p>
          </section>

          <section id="s7">
            <h2 className="text-2xl font-semibold mb-3">7. Health and Wellness Disclaimer</h2>
            <p>The Services, including body composition tracking, nutrition logging, AI coaching prescriptions, the Composite Body Score, clinical threshold alerts, the AI Chef meal planning feature, the GLP-1 dashboard, and the health summary PDF, are general health and wellness information tools. They are not medical devices, clinical diagnostic tools, or healthcare services. Nothing in the Services or any output generated by the Services constitutes medical advice, clinical diagnosis, professional nutritional advice, or any form of treatment.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">7.1 General Wellness Purpose Only</h3>
            <p>The Services are intended to help you track and understand your body composition and general wellness trends over time. They are not intended to be used in the diagnosis, cure, mitigation, treatment, or prevention of any disease or health condition. The Services are not a substitute for professional medical care.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">7.2 AI and Machine Learning Limitations</h3>
            <p>The Services use artificial intelligence and machine learning technology to generate personalized coaching prescriptions, scores, alerts, and meal suggestions. You acknowledge and agree that:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>AI-generated outputs are produced by algorithms and may contain errors, omissions, or outputs that are factually incorrect, incomplete, or not applicable to your specific health situation.</li>
              <li>AI and machine learning systems have inherent limitations, including the potential for &quot;hallucinations&quot;, outputs that appear plausible but are factually inaccurate.</li>
              <li>The Composite Body Score is a proprietary weighted index derived from your personal data. It is not a clinically validated biomarker and should not be interpreted as a medical measurement.</li>
              <li>AI coaching prescriptions are generated from population-level reference data and your individual tracked metrics. They do not account for your complete medical history, current prescriptions, diagnosed conditions, or clinical context, none of which the Services have access to unless you voluntarily disclose them.</li>
              <li>Clinical threshold alerts are generated by comparing your data against published reference ranges. These reference ranges are general population benchmarks, not individualized clinical thresholds established by a healthcare provider for you specifically.</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">7.3 No Patient-Provider Relationship</h3>
            <p>Nothing in the Services, and nothing in any communication between you and The Fit Lens LLC or its representatives, creates a patient-provider, physician-patient, therapist-client, dietitian-client, or any other professional healthcare relationship. The Fit Lens LLC is a technology company, not a healthcare provider.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">7.4 Your Sole Responsibility</h3>
            <p>You are solely responsible for all decisions you make regarding your health, nutrition, fitness, sleep, and medication based on or in connection with the Services. We strongly encourage you to discuss any information, alert, recommendation, or output generated by the Services with a licensed healthcare provider before taking any action that may affect your health.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">7.5 GLP-1 Medication Users</h3>
            <p>If you are using or considering using GLP-1 receptor agonist medications (including semaglutide, tirzepatide, liraglutide, or any similar medication), you acknowledge that: (a) the GLP-1 dashboard is a tracking and awareness tool only; (b) the Services do not monitor, manage, adjust, recommend, or interact with any prescription medication; (c) all decisions regarding GLP-1 medication must be made in consultation with your prescribing healthcare provider; and (d) the Services do not replace clinical monitoring that may be recommended by your provider during GLP-1 medication use.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">7.6 GLP-1 Side Effect Logging</h3>
            <p>If you use the GLP-1 side effect logging feature, you acknowledge that: (a) the feature is a self-reporting and general-education tool only; (b) side effect education content is drawn from published clinical trial literature and is presented as general information, not personalized medical guidance; (c) the feature does not diagnose any condition and does not suggest changes to your medication or dosage; (d) content addressing potentially serious symptoms is informational only and does not replace contacting your prescribing healthcare provider or, in a medical emergency, calling 911; and (e) any data you log using this feature may be included in the Share with Doctor summary described in Section 7.7, but is not independently reviewed or verified by us before inclusion.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">7.7 Share with Doctor Feature</h3>
            <p>If you use the health summary PDF feature to share data with a healthcare provider, you acknowledge that: (a) the summary contains data you have self-reported and data received from consumer-grade tracking devices; (b) the accuracy of the data depends on the accuracy of your inputs and the reliability of your connected devices; (c) the summary is provided for informational reference only and does not meet the standards of a clinical report; and (d) your healthcare provider may not act on, agree with, or endorse the data in the summary, which is their professional prerogative.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">7.8 Reliance at Your Own Risk</h3>
            <p>If you rely on any feature, output, alert, recommendation, or information provided by the Services, you do so entirely at your own risk. We are not responsible for any injury, harm, loss, or adverse outcome resulting from your reliance on any content generated by the Services.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">7.9 Manual Data Entry and Injury-Informed Coaching</h3>
            <p>You acknowledge that: (a) any workout data you enter manually is self-reported and is not independently verified by us for accuracy; (b) if you provide joint, injury, or physical limitation information, the AI coaching system may reference it alongside your logged activity to generate recommendations; and (c) any such coaching output is not physical therapy, athletic training, or medical advice, does not constitute an assessment of what activity is safe for you, and does not substitute for the judgment of a qualified healthcare or fitness professional regarding your specific physical condition.</p>
          </section>

          <section id="s8">
            <h2 className="text-2xl font-semibold mb-3">8. Intellectual Property Rights</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">8.1 Our Ownership</h3>
            <p>All content, features, software, algorithms, data structures, user interface designs, trademarks, service marks, logos, trade dress, and other materials made available through the Services (collectively, &quot;The Fit Lens Content&quot;) are owned by The Fit Lens LLC, our licensors, or other rights holders and are protected under United States and international copyright, trademark, trade secret, patent, and other intellectual property laws. No title or ownership in any The Fit Lens Content is transferred to you under these Terms.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">8.2 Proprietary Technology</h3>
            <p>The following features and systems of the Services are proprietary to The Fit Lens LLC and constitute protected intellectual property:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Composite Body Score: the proprietary weighting methodology, scoring algorithm, and data architecture used to generate the Composite Body Score from multiple body composition and wellness data sources</li>
              <li>Coach-v2 AI Prescription System: the artificial intelligence and machine learning system used to generate structured coaching prescriptions in the domains of Nutrition, Activity, and Sleep and Recovery</li>
              <li>3D Body Avatar System: the proprietary three-dimensional body visualization system, including the OBJ-based mesh architecture, morph interpolation system, and body state rendering pipeline</li>
              <li>All software code, edge functions, database schemas, and application logic underlying the Services</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">8.3 Trademarks</h3>
            <p>The The Fit Lens name, wordmark, app icon, logo, and brand elements are trademarks and service marks of The Fit Lens LLC. All other trademarks, service marks, and brand names referenced in the Services are the property of their respective owners. Nothing in these Terms grants you any right to use any The Fit Lens LLC trademark without our prior written consent.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">8.4 Restrictions</h3>
            <p>You may not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Copy, reproduce, republish, upload, post, transmit, publicly display, or distribute any part of the Services or any The Fit Lens Content without our prior written consent</li>
              <li>Modify, adapt, translate, reverse engineer, decompile, disassemble, or create derivative works based on the Services or any underlying software or algorithm</li>
              <li>Remove, obscure, or alter any copyright, trademark, or other proprietary rights notice incorporated in the Services</li>
              <li>Use any The Fit Lens trademark, logo, or brand element without our prior written consent</li>
              <li>Frame or mirror any part of the Services on any website or other platform without our prior written consent</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">8.5 Limited License to You</h3>
            <p>Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Services solely for your personal, non-commercial health and wellness tracking purposes during the term of these Terms. This license automatically terminates upon termination of your account or these Terms.</p>
          </section>

          <section id="s9">
            <h2 className="text-2xl font-semibold mb-3">9. Permitted and Prohibited Use</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">9.1 Permitted Use</h3>
            <p>You may use the Services only for lawful, personal, non-commercial purposes in accordance with these Terms. The license granted in Section 8.5 permits you to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Access and use the The Fit Lens mobile application on a supported Android device</li>
              <li>Input personal health and nutrition data and connect compatible BLE devices</li>
              <li>View and interact with AI-generated coaching outputs, your Composite Body Score, and body composition history</li>
              <li>Generate and export health summary PDFs for personal use or voluntary sharing with your healthcare provider</li>
              <li>Access the features of your subscription tier</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">9.2 Prohibited Use, Content and Conduct</h3>
            <p>You may not use the Services for any of the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Any unlawful purpose or in violation of any applicable federal, state, local, or international law or regulation</li>
              <li>To harass, abuse, threaten, harm, or exploit any person</li>
              <li>To impersonate The Fit Lens LLC, any of our employees, another user, or any other person or entity</li>
              <li>To transmit unsolicited commercial communications, spam, chain letters, or any other form of unauthorized solicitation</li>
              <li>To transmit any content that is unlawful, fraudulent, defamatory, obscene, or otherwise objectionable</li>
              <li>For any commercial purpose, including reselling or sublicensing access to the Services</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">9.3 Prohibited Use, Technical</h3>
            <p>You may not, and may not permit any third party to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Use any automated tool, bot, spider, scraper, or script to access, monitor, copy, or interact with the Services</li>
              <li>Attempt to probe, scan, or test the vulnerability of the Services or any associated system or network</li>
              <li>Introduce any virus, malware, ransomware, Trojan horse, worm, keystroke logger, or other malicious or harmful code into the Services</li>
              <li>Attempt to gain unauthorized access to any part of the Services, any other user&rsquo;s account, or any system or network connected to the Services</li>
              <li>Interfere with, disrupt, or disable the Services or any server or network connected to the Services</li>
              <li>Use the Services in any way that could impose an unreasonable or disproportionately large load on our infrastructure</li>
              <li>Circumvent, disable, or interfere with any security feature of the Services, including any feature that prevents or restricts use or copying of content</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">9.4 Prohibited Use, Account Abuse</h3>
            <p>You may not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Create multiple accounts to obtain additional free trial periods, circumvent subscription fees, or bypass a suspension or ban</li>
              <li>Share account credentials with any other person, except as expressly permitted under a multi-member household subscription</li>
              <li>Provide false, inaccurate, or misleading registration information</li>
              <li>Sell, transfer, or assign your account or any rights under these Terms to any third party</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">9.5 Consequences of Violation</h3>
            <p>We reserve the right to investigate any suspected violation of these Terms and to take any action we deem appropriate, including: suspending or terminating your account; removing content; reporting suspected unlawful activity to law enforcement; and pursuing any other remedy available at law or in equity. Termination for violation of these Terms does not entitle you to any refund.</p>
          </section>

          <section id="s10">
            <h2 className="text-2xl font-semibold mb-3">10. Third-Party Services, Devices, and Links</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">10.1 Third-Party Integrations</h3>
            <p>The Services integrate with or support third-party platforms, devices, and services, including without limitation:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Android Health Connect (Google LLC): a platform that aggregates health and fitness data on your Android device</li>
              <li>Samsung Health and Samsung Galaxy Watch: Samsung&rsquo;s health data ecosystem</li>
              <li>Bluetooth Low Energy (BLE) smart scales and body composition devices from third-party manufacturers, including Renpho, Etekcity, and Welland</li>
              <li>Open Food Facts: an open-source food composition database</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">10.2 No Responsibility for Third Parties</h3>
            <p>When you connect a third-party device or service to the Services, you are subject to that third party&rsquo;s own terms of service and privacy policy in addition to these Terms. The Fit Lens LLC does not control and is not responsible for the data collection practices, accuracy, availability, security, or conduct of any third-party platform, device, or service. A third party&rsquo;s integration with or link from the Services does not constitute our endorsement of that third party, its products, or its services.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">10.3 Third-Party Data Accuracy</h3>
            <p>The Services may display data received from third-party connected devices, including body composition measurements from BLE scales, biometric data from Health Connect, and activity data from wearables. We are not responsible for the accuracy, completeness, or reliability of data received from any third-party source. You should verify important health data through multiple sources and with your healthcare provider.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">10.4 Your Risk</h3>
            <p>You access and use third-party services and devices entirely at your own risk. We strongly recommend reviewing the privacy policy and terms of service of any third-party service or device before connecting it to the Services.</p>
          </section>

          <section id="s11">
            <h2 className="text-2xl font-semibold mb-3">11. Digital Millennium Copyright Act (DMCA) Policy</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">11.1 Respect for Intellectual Property</h3>
            <p>The Fit Lens LLC respects the intellectual property rights of others and expects users of the Services to do the same. We will respond to notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act (17 U.S.C. § 512) (&quot;DMCA&quot;).</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">11.2 Reporting Infringement</h3>
            <p>If you believe that content available through the Services infringes your copyright, please send a written notice to our designated DMCA agent containing all of the following:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Your full name, mailing address, telephone number, and email address</li>
              <li>A description of the copyrighted work you claim has been infringed, including the copyright registration number if available</li>
              <li>The specific location within the Services (URL or feature description) where the allegedly infringing content appears</li>
              <li>A statement that you have a good-faith belief that the use of the content in the manner complained of is not authorized by the copyright owner, its agent, or applicable law</li>
              <li>A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on behalf of the copyright owner</li>
              <li>Your physical or electronic signature</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">11.3 DMCA Agent Contact</h3>
            <p>DMCA Notices should be sent to: <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a> with the subject line &quot;DMCA Notice.&quot;</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">11.4 Counter-Notification</h3>
            <p>If you believe your content was removed due to mistake or misidentification, you may send a counter-notification to our DMCA agent containing: your name, address, phone number, and email; identification of the removed content and its prior location; a statement under penalty of perjury that the removal was a mistake or misidentification; your consent to jurisdiction of the federal district court for your location; and your signature. Upon receiving a valid counter-notification, we will provide a copy to the original complainant and, if no court action is filed within ten business days, may restore the content.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">11.5 Repeat Infringers</h3>
            <p>In appropriate circumstances and at our sole discretion, we will terminate the accounts of users who are repeat infringers of third-party intellectual property rights.</p>
          </section>

          <section id="s12">
            <h2 className="text-2xl font-semibold mb-3">12. Feedback License</h2>
            <p>We welcome your feedback, suggestions, ideas, and recommendations regarding the Services (&quot;Feedback&quot;). If you provide Feedback to us, including through in-app feedback tools, email, user surveys, social media, or any other channel, you grant The Fit Lens LLC a perpetual, irrevocable, worldwide, royalty-free, fully paid-up, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, distribute, display, and otherwise exploit the Feedback for any purpose, including incorporating it into the Services, without any obligation to compensate you, credit you, or maintain the Feedback as confidential.</p>
            <p className="mt-3">You represent that your Feedback does not infringe any third party&rsquo;s intellectual property rights and that you have the right to grant the license described above. You agree not to submit any Feedback that contains confidential information belonging to a third party.</p>
          </section>

          <section id="s13">
            <h2 className="text-2xl font-semibold mb-3">13. Alerts, Notifications, and AI-Generated Outputs</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">13.1 Types of Communications</h3>
            <p>By creating an account and using the Services, you agree to receive the following types of communications from us:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Account and subscription notifications, including confirmation, billing, renewal, and cancellation notices</li>
              <li>Service updates, including notifications of new features, changes to the Services, and app update availability</li>
              <li>Clinical threshold alerts and coaching prescription notifications, when enabled in your account settings</li>
              <li>Health and wellness tips and personalized insights generated by the Services</li>
              <li>Marketing and promotional communications, if you have opted in to receive them</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">13.2 Managing Notifications</h3>
            <p>You may manage your notification preferences through your Android device settings and within the Services at any time. Disabling certain notifications, including clinical threshold alerts, may limit the functionality of the Services. We are not responsible for any harm arising from your decision to disable notifications.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">13.3 Nature of AI-Generated Outputs</h3>
            <p>All AI-generated outputs delivered through the Services, including coaching prescriptions, meal suggestions, Composite Body Score interpretations, and clinical threshold alerts, are subject to the following limitations and acknowledgments:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>They are algorithmically generated and may not accurately reflect your individual health situation</li>
              <li>They do not constitute medical, clinical, or professional advice of any kind</li>
              <li>They may contain errors, omissions, or factually incorrect information, including through the phenomenon known as AI &quot;hallucination&quot;</li>
              <li>They should always be reviewed critically and discussed with a qualified healthcare professional before being acted upon</li>
              <li>They are subject to change as the underlying AI models are updated or improved</li>
            </ul>
            <p className="mt-3">We do not guarantee the accuracy, completeness, or fitness for any purpose of any AI-generated output.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">13.4 Standard Carrier Rates</h3>
            <p>If we send you communications by SMS or push notification, standard data and messaging rates from your mobile carrier may apply.</p>
          </section>

          <section id="s14">
            <h2 className="text-2xl font-semibold mb-3">14. Changes to the Services</h2>
            <p>The Fit Lens LLC reserves the right to add, modify, suspend, discontinue, or remove any feature, component, content, or aspect of the Services at any time, with or without notice, and without liability to you or any third party. We may push updates and enhancements to the Services automatically and without prior notice.</p>
            <p className="mt-3">Continued use of the Services following any modification constitutes your acceptance of the modified Services. If you object to any modification, your sole remedy is to discontinue use of the Services and close your account.</p>
            <p className="mt-3">We will endeavor to provide advance notice of material changes to the Services that may significantly affect your use, but we are not obligated to do so except as required by applicable law.</p>
          </section>

          <section id="s15">
            <h2 className="text-2xl font-semibold mb-3">15. Termination</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">15.1 Termination by Us</h3>
            <p>The Fit Lens LLC reserves the right to suspend or terminate your access to all or any part of the Services, or to terminate these Terms, at any time and for any reason, with or without notice, and without liability to you. Without limiting the foregoing, we may terminate your account immediately if we believe, in our sole discretion, that: (a) you have violated any provision of these Terms; (b) you have provided false, fraudulent, or misleading registration information; (c) you have engaged in conduct that may harm other users, the Services, or us; or (d) continued provision of the Services to you creates legal, regulatory, or reputational risk for us.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">15.2 Termination by You</h3>
            <p>You may close your account at any time by contacting us at <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a> or, where available, through the account management settings within the Services. Termination of your account is your sole remedy if you are dissatisfied with the Services or any change to them.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">15.3 Effect of Termination</h3>
            <p>Upon termination of your account or these Terms for any reason: (a) your right to access and use the Services will immediately cease; (b) we may delete your account data in accordance with our Privacy Policy; and (c) any provisions of these Terms that by their nature should survive termination will survive, including without limitation:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Section 6 (User Data and License Grant: representations and indemnification provisions)</li>
              <li>Section 7 (Health and Wellness Disclaimer)</li>
              <li>Section 8 (Intellectual Property Rights)</li>
              <li>Section 17 (Disclaimer of Warranties)</li>
              <li>Section 18 (Indemnification)</li>
              <li>Section 19 (Limitation of Liability)</li>
              <li>Section 20 (Dispute Resolution and Binding Arbitration)</li>
              <li>Section 23 (General Terms)</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">15.4 No Refund on Termination for Cause</h3>
            <p>If your account is terminated by us for violation of these Terms, you will not be entitled to any refund of prepaid subscription fees, except as required by applicable law.</p>
          </section>

          <section id="s16">
            <h2 className="text-2xl font-semibold mb-3">16. Subscription and Payment Terms</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">16.1 Free Tier</h3>
            <p>The Services include a free tier (&quot;The Fit Lens Free&quot;) available to all registered users at no charge. The free tier includes the following core features: full interactive 3D body avatar, body composition tracking with full history, food logging and manual entry, barcode food scanning, basic BLE scale integration, Android Health Connect integration, and basic data export. Free tier features will not be degraded or removed as a consequence of the introduction of premium features. The premium subscription adds features on top of the free tier; it does not restrict or lock features that were previously available in the free tier.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">16.2 Premium Subscription, Features</h3>
            <p>The premium subscription (&quot;The Fit Lens Premium&quot;) adds the following features to the free tier: AI-powered adaptive coaching prescriptions (coach-v2, across six application surfaces); AI Chef personalized meal planning and recipe suggestions; expanded Food Library; 8-point segmental body composition scale support; multi-member household profiles; and richer data export capabilities. Additional premium features may be added or modified from time to time.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">16.3 Subscription Plans and Pricing</h3>
            <p>The Fit Lens Premium is available on the following subscription terms:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Monthly subscription: <Placeholder>INSERT FINAL MONTHLY PRICE</Placeholder> per month</li>
              <li>Annual subscription: <Placeholder>INSERT FINAL ANNUAL PRICE</Placeholder> per year, billed in a single upfront payment</li>
            </ul>
            <p className="mt-3">All pricing is stated in United States dollars unless otherwise specified. Applicable taxes will be added where required by law. We reserve the right to modify subscription pricing at any time. Any price change will take effect at the start of the next subscription renewal period following notice to you. If you do not agree to a price change, you must cancel before the change takes effect.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">16.4 Free Trial</h3>
            <p>We may, at our sole discretion, offer a free trial period for The Fit Lens Premium. The specific duration of any free trial will be disclosed at the time of offer. The following conditions apply to free trials:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Free trials are limited to one per user. Creating multiple accounts to obtain additional free trials is a violation of Section 9.4 and these Terms.</li>
              <li>If a payment method is on file at the end of a free trial period, your subscription will automatically convert to a paid subscription at the then-current rate unless you cancel before the trial expires.</li>
              <li>You will receive notice before your trial converts to a paid subscription. Cancellation instructions will be included in that notice.</li>
              <li>We reserve the right to modify, limit, or withdraw free trial offers at any time without notice.</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">16.5 Billing and Payment</h3>
            <p>Subscription payments are processed through Google Play In-App Billing or, where the company elects to offer it, through an alternative billing system as permitted under applicable Google Play policies. Payment is charged to the payment method associated with your Google Play account or your chosen alternative payment method upon confirmation of purchase. We do not have direct access to your payment card details.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">16.6 Automatic Renewal</h3>
            <p>Your subscription will automatically renew for successive periods equal in length to your initial subscription term (monthly or annual, as applicable) at the then-current subscription price unless you cancel at least 24 hours before the end of the current subscription period. The renewal charge will be applied within 24 hours before the end of the current period. We will remind you of your upcoming renewal in advance.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">16.7 Cancellation</h3>
            <p>You may cancel your subscription at any time through: (a) your Google Play account subscription management settings; or (b) any alternative billing management portal provided in connection with your chosen payment method. Cancellation will take effect at the end of your current paid subscription period. You will retain access to premium features through the end of your paid period. We do not issue partial refunds or credits for unused portions of a subscription period, except as required by applicable law.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">16.8 Refunds</h3>
            <p>All subscription purchases are final and non-refundable, except as required by applicable law or as permitted under Google Play&rsquo;s refund policies. To request a refund for a Google Play purchase, you must submit your request directly to Google Play. We do not process refund requests for transactions processed through Google Play.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">16.9 Acceptable Use, Subscription Fraud</h3>
            <p>Any attempt to circumvent subscription fees, including by: creating multiple accounts to obtain additional free trials; sharing account credentials to provide unpaid access to premium features to additional users; or using payment fraud to obtain premium access, constitutes a material breach of these Terms and will result in immediate termination of all associated accounts without refund and may result in referral to law enforcement.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">16.10 Subscription Term Changes</h3>
            <p>We may modify these subscription terms at any time. Material changes will be communicated through the Services or by email. Continued use of the Services following the effective date of any change constitutes acceptance of the modified terms.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">16.11 Google Play Terms</h3>
            <p>This subscription is subject to Google Play&rsquo;s applicable developer terms and conditions. In the event of any conflict between these Terms and Google Play&rsquo;s terms with respect to billing and payment processing mechanics, Google Play&rsquo;s terms will govern solely with respect to those mechanics.</p>
          </section>

          <section id="s17">
            <h2 className="text-2xl font-semibold mb-3">17. Disclaimer of Warranties</h2>
            <p>THE SERVICES, INCLUDING ALL FEATURES, CONTENT, AI-GENERATED OUTPUTS, COACHING PRESCRIPTIONS, THE COMPOSITE BODY SCORE, CLINICAL THRESHOLD ALERTS, HEALTH SUMMARY PDF, GLP-1 DASHBOARD, AI CHEF OUTPUTS, AND ALL OTHER INFORMATION AND MATERIALS MADE AVAILABLE THROUGH THE SERVICES, ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.</p>
            <p className="mt-3">TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE FIT LENS LLC, ON ITS OWN BEHALF AND ON BEHALF OF ITS AFFILIATES, LICENSORS, SERVICE PROVIDERS, AND THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND SUCCESSORS, HEREBY EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT;</li>
              <li>ANY WARRANTY THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM VIRUSES, MALWARE, OR OTHER HARMFUL COMPONENTS;</li>
              <li>ANY WARRANTY THAT DEFECTS WILL BE CORRECTED OR THAT THE SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF HARMFUL COMPONENTS;</li>
              <li>ANY WARRANTY REGARDING THE ACCURACY, COMPLETENESS, TIMELINESS, RELIABILITY, OR FITNESS FOR ANY PURPOSE OF ANY INFORMATION OR CONTENT PROVIDED THROUGH THE SERVICES, INCLUDING AI-GENERATED OUTPUTS;</li>
              <li>ANY WARRANTY THAT THE SERVICES WILL MEET YOUR REQUIREMENTS, EXPECTATIONS, OR HEALTH AND WELLNESS GOALS;</li>
              <li>ANY WARRANTY OF ANY KIND RELATING TO ANY THIRD-PARTY CONNECTED DEVICE, DATA RECEIVED FROM ANY THIRD-PARTY DEVICE OR PLATFORM, OR ANY THIRD-PARTY SERVICE ACCESSIBLE THROUGH OR IN CONNECTION WITH THE SERVICES.</li>
            </ul>
            <p className="mt-3">AI AND MACHINE LEARNING OUTPUTS GENERATED BY THE SERVICES, INCLUDING COACHING PRESCRIPTIONS, COMPOSITE BODY SCORE CALCULATIONS, CLINICAL THRESHOLD ALERTS, AND MEAL SUGGESTIONS, ARE SUBJECT TO THE INHERENT LIMITATIONS OF AI TECHNOLOGY, INCLUDING THE POTENTIAL FOR ERRORS, INCOMPLETE OUTPUTS, BIAS, AND FACTUALLY INCORRECT INFORMATION COMMONLY REFERRED TO AS &quot;HALLUCINATIONS.&quot; ALL RELIANCE ON AI-GENERATED OUTPUTS IS AT YOUR SOLE RISK.</p>
            <p className="mt-3">Some jurisdictions do not allow the exclusion of implied warranties or limitations on applicable statutory rights of consumers, so some of the above exclusions may not apply to you. In such jurisdictions, our liability will be limited to the maximum extent permitted by law.</p>
          </section>

          <section id="s18">
            <h2 className="text-2xl font-semibold mb-3">18. Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless The Fit Lens LLC and its affiliates, licensors, service providers, and their respective officers, directors, employees, contractors, agents, successors, and assigns (collectively, the &quot;Indemnified Parties&quot;) from and against any and all claims, demands, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&rsquo; fees and court costs) arising out of or relating to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Your violation of any provision of these Terms, our Privacy Policy, or any other policy or agreement incorporated herein</li>
              <li>Your use or misuse of the Services, including your reliance on any AI-generated output, alert, prescription, or score</li>
              <li>Any data you input into the Services, any device you connect to the Services, or any inaccuracy in data you provide</li>
              <li>Your violation of any applicable law or regulation</li>
              <li>Your violation of any third-party right, including any intellectual property right, right of privacy, or right of publicity</li>
              <li>Any claim that your Feedback or any content you submit to the Services infringes a third party&rsquo;s intellectual property rights</li>
              <li>Any misrepresentation made by you in connection with the Services or these Terms</li>
            </ul>
            <p className="mt-3">The Fit Lens LLC reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of such claims. You agree not to settle any such claim without our prior written consent.</p>
          </section>

          <section id="s19">
            <h2 className="text-2xl font-semibold mb-3">19. Limitation of Liability</h2>
            <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL THE FIT LENS LLC, ITS AFFILIATES, LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES OF ANY KIND, ARISING OUT OF OR IN CONNECTION WITH: (A) YOUR USE OF, OR INABILITY TO USE, THE SERVICES; (B) ANY AI-GENERATED OUTPUT, COACHING PRESCRIPTION, ALERT, SCORE, OR RECOMMENDATION PROVIDED THROUGH THE SERVICES; (C) ANY ACTION OR INACTION YOU TAKE BASED ON INFORMATION RECEIVED FROM THE SERVICES; (D) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS OR ANY PERSONAL DATA STORED THEREIN; (E) ANY INTERRUPTION OR CESSATION OF THE SERVICES; OR (F) ANY CONTENT OR CONDUCT OF ANY THIRD PARTY IN CONNECTION WITH THE SERVICES.</p>
            <p className="mt-3">THIS LIMITATION APPLIES REGARDLESS OF THE LEGAL THEORY ON WHICH THE CLAIM IS BASED, WHETHER BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE OR STRICT LIABILITY), STATUTE, OR ANY OTHER BASIS, AND REGARDLESS OF WHETHER WE WERE ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
            <p className="mt-3">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATING TO THE SERVICES OR THESE TERMS IS LIMITED TO THE GREATER OF: (A) THE TOTAL SUBSCRIPTION FEES ACTUALLY PAID BY YOU TO US IN THE TWELVE (12) CALENDAR MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM; OR (B) FIFTY UNITED STATES DOLLARS ($50.00).</p>
            <p className="mt-3">You acknowledge that the limitation of liability in this Section reflects a reasonable allocation of risk and is a fundamental element of the basis of the bargain between you and us. Without this limitation, we would not be able to offer the Services at the prices offered.</p>
            <p className="mt-3">CALIFORNIA RESIDENTS: If you are a California resident, you waive California Civil Code Section 1542, which provides: &quot;A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS THAT THE CREDITOR OR RELEASING PARTY DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE AND THAT, IF KNOWN BY HIM OR HER, WOULD HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR OR RELEASED PARTY.&quot;</p>
            <p className="mt-3">Some jurisdictions do not allow certain limitations of liability, so some of the above limitations may not apply to you. In such jurisdictions, our liability will be limited to the maximum extent permitted by applicable law.</p>
          </section>

          <section id="s20">
            <h2 className="text-2xl font-semibold mb-3">20. Dispute Resolution and Binding Arbitration</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">20.1 Governing Law</h3>
            <p>Except as otherwise required by applicable law, these Terms and all disputes, claims, or controversies arising out of or relating to them or to the Services (collectively, &quot;Disputes&quot;) shall be governed by and construed in accordance with the laws of the State of Arizona, without regard to its conflict of law principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">20.2 Informal Dispute Resolution</h3>
            <p>Before initiating any formal legal proceeding, you agree to attempt to resolve any Dispute informally. To initiate informal resolution, contact us at <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a> with the subject line &quot;Dispute Notice&quot; and describe the nature of your dispute, the relief you are seeking, and your contact information. We will attempt to resolve the Dispute through good-faith negotiation within thirty (30) days of receiving your notice. If the Dispute is not resolved within thirty (30) days of submission (or such extended period as you and we mutually agree in writing), either party may proceed to formal arbitration as set forth below. Completion of this informal dispute resolution process is a prerequisite to initiating arbitration.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">20.3 Binding Individual Arbitration</h3>
            <p>YOU AND THE FIT LENS LLC AGREE THAT ALL DISPUTES THAT CANNOT BE RESOLVED THROUGH INFORMAL DISPUTE RESOLUTION UNDER SECTION 20.2 WILL BE RESOLVED THROUGH FINAL AND BINDING INDIVIDUAL ARBITRATION, RATHER THAN IN COURT, EXCEPT AS PROVIDED IN SECTIONS 20.5 AND 20.6.</p>
            <p className="mt-3">The arbitration will be administered by the American Arbitration Association (&quot;AAA&quot;) under its Consumer Arbitration Rules, which are available at www.adr.org or by calling the AAA at 1-800-778-7879. The arbitration will be conducted <Placeholder>IN PHOENIX, ARIZONA, OR BY REMOTE MEANS IF MUTUALLY AGREED</Placeholder>. The arbitrator will be selected pursuant to the AAA Consumer Arbitration Rules.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">20.4 Arbitration Fees and Costs</h3>
            <p>You will be responsible for paying the AAA&rsquo;s initial filing fee (currently $200 for claims up to $10,000 under the AAA Consumer Arbitration Rules). The Fit Lens LLC will pay all remaining AAA administrative fees, arbitrator compensation, and other arbitration costs. If the arbitrator determines that your claim was frivolous or brought in bad faith, the arbitrator may award us our fees and costs. Each party is responsible for its own attorney fees, except as otherwise awarded by the arbitrator pursuant to applicable law.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">20.5 Opt-Out Right</h3>
            <p>You have the right to opt out of this arbitration agreement. To opt out, you must send written notice of your decision to opt out to <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a> with the subject line &quot;Arbitration Opt-Out&quot; within thirty (30) days of the date you first agree to these Terms. Your notice must include your full name, email address associated with your account, and a clear statement that you are opting out of the arbitration agreement. If you opt out of arbitration, all Disputes will be resolved in accordance with Section 20.7 (Judicial Forum). Opting out of arbitration does not affect any other provision of these Terms.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">20.6 Class Action Waiver</h3>
            <p>YOU AND THE FIT LENS LLC AGREE THAT EACH PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, COLLECTIVE, CONSOLIDATED, OR REPRESENTATIVE ACTION OR PROCEEDING. THE ARBITRATOR MAY NOT CONSOLIDATE CLAIMS OF MORE THAN ONE PERSON, MAY NOT PRESIDE OVER ANY FORM OF A REPRESENTATIVE OR CLASS PROCEEDING, AND MAY AWARD RELIEF ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF WARRANTED BY THAT PARTY&rsquo;S INDIVIDUAL CLAIM.</p>
            <p className="mt-3">If a court of competent jurisdiction determines that the class action waiver in this Section 20.6 is unenforceable, then the entirety of this arbitration agreement will be null and void, and all Disputes will be resolved in a court of competent jurisdiction in accordance with Section 20.7.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">20.7 Exceptions to Arbitration</h3>
            <p>Notwithstanding the foregoing, either party may, without first engaging in the informal dispute resolution process:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Bring an individual claim in a small claims court in the State of Arizona or the county in which you reside, provided the claim qualifies for small claims court under applicable rules and the amount in controversy is within the small claims court&rsquo;s jurisdictional limits</li>
              <li>Seek emergency injunctive or other equitable relief from a court of competent jurisdiction to prevent or restrain the actual or threatened infringement, misappropriation, or violation of intellectual property rights, trade secrets, or confidential information</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">20.8 Judicial Forum</h3>
            <p>If arbitration is found unenforceable or inapplicable to a particular Dispute, or if you have validly opted out pursuant to Section 20.5, you and The Fit Lens LLC agree that any judicial proceeding (other than small claims court matters described in Section 20.7) will be brought exclusively in the federal or state courts of competent jurisdiction located in Maricopa County, Arizona. You and The Fit Lens LLC each irrevocably consent to the exclusive personal jurisdiction and venue of those courts for such purposes and waive any objection on the grounds of improper venue, inconvenient forum, or lack of jurisdiction.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">20.9 Jury Trial Waiver</h3>
            <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AND THE FIT LENS LLC EACH WAIVE THE RIGHT TO A JURY TRIAL WITH RESPECT TO ANY DISPUTE THAT IS SUBJECT TO JUDICIAL RESOLUTION UNDER THESE TERMS.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">20.10 Limitation on Time to Bring Claims</h3>
            <p>Any claim or cause of action arising out of or related to your use of the Services or these Terms must be filed within one (1) year after such claim or cause of action first arose, regardless of any statute of limitations to the contrary. Claims not filed within this period are permanently barred.</p>
          </section>

          <section id="s21">
            <h2 className="text-2xl font-semibold mb-3">21. Electronic Communications Consent</h2>
            <p>By creating an account and using the Services, you consent to receiving communications from us electronically, including by email, push notification, in-app message, and SMS. You agree that all agreements, notices, disclosures, and other communications we provide to you electronically satisfy any legal requirement that such communications be in writing, to the fullest extent permitted by applicable law.</p>
            <p className="mt-3">We may contact you to verify your account information, provide service-related notices, send billing communications, or request additional information. If you fail to respond to a verification request within fourteen (14) days of receipt, we reserve the right to suspend, restrict, or terminate your access to the Services until you provide the requested information.</p>
            <p className="mt-3">You may manage your email communication preferences through the unsubscribe link in any marketing email we send, or through your account settings. You may manage push notification and SMS preferences through your Android device settings. We will continue to send you transactional and service-related communications regardless of your marketing communication preferences.</p>
          </section>

          <section id="s22">
            <h2 className="text-2xl font-semibold mb-3">22. Geographic Restrictions</h2>
            <p>The Services are operated by The Fit Lens LLC in the United States and are currently intended for users located in the United States. We make no representation or warranty that the Services are appropriate, available, or compliant with the laws of any jurisdiction outside the United States. If you access the Services from outside the United States, you do so on your own initiative and are solely responsible for compliance with all applicable local laws.</p>
            <p className="mt-3">If we become aware that you are accessing the Services from a jurisdiction where doing so is prohibited or requires additional regulatory compliance that we have not implemented, we reserve the right to restrict or terminate your access.</p>
          </section>

          <section id="s23">
            <h2 className="text-2xl font-semibold mb-3">23. General Terms</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">23.1 Entire Agreement</h3>
            <p>These Terms, together with our Privacy Policy and any other policies or agreements expressly incorporated by reference herein, constitute the entire agreement between you and The Fit Lens LLC with respect to your use of the Services and supersede all prior and contemporaneous agreements, representations, warranties, and understandings, whether oral or written, relating to the subject matter hereof.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">23.2 Modifications</h3>
            <p>The Fit Lens LLC reserves the right to modify these Terms at any time. We will notify you of material modifications by: (a) updating the effective date at the top of this document; (b) posting a notice within the Services; or (c) sending you an email notification to the address associated with your account. Your continued use of the Services after the effective date of any modification constitutes your acceptance of the modified Terms. If you do not agree to the modified Terms, you must discontinue use of the Services and close your account.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">23.3 Severability</h3>
            <p>If any provision of these Terms is held by a court of competent jurisdiction to be invalid, illegal, unenforceable, or void in any respect, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms will continue in full force and effect. The invalidity of any provision will not affect the validity or enforceability of any other provision.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">23.4 No Waiver</h3>
            <p>No failure or delay by The Fit Lens LLC in exercising any right, power, or remedy under these Terms will operate as a waiver of that right, power, or remedy. No single or partial exercise of any right, power, or remedy will preclude any other or further exercise thereof or the exercise of any other right, power, or remedy. A waiver of any particular right will not be deemed a waiver of any other right.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">23.5 Assignment</h3>
            <p>You may not assign, delegate, transfer, or sublicense any of your rights or obligations under these Terms without our prior written consent. Any attempted assignment without such consent is null and void. The Fit Lens LLC may freely assign, transfer, or delegate these Terms and any of its rights and obligations hereunder, including in connection with a merger, acquisition, sale of assets, reorganization, or other corporate transaction, without your consent. These Terms will be binding upon and inure to the benefit of the parties and their respective permitted successors and assigns.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">23.6 Notices</h3>
            <p>All notices, requests, demands, or other communications to The Fit Lens LLC under these Terms must be submitted by email to: <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a>. Notices from us to you will be provided through the Services, by email to the address associated with your account, or by other reasonable means. Notices are effective upon delivery.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">23.7 Force Majeure</h3>
            <p>The Fit Lens LLC will not be liable for any failure or delay in performance of its obligations under these Terms arising from causes beyond its reasonable control, including acts of God, natural disasters, pandemic or epidemic, war, terrorism, civil unrest, governmental action, power failures, telecommunications failures, or internet outages.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">23.8 Contact Information</h3>
            <p>If you have any questions, concerns, or complaints regarding these Terms, please contact us at:</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">The Fit Lens LLC</h3>
            <p>Email: <a href="mailto:support@thefitlens.com" className="text-blue-600 underline">support@thefitlens.com</a></p>
            <p className="mt-3">Website: thefitlens.com</p>
          </section>

        </div>
      </article>
    </main>
  );
}
