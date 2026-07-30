import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  FileText,
  RefreshCw,
  Tag,
  Gift,
  Clock,
  BarChart3,
  Settings,
  Monitor,
  Store,
  Palette,
  ShoppingBag,
  Truck,
  CreditCard,
  TrendingUp,
  Globe,
  Menu,
  ChevronDown,
  Receipt,
  Award,
  MessageSquare,
  Megaphone,
  Percent,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const navigation = [
  { href: '/', label: 'لوحة التحكم', icon: LayoutDashboard },
  {
    label: 'نقطة البيع',
    icon: ShoppingCart,
    children: [
      { href: '/pos', label: 'لوحة نقطة البيع', icon: LayoutDashboard },
      { href: '/pos/session', label: 'شاشة الكاشير', icon: Monitor },
      { href: '/pos/products', label: 'المنتجات', icon: Package },
      { href: '/pos/customers', label: 'العملاء', icon: Users },
      { href: '/pos/orders', label: 'سجل المبيعات', icon: FileText },
      { href: '/pos/returns', label: 'المرتجعات', icon: RefreshCw },
      { href: '/pos/discounts', label: 'العروض والخصومات', icon: Tag },
      { href: '/pos/loyalty', label: 'برنامج الولاء', icon: Award },
      { href: '/pos/gift-cards', label: 'بطاقات الهدايا', icon: Gift },
      { href: '/pos/shifts', label: 'إدارة الوديات', icon: Clock },
      { href: '/pos/reports/sales', label: 'تقارير المبيعات', icon: BarChart3 },
      { href: '/pos/settings', label: 'إعدادات نقطة البيع', icon: Settings },
      { href: '/pos/devices', label: 'الأجهزة والطابعات', icon: Monitor },
    ],
  },
  {
    label: 'المتجر الإلكتروني',
    icon: Store,
    children: [
      { href: '/ecommerce', label: 'لوحة المتجر', icon: LayoutDashboard },
      { href: '/ecommerce/themes', label: 'السمات', icon: Palette },
      { href: '/ecommerce/builder/pages', label: 'بناء الصفحات', icon: FileText },
      { href: '/ecommerce/builder/header', label: 'الهيدر', icon: Menu },
      { href: '/ecommerce/builder/footer', label: 'الفوتر', icon: Menu },
      { href: '/ecommerce/builder/navigation', label: 'القوائم', icon: Menu },
      { href: '/ecommerce/products', label: 'المنتجات', icon: ShoppingBag },
      { href: '/ecommerce/categories', label: 'التصنيفات', icon: Tag },
      { href: '/ecommerce/brands', label: 'الماركات', icon: Award },
      { href: '/ecommerce/cart', label: 'إعدادات السلة', icon: ShoppingCart },
      { href: '/ecommerce/checkout', label: 'إعدادات الدفع', icon: CreditCard },
      { href: '/ecommerce/customers', label: 'العملاء', icon: Users },
      { href: '/ecommerce/orders', label: 'الطلبات', icon: Receipt },
      { href: '/ecommerce/blog', label: 'المدونة', icon: MessageSquare },
      { href: '/ecommerce/seo', label: 'تحسين محركات البحث', icon: TrendingUp },
      { href: '/ecommerce/marketing', label: 'التسويق', icon: Megaphone },
      { href: '/ecommerce/coupons', label: 'كوبونات الخصم', icon: Percent },
      { href: '/ecommerce/shipping', label: 'الشحن', icon: Truck },
      { href: '/ecommerce/payments', label: 'بوابات الدفع', icon: CreditCard },
      { href: '/ecommerce/analytics', label: 'التحليلات', icon: TrendingUp },
      { href: '/ecommerce/domains', label: 'النطاقات', icon: Globe },
      { href: '/ecommerce/settings', label: 'إعدادات المتجر', icon: Settings },
    ],
  },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [location] = useLocation();
  const [openSections, setOpenSections] = useState<string[]>(['نقطة البيع', 'المتجر الإلكتروني']);

  const toggleSection = (label: string) => {
    setOpenSections((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-50 h-screen bg-sidebar border-l border-sidebar-border transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {!collapsed && (
          <h1 className="text-lg font-bold text-sidebar-foreground">نظام متكامل</h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          data-testid="button-toggle-sidebar"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="space-y-1 p-2">
          {navigation.map((item) =>
            item.children ? (
              <Collapsible
                key={item.label}
                open={openSections.includes(item.label)}
                onOpenChange={() => toggleSection(item.label)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      'w-full justify-between text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                      collapsed && 'justify-center'
                    )}
                    data-testid={`button-toggle-${item.label}`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && <span>{item.label}</span>}
                    </div>
                    {!collapsed && (
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          openSections.includes(item.label) && 'rotate-180'
                        )}
                      />
                    )}
                  </Button>
                </CollapsibleTrigger>
                {!collapsed && (
                  <CollapsibleContent className="space-y-1 pr-2 pt-1">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        <Button
                          variant="ghost"
                          className={cn(
                            'w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                            location === child.href &&
                              'bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground'
                          )}
                          data-testid={`link-${child.label}`}
                        >
                          <child.icon className="h-4 w-4 shrink-0" />
                          <span className="text-sm">{child.label}</span>
                        </Button>
                      </Link>
                    ))}
                  </CollapsibleContent>
                )}
              </Collapsible>
            ) : (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    'w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                    collapsed && 'justify-center',
                    location === item.href &&
                      'bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground'
                  )}
                  data-testid={`link-${item.label}`}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </Button>
              </Link>
            )
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
