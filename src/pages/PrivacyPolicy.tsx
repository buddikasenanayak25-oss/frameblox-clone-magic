import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you create an account, place an order, or contact us, we collect information such as your name, email address, shipping address, phone number, and payment information."
        },
        {
          subtitle: "Automatically Collected Information",
          text: "We collect information about your device, browsing actions, and patterns through cookies and similar technologies. This includes IP address, browser type, operating system, and pages visited."
        },
        {
          subtitle: "Order Information",
          text: "Details about products purchased, order history, preferences, and delivery information to fulfill and improve your shopping experience."
        }
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        {
          subtitle: "Order Processing",
          text: "To process and fulfill your orders, send order confirmations, provide customer support, and communicate about your purchases."
        },
        {
          subtitle: "Account Management",
          text: "To create and manage your account, personalize your experience, and provide access to exclusive features and collections."
        },
        {
          subtitle: "Marketing Communications",
          text: "To send promotional emails about new products, special offers, and exclusive drops. You can opt out at any time."
        },
        {
          subtitle: "Service Improvement",
          text: "To analyze usage patterns, improve our website, enhance user experience, and develop new features and products."
        },
        {
          subtitle: "Security & Fraud Prevention",
          text: "To protect against fraudulent transactions, unauthorized access, and other illegal activities."
        }
      ]
    },
    {
      title: "3. Information Sharing",
      content: [
        {
          subtitle: "Service Providers",
          text: "We share information with trusted third-party service providers who assist with payment processing, shipping, email delivery, and analytics. They are contractually obligated to protect your information."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by law, to protect our rights, or to comply with legal processes."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
        },
        {
          subtitle: "With Your Consent",
          text: "We may share information for other purposes with your explicit consent."
        }
      ]
    },
    {
      title: "4. Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your personal information."
        },
        {
          subtitle: "Payment Security",
          text: "Payment information is encrypted and processed securely through PCI-compliant payment processors. We do not store complete credit card information on our servers."
        },
        {
          subtitle: "Your Responsibility",
          text: "You are responsible for maintaining the confidentiality of your account credentials. Notify us immediately of any unauthorized access."
        }
      ]
    },
    {
      title: "5. Cookies and Tracking",
      content: [
        {
          subtitle: "Essential Cookies",
          text: "Required for basic website functionality, authentication, and security."
        },
        {
          subtitle: "Analytics Cookies",
          text: "Help us understand how visitors interact with our website to improve performance and user experience."
        },
        {
          subtitle: "Marketing Cookies",
          text: "Used to deliver personalized advertisements and track campaign effectiveness."
        },
        {
          subtitle: "Cookie Management",
          text: "You can control cookies through your browser settings, though disabling certain cookies may limit website functionality."
        }
      ]
    },
    {
      title: "6. Your Rights",
      content: [
        {
          subtitle: "Access & Correction",
          text: "You have the right to access, update, or correct your personal information at any time through your account settings."
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your personal data, subject to legal retention requirements."
        },
        {
          subtitle: "Marketing Opt-Out",
          text: "You can unsubscribe from marketing communications at any time by clicking the unsubscribe link in our emails or updating your preferences."
        },
        {
          subtitle: "Do Not Track",
          text: "We respect Do Not Track signals and do not track, plant cookies, or use advertising when a DNT browser mechanism is in place."
        },
        {
          subtitle: "California Privacy Rights",
          text: "California residents have additional rights under CCPA, including the right to know what personal information is collected and the right to deletion."
        }
      ]
    },
    {
      title: "7. Data Retention",
      content: [
        {
          subtitle: "Retention Period",
          text: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements."
        },
        {
          subtitle: "Account Deletion",
          text: "When you delete your account, we remove or anonymize your personal information within 30 days, except where retention is required by law."
        }
      ]
    },
    {
      title: "8. International Users",
      content: [
        {
          subtitle: "Data Transfers",
          text: "Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data."
        },
        {
          subtitle: "GDPR Compliance",
          text: "For users in the European Economic Area, we comply with GDPR requirements and provide appropriate data protection measures."
        }
      ]
    },
    {
      title: "9. Children's Privacy",
      content: [
        {
          subtitle: "Age Restriction",
          text: "Our services are not directed to individuals under 16 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete it promptly."
        }
      ]
    },
    {
      title: "10. Changes to This Policy",
      content: [
        {
          subtitle: "Policy Updates",
          text: "We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through a prominent notice on our website. Continued use of our services after changes constitutes acceptance."
        },
        {
          subtitle: "Last Updated",
          text: "This policy was last updated on October 16, 2025."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information.
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed">
                At Selenzo, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy describes how we collect, use, 
                disclose, and safeguard your information when you visit our website and use our services. 
                Please read this policy carefully. If you do not agree with the terms of this privacy 
                policy, please do not access the site.
              </p>
            </CardContent>
          </Card>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((item, idx) => (
                    <Card key={idx}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {item.subtitle}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.text}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <Card className="mt-12 border-primary/20">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Email:</strong> privacy@selenzo.com</p>
                <p><strong className="text-foreground">Address:</strong> Selenzo Streetwear, 123 Urban Avenue, Los Angeles, CA 90001</p>
                <p><strong className="text-foreground">Response Time:</strong> We aim to respond to all privacy inquiries within 48 hours.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
