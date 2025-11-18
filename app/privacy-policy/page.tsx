import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How McCaigs AI collects, uses, and protects information across our products and websites.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-6 leading-relaxed">
      <header>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: 18 November 2025</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Introduction</h2>
        <p>
          McCaigs AI (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), owned and operated by McCaigs Group Ltd, is committed to protecting your privacy and handling your personal data responsibly. This Privacy Policy explains how we collect, use, store, and safeguard your information in compliance with:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>UK GDPR</li>
          <li>Data Protection Act 2018</li>
          <li>Privacy and Electronic Communications Regulations (PECR)</li>
          <li>Relevant Scots Law</li>
        </ul>
        <p>
          By using our website or Services, you agree to the data practices described in this Policy. For questions or data-related concerns, please contact us via: <a href="https://mccaigs.ai/contact" className="text-primary hover:underline">https://mccaigs.ai/contact</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Data We Collect</h2>
        <p>We may collect the following categories of personal data:</p>
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-medium">a. Information You Provide Directly</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Name and contact details</li>
              <li>Account login information</li>
              <li>Billing or payment details</li>
              <li>Support requests and communication history</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">b. Automatically Collected Data</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>IP address and approximate geolocation</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages viewed and website navigation behaviour</li>
              <li>Cookies and similar tracking technologies (see Cookie Policy)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">c. AI Interaction Data</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Prompts, queries, uploaded content or files</li>
              <li>Usage patterns and interaction logs</li>
              <li>Feedback or ratings of outputs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">d. Payment Information</h3>
            <p className="text-muted-foreground">
              Handled securely by third-party providers such as Stripe or PayPal. We do not store raw card details.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. How We Use Your Personal Data</h2>
        <p>We use your data for the following purposes:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>To provide and maintain our AI services</li>
          <li>To create and manage user accounts</li>
          <li>To process payments and subscriptions</li>
          <li>To improve model accuracy, reliability, and safety</li>
          <li>To ensure compliance with safety, legal, and regulatory obligations</li>
          <li>To analyse usage for service improvements</li>
          <li>To respond to enquiries submitted through the contact page</li>
          <li>To detect fraud and security threats</li>
        </ul>
        <p>We do not use your personal data for automated decision-making that produces legal or significant effects.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. Lawful Basis for Processing</h2>
        <p>We process personal data under the following lawful bases:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Contract &ndash; to deliver the Services you have requested</li>
          <li>Consent &ndash; where you opt into cookies or marketing</li>
          <li>Legitimate interests &ndash; service improvement, fraud prevention</li>
          <li>Legal obligation &ndash; compliance with UK law</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. Sharing Your Data</h2>
        <p>We may share personal data with:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Service providers (hosting, analytics, payment processors)</li>
          <li>Legal authorities where required by law</li>
          <li>Internal company entities within McCaigs Group Ltd</li>
        </ul>
        <p>We do not sell personal data to third parties. Where data is transferred outside the UK, we ensure adequate protection such as Standard Contractual Clauses (SCCs).</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. Data Retention</h2>
        <p>We retain personal data only for as long as necessary:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Account data: while your account remains active</li>
          <li>Billing records: 6+ years (legal requirement)</li>
          <li>AI interaction logs: anonymised or deleted after operational use</li>
          <li>Contact forms: retained only until resolved</li>
        </ul>
        <p>You may request deletion at any time (see Section 8).</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. Data Security</h2>
        <p>We implement technical and organisational measures including:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Encryption</li>
          <li>Access restrictions</li>
          <li>Secure servers</li>
          <li>Regular audits</li>
          <li>AI safety monitoring</li>
        </ul>
        <p>No system is fully secure, but we work to industry standard practices.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. Your Rights (UK GDPR)</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Access your data</li>
          <li>Rectify inaccurate data</li>
          <li>Request erasure (&ldquo;right to be forgotten&rdquo;)</li>
          <li>Restrict processing</li>
          <li>Object to processing</li>
          <li>Data portability</li>
          <li>Withdraw consent</li>
          <li>Lodge a complaint with the UK ICO (Information Commissioner&rsquo;s Office)</li>
        </ul>
        <p>
          To exercise your rights, contact us via: <a href="https://mccaigs.ai/contact" className="text-primary hover:underline">https://mccaigs.ai/contact</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9. Children&rsquo;s Privacy</h2>
        <p>
          Our Services are not intended for children under 13 without parental supervision. We do not knowingly collect data from children without lawful grounds.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. Changes to This Policy</h2>
        <p>
          We may revise this Privacy Policy from time to time. Material changes will be communicated, and the &ldquo;Last Updated&rdquo; date will reflect amendments.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">11. Contact</h2>
        <p>
          All privacy-related communication must be submitted via our contact page: <a href="https://mccaigs.ai/contact" className="text-primary hover:underline">https://mccaigs.ai/contact</a>.
        </p>
      </section>
    </article>
  );
}
