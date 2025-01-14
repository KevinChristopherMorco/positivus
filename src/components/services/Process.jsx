import React from "react";
import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";
import { RiGeminiFill } from "@remixicon/react";

import star from "../../assets/images/service/gemini-fill.png";

const ProcessCard = ({ number, title, description }) => {
  return (
    <div className="grid grid-cols-[1fr_4fr] rounded-[1.5rem] bg-[var(--gray-accent)] px-5 py-8 md:grid-cols-[1fr_5fr] md:gap-x-8">
      {/* <div className="bg-[url('assets/images/service/gemini-fill.png')] bg-contain bg-no-repeat">
        <p className="text-3xl text-[var(--green-accent)] md:place-self-center md:text-6xl">
          {number}
        </p>
      </div> */}

      <p className="text-3xl text-[var(--green-accent)] md:place-self-center md:text-6xl">
        {number}
      </p>

      <div className="flex flex-col gap-4">
        <p className="text-2xl font-semibold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-start md:text-start">
        <SectionHeading title={"How we Work: SEO Process"} />
        <p className="md:w-[80%] xl:text-lg">
          Our step-by-step SEO process ensures your website ranks
          higher,attracts more traffic and drive lasting results.
        </p>
      </div>

      <div className="grid gap-6">
        <ProcessCard
          number={"01"}
          title={"Website Audit & Analysis"}
          description={
            "We begin by conducting a comprehensive audit to identify areas for improvement, Including technical Issues, content quality and keyword opportunities"
          }
        />
        <ProcessCard
          number={"02"}
          title={"Keyword Research & Strategy"}
          description={
            "Our team researches the most relevant and high-impact keywords for your business, ensuring that we target terms that drive qualified traffic"
          }
        />
        <ProcessCard
          number={"03"}
          title={"On-page Optimization"}
          description={
            "We optimize your website's structure, meta tags, and content to make it search engine-friendly, improving your visibility and relevance."
          }
        />
        <ProcessCard
          number={"04"}
          title={"Content Creation & Optimization"}
          description={
            "High-quality content is key to SEO. We create or refine content that engages your audience while aligning with search engine algorithms."
          }
        />
        <ProcessCard
          number={"05"}
          title={"Link Building"}
          description={
            "We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your domain authority and search rankings."
          }
        />
        <ProcessCard
          number={"06"}
          title={"Monitoring and Reporting"}
          description={
            "We continously monitor performance, track rankings, and provide detailed reports, making data-driven adjustments to maintain and improve your results."
          }
        />
      </div>
    </SectionContainer>
  );
};

export default Process;
