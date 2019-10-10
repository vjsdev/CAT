using System;
using System.Collections.Generic;
using System.Net.Mail;
using System.Text;

namespace HRB.CAT.Common.Utilities
{
    public static class EmailHelper
    {
        public static void SendEmail(string subject, string body, string to)
        {
            var message = new MailMessage("demohrb@outlook.com", to)
            {
                Sender = new MailAddress("demohrb@outlook.com"),
                Subject = subject,
                Body = body,
                IsBodyHtml = false,
            };
            var smtp = new SmtpClient
            {
                Host = "smtp-mail.outlook.com",
                Port = 587,
                Credentials = new System.Net.NetworkCredential("demohrb@outlook.com", "P@8590543575"),
                EnableSsl = true
            };
            try
            {
                smtp.Send(message);
            }
            catch (Exception ex)
            {
                
            }
            message.Dispose();
            smtp.Dispose();
        }
    }
}
