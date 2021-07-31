import { HTMLAttributes } from "react";

export interface DefaultProps<T> extends HTMLAttributes<T> {
    id?: string;
    className?: string;
}