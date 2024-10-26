import BoxIcon from "./components/BoxIcon";
import SectionHeader from "./components/SectionHeader";
import Card from "./components/Card";
import Product from "./Product";
import Button from "./components/Button";

export default function Root() {
  const category = [
    { icon: "./assets/icon/Category-Camera.png", title: "Camera" },
    { icon: "./assets/icon/Category-CellPhone.png", title: "CellPhone" },
    { icon: "./assets/icon/Category-Computer.png", title: "Computer" },
    { icon: "./assets/icon/Category-Gamepad.png", title: "Gamepad" },
    { icon: "./assets/icon/Category-Headphone.png", title: "Headphone" },
    { icon: "./assets/icon/Category-SmartWatch.png", title: "Smartwatch" },
  ];

  const data = [
    {
      price: 180,
      img: "./assets/tas-gucci.png",
      title: "Gucci Duffle Bag",
    },
    {
      price: 4000,
      img: "./assets/cpu-cooler.png",
      title: "Cooler PC",
    },
    {
      price: 2000,
      img: "./assets/stick.png",
      title: "Gamepad",
    },
    {
      price: 20,
      img: "./assets/jacket.png",
      title: "Jacket",
    },
  ];

  return (
    <div className="flex flex-col px-[135px] pt-[56px]">
      <section className="flex flex-col">
        <SectionHeader section="Categories" />
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-[24px] font-bold mt-[20px]">
            Browse By Category
          </h1>
          <img src="./assets/icon/arrow.png" alt="arrow" />
        </div>
        <div className="flex flex-row gap-[30px] mt-[60px]">
          {category.map((item) => (
            <BoxIcon icon={item.icon} title={item.title} />
          ))}
        </div>
      </section>

      <section className="flex flex-col mt-[60px]">
        <SectionHeader section="This Month" />
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-[24px] font-bold mt-[20px]">
            Best Selling Product
          </h1>
          <Button title="View All" />
        </div>
        <div className="flex mt-[60px]">
          <div className="flex flex-col lg:flex-row gap-4">
            {data.map((item, index) => (
              <Card
                key={index}
                price={item.price}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full justify-center mt-[80px]">
          <Button title="View More" />
        </div>
      </section>

      <section className="flex flex-col mt-[60px] pb-[100px]">
        <SectionHeader section="Testimonial" />
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-[24px] font-bold mt-[20px]">Why choose us?</h1>
        </div>
        <div className="flex mt-[60px] justify-center items-center">
          <img
            src="./assets/icon/end.png"
            alt="arrow"
            className="w-[943px] h-[161px]"
          />
        </div>
      </section>
    </div>
  );
}
