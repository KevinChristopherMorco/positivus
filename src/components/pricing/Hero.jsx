import React from "react";
import SectionContainer from "../containers/SectionContainer";
import Darkbutton from "../buttons/DarkButton";
import DarkOutlineButton from "../buttons/DarkOutlineButton";
import { RiCheckLine } from "@remixicon/react";

const PricingCard = ({ list, planName, planPrice, isFeatured }) => {
  return (
    <div
      className={`${isFeatured ? "bg-[var(--dark-accent)] text-white" : ""} flex w-full flex-col gap-5 rounded-[1.5rem] border border-b-4 border-black p-6 md:col-span-2 md:last:col-start-2 md:last:justify-self-center xl:col-span-1 xl:last:col-start-3 xl:last:justify-self-start`}
    >
      <div className="grid place-items-start justify-items-start gap-y-5">
        <div className="flex w-full items-center justify-between">
          <h4 className="text-xl font-bold">{planName}</h4>
          {isFeatured && (
            <div className="rounded-full bg-[var(--green-accent)] px-4 py-1 text-[var(--dark-accent)]">
              <p className="text-sm font-bold">Popular</p>
            </div>
          )}
        </div>
        <p className="text-4xl font-bold">
          {planPrice} <span className="text-sm font-light">/month</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Darkbutton
          dynamicClass={"w-full"}
          text={"Get Started"}
          isFeatured={isFeatured}
        />
        <DarkOutlineButton
          dynamicClass={"w-full"}
          text={"Request a Quote"}
          isFeatured={isFeatured}
        />
      </div>
      <hr className="w-full border border-black" />
      <ul className="flex flex-col gap-3 pr-10">
        {list.map((list, index) => {
          return (
            <li key={index} className="grid grid-cols-[1fr_6fr] items-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--green-accent)]">
                <RiCheckLine className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium">{list}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Hero = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-10">
        <p className="text-4xl font-bold">Pricing</p>
        <p>
          Elevate Your Online Presence: Competitive Pricing for Exceptional
          Results
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-4 xl:grid-cols-3">
        <PricingCard
          planName={"Basic Plan"}
          planPrice={"$500"}
          list={[
            "Website Optimization",
            "Social media setup and management (1 platform)",
            "Monthly Progress Report",
            "Email Support",
            "Basic competitor analysis",
            "Initial SEO audit",
          ]}
        />
        <PricingCard
          planName={"Pro Plan"}
          planPrice={"$1000"}
          list={[
            "Includes all from the Basic Plan",
            "Social media setup and management (up to 3 platforms)",
            "PPC and campaign management",
            "Email and phone support",
            "On-page SEO improvements",
            "Monthly content recommendations",
          ]}
          isFeatured={true}
        />
        <PricingCard
          planName={"Elite Plan"}
          planPrice={"$2000"}
          list={[
            "Includes all from the Pro Plan",
            "Website design and development",
            "Comprehensive SEO strategy",
            "Social media setup and management (up to 5 platforms)",
            "Content marketing strategy and implementation",
            "In-depth analytics and reporting",
          ]}
        />
      </div>
    </SectionContainer>
  );
};

export default Hero;
