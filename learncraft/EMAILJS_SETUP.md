# EmailJS Setup Instructions

## Step 1: Install Dependencies

Run the following command to install EmailJS:

```bash
npm install @emailjs/browser
```

## Step 2: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 3: Get Your Public Key

1. Log in to EmailJS
2. Go to **Account** > **General**
3. Find your **Public Key** and copy it

## Step 4: Set Up Email Service

1. Go to **Email Services** in the EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (e.g., `service_xxxxx`)

## Step 5: Create Email Template

1. Go to **Email Templates** in the EmailJS dashboard
2. Click **Create New Template**
3. Use the following template variables in your email template:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}

Message:
{{message}}
```

4. Set the **To Email** field to: `learncraftinstitute@gmail.com`
5. Copy the **Template ID** (e.g., `template_xxxxx`)

## Step 6: Create .env File

Create a `.env` file in the `learncraft` directory with the following content:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Replace the placeholder values with your actual EmailJS credentials.

## Step 7: Restart Development Server

After creating the `.env` file, restart your development server:

```bash
npm run dev
```

## Important Notes

- The `.env` file should be in the `learncraft` directory (same level as `package.json`)
- Never commit the `.env` file to version control (it should be in `.gitignore`)
- The `.env.example` file is provided as a template
- Environment variables in Vite must be prefixed with `VITE_` to be accessible in the browser

## Testing

1. Fill out the contact form on the About Us page
2. Submit the form
3. Check your email inbox (learncraftinstitute@gmail.com) for the message
4. You should receive an email with the form details

## Troubleshooting

- **Error: "Please check your EmailJS configuration"**: Make sure all three environment variables are set correctly in your `.env` file
- **Email not received**: Check your EmailJS dashboard for any errors, verify your email service is properly connected
- **CORS errors**: Make sure you're using the correct Public Key and that your domain is allowed in EmailJS settings

