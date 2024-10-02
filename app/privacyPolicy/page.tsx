"use client";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

export default function Component() {
  const sections = [
    "Information We Collect",
    "How We Use Your Information",
    "Sharing of Information",
    "Security",
    "Contact Us",
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 relative overflow-hidden flex">
      {/* Futuristic mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 sm:px-6 lg:px-8 relative w-3/4 z-10">
        <h1 className="text-5xl font-bold text-center mb-6 tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent neon-title">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-center mb-12 text-lg ">
          Last Updated September 30, 2024
        </p>

        <div className="space-y-12">
          {/* Sections */}
          <Section title="Information We Collect">
            <p id="Information We Collect">
              We collect information you provide directly to us, such as when
              you create or modify your account, request on-demand services,
              contact customer support, or otherwise communicate with us.
            </p>
          </Section>

          <Section title="How We Use Your Information">
            <p id="How We Use Your Information">
              We use the information we collect about you to provide, maintain,
              and improve our services, to develop new ones, and to protect our
              company and our users.
            </p>
            <p>
              Your identity remains anonymous when submitting professor reviews.
              NucesHub ensures that the feedback is secure, providing a safe and
              anonymous platform for students.
            </p>
          </Section>

          <Section title="Sharing of Information">
            <p id="Sharing of Information">
              We may share the information we collect about you as described in
              this policy or as disclosed at the time of collection or sharing,
              including as follows:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>
                With third-party vendors, consultants, and other service
                providers;
              </li>
              <li>
                In response to a request for information if we believe
                disclosure is in accordance with any applicable law, regulation,
                or legal process;
              </li>
              <li>
                If we believe your actions are inconsistent with our user
                agreements or policies, or to protect the rights, property, and
                safety of our company or others;
              </li>
            </ul>
          </Section>

          <Section title="Security">
            <p id="Security">
              We take reasonable measures to help protect information about you
              from loss, theft, misuse, and unauthorized access, disclosure,
              alteration, and destruction.
            </p>
          </Section>

          <Section title="Contact Us">
            <p id="Contact Us">
              If you have any questions about this Privacy Policy, please
              contact us at:
              <br />
              <a
                href="mailto:nuceshub@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                nuceshub@gmail.com
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative">
      <div className="flex items-center mb-4">
        <h2 className="text-3xl font-semibold">{title}</h2>
      </div>
      <div className="text-gray-300 text-lg leading-relaxed">{children}</div>
    </section>
  );
}
