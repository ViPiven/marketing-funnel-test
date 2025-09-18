import { ReactNode } from "react";
import styles from "./Title.module.css";
import clsx from "clsx";

type TitleProps = {
  children: ReactNode;
  className?: string;
};

export default function Title({ children, className }: TitleProps) {
  return <h1 className={clsx(styles.title, className)}>{children}</h1>;
}
