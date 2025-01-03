import { Card } from "@/components/ui/card";
import { LegalSection } from "@/components/legal/LegalSection";
import { LegalSubSection } from "@/components/legal/LegalSubSection";

export default function Privacy() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto">
                <Card className="p-8">
                    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: January 1, 2025</p>

                    <LegalSection title="1. Information We Collect">
                        <LegalSubSection title="1.1 Personal Information">
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Contact information (name, email)</li>
                                <li>Usage data and preferences</li>
                                <li>Device and browser information</li>
                            </ul>
                        </LegalSubSection>
                    </LegalSection>

                    <LegalSection title="2. How We Use Your Information">
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>To provide and improve our services</li>
                            <li>To personalize your experience</li>
                            <li>To send important updates and notifications</li>
                            <li>To respond to your inquiries and support requests</li>
                        </ul>
                    </LegalSection>

                    <LegalSection title="3. Data Protection">
                        <p className="text-muted-foreground mb-4">
                            We implement industry-standard security measures to protect your data:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Secure data transmission (SSL/TLS)</li>
                            <li>Regular security assessments</li>
                            <li>Limited access to personal information</li>
                        </ul>
                    </LegalSection>

                    <LegalSection title="4. Your Privacy Rights">
                        <p className="text-muted-foreground mb-4">You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Request access to your personal data</li>
                            <li>Update or correct your information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Request deletion of your data</li>
                        </ul>
                    </LegalSection>

                    <LegalSection title="5. Contact Us">
                        <p className="text-muted-foreground">
                            For privacy-related inquiries:<br />
                            Email: privacy@example.com
                        </p>
                    </LegalSection>
                </Card>
            </div>
        </div>
    );
}