import { useEffect } from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import CenterVertical from "../../layouts/CenterVertical";
import ImageLink from "../../components/ImageLink";
import Text from "../../components/Text";
import Button from "../../components/Button";

function ErrorPage() {
  useEffect(() => {
    document.title = "Error";
    document.querySelector('link[rel="icon"]').href = "";
  }, []);

  const error = useRouteError();
  const navigate = useNavigate();

  function backToHome() {
    navigate("/React_Boilerplate/");
  }

  return (
    <CenterVertical className="p-[2rem] bg-[#242424]">
      <ImageLink
        href="/React_Boilerplate/"
        src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-1024.png"
        alt="Error icon"
        className="motion-safe:animate-[pulse_1.5s_infinite]  hover:drop-shadow-[0_0_2em_#ff6666]"
      />

      <Text className="text-[3.2em] leading-[1.1] text-white">Error</Text>

      <Text className="text-[#888] p-[2em]">
        Error Log: {error.statusText || error.message}
      </Text>

      <Button onClick={backToHome}>Back to Home</Button>
    </CenterVertical>
  );
}

export default ErrorPage;
