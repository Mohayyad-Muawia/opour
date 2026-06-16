"use server";

import { Resend } from "resend";
import { getTranslations } from "next-intl/server";
import { getContactTemplate, getPartnershipTemplate, getSupportTemplate, getVolunteerTemplate } from "./utils/emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = ["mohayyad@opour.org", "info@opour.org"];

export async function sendContactEmail(prevState: any, formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const t = await getTranslations("Toast");
    const htmlBody = getContactTemplate({ name, email, subject, message });
    
    try {
        const { error } = await resend.emails.send({
            from: "system@opour.org",
            to: TO_EMAIL,
            subject: subject,
            html: htmlBody,
        });

        if (error) {
            console.error(error);
            return { 
                success: false, 
                message: t("unknownError")
            };
        }
        
        return { 
            success: true, 
            message: t("success") 
        };
    } catch (e) {
        console.error(e);
        return { 
            success: false, 
            message: t("error") 
        };
    }
}

export async function sendSupportEmail(prevState: any, formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const project_type = formData.get("project_type") as string;
    const message = formData.get("message") as string;

    const t = await getTranslations("Toast");
    const htmlBody = getSupportTemplate({ name, email, phone, project_type, message });
    
    try {
        const { error } = await resend.emails.send({
            from: "system@opour.org",
            to: TO_EMAIL,
            subject: `طلب دعم مشروع - ${project_type}`,
            html: htmlBody,
        });

        if (error) {
            console.error(error);
            return { 
                success: false, 
                message: t("unknownError")
            };
        }
        
        return { 
            success: true, 
            message: t("success") 
        };
    } catch (e) {
        console.error(e);
        return { 
            success: false, 
            message: t("error") 
        };
    }
}

export async function sendVolunteerEmail(prevState: any, formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const specialization = formData.get("specialization") as string;
    const availability = formData.get("availability") as string;
    const reason = formData.get("reason") as string;

    const t = await getTranslations("Toast");
    const htmlBody = getVolunteerTemplate({ name, email, phone, specialization, availability, reason });
    
    try {
        const { error } = await resend.emails.send({
            from: "system@opour.org",
            to: TO_EMAIL,
            subject: `طلب تطوع - ${name}`,
            html: htmlBody,
        });

        if (error) {
            console.error(error);
            return { 
                success: false, 
                message: t("unknownError")
            };
        }
        
        return { 
            success: true, 
            message: t("success") 
        };
    } catch (e) {
        console.error(e);
        return { 
            success: false, 
            message: t("error") 
        };
    }
}

export async function sendPartnershipEmail(prevState: any, formData: FormData) {
    const org_name = formData.get("org_name") as string;
    const org_type = formData.get("org_type") as string;
    const org_email = formData.get("org_email") as string;
    const org_phone = formData.get("org_phone") as string;
    const proposal = formData.get("proposal") as string;

    const t = await getTranslations("Toast");
    const htmlBody = getPartnershipTemplate({ org_name, org_type, org_email, org_phone, proposal });
    
    try {
        const { error } = await resend.emails.send({
            from: "system@opour.org",
            to: TO_EMAIL,
            subject: `مقترح شراكة - ${org_name}`,
            html: htmlBody,
        });

        if (error) {
            console.error(error);
            return { 
                success: false, 
                message: t("unknownError")
            };
        }
        
        return { 
            success: true, 
            message: t("success") 
        };
    } catch (e) {
        console.error(e);
        return { 
            success: false, 
            message: t("error") 
        };
    }
}
