import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Sidebar } from '@/components/layout/sidebar';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

// Implemented pages
import Dashboard from '@/pages/dashboard';
import POSDashboard from '@/pages/pos/pos-dashboard';
import CashierSession from '@/pages/pos/cashier-session';
import POSProducts from '@/pages/pos/products';
import EcommerceDashboard from '@/pages/ecommerce/ecommerce-dashboard';
import Themes from '@/pages/ecommerce/themes';
import PlaceholderPage from '@/pages/placeholder';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function P(title: string, description = '') {
  return () => <PlaceholderPage title={title} description={description} />;
}

function Router() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar
        collapsed={collapsed}
        onCollapse={setCollapsed}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />
      <div
        className={cn(
          'flex-1 min-w-0 transition-all duration-300',
          /* desktop: margin matches sidebar width */
          collapsed ? 'md:mr-16' : 'md:mr-64',
          /* mobile: no margin, sidebar is overlay */
          'mr-0'
        )}
      >
        {/* Mobile top bar */}
        <div className="sticky top-0 z-30 flex items-center h-12 px-4 bg-background border-b md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(true)}
            className="ml-auto"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <Switch>
          {/* Main Dashboard */}
          <Route path="/" component={Dashboard} />

          {/* Company Management */}
          <Route path="/company/profile" component={P('بيانات الشركة', 'معلومات الشركة والفروع والترخيص')} />
          <Route path="/company/branches" component={P('الفروع', 'إدارة فروع الشركة ومواقعها')} />
          <Route path="/company/warehouses" component={P('المستودعات', 'إدارة المستودعات ومواقع التخزين')} />

          {/* Users & Permissions */}
          <Route path="/users" component={P('المستخدمون', 'إدارة حسابات المستخدمين')} />
          <Route path="/users/roles" component={P('الأدوار والصلاحيات', 'تحديد صلاحيات الوصول لكل دور')} />

          {/* Customers & Suppliers */}
          <Route path="/customers" component={P('العملاء', 'قاعدة بيانات العملاء والحسابات')} />
          <Route path="/suppliers" component={P('الموردون', 'قاعدة بيانات الموردين والحسابات')} />
          <Route path="/crm" component={P('CRM — الفرص والعملاء المحتملون', 'إدارة العملاء المحتملين وفرص البيع')} />

          {/* Products & Services */}
          <Route path="/products" component={P('المنتجات والخدمات', 'كتالوج المنتجات والخدمات الكامل')} />
          <Route path="/products/categories" component={P('التصنيفات', 'شجرة تصنيفات المنتجات')} />
          <Route path="/products/brands" component={P('العلامات التجارية', 'إدارة العلامات التجارية')} />
          <Route path="/products/units" component={P('وحدات القياس', 'وحدات القياس والتحويل')} />

          {/* Purchasing */}
          <Route path="/purchasing/requests" component={P('طلبات الشراء', 'إنشاء وتتبع طلبات الشراء الداخلية')} />
          <Route path="/purchasing/orders" component={P('أوامر الشراء', 'إصدار أوامر الشراء للموردين')} />
          <Route path="/purchasing/bills" component={P('فواتير الموردين', 'استلام وترحيل فواتير الموردين')} />
          <Route path="/purchasing/returns" component={P('مرتجعات المشتريات', 'إدارة مرتجعات البضاعة للموردين')} />

          {/* Sales */}
          <Route path="/sales/quotations" component={P('عروض الأسعار', 'إنشاء وإرسال عروض الأسعار للعملاء')} />
          <Route path="/sales/orders" component={P('أوامر البيع', 'تحويل عروض الأسعار إلى أوامر بيع')} />
          <Route path="/sales/invoices" component={P('فواتير المبيعات', 'إصدار الفواتير الإلكترونية (ZATCA)')} />
          <Route path="/sales/returns" component={P('مرتجعات المبيعات', 'إدارة مرتجعات العملاء وإشعارات الدائن')} />

          {/* POS Module */}
          <Route path="/pos" component={POSDashboard} />
          <Route path="/pos/session" component={CashierSession} />
          <Route path="/pos/products" component={POSProducts} />
          <Route path="/pos/customers" component={P('عملاء نقطة البيع', 'قاعدة عملاء نقطة البيع')} />
          <Route path="/pos/orders" component={P('سجل المبيعات', 'جميع معاملات نقطة البيع')} />
          <Route path="/pos/returns" component={P('المرتجعات', 'مرتجعات واستبدالات نقطة البيع')} />
          <Route path="/pos/shifts" component={P('إدارة الوديات', 'فتح وإغلاق وديات الكاشير')} />
          <Route path="/pos/discounts" component={P('العروض والخصومات', 'إدارة العروض الترويجية')} />
          <Route path="/pos/loyalty" component={P('برنامج الولاء', 'إعدادات نقاط الولاء والمستويات')} />
          <Route path="/pos/gift-cards" component={P('بطاقات الهدايا', 'إصدار وإدارة بطاقات الهدايا')} />
          <Route path="/pos/devices" component={P('الأجهزة والطابعات', 'إدارة أجهزة نقطة البيع')} />
          <Route path="/pos/settings" component={P('إعدادات نقطة البيع', 'الفروع وطرق الدفع والإيصالات')} />

          {/* E-commerce Module */}
          <Route path="/ecommerce" component={EcommerceDashboard} />
          <Route path="/ecommerce/themes" component={Themes} />
          <Route path="/ecommerce/builder/pages" component={P('بناء الصفحات', 'إنشاء وتحرير صفحات المتجر')} />
          <Route path="/ecommerce/products" component={P('منتجات المتجر', 'إدارة منتجات المتجر الإلكتروني')} />
          <Route path="/ecommerce/orders" component={P('طلبات المتجر', 'إدارة طلبات المتجر الإلكتروني')} />
          <Route path="/ecommerce/customers" component={P('عملاء المتجر', 'إدارة حسابات عملاء المتجر')} />
          <Route path="/ecommerce/coupons" component={P('كوبونات الخصم', 'إنشاء وإدارة كوبونات الخصم')} />
          <Route path="/ecommerce/shipping" component={P('الشحن', 'مناطق وأسعار وشركات الشحن')} />
          <Route path="/ecommerce/payments" component={P('بوابات الدفع', 'إعداد بوابات الدفع الإلكتروني')} />
          <Route path="/ecommerce/seo" component={P('تحسين محركات البحث', 'إعدادات SEO العامة')} />
          <Route path="/ecommerce/analytics" component={P('التحليلات', 'تحليلات المتجر الإلكتروني')} />
          <Route path="/ecommerce/settings" component={P('إعدادات المتجر', 'معلومات المتجر والعملات واللغات')} />

          {/* Inventory */}
          <Route path="/inventory" component={P('حركات المخزون', 'سجل حركات الوارد والصادر')} />
          <Route path="/inventory/transfers" component={P('تحويلات المخزون', 'تحويل البضاعة بين المستودعات')} />
          <Route path="/inventory/adjustments" component={P('تسويات المخزون', 'تسوية الفروقات في المخزون')} />
          <Route path="/inventory/stocktaking" component={P('الجرد الدوري', 'جداول وتقارير الجرد الدوري')} />

          {/* Accounting */}
          <Route path="/accounting/chart" component={P('دليل الحسابات', 'شجرة الحسابات وفق المعايير السعودية')} />
          <Route path="/accounting/journals" component={P('القيود اليومية', 'إدخال ومراجعة القيود المحاسبية')} />
          <Route path="/accounting/balance-sheet" component={P('الميزانية العمومية', 'قائمة المركز المالي')} />
          <Route path="/accounting/income-statement" component={P('قائمة الدخل', 'الإيرادات والمصاريف والأرباح')} />
          <Route path="/accounting/cost-centers" component={P('مراكز التكلفة', 'توزيع التكاليف على مراكز التكلفة')} />
          <Route path="/accounting/budgets" component={P('الميزانيات التقديرية', 'إعداد ومتابعة الميزانيات')} />

          {/* Banking & Cash */}
          <Route path="/banking/accounts" component={P('الحسابات البنكية', 'إدارة الحسابات البنكية وأرصدتها')} />
          <Route path="/banking/cash" component={P('الخزائن النقدية', 'إدارة خزائن النقد وحركاتها')} />
          <Route path="/banking/reconciliation" component={P('تسوية البنك', 'مطابقة كشوف الحساب البنكية')} />
          <Route path="/banking/transfers" component={P('التحويلات', 'التحويلات بين الحسابات والخزائن')} />

          {/* Payments & Collections */}
          <Route path="/payments/outgoing" component={P('سندات الصرف', 'تسجيل المدفوعات للموردين والجهات')} />
          <Route path="/payments/incoming" component={P('سندات القبض', 'تسجيل التحصيل من العملاء')} />
          <Route path="/payments/cheques" component={P('الشيكات', 'إدارة الشيكات الواردة والصادرة')} />

          {/* Fixed Assets */}
          <Route path="/assets" component={P('الأصول الثابتة', 'سجل الأصول الثابتة وقيمها')} />
          <Route path="/assets/depreciation" component={P('الاستهلاك', 'جداول وقيود الاستهلاك')} />
          <Route path="/assets/disposals" component={P('التخلص من الأصول', 'بيع وإتلاف وتقاعد الأصول')} />

          {/* Manufacturing */}
          <Route path="/manufacturing/bom" component={P('قوائم المواد (BOM)', 'تعريف مكونات المنتجات المصنعة')} />
          <Route path="/manufacturing/orders" component={P('أوامر التصنيع', 'إصدار ومتابعة أوامر الإنتاج')} />
          <Route path="/manufacturing/assembly" component={P('تجميع المنتجات', 'عمليات تجميع المنتجات من المكونات')} />

          {/* Projects */}
          <Route path="/projects" component={P('المشاريع', 'إدارة المشاريع والعقود')} />
          <Route path="/projects/tasks" component={P('المهام', 'تتبع مهام وأنشطة المشاريع')} />
          <Route path="/projects/costing" component={P('تكاليف المشاريع', 'تحليل تكاليف ومردود المشاريع')} />

          {/* HR */}
          <Route path="/hr/employees" component={P('الموظفون', 'ملفات وبيانات الموظفين')} />
          <Route path="/hr/departments" component={P('الأقسام', 'الهيكل التنظيمي والأقسام')} />
          <Route path="/hr/attendance" component={P('الحضور والغياب', 'سجل حضور وغياب الموظفين')} />
          <Route path="/hr/leave" component={P('الإجازات', 'طلبات ورصيد إجازات الموظفين')} />

          {/* Payroll */}
          <Route path="/payroll/runs" component={P('مسيرات الرواتب', 'إعداد وصرف رواتب الموظفين')} />
          <Route path="/payroll/allowances" component={P('المستحقات والخصومات', 'بدلات وخصومات الرواتب')} />
          <Route path="/payroll/reports" component={P('تقارير الرواتب', 'تقارير ومستخلصات الرواتب')} />

          {/* Contracts & Subscriptions */}
          <Route path="/contracts" component={P('العقود', 'إدارة عقود العملاء والموردين')} />
          <Route path="/contracts/subscriptions" component={P('الاشتراكات', 'الاشتراكات الدورية المتكررة')} />
          <Route path="/contracts/renewals" component={P('التجديدات', 'متابعة تجديد العقود المنتهية')} />

          {/* Reports */}
          <Route path="/reports/financial" component={P('التقارير المالية', 'القوائم المالية والتقارير الختامية')} />
          <Route path="/reports/sales" component={P('تقارير المبيعات', 'تحليلات وإحصاءات المبيعات')} />
          <Route path="/reports/purchasing" component={P('تقارير المشتريات', 'تحليلات وإحصاءات المشتريات')} />
          <Route path="/reports/inventory" component={P('تقارير المخزون', 'مستويات المخزون والحركات')} />
          <Route path="/reports/hr" component={P('تقارير الموارد البشرية', 'تقارير الموظفين والرواتب')} />
          <Route path="/reports/vat" component={P('تقارير ضريبة القيمة المضافة', 'إقرارات VAT وتقارير ZATCA')} />

          {/* Documents */}
          <Route path="/documents" component={P('إدارة المستندات', 'رفع وتنظيم وأرشفة المستندات')} />
          <Route path="/documents/archive" component={P('الأرشيف', 'أرشيف المستندات والوثائق')} />

          {/* Notifications & Logs */}
          <Route path="/notifications" component={P('الإشعارات', 'مركز الإشعارات والتنبيهات')} />
          <Route path="/activity-log" component={P('سجل النشاط', 'سجل عمليات وأنشطة المستخدمين')} />

          {/* Settings */}
          <Route path="/settings/system" component={P('إعدادات النظام', 'إعدادات عامة للنظام')} />
          <Route path="/settings/tax" component={P('إعدادات الضريبة (ZATCA)', 'ربط وإعداد منظومة فاتورة الإلكترونية')} />
          <Route path="/settings/currencies" component={P('العملات', 'إدارة العملات وأسعار الصرف')} />
          <Route path="/settings/backup" component={P('النسخ الاحتياطي', 'جدولة وإدارة النسخ الاحتياطية')} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
