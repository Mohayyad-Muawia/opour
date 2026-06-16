const getBaseTemplate = (title: string, innerContent: string) => `
<div style="direction: rtl; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 580px; margin: 0 auto; padding: 25px; background-color: #f8fafc; color: #334155;">
    <div style="text-align: center; margin-bottom: 25px;">
        <h2 style="color: #059669; font-size: 1.5rem; font-weight: 700; margin: 0;">منظمة أوبور الخيرية</h2>
        <p style="color: #64748b; font-size: 0.85rem; margin-top: 4px; margin-bottom: 0;">منصة التواصل الرقمية الرسمية</p>
    </div>

    <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);">
        <h3 style="color: #0f172a; font-size: 1.1rem; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">
            ${title}
        </h3>
        ${innerContent}
    </div>

    <div style="text-align: center; margin-top: 25px;">
        <p style="font-size: 0.75rem; color: #94a3b8; margin: 0;">هذا الإشعار أُرسل تلقائياً من نظام الموقع الرسمي للمنظمة.</p>
        <p style="font-size: 0.75rem; color: #94a3b8; margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} Opour Organization</p>
    </div>
</div>
`;

const renderField = (label: string, value: string, isLink = false) => `
<div style="margin-bottom: 14px;">
    <span style="font-size: 0.8rem; color: #94a3b8; display: block; font-weight: 600; text-transform: uppercase; margin-bottom: 2px;">${label}</span>
    ${isLink 
      ? `<a href="mailto:${value}" style="font-size: 0.95rem; color: #059669; text-decoration: none; font-weight: 500;">${value}</a>`
      : `<strong style="font-size: 0.95rem; color: #1e293b; font-weight: 500;">${value}</strong>`
    }
</div>
`;

export const getContactTemplate = (data: { name: string; email: string; subject: string; message: string }) => {
    const content = `
        ${renderField("اسم المرسل", data.name)}
        ${renderField("البريد الإلكتروني", data.email, true)}
        ${renderField("الموضوع", data.subject)}
        <div style="background-color: #f8fafc; border-right: 4px solid #059669; padding: 15px; border-radius: 4px; margin-top: 15px;">
            <span style="font-size: 0.8rem; color: #64748b; display: block; margin-bottom: 6px; font-weight: 600;">محتوى الرسالة:</span>
            <p style="font-size: 0.95rem; color: #334155; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
        </div>
    `;
    return getBaseTemplate("تفاصيل رسالة الاتصال العامة", content);
};

export const getSupportTemplate = (data: { name: string; email: string; phone: string; project_type: string; message: string }) => {
    const content = `
        ${renderField("اسم المانح/الداعم", data.name)}
        ${renderField("البريد الإلكتروني", data.email, true)}
        ${renderField("رقم الهاتف", data.phone)}
        ${renderField("نوع المشروع المهتم به", data.project_type)}
        <div style="background-color: #f0fdf4; border-right: 4px solid #10b981; padding: 15px; border-radius: 4px; margin-top: 15px;">
            <span style="font-size: 0.8rem; color: #047857; display: block; margin-bottom: 6px; font-weight: 600;">رسالة أو ملاحظات الداعم:</span>
            <p style="font-size: 0.95rem; color: #065f46; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message || 'لا توجد ملاحظات إضافية'}</p>
        </div>
    `;
    return getBaseTemplate("إشعار: طلب دعم مشروع جديد", content);
};

export const getVolunteerTemplate = (data: { name: string; email: string; phone: string; specialization: string; availability: string; reason: string }) => {
    const content = `
        ${renderField("اسم المتطوع", data.name)}
        ${renderField("البريد الإلكتروني", data.email, true)}
        ${renderField("رقم الهاتف (واتساب)", data.phone)}
        ${renderField("التخصص المهني", data.specialization)}
        ${renderField("طبيعة التوفر المتاحة", data.availability)}
        <div style="background-color: #f8fafc; border-right: 4px solid #6366f1; padding: 15px; border-radius: 4px; margin-top: 15px;">
            <span style="font-size: 0.8rem; color: #4f46e5; display: block; margin-bottom: 6px; font-weight: 600;">دافع التطوع مع أوبور:</span>
            <p style="font-size: 0.95rem; color: #3730a3; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.reason || 'لم يذكر دافعاً معنياً'}</p>
        </div>
    `;
    return getBaseTemplate("إشعار: طلب انضمام كمتطوع", content);
};

export const getPartnershipTemplate = (data: { org_name: string; org_type: string; org_email: string; org_phone: string; proposal: string }) => {
    const content = `
        ${renderField("اسم الجهة/المؤسسة", data.org_name)}
        ${renderField("نوع المؤسسة", data.org_type)}
        ${renderField("البريد الإلكتروني الرسمي", data.org_email, true)}
        ${renderField("رقم تواصل الجهة", data.org_phone)}
        <div style="background-color: #fffbeb; border-right: 4px solid #f59e0b; padding: 15px; border-radius: 4px; margin-top: 15px;">
            <span style="font-size: 0.8rem; color: #b45309; display: block; margin-bottom: 6px; font-weight: 600;">ملخص مقترح التعاون للشراكة:</span>
            <p style="font-size: 0.95rem; color: #78350f; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.proposal}</p>
        </div>
    `;
    return getBaseTemplate("إشعار: مقترح شراكة تنموية مؤسسية", content);
};