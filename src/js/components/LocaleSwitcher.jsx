import { useTranslation } from "react-i18next";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../components/Button";

const LocaleSwitcher = (props) => {
    const { t } = useTranslation();

    const { i18n } = useTranslation();

    const [locale, setLocale] = useState(i18n.language);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setLocale(language);
    };

    function changeToEnglish() {
        locale !== "en" && changeLanguage("en");
    }

    function changeToMalay() {
        locale !== "ms" && changeLanguage("ms");
    }

    return (
        <div className={"flex flex-row space-x-14 " + props.className}>
            <Button
                className={locale == "en" ? "text-[#646cff]" : ""}
                onClick={changeToEnglish}
            >
                {t("english")}
            </Button>

            <Button
                className={locale == "ms" ? "text-[#646cff]" : ""}
                onClick={changeToMalay}
            >
                {t("malay")}
            </Button>
        </div>
    );
};

LocaleSwitcher.propTypes = {
    className: PropTypes.string,
};

LocaleSwitcher.defaultProps = {
    className: "",
};

export default LocaleSwitcher;
