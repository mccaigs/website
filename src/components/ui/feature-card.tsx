import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { type DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: typeof LucideIcon;
  badge?: string;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, badge, className = '' }: FeatureCardProps) {
  return (
    <Card className={`h-full hover:shadow-lg transition-shadow ${className}`}>
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
            <Icon className="h-6 w-6 text-blue-700" />
          </div>
          {badge && (
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              {badge}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
