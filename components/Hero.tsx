import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={30}
          height={30}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[40px] lg:top-[-30px] lg:left-[0]"
        />
        <h1 className="bold-52 lg:bold-60 w-3/5">
          Асуултанд хариулаанд мөнгөтэй болоорой
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            5000 Surveys
            <span className="regular-16 lg:regular-20 ml-1"></span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Start surveys" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-col h-full rounded-lg  border-4 w-96 h-60 shadow-xl">
        <div className="text-white h-16 w-full border-b-4 border-black-100 py-1 px-2 bg-green-50 font-bold flex ">
          <p className="w-60">
            Монгол улсын хэдэн % нь ... судалгаанд оролцсон бэ
          </p>
          <Image
            className="ml-[80px]"
            src="/star.svg"
            alt="star"
            width={24}
            height={24}
          />
        </div>
        <div className="p-2 h-full flex items-end justify-center mb-4">
          <div>
            <p>2-3 Минут</p>
            <p className="mb-2">Урамшуулал: 2000₮</p>
            <Button type="button" title="Start surveys" variant="btn_green" />
          </div>
          <Image
            className="ml-[80px] "
            src="/mcs.jpg"
            alt="star"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
