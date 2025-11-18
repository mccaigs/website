export default function CookiesPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4 text-foreground">Cookie Policy</h1>
      <p className="text-sm text-muted-foreground mb-6">Last updated: 18 November 2025</p>

      <div className="space-y-10 text-foreground">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            This Cookie Policy explains how McCaigs AI uses cookies and similar tracking technologies in
            compliance with PECR, UK GDPR, and relevant Scots Law. By continuing to use our website, you
            consent to the use of non-essential cookies where applicable.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help us:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Improve performance</li>
            <li>Analyse usage</li>
            <li>Deliver personalised experiences</li>
            <li>Remember your preferences</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. Types of Cookies We Use</h2>
          <div className="space-y-3">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">a. Essential Cookies (Required)</h3>
              <p>These ensure basic site functionality:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Security</li>
                <li>Session management</li>
                <li>Login handling</li>
              </ul>
              <p>You cannot opt out of these.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">b. Performance &amp; Analytics Cookies</h3>
              <p>Used to measure website usage:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Page views</li>
                <li>User behaviour</li>
                <li>Error detection</li>
                <li>Aggregated analytics (e.g. Google Analytics)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">c. Functional Cookies</h3>
              <p>Used to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Remember preferences</li>
                <li>Save settings</li>
                <li>Improve user experience</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">d. Marketing &amp; Advertising Cookies</h3>
              <p>Used only where permission is granted.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Third-Party Cookies</h2>
          <p>We may use trusted third-party services such as:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Google Analytics</li>
            <li>Stripe</li>
            <li>Cloudflare</li>
            <li>Meta Pixel (if marketing enabled)</li>
          </ul>
          <p>These providers may place their own cookies. You should review their policies separately.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Managing Cookies</h2>
          <p>You may:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Adjust browser settings</li>
            <li>Reject non-essential cookies in our cookie banner</li>
            <li>Delete cookies manually at any time</li>
          </ul>
          <p>Disabling cookies may affect website performance.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">6. Changes to This Cookie Policy</h2>
          <p>We may update this policy from time to time. Changes will be reflected in the “Last Updated” date.</p>
          <p>
            For questions, please contact us via: <a href="https://mccaigs.ai/contact" className="text-primary hover:underline">https://mccaigs.ai/contact</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
