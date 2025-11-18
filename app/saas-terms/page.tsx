export default function SaasTermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4 text-foreground">SaaS Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-6">Last updated: 18 November 2025</p>

      <div className="space-y-10 text-foreground">
        <section className="space-y-4">
          <p>
            These Terms govern your use of the McCaigs AI Software-as-a-Service (SaaS) platform. These
            Terms complement, and operate alongside, our general Terms &amp; Conditions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Subscription &amp; Access</h2>
          <p>Access to the SaaS platform is provided on a subscription basis.</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Subscriptions may be monthly, annual, or otherwise stated.</li>
            <li>Access continues until cancelled or terminated.</li>
            <li>Subscription fees are non-refundable unless required by UK consumer law.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. Account Responsibilities</h2>
          <p>You must:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Keep login details confidential</li>
            <li>Ensure all users under your organisation comply with these Terms</li>
            <li>Inform us immediately of any unauthorised access</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. Licence to Use the Service</h2>
          <p>
            You are granted a limited, non-exclusive, non-transferable licence to use the SaaS platform
            for lawful purposes.
          </p>
          <p>You must not:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Share credentials</li>
            <li>Copy, modify, or reverse-engineer the Service</li>
            <li>Use the Service to create competing products</li>
            <li>Allow unauthorised users to access your subscription</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Service Availability</h2>
          <p>
            We aim for high uptime but do not guarantee uninterrupted availability. Maintenance, updates,
            or unforeseen issues may result in temporary downtime.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Data Handling</h2>
          <p>Data submitted into the SaaS platform may be processed for:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>AI model responses</li>
            <li>Security</li>
            <li>Improving quality and reliability</li>
          </ul>
          <p>
            We do not train models on identifiable customer data without explicit consent. All data
            handling complies with UK GDPR and our Privacy Policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">6. Payment Terms</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Fees must be paid in advance</li>
            <li>Late or failed payments may result in suspended access</li>
            <li>We may adjust pricing with reasonable notice</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">7. Cancellation</h2>
          <p>You may cancel your subscription at any time. Access remains until the end of the current billing cycle.</p>
          <p>We may terminate access where:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Terms are breached</li>
            <li>Illegal or harmful activity is detected</li>
            <li>Non-payment occurs</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">8. Customer Data</h2>
          <p>Upon cancellation:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>You may request export of stored data</li>
            <li>We retain data only as required legally or operationally</li>
            <li>We may anonymise usage data for long-term analysis</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">9. Limitation of Liability</h2>
          <p>We are not liable for:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Loss of profits</li>
            <li>Data loss</li>
            <li>Interruptions</li>
            <li>Outcomes based on AI-generated output</li>
          </ul>
          <p>Our maximum liability is capped at fees paid in the preceding 12 months.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">10. Contact</h2>
          <p>
            All SaaS enquiries should be submitted via: <a href="https://mccaigs.ai/contact" className="text-primary hover:underline">https://mccaigs.ai/contact</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
