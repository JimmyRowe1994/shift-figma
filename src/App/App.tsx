import { Checkbox, createTheme, Slider, ThemeProvider, Typography } from "@material-ui/core";
import React from "react";
import Button from "../components/Button";
import { sliderMarks } from "./SliderMarks";
import DateCards from "../components/DateCards";
import InfoImage from "../components/InfoImage";
import styles from "./App.module.scss";

export const App: React.FC = () => {
    const [twoPeopleRequired, setTwoPeopleRequired] = React.useState<boolean>(false);
    const [timeRangeSelectorValues, setTimeRangeSelectorValues] = React.useState<number[]>([10, 22]);

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTwoPeopleRequired(event.target.checked);
    }

    const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
        console.log(`You clicked ${event.currentTarget.getAttribute("aria-label")}`);
    };

    const determineTimeSelected = (number: number) => {
        const morningOrAfternoon = number >= 12 ? "pm" : "am";
        const hour = number % 12 === 0 ? 12 : number % 12;
        return <span className={styles.timeRangeSelectorValue}>{`${hour}${morningOrAfternoon}`}</span>
    };

    const handleChange = (event: any, newValue: number | number[]) => {
        setTimeRangeSelectorValues(newValue as number[]);
    };

    const sliderStyles = createTheme({
        overrides: {
            MuiSlider: {
                root: {
                    color: '#D71A64',
                    height: 8,
                },
                thumb: {
                    height: 24,
                    width: 24,
                    backgroundColor: '#fff',
                    border: '5px solid currentColor',
                    marginTop: -8,
                    marginLeft: -12,
                    '&:focus, &:hover, &$active': {
                        boxShadow: 'inherit',
                    },
                },
                mark: {
                    display: "none",
                },
                valueLabel: {
                    left: 'calc(-50% - 2px)',
                },
                track: {
                    height: 8,
                    borderRadius: 4,
                },
                rail: {
                    height: 8,
                    borderRadius: 4,
                }
            }
        }
    });

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

                <section className={styles.timeRangeSelector}>
                    <Typography id="timeRangeSelector" gutterBottom>
                        <h2>Your pickup will be between {determineTimeSelected(timeRangeSelectorValues[0])} and {determineTimeSelected(timeRangeSelectorValues[1])}</h2>
                    </Typography>
                    <ThemeProvider theme={sliderStyles}>
                        <Slider
                            id="timeRangeSelector"
                            value={timeRangeSelectorValues}
                            onChange={handleChange}
                            marks={sliderMarks}
                            defaultValue={[timeRangeSelectorValues[0], timeRangeSelectorValues[1]]}
                            min={0}
                            max={24}
                            aria-label="time range slider"
                            step={1}
                        />
                    </ThemeProvider>
                </section>
                <DateCards />
            </main>
        </>
    )
}
