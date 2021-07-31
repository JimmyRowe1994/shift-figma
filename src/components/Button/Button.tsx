import React from "react";
import styles from "./Button.module.scss";
import cx from "classnames";
import { DefaultProps } from "../../types";

interface Props extends DefaultProps<HTMLButtonElement> {
    text?: string;
};

export const Button: React.FC<Props> = ({ text = "edit", className, ...rest }) => {
    return (
        <button className={cx(styles.component, className)} {...rest}>
            {text}
        </button>
    )
}