import React from "react";
import styles from "./InfoImage.module.scss";
import cx from "classnames";
import { DefaultProps } from "../../types";
import { DevicesIcon, ShifterIcon, VanIcon } from "../../assets/index";

interface Props extends DefaultProps<HTMLDivElement> {
    image: "devices" | "shifter" | "van";
    text: string;
}

export const InfoImage: React.FC<Props> = ({ image, text, className, ...rest }) => {
    const getImage = (selectedImage: "devices" | "shifter" | "van") => {
        switch(selectedImage) {
            case "devices":
                return DevicesIcon;
            case "shifter":
                return ShifterIcon;
            case "van":
                return VanIcon;
            default:
                break;
        }
    };

    return (
        <div className={cx(styles.component, className)} {...rest}>
            <img src={getImage(image)} className={styles.image} alt={text} />
            <p className={styles.text}>
                {text}
            </p>
        </div>
    )
}