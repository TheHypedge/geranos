import { NextResponse } from "next/server";
import { Resend } from 'resend'
import { NetlifyWelcomeEmail } from '../../components/custom/EmailTemplateOne'


export async function GET() {

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {

        const { data } = await resend.emails.send({
            from: 'Geranos Getaways <onboarding@resend.dev>', 
            to: 'hkashyap.developer@gmail.com', 
            subject: 'Plan A Getaway Request',
            html: '<h1>TESTasdfadf asdfas</h1>', 
            text: 'TEST',
            react: NetlifyWelcomeEmail({}),
        }); 

        return NextResponse.json({ data });

    } catch (error) {
        return NextResponse.json({error});
    }


}