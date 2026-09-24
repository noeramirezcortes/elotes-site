// Don Elote Application - Alpine.js Component
function eloteApp() {
    return {
        // Product catalog
        products: [
            {
                id: 1,
                name: 'Elote Tradicional',
                description: 'Elote clásico con mayonesa, crema, queso y chile',
                basePrice: 25
            },
            {
                id: 2,
                name: 'Elote Esquites',
                description: 'Elote desgranado en vaso con caldo de limón',
                basePrice: 30
            },
            {
                id: 3,
                name: 'Elote Dorado',
                description: 'Elote asado con mantequilla y queso parmesano',
                basePrice: 35
            },
            {
                id: 4,
                name: 'Elote Supreme',
                description: 'Elote con todos los ingredientes adicionales',
                basePrice: 40
            }
        ],

        // Size options with price modifiers
        sizes: [
            { id: 'chico', name: 'Chico', modifier: 0.8 },
            { id: 'mediano', name: 'Mediano', modifier: 1.0 },
            { id: 'grande', name: 'Grande', modifier: 1.3 }
        ],

        // Additional ingredients
        ingredients: [
            { id: 'mayonesa', name: 'Mayonesa', price: 3 },
            { id: 'crema', name: 'Crema', price: 3 },
            { id: 'queso', name: 'Queso', price: 5 },
            { id: 'chile', name: 'Chile', price: 2 },
            { id: 'limon', name: 'Limón', price: 1 },
            { id: 'mantequilla', name: 'Mantequilla', price: 4 },
            { id: 'cilantro', name: 'Cilantro', price: 2 },
            { id: 'tostada', name: 'Tostada', price: 3 }
        ],

        // State management
        selectedSizes: {},
        selectedIngredients: {},
        cart: [],

        // Initialize default selections
        init() {
            this.products.forEach(product => {
                this.selectedSizes[product.id] = 'mediano';
                this.selectedIngredients[product.id] = [];
            });
        },

        // Select size for a product
        selectSize(productId, sizeId) {
            this.selectedSizes[productId] = sizeId;
        },

        // Toggle ingredient selection
        toggleIngredient(productId, ingredientId) {
            if (!this.selectedIngredients[productId]) {
                this.selectedIngredients[productId] = [];
            }
            
            const index = this.selectedIngredients[productId].indexOf(ingredientId);
            if (index > -1) {
                this.selectedIngredients[productId].splice(index, 1);
            } else {
                this.selectedIngredients[productId].push(ingredientId);
            }
        },

        // Add item to cart
        addToCart(product) {
            const size = this.sizes.find(s => s.id === this.selectedSizes[product.id]);
            const selectedIngredientIds = this.selectedIngredients[product.id] || [];
            const selectedIngredients = this.ingredients.filter(i => 
                selectedIngredientIds.includes(i.id)
            );

            // Calculate item total
            const basePrice = product.basePrice * size.modifier;
            const ingredientsPrice = selectedIngredients.reduce((sum, ing) => sum + ing.price, 0);
            const total = basePrice + ingredientsPrice;

            this.cart.push({
                product: product,
                size: size,
                ingredients: selectedIngredients,
                total: total
            });

            // Reset selections for this product
            this.selectedIngredients[product.id] = [];
        },

        // Remove item from cart
        removeFromCart(index) {
            this.cart.splice(index, 1);
        },

        // Calculate cart total
        calculateTotal() {
            return this.cart.reduce((sum, item) => sum + item.total, 0);
        },

        // Send order via WhatsApp
        sendWhatsAppOrder() {
            if (this.cart.length === 0) {
                alert('Tu carrito está vacío');
                return;
            }

            // WhatsApp business number (replace with actual number)
            const whatsappNumber = '5215555555555'; // Format: country code + number

            // Build order message
            let message = '🌽 *PEDIDO DON ELOTE*\n\n';
            
            this.cart.forEach((item, index) => {
                message += `${index + 1}. ${item.product.name}\n`;
                message += `   Tamaño: ${item.size.name}\n`;
                
                if (item.ingredients.length > 0) {
                    message += `   Ingredientes: ${item.ingredients.map(i => i.name).join(', ')}\n`;
                }
                
                message += `   Precio: $${item.total.toFixed(2)}\n\n`;
            });

            const total = this.calculateTotal();
            message += `💰 *TOTAL: $${total.toFixed(2)}*\n\n`;
            message += '📍 Dirección de entrega:\n';
            message += '⏰ Hora deseada:\n';
            message += '📞 Teléfono de contacto:\n\n';
            message += '¡Gracias por tu pedido! 🌽';

            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);
            
            // Open WhatsApp
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        }
    };
}
