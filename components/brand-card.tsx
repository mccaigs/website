import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type BrandCardProps = {
  name: string;
  tagline: string;
  logoSrc?: string;
  href?: string;
};

export default function BrandCard({ name, tagline, logoSrc = "/logo.svg", href }: BrandCardProps) {
  const content = (
    <>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="rounded-2xl bg-muted p-3 shadow">
          <Image src={logoSrc} alt={`${name} logo`} width={36} height={36} />
        </div>
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{tagline}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-2 rounded-xl bg-gradient-to-r from-blue-600/30 to-slate-900/20" />
      </CardContent>
    </>
  );

  return href ? (
    <Link href={href} className="block">
      <Card className="card-hover hover:cursor-pointer">{content}</Card>
    </Link>
  ) : (
    <Card className="card-hover">{content}</Card>
  );
}
