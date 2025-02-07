import aboutUs from "../../assests/about-us.png";

const AboutUs = () => (
  <div>
    {/* Header Section */}
    <div className="md:flex justify-between items-center px-10 xl:px-56 py-10">
      <div className="text-2xl lg:text-4xl font-black text-center">ABOUT US</div>
      <img className="h-[250px] lg:h-[384px] w-auto" src={aboutUs} alt="About Us" />
    </div>

    {/* About Us Section */}
    <div className="bg-[#D4B3F7] px-5 lg:px-10 pt-8 lg:pt-12 pb-10 lg:pb-14 flex flex-col gap-y-4">
      <div className="text-lg lg:text-xl leading-relaxed">
        <strong>Cashex BiteBox – Smart & Flexible Food Ordering for Schools & Colleges.</strong> <br />
        Cashex BiteBox is a seamless food ordering and payment solution integrated into the Cashex platform, designed for schools, colleges, and partnered institutions. 
        It enables students to order meals and snacks from cafeterias and authorized vendors, either through cashless transactions using a secure student code or by placing cash orders.<br />
        Parents (for school students) and students (in colleges) can track spending, set purchase limits, and enjoy a hassle-free experience.
      </div>

      {/* Key Features */}
      <div className="text-xl lg:text-2xl font-bold underline underline-offset-8">Key Features:</div>
      <div className="text-lg lg:text-xl flex flex-col gap-y-1">
        <div>✅ <strong>Designed for Schools & Colleges:</strong> Available in partnered institutions for a smooth and efficient food ordering process.</div>
        <div>✅ <strong>Cashless & Cash Payment Options:</strong> Students can pay via a secure Cashex code or in cash at the vendor.</div>
        <div>✅ <strong>Pre-Orders:</strong> Skip long lines by ordering meals in advance.</div>
        <div>✅ <strong>Parental & Self-Controlled Spending:</strong> Parents monitor school students' purchases, while college students manage their own limits.</div>
        <div>✅ <strong>Varied Meal Options:</strong> Available from cafeterias and authorized vendors.</div>
        <div>✅ <strong>Special Deals & Meal Plans:</strong> Exclusive discounts and meal plans tailored for students.</div>
      </div>
    </div>
  </div>
);

export default AboutUs;
