import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/layout/page-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/mock-data';
import { Plus, Search, Filter, Download, Upload } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function POSProducts() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('الكل');
  const [statusFilter, setStatusFilter] = useState('الكل');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        p.nameAr.includes(search) ||
        p.nameEn.toLowerCase().includes(search.toLowerCase()) ||
        p.sku.includes(search) ||
        p.barcode.includes(search);
      const matchesCategory = categoryFilter === 'الكل' || p.category === categoryFilter;
      const matchesStatus = statusFilter === 'الكل' || p.status === statusFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [search, categoryFilter, statusFilter]);

  const categories = useMemo(() => {
    return ['الكل', ...new Set(products.map((p) => p.category))];
  }, []);

  return (
    <div className="min-h-screen">
      <PageHeader
        title="إدارة المنتجات"
        description="جميع المنتجات في النظام"
        actions={
          <>
            <Button variant="outline" data-testid="button-import-products">
              <Upload className="ml-2 h-4 w-4" />
              استيراد
            </Button>
            <Button variant="outline" data-testid="button-export-products">
              <Download className="ml-2 h-4 w-4" />
              تصدير
            </Button>
            <Button data-testid="button-add-product">
              <Plus className="ml-2 h-4 w-4" />
              إضافة منتج
            </Button>
          </>
        }
      />

      <div className="p-6 space-y-4">
        {/* Filters */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="بحث بالاسم، SKU، أو الباركود..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pr-9"
              data-testid="input-search"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-48" data-testid="select-category">
              <SelectValue placeholder="جميع الفئات" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-36" data-testid="select-status">
              <SelectValue placeholder="الحالة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="الكل">الكل</SelectItem>
              <SelectItem value="منشور">منشور</SelectItem>
              <SelectItem value="مسودة">مسودة</SelectItem>
              <SelectItem value="مخفي">مخفي</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" data-testid="button-advanced-filter">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Table */}
        <div className="rounded-md border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">الباركود</TableHead>
                <TableHead className="text-right">اسم المنتج (عربي)</TableHead>
                <TableHead className="text-right">اسم المنتج (إنجليزي)</TableHead>
                <TableHead className="text-right">الفئة</TableHead>
                <TableHead className="text-right">الماركة</TableHead>
                <TableHead className="text-right">سعر البيع</TableHead>
                <TableHead className="text-right">سعر التكلفة</TableHead>
                <TableHead className="text-right">الضريبة%</TableHead>
                <TableHead className="text-right">المخزون</TableHead>
                <TableHead className="text-right">الوحدة</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={11} className="text-center py-8 text-muted-foreground">
                    لا توجد منتجات
                  </TableCell>
                </TableRow>
              ) : (
                filteredProducts.map((product) => (
                  <TableRow key={product.id} className="cursor-pointer hover:bg-muted/50" data-testid={`row-product-${product.id}`}>
                    <TableCell className="font-mono text-sm">{product.barcode}</TableCell>
                    <TableCell className="font-medium">{product.nameAr}</TableCell>
                    <TableCell className="text-muted-foreground">{product.nameEn}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{product.category}</Badge>
                    </TableCell>
                    <TableCell>{product.brand}</TableCell>
                    <TableCell className="font-bold">{product.sellPrice} ر.س</TableCell>
                    <TableCell className="text-muted-foreground">{product.costPrice} ر.س</TableCell>
                    <TableCell>{product.vat}%</TableCell>
                    <TableCell>
                      <Badge variant={product.stock < 20 ? 'destructive' : 'default'}>
                        {product.stock}
                      </Badge>
                    </TableCell>
                    <TableCell>{product.unit}</TableCell>
                    <TableCell>
                      <Badge variant={product.status === 'منشور' ? 'default' : 'secondary'}>
                        {product.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            عرض {filteredProducts.length} من {products.length} منتج
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled data-testid="button-prev-page">
              السابق
            </Button>
            <Button variant="outline" size="sm" disabled data-testid="button-next-page">
              التالي
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
