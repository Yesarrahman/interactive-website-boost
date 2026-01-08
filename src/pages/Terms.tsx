import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by these Terms of 
                Service. If you do not agree to these terms, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Services</h2>
              <p>
                I provide web development, AI automation, and e-commerce solutions. The specific scope, 
                deliverables, and terms for each project will be outlined in a separate agreement or 
                proposal before work begins.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is my property 
                and is protected by intellectual property laws. You may not reproduce, distribute, or 
                create derivative works without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Project Work</h2>
              <p>For client projects:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Payment terms will be agreed upon before project commencement</li>
                <li>Intellectual property rights transfer upon full payment</li>
                <li>Revisions and scope changes may incur additional charges</li>
                <li>Project timelines are estimates and may vary based on complexity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
              <p>
                I shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages arising from your use of this website or services. My total liability shall not 
                exceed the amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Disclaimer</h2>
              <p>
                This website and services are provided "as is" without warranties of any kind, either 
                express or implied. I do not guarantee that the website will be error-free or uninterrupted.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Changes to Terms</h2>
              <p>
                I reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting to this website. Your continued use constitutes acceptance 
                of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact</h2>
              <p>
                For questions about these Terms of Service, please contact me at{' '}
                <a href="mailto:yesarrahman@gmail.com" className="text-primary hover:underline">
                  yesarrahman@gmail.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
