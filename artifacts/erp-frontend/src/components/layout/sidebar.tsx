import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import {
  LayoutDashboard,
  Building2,
  GitBranch,
  Warehouse,
  Users,
  ShieldCheck,
  UserCircle,
  Truck,
  Handshake,
  Package,
  Tags,
  ShoppingCart,
  FileText,
  BarChart2,
  Layers,
  ArrowLeftRight,
  BookOpen,
  Landmark,
  CreditCard,
  Target,
  Cpu,
  FolderKanban,
  UserCog,
  DollarSign,
  CalendarCheck,
  FileSignature,
  PieChart,
  FolderOpen,
  Bell,
  Settings,
  Monitor,
  Store,
  ChevronDown,
  Menu,
  TrendingUp,
  Receipt,
  Wallet,
  ClipboardList,
  Scale,
  Coins,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const navigation = [
  {
    href: '/',
    label: 'لوحة التحكم الرئيسية',
    icon: LayoutDashboard,
  },
  {
    label: 'إدارة الشركة',
    icon: Building2,
    children: [
      { href: '/company/profile', label: 'بيانات الشركة', icon: Building2 },
      { href: '/company/branches', label: 'الفروع', icon: GitBranch },
      { href: '/company/warehouses', label: 'المستودعات', icon: Warehouse },
    ],
  },
  {
    label: 'المستخدمون والصلاحيات',
    icon: ShieldCheck,
    children: [
      { href: '/users', label: 'المستخدمون', icon: Users },
      { href: '/users/roles', label: 'الأدوار والصلاحيات', icon: ShieldCheck },
    ],
  },
  {
    label: 'العملاء والموردون',
    icon: Handshake,
    children: [
      { href: '/customers', label: 'العملاء', icon: UserCircle },
      { href: '/suppliers', label: 'الموردون', icon: Truck },
      { href: '/crm', label: 'CRM — الفرص والعملاء المحتملون', icon: Handshake },
    ],
  },
  {
    label: 'المنتجات والخدمات',
    icon: Package,
    children: [
      { href: '/products', label: 'المنتجات والخدمات', icon: Package },
      { href: '/products/categories', label: 'التصنيفات', icon: Tags },
      { href: '/products/brands', label: 'العلامات التجارية', icon: Layers },
      { href: '/products/units', label: 'وحدات القياس', icon: Scale },
    ],
  },
  {
    label: 'المشتريات',
    icon: ShoppingCart,
    children: [
      { href: '/purchasing/requests', label: 'طلبات الشراء', icon: ClipboardList },
      { href: '/purchasing/orders', label: 'أوامر الشراء', icon: ShoppingCart },
      { href: '/purchasing/bills', label: 'فواتير الموردين', icon: Receipt },
      { href: '/purchasing/returns', label: 'مرتجعات المشتريات', icon: ArrowLeftRight },
    ],
  },
  {
    label: 'المبيعات',
    icon: TrendingUp,
    children: [
      { href: '/sales/quotations', label: 'عروض الأسعار', icon: FileText },
      { href: '/sales/orders', label: 'أوامر البيع', icon: ClipboardList },
      { href: '/sales/invoices', label: 'فواتير المبيعات', icon: Receipt },
      { href: '/sales/returns', label: 'مرتجعات المبيعات', icon: ArrowLeftRight },
    ],
  },
  {
    label: 'نقطة البيع (POS)',
    icon: Monitor,
    children: [
      { href: '/pos', label: 'لوحة نقطة البيع', icon: LayoutDashboard },
      { href: '/pos/session', label: 'شاشة الكاشير', icon: Monitor },
      { href: '/pos/products', label: 'منتجات نقطة البيع', icon: Package },
      { href: '/pos/customers', label: 'عملاء نقطة البيع', icon: UserCircle },
      { href: '/pos/orders', label: 'سجل المبيعات', icon: FileText },
      { href: '/pos/returns', label: 'المرتجعات', icon: ArrowLeftRight },
      { href: '/pos/shifts', label: 'إدارة الوديات', icon: CalendarCheck },
      { href: '/pos/discounts', label: 'العروض والخصومات', icon: Tags },
      { href: '/pos/loyalty', label: 'برنامج الولاء', icon: UserCog },
      { href: '/pos/gift-cards', label: 'بطاقات الهدايا', icon: Coins },
      { href: '/pos/devices', label: 'الأجهزة والطابعات', icon: Cpu },
      { href: '/pos/settings', label: 'إعدادات نقطة البيع', icon: Settings },
    ],
  },
  {
    label: 'المتجر الإلكتروني',
    icon: Store,
    children: [
      { href: '/ecommerce', label: 'لوحة المتجر', icon: LayoutDashboard },
      { href: '/ecommerce/themes', label: 'السمات والتصميم', icon: Layers },
      { href: '/ecommerce/builder/pages', label: 'بناء الصفحات', icon: FileText },
      { href: '/ecommerce/products', label: 'منتجات المتجر', icon: Package },
      { href: '/ecommerce/orders', label: 'طلبات المتجر', icon: ClipboardList },
      { href: '/ecommerce/customers', label: 'عملاء المتجر', icon: UserCircle },
      { href: '/ecommerce/coupons', label: 'كوبونات الخصم', icon: Tags },
      { href: '/ecommerce/shipping', label: 'الشحن', icon: Truck },
      { href: '/ecommerce/payments', label: 'بوابات الدفع', icon: CreditCard },
      { href: '/ecommerce/seo', label: 'تحسين محركات البحث', icon: TrendingUp },
      { href: '/ecommerce/analytics', label: 'التحليلات', icon: PieChart },
      { href: '/ecommerce/settings', label: 'إعدادات المتجر', icon: Settings },
    ],
  },
  {
    label: 'إدارة المخزون',
    icon: Warehouse,
    children: [
      { href: '/inventory', label: 'حركات المخزون', icon: BarChart2 },
      { href: '/inventory/transfers', label: 'تحويلات المخزون', icon: ArrowLeftRight },
      { href: '/inventory/adjustments', label: 'تسويات المخزون', icon: ClipboardList },
      { href: '/inventory/stocktaking', label: 'الجرد الدوري', icon: Layers },
    ],
  },
  {
    label: 'المحاسبة العامة',
    icon: BookOpen,
    children: [
      { href: '/accounting/chart', label: 'دليل الحسابات', icon: BookOpen },
      { href: '/accounting/journals', label: 'القيود اليومية', icon: FileText },
      { href: '/accounting/balance-sheet', label: 'الميزانية العمومية', icon: Scale },
      { href: '/accounting/income-statement', label: 'قائمة الدخل', icon: TrendingUp },
      { href: '/accounting/cost-centers', label: 'مراكز التكلفة', icon: Target },
      { href: '/accounting/budgets', label: 'الميزانيات التقديرية', icon: Coins },
    ],
  },
  {
    label: 'البنوك والخزائن',
    icon: Landmark,
    children: [
      { href: '/banking/accounts', label: 'الحسابات البنكية', icon: Landmark },
      { href: '/banking/cash', label: 'الخزائن النقدية', icon: Wallet },
      { href: '/banking/reconciliation', label: 'تسوية البنك', icon: ClipboardList },
      { href: '/banking/transfers', label: 'التحويلات', icon: ArrowLeftRight },
    ],
  },
  {
    label: 'المدفوعات والتحصيل',
    icon: CreditCard,
    children: [
      { href: '/payments/outgoing', label: 'سندات الصرف', icon: CreditCard },
      { href: '/payments/incoming', label: 'سندات القبض', icon: Coins },
      { href: '/payments/cheques', label: 'الشيكات', icon: FileText },
    ],
  },
  {
    label: 'الأصول الثابتة',
    icon: Cpu,
    children: [
      { href: '/assets', label: 'الأصول', icon: Cpu },
      { href: '/assets/depreciation', label: 'الاستهلاك', icon: TrendingUp },
      { href: '/assets/disposals', label: 'التخلص من الأصول', icon: ArrowLeftRight },
    ],
  },
  {
    label: 'التصنيع والتجميع',
    icon: Layers,
    children: [
      { href: '/manufacturing/bom', label: 'قوائم المواد (BOM)', icon: FileText },
      { href: '/manufacturing/orders', label: 'أوامر التصنيع', icon: ClipboardList },
      { href: '/manufacturing/assembly', label: 'تجميع المنتجات', icon: Layers },
    ],
  },
  {
    label: 'المشاريع وتكاليفها',
    icon: FolderKanban,
    children: [
      { href: '/projects', label: 'المشاريع', icon: FolderKanban },
      { href: '/projects/tasks', label: 'المهام', icon: ClipboardList },
      { href: '/projects/costing', label: 'تكاليف المشاريع', icon: DollarSign },
    ],
  },
  {
    label: 'الموارد البشرية',
    icon: UserCog,
    children: [
      { href: '/hr/employees', label: 'الموظفون', icon: Users },
      { href: '/hr/departments', label: 'الأقسام', icon: Building2 },
      { href: '/hr/attendance', label: 'الحضور والغياب', icon: CalendarCheck },
      { href: '/hr/leave', label: 'الإجازات', icon: FileText },
    ],
  },
  {
    label: 'الرواتب',
    icon: DollarSign,
    children: [
      { href: '/payroll/runs', label: 'مسيرات الرواتب', icon: DollarSign },
      { href: '/payroll/allowances', label: 'المستحقات والخصومات', icon: Coins },
      { href: '/payroll/reports', label: 'تقارير الرواتب', icon: BarChart2 },
    ],
  },
  {
    label: 'العقود والاشتراكات',
    icon: FileSignature,
    children: [
      { href: '/contracts', label: 'العقود', icon: FileSignature },
      { href: '/contracts/subscriptions', label: 'الاشتراكات', icon: CalendarCheck },
      { href: '/contracts/renewals', label: 'التجديدات', icon: ArrowLeftRight },
    ],
  },
  {
    label: 'التقارير والتحليلات',
    icon: PieChart,
    children: [
      { href: '/reports/financial', label: 'التقارير المالية', icon: BookOpen },
      { href: '/reports/sales', label: 'تقارير المبيعات', icon: TrendingUp },
      { href: '/reports/purchasing', label: 'تقارير المشتريات', icon: ShoppingCart },
      { href: '/reports/inventory', label: 'تقارير المخزون', icon: Warehouse },
      { href: '/reports/hr', label: 'تقارير الموارد البشرية', icon: UserCog },
      { href: '/reports/vat', label: 'تقارير ضريبة القيمة المضافة', icon: Receipt },
    ],
  },
  {
    label: 'المستندات',
    icon: FolderOpen,
    children: [
      { href: '/documents', label: 'إدارة المستندات', icon: FolderOpen },
      { href: '/documents/archive', label: 'الأرشيف', icon: Layers },
    ],
  },
  {
    label: 'الإشعارات والنشاط',
    icon: Bell,
    children: [
      { href: '/notifications', label: 'الإشعارات', icon: Bell },
      { href: '/activity-log', label: 'سجل النشاط', icon: ClipboardList },
    ],
  },
  {
    label: 'الإعدادات',
    icon: Settings,
    children: [
      { href: '/settings/system', label: 'إعدادات النظام', icon: Settings },
      { href: '/settings/tax', label: 'إعدادات الضريبة (ZATCA)', icon: Receipt },
      { href: '/settings/currencies', label: 'العملات', icon: Coins },
      { href: '/settings/backup', label: 'النسخ الاحتياطي', icon: FolderOpen },
    ],
  },
];

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (v: boolean) => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export function Sidebar({ collapsed, onCollapse, mobileOpen, onMobileClose }: SidebarProps) {
  const [location] = useLocation();
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (label: string) => {
    setOpenSections((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  return (
    <>
      {/* Mobile overlay backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onMobileClose}
        />
      )}

      <div
        dir="rtl"
        className={cn(
          'fixed right-0 top-0 z-50 h-screen bg-sidebar border-l border-sidebar-border transition-all duration-300',
          /* desktop width */
          collapsed ? 'md:w-16' : 'md:w-64',
          /* mobile: full sidebar width, hidden off-screen unless open */
          'w-64',
          mobileOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
        )}
      >
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {!collapsed && (
          <h1 className="text-base font-bold text-sidebar-foreground truncate">نظام محاسبي متكامل</h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            onCollapse(!collapsed);
            onMobileClose();
          }}
          className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shrink-0"
          data-testid="button-toggle-sidebar"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="space-y-0.5 p-2">
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
                      'w-full justify-between text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm h-9',
                      collapsed && 'justify-center'
                    )}
                    data-testid={`button-toggle-${item.label}`}
                  >
                    {/* السهم أقصى يسار */}
                    {!collapsed && (
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 shrink-0 transition-transform',
                          openSections.includes(item.label) && 'rotate-180'
                        )}
                      />
                    )}
                    {/* النص ثم الأيقونة أقصى يمين */}
                    <div className="flex items-center gap-2">
                      {!collapsed && <span className="truncate">{item.label}</span>}
                      <item.icon className="h-4 w-4 shrink-0" />
                    </div>
                  </Button>
                </CollapsibleTrigger>
                {!collapsed && (
                  <CollapsibleContent className="space-y-0.5 pl-3 pt-0.5">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        <Button
                          variant="ghost"
                          className={cn(
                            'w-full justify-end gap-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-xs',
                            location === child.href &&
                              'bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground'
                          )}
                          data-testid={`link-${child.label}`}
                        >
                          <span className="truncate">{child.label}</span>
                          <child.icon className="h-3.5 w-3.5 shrink-0" />
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
                    'w-full justify-end gap-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-9 text-sm',
                    collapsed && 'justify-center',
                    location === item.href &&
                      'bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground'
                  )}
                  data-testid={`link-${item.label}`}
                >
                  {!collapsed && <span className="truncate">{item.label}</span>}
                  <item.icon className="h-4 w-4 shrink-0" />
                </Button>
              </Link>
            )
          )}
        </div>
      </ScrollArea>
    </div>
    </>
  );
}
