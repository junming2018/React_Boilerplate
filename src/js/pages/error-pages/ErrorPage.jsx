import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import ErrorIcon from "../../../assets/error.png";
import { useRouteError, useNavigate } from "react-router-dom";
import CenterVertical from "../../layouts/CenterVertical";
import LocaleSwitcher from "../../components/LocaleSwitcher";
import ImageLink from "../../components/ImageLink";
import Text from "../../components/Text";
import Button from "../../components/Button";

const ErrorPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("error.header");
    document.querySelector('link[rel="icon"]').href = "/src/assets/error.png";
  }, [t]);

  const error = useRouteError();

  const navigate = useNavigate();

  function backToHome() {
    navigate("/React_Boilerplate/");
  }

  return (
    <CenterVertical className="p-[2rem] bg-[#242424]">
      <LocaleSwitcher className={"p-2"} />

      <ImageLink
        href="/React_Boilerplate/"
        src={ErrorIcon}
        alt="Error icon"
        className="motion-safe:animate-[pulse_1.5s_infinite]  hover:drop-shadow-[0_0_2em_#ff6666]"
      />

      <Text className="text-[3.2em] leading-[1.1] text-white">
        {t("error.title")}
      </Text>

      <Text className="text-[#888] p-[2em]">
        {t("error.instruction")}:{" "}
        {(error?.statusText || error?.message) ?? t("error.description")}
      </Text>

      <Button onClick={backToHome}>{t("button.back")}</Button>
    </CenterVertical>
  );
};

export default ErrorPage;
