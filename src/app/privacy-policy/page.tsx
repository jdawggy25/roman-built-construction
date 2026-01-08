import { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Roman Built Construction",
  description: `Privacy policy for ${BUSINESS.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[var(--charcoal)] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/70">Last updated: January 2026</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">
          <div className="space-y-8 text-[var(--warm-gray)]">
            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Introduction</h2>
              <p>
                {BUSINESS.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Information We Collect</h2>
              <p>We may collect information about you in a variety of ways:</p>
              <h3 className="text-xl font-semibold text-[var(--charcoal)] mt-4">Personal Data</h3>
              <p>
                When you contact us or request an estimate, we may collect personally identifiable information, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Project details and preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-[var(--charcoal)] mt-4">Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Access times</li>
                <li>Pages viewed</li>
                <li>Referring website addresses</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and provide customer service</li>
                <li>To provide estimates and information about our services</li>
                <li>To communicate with you about projects and services</li>
                <li>To improve our website and services</li>
                <li>To send promotional communications (with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Disclosure of Your Information</h2>
              <p>We may share your information in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies, web beacons, and other tracking technologies to collect information about your browsing activities. You can set your browser to refuse cookies, but some features of our website may not function properly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Your California Privacy Rights (CCPA)</h2>
              <p>
                If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to know what personal information we collect</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>The right to non-discrimination for exercising your privacy rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4">
                <strong>{BUSINESS.name}</strong><br />
                Phone: {BUSINESS.phoneFormatted}<br />
                Email: {BUSINESS.email}<br />
                {BUSINESS.address.full}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
