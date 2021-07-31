import React from "react";
import { DefaultProps } from "../../types";
import Card from "../Card";
import styles from "./DateCard.module.scss";
import cx from "classnames";

interface Props extends DefaultProps<HTMLDivElement> {
    day: string;
    date: string;
    price: number;
    isBestPrice?: boolean;
}

export const DateCard: React.FC<Props> = ({ day, date, price, isBestPrice, className, ...rest }) => {
    return (
        <Card className={cx(styles.component, className)} {...rest}>
            <h2 className={styles.title}>{day}</h2>
            <div className={styles.containerWrapper}>
                <div className={styles.container}>
                    <time dateTime="2008-02-14" className={styles.date}>{date}</time>
                    {isBestPrice &&
                        <p className={styles.bestPriceTag}>Best Price</p>
                    }
                </div>
                <div className={styles.container}>
                    <a href="/" className={styles.price}>{`£${price} >`}</a>
                </div>
            </div>
        </Card>
    )
}