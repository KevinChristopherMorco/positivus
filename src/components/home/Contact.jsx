import React from "react";
import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";

import SectionContainer from "../containers/SectionContainer";
import SectionHeading from "../headings/SectionHeading";
import Darkbutton from "../buttons/Darkbutton";

import contacts from "../../assets/images/contacts.png";

const FormInput = ({ label, id, type, placeholder, isRequired, isTextbox }) => {
  return (
    <>
      {isTextbox ? (
        <div className="flex w-full flex-col gap-1 xl:text-lg">
          <label htmlFor={id} className="font-medium">
            {label}
            {isRequired && "*"}
          </label>

          <textarea
            id={id}
            rows="4"
            cols="50"
            className="w-full rounded-lg border border-gray-800 p-3"
            placeholder={placeholder}
          ></textarea>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-1 xl:text-lg">
          <label htmlFor={id} className="font-medium">
            {label}
            {isRequired && "*"}
          </label>
          <input
            type={type}
            id={id}
            className="w-full rounded-lg border border-gray-800 p-3"
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
};

const RadioButton = ({ type, id, name, value, label, isChecked }) => {
  return (
    <div className="flex items-center gap-1 xl:text-lg">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        defaultChecked={isChecked}
        className="cursor-pointer"
      />
      <label
        htmlFor={id}
        className="cursor-pointer text-lg font-medium transition-all hover:font-medium hover:text-green-500"
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const { md, isLargeScreen } = useScreenResponsiveness();

  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:justify-start md:text-start">
        <SectionHeading title={"Contact Us"} />
        <p className="md:w-[40%] xl:text-lg">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <form
        action=""
        className="grid w-full gap-10 bg-white md:relative md:grid-cols-[1.5fr_1fr] md:overflow-hidden md:bg-[#F3F3F3] md:py-5 xl:px-20 2xl:px-40"
      >
        <div>
          <div className="grid w-full gap-6 rounded-2xl bg-[#F3F3F3] px-6 py-8 md:justify-items-start">
            <div className="flex items-center justify-evenly md:gap-5">
              <RadioButton
                type={"radio"}
                id={"hi"}
                name={"action"}
                value={"hi"}
                isChecked={true}
                label={"Say Hi"}
              />
              <RadioButton
                type={"radio"}
                id={"quote"}
                name={"action"}
                value={"quote"}
                label={"Get a Quote"}
              />
            </div>

            <FormInput
              id={"name"}
              label={"Name"}
              type={"text"}
              placeholder={"Name"}
            />
            <FormInput
              id={"email"}
              label={"Email"}
              type={"email"}
              placeholder={"Email"}
              isRequired={true}
            />
            <FormInput
              id={"message"}
              label={"Message"}
              type={"message"}
              placeholder={"Message"}
              isRequired={true}
              isTextbox={true}
            />
          </div>
          <div className="md:px-5">
            <Darkbutton dynamicClass={"w-full"} text={"Send Message"} />
          </div>
        </div>
        {(md || isLargeScreen) && (
          <div className="md:absolute md:-right-[35%] md:top-[50%] md:-translate-y-[50%] lg:-right-[28%] xl:-right-[21%] 2xl:-right-[19%]">
            <img
              src={contacts}
              alt=""
              className="md:w-[500px] xl:w-[550px] 2xl:w-[600px]"
            />
          </div>
        )}
      </form>
    </SectionContainer>
  );
};

export default Contact;
