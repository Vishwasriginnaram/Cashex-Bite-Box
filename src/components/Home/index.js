import appStore from "../../assests/app-store.png";
import googlePlay from "../../assests/google-play.png";
import people from "../../assests/people.png";
import icon1 from "../../assests/icon1.png";
import icon2 from "../../assests/icon2.png";
import icon3 from "../../assests/icon3.png";
import icon4 from "../../assests/icon4.png";
import subImage1 from "../../assests/sub-image1.png";
import subImage2 from "../../assests/sub-image2.png";
import subImage3 from "../../assests/sub-image3.png";

const Home = () => (
  <div>
    {/* Hero Section */}
    <div className="bg-[#D4B3F7] flex flex-col md:flex-row justify-center gap-x-20 pt-8 pb-5 md:py-10 items-center">
      <div className="flex flex-col items-center gap-y-2 text-center">
        <div className="text-2xl lg:text-4xl font-bold">FROM QUEUE TO QUICK</div>
        <div className="text-lg md:text-xl font-medium max-w-xs md:max-w-3xl">
          Smart and Cashless food ordering for schools and colleges
        </div>
        <div className="flex items-center gap-x-6 md:gap-x-9">
          <img className="h-12 md:h-14 w-auto" src={googlePlay} alt="Google Play" />
          <img className="h-10 md:h-12 w-auto" src={appStore} alt="App Store" />
        </div>
      </div>
      <div>
        <img className="h-[300px] lg:h-[400px] w-auto" src={people} alt="People Illustration" />
      </div>
    </div>

    {/* Features Section */}
    <div className="bg-white flex flex-col gap-y-4 md:flex-row justify-between md:items-center px-6 md:px-10 py-6">
      <div className="flex items-center gap-x-2">
        <img className="h-11 w-auto" src={icon1} alt="Cashless Payments" />
        <div className="text-lg md:text-sm lg:text-xl font-medium">Cashless Payments</div>
      </div>
      <div className="flex items-center gap-x-2">
        <img className="h-11 w-auto" src={icon2} alt="Pre-Orders" />
        <div className="text-lg md:text-sm lg:text-xl font-medium">Pre-Orders</div>
      </div>
      <div className="flex items-center gap-x-2">
        <img className="h-11 w-auto" src={icon3} alt="Varied Meal Options" />
        <div className="text-lg md:text-sm lg:text-xl font-medium">Varied Meal Options</div>
      </div>
      <div className="flex items-center gap-x-2">
        <img className="h-11 w-auto" src={icon4} alt="Special Deals & Meal Plan" />
        <div className="text-lg md:text-sm lg:text-xl font-medium">Special Deals & Meal Plan</div>
      </div>
    </div>

    {/* Offer Section */}
    <div className="bg-[#D4B3F7] pt-10 pb-20 flex flex-col justify-center items-center px-3 gap-y-3 md:gap-y-5">
      <div className="text-xl lg:text-2xl text-[#64308E]">Don’t panic</div>
      <div className="text-[#FBFBFF] font-bold text-2xl lg:text-4xl">What we offer for you</div>
      <div className="text-lg lg:text-xl lg:max-w-5xl text-center">
        Seamlessly integrated into Cashex, BiteBox enables students to order food via a secure code or cash.
        Parents and students can track spending, set limits, and enjoy a hassle-free experience.
      </div>

      {/* Sub-Images Section */}
      <div className="bg-white md:flex justify-between items-center rounded-3xl mt-5 gap-x-10 lg:gap-x-32 px-12 py-4 lg:py-8 border-2 border-[#000000]">
        <img className="h-[250px] lg:h-[320px] xl:h-[450px] w-auto" src={subImage1} alt="Shop Every Store, in One App" />
        <img className="h-[250px] lg:h-[320px] xl:h-[450px] w-auto" src={subImage2} alt="All Your Favorites, Just One Click Away" />
        <img className="h-[250px] lg:h-[320px] xl:h-[450px] w-auto" src={subImage3} alt="Every Store, One Door" />
      </div>
    </div>
  </div>
);

export default Home;
