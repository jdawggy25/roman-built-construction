import { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SERVICE_DETAILS } from "@/lib/service-content";

const service = SERVICE_DETAILS["commercial-construction"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    images: [service.heroImage],
  },
};

export default function CommercialConstructionPage() {
  return <ServicePageTemplate slug="commercial-construction" />;
}
