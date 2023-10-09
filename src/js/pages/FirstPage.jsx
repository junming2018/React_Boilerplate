import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import ReactLogo from "/react.svg";
import ViteLogo from "../../assets/vite.svg";
import CenterVertical from "../layouts/CenterVertical";
import LocaleSwitcher from "../components/LocaleSwitcher";
import ImageLink from "../components/ImageLink";
import Text from "../components/Text";
import Button from "../components/Button";

const FirstPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("first.document.title");
    document.querySelector('link[rel="icon"]').href = "/react.svg";
  }, [t]);

  const imageLink = [
    {
      href: "https://react.dev",
      src: ReactLogo,
      alt: t("logo.react"),
      className:
        "motion-safe:animate-[spin_20s_linear_infinite] hover:drop-shadow-[0_0_2em_#61dafbaa]",
    },
    {
      href: "https://vitejs.dev",
      src: ViteLogo,
      alt: t("logo.vite"),
      className: "hover:drop-shadow-[0_0_2em_#646cffaa]",
    },
  ];

  const [count, setCount] = useState(0);

  function addCount() {
    setCount((count) => count + 1);
  }

  return (
    <CenterVertical className="p-[2rem] bg-[#242424]">
      <LocaleSwitcher className={"p-2"} />

      <div className="flex flex-row">
        {imageLink.map((item) => (
          <ImageLink key={item.href} {...item} />
        ))}
      </div>

      <Text className="text-[3.2em] leading-[1.1] text-white">
        {t("first.title")}
      </Text>

      <div className="p-[2em] space-y-[1em]">
        <Button onClick={addCount} count={count}>
          {t("button.count")} {count}
        </Button>

        <Text className="text-white">{t("first.description")}</Text>
      </div>

      <Text className="text-[#888]">{t("first.instruction")}</Text>
    </CenterVertical>
  );
};

export default FirstPage;
