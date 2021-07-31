import { Checkbox } from "@material-ui/core";
import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import DateCard from "../components/DateCard";
import DateCards from "../components/DateCards";
import InfoImage from "../components/InfoImage";
import styles from "./App.module.scss";

export const App: React.FC = () => {
    const [twoPeopleRequired, setTwoPeopleRequired] = React.useState<boolean>(false);

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTwoPeopleRequired(event.target.checked);
    }

    const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
        console.log(`You clicked ${event.currentTarget.getAttribute("aria-label")}`);
    };

    return (
        <>
            <h1 className={styles.heading}>
                Shift
            </h1>
            <main>
                <section className={styles.userOptions}>
                    <div className={styles.userOption}>
                        Inventory
                        <div className={styles.userOptionButtons}>
                            <Button text="2x items" />
                            <Button aria-label="edit inventory" onClick={handleClickButton} />
                        </div>
                    </div>
                    <div className={styles.userOption}>
                        Pickup
                        <div className={styles.userOptionButtons}>
                            <Button text="The Old Shippen, Ivybridge" />
                            <Button aria-label="edit pickup location" onClick={handleClickButton} />
                        </div>
                    </div>
                    <div className={styles.userOption}>
                        Drop-off
                        <div className={styles.userOptionButtons}>
                            <Button text="Broadmoor Farm, Beworth" />
                            <Button aria-label="edit drop-off location" onClick={handleClickButton} />
                        </div>
                    </div>
                    <div className={styles.userOption}>
                        <label htmlFor="twoPeopleCheckbox">Do you require two people?</label>
                        <Checkbox
                            id="twoPeopleCheckbox"
                            checked={twoPeopleRequired}
                            onChange={handleCheck}
                        />
                    </div>
                </section>

                {/* NOTE: Not sure if directly grabbing the image on Figma is possible, so manually did this instead. */}
                <section className={styles.infoImages}>
                    <InfoImage image="shifter" text="A vetted & rated Shifter" />
                    <InfoImage image="van" text="Big enough to fit everything in" />
                    <InfoImage image="devices" text="Fixed price, no matter what!" />
                </section>

                <DateCards />
            </main>
        </>
    )
}