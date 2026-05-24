"use client";

import { useTranslations } from "next-intl";
import "./faq.css";
import AnimateOnScroll from "@/motion/AnimateOnScroll";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";


interface FaqItemData {
    question: string;
    answer: string;
}

interface FaqItemProps {
    item: FaqItemData;
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ item, isOpen, onClick }) => {
    return (
        <div className="item card">
            <button className="question" onClick={onClick}>
                <span>{item.question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="icon"
                >
                    <ChevronDown />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        className="answer"
                    >
                        <p>{item.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Faq: React.FC = () => {
    const t = useTranslations("HomePage.Faq");
    const questions = [
        {
            question: t('question_1.question'),
            answer: t('question_1.answer')
        },
        {
            question: t('question_2.question'),
            answer: t('question_2.answer')
        },
        {
            question: t('question_3.question'),
            answer: t('question_3.answer')
        },
        {
            question: t('question_4.question'),
            answer: t('question_4.answer')
        },
        {
            question: t('question_5.question'),
            answer: t('question_5.answer')
        },
    ];
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq section">
            <div className="container">
                <AnimateOnScroll>
                    <h1 className="section-title">{t('title')}</h1>
                </AnimateOnScroll>

                <div className="faq-list">
                    {questions.map((item, index) => (
                        <AnimateOnScroll key={index} delay={index * 0.15 + 0.1}>
                            <FaqItem
                                item={item}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;