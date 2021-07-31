import React from "react";
import styles from "./DateCards.module.scss";
import cx from "classnames";
import { DefaultProps } from "../../types";
import { dateCardValues, DateCardValues } from "./DateCardValues";
import DateCard from "../DateCard";

export const DateCards: React.FC<DefaultProps<HTMLDivElement>> = ({ className, ...rest }) => {
    const generateDateCards = () => (
        dateCardValues.map(({ day, date, price, isBestPrice }: DateCardValues) => (
            <DateCard
                day={day}
                date={date}
                price={price}
                isBestPrice={isBestPrice}
            />
        ))
    );

    return (
        <section className={cx(styles.component, className)} {...rest}>
            {generateDateCards()}
        </section>
    )
}