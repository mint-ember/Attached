import { PageHeader } from '@/components/layout/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen">
      <PageHeader title={title} description={description} />
      <div className="p-6">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <Construction className="h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">قيد التطوير</h2>
            <p className="text-muted-foreground max-w-md">
              هذه الصفحة قيد الإنشاء. جميع الوظائف الأساسية متاحة في النظام.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
