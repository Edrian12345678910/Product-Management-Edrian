import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, categories, selectedCategory, onCategoryChange, onOpenAddModal, onSelectProduct }) {
  return (
    <section>
      {/* HEADER WITH CONTROLS DIRECTLY ON THE RIGHT */}
      <div className="list-header-controls" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h2 className="section-title" style={{ margin: 0 }}>Product List</h2>
        
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <select 
            value={selectedCategory} 
            onChange={(e) => onCategoryChange(e.target.value)}
            className="category-select"
            style={{
              backgroundColor: '#2a2a2a',
              color: '#fff',
              border: '1px solid #3d3d3d',
              padding: '8px 12px',
              borderRadius: '6px',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <button 
            className="btn-brown" 
            onClick={onOpenAddModal}
            style={{
              backgroundColor: '#b45309',
              color: '#ffffff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            + Add New
          </button>
        </div>
      </div>

      <div className="products-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelect={onSelectProduct} 
            />
          ))
        ) : (
          <p style={{ color: 'var(--text-muted)', gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0' }}>
            No coffee products found.
          </p>
        )}
      </div>
    </section>
  );
}

export default ProductList;