import { useState } from 'react';
import { PageHeader } from '@/components/layout/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Monitor, Smartphone, Check } from 'lucide-react';

const themes = [
  {
    id: 1,
    nameAr: 'متجر الإلكترونيات',
    nameEn: 'Electronics Store',
    description: 'تصميم داكن تقني مع شبكات مواصفات المنتجات',
    active: true,
    preview: '/themes/electronics.jpg',
  },
  {
    id: 2,
    nameAr: 'متجر الأزياء والعطور',
    nameEn: 'Fashion & Perfume',
    description: 'تصميم أنيق تحريري مع صور كاملة العرض',
    active: false,
    preview: '/themes/fashion.jpg',
  },
  {
    id: 3,
    nameAr: 'متجر العموم',
    nameEn: 'General Retail',
    description: 'تصميم نظيف ومشرق يركز على التصنيفات',
    active: false,
    preview: '/themes/general.jpg',
  },
];

export default function Themes() {
  const [activeTheme, setActiveTheme] = useState(themes.find((t) => t.active)?.id || 1);

  return (
    <div className="min-h-screen">
      <PageHeader
        title="إدارة السمات"
        description="اختر وخصص سمة متجرك الإلكتروني"
      />

      <div className="p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <Card key={theme.id} className={activeTheme === theme.id ? 'border-primary border-2' : ''}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{theme.nameAr}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{theme.nameEn}</p>
                  </div>
                  {activeTheme === theme.id && (
                    <Badge variant="default" className="mr-2">
                      <Check className="ml-1 h-3 w-3" />
                      نشط
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Theme Preview Mockup */}
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center border border-border">
                  <div className="text-center space-y-2">
                    <Monitor className="h-12 w-12 text-muted-foreground mx-auto" />
                    <p className="text-sm text-muted-foreground">معاينة {theme.nameAr}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">{theme.description}</p>

                <div className="flex gap-2">
                  {activeTheme !== theme.id && (
                    <Button
                      className="flex-1"
                      onClick={() => setActiveTheme(theme.id)}
                      data-testid={`button-activate-theme-${theme.id}`}
                    >
                      تفعيل
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className={activeTheme === theme.id ? 'flex-1' : ''}
                    data-testid={`button-customize-theme-${theme.id}`}
                  >
                    تخصيص
                  </Button>
                  <Button variant="outline" data-testid={`button-preview-theme-${theme.id}`}>
                    معاينة
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Theme Details */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>إعدادات السمة النشطة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-medium mb-2">المميزات</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    تصميم متجاوب بالكامل
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    دعم RTL كامل
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    محسّن لمحركات البحث
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    سرعة تحميل عالية
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    دعم الوضع الداكن
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">إعدادات التخصيص</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Monitor className="ml-2 h-4 w-4" />
                    تحرير الألوان
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Smartphone className="ml-2 h-4 w-4" />
                    تحرير الخطوط
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Monitor className="ml-2 h-4 w-4" />
                    تحرير التخطيط
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
