import { useMemo } from 'react';
import { PageHeader } from '@/components/layout/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { onlineOrders } from '@/data/mock-data';
import { Store, ShoppingCart, TrendingUp, Users, AlertTriangle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Badge } from '@/components/ui/badge';

const STATUS_COLORS: Record<string, string> = {
  'معلق': 'hsl(var(--chart-5))',
  'مؤكد': 'hsl(var(--chart-4))',
  'قيد التحضير': 'hsl(var(--chart-2))',
  'قيد الشحن': 'hsl(var(--chart-1))',
  'مكتمل': 'hsl(var(--primary))',
  'ملغي': 'hsl(var(--muted-foreground))',
};

export default function EcommerceDashboard() {
  const stats = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    const thisWeek = onlineOrders.filter((o) => {
      const orderDate = new Date(o.date);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return orderDate >= weekAgo;
    });
    const thisMonth = onlineOrders.filter((o) => {
      const orderDate = new Date(o.date);
      return orderDate.getMonth() === new Date().getMonth();
    });

    const todayRevenue = onlineOrders
      .filter((o) => o.date.startsWith(today))
      .reduce((sum, o) => sum + o.total, 0);
    const weekRevenue = thisWeek.reduce((sum, o) => sum + o.total, 0);
    const monthRevenue = thisMonth.reduce((sum, o) => sum + o.total, 0);

    const statusBreakdown = onlineOrders.reduce((acc, o) => {
      acc[o.status] = (acc[o.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      todayRevenue,
      weekRevenue,
      monthRevenue,
      todayOrders: onlineOrders.filter((o) => o.date.startsWith(today)).length,
      statusBreakdown,
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
      const revenue = onlineOrders
        .filter((o) => o.date.startsWith(date))
        .reduce((sum, o) => sum + o.total, 0);
      const orders = onlineOrders.filter((o) => o.date.startsWith(date)).length;

      return {
        day: dayLabel,
        الإيرادات: Math.round(revenue),
        الطلبات: orders,
      };
    });
  }, []);

  const statusData = useMemo(() => {
    return Object.entries(stats.statusBreakdown).map(([name, value]) => ({
      name,
      value,
    }));
  }, [stats.statusBreakdown]);

  return (
    <div className="min-h-screen">
      <PageHeader title="لوحة المتجر الإلكتروني" description="أداء المتجر الإلكتروني" />

      <div className="p-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">اليوم</CardTitle>
              <Store className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.todayRevenue.toFixed(2)} ر.س</div>
              <p className="text-xs text-muted-foreground mt-1">{stats.todayOrders} طلب</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">الأسبوع</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.weekRevenue.toFixed(2)} ر.س</div>
              <p className="text-xs text-muted-foreground mt-1">آخر 7 أيام</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">الشهر</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.monthRevenue.toFixed(2)} ر.س</div>
              <p className="text-xs text-muted-foreground mt-1">هذا الشهر</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">معدل التحويل</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.7%</div>
              <p className="text-xs text-muted-foreground mt-1">من الزوار</p>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>الإيرادات والطلبات - آخر 7 أيام</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis yAxisId="right" orientation="left" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '6px',
                  }}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="الإيرادات"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="الطلبات"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--accent))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Order Status Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>توزيع الطلبات حسب الحالة</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name}: ${entry.value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {statusData.map((entry) => (
                      <Cell key={`cell-${entry.name}`} fill={STATUS_COLORS[entry.name] || 'hsl(var(--muted))'} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>الطلبات الأخيرة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {onlineOrders.slice(0, 6).map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0"
                  >
                    <div>
                      <div className="font-medium text-sm">{order.id}</div>
                      <div className="text-xs text-muted-foreground">{order.customer}</div>
                    </div>
                    <div className="text-left">
                      <div className="font-bold">{order.total.toFixed(2)} ر.س</div>
                      <Badge
                        variant={
                          order.status === 'مكتمل'
                            ? 'default'
                            : order.status === 'ملغي'
                            ? 'destructive'
                            : 'secondary'
                        }
                        className="text-xs"
                      >
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
