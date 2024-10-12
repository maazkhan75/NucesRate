"use client";

export default function TermsConditions() {
  const sections = [
    "User Eligibility",
    "Review Guidelines",
    "Content Moderation",
    "Prohibited Conduct",
    "Changes to Terms",
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
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 sm:px-6 lg:px-8 relative w-3/4 z-10">
        <h1 className="text-5xl font-bold text-center mb-6 tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent neon-title">
          Terms & Conditions
        </h1>
        <p className="text-gray-400 text-center mb-12 text-lg ">
          Last Updated September 30, 2024
        </p>

        <div className="space-y-12">
          {/* Sections */}
          <Section title="User Eligibility">
            <p id="User Eligibility">
              Users must sign in using their <strong>@nu.edu.pk</strong> domain
              Google account to submit reviews. Only registered students of
              NUCES (FAST) are allowed to review professors.
            </p>
          </Section>

          <Section title="Review Guidelines">
            <p id="Review Guidelines">
              Users are encouraged to provide honest and constructive feedback.
              However, the use of inappropriate, offensive, or slang language is
              strictly prohibited. Negative reviews are allowed, but they must
              be written in a professional and respectful manner.
            </p>
          </Section>

          <Section title="Content Moderation">
            <p id="Content Moderation">
              All reviews submitted on NUCESHub will be moderated by the
              NUCESHub Moderator Team before being published. Any review that
              violates these terms will be rejected, and users may face
              restrictions on future submissions.
            </p>
          </Section>

          <Section title="Prohibited Conduct">
            <p id="Prohibited Conduct">
              Users must agree to not engage in any form of harassment, misuse
              of language, or personal attacks in their reviews. Violations may
              result in account suspension or removal of review privileges.
            </p>
          </Section>

          <Section title="Changes to Terms">
            <p id="Changes to Terms">
              NUCESHub reserves the right to modify these Terms & Conditions at
              any time. Continued use of the platform after any changes
              constitutes your acceptance of the new terms.
            </p>
          </Section>

          <Section title="Contact Us">
            <p id="Contact Us">
              If you have any questions about these Terms & Conditions, please
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
        <h2 className="text-3xl font-semibold neon-title">
          {title}
        </h2>
      </div>
      <div className="text-gray-300 text-lg leading-relaxed">{children}</div>
    </section>
  );
}
