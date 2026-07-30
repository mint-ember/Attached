import { useMemo } from 'react';
import { PageHeader } from '@/components/layout/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { posTransactions, shifts } from '@/data/mock-data';
import { DollarSign, ShoppingCart, CreditCard, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

export default function POSDashboard() {
  const stats = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    const todayTransactions = posTransactions.filter((t) => t.date.startsWith(today));
    const activeShifts = shifts.filter((s) => s.status === 'مفتوح');

    const totalRevenue = todayTransactions.reduce((sum, t) => sum + t.total, 0);
    const avgBasket = todayTransactions.length > 0 ? totalRevenue / todayTransactions.length : 0;

    const paymentBreakdown = todayTransactions.reduce((acc, t) => {
      acc[t.paymentMethod] = (acc[t.paymentMethod] || 0) + t.total;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalRevenue,
      transactionCount: todayTransactions.length,
      activeShifts: activeShifts.length,
      avgBasket,
      paymentBreakdown,
    };
  }, []);

  const paymentData = useMemo(() => {
    return Object.entries(stats.paymentBreakdown).map(([name, value]) => ({
      name,
      value: Math.round(value),
    }));
  }, [stats.paymentBreakdown]);

  const topProducts = useMemo(() => {
    const productSales: Record<string, number> = {};
    posTransactions.forEach((t) => {
      t.items.forEach((item) => {
        productSales[item.product] = (productSales[item.product] || 0) + item.qty;
      });
    });

    return Object.entries(productSales)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, qty]) => ({ name, qty }));
  }, []);

  return (
    <div className="min-h-screen">
      <PageHeader title="لوحة نقطة البيع" description="أداء نقاط البيع اليوم" />

      <div className="p-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                إيرادات اليوم
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalRevenue.toFixed(2)} ر.س</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stats.transactionCount} معاملة
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                وديات نشطة
              </CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeShifts}</div>
              <p className="text-xs text-muted-foreground mt-1">كاشير متصل</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                متوسط السلة
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.avgBasket.toFixed(2)} ر.س</div>
              <p className="text-xs text-muted-foreground mt-1">لكل عملية بيع</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                عدد المعاملات
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.transactionCount}</div>
              <p className="text-xs text-muted-foreground mt-1">معاملة اليوم</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Payment Method Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>توزيع طرق الدفع</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={paymentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => entry.name}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {paymentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Selling Products */}
          <Card>
            <CardHeader>
              <CardTitle>المنتجات الأكثر مبيعاً</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topProducts}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={10}
                    angle={-15}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '6px',
                    }}
                  />
                  <Bar dataKey="qty" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Active Shifts */}
        <Card>
          <CardHeader>
            <CardTitle>الوديات النشطة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {shifts
                .filter((s) => s.status === 'مفتوح')
                .map((shift) => (
                  <div
                    key={shift.id}
                    className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <div className="font-medium">{shift.cashier}</div>
                      <div className="text-sm text-muted-foreground">{shift.branch}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        بدأت: {new Date(shift.openedAt).toLocaleTimeString('ar-SA')}
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-lg">{shift.currentCash.toFixed(2)} ر.س</div>
                      <div className="text-xs text-muted-foreground">{shift.transactions} معاملة</div>
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
