import React from "react";
import { styles } from "../styles/style";

const Policy = () => {
  return (
    <div>
      <div className="w-[95%] 800px:w-[92%] m-auto py-2 dark:text-white text-black px-3">
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Conditions
        </h1>

        <section className="py-2 text-[16px] font-Poppins leading-8">
          <p className="mb-4">
            By accessing and using the Elearning platform, you agree to comply
            with and be bound by the following terms and conditions. These terms
            apply to all users of the site, including visitors, registered
            members, and contributors.
          </p>

          <p className="mb-4">
            <strong>1. User Responsibilities:</strong> You agree to use the
            platform for lawful purposes only and in a way that does not
            infringe the rights of, restrict, or inhibit anyone else’s use and
            enjoyment of the platform.
          </p>

          <p className="mb-4">
            <strong>2. Account Security:</strong> You are responsible for
            maintaining the confidentiality of your account credentials and for
            all activities that occur under your account.
          </p>

          <p className="mb-4">
            <strong>3. Content Ownership:</strong> All content provided on this
            platform is owned by Elearning or its content creators. You may not
            reproduce, distribute, or display content without proper permission.
          </p>

          <p className="mb-4">
            <strong>4. Course Participation:</strong> By enrolling in any course,
            you agree to abide by the course rules and respect the learning
            environment. Any misconduct may result in suspension or removal.
          </p>

          <p className="mb-4">
            <strong>5. Changes to Terms:</strong> Elearning reserves the right to
            update or modify these terms at any time. Continued use of the
            platform following any changes constitutes your acceptance of the
            revised terms.
          </p>

          <p className="mt-6">
            If you have any questions about these terms, please contact our
            support team.
          </p>
        </section>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Policy;
