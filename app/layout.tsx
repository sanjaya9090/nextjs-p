import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <p>
          चूंकि मानव अधिकारों के प्रति उपेक्षा और घृणा के फलस्वरूप ही ऐसे बर्बर
          कार्य हुए जिनसे मनुष्य
        </p>
      </body>
    </html>
  );
}
