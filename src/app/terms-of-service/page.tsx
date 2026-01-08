import { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | Roman Built Construction",
  description: `Terms of service for ${BUSINESS.name}. Read our terms and conditions for using our website and services.`,
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-[var(--charcoal)] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/70">Last updated: January 2026</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">
          <div className="space-y-8 text-[var(--warm-gray)]">
            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Acceptance of Terms</h2>
              <p>
                By accessing or using the {BUSINESS.name} website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Use License</h2>
              <p>
                Permission is granted to temporarily view the materials (information or software) on {BUSINESS.name}&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Services</h2>
              <p>
                {BUSINESS.name} provides construction and remodeling services throughout San Diego County. All services are provided under separate written contracts that outline specific terms, scope of work, pricing, and warranties. These Terms of Service govern your use of our website only; any construction services will be governed by a separate construction contract.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Estimates and Quotes</h2>
              <p>
                Estimates and quotes provided through this website or in person are preliminary and non-binding. Final pricing and scope of work will be determined through a formal contract process. Estimates may be subject to change based on site conditions, material costs, and other factors discovered during detailed assessment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Disclaimer</h2>
              <p>
                The materials on {BUSINESS.name}&apos;s website are provided on an &quot;as is&quot; basis. {BUSINESS.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                Further, {BUSINESS.name} does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Limitations</h2>
              <p>
                In no event shall {BUSINESS.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {BUSINESS.name}&apos;s website, even if {BUSINESS.name} or a {BUSINESS.name} authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Accuracy of Materials</h2>
              <p>
                The materials appearing on {BUSINESS.name}&apos;s website could include technical, typographical, or photographic errors. {BUSINESS.name} does not warrant that any of the materials on its website are accurate, complete or current. {BUSINESS.name} may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Links</h2>
              <p>
                {BUSINESS.name} has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by {BUSINESS.name} of the site. Use of any such linked website is at the user&apos;s own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Modifications</h2>
              <p>
                {BUSINESS.name} may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the State of California and you irrevocably submit to the exclusive jurisdiction of the courts in San Diego County, California.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Licensing</h2>
              <p>
                {BUSINESS.name} is a licensed general contractor in the State of California. License information: {BUSINESS.license}. We are bonded and carry comprehensive general liability and workers&apos; compensation insurance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[var(--charcoal)]">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
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
