// ==========================================
// GESTIÓN DEL CARRITO Y LÓGICA DE LA TIENDA
// ==========================================
let carrito = JSON.parse(localStorage.getItem("tabla_carrito")) || [];

document.addEventListener("DOMContentLoaded", () => {
    actualizarBadgeCarrito();

    // Si estamos en index.html, cargar productos destacados
    if (document.getElementById("grid-destacados")) {
        const destacados = obtenerProductos().filter(p => p.destacado);
        renderizarTarjetas(destacados, "grid-destacados");
    }

    // Si estamos en catalogo.html, cargar filtros y todos los productos
    if (document.getElementById("grid-catalogo")) {
        renderizarBotonesFiltro();
        renderizarTarjetas(obtenerProductos(), "grid-catalogo");
    }

    // Si estamos en carrito.html, cargar carrito e historial de pedidos
    if (document.getElementById("lista-carrito-pagina")) {
        renderizarPaginaCarrito();
        renderizarHistorialPedidos();
    }
});

// ==========================================
// RENDERIZADO DE PRODUCTOS Y FILTROS
// ==========================================
function renderizarTarjetas(listaProductos, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return;

    contenedor.innerHTML = "";

    listaProductos.forEach(prod => {
        const sinStock = prod.stock <= 0;
        const card = document.createElement("div");
        card.className = "tarjeta";
        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <div class="tarjeta-info">
                <span class="categoria-tag">${prod.categoria_nombre} • Disponibles: ${prod.stock}</span>
                <h3>${prod.nombre}</h3>
                <p class="precio">$${prod.precio.toFixed(2)} MXN</p>
                <button class="btn-agregar" onclick="agregarAlCarrito(${prod.id})" ${sinStock ? "disabled" : ""}>
                    ${sinStock ? "Agotado" : "Agregar al Carrito"}
                </button>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

function renderizarBotonesFiltro() {
    const contenedorFiltros = document.getElementById("contenedor-filtros");
    if (!contenedorFiltros) return;

    const categorias = obtenerCategorias();
    let html = `<button class="filtro-btn activo" onclick="filtrarPorCategoria(0, this)">Todos</button>`;

    categorias.forEach(cat => {
        html += `<button class="filtro-btn" onclick="filtrarPorCategoria(${cat.id}, this)">${cat.nombre}</button>`;
    });

    contenedorFiltros.innerHTML = html;
}

function filtrarPorCategoria(categoriaId, boton) {
    document.querySelectorAll(".filtro-btn").forEach(btn => btn.classList.remove("activo"));
    boton.classList.add("activo");

    const todos = obtenerProductos();
    if (categoriaId === 0) {
        renderizarTarjetas(todos, "grid-catalogo");
    } else {
        const filtrados = todos.filter(p => p.categoria_id === categoriaId);
        renderizarTarjetas(filtrados, "grid-catalogo");
    }
}

// ==========================================
// FUNCIONES DEL CARRITO (AGREGAR, SUMAR, RESTAR)
// ==========================================
function agregarAlCarrito(idProducto) {
    const productos = obtenerProductos();
    const producto = productos.find(p => p.id === idProducto);

    if (!producto || producto.stock <= 0) {
        alert("Producto sin existencias.");
        return;
    }

    const itemEnCarrito = carrito.find(item => item.id === idProducto);

    if (itemEnCarrito) {
        if (itemEnCarrito.cantidad < producto.stock) {
            itemEnCarrito.cantidad++;
        } else {
            alert("Has alcanzado el máximo de piezas disponibles para este producto.");
            return;
        }
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }

    guardarCarrito();
    alert(`"${producto.nombre}" se agregó al carrito.`);
}

function cambiarCantidad(idProducto, cambio) {
    const productos = obtenerProductos();
    const prodBD = productos.find(p => p.id === idProducto);
    const item = carrito.find(i => i.id === idProducto);

    if (!item) return;

    const nuevaCantidad = item.cantidad + cambio;

    if (nuevaCantidad <= 0) {
        eliminarDelCarrito(idProducto);
        return;
    }

    if (prodBD && nuevaCantidad > prodBD.stock) {
        alert("No hay más piezas disponibles en inventario.");
        return;
    }

    item.cantidad = nuevaCantidad;
    guardarCarrito();
    renderizarPaginaCarrito();
}

function eliminarDelCarrito(idProducto) {
    carrito = carrito.filter(item => item.id !== idProducto);
    guardarCarrito();
    renderizarPaginaCarrito();
}

function guardarCarrito() {
    localStorage.setItem("tabla_carrito", JSON.stringify(carrito));
    actualizarBadgeCarrito();
}

function actualizarBadgeCarrito() {
    const badges = document.querySelectorAll("#contador-carrito");
    const totalPiezas = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    badges.forEach(b => b.textContent = totalPiezas);
}

// ==========================================
// PÁGINA DE CARRITO, CHECKOUT WHATSAPP E HISTORIAL
// ==========================================
function renderizarPaginaCarrito() {
    const contenedor = document.getElementById("lista-carrito-pagina");
    const totalEl = document.getElementById("total-pagar");
    if (!contenedor || !totalEl) return;

    if (carrito.length === 0) {
        contenedor.innerHTML = `<p style="color:#64748b; padding: 1rem 0;">Tu carrito está vacío. Ve al catálogo para agregar accesorios.</p>`;
        totalEl.textContent = "0.00";
        return;
    }

    contenedor.innerHTML = "";
    let total = 0;

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;

        const div = document.createElement("div");
        div.className = "item-carrito";
        div.innerHTML = `
            <div>
                <strong>${item.nombre}</strong><br>
                <small>$${item.precio.toFixed(2)} c/u — Subtotal: <b>$${subtotal.toFixed(2)}</b></small>
            </div>
            <div class="controles-cantidad">
                <button class="btn-cant" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                <span>${item.cantidad}</span>
                <button class="btn-cant" onclick="cambiarCantidad(${item.id}, 1)">+</button>
                <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
            </div>
        `;
        contenedor.appendChild(div);
    });

    totalEl.textContent = total.toFixed(2);
}

function procesarPedidoWhatsApp(evento) {
    evento.preventDefault();

    if (carrito.length === 0) {
        alert("Agrega al menos un accesorio al carrito antes de hacer el pedido.");
        return;
    }

    const cliente = document.getElementById("cliente-nombre").value.trim();
    const direccion = document.getElementById("cliente-direccion").value.trim();
    const metodoPago = document.getElementById("cliente-pago").value;

    let total = 0;
    let detalleTexto = "";
    let resumenProductos = [];

    carrito.forEach(item => {
        const sub = item.precio * item.cantidad;
        total += sub;
        detalleTexto += `• ${item.cantidad}x ${item.nombre} ($${sub.toFixed(2)})\n`;
        resumenProductos.push(`${item.cantidad}x ${item.nombre}`);
    });

    // 1. Descontar stock en la tabla 'productos'
    let productosBD = JSON.parse(localStorage.getItem("tabla_productos")) || [];
    carrito.forEach(item => {
        const index = productosBD.findIndex(p => p.id === item.id);
        if (index !== -1) {
            productosBD[index].stock = Math.max(0, productosBD[index].stock - item.cantidad);
        }
    });
    localStorage.setItem("tabla_productos", JSON.stringify(productosBD));

    // 2. Guardar el registro en el historial de pedidos
    const pedidosBD = obtenerPedidos();
    const nuevoPedido = {
        folio: "PED-" + Math.floor(1000 + Math.random() * 9000),
        fecha: new Date().toLocaleDateString("es-MX"),
        cliente: cliente,
        productos: resumenProductos.join(", "),
        total: total.toFixed(2),
        pago: metodoPago
    };
    pedidosBD.unshift(nuevoPedido);
    localStorage.setItem("tabla_pedidos", JSON.stringify(pedidosBD));

    // 3. Construir mensaje y abrir WhatsApp
    const mensaje = `Hola *Aura Accesorios*, quiero realizar el siguiente pedido:\n\n` +
                    `*Folio:* ${nuevoPedido.folio}\n` +
                    `*Cliente:* ${cliente}\n` +
                    `*Entrega / Dirección:* ${direccion}\n` +
                    `*Método de Pago:* ${metodoPago}\n\n` +
                    `*Productos:*\n${detalleTexto}\n` +
                    `*TOTAL A PAGAR: $${total.toFixed(2)} MXN*`;

    const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

    // Limpiar carrito y actualizar vistas
    carrito = [];
    guardarCarrito();
    renderizarPaginaCarrito();
    renderizarHistorialPedidos();

    window.open(urlWhatsApp, "_blank");
}

function renderizarHistorialPedidos() {
    const tbody = document.getElementById("tbody-pedidos");
    if (!tbody) return;

    const pedidos = obtenerPedidos();
    if (pedidos.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#64748b;">Aún no has realizado ningún pedido.</td></tr>`;
        return;
    }

    tbody.innerHTML = pedidos.map(p => `
        <tr>
            <td><strong>${p.folio}</strong></td>
            <td>${p.fecha}</td>
            <td>${p.cliente}</td>
            <td>${p.productos}</td>
            <td><strong>$${p.total} MXN</strong></td>
        </tr>
    `).join("");
}