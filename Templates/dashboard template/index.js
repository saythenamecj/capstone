Orders.forEach(order=>{
    const tr = document.createElement('tr');
    const trContent = '
        <td>${order.ProductName}</td>
        <td>${order.productNumber}</td>
        <td>${order.PaymentStatus}</td>
        <td class>"${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning': 'primary'}"> ${order.Status}</td>
        <td>${order.ProductName}</td>
    '
})