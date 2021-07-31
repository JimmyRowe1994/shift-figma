import React from "react";
import styles from "./DateCards.module.scss";
import cx from "classnames";
import { DefaultProps } from "../../types";
import DateCard from "../DateCard";

export const DateCards: React.FC<DefaultProps<HTMLDivElement>> = ({ className, ...rest }) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const generateDateCards = () => {
        const dateCards: JSX.Element[] = [];
        for(let i = 0; i < 12; i++) {
            dateCards.push(<DateCard day={days[i % 7]} date={new Date()} price={10} isBestPrice />);
        }
        return dateCards;
    };

    return (
        <section className={cx(styles.component, className)} {...rest}>
            {generateDateCards()}
        </section>
    )
}