import { useState, useMemo } from 'react';
import { products as allProducts, customers } from '@/data/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Barcode, Minus, Plus, Trash2, User, Tag, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  productId: number;
  name: string;
  price: number;
  qty: number;
  discount: number;
}

export default function CashierSession() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [selectedCustomer, setSelectedCustomer] = useState<number | null>(null);
  const [orderDiscount, setOrderDiscount] = useState(0);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('نقدي');
  const [cashTendered, setCashTendered] = useState('');
  const { toast } = useToast();

  const categories = useMemo(() => {
    const cats = new Set(['الكل', ...allProducts.map((p) => p.category)]);
    return Array.from(cats);
  }, []);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const matchesSearch =
        p.nameAr.includes(search) || p.nameEn.toLowerCase().includes(search.toLowerCase()) || p.sku.includes(search);
      const matchesCategory = selectedCategory === 'الكل' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const addToCart = (product: typeof allProducts[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === product.id);
      if (existing) {
        return prev.map((item) =>
          item.productId === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        { productId: product.id, name: product.nameAr, price: product.sellPrice, qty: 1, discount: 0 },
      ];
    });
  };

  const updateQty = (productId: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => (item.productId === productId ? { ...item, qty: Math.max(0, item.qty + delta) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.productId !== productId));
  };

  const clearCart = () => {
    setCart([]);
    setSelectedCustomer(null);
    setOrderDiscount(0);
  };

  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.qty * (1 - item.discount / 100), 0);
  }, [cart]);

  const discountAmount = useMemo(() => {
    return subtotal * (orderDiscount / 100);
  }, [subtotal, orderDiscount]);

  const netSubtotal = subtotal - discountAmount;
  const vat = netSubtotal * 0.15;
  const total = netSubtotal + vat;

  const change = useMemo(() => {
    if (paymentMethod === 'نقدي' && cashTendered) {
      return parseFloat(cashTendered) - total;
    }
    return 0;
  }, [paymentMethod, cashTendered, total]);

  const completePayment = () => {
    if (cart.length === 0) {
      toast({ title: 'خطأ', description: 'السلة فارغة', variant: 'destructive' });
      return;
    }
    if (paymentMethod === 'نقدي' && change < 0) {
      toast({ title: 'خطأ', description: 'المبلغ المستلم غير كافٍ', variant: 'destructive' });
      return;
    }

    toast({ title: 'نجح', description: 'تمت العملية بنجاح' });
    setPaymentDialogOpen(false);
    clearCart();
    setCashTendered('');
  };

  return (
    <div className="flex h-screen">
      {/* Products Panel */}
      <div className="flex-1 flex flex-col border-l border-border">
        {/* Top Bar */}
        <div className="border-b border-border bg-card p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-lg font-bold">ليلى أحمد</div>
              <div className="text-sm text-muted-foreground">الفرع الرئيسي • الوردية: 4:32:18</div>
            </div>
            <div className="text-left">
              <div className="text-sm text-muted-foreground">إجمالي الوردية</div>
              <div className="text-xl font-bold text-primary">8,247.45 ر.س</div>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="بحث بالاسم أو SKU..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pr-9"
                data-testid="input-product-search"
              />
            </div>
            <Button variant="outline" size="icon" data-testid="button-barcode-scan">
              <Barcode className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="flex-1 flex flex-col">
          <TabsList className="w-full justify-start rounded-none border-b border-border bg-muted/30 px-4">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat} data-testid={`tab-category-${cat}`}>
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          <ScrollArea className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="cursor-pointer hover:border-primary transition-colors"
                  onClick={() => addToCart(product)}
                  data-testid={`card-product-${product.id}`}
                >
                  <CardContent className="p-4">
                    <div className="font-medium text-sm mb-1">{product.nameAr}</div>
                    <div className="text-xs text-muted-foreground mb-2">{product.nameEn}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-primary">{product.sellPrice} ر.س</div>
                      <div
                        className={`text-xs px-2 py-1 rounded ${
                          product.stock < 20
                            ? 'bg-destructive/10 text-destructive'
                            : 'bg-primary/10 text-primary'
                        }`}
                      >
                        {product.stock}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </Tabs>
      </div>

      {/* Cart Panel */}
      <div className="w-[440px] border-l border-border bg-card flex flex-col">
        <CardHeader className="border-b border-border">
          <CardTitle>الطلب الحالي</CardTitle>
        </CardHeader>

        {/* Customer Selector */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <Select
              value={selectedCustomer?.toString() || 'none'}
              onValueChange={(v) => setSelectedCustomer(v === 'none' ? null : parseInt(v))}
            >
              <SelectTrigger data-testid="select-customer">
                <SelectValue placeholder="عميل عابر" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">عميل عابر</SelectItem>
                {customers.map((c) => (
                  <SelectItem key={c.id} value={c.id.toString()}>
                    {c.name} ({c.tier})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Cart Items */}
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-2">
            {cart.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">السلة فارغة</div>
            ) : (
              cart.map((item) => (
                <div key={item.productId} className="flex items-center gap-2 p-2 border border-border rounded">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.price} ر.س</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-7 w-7"
                      onClick={() => updateQty(item.productId, -1)}
                      data-testid={`button-decrease-${item.productId}`}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <div className="w-8 text-center font-medium">{item.qty}</div>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-7 w-7"
                      onClick={() => updateQty(item.productId, 1)}
                      data-testid={`button-increase-${item.productId}`}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="text-left font-bold">{(item.price * item.qty).toFixed(2)} ر.س</div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7"
                    onClick={() => removeItem(item.productId)}
                    data-testid={`button-remove-${item.productId}`}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </ScrollArea>

        {/* Totals */}
        <div className="p-4 border-t border-border space-y-3">
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-muted-foreground" />
            <Input
              type="number"
              placeholder="خصم %"
              value={orderDiscount || ''}
              onChange={(e) => setOrderDiscount(parseFloat(e.target.value) || 0)}
              className="w-24"
              data-testid="input-order-discount"
            />
            <Input placeholder="كود الكوبون" className="flex-1" data-testid="input-coupon" />
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">المجموع الفرعي</span>
              <span className="font-medium">{subtotal.toFixed(2)} ر.س</span>
            </div>
            {orderDiscount > 0 && (
              <div className="flex justify-between text-accent">
                <span>خصم {orderDiscount}%</span>
                <span>-{discountAmount.toFixed(2)} ر.س</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-muted-foreground">ضريبة القيمة المضافة 15%</span>
              <span className="font-medium">{vat.toFixed(2)} ر.س</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t border-border pt-2">
              <span>الإجمالي</span>
              <span className="text-primary">{total.toFixed(2)} ر.س</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" onClick={clearCart} data-testid="button-clear-cart">
              مسح الطلب
            </Button>
            <Button variant="outline" data-testid="button-hold-order">
              إيقاف الطلب
            </Button>
          </div>

          <Dialog open={paymentDialogOpen} onOpenChange={setPaymentDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-full" size="lg" disabled={cart.length === 0} data-testid="button-payment">
                <CreditCard className="ml-2 h-5 w-5" />
                استلام المبلغ
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>استلام المبلغ</DialogTitle>
              </DialogHeader>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">طريقة الدفع</div>
                  <div className="grid grid-cols-2 gap-2">
                    {['نقدي', 'مدى', 'بطاقة ائتمان', 'STC Pay', 'Apple Pay', 'محفظة رقمية'].map((method) => (
                      <Button
                        key={method}
                        variant={paymentMethod === method ? 'default' : 'outline'}
                        onClick={() => setPaymentMethod(method)}
                        data-testid={`button-payment-${method}`}
                      >
                        {method}
                      </Button>
                    ))}
                  </div>
                </div>

                {paymentMethod === 'نقدي' && (
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">المبلغ المستلم</div>
                    <Input
                      type="number"
                      value={cashTendered}
                      onChange={(e) => setCashTendered(e.target.value)}
                      placeholder="0.00"
                      data-testid="input-cash-tendered"
                    />
                    {change >= 0 && cashTendered && (
                      <div className="mt-2 text-lg font-bold text-primary">
                        الباقي: {change.toFixed(2)} ر.س
                      </div>
                    )}
                  </div>
                )}

                <div className="bg-muted p-4 rounded space-y-2 text-sm">
                  <div className="flex justify-between font-bold">
                    <span>المبلغ المطلوب</span>
                    <span>{total.toFixed(2)} ر.س</span>
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setPaymentDialogOpen(false)}>
                  إلغاء
                </Button>
                <Button onClick={completePayment} data-testid="button-complete-payment">
                  تأكيد الدفع
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
