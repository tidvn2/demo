import React from "react";
import classNames from "classnames/bind";
import styles from "./FrequentlyAskedQuestion.module.scss";
import FaqItem from "~/components/FaqItem";

const cx = classNames.bind(styles);

type Props = {};

const FrequentlyAskedQuestion = function ({}: Props) {
    return (
        <div className={cx("wrapper")}>
            <section className={cx("background")} />

            <section className={cx("title-container")}>
                <h1 className={cx("title")}>FAQ</h1>
                <h3 className={cx("sub-title")}>Answers to frequently asked questions</h3>
            </section>

            <section className={cx("container")}>
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
            </section>
        </div>
    );
};

export default FrequentlyAskedQuestion;
