import { useTranslations } from "next-intl";
import "./fields.css"
import Image from "next/image";
import { Link } from "@/i18n/routing";
export default function Fields() {
    const t = useTranslations("HomePage.Fields");

    const fields = [
        {
            id: 1,
            img: "/imgs/f1.jpg",
            title: t('field_1.title'),
            points: [
                t('field_1.p1'),
                t('field_1.p2'),
                t('field_1.p3')
            ]
        },
        {
            id: 2,
            img: "/imgs/f2.jpg",
            title: t('field_2.title'),
            points: [
                t('field_2.p1'),
                t('field_2.p2'),
                t('field_2.p3')
            ]
        },
        {
            id: 3,
            img: "/imgs/f3.jpg",
            title: t('field_3.title'),
            points: [
                t('field_3.p1'),
                t('field_3.p2'),
                t('field_3.p3')
            ]
        },
        {
            id: 4,
            img: "/imgs/f4.jpg",
            title: t('field_4.title'),
            points: [
                t('field_4.p1'),
                t('field_4.p2'),
                t('field_4.p3')
            ]
        },
        {
            id: 5,
            img: "/imgs/f5.jpg",
            title: t('field_5.title'),
            points: [
                t('field_5.p1'),
                t('field_5.p2'),
                t('field_5.p3')
            ]
        },
        {
            id: 6,
            img: "/imgs/f6.jpg",
            title: t('field_6.title'),
            points: [
                t('field_6.p1'),
                t('field_6.p2'),
                t('field_6.p3')
            ]
        }
    ]

    return (
        <section className="fields container">
            <h1 className="section-title">{t('title')}</h1>

            <div className="fields-list">
                {
                    fields.map((f) => (
                        <div key={f.id} className="field-item card">
                            <Image src={f.img} alt={f.title} width={400} height={300} />
                            <div className="text">
                                <h2 className="field-title">{f.title}</h2>
                                <ul className="field-points">
                                    {f.points.map((p, i) => (
                                        <li key={i} className="field-point">{p}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Link href={"/goals"} className="btn primary">
                {t('viewMore')}
            </Link>
        </section>
    )
}