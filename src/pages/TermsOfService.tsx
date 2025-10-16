import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Agreement to Terms",
      content: [
        {
          text: "By accessing or using the Selenzo website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services."
        },
        {
          text: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the site after changes constitutes acceptance of the modified terms."
        }
      ]
    },
    {
      title: "2. Accounts and Registration",
      content: [
        {
          subtitle: "Account Creation",
          text: "To access certain features, you must create an account with accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials."
        },
        {
          subtitle: "Age Requirement",
          text: "You must be at least 16 years old to create an account and make purchases. By creating an account, you represent that you meet this age requirement."
        },
        {
          subtitle: "Account Security",
          text: "You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized use or security breach."
        },
        {
          subtitle: "Account Termination",
          text: "We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent, abusive, or illegal activities."
        }
      ]
    },
    {
      title: "3. Products and Pricing",
      content: [
        {
          subtitle: "Product Information",
          text: "We strive to display product colors, images, and descriptions as accurately as possible. However, we cannot guarantee that your device's display will accurately reflect product colors."
        },
        {
          subtitle: "Pricing",
          text: "All prices are in USD unless otherwise stated. Prices are subject to change without notice. We reserve the right to correct pricing errors."
        },
        {
          subtitle: "Availability",
          text: "Products are subject to availability and may be discontinued at any time. Limited edition items are available while supplies last."
        },
        {
          subtitle: "Pricing Errors",
          text: "If a product is listed at an incorrect price due to an error, we reserve the right to refuse or cancel orders placed at the incorrect price."
        }
      ]
    },
    {
      title: "4. Orders and Payment",
      content: [
        {
          subtitle: "Order Acceptance",
          text: "Your order is an offer to purchase products. We reserve the right to accept or decline any order for any reason, including product availability, errors in pricing, or suspected fraud."
        },
        {
          subtitle: "Payment Methods",
          text: "We accept major credit cards, debit cards, and other payment methods as displayed at checkout. Payment must be received before order fulfillment."
        },
        {
          subtitle: "Order Confirmation",
          text: "You will receive an email confirmation when your order is placed and another when it ships. The shipping confirmation constitutes acceptance of your order."
        },
        {
          subtitle: "Sales Tax",
          text: "Applicable sales taxes will be added to your order based on your shipping address and local tax laws."
        }
      ]
    },
    {
      title: "5. Shipping and Delivery",
      content: [
        {
          subtitle: "Shipping Times",
          text: "Estimated shipping times are provided at checkout and begin from the date of order confirmation. Delivery times may vary based on location and shipping method selected."
        },
        {
          subtitle: "Shipping Costs",
          text: "Shipping costs are calculated at checkout based on destination, weight, and selected shipping method."
        },
        {
          subtitle: "International Orders",
          text: "International customers are responsible for all customs duties, taxes, and fees. Delivery times for international orders may vary."
        },
        {
          subtitle: "Delivery Issues",
          text: "We are not responsible for delays caused by shipping carriers, customs, or events beyond our control. Contact customer support for assistance with delivery issues."
        }
      ]
    },
    {
      title: "6. Returns and Refunds",
      content: [
        {
          subtitle: "Return Policy",
          text: "Items may be returned within 30 days of delivery for a refund or exchange. Products must be unworn, unwashed, and in original condition with all tags attached."
        },
        {
          subtitle: "Non-Returnable Items",
          text: "Final sale items, gift cards, and customized products cannot be returned unless defective."
        },
        {
          subtitle: "Refund Processing",
          text: "Refunds are processed within 5-7 business days after we receive and inspect returned items. Original shipping costs are non-refundable."
        },
        {
          subtitle: "Return Shipping",
          text: "Customers are responsible for return shipping costs unless the item is defective or we made an error in fulfillment."
        }
      ]
    },
    {
      title: "7. Intellectual Property",
      content: [
        {
          subtitle: "Ownership",
          text: "All content on this website, including text, graphics, logos, images, and software, is the property of Selenzo and protected by copyright, trademark, and other intellectual property laws."
        },
        {
          subtitle: "Limited License",
          text: "You are granted a limited, non-exclusive, non-transferable license to access and use the site for personal, non-commercial purposes only."
        },
        {
          subtitle: "Restrictions",
          text: "You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any content without our express written permission."
        },
        {
          subtitle: "Trademarks",
          text: "SELENZO and our logos are registered trademarks. Unauthorized use of our trademarks is strictly prohibited."
        }
      ]
    },
    {
      title: "8. User Conduct",
      content: [
        {
          subtitle: "Prohibited Activities",
          text: "You agree not to: use the site for illegal purposes, attempt to gain unauthorized access, transmit viruses or malicious code, harass other users, or engage in fraudulent activities."
        },
        {
          subtitle: "Content Submission",
          text: "Any content you submit (reviews, comments, photos) grants us a non-exclusive, royalty-free license to use, reproduce, and display that content."
        },
        {
          subtitle: "Reviews and Feedback",
          text: "Product reviews must be honest and based on your actual experience. We reserve the right to remove reviews that violate our guidelines."
        }
      ]
    },
    {
      title: "9. Limitation of Liability",
      content: [
        {
          subtitle: "Disclaimer of Warranties",
          text: "The site and products are provided \"as is\" without warranties of any kind, either express or implied. We do not warrant that the site will be uninterrupted or error-free."
        },
        {
          subtitle: "Limitation of Damages",
          text: "To the maximum extent permitted by law, Selenzo shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our site or products."
        },
        {
          subtitle: "Maximum Liability",
          text: "Our total liability to you for any claims arising from these terms or your use of the site shall not exceed the amount you paid for products in the twelve months preceding the claim."
        }
      ]
    },
    {
      title: "10. Indemnification",
      content: [
        {
          text: "You agree to indemnify and hold harmless Selenzo, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your violation of these terms or your use of the site."
        }
      ]
    },
    {
      title: "11. Dispute Resolution",
      content: [
        {
          subtitle: "Governing Law",
          text: "These terms are governed by the laws of the State of California, United States, without regard to conflict of law principles."
        },
        {
          subtitle: "Arbitration",
          text: "Any disputes arising from these terms shall be resolved through binding arbitration in Los Angeles, California, rather than in court, except where prohibited by law."
        },
        {
          subtitle: "Class Action Waiver",
          text: "You agree that disputes will be resolved on an individual basis and waive any right to participate in class action lawsuits."
        }
      ]
    },
    {
      title: "12. General Provisions",
      content: [
        {
          subtitle: "Entire Agreement",
          text: "These terms constitute the entire agreement between you and Selenzo regarding use of the site and supersede all prior agreements."
        },
        {
          subtitle: "Severability",
          text: "If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect."
        },
        {
          subtitle: "Waiver",
          text: "Our failure to enforce any right or provision of these terms shall not constitute a waiver of such right or provision."
        },
        {
          subtitle: "Assignment",
          text: "You may not assign or transfer these terms without our written consent. We may assign our rights and obligations without restriction."
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
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last Updated: October 16, 2025
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Selenzo! These Terms of Service ("Terms") govern your access to and use 
                of our website, products, and services. By accessing or using Selenzo, you acknowledge 
                that you have read, understood, and agree to be bound by these Terms. If you do not agree 
                to these Terms, please do not use our services.
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
                        {item.subtitle && (
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {item.subtitle}
                          </h3>
                        )}
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
                Questions About These Terms?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions or concerns about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Email:</strong> legal@selenzo.com</p>
                <p><strong className="text-foreground">Support:</strong> support@selenzo.com</p>
                <p><strong className="text-foreground">Address:</strong> Selenzo Streetwear, 123 Urban Avenue, Los Angeles, CA 90001</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
