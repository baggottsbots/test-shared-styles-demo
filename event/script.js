// ===== TICKET PURCHASE HANDLER =====
    // Purpose: Send buyer details to the platform payment flow for early-bird tickets.
    document.getElementById('buyForm').addEventListener('submit', function (e) {
      e.preventDefault();
      window.__processPayment({
        amountCents: 14900,
        email: document.getElementById('buyerEmail').value,
        productName: 'NetHub2026 Early-Bird Ticket',
        productDescription: 'Two-day community networking conference',
        name: document.getElementById('buyerName').value,
        quantity: 1
      });
    });