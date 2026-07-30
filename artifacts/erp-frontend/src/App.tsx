import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Sidebar } from '@/components/layout/sidebar';

// Pages
import Dashboard from '@/pages/dashboard';
import POSDashboard from '@/pages/pos/pos-dashboard';
import CashierSession from '@/pages/pos/cashier-session';
import POSProducts from '@/pages/pos/products';
import EcommerceDashboard from '@/pages/ecommerce/ecommerce-dashboard';
import Themes from '@/pages/ecommerce/themes';
import PlaceholderPage from '@/pages/placeholder';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Switch>
          {/* Main Dashboard */}
          <Route path="/" component={Dashboard} />

          {/* POS Module */}
          <Route path="/pos" component={POSDashboard} />
          <Route path="/pos/session" component={CashierSession} />
          <Route path="/pos/products" component={POSProducts} />
          <Route path="/pos/customers">
            {() => <PlaceholderPage title="إدارة العملاء" description="عملاء نقطة البيع" />}
          </Route>
          <Route path="/pos/orders">
            {() => <PlaceholderPage title="سجل المبيعات" description="جميع معاملات نقطة البيع" />}
          </Route>
          <Route path="/pos/returns">
            {() => <PlaceholderPage title="المرتجعات والاستبدالات" description="إدارة مرتجعات العملاء" />}
          </Route>
          <Route path="/pos/discounts">
            {() => <PlaceholderPage title="العروض والخصومات" description="إدارة العروض الترويجية" />}
          </Route>
          <Route path="/pos/loyalty">
            {() => <PlaceholderPage title="برنامج الولاء" description="إعدادات نقاط الولاء والمستويات" />}
          </Route>
          <Route path="/pos/gift-cards">
            {() => <PlaceholderPage title="بطاقات الهدايا" description="إصدار وإدارة بطاقات الهدايا" />}
          </Route>
          <Route path="/pos/shifts">
            {() => <PlaceholderPage title="إدارة الوديات" description="فتح وإغلاق وديات الكاشير" />}
          </Route>
          <Route path="/pos/reports/x">
            {() => <PlaceholderPage title="تقرير X" description="تقرير منتصف اليوم" />}
          </Route>
          <Route path="/pos/reports/z">
            {() => <PlaceholderPage title="تقرير Z" description="تقرير نهاية اليوم" />}
          </Route>
          <Route path="/pos/reports/sales">
            {() => <PlaceholderPage title="تقارير المبيعات" description="تحليلات مبيعات نقطة البيع" />}
          </Route>
          <Route path="/pos/settings">
            {() => <PlaceholderPage title="إعدادات نقطة البيع" description="الفروع، طرق الدفع، الإيصالات" />}
          </Route>
          <Route path="/pos/devices">
            {() => <PlaceholderPage title="الأجهزة والطابعات" description="إدارة أجهزة نقطة البيع" />}
          </Route>

          {/* E-commerce Module */}
          <Route path="/ecommerce" component={EcommerceDashboard} />
          <Route path="/ecommerce/themes" component={Themes} />
          <Route path="/ecommerce/builder/pages">
            {() => <PlaceholderPage title="بناء الصفحات" description="إنشاء وتحرير صفحات المتجر" />}
          </Route>
          <Route path="/ecommerce/builder/header">
            {() => <PlaceholderPage title="تحرير الهيدر" description="تخصيص رأس الصفحة" />}
          </Route>
          <Route path="/ecommerce/builder/footer">
            {() => <PlaceholderPage title="تحرير الفوتر" description="تخصيص تذييل الصفحة" />}
          </Route>
          <Route path="/ecommerce/builder/navigation">
            {() => <PlaceholderPage title="إدارة القوائم" description="بناء قوائم التنقل" />}
          </Route>
          <Route path="/ecommerce/products">
            {() => <PlaceholderPage title="منتجات المتجر" description="إدارة منتجات المتجر الإلكتروني" />}
          </Route>
          <Route path="/ecommerce/categories">
            {() => <PlaceholderPage title="التصنيفات" description="شجرة تصنيفات المنتجات" />}
          </Route>
          <Route path="/ecommerce/brands">
            {() => <PlaceholderPage title="الماركات" description="إدارة الماركات التجارية" />}
          </Route>
          <Route path="/ecommerce/cart">
            {() => <PlaceholderPage title="إعدادات السلة" description="إعدادات سلة التسوق والكوبونات" />}
          </Route>
          <Route path="/ecommerce/checkout">
            {() => <PlaceholderPage title="إعدادات الدفع" description="خطوات الدفع والحقول المطلوبة" />}
          </Route>
          <Route path="/ecommerce/customers">
            {() => <PlaceholderPage title="عملاء المتجر" description="إدارة عملاء المتجر الإلكتروني" />}
          </Route>
          <Route path="/ecommerce/orders">
            {() => <PlaceholderPage title="الطلبات" description="إدارة طلبات المتجر الإلكتروني" />}
          </Route>
          <Route path="/ecommerce/blog">
            {() => <PlaceholderPage title="المدونة" description="إدارة المقالات والمحتوى" />}
          </Route>
          <Route path="/ecommerce/seo">
            {() => <PlaceholderPage title="تحسين محركات البحث" description="إعدادات SEO العامة" />}
          </Route>
          <Route path="/ecommerce/marketing">
            {() => <PlaceholderPage title="التسويق" description="الحملات البريدية والنوافذ المنبثقة" />}
          </Route>
          <Route path="/ecommerce/coupons">
            {() => <PlaceholderPage title="كوبونات الخصم" description="إنشاء وإدارة كوبونات الخصم" />}
          </Route>
          <Route path="/ecommerce/shipping">
            {() => <PlaceholderPage title="الشحن" description="مناطق وأسعار وشركات الشحن" />}
          </Route>
          <Route path="/ecommerce/payments">
            {() => <PlaceholderPage title="بوابات الدفع" description="إعداد بوابات الدفع الإلكتروني" />}
          </Route>
          <Route path="/ecommerce/analytics">
            {() => <PlaceholderPage title="التحليلات" description="تحليلات المتجر الإلكتروني المتقدمة" />}
          </Route>
          <Route path="/ecommerce/domains">
            {() => <PlaceholderPage title="النطاقات" description="ربط النطاق المخصص" />}
          </Route>
          <Route path="/ecommerce/settings">
            {() => <PlaceholderPage title="إعدادات المتجر" description="معلومات المتجر والعملات واللغات" />}
          </Route>

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
