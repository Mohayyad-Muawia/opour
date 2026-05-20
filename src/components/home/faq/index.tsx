import { useTranslations } from "next-intl";
import "./faq.css";
export default function Faq() {
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
    return (
        <section className="faq container">
            <h2 className="section-title">{t('title')}</h2>
            <div className="questions">
                {questions.map((question, index) => (
                    <div className="question" key={index}>
                        <h4>{question.question}</h4>
                        <p>{question.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}