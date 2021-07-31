import React from "react";
import styles from "./Card.module.scss";
import cx from "classnames";
import { DefaultProps } from "../../types";

export const Card: React.FC<DefaultProps<HTMLDivElement>> = ({ children, className, ...rest}) => {
    return (
        <div className={cx(styles.component, className)} {...rest}>
            {children}
        </div>
    )
}