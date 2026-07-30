// Mock data for Saudi ERP system - all static, no API calls

export const products = [
  { id: 1, nameAr: 'آيفون 15 برو', nameEn: 'iPhone 15 Pro', sku: 'ELEC-001', barcode: '6281234567890', category: 'إلكترونيات', brand: 'Apple', sellPrice: 4299, costPrice: 3500, vat: 15, stock: 45, unit: 'قطعة', status: 'منشور', image: '/products/iphone.jpg' },
  { id: 2, nameAr: 'سماعات سوني WH-1000XM5', nameEn: 'Sony WH-1000XM5', sku: 'ELEC-002', barcode: '6281234567891', category: 'إلكترونيات', brand: 'Sony', sellPrice: 1299, costPrice: 980, vat: 15, stock: 28, unit: 'قطعة', status: 'منشور', image: '/products/headphones.jpg' },
  { id: 3, nameAr: 'ساعة أبل الترا', nameEn: 'Apple Watch Ultra', sku: 'ELEC-003', barcode: '6281234567892', category: 'إلكترونيات', brand: 'Apple', sellPrice: 3199, costPrice: 2600, vat: 15, stock: 18, unit: 'قطعة', status: 'منشور', image: '/products/watch.jpg' },
  { id: 4, nameAr: 'قهوة عربية فاخرة - 500جم', nameEn: 'Premium Arabic Coffee 500g', sku: 'FOOD-001', barcode: '6281234567893', category: 'مأكولات', brand: 'العميد', sellPrice: 89, costPrice: 52, vat: 15, stock: 120, unit: 'كيس', status: 'منشور', image: '/products/coffee.jpg' },
  { id: 5, nameAr: 'تمر خلاص فاخر - كيلو', nameEn: 'Premium Khalas Dates 1kg', sku: 'FOOD-002', barcode: '6281234567894', category: 'مأكولات', brand: 'القصيم', sellPrice: 125, costPrice: 75, vat: 15, stock: 85, unit: 'كيلو', status: 'منشور', image: '/products/dates.jpg' },
  { id: 6, nameAr: 'عسل سدر جبلي - 500جم', nameEn: 'Mountain Sidr Honey 500g', sku: 'FOOD-003', barcode: '6281234567895', category: 'مأكولات', brand: 'اليمن', sellPrice: 350, costPrice: 220, vat: 15, stock: 42, unit: 'علبة', status: 'منشور', image: '/products/honey.jpg' },
  { id: 7, nameAr: 'ثوب رجالي قطن - أبيض', nameEn: 'Cotton Thobe White', sku: 'FASH-001', barcode: '6281234567896', category: 'ملابس', brand: 'الثوب الخليجي', sellPrice: 280, costPrice: 160, vat: 15, stock: 65, unit: 'قطعة', status: 'منشور', image: '/products/thobe.jpg' },
  { id: 8, nameAr: 'شماغ أحمر قطني', nameEn: 'Red Cotton Shemagh', sku: 'FASH-002', barcode: '6281234567897', category: 'ملابس', brand: 'غتر الرياض', sellPrice: 95, costPrice: 55, vat: 15, stock: 92, unit: 'قطعة', status: 'منشور', image: '/products/shemagh.jpg' },
  { id: 9, nameAr: 'عطر عود ملكي - 100مل', nameEn: 'Royal Oud Perfume 100ml', sku: 'FASH-003', barcode: '6281234567898', category: 'عطور', brand: 'عبد الصمد القرشي', sellPrice: 580, costPrice: 380, vat: 15, stock: 34, unit: 'زجاجة', status: 'منشور', image: '/products/oud.jpg' },
  { id: 10, nameAr: 'باراسيتامول 500 ملجم', nameEn: 'Paracetamol 500mg', sku: 'PHAR-001', barcode: '6281234567899', category: 'صيدلية', brand: 'سبيماكو', sellPrice: 12, costPrice: 6, vat: 15, stock: 240, unit: 'علبة', status: 'منشور', image: '/products/medicine.jpg' },
  { id: 11, nameAr: 'فيتامين د 5000 وحدة', nameEn: 'Vitamin D 5000 IU', sku: 'PHAR-002', barcode: '6281234567800', category: 'صيدلية', brand: 'نيتشرز باونتي', sellPrice: 68, costPrice: 42, vat: 15, stock: 156, unit: 'علبة', status: 'منشور', image: '/products/vitamin.jpg' },
  { id: 12, nameAr: 'كمامات طبية - 50 قطعة', nameEn: 'Medical Masks 50pcs', sku: 'PHAR-003', barcode: '6281234567801', category: 'صيدلية', brand: 'ثري إم', sellPrice: 45, costPrice: 28, vat: 15, stock: 320, unit: 'علبة', status: 'منشور', image: '/products/masks.jpg' },
  { id: 13, nameAr: 'لابتوب ديل XPS 15', nameEn: 'Dell XPS 15 Laptop', sku: 'ELEC-004', barcode: '6281234567802', category: 'إلكترونيات', brand: 'Dell', sellPrice: 6899, costPrice: 5600, vat: 15, stock: 12, unit: 'قطعة', status: 'منشور', image: '/products/laptop.jpg' },
  { id: 14, nameAr: 'شاحن سريع 65 واط', nameEn: '65W Fast Charger', sku: 'ELEC-005', barcode: '6281234567803', category: 'إلكترونيات', brand: 'Anker', sellPrice: 185, costPrice: 115, vat: 15, stock: 78, unit: 'قطعة', status: 'منشور', image: '/products/charger.jpg' },
  { id: 15, nameAr: 'بن مختص محمص - 250جم', nameEn: 'Specialty Roasted Coffee 250g', sku: 'FOOD-004', barcode: '6281234567804', category: 'مأكولات', brand: 'بن محتار', sellPrice: 65, costPrice: 38, vat: 15, stock: 94, unit: 'كيس', status: 'منشور', image: '/products/beans.jpg' },
  { id: 16, nameAr: 'شاي أحمر سيلاني - 200جم', nameEn: 'Ceylon Black Tea 200g', sku: 'FOOD-005', barcode: '6281234567805', category: 'مأكولات', brand: 'دلما', sellPrice: 32, costPrice: 18, vat: 15, stock: 165, unit: 'علبة', status: 'منشور', image: '/products/tea.jpg' },
  { id: 17, nameAr: 'عباية نسائية مطرزة', nameEn: 'Embroidered Abaya', sku: 'FASH-004', barcode: '6281234567806', category: 'ملابس', brand: 'حياة مول', sellPrice: 425, costPrice: 250, vat: 15, stock: 38, unit: 'قطعة', status: 'منشور', image: '/products/abaya.jpg' },
  { id: 18, nameAr: 'حذاء رياضي نايكي', nameEn: 'Nike Sports Shoes', sku: 'FASH-005', barcode: '6281234567807', category: 'ملابس', brand: 'Nike', sellPrice: 489, costPrice: 320, vat: 15, stock: 52, unit: 'زوج', status: 'منشور', image: '/products/shoes.jpg' },
  { id: 19, nameAr: 'دهن عود مركز - 12مل', nameEn: 'Concentrated Oud Oil 12ml', sku: 'FASH-006', barcode: '6281234567808', category: 'عطور', brand: 'أجمل', sellPrice: 720, costPrice: 480, vat: 15, stock: 26, unit: 'زجاجة', status: 'منشور', image: '/products/oil.jpg' },
  { id: 20, nameAr: 'جهاز قياس ضغط رقمي', nameEn: 'Digital Blood Pressure Monitor', sku: 'PHAR-004', barcode: '6281234567809', category: 'صيدلية', brand: 'أومرون', sellPrice: 295, costPrice: 185, vat: 15, stock: 48, unit: 'قطعة', status: 'منشور', image: '/products/bp-monitor.jpg' },
  { id: 21, nameAr: 'لوحة مفاتيح ميكانيكية', nameEn: 'Mechanical Keyboard', sku: 'ELEC-006', barcode: '6281234567810', category: 'إلكترونيات', brand: 'Logitech', sellPrice: 549, costPrice: 380, vat: 15, stock: 31, unit: 'قطعة', status: 'منشور', image: '/products/keyboard.jpg' },
  { id: 22, nameAr: 'بخور كمبودي فاخر', nameEn: 'Premium Cambodian Incense', sku: 'FASH-007', barcode: '6281234567811', category: 'عطور', brand: 'الحرمين', sellPrice: 180, costPrice: 110, vat: 15, stock: 67, unit: 'علبة', status: 'منشور', image: '/products/incense.jpg' },
];

export const customers = [
  { id: 1, name: 'أحمد بن محمد العتيبي', phone: '+966-50-1234567', email: 'ahmed.m@email.sa', loyaltyPoints: 2847, tier: 'ذهبي', totalPurchases: 18450, lastVisit: '2024-03-15' },
  { id: 2, name: 'فاطمة عبدالله القحطاني', phone: '+966-55-2345678', email: 'fatimah.a@email.sa', loyaltyPoints: 4521, tier: 'بلاتيني', totalPurchases: 32180, lastVisit: '2024-03-17' },
  { id: 3, name: 'خالد سعد المطيري', phone: '+966-50-3456789', email: 'khaled.s@email.sa', loyaltyPoints: 892, tier: 'فضي', totalPurchases: 5640, lastVisit: '2024-03-14' },
  { id: 4, name: 'نورة فهد الدوسري', phone: '+966-54-4567890', email: 'noura.f@email.sa', loyaltyPoints: 1456, tier: 'فضي', totalPurchases: 9280, lastVisit: '2024-03-16' },
  { id: 5, name: 'عبدالرحمن علي الشمري', phone: '+966-56-5678901', email: 'abdulrahman.a@email.sa', loyaltyPoints: 3124, tier: 'ذهبي', totalPurchases: 22670, lastVisit: '2024-03-18' },
  { id: 6, name: 'سارة حسن الغامدي', phone: '+966-50-6789012', email: 'sarah.h@email.sa', loyaltyPoints: 567, tier: 'برونزي', totalPurchases: 3450, lastVisit: '2024-03-12' },
  { id: 7, name: 'محمد عبدالعزيز السبيعي', phone: '+966-55-7890123', email: 'mohammed.a@email.sa', loyaltyPoints: 5892, tier: 'بلاتيني', totalPurchases: 41250, lastVisit: '2024-03-18' },
  { id: 8, name: 'ريم ناصر الحربي', phone: '+966-54-8901234', email: 'reem.n@email.sa', loyaltyPoints: 1847, tier: 'ذهبي', totalPurchases: 12380, lastVisit: '2024-03-17' },
  { id: 9, name: 'سلطان صالح العنزي', phone: '+966-50-9012345', email: 'sultan.s@email.sa', loyaltyPoints: 421, tier: 'برونزي', totalPurchases: 2840, lastVisit: '2024-03-11' },
  { id: 10, name: 'منى راشد الزهراني', phone: '+966-56-0123456', email: 'mona.r@email.sa', loyaltyPoints: 2156, tier: 'ذهبي', totalPurchases: 14920, lastVisit: '2024-03-16' },
];

export const posTransactions = [
  { id: 'FAT-00001', date: '2024-03-18 14:32', customer: 'أحمد بن محمد العتيبي', cashier: 'ليلى أحمد', branch: 'الفرع الرئيسي', paymentMethod: 'مدى', subtotal: 4299, vat: 644.85, total: 4943.85, status: 'مكتمل', items: [{ product: 'آيفون 15 برو', qty: 1, price: 4299 }] },
  { id: 'FAT-00002', date: '2024-03-18 13:15', customer: 'فاطمة عبدالله القحطاني', cashier: 'ليلى أحمد', branch: 'الفرع الرئيسي', paymentMethod: 'نقدي', subtotal: 2009, vat: 301.35, total: 2310.35, status: 'مكتمل', items: [{ product: 'سماعات سوني WH-1000XM5', qty: 1, price: 1299 }, { product: 'عطر عود ملكي - 100مل', qty: 1, price: 580 }, { product: 'قهوة عربية فاخرة - 500جم', qty: 1, price: 89 }, { product: 'تمر خلاص فاخر - كيلو', qty: 1, price: 41 }] },
  { id: 'FAT-00003', date: '2024-03-18 12:48', customer: 'عميل عابر', cashier: 'ليلى أحمد', branch: 'الفرع الرئيسي', paymentMethod: 'بطاقة ائتمان', subtotal: 280, vat: 42, total: 322, status: 'مكتمل', items: [{ product: 'ثوب رجالي قطن - أبيض', qty: 1, price: 280 }] },
  { id: 'FAT-00004', date: '2024-03-18 11:22', customer: 'خالد سعد المطيري', cashier: 'حسن محمد', branch: 'فرع الملقا', paymentMethod: 'STC Pay', subtotal: 1844, vat: 276.6, total: 2120.6, status: 'مكتمل', items: [{ product: 'شماغ أحمر قطني', qty: 2, price: 95 }, { product: 'لابتوب ديل XPS 15', qty: 1, price: 1654 }] },
  { id: 'FAT-00005', date: '2024-03-18 10:05', customer: 'نورة فهد الدوسري', cashier: 'حسن محمد', branch: 'فرع الملقا', paymentMethod: 'مدى', subtotal: 850, vat: 127.5, total: 977.5, status: 'مكتمل', items: [{ product: 'عباية نسائية مطرزة', qty: 2, price: 425 }] },
  { id: 'FAT-00006', date: '2024-03-17 16:45', customer: 'عبدالرحمن علي الشمري', cashier: 'ليلى أحمد', branch: 'الفرع الرئيسي', paymentMethod: 'نقدي', subtotal: 3199, vat: 479.85, total: 3678.85, status: 'مكتمل', items: [{ product: 'ساعة أبل الترا', qty: 1, price: 3199 }] },
  { id: 'FAT-00007', date: '2024-03-17 15:30', customer: 'سارة حسن الغامدي', cashier: 'ليلى أحمد', branch: 'الفرع الرئيسي', paymentMethod: 'Apple Pay', subtotal: 545, vat: 81.75, total: 626.75, status: 'مكتمل', items: [{ product: 'عسل سدر جبلي - 500جم', qty: 1, price: 350 }, { product: 'شاحن سريع 65 واط', qty: 1, price: 185 }, { product: 'بخور كمبودي فاخر', qty: 1, price: 10 }] },
  { id: 'FAT-00008', date: '2024-03-17 14:12', customer: 'محمد عبدالعزيز السبيعي', cashier: 'أمل سعيد', branch: 'فرع العليا', paymentMethod: 'مدى', subtotal: 1769, vat: 265.35, total: 2034.35, status: 'مكتمل', items: [{ product: 'دهن عود مركز - 12مل', qty: 1, price: 720 }, { product: 'لوحة مفاتيح ميكانيكية', qty: 1, price: 549 }, { product: 'حذاء رياضي نايكي', qty: 1, price: 489 }, { product: 'باراسيتامول 500 ملجم', qty: 1, price: 11 }] },
  { id: 'FAT-00009', date: '2024-03-17 13:28', customer: 'ريم ناصر الحربي', cashier: 'أمل سعيد', branch: 'فرع العليا', paymentMethod: 'نقدي', subtotal: 489, vat: 73.35, total: 562.35, status: 'مكتمل', items: [{ product: 'حذاء رياضي نايكي', qty: 1, price: 489 }] },
  { id: 'FAT-00010', date: '2024-03-17 12:05', customer: 'سلطان صالح العنزي', cashier: 'حسن محمد', branch: 'فرع الملقا', paymentMethod: 'بطاقة ائتمان', subtotal: 380, vat: 57, total: 437, status: 'مكتمل', items: [{ product: 'فيتامين د 5000 وحدة', qty: 2, price: 68 }, { product: 'جهاز قياس ضغط رقمي', qty: 1, price: 244 }] },
  { id: 'FAT-00011', date: '2024-03-16 17:20', customer: 'منى راشد الزهراني', cashier: 'ليلى أحمد', branch: 'الفرع الرئيسي', paymentMethod: 'STC Pay', subtotal: 864, vat: 129.6, total: 993.6, status: 'مكتمل', items: [{ product: 'بن مختص محمص - 250جم', qty: 3, price: 65 }, { product: 'شاي أحمر سيلاني - 200جم', qty: 4, price: 32 }, { product: 'كمامات طبية - 50 قطعة', qty: 5, price: 45 }, { product: 'تمر خلاص فاخر - كيلو', qty: 2, price: 125 }, { product: 'قهوة عربية فاخرة - 500جم', qty: 3, price: 89 }] },
  { id: 'FAT-00012', date: '2024-03-16 16:35', customer: 'أحمد بن محمد العتيبي', cashier: 'ليلى أحمد', branch: 'الفرع الرئيسي', paymentMethod: 'مدى', subtotal: 549, vat: 82.35, total: 631.35, status: 'مكتمل', items: [{ product: 'لوحة مفاتيح ميكانيكية', qty: 1, price: 549 }] },
  { id: 'FAT-00013', date: '2024-03-16 15:18', customer: 'فاطمة عبدالله القحطاني', cashier: 'أمل سعيد', branch: 'فرع العليا', paymentMethod: 'نقدي', subtotal: 6899, vat: 1034.85, total: 7933.85, status: 'مكتمل', items: [{ product: 'لابتوب ديل XPS 15', qty: 1, price: 6899 }] },
  { id: 'FAT-00014', date: '2024-03-15 14:42', customer: 'خالد سعد المطيري', cashier: 'حسن محمد', branch: 'فرع الملقا', paymentMethod: 'Apple Pay', subtotal: 1140, vat: 171, total: 1311, status: 'مكتمل', items: [{ product: 'عطر عود ملكي - 100مل', qty: 1, price: 580 }, { product: 'ثوب رجالي قطن - أبيض', qty: 2, price: 280 }] },
  { id: 'FAT-00015', date: '2024-03-15 13:55', customer: 'عميل عابر', cashier: 'ليلى أحمد', branch: 'الفرع الرئيسي', paymentMethod: 'نقدي', subtotal: 214, vat: 32.1, total: 246.1, status: 'مكتمل', items: [{ product: 'قهوة عربية فاخرة - 500جم', qty: 1, price: 89 }, { product: 'تمر خلاص فاخر - كيلو', qty: 1, price: 125 }] },
];

export const shifts = [
  { id: 1, cashier: 'ليلى أحمد', branch: 'الفرع الرئيسي', openedAt: '2024-03-18 08:00', closedAt: null, openingCash: 1000, currentCash: 8247.45, status: 'مفتوح', transactions: 12, expectedCash: 8247.45 },
  { id: 2, cashier: 'حسن محمد', branch: 'فرع الملقا', openedAt: '2024-03-18 08:00', closedAt: null, openingCash: 1000, currentCash: 6821.30, status: 'مفتوح', transactions: 9, expectedCash: 6821.30 },
  { id: 3, cashier: 'أمل سعيد', branch: 'فرع العليا', openedAt: '2024-03-18 08:30', closedAt: null, openingCash: 1000, currentCash: 4589.75, status: 'مفتوح', transactions: 7, expectedCash: 4589.75 },
  { id: 4, cashier: 'ليلى أحمد', branch: 'الفرع الرئيسي', openedAt: '2024-03-17 08:00', closedAt: '2024-03-17 17:00', openingCash: 1000, currentCash: 14567.20, status: 'مغلق', transactions: 28, expectedCash: 14567.20 },
  { id: 5, cashier: 'حسن محمد', branch: 'فرع الملقا', openedAt: '2024-03-17 08:00', closedAt: '2024-03-17 17:00', openingCash: 1000, currentCash: 11234.85, status: 'مغلق', transactions: 22, expectedCash: 11234.85 },
];

export const onlineOrders = [
  { id: 'ORD-00001', date: '2024-03-18 09:42', customer: 'أحمد بن محمد العتيبي', email: 'ahmed.m@email.sa', phone: '+966-50-1234567', items: 3, subtotal: 4868, vat: 730.2, total: 5598.2, shippingMethod: 'Aramex', paymentMethod: 'مدى', status: 'قيد الشحن', trackingNumber: 'AMX8421753690' },
  { id: 'ORD-00002', date: '2024-03-18 08:15', customer: 'فاطمة عبدالله القحطاني', email: 'fatimah.a@email.sa', phone: '+966-55-2345678', items: 1, subtotal: 6899, vat: 1034.85, total: 7933.85, shippingMethod: 'SMSA', paymentMethod: 'Tabby', status: 'قيد التحضير', trackingNumber: null },
  { id: 'ORD-00003', date: '2024-03-17 22:38', customer: 'خالد سعد المطيري', email: 'khaled.s@email.sa', phone: '+966-50-3456789', items: 5, subtotal: 847, vat: 127.05, total: 974.05, shippingMethod: 'DHL', paymentMethod: 'بطاقة ائتمان', status: 'مكتمل', trackingNumber: 'DHL9624815730' },
  { id: 'ORD-00004', date: '2024-03-17 20:12', customer: 'نورة فهد الدوسري', email: 'noura.f@email.sa', phone: '+966-54-4567890', items: 2, subtotal: 850, vat: 127.5, total: 977.5, shippingMethod: 'J&T', paymentMethod: 'STC Pay', status: 'مكتمل', trackingNumber: 'JNT4582109637' },
  { id: 'ORD-00005', date: '2024-03-17 18:45', customer: 'عبدالرحمن علي الشمري', email: 'abdulrahman.a@email.sa', phone: '+966-56-5678901', items: 1, subtotal: 3199, vat: 479.85, total: 3678.85, shippingMethod: 'SPL', paymentMethod: 'Tamara', status: 'مؤكد', trackingNumber: null },
  { id: 'ORD-00006', date: '2024-03-17 17:22', customer: 'سارة حسن الغامدي', email: 'sarah.h@email.sa', phone: '+966-50-6789012', items: 4, subtotal: 628, vat: 94.2, total: 722.2, shippingMethod: 'Aramex', paymentMethod: 'Apple Pay', status: 'ملغي', trackingNumber: null },
  { id: 'ORD-00007', date: '2024-03-17 15:08', customer: 'محمد عبدالعزيز السبيعي', email: 'mohammed.a@email.sa', phone: '+966-55-7890123', items: 6, subtotal: 2547, vat: 382.05, total: 2929.05, shippingMethod: 'SMSA', paymentMethod: 'مدى', status: 'مكتمل', trackingNumber: 'SMSA7531908426' },
  { id: 'ORD-00008', date: '2024-03-17 14:35', customer: 'ريم ناصر الحربي', email: 'reem.n@email.sa', phone: '+966-54-8901234', items: 2, subtotal: 1209, vat: 181.35, total: 1390.35, shippingMethod: 'DHL', paymentMethod: 'بطاقة ائتمان', status: 'قيد الشحن', trackingNumber: 'DHL8259374106' },
  { id: 'ORD-00009', date: '2024-03-16 21:47', customer: 'سلطان صالح العنزي', email: 'sultan.s@email.sa', phone: '+966-50-9012345', items: 3, subtotal: 734, vat: 110.1, total: 844.1, shippingMethod: 'J&T', paymentMethod: 'STC Pay', status: 'مكتمل', trackingNumber: 'JNT9518263740' },
  { id: 'ORD-00010', date: '2024-03-16 19:28', customer: 'منى راشد الزهراني', email: 'mona.r@email.sa', phone: '+966-56-0123456', items: 1, subtotal: 489, vat: 73.35, total: 562.35, shippingMethod: 'Aramex', paymentMethod: 'Tabby', status: 'مكتمل', trackingNumber: 'AMX3698147250' },
  { id: 'ORD-00011', date: '2024-03-16 16:55', customer: 'أحمد بن محمد العتيبي', email: 'ahmed.m@email.sa', phone: '+966-50-1234567', items: 2, subtotal: 1444, vat: 216.6, total: 1660.6, shippingMethod: 'SMSA', paymentMethod: 'مدى', status: 'قيد التحضير', trackingNumber: null },
  { id: 'ORD-00012', date: '2024-03-16 14:20', customer: 'فاطمة عبدالله القحطاني', email: 'fatimah.a@email.sa', phone: '+966-55-2345678', items: 4, subtotal: 1154, vat: 173.1, total: 1327.1, shippingMethod: 'DHL', paymentMethod: 'Apple Pay', status: 'معلق', trackingNumber: null },
  { id: 'ORD-00013', date: '2024-03-15 20:38', customer: 'خالد سعد المطيري', email: 'khaled.s@email.sa', phone: '+966-50-3456789', items: 1, subtotal: 280, vat: 42, total: 322, shippingMethod: 'J&T', paymentMethod: 'بطاقة ائتمان', status: 'مكتمل', trackingNumber: 'JNT7418529630' },
  { id: 'ORD-00014', date: '2024-03-15 18:12', customer: 'نورة فهد الدوسري', email: 'noura.f@email.sa', phone: '+966-54-4567890', items: 3, subtotal: 1029, vat: 154.35, total: 1183.35, shippingMethod: 'SPL', paymentMethod: 'STC Pay', status: 'مكتمل', trackingNumber: 'SPL5926418370' },
  { id: 'ORD-00015', date: '2024-03-15 16:45', customer: 'عبدالرحمن علي الشمري', email: 'abdulrahman.a@email.sa', phone: '+966-56-5678901', items: 2, subtotal: 1829, vat: 274.35, total: 2103.35, shippingMethod: 'Aramex', paymentMethod: 'Tamara', status: 'قيد الشحن', trackingNumber: 'AMX1593847260' },
  { id: 'ORD-00016', date: '2024-03-14 22:30', customer: 'سارة حسن الغامدي', email: 'sarah.h@email.sa', phone: '+966-50-6789012', items: 5, subtotal: 567, vat: 85.05, total: 652.05, shippingMethod: 'SMSA', paymentMethod: 'مدى', status: 'مكتمل', trackingNumber: 'SMSA2847519360' },
  { id: 'ORD-00017', date: '2024-03-14 19:58', customer: 'محمد عبدالعزيز السبيعي', email: 'mohammed.a@email.sa', phone: '+966-55-7890123', items: 1, subtotal: 4299, vat: 644.85, total: 4943.85, shippingMethod: 'DHL', paymentMethod: 'بطاقة ائتمان', status: 'مسترجع', trackingNumber: 'DHL4827195630' },
  { id: 'ORD-00018', date: '2024-03-14 17:24', customer: 'ريم ناصر الحربي', email: 'reem.n@email.sa', phone: '+966-54-8901234', items: 2, subtotal: 905, vat: 135.75, total: 1040.75, shippingMethod: 'J&T', paymentMethod: 'Tabby', status: 'مكتمل', trackingNumber: 'JNT6149287530' },
  { id: 'ORD-00019', date: '2024-03-13 21:15', customer: 'سلطان صالح العنزي', email: 'sultan.s@email.sa', phone: '+966-50-9012345', items: 4, subtotal: 1438, vat: 215.7, total: 1653.7, shippingMethod: 'Aramex', paymentMethod: 'Apple Pay', status: 'مكتمل', trackingNumber: 'AMX9517382460' },
  { id: 'ORD-00020', date: '2024-03-13 18:42', customer: 'منى راشد الزهراني', email: 'mona.r@email.sa', phone: '+966-56-0123456', items: 3, subtotal: 2078, vat: 311.7, total: 2389.7, shippingMethod: 'SMSA', paymentMethod: 'STC Pay', status: 'مكتمل', trackingNumber: 'SMSA3751928460' },
];

export const categories = [
  { id: 1, nameAr: 'إلكترونيات', nameEn: 'Electronics', parent: null, productCount: 8, active: true },
  { id: 2, nameAr: 'مأكولات', nameEn: 'Food', parent: null, productCount: 5, active: true },
  { id: 3, nameAr: 'ملابس', nameEn: 'Fashion', parent: null, productCount: 4, active: true },
  { id: 4, nameAr: 'عطور', nameEn: 'Perfumes', parent: null, productCount: 3, active: true },
  { id: 5, nameAr: 'صيدلية', nameEn: 'Pharmacy', parent: null, productCount: 4, active: true },
];

export const brands = [
  { id: 1, nameAr: 'أبل', nameEn: 'Apple', productCount: 3, active: true },
  { id: 2, nameAr: 'سوني', nameEn: 'Sony', productCount: 1, active: true },
  { id: 3, nameAr: 'العميد', nameEn: 'Al Ameed', productCount: 1, active: true },
  { id: 4, nameAr: 'القصيم', nameEn: 'Al Qassim', productCount: 1, active: true },
  { id: 5, nameAr: 'عبد الصمد القرشي', nameEn: 'Abdul Samad Al Qurashi', productCount: 1, active: true },
  { id: 6, nameAr: 'نايكي', nameEn: 'Nike', productCount: 1, active: true },
];

export const loyaltyTiers = [
  { id: 1, name: 'برونزي', minPoints: 0, earnMultiplier: 1, benefits: ['نقطة لكل 10 ريال', 'عروض حصرية شهرية'] },
  { id: 2, name: 'فضي', minPoints: 1000, earnMultiplier: 1.25, benefits: ['نقطة لكل 8 ريال', 'عروض حصرية أسبوعية', 'شحن مجاني'] },
  { id: 3, name: 'ذهبي', minPoints: 3000, earnMultiplier: 1.5, benefits: ['نقطة لكل 6 ريال', 'عروض حصرية يومية', 'شحن مجاني', 'خصم 5%'] },
  { id: 4, name: 'بلاتيني', minPoints: 5000, earnMultiplier: 2, benefits: ['نقطة لكل 5 ريال', 'عروض VIP', 'شحن مجاني', 'خصم 10%', 'دعم مخصص'] },
];

export const branches = [
  { id: 1, nameAr: 'الفرع الرئيسي', nameEn: 'Main Branch', city: 'الرياض', address: 'طريق الملك فهد، حي الملز', phone: '+966-11-4567890', active: true },
  { id: 2, nameAr: 'فرع الملقا', nameEn: 'Malqa Branch', city: 'الرياض', address: 'طريق الملك عبدالعزيز، حي الملقا', phone: '+966-11-4567891', active: true },
  { id: 3, nameAr: 'فرع العليا', nameEn: 'Olaya Branch', city: 'الرياض', address: 'شارع العليا، برج الفيصلية', phone: '+966-11-4567892', active: true },
];

export const paymentMethods = [
  { id: 1, nameAr: 'نقدي', nameEn: 'Cash', enabled: true, icon: 'banknote' },
  { id: 2, nameAr: 'مدى', nameEn: 'Mada', enabled: true, icon: 'credit-card' },
  { id: 3, nameAr: 'بطاقة ائتمان', nameEn: 'Credit Card', enabled: true, icon: 'credit-card' },
  { id: 4, nameAr: 'STC Pay', nameEn: 'STC Pay', enabled: true, icon: 'smartphone' },
  { id: 5, nameAr: 'Apple Pay', nameEn: 'Apple Pay', enabled: true, icon: 'smartphone' },
  { id: 6, nameAr: 'محفظة رقمية', nameEn: 'Digital Wallet', enabled: true, icon: 'wallet' },
];
