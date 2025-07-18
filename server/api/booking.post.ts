import Nodemailer from 'nodemailer'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1),
  phone: z.string().regex(/^\+?\d{10,15}$/),
  email: z.string().email(),
  persons: z.number().min(1),
  arrival: z.string().min(1),
})

export default defineEventHandler(async event => {
  try {
    const body = await readBody(event)
    const data = schema.parse(body) // пробросит 400, если невалидно

    console.log(process.env.SMTP_HOST)

    const transporter = Nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      logger: true,
      debug: true,
    })

    await transporter.sendMail({
      from: `"Сайт Ягодная поляна" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: 'Новая заявка на бронирование',
      html: `
      <h2>Новая заявка</h2>
      <p><b>Имя:</b> ${data.name}</p>
      <p><b>Телефон:</b> ${data.phone}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Количество гостей:</b> ${data.persons}</p>
      <p><b>Заезд:</b> ${data.arrival}</p>
    `,
    })

    return { ok: true }
  } catch (e) {
    console.error('Email error', e)
    throw createError({ statusCode: 502, statusMessage: 'Email send failed' })
  }
})
