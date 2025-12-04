-- ===============================
-- SCHEMA: E-Commerce Database
-- ===============================

-- 1. USERS TABLE
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  category_id INT REFERENCES categories(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  description TEXT,
  base_price NUMERIC(10,2) NOT NULL CHECK (base_price >= 0),
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. ATTRIBUTES TABLE
CREATE TABLE IF NOT EXISTS attributes (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. PRODUCT_VARIANTS TABLE
CREATE TABLE IF NOT EXISTS product_variants (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  sku TEXT UNIQUE NOT NULL,
  price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. VARIANT_ATTRIBUTES TABLE
CREATE TABLE IF NOT EXISTS variant_attributes (
  id SERIAL PRIMARY KEY,
  variant_id INT REFERENCES product_variants(id) ON DELETE CASCADE,
  attribute_id INT REFERENCES attributes(id) ON DELETE CASCADE,
  value TEXT NOT NULL,
  UNIQUE (variant_id, attribute_id)
);

-- 7. INVENTORY TABLE
CREATE TABLE IF NOT EXISTS inventory (
  id SERIAL PRIMARY KEY,
  variant_id INT UNIQUE REFERENCES product_variants(id) ON DELETE CASCADE,
  quantity INT DEFAULT 0 CHECK (quantity >= 0),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. ORDERS TABLE
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  total_amount NUMERIC(10,2) NOT NULL CHECK (total_amount >= 0),
  shipping_address TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. ORDER_ITEMS TABLE
CREATE TABLE IF NOT EXISTS order_items (
  id SERIAL PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  variant_id INT REFERENCES product_variants(id) ON DELETE SET NULL,
  quantity INT NOT NULL CHECK (quantity > 0),
  price_at_purchase NUMERIC(10,2) NOT NULL CHECK (price_at_purchase >= 0)
);

-- ===============================
-- INDEXES (Performance Boost)
-- ===============================
CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_variants_product_id ON product_variants(product_id);
CREATE INDEX IF NOT EXISTS idx_variant_attributes_variant_id ON variant_attributes(variant_id);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
