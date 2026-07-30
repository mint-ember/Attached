import { useMemo } from 'react';
import { PageHeader } from '@/components/layout/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { posTransactions, onlineOrders, products } from '@/data/mock-data';
import { ArrowUp, ArrowDown, ShoppingCart, Store, TrendingUp, Package } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function Dashboard() {
  const stats = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    const todayPOS = posTransactions.filter((t) => t.date.startsWith(today));
    const todayOnline = onlineOrders.filter((o) => o.date.startsWith(today));

    const posSales = todayPOS.reduce((sum, t) => sum + t.total, 0);
    const onlineSales = todayOnline.reduce((sum, o) => sum + o.total, 0);
    const lowStock = products.filter((p) => p.stock < 30);

    return {
      posSales,
      posTransactions: todayPOS.length,
      onlineSales,
      onlineOrders: todayOnline.length,
      lowStockCount: lowStock.length,
    };
  }, []);

  const revenueData = useMemo(() => {
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - i));
      return date.toISOString().split('T')[0];
    });

    return last7Days.map((date) => {
      const dayLabel = new Date(date).toLocaleDateString('ar-SA', { weekday: 'short' });
      const posTotal = posTransactions
        .filter((t) => t.date.startsWith(date))
        .reduce((sum, t) => sum + t.total, 0);
      const onlineTotal = onlineOrders
        .filter((o) => o.date.startsWith(date))
        .reduce((sum, o) => sum + o.total, 0);

      return {
        day: dayLabel,
        نقطة_البيع: Math.round(posTotal),
        المتجر_الإلكتروني: Math.round(onlineTotal),
      };
    });
  }, []);

  const recentTransactions = useMemo(() => {
    return [...posTransactions, ...onlineOrders.map(o => ({
      id: o.id,
      date: o.date,
      customer: o.customer,
      total: o.total,
      status: o.status,
      source: 'متجر إلكتروني'
    }))]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 8);
  }, []);

  return (
    <div className="min-h-screen">
      <PageHeader
        title="لوحة التحكم الرئيسية"
        description="نظرة عامة على أداء النظام اليوم"
      />

      <div className="p-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                مبيعات نقطة البيع اليوم
              </CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.posSales.toFixed(2)} ر.س</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stats.posTransactions} معاملة
              </p>
              <div className="flex items-center mt-2 text-xs text-primary">
                <ArrowUp className="h-3 w-3 ml-1" />
                <span>12.5% عن الأمس</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                طلبات المتجر الإلكتروني
              </CardTitle>
              <Store className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.onlineSales.toFixed(2)} ر.س</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stats.onlineOrders} طلب جديد
              </p>
              <div className="flex items-center mt-2 text-xs text-primary">
                <ArrowUp className="h-3 w-3 ml-1" />
                <span>8.3% عن الأمس</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                إجمالي الإيرادات اليوم
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(stats.posSales + stats.onlineSales).toFixed(2)} ر.س
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stats.posTransactions + stats.onlineOrders} معاملة كاملة
              </p>
              <div className="flex items-center mt-2 text-xs text-primary">
                <ArrowUp className="h-3 w-3 ml-1" />
                <span>10.8% عن الأمس</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                تنبيهات المخزون
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.lowStockCount}</div>
              <p className="text-xs text-muted-foreground mt-1">منتج أقل من الحد الأدنى</p>
              <div className="flex items-center mt-2 text-xs text-destructive">
                <ArrowDown className="h-3 w-3 ml-1" />
                <span>يحتاج إعادة طلب</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>الإيرادات - آخر 7 أيام</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="day"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '6px',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="نقطة_البيع"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
                <Line
                  type="monotone"
                  dataKey="المتجر_الإلكتروني"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--accent))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>المعاملات الأخيرة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                >
                  <div>
                    <div className="font-medium">{transaction.id}</div>
                    <div className="text-sm text-muted-foreground">{transaction.customer}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {new Date(transaction.date).toLocaleString('ar-SA')}
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">{transaction.total.toFixed(2)} ر.س</div>
                    <div
                      className={`text-xs inline-block px-2 py-1 rounded ${
                        transaction.status === 'مكتمل'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-accent/10 text-accent'
                      }`}
                    >
                      {transaction.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card>
          <CardHeader>
            <CardTitle>منتجات تحتاج إعادة طلب</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {products
                .filter((p) => p.stock < 30)
                .slice(0, 6)
                .map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0"
                  >
                    <div>
                      <div className="font-medium">{product.nameAr}</div>
                      <div className="text-sm text-muted-foreground">SKU: {product.sku}</div>
                    </div>
                    <div className="text-left">
                      <div className={`font-bold ${product.stock < 20 ? 'text-destructive' : 'text-accent'}`}>
                        {product.stock} {product.unit}
                      </div>
                      <div className="text-xs text-muted-foreground">متبقي</div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
