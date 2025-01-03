import { Card } from "@/components/ui/card";
import { LegalSection } from "@/components/legal/LegalSection";
import { LegalSubSection } from "@/components/legal/LegalSubSection";

export default function Terms() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto">
                <Card className="p-8">
                    <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: January 1, 2025</p>

                    <LegalSection title="1. Acceptance of Terms">
                        <p className="text-muted-foreground">
                            By accessing and using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                        </p>
                    </LegalSection>

                    <LegalSection title="2. Use of Website">
                        <LegalSubSection title="2.1 General Rules">
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Content must be used for personal, non-commercial purposes only</li>
                                <li>You may not modify or distribute our content without permission</li>
                                <li>Users must maintain respectful behavior when interacting with our services</li>
                            </ul>
                        </LegalSubSection>

                        <LegalSubSection title="2.2 Prohibited Activities">
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Attempting to gain unauthorized access to our systems</li>
                                <li>Using the website in any way that could damage or overburden our servers</li>
                                <li>Collecting user information without consent</li>
                            </ul>
                        </LegalSubSection>
                    </LegalSection>

                    <LegalSection title="3. Intellectual Property">
                        <p className="text-muted-foreground mb-4">
                            All content on this website, including text, graphics, logos, and images, is our property and is protected by copyright laws.
                        </p>
                    </LegalSection>

                    <LegalSection title="4. Disclaimer">
                        <p className="text-muted-foreground mb-4">
                            Our website is provided "as is" without any warranties, expressed or implied. We do not guarantee the accuracy or completeness of any information on our website.
                        </p>
                    </LegalSection>

                    <LegalSection title="5. Contact Information">
                        <p className="text-muted-foreground">
                            For questions about these terms, please contact:<br />
                            Email: info@minglegame.net
                        </p>
                    </LegalSection>
                </Card>
            </div>
        </div>
    );
}