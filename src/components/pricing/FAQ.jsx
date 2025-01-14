import React, { useState } from "react";
import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";

const FAQCard = ({ cardTitle, cardDescription }) => {
  const [isOpen, setIsOpen] = useState();
  return (
    <div
      className={`${isOpen ? "bg-[var(--green-accent)]" : "bg-[var(--gray-accent)]"} flex w-full flex-col gap-5 rounded-[1.5rem] border border-b-8 border-black p-6`}
    >
      <div>
        <div className="grid grid-cols-[1fr_3fr_1fr]">
          <div className="col-span-2 col-start-1 flex items-center gap-6 font-bold">
            <p className="md:text-xl">{cardTitle}</p>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="col-start-3 cursor-pointer place-self-center justify-self-center md:justify-self-end"
          >
            <img
              src={isOpen ? minus : plus}
              alt=""
              className="h-8 w-8 md:h-10 md:w-10"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <hr className="border border-black" />
          <div>
            <p className="xl:text-lg">{cardDescription}</p>
          </div>
        </>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-start md:text-start">
        <SectionHeading title={"Frequently Asked Questions"} />
      </div>
      <div className="grid w-full gap-y-5">
        <FAQCard
          cardTitle={"Are there any additional fees or charges that may apply?"}
          cardDescription={
            "No, we believe in transparent pricing. All costs are outlined upfront, and there are no hidden fees or surprise charges."
          }
        />

        <FAQCard
          cardTitle={"Can I change or cancel my plan at any time?"}
          cardDescription={
            "Yes, you can change or cancel your plan at any time. We offer flexibility to ensure you're satisfied with the service."
          }
        />

        <FAQCard
          cardTitle={"Do you offer a free trial or consultation?"}
          cardDescription={
            "Yes, we offer a free consultation to understand your needs and recommend the best plan. Depending on the service, a free trial may also be available."
          }
        />

        <FAQCard
          cardTitle={"How do you bill and invoice your clients?"}
          cardDescription={
            "We bill our clients monthly or annually, depending on the plan. Invoices are sent at the start of each billing period, and payments can be made via credit card or bank transfer."
          }
        />

        <FAQCard
          cardTitle={"How are your services guaranteed to deliver results?"}
          cardDescription={
            "We use proven strategies and a dedicated team of experts to ensure results. We track performance and adjust our approach as necessary to meet your goals."
          }
        />

        <FAQCard
          cardTitle={
            "Do you offer contract-based or monthly retainer-based pricing?"
          }
          cardDescription={
            "We offer both contract-based and monthly retainer options, depending on the needs and preferences of our clients. We can discuss the best option for you during the consultation."
          }
        />
      </div>
    </SectionContainer>
  );
};

export default FAQ;
