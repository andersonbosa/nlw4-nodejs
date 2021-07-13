import nodemailer, { Transporter } from 'nodemailer'
import { resolve } from 'path'
import fs from 'fs'
import handlebars from 'handlebars'

class SendMailService {
  private client: Transporter

  constructor() {
    nodemailer.createTestAccount()
      .then(account => {
        const transporter = nodemailer.createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
            user: account.user,
            pass: account.pass
          }
        })
        this.client = transporter
      })

  }

  async execute(to: string, subject: string, htmlRawBody: string) {
    const templatePath = resolve(__dirname, '..', 'views', 'emails', 'firstTemplate.hbs')
    const templateFileContent = fs.readFileSync(templatePath).toString('utf-8')
    const mailTemplateParser = handlebars.compile(templateFileContent)
    const mailHtmlBody = mailTemplateParser({
      name: to,
      title: subject,
      description: htmlRawBody
    })

    const msg = await this.client.sendMail({
      to,
      subject,
      html: mailHtmlBody,
      from: 'Anderson Bosa <noreply@t4inha.hek>'
    })

    console.log('Message sent: %s', msg.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(msg));
  }
}

/**
 * @observation
 * Exports the already instantiated service at the time the application is created.
 **/
export default new SendMailService()
