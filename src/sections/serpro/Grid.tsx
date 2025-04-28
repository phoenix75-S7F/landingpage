import { Element } from "react-scroll";
import { gridItems } from "../../data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Biometria = () => {
  return (
    <section className="-mt-32">
      <Element name="biometria">
        <BentoGrid className="w-full py-5">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              // remove icon prop
              // remove original classname condition
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </Element>
    </section>
  );
};

export default Biometria;
